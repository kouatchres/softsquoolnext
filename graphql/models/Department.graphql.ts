import { objectType } from '@nexus/schema';

// Department.ts
export const Department = objectType({
  name: 'Department',
  definition(t) {
    t.model.id('id');
    t.model.deptName();
    t.model.deptCode();
    t.list.field('annProfDept', {
      type: 'AnnProfDept',
      resolve: async (parent, _, { prisma }) => {
        return await prisma.department
          .findOne({
            where: { id: parent.id || undefined }
          })
          .annProfDept();
      }
    });
    t.list.field('subject', {
      type: 'Subject',
      resolve: async (parent, _, { prisma }) => {
        return await prisma.department
          .findOne({
            where: { id: parent.id || undefined }
          })
          .subject();
      }
    });
  }
});
