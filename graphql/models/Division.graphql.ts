import { objectType } from '@nexus/schema';

export const Division = objectType({
  name: 'Division',
  definition(t) {
    t.model.id('id');
    t.model.divisionName();
    t.model.divisionCode();
    t.list.field('subdivisions', {
      type: 'Subdivision',
      resolve: async (parent, _args, { prisma }) => {
        return await prisma.division
          .findOne({
            where: { id: parent.id }
          })
          .subdiv();
      }
    });
  }
});
