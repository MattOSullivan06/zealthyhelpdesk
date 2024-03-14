// app/pages/api/tickets/delete.ts

import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../modules/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      await db.ticket.delete({ where: { id: Number(id as string) } });
      res.status(204).end();
    } catch (error) {
      console.error('Error deleting ticket:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
