import { objectType } from '@nexus/schema';

export const Logbook = objectType({
  name: 'Logbook',
  definition(t) {
    t.model.id();
    t.model.subjectMatter();
    t.model.timeOfPeriod();
    // t.list.field('annProfSubjDistro', {
    //   type: 'AnnProfSubjDistro',
    //   resolve: async (parent, _, { prisma }) => {
    //     return await prisma.logbook
    //       .findOne({
    //         where: { id: parent.id }
    //       })
    //       .annProfSubjDistro();
    //   }
    // });
  }
});
