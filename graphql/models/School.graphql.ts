import { objectType } from '@nexus/schema';

export const School = objectType({
  name: 'School',
  definition(t) {
    t.model.id();
    t.model.schoolName();
    t.model.schoolPublicCode();
    t.model.schoolCode();
    t.model.schoolSecretCode();
    t.list.field('sections', {
      type: 'Section',
      resolve: async (parent, _, { prisma }) => {
        return await prisma.school
          .findOne({
            where: { id: parent.id }
          })
          .section();
      }
    });
  }
});
