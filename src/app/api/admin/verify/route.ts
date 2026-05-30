import { NextRequest } from "next/server";
import { isAdminAuthenticated, unauthorizedResponse } from "@/lib/adminAuth";
import { NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  if (!isAdminAuthenticated(req)) return unauthorizedResponse();
  return NextResponse.json({ ok: true });
}
