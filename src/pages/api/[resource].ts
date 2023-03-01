// /api/[resource].ts <= catch all resource requests
import type { NextApiRequest, NextApiResponse } from 'next';
import { defaultHandler } from 'ra-data-simple-prisma';
import { PrismaClientConnect } from '@/prisma/prismadb';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  defaultHandler(req, res, PrismaClientConnect);
}
