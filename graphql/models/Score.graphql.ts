import { objectType } from '@nexus/schema';

export const Score = objectType({
  name: 'Score',
  definition(t) {
    t.model.id('id');
    t.model.marks();
    // t.list.field('subdivisions', {
    //   type: 'Subdivision',
    //   resolve:async (parent, _args, {prisma}) => {
    //     return await  prisma.division.findOne({
    //       where: { id: parent.id },
    //     })
    //     .subdiv()
    //   },
    // });
  }
});
