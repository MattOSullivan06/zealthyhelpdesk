// app/pages/api/users/create.ts

import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../modules/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { id, username, email, password } = req.body;
      const newUser = await db.user.create({
        data: {
          username,
          email,
          password,
        },
      });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
