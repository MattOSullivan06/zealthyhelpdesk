// app/pages/api/users/update.ts

import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../modules/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    try {
      const { userId } = req.query;
      const { username, email, password } = req.body;
      const updatedUser = await db.user.update({
        where: {
          id: userId as string,
        },
        data: {
          username,
          email,
          password,
        },
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
