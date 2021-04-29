import { objectType } from '@nexus/schema';

export const SchoolYear = objectType({
  name: 'SchoolYear',
  definition(t) {
    t.model.id();
    t.model.yearName();
    t.model.yearCode();
    // t.list.field('annStudentClassroom', {
    //   type: 'AnnStudentClassroom',
    //   resolve: async (parent, _, { prisma }) => {
    //     return await prisma.schoolYear.findOne({
    //       where: { id: parent.id },
    //     })
    //       .annStudentClassroom();
    //   },
    // });
  }
});
