import { NextRequest } from "next/server";
import {
  isAdminAuthenticated,
  unauthorizedResponse,
  savePasswordToDb,
  createCookieResponse,
} from "@/lib/adminAuth";

export async function POST(req: NextRequest) {
  if (!await isAdminAuthenticated(req)) return unauthorizedResponse();

  let body: { newPassword?: string; confirmPassword?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "リクエストが不正です" }, { status: 400 });
  }

  const { newPassword, confirmPassword } = body;

  if (!newPassword || typeof newPassword !== "string") {
    return Response.json({ ok: false, error: "新しいパスワードを入力してください" }, { status: 400 });
  }
  if (newPassword.length < 8) {
    return Response.json({ ok: false, error: "パスワードは8文字以上で設定してください" }, { status: 400 });
  }
  if (newPassword !== confirmPassword) {
    return Response.json({ ok: false, error: "確認用パスワードが一致しません" }, { status: 400 });
  }

  const newHash = await savePasswordToDb(newPassword);

  // 新しいパスワードハッシュでcookieを更新（再ログイン不要）
  return createCookieResponse(newHash);
}
