import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── メール設定 ────────────────────────────────────────────────
// seasonsezon.co.jp ドメインは Resend で認証済み → 任意アドレスへ送信可能
const FROM_NOTIFY  = "株式会社セゾン お問い合わせ通知 <noreply@seasonsezon.co.jp>";
const FROM_REPLY   = "株式会社セゾン <noreply@seasonsezon.co.jp>";
const NOTIFY_TO    = process.env.NOTIFY_EMAIL ?? "info@seasonsezon.co.jp";

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

    // ── DB保存（失敗してもメール通知は継続） ──────────────────
    try {
      await prisma.contactMessage.create({
        data: {
          name: body.name as string,
          email: body.email as string,
          message: body.message as string,
          companyName: body.companyName ?? "",
          phone: body.phone,
          service: body.service ?? body.consultationType,
          position: body.position,
          challenge: body.challenge,
          budget: body.budget,
          contactPref: body.contactPref,
          isRead: false,
        },
      });
    } catch (dbErr) {
      console.error("[contact] DB save failed (non-fatal):", dbErr);
    }

    // ── メール送信（RESEND_API_KEY が設定されている場合のみ） ─
    if (process.env.RESEND_API_KEY) {
      const name           = escapeHtml(body.name ?? "");
      const companyName    = escapeHtml(body.companyName ?? "");
      const email          = escapeHtml(body.email ?? "");
      const phone          = escapeHtml(body.phone ?? "");
      const message        = escapeHtml(body.message ?? "");
      const service        = escapeHtml(body.service ?? body.consultationType ?? "");

      const notifySubject = companyName
        ? `【新規お問い合わせ】${companyName} / ${name} 様`
        : `【新規お問い合わせ】${name} 様`;

      // ─── 1) セゾン側への通知メール ──────────────────────────
      const notifyHtml = `
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
        ${row("ご相談種別", service || "—")}
        ${row("メッセージ", message ? message.replace(/\n/g, "<br>") : "—")}
      </table>
    </div>
    <div style="background: #f9f9f9; padding: 16px 28px; border-top: 1px solid #eee;">
      <p style="font-size: 12px; color: #888; margin: 0;">
        この通知は <strong>株式会社セゾン</strong> のウェブサイトから自動送信されています。<br>
        <a href="mailto:${email}" style="color: #CC2222;">↩ ${email} へ返信する</a>
      </p>
    </div>
  </div>
</body>
</html>`;

      const { error: notifyError } = await resend.emails.send({
        from: FROM_NOTIFY,
        to: NOTIFY_TO,
        replyTo: body.email,
        subject: notifySubject,
        html: notifyHtml,
      });
      if (notifyError) {
        console.error("[contact] 通知メール送信失敗:", notifyError);
      }

      // ─── 2) お客様への自動返信メール ────────────────────────
      const replySubject = `【株式会社セゾン】お問い合わせを受け付けました`;
      const replyHtml = `
<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8" /></head>
<body style="font-family: sans-serif; background: #f5f5f5; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0;">
    <div style="background: #CC2222; padding: 20px 28px;">
      <p style="color: #fff; font-size: 12px; letter-spacing: 0.2em; margin: 0 0 4px; opacity: 0.8;">SAISON CORP.</p>
      <h1 style="color: #fff; font-size: 20px; margin: 0;">お問い合わせを受け付けました</h1>
    </div>
    <div style="padding: 28px;">
      <p style="font-size: 15px; color: #333; line-height: 1.8; margin: 0 0 20px;">
        ${name} 様<br><br>
        この度は株式会社セゾンへお問い合わせいただき、誠にありがとうございます。<br>
        以下の内容でお問い合わせを受け付けました。<br>
        担当者より <strong>48時間以内</strong> にご連絡いたします。しばらくお待ちください。
      </p>
      <div style="background: #f9f9f9; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
        <p style="font-size: 12px; font-weight: bold; color: #888; margin: 0 0 12px; letter-spacing: 0.1em;">━ お問い合わせ内容</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          ${row("お名前", name)}
          ${row("会社名", companyName || "—")}
          ${row("メールアドレス", email)}
          ${row("電話番号", phone || "—")}
          ${row("ご相談種別", service || "—")}
          ${row("メッセージ", message ? message.replace(/\n/g, "<br>") : "—")}
        </table>
      </div>
      <p style="font-size: 13px; color: #666; line-height: 1.8; margin: 0;">
        ※ このメールは自動送信されています。このメールへの返信はできません。<br>
        ※ お急ぎの場合は <a href="tel:090-1251-6837" style="color: #CC2222;">090-1251-6837</a> までお電話ください。
      </p>
    </div>
    <div style="background: #141414; padding: 20px 28px;">
      <p style="color: #fff; font-size: 13px; font-weight: bold; margin: 0 0 6px;">株式会社セゾン</p>
      <p style="color: rgba(255,255,255,0.6); font-size: 12px; margin: 0; line-height: 1.6;">
        📧 info@seasonsezon.co.jp<br>
        📞 090-1251-6837<br>
        🌐 <a href="https://saison-corp-website.vercel.app" style="color: rgba(255,255,255,0.6);">saison-corp-website.vercel.app</a>
      </p>
    </div>
  </div>
</body>
</html>`;

      const { error: replyError } = await resend.emails.send({
        from: FROM_REPLY,
        to: body.email,
        subject: replySubject,
        html: replyHtml,
      });
      if (replyError) {
        console.error("[contact] 自動返信メール送信失敗:", replyError);
      }
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
