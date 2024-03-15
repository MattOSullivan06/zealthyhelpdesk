import { NextResponse } from "next/server";
import db from "@/modules/db";
type Params = {
  id: string;
};
export async function GET(request: Request, context: { params: Params }) {
  const id = context.params.id;
  const ticket = await db.ticket.findUnique({
    where: {
      id,
    },
  });
  return NextResponse.json({ ticket });
}

export async function PUT(request: Request, context: { params: Params }) {
  const id = context.params.id;
  const body = await request.json();
  const ticket = await db.ticket.update({
    where: {
      id,
    },
    data: body,
  });
  return NextResponse.json({ ticket });
}
