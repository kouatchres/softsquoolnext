import { objectType } from '@nexus/schema';

export const AnnProfDept = objectType({
  name: 'AnnProfDept',
  definition(t) {
    t.model.id();
    t.model.schoolYearId();
    t.model.profId();
    t.model.departmentId();
    //   t.list.field('annProfSubjDistros', {
    //     type: 'AnnProfSubjDistro',
    //     resolve: async (parent, _, { prisma }) => {
    //       return await prisma.annProfDept
    //         .findOne({
    //           where: { id: parent.id }
    //         })
    //         .annProfSubjDistro();
    //     }
    //   });
  }
});
