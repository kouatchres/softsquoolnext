import { objectType } from '@nexus/schema';

export const AnnStudentClassroom = objectType({
  name: 'AnnStudentClassroom',
  definition(t) {
    t.model.id();
    //     t.model.student1stName()
    // t.model.student2ndName()
    // t.model.student3rdName()
    // t.model.sex()
    // t.model.studentMatricule()
    // t.model.image()
    //     t.list.field('score', {
    //       type: 'Score',
    //       resolve: async (parent, _, { prisma }) => {
    //         return await prisma.annStudentClass.findOne({
    //           where: { id: parent.id },
    //         })
    //           .score();
    //       },
    //     });
  }
});
