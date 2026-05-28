import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const cases = await prisma.case.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json(cases);
}

export async function POST(req: Request) {
  const body = await req.json();
  const created = await prisma.case.create({ data: body });
  return NextResponse.json(created);
}
