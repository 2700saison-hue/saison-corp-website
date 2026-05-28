import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const news = await prisma.news.findMany({ orderBy: { publishedAt: "desc" } });
  return NextResponse.json(news);
}

export async function POST(req: Request) {
  const body = await req.json();
  const created = await prisma.news.create({ data: body });
  return NextResponse.json(created);
}

export async function PATCH(req: Request) {
  const body = await req.json();
  const { id, ...data } = body as { id: number; [key: string]: unknown };
  const updated = await prisma.news.update({ where: { id }, data });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));
  const deleted = await prisma.news.delete({ where: { id } });
  return NextResponse.json(deleted);
}
