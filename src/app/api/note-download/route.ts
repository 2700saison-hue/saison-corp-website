import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_NOTIFY = "株式会社セゾン 資料請求通知 <noreply@seasonsezon.co.jp>";
const FROM_REPLY = "株式会社セゾン <noreply@seasonsezon.co.jp>";
// info@ 宛が受信側で止まる事象を実測したため、控えとして Gmail にも同報する
const NOTIFY_TO = (process.env.NOTIFY_EMAIL ?? "info@seasonsezon.co.jp,2700saison@gmail.com")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean)
  .concat("2700saison@gmail.com")
  .filter((v, i, a) => a.indexOf(v) === i);
const BASE_URL = "https://seasonsezon.co.jp";

// note記事のシリーズ（どの系統の記事から来たかを記録する）
const SOURCE_LABELS: Record<string, string> = {
  data: "note / 数字を全部出す運用記録",
  fail: "note / うまくいかなかった話",
  industry: "note / 建設・介護のSNS採用",
  other: "note / AI・その他",
  direct: "note / 経路不明（直接アクセス）",
};

// ── レート制限（IPごとに1時間5回まで） ──────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

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

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeStr(value: unknown, maxLen: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

const FILES = [
  {
    title: "SNS運用 月次レポートテンプレート",
    links: [
      ["PDF", "/documents/note/saison-monthly-report-template.pdf"],
      ["CSV一式", "/documents/note/saison-monthly-report-csv.zip"],
    ],
  },
  {
    title: "採用SNS立ち上げチェックリスト30項目",
    links: [["PDF", "/documents/note/saison-recruit-sns-checklist.pdf"]],
  },
  {
    title: "投稿カレンダー 年間テンプレート",
    links: [
      ["PDF", "/documents/note/saison-post-calendar.pdf"],
      ["CSV一式", "/documents/note/saison-post-calendar-csv.zip"],
    ],
  },
];

export async function POST(req: NextRequest) {
  try {
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

    let rawBody: Record<string, unknown>;
    try {
      rawBody = await req.json();
    } catch {
      return NextResponse.json({ ok: false, error: "リクエストが不正です" }, { status: 400 });
    }

    const companyName = sanitizeStr(rawBody.companyName, 200);
    const email = sanitizeStr(rawBody.email, 200);
    const rawSource = sanitizeStr(rawBody.source, 20);
    const source = Object.prototype.hasOwnProperty.call(SOURCE_LABELS, rawSource)
      ? rawSource
      : "direct";

    if (!companyName || !email) {
      return NextResponse.json({ ok: false, error: "必須項目が不足しています" }, { status: 400 });
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { ok: false, error: "メールアドレスの形式が正しくありません" },
        { status: 400 }
      );
    }

    const sourceLabel = SOURCE_LABELS[source];

    // ── DB保存（既存のお問い合わせ台帳に相乗り。失敗してもメールは継続） ──
    try {
      await prisma.contactMessage.create({
        data: {
          companyName,
          name: "（note資料請求のためお名前は未取得）",
          email,
          service: "note読者向け資料請求",
          challenge: sourceLabel,
          message: `note記事からの資料請求です。流入元: ${sourceLabel}`,
          isRead: false,
        },
      });
    } catch (dbErr) {
      console.error("[note-download] DB save failed (non-fatal):", dbErr);
    }

    // ── メール送信 ───────────────────────────────────────────
    if (process.env.RESEND_API_KEY) {
      const safeCompany = escapeHtml(companyName);
      const safeEmail = escapeHtml(email);
      const safeSource = escapeHtml(sourceLabel);

      // 1) セゾン側への通知
      const notifyHtml = `
<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8" /></head>
<body style="font-family: sans-serif; background: #f5f5f5; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0;">
    <div style="background: #CC2222; padding: 20px 28px;">
      <p style="color: #fff; font-size: 12px; letter-spacing: 0.2em; margin: 0 0 4px; opacity: 0.8;">SAISON CORP.</p>
      <h1 style="color: #fff; font-size: 20px; margin: 0;">note読者から資料請求がありました</h1>
    </div>
    <div style="padding: 28px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        ${row("会社名", safeCompany)}
        ${row("メールアドレス", `<a href="mailto:${safeEmail}" style="color: #CC2222;">${safeEmail}</a>`)}
        ${row("流入元", safeSource)}
      </table>
      <p style="font-size: 13px; color: #666; line-height: 1.8; margin: 20px 0 0;">
        ※ note読者向けの軽い受け口のため、お名前・電話番号・ご予算は取得していません。
      </p>
    </div>
  </div>
</body>
</html>`;

      const { error: notifyError } = await resend.emails.send({
        from: FROM_NOTIFY,
        to: NOTIFY_TO,
        replyTo: email,
        subject: `【note資料請求】${companyName}`,
        html: notifyHtml,
      });
      if (notifyError) {
        console.error("[note-download] 通知メール送信失敗:", notifyError);
      }

      // 2) お客様への資料送付メール（1通目・即時）
      const fileRows = FILES.map(
        (f) => `
        <div style="margin-bottom: 18px;">
          <p style="font-size: 14px; font-weight: bold; color: #222; margin: 0 0 6px;">${f.title}</p>
          ${f.links
            .map(
              ([label, href]) =>
                `<a href="${BASE_URL}${href}" style="display: inline-block; font-size: 13px; color: #CC2222; margin-right: 14px;">▶ ${label}をダウンロード</a>`
            )
            .join("")}
        </div>`
      ).join("");

      const replyHtml = `
<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8" /></head>
<body style="font-family: sans-serif; background: #f5f5f5; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0;">
    <div style="background: #CC2222; padding: 20px 28px;">
      <p style="color: #fff; font-size: 12px; letter-spacing: 0.2em; margin: 0 0 4px; opacity: 0.8;">SAISON CORP.</p>
      <h1 style="color: #fff; font-size: 20px; margin: 0;">資料をお送りします</h1>
    </div>
    <div style="padding: 28px;">
      <p style="font-size: 15px; color: #333; line-height: 1.8; margin: 0 0 20px;">
        ${safeCompany} ご担当者様<br><br>
        noteをお読みいただき、ありがとうございます。<br>
        記事でご紹介した資料は、下のリンクからいつでもダウンロードいただけます。
      </p>
      <div style="background: #f9f9f9; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
        ${fileRows}
      </div>
      <p style="font-size: 14px; color: #333; line-height: 1.8; margin: 0 0 20px;">
        月次レポートは、まず「保存率」「プロフィール遷移率」「問い合わせ数」の3つだけ
        埋めてみてください。ここが埋まると、他の数字は見なくても判断できるようになります。
      </p>
      <p style="font-size: 13px; color: #666; line-height: 1.8; margin: 0;">
        ご不明な点があれば、このメールにそのままご返信ください。<br>
        お急ぎの場合は <a href="tel:090-1251-6837" style="color: #CC2222;">090-1251-6837</a> までお電話ください。
      </p>
    </div>
    <div style="background: #141414; padding: 20px 28px;">
      <p style="color: #fff; font-size: 13px; font-weight: bold; margin: 0 0 6px;">株式会社セゾン</p>
      <p style="color: rgba(255,255,255,0.6); font-size: 12px; margin: 0; line-height: 1.6;">
        info@seasonsezon.co.jp / 090-1251-6837<br>
        <a href="${BASE_URL}" style="color: rgba(255,255,255,0.6);">${BASE_URL}</a>
      </p>
    </div>
  </div>
</body>
</html>`;

      const { error: replyError } = await resend.emails.send({
        from: FROM_REPLY,
        to: email,
        subject: "【株式会社セゾン】ご請求の資料3点をお送りします",
        html: replyHtml,
      });
      if (replyError) {
        console.error("[note-download] 資料送付メール送信失敗:", replyError);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[note-download] error:", err);
    return NextResponse.json(
      { ok: false, error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 }
    );
  }
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 12px; background: #f9f9f9; border: 1px solid #eee; font-weight: bold; color: #555; width: 140px; white-space: nowrap;">${label}</td>
      <td style="padding: 10px 12px; border: 1px solid #eee; color: #222;">${value}</td>
    </tr>`;
}
