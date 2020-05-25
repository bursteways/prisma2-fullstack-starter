import { objectType } from '@nexus/schema'

export const Message = objectType({
  name: 'Message',
  definition(t) {
    t.int('id')
    t.string('message')
  },
});
