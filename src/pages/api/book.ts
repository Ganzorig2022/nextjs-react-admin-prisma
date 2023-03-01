import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClientConnect } from '@/prisma/prismadb';
import {
  defaultHandler,
  getListHandler,
  GetListRequest,
  createHandler,
  GetOneRequest,
  getOneHandler,
  updateHandler,
  getManyHandler,
} from 'ra-data-simple-prisma';
import { Prisma } from '@prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('API method', req.body.method);
  switch (req.body.method) {
    case 'create':
      return await createHandler(req, res, PrismaClientConnect.book);
    case 'getList':
      return await getListHandler(
        req as GetListRequest,
        res,
        PrismaClientConnect.book
        // {
        //   where: {
        //     id: undefined,
        //   },
        // }
      );
    case 'getMany':
      return await getManyHandler(req, res, PrismaClientConnect.book);
    default:
      return await defaultHandler(req, res, PrismaClientConnect);
  }
}
