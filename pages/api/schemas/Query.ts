import {intArg, objectType} from '@nexus/schema';

export const Query = objectType({
  name: "Query",
  definition(t) {
    t.field("message", {
      type: "Message",
      args: {
        messageId: intArg({ nullable: false }),
      },
      resolve: (_, args, ctx) => {
        return ctx.db.message.findOne({
          where: { id: Number(args.messageId) },
        });
      },
    })
    t.list.field("allMessages", {
      type: "Message",
      resolve: (_parent, _args, ctx) => {
        return ctx.db.message.findMany();
      },
    })
  }
})
