import { objectType } from '@nexus/schema';

export const Subdivision = objectType({
  name: 'Subdivision',
  definition(t) {
    t.model.id();
    t.model.subdivName();
    t.model.subdivCode();
    t.list.field('towns', {
      type: 'Town',
      resolve: async (parent, _, { prisma }) => {
        return await prisma.subdivision
          .findOne({
            where: { id: parent.id }
          })
          .town();
      }
    });
  }
});
