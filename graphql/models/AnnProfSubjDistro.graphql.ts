import { objectType } from '@nexus/schema';

export const AnnProfSubjDistro = objectType({
  name: 'AnnProfSubjDistro',
  definition(t) {
    t.model.id();
    // t.list.field('annProfSubjDistro', {
    //   type: 'AnnProfSubjDistro',
    //   resolve: async (parent, _, { prisma }) => {
    //     return await prisma.annProfDept.findOne({
    //       where: { id: parent.id },
    //     })
    //       .annProfSubjDistro();
    //   },
    // });
  }
});
