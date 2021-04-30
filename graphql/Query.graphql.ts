import { queryType, stringArg, intArg } from '@nexus/schema';

const Query = queryType({
  definition(t) {
    t.list.field('users', {
      type: 'User',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.user.findMany({
          orderBy: [{ name: 'asc' }, { email: 'asc' }]
        });
      }
    });

    t.field('user', {
      type: 'User',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.user.findOne({ where: { id: String(id) } });
      }
    });

    t.list.field('divisions', {
      type: 'Division',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.division.findMany({
          orderBy: [{ divisionName: 'asc' }, { divisionCode: 'asc' }]
        });
      }
    });

    t.field('division', {
      type: 'Division',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.division.findOne({ where: { id: String(id) } });
      }
    });

    t.list.field('subdivisions', {
      type: 'Subdivision',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.subdivision.findMany({
          orderBy: [{ subdivName: 'asc' }, { subdivCode: 'asc' }]
        });
      }
    });

    t.field('subdivision', {
      type: 'Subdivision',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.subdivision.findOne({ where: { id: String(id) } });
      }
    });

    t.list.field('towns', {
      type: 'Town',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.town.findMany({
          orderBy: [{ townName: 'asc' }, { townCode: 'asc' }]
        });
      }
    });

    t.field('town', {
      type: 'Town',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.town.findOne({ where: { id: String(id) } });
      }
    });

    t.list.field('schools', {
      type: 'School',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.school.findMany({
          orderBy: [{ schoolName: 'asc' }, { schoolCode: 'asc' }]
        });
      }
    });

    t.field('schoolByID', {
      type: 'School',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.school.findOne({ where: { id: String(id) } });
      }
    });

    t.field('schoolBySecretCode', {
      type: 'School',
      args: {
        schoolSecretCode: stringArg()
      },
      resolve: async (_parent, { schoolSecretCode }, { prisma }) => {
        return await prisma.school.findOne({
          where: { schoolSecretCode: String(schoolSecretCode) }
        });
      }
    });

    t.field('schoolByPublicCode', {
      type: 'School',
      args: {
        schoolPublicCode: stringArg()
      },
      resolve: async (_parent, { schoolPublicCode }, { prisma }) => {
        return await prisma.school.findOne({
          where: { schoolPublicCode: String(schoolPublicCode) }
        });
      }
    });

    t.list.field('departments', {
      type: 'Department',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.department.findMany({
          orderBy: [{ departmentName: 'asc' }, { departmentCode: 'asc' }]
        });
      }
    });

    t.field('department', {
      type: 'Department',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.department.findOne({ where: { id: String(id) } });
      }
    });

    t.list.field('profs', {
      type: 'Prof',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.prof.findMany({
          orderBy: [{ prof1stName: 'asc' }, { prof2ndName: 'asc' }]
        });
      }
    });

    t.field('prof', {
      type: 'Prof',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.prof.findOne({ where: { id: String(id) } });
      }
    });
    t.field('profByMatricule', {
      type: 'Prof',
      args: {
        profMatricule: stringArg()
      },
      resolve: async (_parent, { profMatricule }, { prisma }) => {
        return await prisma.prof.findOne({
          where: { profMatricule: String(profMatricule) }
        });
      }
    });

    t.list.field('regions', {
      type: 'Region',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.region.findMany({
          orderBy: [{ regName: 'asc' }, { regCode: 'asc' }]
        });
      }
    });

    t.field('region', {
      type: 'Region',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.region.findOne({ where: { id: String(id) } });
      }
    });

    t.list.field('sections', {
      type: 'Section',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.section.findMany({
          orderBy: [{ sectionName: 'asc' }, { sectionCode: 'asc' }]
        });
      }
    });

    t.field('section', {
      type: 'Section',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.section.findOne({ where: { id: String(id) } });
      }
    });

    t.list.field('annProfDepts', {
      type: 'AnnProfDept',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.annProfDept.findMany({
          orderBy: [{ id: 'asc' }]
        });
      }
    });

    t.field('annProfDept', {
      type: 'AnnProfDept',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.annProfDept.findOne({ where: { id: String(id) } });
      }
    });

    t.list.field('annProfSubjDistros', {
      type: 'AnnProfSubjDistro',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.annProfSubjDistro.findMany({
          orderBy: [{ id: 'asc' }]
        });
      }
    });

    t.field('annProfSubjDistro', {
      type: 'AnnProfSubjDistro',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.annProfSubjDistro.findOne({
          where: { id: String(id) }
        });
      }
    });

    t.list.field('annStudentClassrooms', {
      type: 'AnnStudentClassroom',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.annStudentClassroom.findMany({
          orderBy: [{ id: 'asc' }]
        });
      }
    });

    t.field('annStudentClassroom', {
      type: 'AnnStudentClassroom',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.annStudentClassroom.findOne({
          where: { id: String(id) }
        });
      }
    });

    t.list.field('logbooks', {
      type: 'Logbook',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.logbook.findMany({
          orderBy: [{ subjectMatter: 'asc' }, { timeOfPeriod: 'asc' }]
        });
      }
    });

    t.field('logbook', {
      type: 'Logbook',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.logbook.findOne({ where: { id: String(id) } });
      }
    });

    t.list.field('schoolYears', {
      type: 'SchoolYear',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.schoolYear.findMany({
          orderBy: [{ schoolYearName: 'asc' }, { schoolYearCode: 'asc' }]
        });
      }
    });

    t.field('schoolYear', {
      type: 'SchoolYear',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.schoolYear.findOne({ where: { id: String(id) } });
      }
    });

    t.list.field('scores', {
      type: 'Score',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.score.findMany({
          orderBy: [{ id: 'asc' }]
        });
      }
    });

    t.field('score', {
      type: 'Score',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.score.findOne({ where: { id: String(id) } });
      }
    });

    t.list.field('sequences', {
      type: 'Sequence',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.sequence.findMany({
          orderBy: [{ sequenceName: 'asc' }, { sequenceCode: 'asc' }]
        });
      }
    });

    t.field('sequence', {
      type: 'Sequence',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.sequence.findOne({ where: { id: String(id) } });
      }
    });

    t.list.field('students', {
      type: 'Student',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.student.findMany({
          orderBy: [{ student1stName: 'asc' }, { student1stName: 'asc' }]
        });
      }
    });

    t.field('student', {
      type: 'Student',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.student.findOne({ where: { id: String(id) } });
      }
    });

    t.list.field('subjects', {
      type: 'Subject',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.subject.findMany({
          orderBy: [{ subjectName: 'asc' }, { subjectCode: 'asc' }]
        });
      }
    });

    t.field('subject', {
      type: 'Subject',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.subject.findOne({ where: { id: String(id) } });
      }
    });

    t.list.field('terms', {
      type: 'Term',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.term.findMany({
          orderBy: [{ termName: 'asc' }, { termCode: 'asc' }]
        });
      }
    });

    t.field('term', {
      type: 'Term',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.term.findOne({ where: { id: String(id) } });
      }
    });

    t.list.field('classrooms', {
      type: 'Classroom',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.classroom.findMany({
          orderBy: [{ classroomName: 'asc' }, { classroomCode: 'asc' }]
        });
      }
    });

    t.field('classroom', {
      type: 'Classroom',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.classroom.findOne({ where: { id: String(id) } });
      }
    });

    // t.list.field('sections', {
    //   type: 'Section',
    //   resolve: async (_parent, _args, { prisma }) => {
    //     return await prisma.section.findMany({
    //       orderBy: [{ sectionName: 'asc', }, { sectionCode: 'asc', },],

    //     })
    //   },
    // });

    // t.field('section', {
    //   type: 'Section',
    //   args: {
    //     id: stringArg(),
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma.section.findOne({ where: { id: String(id) } })
    //   },
    // });

    // t.field('division', {
    //   type: 'Division',
    //   args: {
    //     id: stringArg(),
    //   },
    //   resolve: async (_parent, { id }, { prisma }) => {
    //     return await prisma division.One({ where: { id: String(id) } })
    //   },
    // });

    // t.crud.divisions({ pagination: true, filtering: true, ordering: true });
    // t.crud.division();
    // t.crud.town();
    // t.crud.towns({ pagination: true, filtering: true, ordering: true });
    // t.crud.user();
    // t.crud.users({
    //   pagination: true,
    //   filtering: true,
    //   ordering: true,

    // });
    // t.crud.region()

    // t.crud.regions({
    //   pagination: true,
    //   filtering: true,
    //   ordering: true,

    // });
    // t.crud.section();
    // t.crud.sections({ pagination: true, filtering: true, ordering: true });
    // t.crud.subdivision();
    // t.crud.subdivisions({ pagination: true, filtering: true, ordering: true });
    // t.crud.schools({ pagination: true, filtering: true, ordering: true });
    // t.crud.school();
    // t.crud.departments({ pagination: true, filtering: true, ordering: true });
    // t.crud.department();
    // t.crud.profs({ pagination: true, filtering: true, ordering: true });
    // t.crud.prof();
  }
});
export default Query;

