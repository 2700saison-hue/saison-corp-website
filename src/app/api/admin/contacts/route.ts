import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const contacts = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(contacts);
}

export async function PATCH(req: Request) {
  const body = await req.json();
  const { id, isRead } = body as { id: number; isRead: boolean };
  const updated = await prisma.contactMessage.update({
    where: { id },
    data: { isRead },
  });
  return NextResponse.json(updated);
}
