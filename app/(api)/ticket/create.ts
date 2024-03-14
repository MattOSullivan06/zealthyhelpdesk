// app/pages/api/tickets/create.ts

import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../modules/db';
import { Ticket } from '@prisma/client'; // Import the Ticket model from Prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { id, title, description } = req.body; // Assuming title and description are provided in the request body
      const newTicket = await db.ticket.create({ // Use db.ticket.create to create a new Ticket
        data: {
          title,
          description,
          status
        },
      });
      res.status(201).json(newTicket); // Return the created Ticket object as JSON
    } catch (error) {
      console.error('Error creating ticket:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
