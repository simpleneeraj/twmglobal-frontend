// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '@/network/mongo';
import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db('test');
    const results = await db.collection('results').findOneAndDelete(req.body);

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error });
  }
}

export default handler;
