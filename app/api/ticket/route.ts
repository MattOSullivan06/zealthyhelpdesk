import { NextResponse } from "next/server";
import db from "@/modules/db";



export async function POST(request: Request) {
  const body = await request.json();
  const ticket = await db.ticket.create({
    data: {
      firstName: body.firstName,
      lastName: body.lastName,
      status: body.status,
      email: body.email,
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json({ id: ticket.id });
}
