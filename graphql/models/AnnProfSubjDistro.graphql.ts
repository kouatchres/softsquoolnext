import { objectType } from '@nexus/schema';

export const AnnProfSubjDistro = objectType({
  name: 'AnnProfSubjDistro',
  definition(t) {
    t.model.id();
    t.model.annProfDeptId();
    t.model.classroomId();
    t.model.subjectId();
    // t.list.field('logbooks', {
    //   type: 'AnnProfSubjDistro',
    //   resolve: async (parent, _, { prisma }) => {
    //     return await prisma.AnnProfSubjDistro.findOne({
    //       where: { id: parent.id },
    //     })
    //       .logbook();
    //   },
    // });
  }
});
