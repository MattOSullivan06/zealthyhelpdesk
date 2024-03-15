import { NextResponse } from "next/server";
import db from "@/modules/db";

export async function GET() {
  const tickets = await db.ticket.findMany();
  return NextResponse.json({ tickets });
}
