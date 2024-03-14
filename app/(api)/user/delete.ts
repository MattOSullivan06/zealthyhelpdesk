// app/pages/api/users/delete.ts

import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../modules/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    try {
      const { userId } = req.query;
      await db.user.delete({
        where: {
          id: userId as string,
        },
      });
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
