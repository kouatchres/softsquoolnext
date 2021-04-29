import { objectType } from '@nexus/schema';


export const Sequence = objectType({
  name: 'Sequence',
  definition(t) {
    t.model.id();
    t.model.seqName();
    t.model.seqCode();
    t.list.field('score', {
      type: 'Score',
      resolve: async (parent, _, { prisma }) => {
        return await prisma.sequence.findOne({
          where: { id: parent.id },
        })
          .score();
      },
    });

  }
});

