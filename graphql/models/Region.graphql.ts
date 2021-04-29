import { objectType } from '@nexus/schema';

export const Region = objectType({
  name: 'Region',
  definition(t) {
    t.model.id();
    t.model.regName();
    t.model.regCode();
    t.list.field('divisions', {
      type: 'Division',
      resolve: async (parent, _, { prisma }) => {
        return await prisma.region
          .findOne({
            where: { id: parent.id }
          })
          .division();
      }
    });
  }
});
