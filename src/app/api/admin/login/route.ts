import { NextRequest } from "next/server";
import { createLoginResponse } from "@/lib/adminAuth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({})) as { password?: string };
    const password = typeof body.password === "string" ? body.password : "";
    return await createLoginResponse(password);
  } catch {
    return await createLoginResponse("");
  }
}
