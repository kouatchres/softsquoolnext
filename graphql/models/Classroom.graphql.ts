import { objectType } from '@nexus/schema';

export const Classroom = objectType({
  name: 'Classroom',
  definition(t) {
    t.model.id();
    t.model.className();
    t.model.classCode();
    t.list.field('annStudentClassroom', {
      type: 'AnnStudentClassroom',
      resolve: async (parent, _, { prisma }) => {
        return await prisma.classroom
          .findOne({
            where: { id: parent.id }
          })
          .annStudentClassroom();
      }
    });
  }
});
