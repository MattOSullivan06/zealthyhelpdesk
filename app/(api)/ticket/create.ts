// app/pages/api/tickets/create.ts

import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../modules/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { title, description, status } = req.body;
      const newTicket = await db.ticket.create({
        data: {
          title,
          description,
          status,
        },
      });
      res.status(201).json(newTicket);
    } catch (error) {
      console.error('Error creating ticket:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
