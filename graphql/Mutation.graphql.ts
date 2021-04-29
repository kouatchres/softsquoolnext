import { mutationType, stringArg } from "@nexus/schema"


const Mutation = mutationType({
  definition(t) {
    // t.field('region', {
    //     type: 'Region',
    //     async resolve(_parent, args, {prisma}) {
    //                         try {
    //                 const region = await prisma.region.create({ data: { ...args } })
    //                 return region
    //               } catch (error) {
    //                 throw new Error(`${error.message}`)
    //               }
    //   }
    // })

    // t.field('division', {
    //     type: 'Division',
    //     async resolve(_parent, _args, {prisma}) {
    //       const { count } = await prisma.division.deleteMany({});
    //       return `${count} user(s) destroyed. Thanos will be proud.`;
    //     }
    //   });

    // t.field('division', {
    //   type: 'Division',
    //   args: {
    //     divisionId: stringArg(),
    //   },
    //   resolve: async (_parent, { divisionId }, { prisma }) => {
    //     return await prisma.division.deleteOneDivision({ where: { id: String(divisionId) } })
    //   },
    // });

    t.crud.createOneUser();
    t.crud.deleteOneUser();
    t.crud.updateOneUser();
    t.crud.deleteManyUser();
    // t.crud.updateManyUser();

    t.crud.createOneRegion();
    t.crud.deleteOneRegion();
    t.crud.updateOneRegion();
    t.crud.deleteManyRegion();
    // t.crud.updateManyRegion();

    t.crud.createOneDivision();
    t.crud.deleteOneDivision();
    t.crud.updateOneDivision();
    t.crud.deleteManyDivision();
    // t.crud.updateManyRegion();

    t.crud.createOneTown();
    t.crud.deleteOneTown();
    t.crud.updateOneTown();
    t.crud.deleteManyTown();
    // t.crud.updateManyRegion();

    t.crud.createOneSchool();
    t.crud.deleteOneSchool();
    t.crud.updateOneSchool();
    t.crud.deleteManySchool();

    t.crud.createOneSection();
    t.crud.deleteOneSection();
    t.crud.updateOneSection();
    t.crud.updateManySection();

    t.crud.updateManySubdivision();
    t.crud.createOneSubdivision();
    t.crud.deleteOneSubdivision();
    t.crud.updateOneSubdivision();

    t.crud.deleteManyDepartment();
    t.crud.createOneDepartment();
    t.crud.deleteOneDepartment();
    t.crud.updateOneDepartment();

    t.crud.createOneProf();
    t.crud.deleteOneProf();
    t.crud.updateOneProf();
    t.crud.deleteManyProf();
    //# t.crud.updateManyRegion();



    t.crud.createOneTerm();
    t.crud.deleteOneTerm();
    t.crud.updateOneTerm();
    t.crud.deleteManyTerm();
    //# t.crud.updateManyRegion();

    t.crud.createOneLogbook();
    t.crud.deleteOneLogbook();
    t.crud.updateOneLogbook();
    t.crud.deleteManyLogbook();
    //# t.crud.updateManyRegion();


    t.crud.createOneSchoolYear();
    t.crud.deleteOneSchoolYear();
    t.crud.updateOneSchoolYear();
    t.crud.deleteManySchoolYear();
    //# t.crud.updateManyRegion();


    t.crud.createOneSubject();
    t.crud.deleteOneSubject();
    t.crud.updateOneSubject();
    t.crud.deleteManySubject();
    //# t.crud.updateManyRegion();


    t.crud.createOneSequence();
    t.crud.deleteOneSequence();
    t.crud.updateOneSequence();
    t.crud.deleteManySequence();
    //# t.crud.updateManyRegion();


    t.crud.createOneAnnProfDept();
    t.crud.deleteOneAnnProfDept();
    t.crud.updateOneAnnProfDept();
    t.crud.deleteManyAnnProfDept();
    //# t.crud.updateManyRegion();


    t.crud.createOneAnnProfSubjDistro();
    t.crud.deleteOneAnnProfSubjDistro();
    t.crud.updateOneAnnProfSubjDistro();
    t.crud.deleteManyAnnProfSubjDistro();
    //# t.crud.updateManyRegion();


    t.crud.createOneAnnStudentClassroom();
    t.crud.deleteOneAnnStudentClassroom();
    t.crud.updateOneAnnStudentClassroom();
    t.crud.deleteManyAnnStudentClassroom();
    //# t.crud.updateManyRegion();


    t.crud.createOneStudent();
    t.crud.deleteOneStudent();
    t.crud.updateOneStudent();
    t.crud.deleteManyStudent();
    //# t.crud.updateManyRegion();


    t.crud.createOneScore();
    t.crud.deleteOneScore();
    t.crud.updateOneScore();
    t.crud.deleteManyScore();
    //# t.crud.updateManyRegion();


    t.crud.createOneClassroom();
    t.crud.deleteOneClassroom();
    t.crud.updateOneClassroom();
    t.crud.deleteManyClassroom();
    //# t.crud.updateManyRegion();


  }
});
export default Mutation
