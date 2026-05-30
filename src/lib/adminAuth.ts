import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const ADMIN_COOKIE = "saison_admin_session";
const COOKIE_MAX_AGE = 60 * 60 * 8; // 8時間

/** タイミング攻撃を防ぐ定数時間比較 */
function timingSafeEqual(a: string, b: string): boolean {
  try {
    const bufA = Buffer.from(a, "utf-8");
    const bufB = Buffer.from(b, "utf-8");
    if (bufA.length !== bufB.length) {
      // 長さが違っても同じ時間をかけるためダミー比較
      crypto.timingSafeEqual(bufA, bufA);
      return false;
    }
    return crypto.timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

/** リクエストのcookieをチェックして認証済みかどうかを返す */
export function isAdminAuthenticated(req: NextRequest): boolean {
  const secret = process.env.ADMIN_API_SECRET;
  if (!secret) return false;

  const cookie = req.cookies.get(ADMIN_COOKIE)?.value ?? "";
  return timingSafeEqual(cookie, secret);
}

/** パスワードを検証してcookieをセットしたレスポンスを返す */
export function createLoginResponse(password: string): NextResponse {
  const secret = process.env.ADMIN_API_SECRET;
  if (!secret || !timingSafeEqual(password, secret)) {
    return NextResponse.json({ ok: false, error: "認証失敗" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });
  return res;
}

/** ログアウト用レスポンス（cookieを削除） */
export function createLogoutResponse(): NextResponse {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });
  return res;
}

/** 未認証レスポンス */
export function unauthorizedResponse(): NextResponse {
  return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
}
