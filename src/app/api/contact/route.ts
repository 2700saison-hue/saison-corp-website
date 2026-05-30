import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_TO = "info@seasonsezon.co.jp";
const FROM = "セゾン お問い合わせ通知 <onboarding@resend.dev>";

// ── レート制限（IPごとに1時間5回まで） ──────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1時間

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

// ── HTML エスケープ ─────────────────────────────────────────
function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ── 文字列のトリムと最大長チェック ─────────────────────────
function sanitizeStr(value: unknown, maxLen: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

// ── バリデーション ──────────────────────────────────────────
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[\d\-\+\(\)\s]*$/;

// 許可するフィールドのみ（マスアサインメント防止）
const ALLOWED_FIELDS = [
  "name", "companyName", "email", "phone",
  "service", "consultationType", "message",
  "position", "challenge", "budget", "contactPref",
] as const;
type AllowedField = (typeof ALLOWED_FIELDS)[number];

export async function POST(req: NextRequest) {
  try {
    // ── IP取得・レート制限 ───────────────────────────────────
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: "送信回数が上限を超えました。しばらく後にお試しください。" },
        { status: 429 }
      );
    }

    // ── JSON解析 ────────────────────────────────────────────
    let rawBody: Record<string, unknown>;
    try {
      rawBody = await req.json();
    } catch {
      return NextResponse.json({ ok: false, error: "リクエストが不正です" }, { status: 400 });
    }

    // ── フィールドホワイトリスト（許可フィールドのみ抽出） ────
    const body: Partial<Record<AllowedField, string>> = {};
    for (const field of ALLOWED_FIELDS) {
      const val = sanitizeStr(rawBody[field], 2000);
      if (val) body[field] = val;
    }

    // ── 必須フィールドチェック ───────────────────────────────
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ ok: false, error: "必須項目が不足しています" }, { status: 400 });
    }

    // ── 各フィールドバリデーション ───────────────────────────
    if (!EMAIL_REGEX.test(body.email)) {
      return NextResponse.json(
        { ok: false, error: "メールアドレスの形式が正しくありません" },
        { status: 400 }
      );
    }
    if (body.name.length < 1 || body.name.length > 100) {
      return NextResponse.json({ ok: false, error: "お名前は1〜100文字で入力してください" }, { status: 400 });
    }
    if (body.message.length < 1) {
      return NextResponse.json({ ok: false, error: "メッセージを入力してください" }, { status: 400 });
    }
    if (body.phone && !PHONE_REGEX.test(body.phone)) {
      return NextResponse.json({ ok: false, error: "電話番号の形式が正しくありません" }, { status: 400 });
    }

    // ── DB保存（ホワイトリスト済みフィールドのみ） ───────────
    // バリデーション済みのため name/email/message は必ず存在する
    await prisma.contactMessage.create({
      data: {
        name: body.name as string,
        email: body.email as string,
        message: body.message as string,
        companyName: body.companyName ?? "",   // スキーマ上 required のためデフォルト空文字
        phone: body.phone,
        service: body.service ?? body.consultationType, // consultationType はスキーマ外→service に格納
        position: body.position,
        challenge: body.challenge,
        budget: body.budget,
        contactPref: body.contactPref,
        isRead: false,
      },
    });

    // ── メール通知 ───────────────────────────────────────────
    if (process.env.RESEND_API_KEY) {
      const name = escapeHtml(body.name ?? "");
      const companyName = escapeHtml(body.companyName ?? "");
      const email = escapeHtml(body.email ?? "");
      const phone = escapeHtml(body.phone ?? "");
      const message = escapeHtml(body.message ?? "");
      const service = escapeHtml(body.service ?? "");
      const consultationType = escapeHtml(body.consultationType ?? "");

      const subject = companyName
        ? `【新規お問い合わせ】${companyName} / ${name} 様`
        : `【新規お問い合わせ】${name} 様`;

      const html = `
<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8" /></head>
<body style="font-family: sans-serif; background: #f5f5f5; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0;">
    <div style="background: #CC2222; padding: 20px 28px;">
      <p style="color: #fff; font-size: 12px; letter-spacing: 0.2em; margin: 0 0 4px; opacity: 0.8;">SAISON CORP.</p>
      <h1 style="color: #fff; font-size: 20px; margin: 0;">新規お問い合わせが届きました</h1>
    </div>
    <div style="padding: 28px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        ${row("お名前", name)}
        ${row("会社名", companyName || "—")}
        ${row("メールアドレス", `<a href="mailto:${email}" style="color: #CC2222;">${email}</a>`)}
        ${row("電話番号", phone || "—")}
        ${row("ご相談種別", consultationType || service || "—")}
        ${row("メッセージ", message ? message.replace(/\n/g, "<br>") : "—")}
      </table>
    </div>
    <div style="background: #f9f9f9; padding: 16px 28px; border-top: 1px solid #eee;">
      <p style="font-size: 12px; color: #888; margin: 0;">
        この通知は <strong>株式会社セゾン</strong> のウェブサイトから自動送信されています。
      </p>
    </div>
  </div>
</body>
</html>`;

      await resend.emails.send({ from: FROM, to: NOTIFY_TO, subject, html });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error:", err);
    // 詳細なエラー情報は外部に漏らさない
    return NextResponse.json({ ok: false, error: "送信に失敗しました。時間をおいて再度お試しください。" }, { status: 500 });
  }
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 12px; background: #f9f9f9; border: 1px solid #eee; font-weight: bold; color: #555; width: 140px; white-space: nowrap;">${label}</td>
      <td style="padding: 10px 12px; border: 1px solid #eee; color: #222;">${value}</td>
    </tr>`;
}
