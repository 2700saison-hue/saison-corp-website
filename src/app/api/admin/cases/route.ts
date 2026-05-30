import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthenticated, unauthorizedResponse } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  if (!isAdminAuthenticated(req)) return unauthorizedResponse();

  const cases = await prisma.case.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json(cases);
}

export async function POST(req: NextRequest) {
  if (!isAdminAuthenticated(req)) return unauthorizedResponse();

  const body = await req.json();
  const created = await prisma.case.create({ data: body });
  return NextResponse.json(created);
}
