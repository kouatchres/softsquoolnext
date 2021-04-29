import { objectType } from '@nexus/schema';

export const Town = objectType({
  name: 'Town',
  definition(t) {
    t.model.id();
    t.model.townName();
    t.model.townCode();
    t.list.field('schools', {
      type: 'School',
      resolve: async (parent, _, { prisma }) => {
        return await prisma.town
          .findOne({
            where: { id: parent.id }
          })
          .school();
      }
    });
  }
});
