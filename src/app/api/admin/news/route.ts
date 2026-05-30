import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthenticated, unauthorizedResponse } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  if (!await isAdminAuthenticated(req)) return unauthorizedResponse();

  const news = await prisma.news.findMany({ orderBy: { publishedAt: "desc" } });
  return NextResponse.json(news);
}

export async function POST(req: NextRequest) {
  if (!await isAdminAuthenticated(req)) return unauthorizedResponse();

  const body = await req.json();
  const created = await prisma.news.create({ data: body });
  return NextResponse.json(created);
}

export async function PATCH(req: NextRequest) {
  if (!await isAdminAuthenticated(req)) return unauthorizedResponse();

  const body = await req.json();
  const { id, ...data } = body as { id: number; [key: string]: unknown };

  if (typeof id !== "number") {
    return NextResponse.json({ error: "不正なリクエスト" }, { status: 400 });
  }

  const updated = await prisma.news.update({ where: { id }, data });
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  if (!await isAdminAuthenticated(req)) return unauthorizedResponse();

  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));

  if (!id || isNaN(id)) {
    return NextResponse.json({ error: "不正なリクエスト" }, { status: 400 });
  }

  const deleted = await prisma.news.delete({ where: { id } });
  return NextResponse.json(deleted);
}
