import { objectType } from '@nexus/schema';

export const Term = objectType({
  name: 'Term',
  definition(t) {
    t.model.id();
    t.model.termName();
    t.model.termCode();
    t.list.field('sequence', {
      type: 'Sequence',
      resolve: async (parent, _, { prisma }) => {
        return await prisma.term
          .findOne({
            where: { id: parent.id }
          })
          .sequence();
      }
    });
  }
});
