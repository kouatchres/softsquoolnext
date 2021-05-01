import { objectType } from '@nexus/schema';

export const Section = objectType({
  name: 'Section',
  definition(t) {
    t.model.id();
    t.model.sectionName();
    t.model.sectionCode();
    t.list.field('departments', {
      type: 'Department',
      resolve: async (parent, _, { prisma }) => {
        return await prisma.section
          .findOne({
            where: { id: parent.id }
          })
          .department();
      }
    });
    t.list.field('classrooms', {
      type: 'Classroom',
      resolve: async (parent, _, { prisma }) => {
        return await prisma.section
          .findOne({
            where: { id: parent.id }
          })
          .classroom();
      }
    });
  }
});
