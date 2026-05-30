import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

export const ADMIN_COOKIE = "saison_admin_session";
const COOKIE_MAX_AGE = 60 * 60 * 8; // 8時間

/** タイミング攻撃を防ぐ定数時間比較 */
function timingSafeEqual(a: string, b: string): boolean {
  try {
    const bufA = Buffer.from(a, "utf-8");
    const bufB = Buffer.from(b, "utf-8");
    if (bufA.length !== bufB.length) {
      crypto.timingSafeEqual(bufA, bufA);
      return false;
    }
    return crypto.timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

/** DBに保存されたパスワードハッシュ情報を取得 */
async function getStoredPassword(): Promise<{ salt: string; hash: string } | null> {
  try {
    const [saltRow, hashRow] = await Promise.all([
      prisma.adminSettings.findUnique({ where: { key: "adminPasswordSalt" } }),
      prisma.adminSettings.findUnique({ where: { key: "adminPasswordHash" } }),
    ]);
    if (saltRow && hashRow) {
      return { salt: saltRow.value, hash: hashRow.value };
    }
  } catch {
    // DB未初期化時などはフォールバック
  }
  return null;
}

/** パスワードをPBKDF2でハッシュ化 */
export function hashPassword(password: string): { salt: string; hash: string } {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 100000, 32, "sha256").toString("hex");
  return { salt, hash };
}

/** 新しいパスワードをDBに保存してcookie値を返す */
export async function savePasswordToDb(password: string): Promise<string> {
  const { salt, hash } = hashPassword(password);
  await Promise.all([
    prisma.adminSettings.upsert({
      where: { key: "adminPasswordSalt" },
      update: { value: salt },
      create: { key: "adminPasswordSalt", value: salt },
    }),
    prisma.adminSettings.upsert({
      where: { key: "adminPasswordHash" },
      update: { value: hash },
      create: { key: "adminPasswordHash", value: hash },
    }),
  ]);
  return hash;
}

/** cookieをセットするヘルパー */
function setCookie(res: NextResponse, value: string): void {
  res.cookies.set(ADMIN_COOKIE, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });
}

/** リクエストのcookieをチェックして認証済みかどうかを返す */
export async function isAdminAuthenticated(req: NextRequest): Promise<boolean> {
  const cookie = req.cookies.get(ADMIN_COOKIE)?.value ?? "";
  if (!cookie) return false;

  const stored = await getStoredPassword();
  if (stored) {
    // DBパスワードが設定されている場合: cookie === hash
    return timingSafeEqual(cookie, stored.hash);
  }

  // フォールバック: env var との比較
  const secret = process.env.ADMIN_API_SECRET;
  if (!secret) return false;
  return timingSafeEqual(cookie, secret);
}

/** パスワードを検証してcookieをセットしたレスポンスを返す */
export async function createLoginResponse(password: string): Promise<NextResponse> {
  const stored = await getStoredPassword();

  let cookieValue: string;

  if (stored) {
    // DBパスワードで検証
    const inputHash = crypto
      .pbkdf2Sync(password, stored.salt, 100000, 32, "sha256")
      .toString("hex");
    if (!timingSafeEqual(inputHash, stored.hash)) {
      return NextResponse.json({ ok: false, error: "認証失敗" }, { status: 401 });
    }
    cookieValue = stored.hash;
  } else {
    // env var で検証
    const secret = process.env.ADMIN_API_SECRET;
    if (!secret || !timingSafeEqual(password, secret)) {
      return NextResponse.json({ ok: false, error: "認証失敗" }, { status: 401 });
    }
    cookieValue = secret;
  }

  const res = NextResponse.json({ ok: true });
  setCookie(res, cookieValue);
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

/** 新しいcookieをセットしたレスポンスを作成（パスワード変更後の再ログイン用） */
export function createCookieResponse(hash: string): NextResponse {
  const res = NextResponse.json({ ok: true });
  setCookie(res, hash);
  return res;
}
