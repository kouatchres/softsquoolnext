import { objectType } from '@nexus/schema';

export const Subject = objectType({
  name: 'Subject',
  definition(t) {
    t.model.id();
    t.model.subjectName();
    t.model.subjectCode();
    // t.list.field('annProfSubjDistro', {
    //   type: 'AnnProfSubjDistro',
    //   resolve: async (parent, _, { prisma }) => {
    //     return await prisma.subject
    //       .findOne({
    //         where: { id: parent.id }
    //       })
    //       .annProfSubjDistro();
    //   }
    // });
  }
});
