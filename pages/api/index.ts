import { makeSchema } from '@nexus/schema';
import { graphql } from 'graphql';
import path from 'path';
import {PrismaClient} from '@prisma/client';
import {Query, Message} from './schemas';

const prisma = new PrismaClient();

export const schema = makeSchema({
  types: [Query, Message],
  outputs: {
    typegen: path.join(process.cwd(), 'pages', 'api', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'pages', 'api', 'schema.graphql')
  },
})

export default async (req, res) => {
  const query = req.body.query;
  const variables = req.body.variables;
  const response = await graphql(schema, query, {}, {db: prisma}, variables);

  return res.end(JSON.stringify(response));
}
