import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthenticated, unauthorizedResponse } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  if (!await isAdminAuthenticated(req)) return unauthorizedResponse();

  const contacts = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(contacts);
}

export async function PATCH(req: NextRequest) {
  if (!await isAdminAuthenticated(req)) return unauthorizedResponse();

  const body = await req.json();
  const { id, isRead } = body as { id: number; isRead: boolean };

  if (typeof id !== "number" || typeof isRead !== "boolean") {
    return NextResponse.json({ error: "不正なリクエスト" }, { status: 400 });
  }

  const updated = await prisma.contactMessage.update({
    where: { id },
    data: { isRead },
  });
  return NextResponse.json(updated);
}
