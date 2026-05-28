import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const cases = await prisma.case.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json(cases);
}
