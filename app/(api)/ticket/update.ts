// app/pages/api/tickets/update.ts

import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../modules/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    try {
      const { id } = req.query;
      const {
        title,
        description,
        category,
        priority,
        progress,
        status,
        active,
      } = req.body;
      const updatedTicket = await db.ticket.update({
        where: { id: Number(id as string) },
        data: {
          title,
          description,
          category,
          priority,
          progress,
          status,
          active,
        },
      });
      res.status(200).json(updatedTicket);
    } catch (error) {
      console.error("Error updating ticket:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
