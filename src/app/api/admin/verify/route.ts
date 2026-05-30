import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated, unauthorizedResponse } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  if (!await isAdminAuthenticated(req)) return unauthorizedResponse();
  return NextResponse.json({ ok: true });
}
