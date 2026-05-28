import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_TO = "info@seasonsezon.co.jp";
const FROM = "セゾン お問い合わせ通知 <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // DBに保存
    await prisma.contactMessage.create({ data: { ...body, isRead: false } });

    // メール通知（APIキーがある場合のみ送信）
    if (process.env.RESEND_API_KEY) {
      const {
        name = "",
        companyName = "",
        email = "",
        phone = "",
        message = "",
        service = "",
        consultationType = "",
      } = body;

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
        この通知は <strong>株式会社セゾン</strong> のウェブサイトから自動送信されています。<br>
        管理画面: <a href="https://saison-corp.vercel.app/admin" style="color: #CC2222;">管理画面を開く</a>
      </p>
    </div>
  </div>
</body>
</html>`;

      await resend.emails.send({
        from: FROM,
        to: NOTIFY_TO,
        subject,
        html,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 12px; background: #f9f9f9; border: 1px solid #eee; font-weight: bold; color: #555; width: 140px; white-space: nowrap;">${label}</td>
      <td style="padding: 10px 12px; border: 1px solid #eee; color: #222;">${value}</td>
    </tr>`;
}
