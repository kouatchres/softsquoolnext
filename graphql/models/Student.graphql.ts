import { objectType } from '@nexus/schema';


export const Student = objectType({
  name: 'Student',
  definition(t) {
    t.model.id();
    t.model.student1stName()
    t.model.student2ndName()
    t.model.student3rdName()
    t.model.gender()
    t.model.studentMatricule()
    t.model.studentSecretCode()
    t.model.email()
    t.model.phoneNumber()
    t.model.dateOfBirth()
    t.model.placeOfBirth()
    t.model.image()
    t.list.field('annStudentClassroom', {
                type: 'AnnStudentClassroom',
                resolve: async (parent, _, { prisma }) => {
                  return await prisma.student.findOne({
                    where: { id: parent.id },
                  })
                    .annStudentClassroom();
                },
              });

  }
});

