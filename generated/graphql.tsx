import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type User = {
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  image: Scalars['String'];
};

export type Region = {
  id: Scalars['String'];
  regName: Scalars['String'];
  regCode: Scalars['String'];
  divisions?: Maybe<Array<Maybe<Division>>>;
};

export type Division = {
  id: Scalars['String'];
  divisionName: Scalars['String'];
  divisionCode: Scalars['String'];
  subdivisions?: Maybe<Array<Maybe<Subdivision>>>;
};

export type Subdivision = {
  id: Scalars['String'];
  subdivName: Scalars['String'];
  subdivCode: Scalars['String'];
  towns?: Maybe<Array<Maybe<Town>>>;
};

export type Town = {
  id: Scalars['String'];
  townName: Scalars['String'];
  townCode: Scalars['String'];
  schools?: Maybe<Array<Maybe<School>>>;
};

export type School = {
  id: Scalars['String'];
  schoolName: Scalars['String'];
  schoolPublicCode: Scalars['String'];
  schoolCode: Scalars['String'];
  schoolSecretCode: Scalars['String'];
  sections?: Maybe<Array<Maybe<Section>>>;
};

export type Section = {
  id: Scalars['String'];
  sectionName: Scalars['String'];
  sectionCode: Scalars['String'];
  departments?: Maybe<Array<Maybe<Department>>>;
  classrooms?: Maybe<Array<Maybe<Classroom>>>;
};

export type Department = {
  id: Scalars['String'];
  deptName: Scalars['String'];
  deptCode: Scalars['String'];
  annProfDept?: Maybe<Array<Maybe<AnnProfDept>>>;
  subject?: Maybe<Array<Maybe<Subject>>>;
};

export type Prof = {
  id: Scalars['String'];
  prof1stName: Scalars['String'];
  prof2ndName: Scalars['String'];
  prof3rdName: Scalars['String'];
  profMatricule: Scalars['String'];
  gender: Scalars['String'];
  image: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['Int'];
  profSecretCode: Scalars['String'];
  specialty: Scalars['String'];
};

export type Sequence = {
  id: Scalars['String'];
  seqName: Scalars['String'];
  seqCode: Scalars['String'];
  score?: Maybe<Array<Maybe<Score>>>;
};

export type AnnProfDept = {
  id: Scalars['String'];
};

export type AnnProfSubjDistro = {
  id: Scalars['String'];
};

export type AnnStudentClassroom = {
  id: Scalars['String'];
};

export type Classroom = {
  id: Scalars['String'];
  className: Scalars['String'];
  classCode: Scalars['String'];
  annStudentClassroom?: Maybe<Array<Maybe<AnnStudentClassroom>>>;
};

export type Logbook = {
  id: Scalars['String'];
  subjectMatter: Scalars['String'];
  timeOfPeriod: Scalars['DateTime'];
};

export type SchoolYear = {
  id: Scalars['String'];
  yearName: Scalars['String'];
  yearCode: Scalars['String'];
};

export type Student = {
  id: Scalars['String'];
  student1stName: Scalars['String'];
  student2ndName: Scalars['String'];
  student3rdName: Scalars['String'];
  gender: Scalars['String'];
  studentMatricule: Scalars['String'];
  studentSecretCode: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['Int'];
  dateOfBirth: Scalars['DateTime'];
  placeOfBirth: Scalars['String'];
  image: Scalars['String'];
  annStudentClassroom?: Maybe<Array<Maybe<AnnStudentClassroom>>>;
};

export type Subject = {
  id: Scalars['String'];
  subjectName: Scalars['String'];
  subjectCode: Scalars['String'];
};

export type Term = {
  id: Scalars['String'];
  termName: Scalars['String'];
  termCode: Scalars['String'];
  sequence?: Maybe<Array<Maybe<Sequence>>>;
};

export type Score = {
  id: Scalars['String'];
  marks: Scalars['String'];
};

export type Query = {
  users?: Maybe<Array<Maybe<User>>>;
  user?: Maybe<User>;
  divisions?: Maybe<Array<Maybe<Division>>>;
  division?: Maybe<Division>;
  subdivisions?: Maybe<Array<Maybe<Subdivision>>>;
  subdivision?: Maybe<Subdivision>;
  towns?: Maybe<Array<Maybe<Town>>>;
  town?: Maybe<Town>;
  schools?: Maybe<Array<Maybe<School>>>;
  schoolByID?: Maybe<School>;
  schoolBySecretCode?: Maybe<School>;
  schoolByPublicCode?: Maybe<School>;
  departments?: Maybe<Array<Maybe<Department>>>;
  department?: Maybe<Department>;
  profs?: Maybe<Array<Maybe<Prof>>>;
  prof?: Maybe<Prof>;
  profByMatricule?: Maybe<Prof>;
  regions?: Maybe<Array<Maybe<Region>>>;
  region?: Maybe<Region>;
  sections?: Maybe<Array<Maybe<Section>>>;
  section?: Maybe<Section>;
  sectionForClasses?: Maybe<Section>;
  annProfDepts?: Maybe<Array<Maybe<AnnProfDept>>>;
  annProfDept?: Maybe<AnnProfDept>;
  annProfSubjDistros?: Maybe<Array<Maybe<AnnProfSubjDistro>>>;
  annProfSubjDistro?: Maybe<AnnProfSubjDistro>;
  annStudentClassrooms?: Maybe<Array<Maybe<AnnStudentClassroom>>>;
  annStudentClassroom?: Maybe<AnnStudentClassroom>;
  logbooks?: Maybe<Array<Maybe<Logbook>>>;
  logbook?: Maybe<Logbook>;
  schoolYears?: Maybe<Array<Maybe<SchoolYear>>>;
  schoolYear?: Maybe<SchoolYear>;
  scores?: Maybe<Array<Maybe<Score>>>;
  score?: Maybe<Score>;
  sequences?: Maybe<Array<Maybe<Sequence>>>;
  sequence?: Maybe<Sequence>;
  students?: Maybe<Array<Maybe<Student>>>;
  student?: Maybe<Student>;
  studentBySecretCode?: Maybe<Student>;
  studentByMatricule?: Maybe<Student>;
  subjects?: Maybe<Array<Maybe<Subject>>>;
  subject?: Maybe<Subject>;
  terms?: Maybe<Array<Maybe<Term>>>;
  term?: Maybe<Term>;
  classrooms?: Maybe<Array<Maybe<Classroom>>>;
  classroom?: Maybe<Classroom>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryDivisionArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QuerySubdivisionArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryTownArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QuerySchoolByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QuerySchoolBySecretCodeArgs = {
  schoolSecretCode?: Maybe<Scalars['String']>;
};


export type QuerySchoolByPublicCodeArgs = {
  schoolPublicCode?: Maybe<Scalars['String']>;
};


export type QueryDepartmentArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryProfArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryProfByMatriculeArgs = {
  profMatricule?: Maybe<Scalars['String']>;
};


export type QueryRegionArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QuerySectionArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QuerySectionForClassesArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryAnnProfDeptArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryAnnProfSubjDistroArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryAnnStudentClassroomArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryLogbookArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QuerySchoolYearArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryScoreArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QuerySequenceArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryStudentArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryStudentBySecretCodeArgs = {
  studentSecretCode?: Maybe<Scalars['String']>;
};


export type QueryStudentByMatriculeArgs = {
  studentMatricule?: Maybe<Scalars['String']>;
};


export type QuerySubjectArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryTermArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryClassroomArgs = {
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  createOneUser: User;
  deleteOneUser?: Maybe<User>;
  updateOneUser?: Maybe<User>;
  deleteManyUser: BatchPayload;
  createOneRegion: Region;
  deleteOneRegion?: Maybe<Region>;
  updateOneRegion?: Maybe<Region>;
  deleteManyRegion: BatchPayload;
  createOneDivision: Division;
  deleteOneDivision?: Maybe<Division>;
  updateOneDivision?: Maybe<Division>;
  deleteManyDivision: BatchPayload;
  createOneTown: Town;
  deleteOneTown?: Maybe<Town>;
  updateOneTown?: Maybe<Town>;
  deleteManyTown: BatchPayload;
  createOneSchool: School;
  deleteOneSchool?: Maybe<School>;
  updateOneSchool?: Maybe<School>;
  deleteManySchool: BatchPayload;
  createOneSection: Section;
  deleteOneSection?: Maybe<Section>;
  updateOneSection?: Maybe<Section>;
  updateManySection: BatchPayload;
  updateManySubdivision: BatchPayload;
  createOneSubdivision: Subdivision;
  deleteOneSubdivision?: Maybe<Subdivision>;
  updateOneSubdivision?: Maybe<Subdivision>;
  deleteManyDepartment: BatchPayload;
  createOneDepartment: Department;
  deleteOneDepartment?: Maybe<Department>;
  updateOneDepartment?: Maybe<Department>;
  createOneProf: Prof;
  deleteOneProf?: Maybe<Prof>;
  updateOneProf?: Maybe<Prof>;
  deleteManyProf: BatchPayload;
  createOneTerm: Term;
  deleteOneTerm?: Maybe<Term>;
  updateOneTerm?: Maybe<Term>;
  deleteManyTerm: BatchPayload;
  createOneLogbook: Logbook;
  deleteOneLogbook?: Maybe<Logbook>;
  updateOneLogbook?: Maybe<Logbook>;
  deleteManyLogbook: BatchPayload;
  createOneSchoolYear: SchoolYear;
  deleteOneSchoolYear?: Maybe<SchoolYear>;
  updateOneSchoolYear?: Maybe<SchoolYear>;
  deleteManySchoolYear: BatchPayload;
  createOneSubject: Subject;
  deleteOneSubject?: Maybe<Subject>;
  updateOneSubject?: Maybe<Subject>;
  deleteManySubject: BatchPayload;
  createOneSequence: Sequence;
  deleteOneSequence?: Maybe<Sequence>;
  updateOneSequence?: Maybe<Sequence>;
  deleteManySequence: BatchPayload;
  createOneAnnProfDept: AnnProfDept;
  deleteOneAnnProfDept?: Maybe<AnnProfDept>;
  updateOneAnnProfDept?: Maybe<AnnProfDept>;
  deleteManyAnnProfDept: BatchPayload;
  createOneAnnProfSubjDistro: AnnProfSubjDistro;
  deleteOneAnnProfSubjDistro?: Maybe<AnnProfSubjDistro>;
  updateOneAnnProfSubjDistro?: Maybe<AnnProfSubjDistro>;
  deleteManyAnnProfSubjDistro: BatchPayload;
  createOneAnnStudentClassroom: AnnStudentClassroom;
  deleteOneAnnStudentClassroom?: Maybe<AnnStudentClassroom>;
  updateOneAnnStudentClassroom?: Maybe<AnnStudentClassroom>;
  deleteManyAnnStudentClassroom: BatchPayload;
  createOneStudent: Student;
  deleteOneStudent?: Maybe<Student>;
  updateOneStudent?: Maybe<Student>;
  deleteManyStudent: BatchPayload;
  createOneScore: Score;
  deleteOneScore?: Maybe<Score>;
  updateOneScore?: Maybe<Score>;
  deleteManyScore: BatchPayload;
  createOneClassroom: Classroom;
  deleteOneClassroom?: Maybe<Classroom>;
  updateOneClassroom?: Maybe<Classroom>;
  deleteManyClassroom: BatchPayload;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationCreateOneRegionArgs = {
  data: RegionCreateInput;
};


export type MutationDeleteOneRegionArgs = {
  where: RegionWhereUniqueInput;
};


export type MutationUpdateOneRegionArgs = {
  data: RegionUpdateInput;
  where: RegionWhereUniqueInput;
};


export type MutationDeleteManyRegionArgs = {
  where?: Maybe<RegionWhereInput>;
};


export type MutationCreateOneDivisionArgs = {
  data: DivisionCreateInput;
};


export type MutationDeleteOneDivisionArgs = {
  where: DivisionWhereUniqueInput;
};


export type MutationUpdateOneDivisionArgs = {
  data: DivisionUpdateInput;
  where: DivisionWhereUniqueInput;
};


export type MutationDeleteManyDivisionArgs = {
  where?: Maybe<DivisionWhereInput>;
};


export type MutationCreateOneTownArgs = {
  data: TownCreateInput;
};


export type MutationDeleteOneTownArgs = {
  where: TownWhereUniqueInput;
};


export type MutationUpdateOneTownArgs = {
  data: TownUpdateInput;
  where: TownWhereUniqueInput;
};


export type MutationDeleteManyTownArgs = {
  where?: Maybe<TownWhereInput>;
};


export type MutationCreateOneSchoolArgs = {
  data: SchoolCreateInput;
};


export type MutationDeleteOneSchoolArgs = {
  where: SchoolWhereUniqueInput;
};


export type MutationUpdateOneSchoolArgs = {
  data: SchoolUpdateInput;
  where: SchoolWhereUniqueInput;
};


export type MutationDeleteManySchoolArgs = {
  where?: Maybe<SchoolWhereInput>;
};


export type MutationCreateOneSectionArgs = {
  data: SectionCreateInput;
};


export type MutationDeleteOneSectionArgs = {
  where: SectionWhereUniqueInput;
};


export type MutationUpdateOneSectionArgs = {
  data: SectionUpdateInput;
  where: SectionWhereUniqueInput;
};


export type MutationUpdateManySectionArgs = {
  data: SectionUpdateManyMutationInput;
  where?: Maybe<SectionWhereInput>;
};


export type MutationUpdateManySubdivisionArgs = {
  data: SubdivisionUpdateManyMutationInput;
  where?: Maybe<SubdivisionWhereInput>;
};


export type MutationCreateOneSubdivisionArgs = {
  data: SubdivisionCreateInput;
};


export type MutationDeleteOneSubdivisionArgs = {
  where: SubdivisionWhereUniqueInput;
};


export type MutationUpdateOneSubdivisionArgs = {
  data: SubdivisionUpdateInput;
  where: SubdivisionWhereUniqueInput;
};


export type MutationDeleteManyDepartmentArgs = {
  where?: Maybe<DepartmentWhereInput>;
};


export type MutationCreateOneDepartmentArgs = {
  data: DepartmentCreateInput;
};


export type MutationDeleteOneDepartmentArgs = {
  where: DepartmentWhereUniqueInput;
};


export type MutationUpdateOneDepartmentArgs = {
  data: DepartmentUpdateInput;
  where: DepartmentWhereUniqueInput;
};


export type MutationCreateOneProfArgs = {
  data: ProfCreateInput;
};


export type MutationDeleteOneProfArgs = {
  where: ProfWhereUniqueInput;
};


export type MutationUpdateOneProfArgs = {
  data: ProfUpdateInput;
  where: ProfWhereUniqueInput;
};


export type MutationDeleteManyProfArgs = {
  where?: Maybe<ProfWhereInput>;
};


export type MutationCreateOneTermArgs = {
  data: TermCreateInput;
};


export type MutationDeleteOneTermArgs = {
  where: TermWhereUniqueInput;
};


export type MutationUpdateOneTermArgs = {
  data: TermUpdateInput;
  where: TermWhereUniqueInput;
};


export type MutationDeleteManyTermArgs = {
  where?: Maybe<TermWhereInput>;
};


export type MutationCreateOneLogbookArgs = {
  data: LogbookCreateInput;
};


export type MutationDeleteOneLogbookArgs = {
  where: LogbookWhereUniqueInput;
};


export type MutationUpdateOneLogbookArgs = {
  data: LogbookUpdateInput;
  where: LogbookWhereUniqueInput;
};


export type MutationDeleteManyLogbookArgs = {
  where?: Maybe<LogbookWhereInput>;
};


export type MutationCreateOneSchoolYearArgs = {
  data: SchoolYearCreateInput;
};


export type MutationDeleteOneSchoolYearArgs = {
  where: SchoolYearWhereUniqueInput;
};


export type MutationUpdateOneSchoolYearArgs = {
  data: SchoolYearUpdateInput;
  where: SchoolYearWhereUniqueInput;
};


export type MutationDeleteManySchoolYearArgs = {
  where?: Maybe<SchoolYearWhereInput>;
};


export type MutationCreateOneSubjectArgs = {
  data: SubjectCreateInput;
};


export type MutationDeleteOneSubjectArgs = {
  where: SubjectWhereUniqueInput;
};


export type MutationUpdateOneSubjectArgs = {
  data: SubjectUpdateInput;
  where: SubjectWhereUniqueInput;
};


export type MutationDeleteManySubjectArgs = {
  where?: Maybe<SubjectWhereInput>;
};


export type MutationCreateOneSequenceArgs = {
  data: SequenceCreateInput;
};


export type MutationDeleteOneSequenceArgs = {
  where: SequenceWhereUniqueInput;
};


export type MutationUpdateOneSequenceArgs = {
  data: SequenceUpdateInput;
  where: SequenceWhereUniqueInput;
};


export type MutationDeleteManySequenceArgs = {
  where?: Maybe<SequenceWhereInput>;
};


export type MutationCreateOneAnnProfDeptArgs = {
  data: AnnProfDeptCreateInput;
};


export type MutationDeleteOneAnnProfDeptArgs = {
  where: AnnProfDeptWhereUniqueInput;
};


export type MutationUpdateOneAnnProfDeptArgs = {
  data: AnnProfDeptUpdateInput;
  where: AnnProfDeptWhereUniqueInput;
};


export type MutationDeleteManyAnnProfDeptArgs = {
  where?: Maybe<AnnProfDeptWhereInput>;
};


export type MutationCreateOneAnnProfSubjDistroArgs = {
  data: AnnProfSubjDistroCreateInput;
};


export type MutationDeleteOneAnnProfSubjDistroArgs = {
  where: AnnProfSubjDistroWhereUniqueInput;
};


export type MutationUpdateOneAnnProfSubjDistroArgs = {
  data: AnnProfSubjDistroUpdateInput;
  where: AnnProfSubjDistroWhereUniqueInput;
};


export type MutationDeleteManyAnnProfSubjDistroArgs = {
  where?: Maybe<AnnProfSubjDistroWhereInput>;
};


export type MutationCreateOneAnnStudentClassroomArgs = {
  data: AnnStudentClassroomCreateInput;
};


export type MutationDeleteOneAnnStudentClassroomArgs = {
  where: AnnStudentClassroomWhereUniqueInput;
};


export type MutationUpdateOneAnnStudentClassroomArgs = {
  data: AnnStudentClassroomUpdateInput;
  where: AnnStudentClassroomWhereUniqueInput;
};


export type MutationDeleteManyAnnStudentClassroomArgs = {
  where?: Maybe<AnnStudentClassroomWhereInput>;
};


export type MutationCreateOneStudentArgs = {
  data: StudentCreateInput;
};


export type MutationDeleteOneStudentArgs = {
  where: StudentWhereUniqueInput;
};


export type MutationUpdateOneStudentArgs = {
  data: StudentUpdateInput;
  where: StudentWhereUniqueInput;
};


export type MutationDeleteManyStudentArgs = {
  where?: Maybe<StudentWhereInput>;
};


export type MutationCreateOneScoreArgs = {
  data: ScoreCreateInput;
};


export type MutationDeleteOneScoreArgs = {
  where: ScoreWhereUniqueInput;
};


export type MutationUpdateOneScoreArgs = {
  data: ScoreUpdateInput;
  where: ScoreWhereUniqueInput;
};


export type MutationDeleteManyScoreArgs = {
  where?: Maybe<ScoreWhereInput>;
};


export type MutationCreateOneClassroomArgs = {
  data: ClassroomCreateInput;
};


export type MutationDeleteOneClassroomArgs = {
  where: ClassroomWhereUniqueInput;
};


export type MutationUpdateOneClassroomArgs = {
  data: ClassroomUpdateInput;
  where: ClassroomWhereUniqueInput;
};


export type MutationDeleteManyClassroomArgs = {
  where?: Maybe<ClassroomWhereInput>;
};


export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  email: Scalars['String'];
  image: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type UserUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type BatchPayload = {
  count: Scalars['Int'];
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type RegionCreateInput = {
  id?: Maybe<Scalars['String']>;
  regName: Scalars['String'];
  regCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  division?: Maybe<DivisionCreateManyWithoutRegionInput>;
};

export type RegionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type RegionUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  regName?: Maybe<StringFieldUpdateOperationsInput>;
  regCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  division?: Maybe<DivisionUpdateManyWithoutRegionInput>;
};

export type RegionWhereInput = {
  AND?: Maybe<Array<RegionWhereInput>>;
  OR?: Maybe<Array<RegionWhereInput>>;
  NOT?: Maybe<Array<RegionWhereInput>>;
  id?: Maybe<StringFilter>;
  regName?: Maybe<StringFilter>;
  regCode?: Maybe<StringFilter>;
  division?: Maybe<DivisionListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type DivisionCreateInput = {
  id?: Maybe<Scalars['String']>;
  divisionName: Scalars['String'];
  divisionCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  subdiv?: Maybe<SubdivisionCreateManyWithoutDivisionInput>;
  Region: RegionCreateOneWithoutDivisionInput;
};

export type DivisionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DivisionUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  divisionName?: Maybe<StringFieldUpdateOperationsInput>;
  divisionCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  subdiv?: Maybe<SubdivisionUpdateManyWithoutDivisionInput>;
  Region?: Maybe<RegionUpdateOneRequiredWithoutDivisionInput>;
};

export type DivisionWhereInput = {
  AND?: Maybe<Array<DivisionWhereInput>>;
  OR?: Maybe<Array<DivisionWhereInput>>;
  NOT?: Maybe<Array<DivisionWhereInput>>;
  id?: Maybe<StringFilter>;
  divisionName?: Maybe<StringFilter>;
  divisionCode?: Maybe<StringFilter>;
  subdiv?: Maybe<SubdivisionListRelationFilter>;
  Region?: Maybe<RegionWhereInput>;
  regionId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TownCreateInput = {
  id?: Maybe<Scalars['String']>;
  townName: Scalars['String'];
  townCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  school?: Maybe<SchoolCreateManyWithoutTownInput>;
  Subdivision: SubdivisionCreateOneWithoutTownInput;
};

export type TownWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type TownUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  townName?: Maybe<StringFieldUpdateOperationsInput>;
  townCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateManyWithoutTownInput>;
  Subdivision?: Maybe<SubdivisionUpdateOneRequiredWithoutTownInput>;
};

export type TownWhereInput = {
  AND?: Maybe<Array<TownWhereInput>>;
  OR?: Maybe<Array<TownWhereInput>>;
  NOT?: Maybe<Array<TownWhereInput>>;
  id?: Maybe<StringFilter>;
  townName?: Maybe<StringFilter>;
  townCode?: Maybe<StringFilter>;
  school?: Maybe<SchoolListRelationFilter>;
  Subdivision?: Maybe<SubdivisionWhereInput>;
  subdivisionId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SchoolCreateInput = {
  id?: Maybe<Scalars['String']>;
  schoolName: Scalars['String'];
  schoolPublicCode: Scalars['String'];
  schoolSecretCode: Scalars['String'];
  schoolCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  section?: Maybe<SectionCreateManyWithoutSchoolInput>;
  Town: TownCreateOneWithoutSchoolInput;
};

export type SchoolWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  schoolPublicCode?: Maybe<Scalars['String']>;
  schoolSecretCode?: Maybe<Scalars['String']>;
};

export type SchoolUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  schoolName?: Maybe<StringFieldUpdateOperationsInput>;
  schoolPublicCode?: Maybe<StringFieldUpdateOperationsInput>;
  schoolSecretCode?: Maybe<StringFieldUpdateOperationsInput>;
  schoolCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  section?: Maybe<SectionUpdateManyWithoutSchoolInput>;
  Town?: Maybe<TownUpdateOneRequiredWithoutSchoolInput>;
};

export type SchoolWhereInput = {
  AND?: Maybe<Array<SchoolWhereInput>>;
  OR?: Maybe<Array<SchoolWhereInput>>;
  NOT?: Maybe<Array<SchoolWhereInput>>;
  id?: Maybe<StringFilter>;
  schoolName?: Maybe<StringFilter>;
  schoolPublicCode?: Maybe<StringFilter>;
  schoolSecretCode?: Maybe<StringFilter>;
  schoolCode?: Maybe<StringFilter>;
  section?: Maybe<SectionListRelationFilter>;
  Town?: Maybe<TownWhereInput>;
  townId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SectionCreateInput = {
  id?: Maybe<Scalars['String']>;
  sectionName: Scalars['String'];
  sectionCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  department?: Maybe<DepartmentCreateManyWithoutSectionInput>;
  classroom?: Maybe<ClassroomCreateManyWithoutSectionInput>;
  School: SchoolCreateOneWithoutSectionInput;
};

export type SectionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type SectionUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sectionName?: Maybe<StringFieldUpdateOperationsInput>;
  sectionCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  department?: Maybe<DepartmentUpdateManyWithoutSectionInput>;
  classroom?: Maybe<ClassroomUpdateManyWithoutSectionInput>;
  School?: Maybe<SchoolUpdateOneRequiredWithoutSectionInput>;
};

export type SectionUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sectionName?: Maybe<StringFieldUpdateOperationsInput>;
  sectionCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SectionWhereInput = {
  AND?: Maybe<Array<SectionWhereInput>>;
  OR?: Maybe<Array<SectionWhereInput>>;
  NOT?: Maybe<Array<SectionWhereInput>>;
  id?: Maybe<StringFilter>;
  sectionName?: Maybe<StringFilter>;
  sectionCode?: Maybe<StringFilter>;
  department?: Maybe<DepartmentListRelationFilter>;
  classroom?: Maybe<ClassroomListRelationFilter>;
  School?: Maybe<SchoolWhereInput>;
  schoolId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SubdivisionUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  subdivName?: Maybe<StringFieldUpdateOperationsInput>;
  subdivCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubdivisionWhereInput = {
  AND?: Maybe<Array<SubdivisionWhereInput>>;
  OR?: Maybe<Array<SubdivisionWhereInput>>;
  NOT?: Maybe<Array<SubdivisionWhereInput>>;
  id?: Maybe<StringFilter>;
  subdivName?: Maybe<StringFilter>;
  subdivCode?: Maybe<StringFilter>;
  town?: Maybe<TownListRelationFilter>;
  Division?: Maybe<DivisionWhereInput>;
  divisionId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SubdivisionCreateInput = {
  id?: Maybe<Scalars['String']>;
  subdivName: Scalars['String'];
  subdivCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  town?: Maybe<TownCreateManyWithoutSubdivisionInput>;
  Division: DivisionCreateOneWithoutSubdivInput;
};

export type SubdivisionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type SubdivisionUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  subdivName?: Maybe<StringFieldUpdateOperationsInput>;
  subdivCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  town?: Maybe<TownUpdateManyWithoutSubdivisionInput>;
  Division?: Maybe<DivisionUpdateOneRequiredWithoutSubdivInput>;
};

export type DepartmentWhereInput = {
  AND?: Maybe<Array<DepartmentWhereInput>>;
  OR?: Maybe<Array<DepartmentWhereInput>>;
  NOT?: Maybe<Array<DepartmentWhereInput>>;
  id?: Maybe<StringFilter>;
  deptName?: Maybe<StringFilter>;
  deptCode?: Maybe<StringFilter>;
  annProfDept?: Maybe<AnnProfDeptListRelationFilter>;
  subject?: Maybe<SubjectListRelationFilter>;
  Section?: Maybe<SectionWhereInput>;
  sectionId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type DepartmentCreateInput = {
  id?: Maybe<Scalars['String']>;
  deptName: Scalars['String'];
  deptCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annProfDept?: Maybe<AnnProfDeptCreateManyWithoutDepartmentInput>;
  subject?: Maybe<SubjectCreateManyWithoutDepartmentInput>;
  Section: SectionCreateOneWithoutDepartmentInput;
};

export type DepartmentWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DepartmentUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  deptName?: Maybe<StringFieldUpdateOperationsInput>;
  deptCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annProfDept?: Maybe<AnnProfDeptUpdateManyWithoutDepartmentInput>;
  subject?: Maybe<SubjectUpdateManyWithoutDepartmentInput>;
  Section?: Maybe<SectionUpdateOneRequiredWithoutDepartmentInput>;
};

export type ProfCreateInput = {
  id?: Maybe<Scalars['String']>;
  prof1stName: Scalars['String'];
  prof2ndName: Scalars['String'];
  prof3rdName: Scalars['String'];
  profMatricule: Scalars['String'];
  profSecretCode: Scalars['String'];
  gender: Scalars['String'];
  image: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['Int'];
  specialty: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annProfDept?: Maybe<AnnProfDeptCreateManyWithoutProfInput>;
};

export type ProfWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  profMatricule?: Maybe<Scalars['String']>;
  profSecretCode?: Maybe<Scalars['String']>;
};

export type ProfUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  prof1stName?: Maybe<StringFieldUpdateOperationsInput>;
  prof2ndName?: Maybe<StringFieldUpdateOperationsInput>;
  prof3rdName?: Maybe<StringFieldUpdateOperationsInput>;
  profMatricule?: Maybe<StringFieldUpdateOperationsInput>;
  profSecretCode?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<IntFieldUpdateOperationsInput>;
  specialty?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annProfDept?: Maybe<AnnProfDeptUpdateManyWithoutProfInput>;
};

export type ProfWhereInput = {
  AND?: Maybe<Array<ProfWhereInput>>;
  OR?: Maybe<Array<ProfWhereInput>>;
  NOT?: Maybe<Array<ProfWhereInput>>;
  id?: Maybe<StringFilter>;
  prof1stName?: Maybe<StringFilter>;
  prof2ndName?: Maybe<StringFilter>;
  prof3rdName?: Maybe<StringFilter>;
  profMatricule?: Maybe<StringFilter>;
  profSecretCode?: Maybe<StringFilter>;
  gender?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  phoneNumber?: Maybe<IntFilter>;
  specialty?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  annProfDept?: Maybe<AnnProfDeptListRelationFilter>;
};

export type TermCreateInput = {
  id?: Maybe<Scalars['String']>;
  termName: Scalars['String'];
  termCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  sequence?: Maybe<SequenceCreateManyWithoutTermInput>;
};

export type TermWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type TermUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  termName?: Maybe<StringFieldUpdateOperationsInput>;
  termCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  sequence?: Maybe<SequenceUpdateManyWithoutTermInput>;
};

export type TermWhereInput = {
  AND?: Maybe<Array<TermWhereInput>>;
  OR?: Maybe<Array<TermWhereInput>>;
  NOT?: Maybe<Array<TermWhereInput>>;
  id?: Maybe<StringFilter>;
  termName?: Maybe<StringFilter>;
  termCode?: Maybe<StringFilter>;
  sequence?: Maybe<SequenceListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type LogbookCreateInput = {
  id?: Maybe<Scalars['String']>;
  subjectMatter: Scalars['String'];
  timeOfPeriod?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  AnnProfSubjDistro: AnnProfSubjDistroCreateOneWithoutLogbookInput;
};

export type LogbookWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type LogbookUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  subjectMatter?: Maybe<StringFieldUpdateOperationsInput>;
  timeOfPeriod?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  AnnProfSubjDistro?: Maybe<AnnProfSubjDistroUpdateOneRequiredWithoutLogbookInput>;
};

export type LogbookWhereInput = {
  AND?: Maybe<Array<LogbookWhereInput>>;
  OR?: Maybe<Array<LogbookWhereInput>>;
  NOT?: Maybe<Array<LogbookWhereInput>>;
  id?: Maybe<StringFilter>;
  subjectMatter?: Maybe<StringFilter>;
  timeOfPeriod?: Maybe<DateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AnnProfSubjDistro?: Maybe<AnnProfSubjDistroWhereInput>;
  AnnProfSubjDistroId?: Maybe<StringFilter>;
};

export type SchoolYearCreateInput = {
  id?: Maybe<Scalars['String']>;
  yearName: Scalars['String'];
  yearCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annStudentClassroom?: Maybe<AnnStudentClassroomCreateManyWithoutSchoolYearInput>;
  annProfDept?: Maybe<AnnProfDeptCreateManyWithoutSchoolYearInput>;
};

export type SchoolYearWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type SchoolYearUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  yearName?: Maybe<StringFieldUpdateOperationsInput>;
  yearCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annStudentClassroom?: Maybe<AnnStudentClassroomUpdateManyWithoutSchoolYearInput>;
  annProfDept?: Maybe<AnnProfDeptUpdateManyWithoutSchoolYearInput>;
};

export type SchoolYearWhereInput = {
  AND?: Maybe<Array<SchoolYearWhereInput>>;
  OR?: Maybe<Array<SchoolYearWhereInput>>;
  NOT?: Maybe<Array<SchoolYearWhereInput>>;
  id?: Maybe<StringFilter>;
  yearName?: Maybe<StringFilter>;
  yearCode?: Maybe<StringFilter>;
  annStudentClassroom?: Maybe<AnnStudentClassroomListRelationFilter>;
  annProfDept?: Maybe<AnnProfDeptListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SubjectCreateInput = {
  id?: Maybe<Scalars['String']>;
  subjectName: Scalars['String'];
  subjectCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annProfSubj?: Maybe<AnnProfSubjDistroCreateManyWithoutSubjectInput>;
  Department: DepartmentCreateOneWithoutSubjectInput;
};

export type SubjectWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type SubjectUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  subjectName?: Maybe<StringFieldUpdateOperationsInput>;
  subjectCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annProfSubj?: Maybe<AnnProfSubjDistroUpdateManyWithoutSubjectInput>;
  Department?: Maybe<DepartmentUpdateOneRequiredWithoutSubjectInput>;
};

export type SubjectWhereInput = {
  AND?: Maybe<Array<SubjectWhereInput>>;
  OR?: Maybe<Array<SubjectWhereInput>>;
  NOT?: Maybe<Array<SubjectWhereInput>>;
  id?: Maybe<StringFilter>;
  subjectName?: Maybe<StringFilter>;
  subjectCode?: Maybe<StringFilter>;
  annProfSubj?: Maybe<AnnProfSubjDistroListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  Department?: Maybe<DepartmentWhereInput>;
  departmentId?: Maybe<StringFilter>;
};

export type SequenceCreateInput = {
  id?: Maybe<Scalars['String']>;
  seqName: Scalars['String'];
  seqCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  score?: Maybe<ScoreCreateManyWithoutSequenceInput>;
  Term: TermCreateOneWithoutSequenceInput;
};

export type SequenceWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type SequenceUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  seqName?: Maybe<StringFieldUpdateOperationsInput>;
  seqCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  score?: Maybe<ScoreUpdateManyWithoutSequenceInput>;
  Term?: Maybe<TermUpdateOneRequiredWithoutSequenceInput>;
};

export type SequenceWhereInput = {
  AND?: Maybe<Array<SequenceWhereInput>>;
  OR?: Maybe<Array<SequenceWhereInput>>;
  NOT?: Maybe<Array<SequenceWhereInput>>;
  id?: Maybe<StringFilter>;
  seqName?: Maybe<StringFilter>;
  seqCode?: Maybe<StringFilter>;
  score?: Maybe<ScoreListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  Term?: Maybe<TermWhereInput>;
  termId?: Maybe<StringFilter>;
};

export type AnnProfDeptCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annProfSubj?: Maybe<AnnProfSubjDistroCreateManyWithoutAnnProfDeptInput>;
  Department: DepartmentCreateOneWithoutAnnProfDeptInput;
  SchoolYear: SchoolYearCreateOneWithoutAnnProfDeptInput;
  Prof: ProfCreateOneWithoutAnnProfDeptInput;
};

export type AnnProfDeptWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AnnProfDeptUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annProfSubj?: Maybe<AnnProfSubjDistroUpdateManyWithoutAnnProfDeptInput>;
  Department?: Maybe<DepartmentUpdateOneRequiredWithoutAnnProfDeptInput>;
  SchoolYear?: Maybe<SchoolYearUpdateOneRequiredWithoutAnnProfDeptInput>;
  Prof?: Maybe<ProfUpdateOneRequiredWithoutAnnProfDeptInput>;
};

export type AnnProfDeptWhereInput = {
  AND?: Maybe<Array<AnnProfDeptWhereInput>>;
  OR?: Maybe<Array<AnnProfDeptWhereInput>>;
  NOT?: Maybe<Array<AnnProfDeptWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  annProfSubj?: Maybe<AnnProfSubjDistroListRelationFilter>;
  Department?: Maybe<DepartmentWhereInput>;
  departmentId?: Maybe<StringFilter>;
  SchoolYear?: Maybe<SchoolYearWhereInput>;
  schoolYearId?: Maybe<StringFilter>;
  Prof?: Maybe<ProfWhereInput>;
  profId?: Maybe<StringFilter>;
};

export type AnnProfSubjDistroCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  AnnProfDept: AnnProfDeptCreateOneWithoutAnnProfSubjInput;
  Subject: SubjectCreateOneWithoutAnnProfSubjInput;
  Classroom: ClassroomCreateOneWithoutAnnProfSubjInput;
  score?: Maybe<ScoreCreateManyWithoutAnnProfSubjInput>;
  Logbook?: Maybe<LogbookCreateManyWithoutAnnProfSubjDistroInput>;
};

export type AnnProfSubjDistroWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AnnProfSubjDistroUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  AnnProfDept?: Maybe<AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput>;
  Subject?: Maybe<SubjectUpdateOneRequiredWithoutAnnProfSubjInput>;
  Classroom?: Maybe<ClassroomUpdateOneRequiredWithoutAnnProfSubjInput>;
  score?: Maybe<ScoreUpdateManyWithoutAnnProfSubjInput>;
  Logbook?: Maybe<LogbookUpdateManyWithoutAnnProfSubjDistroInput>;
};

export type AnnProfSubjDistroWhereInput = {
  AND?: Maybe<Array<AnnProfSubjDistroWhereInput>>;
  OR?: Maybe<Array<AnnProfSubjDistroWhereInput>>;
  NOT?: Maybe<Array<AnnProfSubjDistroWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AnnProfDept?: Maybe<AnnProfDeptWhereInput>;
  annProfDeptId?: Maybe<StringFilter>;
  Subject?: Maybe<SubjectWhereInput>;
  subjectId?: Maybe<StringFilter>;
  Classroom?: Maybe<ClassroomWhereInput>;
  classroomId?: Maybe<StringFilter>;
  score?: Maybe<ScoreListRelationFilter>;
  Logbook?: Maybe<LogbookListRelationFilter>;
};

export type AnnStudentClassroomCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  SchoolYear: SchoolYearCreateOneWithoutAnnStudentClassroomInput;
  Classroom: ClassroomCreateOneWithoutAnnStudentClassroomInput;
  Student: StudentCreateOneWithoutAnnStudentClassroomInput;
  score?: Maybe<ScoreCreateManyWithoutAnnStudentClassInput>;
  feePayment?: Maybe<FinanceCreateManyWithoutAnnStudentClassroomInput>;
};

export type AnnStudentClassroomWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AnnStudentClassroomUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  SchoolYear?: Maybe<SchoolYearUpdateOneRequiredWithoutAnnStudentClassroomInput>;
  Classroom?: Maybe<ClassroomUpdateOneRequiredWithoutAnnStudentClassroomInput>;
  Student?: Maybe<StudentUpdateOneRequiredWithoutAnnStudentClassroomInput>;
  score?: Maybe<ScoreUpdateManyWithoutAnnStudentClassInput>;
  feePayment?: Maybe<FinanceUpdateManyWithoutAnnStudentClassroomInput>;
};

export type AnnStudentClassroomWhereInput = {
  AND?: Maybe<Array<AnnStudentClassroomWhereInput>>;
  OR?: Maybe<Array<AnnStudentClassroomWhereInput>>;
  NOT?: Maybe<Array<AnnStudentClassroomWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  SchoolYear?: Maybe<SchoolYearWhereInput>;
  schoolYearId?: Maybe<StringFilter>;
  Classroom?: Maybe<ClassroomWhereInput>;
  classroomId?: Maybe<StringFilter>;
  Student?: Maybe<StudentWhereInput>;
  studentId?: Maybe<StringFilter>;
  score?: Maybe<ScoreListRelationFilter>;
  feePayment?: Maybe<FinanceListRelationFilter>;
};

export type StudentCreateInput = {
  id?: Maybe<Scalars['String']>;
  student1stName: Scalars['String'];
  student2ndName: Scalars['String'];
  student3rdName: Scalars['String'];
  placeOfBirth: Scalars['String'];
  phoneNumber: Scalars['Int'];
  studentSecretCode: Scalars['String'];
  gender: Scalars['String'];
  email: Scalars['String'];
  studentMatricule: Scalars['String'];
  image: Scalars['String'];
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annStudentClassroom?: Maybe<AnnStudentClassroomCreateManyWithoutStudentInput>;
};

export type StudentWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  studentSecretCode?: Maybe<Scalars['String']>;
  studentMatricule?: Maybe<Scalars['String']>;
};

export type StudentUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  student1stName?: Maybe<StringFieldUpdateOperationsInput>;
  student2ndName?: Maybe<StringFieldUpdateOperationsInput>;
  student3rdName?: Maybe<StringFieldUpdateOperationsInput>;
  placeOfBirth?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<IntFieldUpdateOperationsInput>;
  studentSecretCode?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  studentMatricule?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  dateOfBirth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annStudentClassroom?: Maybe<AnnStudentClassroomUpdateManyWithoutStudentInput>;
};

export type StudentWhereInput = {
  AND?: Maybe<Array<StudentWhereInput>>;
  OR?: Maybe<Array<StudentWhereInput>>;
  NOT?: Maybe<Array<StudentWhereInput>>;
  id?: Maybe<StringFilter>;
  student1stName?: Maybe<StringFilter>;
  student2ndName?: Maybe<StringFilter>;
  student3rdName?: Maybe<StringFilter>;
  placeOfBirth?: Maybe<StringFilter>;
  phoneNumber?: Maybe<IntFilter>;
  studentSecretCode?: Maybe<StringFilter>;
  gender?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  studentMatricule?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  dateOfBirth?: Maybe<DateTimeFilter>;
  annStudentClassroom?: Maybe<AnnStudentClassroomListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ScoreCreateInput = {
  id?: Maybe<Scalars['String']>;
  marks: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annStudentClass?: Maybe<AnnStudentClassroomCreateManyWithoutScoreInput>;
  annProfSubj?: Maybe<AnnProfSubjDistroCreateManyWithoutScoreInput>;
  Sequence: SequenceCreateOneWithoutScoreInput;
};

export type ScoreWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ScoreUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  marks?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annStudentClass?: Maybe<AnnStudentClassroomUpdateManyWithoutScoreInput>;
  annProfSubj?: Maybe<AnnProfSubjDistroUpdateManyWithoutScoreInput>;
  Sequence?: Maybe<SequenceUpdateOneRequiredWithoutScoreInput>;
};

export type ScoreWhereInput = {
  AND?: Maybe<Array<ScoreWhereInput>>;
  OR?: Maybe<Array<ScoreWhereInput>>;
  NOT?: Maybe<Array<ScoreWhereInput>>;
  id?: Maybe<StringFilter>;
  marks?: Maybe<StringFilter>;
  annStudentClass?: Maybe<AnnStudentClassroomListRelationFilter>;
  annProfSubj?: Maybe<AnnProfSubjDistroListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  Sequence?: Maybe<SequenceWhereInput>;
  sequenceId?: Maybe<StringFilter>;
};

export type ClassroomCreateInput = {
  id?: Maybe<Scalars['String']>;
  className: Scalars['String'];
  classCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annProfSubj?: Maybe<AnnProfSubjDistroCreateManyWithoutClassroomInput>;
  annStudentClassroom?: Maybe<AnnStudentClassroomCreateManyWithoutClassroomInput>;
  Section: SectionCreateOneWithoutClassroomInput;
};

export type ClassroomWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ClassroomUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  className?: Maybe<StringFieldUpdateOperationsInput>;
  classCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annProfSubj?: Maybe<AnnProfSubjDistroUpdateManyWithoutClassroomInput>;
  annStudentClassroom?: Maybe<AnnStudentClassroomUpdateManyWithoutClassroomInput>;
  Section?: Maybe<SectionUpdateOneRequiredWithoutClassroomInput>;
};

export type ClassroomWhereInput = {
  AND?: Maybe<Array<ClassroomWhereInput>>;
  OR?: Maybe<Array<ClassroomWhereInput>>;
  NOT?: Maybe<Array<ClassroomWhereInput>>;
  id?: Maybe<StringFilter>;
  className?: Maybe<StringFilter>;
  classCode?: Maybe<StringFilter>;
  annProfSubj?: Maybe<AnnProfSubjDistroListRelationFilter>;
  annStudentClassroom?: Maybe<AnnStudentClassroomListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  Section?: Maybe<SectionWhereInput>;
  sectionId?: Maybe<StringFilter>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DivisionCreateManyWithoutRegionInput = {
  create?: Maybe<Array<DivisionCreateWithoutRegionInput>>;
  connect?: Maybe<Array<DivisionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<DivisionCreateOrConnectWithoutRegionInput>>;
};

export type DivisionUpdateManyWithoutRegionInput = {
  create?: Maybe<Array<DivisionCreateWithoutRegionInput>>;
  connect?: Maybe<Array<DivisionWhereUniqueInput>>;
  set?: Maybe<Array<DivisionWhereUniqueInput>>;
  disconnect?: Maybe<Array<DivisionWhereUniqueInput>>;
  delete?: Maybe<Array<DivisionWhereUniqueInput>>;
  update?: Maybe<Array<DivisionUpdateWithWhereUniqueWithoutRegionInput>>;
  updateMany?: Maybe<Array<DivisionUpdateManyWithWhereWithoutRegionInput>>;
  deleteMany?: Maybe<Array<DivisionScalarWhereInput>>;
  upsert?: Maybe<Array<DivisionUpsertWithWhereUniqueWithoutRegionInput>>;
  connectOrCreate?: Maybe<Array<DivisionCreateOrConnectWithoutRegionInput>>;
};

export type DivisionListRelationFilter = {
  every?: Maybe<DivisionWhereInput>;
  some?: Maybe<DivisionWhereInput>;
  none?: Maybe<DivisionWhereInput>;
};

export type SubdivisionCreateManyWithoutDivisionInput = {
  create?: Maybe<Array<SubdivisionCreateWithoutDivisionInput>>;
  connect?: Maybe<Array<SubdivisionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SubdivisionCreateOrConnectWithoutDivisionInput>>;
};

export type RegionCreateOneWithoutDivisionInput = {
  create?: Maybe<RegionCreateWithoutDivisionInput>;
  connect?: Maybe<RegionWhereUniqueInput>;
  connectOrCreate?: Maybe<RegionCreateOrConnectWithoutdivisionInput>;
};

export type SubdivisionUpdateManyWithoutDivisionInput = {
  create?: Maybe<Array<SubdivisionCreateWithoutDivisionInput>>;
  connect?: Maybe<Array<SubdivisionWhereUniqueInput>>;
  set?: Maybe<Array<SubdivisionWhereUniqueInput>>;
  disconnect?: Maybe<Array<SubdivisionWhereUniqueInput>>;
  delete?: Maybe<Array<SubdivisionWhereUniqueInput>>;
  update?: Maybe<Array<SubdivisionUpdateWithWhereUniqueWithoutDivisionInput>>;
  updateMany?: Maybe<Array<SubdivisionUpdateManyWithWhereWithoutDivisionInput>>;
  deleteMany?: Maybe<Array<SubdivisionScalarWhereInput>>;
  upsert?: Maybe<Array<SubdivisionUpsertWithWhereUniqueWithoutDivisionInput>>;
  connectOrCreate?: Maybe<Array<SubdivisionCreateOrConnectWithoutDivisionInput>>;
};

export type RegionUpdateOneRequiredWithoutDivisionInput = {
  create?: Maybe<RegionCreateWithoutDivisionInput>;
  connect?: Maybe<RegionWhereUniqueInput>;
  update?: Maybe<RegionUpdateWithoutDivisionInput>;
  upsert?: Maybe<RegionUpsertWithoutDivisionInput>;
  connectOrCreate?: Maybe<RegionCreateOrConnectWithoutdivisionInput>;
};

export type SubdivisionListRelationFilter = {
  every?: Maybe<SubdivisionWhereInput>;
  some?: Maybe<SubdivisionWhereInput>;
  none?: Maybe<SubdivisionWhereInput>;
};

export type SchoolCreateManyWithoutTownInput = {
  create?: Maybe<Array<SchoolCreateWithoutTownInput>>;
  connect?: Maybe<Array<SchoolWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SchoolCreateOrConnectWithoutTownInput>>;
};

export type SubdivisionCreateOneWithoutTownInput = {
  create?: Maybe<SubdivisionCreateWithoutTownInput>;
  connect?: Maybe<SubdivisionWhereUniqueInput>;
  connectOrCreate?: Maybe<SubdivisionCreateOrConnectWithouttownInput>;
};

export type SchoolUpdateManyWithoutTownInput = {
  create?: Maybe<Array<SchoolCreateWithoutTownInput>>;
  connect?: Maybe<Array<SchoolWhereUniqueInput>>;
  set?: Maybe<Array<SchoolWhereUniqueInput>>;
  disconnect?: Maybe<Array<SchoolWhereUniqueInput>>;
  delete?: Maybe<Array<SchoolWhereUniqueInput>>;
  update?: Maybe<Array<SchoolUpdateWithWhereUniqueWithoutTownInput>>;
  updateMany?: Maybe<Array<SchoolUpdateManyWithWhereWithoutTownInput>>;
  deleteMany?: Maybe<Array<SchoolScalarWhereInput>>;
  upsert?: Maybe<Array<SchoolUpsertWithWhereUniqueWithoutTownInput>>;
  connectOrCreate?: Maybe<Array<SchoolCreateOrConnectWithoutTownInput>>;
};

export type SubdivisionUpdateOneRequiredWithoutTownInput = {
  create?: Maybe<SubdivisionCreateWithoutTownInput>;
  connect?: Maybe<SubdivisionWhereUniqueInput>;
  update?: Maybe<SubdivisionUpdateWithoutTownInput>;
  upsert?: Maybe<SubdivisionUpsertWithoutTownInput>;
  connectOrCreate?: Maybe<SubdivisionCreateOrConnectWithouttownInput>;
};

export type SchoolListRelationFilter = {
  every?: Maybe<SchoolWhereInput>;
  some?: Maybe<SchoolWhereInput>;
  none?: Maybe<SchoolWhereInput>;
};

export type SectionCreateManyWithoutSchoolInput = {
  create?: Maybe<Array<SectionCreateWithoutSchoolInput>>;
  connect?: Maybe<Array<SectionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SectionCreateOrConnectWithoutSchoolInput>>;
};

export type TownCreateOneWithoutSchoolInput = {
  create?: Maybe<TownCreateWithoutSchoolInput>;
  connect?: Maybe<TownWhereUniqueInput>;
  connectOrCreate?: Maybe<TownCreateOrConnectWithoutschoolInput>;
};

export type SectionUpdateManyWithoutSchoolInput = {
  create?: Maybe<Array<SectionCreateWithoutSchoolInput>>;
  connect?: Maybe<Array<SectionWhereUniqueInput>>;
  set?: Maybe<Array<SectionWhereUniqueInput>>;
  disconnect?: Maybe<Array<SectionWhereUniqueInput>>;
  delete?: Maybe<Array<SectionWhereUniqueInput>>;
  update?: Maybe<Array<SectionUpdateWithWhereUniqueWithoutSchoolInput>>;
  updateMany?: Maybe<Array<SectionUpdateManyWithWhereWithoutSchoolInput>>;
  deleteMany?: Maybe<Array<SectionScalarWhereInput>>;
  upsert?: Maybe<Array<SectionUpsertWithWhereUniqueWithoutSchoolInput>>;
  connectOrCreate?: Maybe<Array<SectionCreateOrConnectWithoutSchoolInput>>;
};

export type TownUpdateOneRequiredWithoutSchoolInput = {
  create?: Maybe<TownCreateWithoutSchoolInput>;
  connect?: Maybe<TownWhereUniqueInput>;
  update?: Maybe<TownUpdateWithoutSchoolInput>;
  upsert?: Maybe<TownUpsertWithoutSchoolInput>;
  connectOrCreate?: Maybe<TownCreateOrConnectWithoutschoolInput>;
};

export type SectionListRelationFilter = {
  every?: Maybe<SectionWhereInput>;
  some?: Maybe<SectionWhereInput>;
  none?: Maybe<SectionWhereInput>;
};

export type DepartmentCreateManyWithoutSectionInput = {
  create?: Maybe<Array<DepartmentCreateWithoutSectionInput>>;
  connect?: Maybe<Array<DepartmentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<DepartmentCreateOrConnectWithoutSectionInput>>;
};

export type ClassroomCreateManyWithoutSectionInput = {
  create?: Maybe<Array<ClassroomCreateWithoutSectionInput>>;
  connect?: Maybe<Array<ClassroomWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ClassroomCreateOrConnectWithoutSectionInput>>;
};

export type SchoolCreateOneWithoutSectionInput = {
  create?: Maybe<SchoolCreateWithoutSectionInput>;
  connect?: Maybe<SchoolWhereUniqueInput>;
  connectOrCreate?: Maybe<SchoolCreateOrConnectWithoutsectionInput>;
};

export type DepartmentUpdateManyWithoutSectionInput = {
  create?: Maybe<Array<DepartmentCreateWithoutSectionInput>>;
  connect?: Maybe<Array<DepartmentWhereUniqueInput>>;
  set?: Maybe<Array<DepartmentWhereUniqueInput>>;
  disconnect?: Maybe<Array<DepartmentWhereUniqueInput>>;
  delete?: Maybe<Array<DepartmentWhereUniqueInput>>;
  update?: Maybe<Array<DepartmentUpdateWithWhereUniqueWithoutSectionInput>>;
  updateMany?: Maybe<Array<DepartmentUpdateManyWithWhereWithoutSectionInput>>;
  deleteMany?: Maybe<Array<DepartmentScalarWhereInput>>;
  upsert?: Maybe<Array<DepartmentUpsertWithWhereUniqueWithoutSectionInput>>;
  connectOrCreate?: Maybe<Array<DepartmentCreateOrConnectWithoutSectionInput>>;
};

export type ClassroomUpdateManyWithoutSectionInput = {
  create?: Maybe<Array<ClassroomCreateWithoutSectionInput>>;
  connect?: Maybe<Array<ClassroomWhereUniqueInput>>;
  set?: Maybe<Array<ClassroomWhereUniqueInput>>;
  disconnect?: Maybe<Array<ClassroomWhereUniqueInput>>;
  delete?: Maybe<Array<ClassroomWhereUniqueInput>>;
  update?: Maybe<Array<ClassroomUpdateWithWhereUniqueWithoutSectionInput>>;
  updateMany?: Maybe<Array<ClassroomUpdateManyWithWhereWithoutSectionInput>>;
  deleteMany?: Maybe<Array<ClassroomScalarWhereInput>>;
  upsert?: Maybe<Array<ClassroomUpsertWithWhereUniqueWithoutSectionInput>>;
  connectOrCreate?: Maybe<Array<ClassroomCreateOrConnectWithoutSectionInput>>;
};

export type SchoolUpdateOneRequiredWithoutSectionInput = {
  create?: Maybe<SchoolCreateWithoutSectionInput>;
  connect?: Maybe<SchoolWhereUniqueInput>;
  update?: Maybe<SchoolUpdateWithoutSectionInput>;
  upsert?: Maybe<SchoolUpsertWithoutSectionInput>;
  connectOrCreate?: Maybe<SchoolCreateOrConnectWithoutsectionInput>;
};

export type DepartmentListRelationFilter = {
  every?: Maybe<DepartmentWhereInput>;
  some?: Maybe<DepartmentWhereInput>;
  none?: Maybe<DepartmentWhereInput>;
};

export type ClassroomListRelationFilter = {
  every?: Maybe<ClassroomWhereInput>;
  some?: Maybe<ClassroomWhereInput>;
  none?: Maybe<ClassroomWhereInput>;
};

export type TownListRelationFilter = {
  every?: Maybe<TownWhereInput>;
  some?: Maybe<TownWhereInput>;
  none?: Maybe<TownWhereInput>;
};

export type TownCreateManyWithoutSubdivisionInput = {
  create?: Maybe<Array<TownCreateWithoutSubdivisionInput>>;
  connect?: Maybe<Array<TownWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TownCreateOrConnectWithoutSubdivisionInput>>;
};

export type DivisionCreateOneWithoutSubdivInput = {
  create?: Maybe<DivisionCreateWithoutSubdivInput>;
  connect?: Maybe<DivisionWhereUniqueInput>;
  connectOrCreate?: Maybe<DivisionCreateOrConnectWithoutsubdivInput>;
};

export type TownUpdateManyWithoutSubdivisionInput = {
  create?: Maybe<Array<TownCreateWithoutSubdivisionInput>>;
  connect?: Maybe<Array<TownWhereUniqueInput>>;
  set?: Maybe<Array<TownWhereUniqueInput>>;
  disconnect?: Maybe<Array<TownWhereUniqueInput>>;
  delete?: Maybe<Array<TownWhereUniqueInput>>;
  update?: Maybe<Array<TownUpdateWithWhereUniqueWithoutSubdivisionInput>>;
  updateMany?: Maybe<Array<TownUpdateManyWithWhereWithoutSubdivisionInput>>;
  deleteMany?: Maybe<Array<TownScalarWhereInput>>;
  upsert?: Maybe<Array<TownUpsertWithWhereUniqueWithoutSubdivisionInput>>;
  connectOrCreate?: Maybe<Array<TownCreateOrConnectWithoutSubdivisionInput>>;
};

export type DivisionUpdateOneRequiredWithoutSubdivInput = {
  create?: Maybe<DivisionCreateWithoutSubdivInput>;
  connect?: Maybe<DivisionWhereUniqueInput>;
  update?: Maybe<DivisionUpdateWithoutSubdivInput>;
  upsert?: Maybe<DivisionUpsertWithoutSubdivInput>;
  connectOrCreate?: Maybe<DivisionCreateOrConnectWithoutsubdivInput>;
};

export type AnnProfDeptListRelationFilter = {
  every?: Maybe<AnnProfDeptWhereInput>;
  some?: Maybe<AnnProfDeptWhereInput>;
  none?: Maybe<AnnProfDeptWhereInput>;
};

export type SubjectListRelationFilter = {
  every?: Maybe<SubjectWhereInput>;
  some?: Maybe<SubjectWhereInput>;
  none?: Maybe<SubjectWhereInput>;
};

export type AnnProfDeptCreateManyWithoutDepartmentInput = {
  create?: Maybe<Array<AnnProfDeptCreateWithoutDepartmentInput>>;
  connect?: Maybe<Array<AnnProfDeptWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AnnProfDeptCreateOrConnectWithoutDepartmentInput>>;
};

export type SubjectCreateManyWithoutDepartmentInput = {
  create?: Maybe<Array<SubjectCreateWithoutDepartmentInput>>;
  connect?: Maybe<Array<SubjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SubjectCreateOrConnectWithoutDepartmentInput>>;
};

export type SectionCreateOneWithoutDepartmentInput = {
  create?: Maybe<SectionCreateWithoutDepartmentInput>;
  connect?: Maybe<SectionWhereUniqueInput>;
  connectOrCreate?: Maybe<SectionCreateOrConnectWithoutdepartmentInput>;
};

export type AnnProfDeptUpdateManyWithoutDepartmentInput = {
  create?: Maybe<Array<AnnProfDeptCreateWithoutDepartmentInput>>;
  connect?: Maybe<Array<AnnProfDeptWhereUniqueInput>>;
  set?: Maybe<Array<AnnProfDeptWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnnProfDeptWhereUniqueInput>>;
  delete?: Maybe<Array<AnnProfDeptWhereUniqueInput>>;
  update?: Maybe<Array<AnnProfDeptUpdateWithWhereUniqueWithoutDepartmentInput>>;
  updateMany?: Maybe<Array<AnnProfDeptUpdateManyWithWhereWithoutDepartmentInput>>;
  deleteMany?: Maybe<Array<AnnProfDeptScalarWhereInput>>;
  upsert?: Maybe<Array<AnnProfDeptUpsertWithWhereUniqueWithoutDepartmentInput>>;
  connectOrCreate?: Maybe<Array<AnnProfDeptCreateOrConnectWithoutDepartmentInput>>;
};

export type SubjectUpdateManyWithoutDepartmentInput = {
  create?: Maybe<Array<SubjectCreateWithoutDepartmentInput>>;
  connect?: Maybe<Array<SubjectWhereUniqueInput>>;
  set?: Maybe<Array<SubjectWhereUniqueInput>>;
  disconnect?: Maybe<Array<SubjectWhereUniqueInput>>;
  delete?: Maybe<Array<SubjectWhereUniqueInput>>;
  update?: Maybe<Array<SubjectUpdateWithWhereUniqueWithoutDepartmentInput>>;
  updateMany?: Maybe<Array<SubjectUpdateManyWithWhereWithoutDepartmentInput>>;
  deleteMany?: Maybe<Array<SubjectScalarWhereInput>>;
  upsert?: Maybe<Array<SubjectUpsertWithWhereUniqueWithoutDepartmentInput>>;
  connectOrCreate?: Maybe<Array<SubjectCreateOrConnectWithoutDepartmentInput>>;
};

export type SectionUpdateOneRequiredWithoutDepartmentInput = {
  create?: Maybe<SectionCreateWithoutDepartmentInput>;
  connect?: Maybe<SectionWhereUniqueInput>;
  update?: Maybe<SectionUpdateWithoutDepartmentInput>;
  upsert?: Maybe<SectionUpsertWithoutDepartmentInput>;
  connectOrCreate?: Maybe<SectionCreateOrConnectWithoutdepartmentInput>;
};

export type AnnProfDeptCreateManyWithoutProfInput = {
  create?: Maybe<Array<AnnProfDeptCreateWithoutProfInput>>;
  connect?: Maybe<Array<AnnProfDeptWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AnnProfDeptCreateOrConnectWithoutProfInput>>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type AnnProfDeptUpdateManyWithoutProfInput = {
  create?: Maybe<Array<AnnProfDeptCreateWithoutProfInput>>;
  connect?: Maybe<Array<AnnProfDeptWhereUniqueInput>>;
  set?: Maybe<Array<AnnProfDeptWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnnProfDeptWhereUniqueInput>>;
  delete?: Maybe<Array<AnnProfDeptWhereUniqueInput>>;
  update?: Maybe<Array<AnnProfDeptUpdateWithWhereUniqueWithoutProfInput>>;
  updateMany?: Maybe<Array<AnnProfDeptUpdateManyWithWhereWithoutProfInput>>;
  deleteMany?: Maybe<Array<AnnProfDeptScalarWhereInput>>;
  upsert?: Maybe<Array<AnnProfDeptUpsertWithWhereUniqueWithoutProfInput>>;
  connectOrCreate?: Maybe<Array<AnnProfDeptCreateOrConnectWithoutProfInput>>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type SequenceCreateManyWithoutTermInput = {
  create?: Maybe<Array<SequenceCreateWithoutTermInput>>;
  connect?: Maybe<Array<SequenceWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SequenceCreateOrConnectWithoutTermInput>>;
};

export type SequenceUpdateManyWithoutTermInput = {
  create?: Maybe<Array<SequenceCreateWithoutTermInput>>;
  connect?: Maybe<Array<SequenceWhereUniqueInput>>;
  set?: Maybe<Array<SequenceWhereUniqueInput>>;
  disconnect?: Maybe<Array<SequenceWhereUniqueInput>>;
  delete?: Maybe<Array<SequenceWhereUniqueInput>>;
  update?: Maybe<Array<SequenceUpdateWithWhereUniqueWithoutTermInput>>;
  updateMany?: Maybe<Array<SequenceUpdateManyWithWhereWithoutTermInput>>;
  deleteMany?: Maybe<Array<SequenceScalarWhereInput>>;
  upsert?: Maybe<Array<SequenceUpsertWithWhereUniqueWithoutTermInput>>;
  connectOrCreate?: Maybe<Array<SequenceCreateOrConnectWithoutTermInput>>;
};

export type SequenceListRelationFilter = {
  every?: Maybe<SequenceWhereInput>;
  some?: Maybe<SequenceWhereInput>;
  none?: Maybe<SequenceWhereInput>;
};

export type AnnProfSubjDistroCreateOneWithoutLogbookInput = {
  create?: Maybe<AnnProfSubjDistroCreateWithoutLogbookInput>;
  connect?: Maybe<AnnProfSubjDistroWhereUniqueInput>;
  connectOrCreate?: Maybe<AnnProfSubjDistroCreateOrConnectWithoutLogbookInput>;
};

export type AnnProfSubjDistroUpdateOneRequiredWithoutLogbookInput = {
  create?: Maybe<AnnProfSubjDistroCreateWithoutLogbookInput>;
  connect?: Maybe<AnnProfSubjDistroWhereUniqueInput>;
  update?: Maybe<AnnProfSubjDistroUpdateWithoutLogbookInput>;
  upsert?: Maybe<AnnProfSubjDistroUpsertWithoutLogbookInput>;
  connectOrCreate?: Maybe<AnnProfSubjDistroCreateOrConnectWithoutLogbookInput>;
};

export type AnnStudentClassroomCreateManyWithoutSchoolYearInput = {
  create?: Maybe<Array<AnnStudentClassroomCreateWithoutSchoolYearInput>>;
  connect?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AnnStudentClassroomCreateOrConnectWithoutSchoolYearInput>>;
};

export type AnnProfDeptCreateManyWithoutSchoolYearInput = {
  create?: Maybe<Array<AnnProfDeptCreateWithoutSchoolYearInput>>;
  connect?: Maybe<Array<AnnProfDeptWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AnnProfDeptCreateOrConnectWithoutSchoolYearInput>>;
};

export type AnnStudentClassroomUpdateManyWithoutSchoolYearInput = {
  create?: Maybe<Array<AnnStudentClassroomCreateWithoutSchoolYearInput>>;
  connect?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  set?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  delete?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  update?: Maybe<Array<AnnStudentClassroomUpdateWithWhereUniqueWithoutSchoolYearInput>>;
  updateMany?: Maybe<Array<AnnStudentClassroomUpdateManyWithWhereWithoutSchoolYearInput>>;
  deleteMany?: Maybe<Array<AnnStudentClassroomScalarWhereInput>>;
  upsert?: Maybe<Array<AnnStudentClassroomUpsertWithWhereUniqueWithoutSchoolYearInput>>;
  connectOrCreate?: Maybe<Array<AnnStudentClassroomCreateOrConnectWithoutSchoolYearInput>>;
};

export type AnnProfDeptUpdateManyWithoutSchoolYearInput = {
  create?: Maybe<Array<AnnProfDeptCreateWithoutSchoolYearInput>>;
  connect?: Maybe<Array<AnnProfDeptWhereUniqueInput>>;
  set?: Maybe<Array<AnnProfDeptWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnnProfDeptWhereUniqueInput>>;
  delete?: Maybe<Array<AnnProfDeptWhereUniqueInput>>;
  update?: Maybe<Array<AnnProfDeptUpdateWithWhereUniqueWithoutSchoolYearInput>>;
  updateMany?: Maybe<Array<AnnProfDeptUpdateManyWithWhereWithoutSchoolYearInput>>;
  deleteMany?: Maybe<Array<AnnProfDeptScalarWhereInput>>;
  upsert?: Maybe<Array<AnnProfDeptUpsertWithWhereUniqueWithoutSchoolYearInput>>;
  connectOrCreate?: Maybe<Array<AnnProfDeptCreateOrConnectWithoutSchoolYearInput>>;
};

export type AnnStudentClassroomListRelationFilter = {
  every?: Maybe<AnnStudentClassroomWhereInput>;
  some?: Maybe<AnnStudentClassroomWhereInput>;
  none?: Maybe<AnnStudentClassroomWhereInput>;
};

export type AnnProfSubjDistroCreateManyWithoutSubjectInput = {
  create?: Maybe<Array<AnnProfSubjDistroCreateWithoutSubjectInput>>;
  connect?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AnnProfSubjDistroCreateOrConnectWithoutSubjectInput>>;
};

export type DepartmentCreateOneWithoutSubjectInput = {
  create?: Maybe<DepartmentCreateWithoutSubjectInput>;
  connect?: Maybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: Maybe<DepartmentCreateOrConnectWithoutsubjectInput>;
};

export type AnnProfSubjDistroUpdateManyWithoutSubjectInput = {
  create?: Maybe<Array<AnnProfSubjDistroCreateWithoutSubjectInput>>;
  connect?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  set?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  delete?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  update?: Maybe<Array<AnnProfSubjDistroUpdateWithWhereUniqueWithoutSubjectInput>>;
  updateMany?: Maybe<Array<AnnProfSubjDistroUpdateManyWithWhereWithoutSubjectInput>>;
  deleteMany?: Maybe<Array<AnnProfSubjDistroScalarWhereInput>>;
  upsert?: Maybe<Array<AnnProfSubjDistroUpsertWithWhereUniqueWithoutSubjectInput>>;
  connectOrCreate?: Maybe<Array<AnnProfSubjDistroCreateOrConnectWithoutSubjectInput>>;
};

export type DepartmentUpdateOneRequiredWithoutSubjectInput = {
  create?: Maybe<DepartmentCreateWithoutSubjectInput>;
  connect?: Maybe<DepartmentWhereUniqueInput>;
  update?: Maybe<DepartmentUpdateWithoutSubjectInput>;
  upsert?: Maybe<DepartmentUpsertWithoutSubjectInput>;
  connectOrCreate?: Maybe<DepartmentCreateOrConnectWithoutsubjectInput>;
};

export type AnnProfSubjDistroListRelationFilter = {
  every?: Maybe<AnnProfSubjDistroWhereInput>;
  some?: Maybe<AnnProfSubjDistroWhereInput>;
  none?: Maybe<AnnProfSubjDistroWhereInput>;
};

export type ScoreCreateManyWithoutSequenceInput = {
  create?: Maybe<Array<ScoreCreateWithoutSequenceInput>>;
  connect?: Maybe<Array<ScoreWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ScoreCreateOrConnectWithoutSequenceInput>>;
};

export type TermCreateOneWithoutSequenceInput = {
  create?: Maybe<TermCreateWithoutSequenceInput>;
  connect?: Maybe<TermWhereUniqueInput>;
  connectOrCreate?: Maybe<TermCreateOrConnectWithoutsequenceInput>;
};

export type ScoreUpdateManyWithoutSequenceInput = {
  create?: Maybe<Array<ScoreCreateWithoutSequenceInput>>;
  connect?: Maybe<Array<ScoreWhereUniqueInput>>;
  set?: Maybe<Array<ScoreWhereUniqueInput>>;
  disconnect?: Maybe<Array<ScoreWhereUniqueInput>>;
  delete?: Maybe<Array<ScoreWhereUniqueInput>>;
  update?: Maybe<Array<ScoreUpdateWithWhereUniqueWithoutSequenceInput>>;
  updateMany?: Maybe<Array<ScoreUpdateManyWithWhereWithoutSequenceInput>>;
  deleteMany?: Maybe<Array<ScoreScalarWhereInput>>;
  upsert?: Maybe<Array<ScoreUpsertWithWhereUniqueWithoutSequenceInput>>;
  connectOrCreate?: Maybe<Array<ScoreCreateOrConnectWithoutSequenceInput>>;
};

export type TermUpdateOneRequiredWithoutSequenceInput = {
  create?: Maybe<TermCreateWithoutSequenceInput>;
  connect?: Maybe<TermWhereUniqueInput>;
  update?: Maybe<TermUpdateWithoutSequenceInput>;
  upsert?: Maybe<TermUpsertWithoutSequenceInput>;
  connectOrCreate?: Maybe<TermCreateOrConnectWithoutsequenceInput>;
};

export type ScoreListRelationFilter = {
  every?: Maybe<ScoreWhereInput>;
  some?: Maybe<ScoreWhereInput>;
  none?: Maybe<ScoreWhereInput>;
};

export type AnnProfSubjDistroCreateManyWithoutAnnProfDeptInput = {
  create?: Maybe<Array<AnnProfSubjDistroCreateWithoutAnnProfDeptInput>>;
  connect?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AnnProfSubjDistroCreateOrConnectWithoutAnnProfDeptInput>>;
};

export type DepartmentCreateOneWithoutAnnProfDeptInput = {
  create?: Maybe<DepartmentCreateWithoutAnnProfDeptInput>;
  connect?: Maybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: Maybe<DepartmentCreateOrConnectWithoutannProfDeptInput>;
};

export type SchoolYearCreateOneWithoutAnnProfDeptInput = {
  create?: Maybe<SchoolYearCreateWithoutAnnProfDeptInput>;
  connect?: Maybe<SchoolYearWhereUniqueInput>;
  connectOrCreate?: Maybe<SchoolYearCreateOrConnectWithoutannProfDeptInput>;
};

export type ProfCreateOneWithoutAnnProfDeptInput = {
  create?: Maybe<ProfCreateWithoutAnnProfDeptInput>;
  connect?: Maybe<ProfWhereUniqueInput>;
  connectOrCreate?: Maybe<ProfCreateOrConnectWithoutannProfDeptInput>;
};

export type AnnProfSubjDistroUpdateManyWithoutAnnProfDeptInput = {
  create?: Maybe<Array<AnnProfSubjDistroCreateWithoutAnnProfDeptInput>>;
  connect?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  set?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  delete?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  update?: Maybe<Array<AnnProfSubjDistroUpdateWithWhereUniqueWithoutAnnProfDeptInput>>;
  updateMany?: Maybe<Array<AnnProfSubjDistroUpdateManyWithWhereWithoutAnnProfDeptInput>>;
  deleteMany?: Maybe<Array<AnnProfSubjDistroScalarWhereInput>>;
  upsert?: Maybe<Array<AnnProfSubjDistroUpsertWithWhereUniqueWithoutAnnProfDeptInput>>;
  connectOrCreate?: Maybe<Array<AnnProfSubjDistroCreateOrConnectWithoutAnnProfDeptInput>>;
};

export type DepartmentUpdateOneRequiredWithoutAnnProfDeptInput = {
  create?: Maybe<DepartmentCreateWithoutAnnProfDeptInput>;
  connect?: Maybe<DepartmentWhereUniqueInput>;
  update?: Maybe<DepartmentUpdateWithoutAnnProfDeptInput>;
  upsert?: Maybe<DepartmentUpsertWithoutAnnProfDeptInput>;
  connectOrCreate?: Maybe<DepartmentCreateOrConnectWithoutannProfDeptInput>;
};

export type SchoolYearUpdateOneRequiredWithoutAnnProfDeptInput = {
  create?: Maybe<SchoolYearCreateWithoutAnnProfDeptInput>;
  connect?: Maybe<SchoolYearWhereUniqueInput>;
  update?: Maybe<SchoolYearUpdateWithoutAnnProfDeptInput>;
  upsert?: Maybe<SchoolYearUpsertWithoutAnnProfDeptInput>;
  connectOrCreate?: Maybe<SchoolYearCreateOrConnectWithoutannProfDeptInput>;
};

export type ProfUpdateOneRequiredWithoutAnnProfDeptInput = {
  create?: Maybe<ProfCreateWithoutAnnProfDeptInput>;
  connect?: Maybe<ProfWhereUniqueInput>;
  update?: Maybe<ProfUpdateWithoutAnnProfDeptInput>;
  upsert?: Maybe<ProfUpsertWithoutAnnProfDeptInput>;
  connectOrCreate?: Maybe<ProfCreateOrConnectWithoutannProfDeptInput>;
};

export type AnnProfDeptCreateOneWithoutAnnProfSubjInput = {
  create?: Maybe<AnnProfDeptCreateWithoutAnnProfSubjInput>;
  connect?: Maybe<AnnProfDeptWhereUniqueInput>;
  connectOrCreate?: Maybe<AnnProfDeptCreateOrConnectWithoutannProfSubjInput>;
};

export type SubjectCreateOneWithoutAnnProfSubjInput = {
  create?: Maybe<SubjectCreateWithoutAnnProfSubjInput>;
  connect?: Maybe<SubjectWhereUniqueInput>;
  connectOrCreate?: Maybe<SubjectCreateOrConnectWithoutannProfSubjInput>;
};

export type ClassroomCreateOneWithoutAnnProfSubjInput = {
  create?: Maybe<ClassroomCreateWithoutAnnProfSubjInput>;
  connect?: Maybe<ClassroomWhereUniqueInput>;
  connectOrCreate?: Maybe<ClassroomCreateOrConnectWithoutannProfSubjInput>;
};

export type ScoreCreateManyWithoutAnnProfSubjInput = {
  create?: Maybe<Array<ScoreCreateWithoutAnnProfSubjInput>>;
  connect?: Maybe<Array<ScoreWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ScoreCreateOrConnectWithoutannProfSubjInput>>;
};

export type LogbookCreateManyWithoutAnnProfSubjDistroInput = {
  create?: Maybe<Array<LogbookCreateWithoutAnnProfSubjDistroInput>>;
  connect?: Maybe<Array<LogbookWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<LogbookCreateOrConnectWithoutAnnProfSubjDistroInput>>;
};

export type AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput = {
  create?: Maybe<AnnProfDeptCreateWithoutAnnProfSubjInput>;
  connect?: Maybe<AnnProfDeptWhereUniqueInput>;
  update?: Maybe<AnnProfDeptUpdateWithoutAnnProfSubjInput>;
  upsert?: Maybe<AnnProfDeptUpsertWithoutAnnProfSubjInput>;
  connectOrCreate?: Maybe<AnnProfDeptCreateOrConnectWithoutannProfSubjInput>;
};

export type SubjectUpdateOneRequiredWithoutAnnProfSubjInput = {
  create?: Maybe<SubjectCreateWithoutAnnProfSubjInput>;
  connect?: Maybe<SubjectWhereUniqueInput>;
  update?: Maybe<SubjectUpdateWithoutAnnProfSubjInput>;
  upsert?: Maybe<SubjectUpsertWithoutAnnProfSubjInput>;
  connectOrCreate?: Maybe<SubjectCreateOrConnectWithoutannProfSubjInput>;
};

export type ClassroomUpdateOneRequiredWithoutAnnProfSubjInput = {
  create?: Maybe<ClassroomCreateWithoutAnnProfSubjInput>;
  connect?: Maybe<ClassroomWhereUniqueInput>;
  update?: Maybe<ClassroomUpdateWithoutAnnProfSubjInput>;
  upsert?: Maybe<ClassroomUpsertWithoutAnnProfSubjInput>;
  connectOrCreate?: Maybe<ClassroomCreateOrConnectWithoutannProfSubjInput>;
};

export type ScoreUpdateManyWithoutAnnProfSubjInput = {
  create?: Maybe<Array<ScoreCreateWithoutAnnProfSubjInput>>;
  connect?: Maybe<Array<ScoreWhereUniqueInput>>;
  set?: Maybe<Array<ScoreWhereUniqueInput>>;
  disconnect?: Maybe<Array<ScoreWhereUniqueInput>>;
  delete?: Maybe<Array<ScoreWhereUniqueInput>>;
  update?: Maybe<Array<ScoreUpdateWithWhereUniqueWithoutAnnProfSubjInput>>;
  updateMany?: Maybe<Array<ScoreUpdateManyWithWhereWithoutAnnProfSubjInput>>;
  deleteMany?: Maybe<Array<ScoreScalarWhereInput>>;
  upsert?: Maybe<Array<ScoreUpsertWithWhereUniqueWithoutAnnProfSubjInput>>;
  connectOrCreate?: Maybe<Array<ScoreCreateOrConnectWithoutannProfSubjInput>>;
};

export type LogbookUpdateManyWithoutAnnProfSubjDistroInput = {
  create?: Maybe<Array<LogbookCreateWithoutAnnProfSubjDistroInput>>;
  connect?: Maybe<Array<LogbookWhereUniqueInput>>;
  set?: Maybe<Array<LogbookWhereUniqueInput>>;
  disconnect?: Maybe<Array<LogbookWhereUniqueInput>>;
  delete?: Maybe<Array<LogbookWhereUniqueInput>>;
  update?: Maybe<Array<LogbookUpdateWithWhereUniqueWithoutAnnProfSubjDistroInput>>;
  updateMany?: Maybe<Array<LogbookUpdateManyWithWhereWithoutAnnProfSubjDistroInput>>;
  deleteMany?: Maybe<Array<LogbookScalarWhereInput>>;
  upsert?: Maybe<Array<LogbookUpsertWithWhereUniqueWithoutAnnProfSubjDistroInput>>;
  connectOrCreate?: Maybe<Array<LogbookCreateOrConnectWithoutAnnProfSubjDistroInput>>;
};

export type LogbookListRelationFilter = {
  every?: Maybe<LogbookWhereInput>;
  some?: Maybe<LogbookWhereInput>;
  none?: Maybe<LogbookWhereInput>;
};

export type SchoolYearCreateOneWithoutAnnStudentClassroomInput = {
  create?: Maybe<SchoolYearCreateWithoutAnnStudentClassroomInput>;
  connect?: Maybe<SchoolYearWhereUniqueInput>;
  connectOrCreate?: Maybe<SchoolYearCreateOrConnectWithoutannStudentClassroomInput>;
};

export type ClassroomCreateOneWithoutAnnStudentClassroomInput = {
  create?: Maybe<ClassroomCreateWithoutAnnStudentClassroomInput>;
  connect?: Maybe<ClassroomWhereUniqueInput>;
  connectOrCreate?: Maybe<ClassroomCreateOrConnectWithoutannStudentClassroomInput>;
};

export type StudentCreateOneWithoutAnnStudentClassroomInput = {
  create?: Maybe<StudentCreateWithoutAnnStudentClassroomInput>;
  connect?: Maybe<StudentWhereUniqueInput>;
  connectOrCreate?: Maybe<StudentCreateOrConnectWithoutannStudentClassroomInput>;
};

export type ScoreCreateManyWithoutAnnStudentClassInput = {
  create?: Maybe<Array<ScoreCreateWithoutAnnStudentClassInput>>;
  connect?: Maybe<Array<ScoreWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ScoreCreateOrConnectWithoutannStudentClassInput>>;
};

export type FinanceCreateManyWithoutAnnStudentClassroomInput = {
  create?: Maybe<Array<FinanceCreateWithoutAnnStudentClassroomInput>>;
  connect?: Maybe<Array<FinanceWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FinanceCreateOrConnectWithoutAnnStudentClassroomInput>>;
};

export type SchoolYearUpdateOneRequiredWithoutAnnStudentClassroomInput = {
  create?: Maybe<SchoolYearCreateWithoutAnnStudentClassroomInput>;
  connect?: Maybe<SchoolYearWhereUniqueInput>;
  update?: Maybe<SchoolYearUpdateWithoutAnnStudentClassroomInput>;
  upsert?: Maybe<SchoolYearUpsertWithoutAnnStudentClassroomInput>;
  connectOrCreate?: Maybe<SchoolYearCreateOrConnectWithoutannStudentClassroomInput>;
};

export type ClassroomUpdateOneRequiredWithoutAnnStudentClassroomInput = {
  create?: Maybe<ClassroomCreateWithoutAnnStudentClassroomInput>;
  connect?: Maybe<ClassroomWhereUniqueInput>;
  update?: Maybe<ClassroomUpdateWithoutAnnStudentClassroomInput>;
  upsert?: Maybe<ClassroomUpsertWithoutAnnStudentClassroomInput>;
  connectOrCreate?: Maybe<ClassroomCreateOrConnectWithoutannStudentClassroomInput>;
};

export type StudentUpdateOneRequiredWithoutAnnStudentClassroomInput = {
  create?: Maybe<StudentCreateWithoutAnnStudentClassroomInput>;
  connect?: Maybe<StudentWhereUniqueInput>;
  update?: Maybe<StudentUpdateWithoutAnnStudentClassroomInput>;
  upsert?: Maybe<StudentUpsertWithoutAnnStudentClassroomInput>;
  connectOrCreate?: Maybe<StudentCreateOrConnectWithoutannStudentClassroomInput>;
};

export type ScoreUpdateManyWithoutAnnStudentClassInput = {
  create?: Maybe<Array<ScoreCreateWithoutAnnStudentClassInput>>;
  connect?: Maybe<Array<ScoreWhereUniqueInput>>;
  set?: Maybe<Array<ScoreWhereUniqueInput>>;
  disconnect?: Maybe<Array<ScoreWhereUniqueInput>>;
  delete?: Maybe<Array<ScoreWhereUniqueInput>>;
  update?: Maybe<Array<ScoreUpdateWithWhereUniqueWithoutAnnStudentClassInput>>;
  updateMany?: Maybe<Array<ScoreUpdateManyWithWhereWithoutAnnStudentClassInput>>;
  deleteMany?: Maybe<Array<ScoreScalarWhereInput>>;
  upsert?: Maybe<Array<ScoreUpsertWithWhereUniqueWithoutAnnStudentClassInput>>;
  connectOrCreate?: Maybe<Array<ScoreCreateOrConnectWithoutannStudentClassInput>>;
};

export type FinanceUpdateManyWithoutAnnStudentClassroomInput = {
  create?: Maybe<Array<FinanceCreateWithoutAnnStudentClassroomInput>>;
  connect?: Maybe<Array<FinanceWhereUniqueInput>>;
  set?: Maybe<Array<FinanceWhereUniqueInput>>;
  disconnect?: Maybe<Array<FinanceWhereUniqueInput>>;
  delete?: Maybe<Array<FinanceWhereUniqueInput>>;
  update?: Maybe<Array<FinanceUpdateWithWhereUniqueWithoutAnnStudentClassroomInput>>;
  updateMany?: Maybe<Array<FinanceUpdateManyWithWhereWithoutAnnStudentClassroomInput>>;
  deleteMany?: Maybe<Array<FinanceScalarWhereInput>>;
  upsert?: Maybe<Array<FinanceUpsertWithWhereUniqueWithoutAnnStudentClassroomInput>>;
  connectOrCreate?: Maybe<Array<FinanceCreateOrConnectWithoutAnnStudentClassroomInput>>;
};

export type FinanceListRelationFilter = {
  every?: Maybe<FinanceWhereInput>;
  some?: Maybe<FinanceWhereInput>;
  none?: Maybe<FinanceWhereInput>;
};

export type AnnStudentClassroomCreateManyWithoutStudentInput = {
  create?: Maybe<Array<AnnStudentClassroomCreateWithoutStudentInput>>;
  connect?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AnnStudentClassroomCreateOrConnectWithoutStudentInput>>;
};

export type AnnStudentClassroomUpdateManyWithoutStudentInput = {
  create?: Maybe<Array<AnnStudentClassroomCreateWithoutStudentInput>>;
  connect?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  set?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  delete?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  update?: Maybe<Array<AnnStudentClassroomUpdateWithWhereUniqueWithoutStudentInput>>;
  updateMany?: Maybe<Array<AnnStudentClassroomUpdateManyWithWhereWithoutStudentInput>>;
  deleteMany?: Maybe<Array<AnnStudentClassroomScalarWhereInput>>;
  upsert?: Maybe<Array<AnnStudentClassroomUpsertWithWhereUniqueWithoutStudentInput>>;
  connectOrCreate?: Maybe<Array<AnnStudentClassroomCreateOrConnectWithoutStudentInput>>;
};

export type AnnStudentClassroomCreateManyWithoutScoreInput = {
  create?: Maybe<Array<AnnStudentClassroomCreateWithoutScoreInput>>;
  connect?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AnnStudentClassroomCreateOrConnectWithoutscoreInput>>;
};

export type AnnProfSubjDistroCreateManyWithoutScoreInput = {
  create?: Maybe<Array<AnnProfSubjDistroCreateWithoutScoreInput>>;
  connect?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AnnProfSubjDistroCreateOrConnectWithoutscoreInput>>;
};

export type SequenceCreateOneWithoutScoreInput = {
  create?: Maybe<SequenceCreateWithoutScoreInput>;
  connect?: Maybe<SequenceWhereUniqueInput>;
  connectOrCreate?: Maybe<SequenceCreateOrConnectWithoutscoreInput>;
};

export type AnnStudentClassroomUpdateManyWithoutScoreInput = {
  create?: Maybe<Array<AnnStudentClassroomCreateWithoutScoreInput>>;
  connect?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  set?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  delete?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  update?: Maybe<Array<AnnStudentClassroomUpdateWithWhereUniqueWithoutScoreInput>>;
  updateMany?: Maybe<Array<AnnStudentClassroomUpdateManyWithWhereWithoutScoreInput>>;
  deleteMany?: Maybe<Array<AnnStudentClassroomScalarWhereInput>>;
  upsert?: Maybe<Array<AnnStudentClassroomUpsertWithWhereUniqueWithoutScoreInput>>;
  connectOrCreate?: Maybe<Array<AnnStudentClassroomCreateOrConnectWithoutscoreInput>>;
};

export type AnnProfSubjDistroUpdateManyWithoutScoreInput = {
  create?: Maybe<Array<AnnProfSubjDistroCreateWithoutScoreInput>>;
  connect?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  set?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  delete?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  update?: Maybe<Array<AnnProfSubjDistroUpdateWithWhereUniqueWithoutScoreInput>>;
  updateMany?: Maybe<Array<AnnProfSubjDistroUpdateManyWithWhereWithoutScoreInput>>;
  deleteMany?: Maybe<Array<AnnProfSubjDistroScalarWhereInput>>;
  upsert?: Maybe<Array<AnnProfSubjDistroUpsertWithWhereUniqueWithoutScoreInput>>;
  connectOrCreate?: Maybe<Array<AnnProfSubjDistroCreateOrConnectWithoutscoreInput>>;
};

export type SequenceUpdateOneRequiredWithoutScoreInput = {
  create?: Maybe<SequenceCreateWithoutScoreInput>;
  connect?: Maybe<SequenceWhereUniqueInput>;
  update?: Maybe<SequenceUpdateWithoutScoreInput>;
  upsert?: Maybe<SequenceUpsertWithoutScoreInput>;
  connectOrCreate?: Maybe<SequenceCreateOrConnectWithoutscoreInput>;
};

export type AnnProfSubjDistroCreateManyWithoutClassroomInput = {
  create?: Maybe<Array<AnnProfSubjDistroCreateWithoutClassroomInput>>;
  connect?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AnnProfSubjDistroCreateOrConnectWithoutClassroomInput>>;
};

export type AnnStudentClassroomCreateManyWithoutClassroomInput = {
  create?: Maybe<Array<AnnStudentClassroomCreateWithoutClassroomInput>>;
  connect?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AnnStudentClassroomCreateOrConnectWithoutClassroomInput>>;
};

export type SectionCreateOneWithoutClassroomInput = {
  create?: Maybe<SectionCreateWithoutClassroomInput>;
  connect?: Maybe<SectionWhereUniqueInput>;
  connectOrCreate?: Maybe<SectionCreateOrConnectWithoutclassroomInput>;
};

export type AnnProfSubjDistroUpdateManyWithoutClassroomInput = {
  create?: Maybe<Array<AnnProfSubjDistroCreateWithoutClassroomInput>>;
  connect?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  set?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  delete?: Maybe<Array<AnnProfSubjDistroWhereUniqueInput>>;
  update?: Maybe<Array<AnnProfSubjDistroUpdateWithWhereUniqueWithoutClassroomInput>>;
  updateMany?: Maybe<Array<AnnProfSubjDistroUpdateManyWithWhereWithoutClassroomInput>>;
  deleteMany?: Maybe<Array<AnnProfSubjDistroScalarWhereInput>>;
  upsert?: Maybe<Array<AnnProfSubjDistroUpsertWithWhereUniqueWithoutClassroomInput>>;
  connectOrCreate?: Maybe<Array<AnnProfSubjDistroCreateOrConnectWithoutClassroomInput>>;
};

export type AnnStudentClassroomUpdateManyWithoutClassroomInput = {
  create?: Maybe<Array<AnnStudentClassroomCreateWithoutClassroomInput>>;
  connect?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  set?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  disconnect?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  delete?: Maybe<Array<AnnStudentClassroomWhereUniqueInput>>;
  update?: Maybe<Array<AnnStudentClassroomUpdateWithWhereUniqueWithoutClassroomInput>>;
  updateMany?: Maybe<Array<AnnStudentClassroomUpdateManyWithWhereWithoutClassroomInput>>;
  deleteMany?: Maybe<Array<AnnStudentClassroomScalarWhereInput>>;
  upsert?: Maybe<Array<AnnStudentClassroomUpsertWithWhereUniqueWithoutClassroomInput>>;
  connectOrCreate?: Maybe<Array<AnnStudentClassroomCreateOrConnectWithoutClassroomInput>>;
};

export type SectionUpdateOneRequiredWithoutClassroomInput = {
  create?: Maybe<SectionCreateWithoutClassroomInput>;
  connect?: Maybe<SectionWhereUniqueInput>;
  update?: Maybe<SectionUpdateWithoutClassroomInput>;
  upsert?: Maybe<SectionUpsertWithoutClassroomInput>;
  connectOrCreate?: Maybe<SectionCreateOrConnectWithoutclassroomInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DivisionCreateWithoutRegionInput = {
  id?: Maybe<Scalars['String']>;
  divisionName: Scalars['String'];
  divisionCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  subdiv?: Maybe<SubdivisionCreateManyWithoutDivisionInput>;
};

export type DivisionCreateOrConnectWithoutRegionInput = {
  where: DivisionWhereUniqueInput;
  create: DivisionCreateWithoutRegionInput;
};

export type DivisionUpdateWithWhereUniqueWithoutRegionInput = {
  where: DivisionWhereUniqueInput;
  data: DivisionUpdateWithoutRegionInput;
};

export type DivisionUpdateManyWithWhereWithoutRegionInput = {
  where: DivisionScalarWhereInput;
  data: DivisionUpdateManyMutationInput;
};

export type DivisionScalarWhereInput = {
  AND?: Maybe<Array<DivisionScalarWhereInput>>;
  OR?: Maybe<Array<DivisionScalarWhereInput>>;
  NOT?: Maybe<Array<DivisionScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  divisionName?: Maybe<StringFilter>;
  divisionCode?: Maybe<StringFilter>;
  regionId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type DivisionUpsertWithWhereUniqueWithoutRegionInput = {
  where: DivisionWhereUniqueInput;
  update: DivisionUpdateWithoutRegionInput;
  create: DivisionCreateWithoutRegionInput;
};

export type SubdivisionCreateWithoutDivisionInput = {
  id?: Maybe<Scalars['String']>;
  subdivName: Scalars['String'];
  subdivCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  town?: Maybe<TownCreateManyWithoutSubdivisionInput>;
};

export type SubdivisionCreateOrConnectWithoutDivisionInput = {
  where: SubdivisionWhereUniqueInput;
  create: SubdivisionCreateWithoutDivisionInput;
};

export type RegionCreateWithoutDivisionInput = {
  id?: Maybe<Scalars['String']>;
  regName: Scalars['String'];
  regCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegionCreateOrConnectWithoutdivisionInput = {
  where: RegionWhereUniqueInput;
  create: RegionCreateWithoutDivisionInput;
};

export type SubdivisionUpdateWithWhereUniqueWithoutDivisionInput = {
  where: SubdivisionWhereUniqueInput;
  data: SubdivisionUpdateWithoutDivisionInput;
};

export type SubdivisionUpdateManyWithWhereWithoutDivisionInput = {
  where: SubdivisionScalarWhereInput;
  data: SubdivisionUpdateManyMutationInput;
};

export type SubdivisionScalarWhereInput = {
  AND?: Maybe<Array<SubdivisionScalarWhereInput>>;
  OR?: Maybe<Array<SubdivisionScalarWhereInput>>;
  NOT?: Maybe<Array<SubdivisionScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  subdivName?: Maybe<StringFilter>;
  subdivCode?: Maybe<StringFilter>;
  divisionId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SubdivisionUpsertWithWhereUniqueWithoutDivisionInput = {
  where: SubdivisionWhereUniqueInput;
  update: SubdivisionUpdateWithoutDivisionInput;
  create: SubdivisionCreateWithoutDivisionInput;
};

export type RegionUpdateWithoutDivisionInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  regName?: Maybe<StringFieldUpdateOperationsInput>;
  regCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RegionUpsertWithoutDivisionInput = {
  update: RegionUpdateWithoutDivisionInput;
  create: RegionCreateWithoutDivisionInput;
};

export type SchoolCreateWithoutTownInput = {
  id?: Maybe<Scalars['String']>;
  schoolName: Scalars['String'];
  schoolPublicCode: Scalars['String'];
  schoolSecretCode: Scalars['String'];
  schoolCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  section?: Maybe<SectionCreateManyWithoutSchoolInput>;
};

export type SchoolCreateOrConnectWithoutTownInput = {
  where: SchoolWhereUniqueInput;
  create: SchoolCreateWithoutTownInput;
};

export type SubdivisionCreateWithoutTownInput = {
  id?: Maybe<Scalars['String']>;
  subdivName: Scalars['String'];
  subdivCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Division: DivisionCreateOneWithoutSubdivInput;
};

export type SubdivisionCreateOrConnectWithouttownInput = {
  where: SubdivisionWhereUniqueInput;
  create: SubdivisionCreateWithoutTownInput;
};

export type SchoolUpdateWithWhereUniqueWithoutTownInput = {
  where: SchoolWhereUniqueInput;
  data: SchoolUpdateWithoutTownInput;
};

export type SchoolUpdateManyWithWhereWithoutTownInput = {
  where: SchoolScalarWhereInput;
  data: SchoolUpdateManyMutationInput;
};

export type SchoolScalarWhereInput = {
  AND?: Maybe<Array<SchoolScalarWhereInput>>;
  OR?: Maybe<Array<SchoolScalarWhereInput>>;
  NOT?: Maybe<Array<SchoolScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  schoolName?: Maybe<StringFilter>;
  schoolPublicCode?: Maybe<StringFilter>;
  schoolSecretCode?: Maybe<StringFilter>;
  schoolCode?: Maybe<StringFilter>;
  townId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SchoolUpsertWithWhereUniqueWithoutTownInput = {
  where: SchoolWhereUniqueInput;
  update: SchoolUpdateWithoutTownInput;
  create: SchoolCreateWithoutTownInput;
};

export type SubdivisionUpdateWithoutTownInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  subdivName?: Maybe<StringFieldUpdateOperationsInput>;
  subdivCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Division?: Maybe<DivisionUpdateOneRequiredWithoutSubdivInput>;
};

export type SubdivisionUpsertWithoutTownInput = {
  update: SubdivisionUpdateWithoutTownInput;
  create: SubdivisionCreateWithoutTownInput;
};

export type SectionCreateWithoutSchoolInput = {
  id?: Maybe<Scalars['String']>;
  sectionName: Scalars['String'];
  sectionCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  department?: Maybe<DepartmentCreateManyWithoutSectionInput>;
  classroom?: Maybe<ClassroomCreateManyWithoutSectionInput>;
};

export type SectionCreateOrConnectWithoutSchoolInput = {
  where: SectionWhereUniqueInput;
  create: SectionCreateWithoutSchoolInput;
};

export type TownCreateWithoutSchoolInput = {
  id?: Maybe<Scalars['String']>;
  townName: Scalars['String'];
  townCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Subdivision: SubdivisionCreateOneWithoutTownInput;
};

export type TownCreateOrConnectWithoutschoolInput = {
  where: TownWhereUniqueInput;
  create: TownCreateWithoutSchoolInput;
};

export type SectionUpdateWithWhereUniqueWithoutSchoolInput = {
  where: SectionWhereUniqueInput;
  data: SectionUpdateWithoutSchoolInput;
};

export type SectionUpdateManyWithWhereWithoutSchoolInput = {
  where: SectionScalarWhereInput;
  data: SectionUpdateManyMutationInput;
};

export type SectionScalarWhereInput = {
  AND?: Maybe<Array<SectionScalarWhereInput>>;
  OR?: Maybe<Array<SectionScalarWhereInput>>;
  NOT?: Maybe<Array<SectionScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  sectionName?: Maybe<StringFilter>;
  sectionCode?: Maybe<StringFilter>;
  schoolId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SectionUpsertWithWhereUniqueWithoutSchoolInput = {
  where: SectionWhereUniqueInput;
  update: SectionUpdateWithoutSchoolInput;
  create: SectionCreateWithoutSchoolInput;
};

export type TownUpdateWithoutSchoolInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  townName?: Maybe<StringFieldUpdateOperationsInput>;
  townCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Subdivision?: Maybe<SubdivisionUpdateOneRequiredWithoutTownInput>;
};

export type TownUpsertWithoutSchoolInput = {
  update: TownUpdateWithoutSchoolInput;
  create: TownCreateWithoutSchoolInput;
};

export type DepartmentCreateWithoutSectionInput = {
  id?: Maybe<Scalars['String']>;
  deptName: Scalars['String'];
  deptCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annProfDept?: Maybe<AnnProfDeptCreateManyWithoutDepartmentInput>;
  subject?: Maybe<SubjectCreateManyWithoutDepartmentInput>;
};

export type DepartmentCreateOrConnectWithoutSectionInput = {
  where: DepartmentWhereUniqueInput;
  create: DepartmentCreateWithoutSectionInput;
};

export type ClassroomCreateWithoutSectionInput = {
  id?: Maybe<Scalars['String']>;
  className: Scalars['String'];
  classCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annProfSubj?: Maybe<AnnProfSubjDistroCreateManyWithoutClassroomInput>;
  annStudentClassroom?: Maybe<AnnStudentClassroomCreateManyWithoutClassroomInput>;
};

export type ClassroomCreateOrConnectWithoutSectionInput = {
  where: ClassroomWhereUniqueInput;
  create: ClassroomCreateWithoutSectionInput;
};

export type SchoolCreateWithoutSectionInput = {
  id?: Maybe<Scalars['String']>;
  schoolName: Scalars['String'];
  schoolPublicCode: Scalars['String'];
  schoolSecretCode: Scalars['String'];
  schoolCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Town: TownCreateOneWithoutSchoolInput;
};

export type SchoolCreateOrConnectWithoutsectionInput = {
  where: SchoolWhereUniqueInput;
  create: SchoolCreateWithoutSectionInput;
};

export type DepartmentUpdateWithWhereUniqueWithoutSectionInput = {
  where: DepartmentWhereUniqueInput;
  data: DepartmentUpdateWithoutSectionInput;
};

export type DepartmentUpdateManyWithWhereWithoutSectionInput = {
  where: DepartmentScalarWhereInput;
  data: DepartmentUpdateManyMutationInput;
};

export type DepartmentScalarWhereInput = {
  AND?: Maybe<Array<DepartmentScalarWhereInput>>;
  OR?: Maybe<Array<DepartmentScalarWhereInput>>;
  NOT?: Maybe<Array<DepartmentScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  deptName?: Maybe<StringFilter>;
  deptCode?: Maybe<StringFilter>;
  sectionId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type DepartmentUpsertWithWhereUniqueWithoutSectionInput = {
  where: DepartmentWhereUniqueInput;
  update: DepartmentUpdateWithoutSectionInput;
  create: DepartmentCreateWithoutSectionInput;
};

export type ClassroomUpdateWithWhereUniqueWithoutSectionInput = {
  where: ClassroomWhereUniqueInput;
  data: ClassroomUpdateWithoutSectionInput;
};

export type ClassroomUpdateManyWithWhereWithoutSectionInput = {
  where: ClassroomScalarWhereInput;
  data: ClassroomUpdateManyMutationInput;
};

export type ClassroomScalarWhereInput = {
  AND?: Maybe<Array<ClassroomScalarWhereInput>>;
  OR?: Maybe<Array<ClassroomScalarWhereInput>>;
  NOT?: Maybe<Array<ClassroomScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  className?: Maybe<StringFilter>;
  classCode?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  sectionId?: Maybe<StringFilter>;
};

export type ClassroomUpsertWithWhereUniqueWithoutSectionInput = {
  where: ClassroomWhereUniqueInput;
  update: ClassroomUpdateWithoutSectionInput;
  create: ClassroomCreateWithoutSectionInput;
};

export type SchoolUpdateWithoutSectionInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  schoolName?: Maybe<StringFieldUpdateOperationsInput>;
  schoolPublicCode?: Maybe<StringFieldUpdateOperationsInput>;
  schoolSecretCode?: Maybe<StringFieldUpdateOperationsInput>;
  schoolCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Town?: Maybe<TownUpdateOneRequiredWithoutSchoolInput>;
};

export type SchoolUpsertWithoutSectionInput = {
  update: SchoolUpdateWithoutSectionInput;
  create: SchoolCreateWithoutSectionInput;
};

export type TownCreateWithoutSubdivisionInput = {
  id?: Maybe<Scalars['String']>;
  townName: Scalars['String'];
  townCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  school?: Maybe<SchoolCreateManyWithoutTownInput>;
};

export type TownCreateOrConnectWithoutSubdivisionInput = {
  where: TownWhereUniqueInput;
  create: TownCreateWithoutSubdivisionInput;
};

export type DivisionCreateWithoutSubdivInput = {
  id?: Maybe<Scalars['String']>;
  divisionName: Scalars['String'];
  divisionCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Region: RegionCreateOneWithoutDivisionInput;
};

export type DivisionCreateOrConnectWithoutsubdivInput = {
  where: DivisionWhereUniqueInput;
  create: DivisionCreateWithoutSubdivInput;
};

export type TownUpdateWithWhereUniqueWithoutSubdivisionInput = {
  where: TownWhereUniqueInput;
  data: TownUpdateWithoutSubdivisionInput;
};

export type TownUpdateManyWithWhereWithoutSubdivisionInput = {
  where: TownScalarWhereInput;
  data: TownUpdateManyMutationInput;
};

export type TownScalarWhereInput = {
  AND?: Maybe<Array<TownScalarWhereInput>>;
  OR?: Maybe<Array<TownScalarWhereInput>>;
  NOT?: Maybe<Array<TownScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  townName?: Maybe<StringFilter>;
  townCode?: Maybe<StringFilter>;
  subdivisionId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TownUpsertWithWhereUniqueWithoutSubdivisionInput = {
  where: TownWhereUniqueInput;
  update: TownUpdateWithoutSubdivisionInput;
  create: TownCreateWithoutSubdivisionInput;
};

export type DivisionUpdateWithoutSubdivInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  divisionName?: Maybe<StringFieldUpdateOperationsInput>;
  divisionCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Region?: Maybe<RegionUpdateOneRequiredWithoutDivisionInput>;
};

export type DivisionUpsertWithoutSubdivInput = {
  update: DivisionUpdateWithoutSubdivInput;
  create: DivisionCreateWithoutSubdivInput;
};

export type AnnProfDeptCreateWithoutDepartmentInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annProfSubj?: Maybe<AnnProfSubjDistroCreateManyWithoutAnnProfDeptInput>;
  SchoolYear: SchoolYearCreateOneWithoutAnnProfDeptInput;
  Prof: ProfCreateOneWithoutAnnProfDeptInput;
};

export type AnnProfDeptCreateOrConnectWithoutDepartmentInput = {
  where: AnnProfDeptWhereUniqueInput;
  create: AnnProfDeptCreateWithoutDepartmentInput;
};

export type SubjectCreateWithoutDepartmentInput = {
  id?: Maybe<Scalars['String']>;
  subjectName: Scalars['String'];
  subjectCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annProfSubj?: Maybe<AnnProfSubjDistroCreateManyWithoutSubjectInput>;
};

export type SubjectCreateOrConnectWithoutDepartmentInput = {
  where: SubjectWhereUniqueInput;
  create: SubjectCreateWithoutDepartmentInput;
};

export type SectionCreateWithoutDepartmentInput = {
  id?: Maybe<Scalars['String']>;
  sectionName: Scalars['String'];
  sectionCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  classroom?: Maybe<ClassroomCreateManyWithoutSectionInput>;
  School: SchoolCreateOneWithoutSectionInput;
};

export type SectionCreateOrConnectWithoutdepartmentInput = {
  where: SectionWhereUniqueInput;
  create: SectionCreateWithoutDepartmentInput;
};

export type AnnProfDeptUpdateWithWhereUniqueWithoutDepartmentInput = {
  where: AnnProfDeptWhereUniqueInput;
  data: AnnProfDeptUpdateWithoutDepartmentInput;
};

export type AnnProfDeptUpdateManyWithWhereWithoutDepartmentInput = {
  where: AnnProfDeptScalarWhereInput;
  data: AnnProfDeptUpdateManyMutationInput;
};

export type AnnProfDeptScalarWhereInput = {
  AND?: Maybe<Array<AnnProfDeptScalarWhereInput>>;
  OR?: Maybe<Array<AnnProfDeptScalarWhereInput>>;
  NOT?: Maybe<Array<AnnProfDeptScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  departmentId?: Maybe<StringFilter>;
  schoolYearId?: Maybe<StringFilter>;
  profId?: Maybe<StringFilter>;
};

export type AnnProfDeptUpsertWithWhereUniqueWithoutDepartmentInput = {
  where: AnnProfDeptWhereUniqueInput;
  update: AnnProfDeptUpdateWithoutDepartmentInput;
  create: AnnProfDeptCreateWithoutDepartmentInput;
};

export type SubjectUpdateWithWhereUniqueWithoutDepartmentInput = {
  where: SubjectWhereUniqueInput;
  data: SubjectUpdateWithoutDepartmentInput;
};

export type SubjectUpdateManyWithWhereWithoutDepartmentInput = {
  where: SubjectScalarWhereInput;
  data: SubjectUpdateManyMutationInput;
};

export type SubjectScalarWhereInput = {
  AND?: Maybe<Array<SubjectScalarWhereInput>>;
  OR?: Maybe<Array<SubjectScalarWhereInput>>;
  NOT?: Maybe<Array<SubjectScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  subjectName?: Maybe<StringFilter>;
  subjectCode?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  departmentId?: Maybe<StringFilter>;
};

export type SubjectUpsertWithWhereUniqueWithoutDepartmentInput = {
  where: SubjectWhereUniqueInput;
  update: SubjectUpdateWithoutDepartmentInput;
  create: SubjectCreateWithoutDepartmentInput;
};

export type SectionUpdateWithoutDepartmentInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sectionName?: Maybe<StringFieldUpdateOperationsInput>;
  sectionCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  classroom?: Maybe<ClassroomUpdateManyWithoutSectionInput>;
  School?: Maybe<SchoolUpdateOneRequiredWithoutSectionInput>;
};

export type SectionUpsertWithoutDepartmentInput = {
  update: SectionUpdateWithoutDepartmentInput;
  create: SectionCreateWithoutDepartmentInput;
};

export type AnnProfDeptCreateWithoutProfInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annProfSubj?: Maybe<AnnProfSubjDistroCreateManyWithoutAnnProfDeptInput>;
  Department: DepartmentCreateOneWithoutAnnProfDeptInput;
  SchoolYear: SchoolYearCreateOneWithoutAnnProfDeptInput;
};

export type AnnProfDeptCreateOrConnectWithoutProfInput = {
  where: AnnProfDeptWhereUniqueInput;
  create: AnnProfDeptCreateWithoutProfInput;
};

export type AnnProfDeptUpdateWithWhereUniqueWithoutProfInput = {
  where: AnnProfDeptWhereUniqueInput;
  data: AnnProfDeptUpdateWithoutProfInput;
};

export type AnnProfDeptUpdateManyWithWhereWithoutProfInput = {
  where: AnnProfDeptScalarWhereInput;
  data: AnnProfDeptUpdateManyMutationInput;
};

export type AnnProfDeptUpsertWithWhereUniqueWithoutProfInput = {
  where: AnnProfDeptWhereUniqueInput;
  update: AnnProfDeptUpdateWithoutProfInput;
  create: AnnProfDeptCreateWithoutProfInput;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type SequenceCreateWithoutTermInput = {
  id?: Maybe<Scalars['String']>;
  seqName: Scalars['String'];
  seqCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  score?: Maybe<ScoreCreateManyWithoutSequenceInput>;
};

export type SequenceCreateOrConnectWithoutTermInput = {
  where: SequenceWhereUniqueInput;
  create: SequenceCreateWithoutTermInput;
};

export type SequenceUpdateWithWhereUniqueWithoutTermInput = {
  where: SequenceWhereUniqueInput;
  data: SequenceUpdateWithoutTermInput;
};

export type SequenceUpdateManyWithWhereWithoutTermInput = {
  where: SequenceScalarWhereInput;
  data: SequenceUpdateManyMutationInput;
};

export type SequenceScalarWhereInput = {
  AND?: Maybe<Array<SequenceScalarWhereInput>>;
  OR?: Maybe<Array<SequenceScalarWhereInput>>;
  NOT?: Maybe<Array<SequenceScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  seqName?: Maybe<StringFilter>;
  seqCode?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  termId?: Maybe<StringFilter>;
};

export type SequenceUpsertWithWhereUniqueWithoutTermInput = {
  where: SequenceWhereUniqueInput;
  update: SequenceUpdateWithoutTermInput;
  create: SequenceCreateWithoutTermInput;
};

export type AnnProfSubjDistroCreateWithoutLogbookInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  AnnProfDept: AnnProfDeptCreateOneWithoutAnnProfSubjInput;
  Subject: SubjectCreateOneWithoutAnnProfSubjInput;
  Classroom: ClassroomCreateOneWithoutAnnProfSubjInput;
  score?: Maybe<ScoreCreateManyWithoutAnnProfSubjInput>;
};

export type AnnProfSubjDistroCreateOrConnectWithoutLogbookInput = {
  where: AnnProfSubjDistroWhereUniqueInput;
  create: AnnProfSubjDistroCreateWithoutLogbookInput;
};

export type AnnProfSubjDistroUpdateWithoutLogbookInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  AnnProfDept?: Maybe<AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput>;
  Subject?: Maybe<SubjectUpdateOneRequiredWithoutAnnProfSubjInput>;
  Classroom?: Maybe<ClassroomUpdateOneRequiredWithoutAnnProfSubjInput>;
  score?: Maybe<ScoreUpdateManyWithoutAnnProfSubjInput>;
};

export type AnnProfSubjDistroUpsertWithoutLogbookInput = {
  update: AnnProfSubjDistroUpdateWithoutLogbookInput;
  create: AnnProfSubjDistroCreateWithoutLogbookInput;
};

export type AnnStudentClassroomCreateWithoutSchoolYearInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Classroom: ClassroomCreateOneWithoutAnnStudentClassroomInput;
  Student: StudentCreateOneWithoutAnnStudentClassroomInput;
  score?: Maybe<ScoreCreateManyWithoutAnnStudentClassInput>;
  feePayment?: Maybe<FinanceCreateManyWithoutAnnStudentClassroomInput>;
};

export type AnnStudentClassroomCreateOrConnectWithoutSchoolYearInput = {
  where: AnnStudentClassroomWhereUniqueInput;
  create: AnnStudentClassroomCreateWithoutSchoolYearInput;
};

export type AnnProfDeptCreateWithoutSchoolYearInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annProfSubj?: Maybe<AnnProfSubjDistroCreateManyWithoutAnnProfDeptInput>;
  Department: DepartmentCreateOneWithoutAnnProfDeptInput;
  Prof: ProfCreateOneWithoutAnnProfDeptInput;
};

export type AnnProfDeptCreateOrConnectWithoutSchoolYearInput = {
  where: AnnProfDeptWhereUniqueInput;
  create: AnnProfDeptCreateWithoutSchoolYearInput;
};

export type AnnStudentClassroomUpdateWithWhereUniqueWithoutSchoolYearInput = {
  where: AnnStudentClassroomWhereUniqueInput;
  data: AnnStudentClassroomUpdateWithoutSchoolYearInput;
};

export type AnnStudentClassroomUpdateManyWithWhereWithoutSchoolYearInput = {
  where: AnnStudentClassroomScalarWhereInput;
  data: AnnStudentClassroomUpdateManyMutationInput;
};

export type AnnStudentClassroomScalarWhereInput = {
  AND?: Maybe<Array<AnnStudentClassroomScalarWhereInput>>;
  OR?: Maybe<Array<AnnStudentClassroomScalarWhereInput>>;
  NOT?: Maybe<Array<AnnStudentClassroomScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  schoolYearId?: Maybe<StringFilter>;
  classroomId?: Maybe<StringFilter>;
  studentId?: Maybe<StringFilter>;
};

export type AnnStudentClassroomUpsertWithWhereUniqueWithoutSchoolYearInput = {
  where: AnnStudentClassroomWhereUniqueInput;
  update: AnnStudentClassroomUpdateWithoutSchoolYearInput;
  create: AnnStudentClassroomCreateWithoutSchoolYearInput;
};

export type AnnProfDeptUpdateWithWhereUniqueWithoutSchoolYearInput = {
  where: AnnProfDeptWhereUniqueInput;
  data: AnnProfDeptUpdateWithoutSchoolYearInput;
};

export type AnnProfDeptUpdateManyWithWhereWithoutSchoolYearInput = {
  where: AnnProfDeptScalarWhereInput;
  data: AnnProfDeptUpdateManyMutationInput;
};

export type AnnProfDeptUpsertWithWhereUniqueWithoutSchoolYearInput = {
  where: AnnProfDeptWhereUniqueInput;
  update: AnnProfDeptUpdateWithoutSchoolYearInput;
  create: AnnProfDeptCreateWithoutSchoolYearInput;
};

export type AnnProfSubjDistroCreateWithoutSubjectInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  AnnProfDept: AnnProfDeptCreateOneWithoutAnnProfSubjInput;
  Classroom: ClassroomCreateOneWithoutAnnProfSubjInput;
  score?: Maybe<ScoreCreateManyWithoutAnnProfSubjInput>;
  Logbook?: Maybe<LogbookCreateManyWithoutAnnProfSubjDistroInput>;
};

export type AnnProfSubjDistroCreateOrConnectWithoutSubjectInput = {
  where: AnnProfSubjDistroWhereUniqueInput;
  create: AnnProfSubjDistroCreateWithoutSubjectInput;
};

export type DepartmentCreateWithoutSubjectInput = {
  id?: Maybe<Scalars['String']>;
  deptName: Scalars['String'];
  deptCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annProfDept?: Maybe<AnnProfDeptCreateManyWithoutDepartmentInput>;
  Section: SectionCreateOneWithoutDepartmentInput;
};

export type DepartmentCreateOrConnectWithoutsubjectInput = {
  where: DepartmentWhereUniqueInput;
  create: DepartmentCreateWithoutSubjectInput;
};

export type AnnProfSubjDistroUpdateWithWhereUniqueWithoutSubjectInput = {
  where: AnnProfSubjDistroWhereUniqueInput;
  data: AnnProfSubjDistroUpdateWithoutSubjectInput;
};

export type AnnProfSubjDistroUpdateManyWithWhereWithoutSubjectInput = {
  where: AnnProfSubjDistroScalarWhereInput;
  data: AnnProfSubjDistroUpdateManyMutationInput;
};

export type AnnProfSubjDistroScalarWhereInput = {
  AND?: Maybe<Array<AnnProfSubjDistroScalarWhereInput>>;
  OR?: Maybe<Array<AnnProfSubjDistroScalarWhereInput>>;
  NOT?: Maybe<Array<AnnProfSubjDistroScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  annProfDeptId?: Maybe<StringFilter>;
  subjectId?: Maybe<StringFilter>;
  classroomId?: Maybe<StringFilter>;
};

export type AnnProfSubjDistroUpsertWithWhereUniqueWithoutSubjectInput = {
  where: AnnProfSubjDistroWhereUniqueInput;
  update: AnnProfSubjDistroUpdateWithoutSubjectInput;
  create: AnnProfSubjDistroCreateWithoutSubjectInput;
};

export type DepartmentUpdateWithoutSubjectInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  deptName?: Maybe<StringFieldUpdateOperationsInput>;
  deptCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annProfDept?: Maybe<AnnProfDeptUpdateManyWithoutDepartmentInput>;
  Section?: Maybe<SectionUpdateOneRequiredWithoutDepartmentInput>;
};

export type DepartmentUpsertWithoutSubjectInput = {
  update: DepartmentUpdateWithoutSubjectInput;
  create: DepartmentCreateWithoutSubjectInput;
};

export type ScoreCreateWithoutSequenceInput = {
  id?: Maybe<Scalars['String']>;
  marks: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annStudentClass?: Maybe<AnnStudentClassroomCreateManyWithoutScoreInput>;
  annProfSubj?: Maybe<AnnProfSubjDistroCreateManyWithoutScoreInput>;
};

export type ScoreCreateOrConnectWithoutSequenceInput = {
  where: ScoreWhereUniqueInput;
  create: ScoreCreateWithoutSequenceInput;
};

export type TermCreateWithoutSequenceInput = {
  id?: Maybe<Scalars['String']>;
  termName: Scalars['String'];
  termCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TermCreateOrConnectWithoutsequenceInput = {
  where: TermWhereUniqueInput;
  create: TermCreateWithoutSequenceInput;
};

export type ScoreUpdateWithWhereUniqueWithoutSequenceInput = {
  where: ScoreWhereUniqueInput;
  data: ScoreUpdateWithoutSequenceInput;
};

export type ScoreUpdateManyWithWhereWithoutSequenceInput = {
  where: ScoreScalarWhereInput;
  data: ScoreUpdateManyMutationInput;
};

export type ScoreScalarWhereInput = {
  AND?: Maybe<Array<ScoreScalarWhereInput>>;
  OR?: Maybe<Array<ScoreScalarWhereInput>>;
  NOT?: Maybe<Array<ScoreScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  marks?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  sequenceId?: Maybe<StringFilter>;
};

export type ScoreUpsertWithWhereUniqueWithoutSequenceInput = {
  where: ScoreWhereUniqueInput;
  update: ScoreUpdateWithoutSequenceInput;
  create: ScoreCreateWithoutSequenceInput;
};

export type TermUpdateWithoutSequenceInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  termName?: Maybe<StringFieldUpdateOperationsInput>;
  termCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TermUpsertWithoutSequenceInput = {
  update: TermUpdateWithoutSequenceInput;
  create: TermCreateWithoutSequenceInput;
};

export type AnnProfSubjDistroCreateWithoutAnnProfDeptInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Subject: SubjectCreateOneWithoutAnnProfSubjInput;
  Classroom: ClassroomCreateOneWithoutAnnProfSubjInput;
  score?: Maybe<ScoreCreateManyWithoutAnnProfSubjInput>;
  Logbook?: Maybe<LogbookCreateManyWithoutAnnProfSubjDistroInput>;
};

export type AnnProfSubjDistroCreateOrConnectWithoutAnnProfDeptInput = {
  where: AnnProfSubjDistroWhereUniqueInput;
  create: AnnProfSubjDistroCreateWithoutAnnProfDeptInput;
};

export type DepartmentCreateWithoutAnnProfDeptInput = {
  id?: Maybe<Scalars['String']>;
  deptName: Scalars['String'];
  deptCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  subject?: Maybe<SubjectCreateManyWithoutDepartmentInput>;
  Section: SectionCreateOneWithoutDepartmentInput;
};

export type DepartmentCreateOrConnectWithoutannProfDeptInput = {
  where: DepartmentWhereUniqueInput;
  create: DepartmentCreateWithoutAnnProfDeptInput;
};

export type SchoolYearCreateWithoutAnnProfDeptInput = {
  id?: Maybe<Scalars['String']>;
  yearName: Scalars['String'];
  yearCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annStudentClassroom?: Maybe<AnnStudentClassroomCreateManyWithoutSchoolYearInput>;
};

export type SchoolYearCreateOrConnectWithoutannProfDeptInput = {
  where: SchoolYearWhereUniqueInput;
  create: SchoolYearCreateWithoutAnnProfDeptInput;
};

export type ProfCreateWithoutAnnProfDeptInput = {
  id?: Maybe<Scalars['String']>;
  prof1stName: Scalars['String'];
  prof2ndName: Scalars['String'];
  prof3rdName: Scalars['String'];
  profMatricule: Scalars['String'];
  profSecretCode: Scalars['String'];
  gender: Scalars['String'];
  image: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['Int'];
  specialty: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProfCreateOrConnectWithoutannProfDeptInput = {
  where: ProfWhereUniqueInput;
  create: ProfCreateWithoutAnnProfDeptInput;
};

export type AnnProfSubjDistroUpdateWithWhereUniqueWithoutAnnProfDeptInput = {
  where: AnnProfSubjDistroWhereUniqueInput;
  data: AnnProfSubjDistroUpdateWithoutAnnProfDeptInput;
};

export type AnnProfSubjDistroUpdateManyWithWhereWithoutAnnProfDeptInput = {
  where: AnnProfSubjDistroScalarWhereInput;
  data: AnnProfSubjDistroUpdateManyMutationInput;
};

export type AnnProfSubjDistroUpsertWithWhereUniqueWithoutAnnProfDeptInput = {
  where: AnnProfSubjDistroWhereUniqueInput;
  update: AnnProfSubjDistroUpdateWithoutAnnProfDeptInput;
  create: AnnProfSubjDistroCreateWithoutAnnProfDeptInput;
};

export type DepartmentUpdateWithoutAnnProfDeptInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  deptName?: Maybe<StringFieldUpdateOperationsInput>;
  deptCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  subject?: Maybe<SubjectUpdateManyWithoutDepartmentInput>;
  Section?: Maybe<SectionUpdateOneRequiredWithoutDepartmentInput>;
};

export type DepartmentUpsertWithoutAnnProfDeptInput = {
  update: DepartmentUpdateWithoutAnnProfDeptInput;
  create: DepartmentCreateWithoutAnnProfDeptInput;
};

export type SchoolYearUpdateWithoutAnnProfDeptInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  yearName?: Maybe<StringFieldUpdateOperationsInput>;
  yearCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annStudentClassroom?: Maybe<AnnStudentClassroomUpdateManyWithoutSchoolYearInput>;
};

export type SchoolYearUpsertWithoutAnnProfDeptInput = {
  update: SchoolYearUpdateWithoutAnnProfDeptInput;
  create: SchoolYearCreateWithoutAnnProfDeptInput;
};

export type ProfUpdateWithoutAnnProfDeptInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  prof1stName?: Maybe<StringFieldUpdateOperationsInput>;
  prof2ndName?: Maybe<StringFieldUpdateOperationsInput>;
  prof3rdName?: Maybe<StringFieldUpdateOperationsInput>;
  profMatricule?: Maybe<StringFieldUpdateOperationsInput>;
  profSecretCode?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<IntFieldUpdateOperationsInput>;
  specialty?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProfUpsertWithoutAnnProfDeptInput = {
  update: ProfUpdateWithoutAnnProfDeptInput;
  create: ProfCreateWithoutAnnProfDeptInput;
};

export type AnnProfDeptCreateWithoutAnnProfSubjInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Department: DepartmentCreateOneWithoutAnnProfDeptInput;
  SchoolYear: SchoolYearCreateOneWithoutAnnProfDeptInput;
  Prof: ProfCreateOneWithoutAnnProfDeptInput;
};

export type AnnProfDeptCreateOrConnectWithoutannProfSubjInput = {
  where: AnnProfDeptWhereUniqueInput;
  create: AnnProfDeptCreateWithoutAnnProfSubjInput;
};

export type SubjectCreateWithoutAnnProfSubjInput = {
  id?: Maybe<Scalars['String']>;
  subjectName: Scalars['String'];
  subjectCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Department: DepartmentCreateOneWithoutSubjectInput;
};

export type SubjectCreateOrConnectWithoutannProfSubjInput = {
  where: SubjectWhereUniqueInput;
  create: SubjectCreateWithoutAnnProfSubjInput;
};

export type ClassroomCreateWithoutAnnProfSubjInput = {
  id?: Maybe<Scalars['String']>;
  className: Scalars['String'];
  classCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annStudentClassroom?: Maybe<AnnStudentClassroomCreateManyWithoutClassroomInput>;
  Section: SectionCreateOneWithoutClassroomInput;
};

export type ClassroomCreateOrConnectWithoutannProfSubjInput = {
  where: ClassroomWhereUniqueInput;
  create: ClassroomCreateWithoutAnnProfSubjInput;
};

export type ScoreCreateWithoutAnnProfSubjInput = {
  id?: Maybe<Scalars['String']>;
  marks: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annStudentClass?: Maybe<AnnStudentClassroomCreateManyWithoutScoreInput>;
  Sequence: SequenceCreateOneWithoutScoreInput;
};

export type ScoreCreateOrConnectWithoutannProfSubjInput = {
  where: ScoreWhereUniqueInput;
  create: ScoreCreateWithoutAnnProfSubjInput;
};

export type LogbookCreateWithoutAnnProfSubjDistroInput = {
  id?: Maybe<Scalars['String']>;
  subjectMatter: Scalars['String'];
  timeOfPeriod?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LogbookCreateOrConnectWithoutAnnProfSubjDistroInput = {
  where: LogbookWhereUniqueInput;
  create: LogbookCreateWithoutAnnProfSubjDistroInput;
};

export type AnnProfDeptUpdateWithoutAnnProfSubjInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Department?: Maybe<DepartmentUpdateOneRequiredWithoutAnnProfDeptInput>;
  SchoolYear?: Maybe<SchoolYearUpdateOneRequiredWithoutAnnProfDeptInput>;
  Prof?: Maybe<ProfUpdateOneRequiredWithoutAnnProfDeptInput>;
};

export type AnnProfDeptUpsertWithoutAnnProfSubjInput = {
  update: AnnProfDeptUpdateWithoutAnnProfSubjInput;
  create: AnnProfDeptCreateWithoutAnnProfSubjInput;
};

export type SubjectUpdateWithoutAnnProfSubjInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  subjectName?: Maybe<StringFieldUpdateOperationsInput>;
  subjectCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Department?: Maybe<DepartmentUpdateOneRequiredWithoutSubjectInput>;
};

export type SubjectUpsertWithoutAnnProfSubjInput = {
  update: SubjectUpdateWithoutAnnProfSubjInput;
  create: SubjectCreateWithoutAnnProfSubjInput;
};

export type ClassroomUpdateWithoutAnnProfSubjInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  className?: Maybe<StringFieldUpdateOperationsInput>;
  classCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annStudentClassroom?: Maybe<AnnStudentClassroomUpdateManyWithoutClassroomInput>;
  Section?: Maybe<SectionUpdateOneRequiredWithoutClassroomInput>;
};

export type ClassroomUpsertWithoutAnnProfSubjInput = {
  update: ClassroomUpdateWithoutAnnProfSubjInput;
  create: ClassroomCreateWithoutAnnProfSubjInput;
};

export type ScoreUpdateWithWhereUniqueWithoutAnnProfSubjInput = {
  where: ScoreWhereUniqueInput;
  data: ScoreUpdateWithoutAnnProfSubjInput;
};

export type ScoreUpdateManyWithWhereWithoutAnnProfSubjInput = {
  where: ScoreScalarWhereInput;
  data: ScoreUpdateManyMutationInput;
};

export type ScoreUpsertWithWhereUniqueWithoutAnnProfSubjInput = {
  where: ScoreWhereUniqueInput;
  update: ScoreUpdateWithoutAnnProfSubjInput;
  create: ScoreCreateWithoutAnnProfSubjInput;
};

export type LogbookUpdateWithWhereUniqueWithoutAnnProfSubjDistroInput = {
  where: LogbookWhereUniqueInput;
  data: LogbookUpdateWithoutAnnProfSubjDistroInput;
};

export type LogbookUpdateManyWithWhereWithoutAnnProfSubjDistroInput = {
  where: LogbookScalarWhereInput;
  data: LogbookUpdateManyMutationInput;
};

export type LogbookScalarWhereInput = {
  AND?: Maybe<Array<LogbookScalarWhereInput>>;
  OR?: Maybe<Array<LogbookScalarWhereInput>>;
  NOT?: Maybe<Array<LogbookScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  subjectMatter?: Maybe<StringFilter>;
  timeOfPeriod?: Maybe<DateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AnnProfSubjDistroId?: Maybe<StringFilter>;
};

export type LogbookUpsertWithWhereUniqueWithoutAnnProfSubjDistroInput = {
  where: LogbookWhereUniqueInput;
  update: LogbookUpdateWithoutAnnProfSubjDistroInput;
  create: LogbookCreateWithoutAnnProfSubjDistroInput;
};

export type SchoolYearCreateWithoutAnnStudentClassroomInput = {
  id?: Maybe<Scalars['String']>;
  yearName: Scalars['String'];
  yearCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annProfDept?: Maybe<AnnProfDeptCreateManyWithoutSchoolYearInput>;
};

export type SchoolYearCreateOrConnectWithoutannStudentClassroomInput = {
  where: SchoolYearWhereUniqueInput;
  create: SchoolYearCreateWithoutAnnStudentClassroomInput;
};

export type ClassroomCreateWithoutAnnStudentClassroomInput = {
  id?: Maybe<Scalars['String']>;
  className: Scalars['String'];
  classCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annProfSubj?: Maybe<AnnProfSubjDistroCreateManyWithoutClassroomInput>;
  Section: SectionCreateOneWithoutClassroomInput;
};

export type ClassroomCreateOrConnectWithoutannStudentClassroomInput = {
  where: ClassroomWhereUniqueInput;
  create: ClassroomCreateWithoutAnnStudentClassroomInput;
};

export type StudentCreateWithoutAnnStudentClassroomInput = {
  id?: Maybe<Scalars['String']>;
  student1stName: Scalars['String'];
  student2ndName: Scalars['String'];
  student3rdName: Scalars['String'];
  placeOfBirth: Scalars['String'];
  phoneNumber: Scalars['Int'];
  studentSecretCode: Scalars['String'];
  gender: Scalars['String'];
  email: Scalars['String'];
  studentMatricule: Scalars['String'];
  image: Scalars['String'];
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StudentCreateOrConnectWithoutannStudentClassroomInput = {
  where: StudentWhereUniqueInput;
  create: StudentCreateWithoutAnnStudentClassroomInput;
};

export type ScoreCreateWithoutAnnStudentClassInput = {
  id?: Maybe<Scalars['String']>;
  marks: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  annProfSubj?: Maybe<AnnProfSubjDistroCreateManyWithoutScoreInput>;
  Sequence: SequenceCreateOneWithoutScoreInput;
};

export type ScoreCreateOrConnectWithoutannStudentClassInput = {
  where: ScoreWhereUniqueInput;
  create: ScoreCreateWithoutAnnStudentClassInput;
};

export type FinanceCreateWithoutAnnStudentClassroomInput = {
  id?: Maybe<Scalars['String']>;
  amountPaid: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  paymentDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FinanceWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type FinanceCreateOrConnectWithoutAnnStudentClassroomInput = {
  where: FinanceWhereUniqueInput;
  create: FinanceCreateWithoutAnnStudentClassroomInput;
};

export type SchoolYearUpdateWithoutAnnStudentClassroomInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  yearName?: Maybe<StringFieldUpdateOperationsInput>;
  yearCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annProfDept?: Maybe<AnnProfDeptUpdateManyWithoutSchoolYearInput>;
};

export type SchoolYearUpsertWithoutAnnStudentClassroomInput = {
  update: SchoolYearUpdateWithoutAnnStudentClassroomInput;
  create: SchoolYearCreateWithoutAnnStudentClassroomInput;
};

export type ClassroomUpdateWithoutAnnStudentClassroomInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  className?: Maybe<StringFieldUpdateOperationsInput>;
  classCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annProfSubj?: Maybe<AnnProfSubjDistroUpdateManyWithoutClassroomInput>;
  Section?: Maybe<SectionUpdateOneRequiredWithoutClassroomInput>;
};

export type ClassroomUpsertWithoutAnnStudentClassroomInput = {
  update: ClassroomUpdateWithoutAnnStudentClassroomInput;
  create: ClassroomCreateWithoutAnnStudentClassroomInput;
};

export type StudentUpdateWithoutAnnStudentClassroomInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  student1stName?: Maybe<StringFieldUpdateOperationsInput>;
  student2ndName?: Maybe<StringFieldUpdateOperationsInput>;
  student3rdName?: Maybe<StringFieldUpdateOperationsInput>;
  placeOfBirth?: Maybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<IntFieldUpdateOperationsInput>;
  studentSecretCode?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  studentMatricule?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<StringFieldUpdateOperationsInput>;
  dateOfBirth?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StudentUpsertWithoutAnnStudentClassroomInput = {
  update: StudentUpdateWithoutAnnStudentClassroomInput;
  create: StudentCreateWithoutAnnStudentClassroomInput;
};

export type ScoreUpdateWithWhereUniqueWithoutAnnStudentClassInput = {
  where: ScoreWhereUniqueInput;
  data: ScoreUpdateWithoutAnnStudentClassInput;
};

export type ScoreUpdateManyWithWhereWithoutAnnStudentClassInput = {
  where: ScoreScalarWhereInput;
  data: ScoreUpdateManyMutationInput;
};

export type ScoreUpsertWithWhereUniqueWithoutAnnStudentClassInput = {
  where: ScoreWhereUniqueInput;
  update: ScoreUpdateWithoutAnnStudentClassInput;
  create: ScoreCreateWithoutAnnStudentClassInput;
};

export type FinanceUpdateWithWhereUniqueWithoutAnnStudentClassroomInput = {
  where: FinanceWhereUniqueInput;
  data: FinanceUpdateWithoutAnnStudentClassroomInput;
};

export type FinanceUpdateManyWithWhereWithoutAnnStudentClassroomInput = {
  where: FinanceScalarWhereInput;
  data: FinanceUpdateManyMutationInput;
};

export type FinanceScalarWhereInput = {
  AND?: Maybe<Array<FinanceScalarWhereInput>>;
  OR?: Maybe<Array<FinanceScalarWhereInput>>;
  NOT?: Maybe<Array<FinanceScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  amountPaid?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  paymentDate?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  annStudentClassroomId?: Maybe<StringNullableFilter>;
};

export type FinanceUpsertWithWhereUniqueWithoutAnnStudentClassroomInput = {
  where: FinanceWhereUniqueInput;
  update: FinanceUpdateWithoutAnnStudentClassroomInput;
  create: FinanceCreateWithoutAnnStudentClassroomInput;
};

export type FinanceWhereInput = {
  AND?: Maybe<Array<FinanceWhereInput>>;
  OR?: Maybe<Array<FinanceWhereInput>>;
  NOT?: Maybe<Array<FinanceWhereInput>>;
  id?: Maybe<StringFilter>;
  amountPaid?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  paymentDate?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  AnnStudentClassroom?: Maybe<AnnStudentClassroomWhereInput>;
  annStudentClassroomId?: Maybe<StringNullableFilter>;
};

export type AnnStudentClassroomCreateWithoutStudentInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  SchoolYear: SchoolYearCreateOneWithoutAnnStudentClassroomInput;
  Classroom: ClassroomCreateOneWithoutAnnStudentClassroomInput;
  score?: Maybe<ScoreCreateManyWithoutAnnStudentClassInput>;
  feePayment?: Maybe<FinanceCreateManyWithoutAnnStudentClassroomInput>;
};

export type AnnStudentClassroomCreateOrConnectWithoutStudentInput = {
  where: AnnStudentClassroomWhereUniqueInput;
  create: AnnStudentClassroomCreateWithoutStudentInput;
};

export type AnnStudentClassroomUpdateWithWhereUniqueWithoutStudentInput = {
  where: AnnStudentClassroomWhereUniqueInput;
  data: AnnStudentClassroomUpdateWithoutStudentInput;
};

export type AnnStudentClassroomUpdateManyWithWhereWithoutStudentInput = {
  where: AnnStudentClassroomScalarWhereInput;
  data: AnnStudentClassroomUpdateManyMutationInput;
};

export type AnnStudentClassroomUpsertWithWhereUniqueWithoutStudentInput = {
  where: AnnStudentClassroomWhereUniqueInput;
  update: AnnStudentClassroomUpdateWithoutStudentInput;
  create: AnnStudentClassroomCreateWithoutStudentInput;
};

export type AnnStudentClassroomCreateWithoutScoreInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  SchoolYear: SchoolYearCreateOneWithoutAnnStudentClassroomInput;
  Classroom: ClassroomCreateOneWithoutAnnStudentClassroomInput;
  Student: StudentCreateOneWithoutAnnStudentClassroomInput;
  feePayment?: Maybe<FinanceCreateManyWithoutAnnStudentClassroomInput>;
};

export type AnnStudentClassroomCreateOrConnectWithoutscoreInput = {
  where: AnnStudentClassroomWhereUniqueInput;
  create: AnnStudentClassroomCreateWithoutScoreInput;
};

export type AnnProfSubjDistroCreateWithoutScoreInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  AnnProfDept: AnnProfDeptCreateOneWithoutAnnProfSubjInput;
  Subject: SubjectCreateOneWithoutAnnProfSubjInput;
  Classroom: ClassroomCreateOneWithoutAnnProfSubjInput;
  Logbook?: Maybe<LogbookCreateManyWithoutAnnProfSubjDistroInput>;
};

export type AnnProfSubjDistroCreateOrConnectWithoutscoreInput = {
  where: AnnProfSubjDistroWhereUniqueInput;
  create: AnnProfSubjDistroCreateWithoutScoreInput;
};

export type SequenceCreateWithoutScoreInput = {
  id?: Maybe<Scalars['String']>;
  seqName: Scalars['String'];
  seqCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  Term: TermCreateOneWithoutSequenceInput;
};

export type SequenceCreateOrConnectWithoutscoreInput = {
  where: SequenceWhereUniqueInput;
  create: SequenceCreateWithoutScoreInput;
};

export type AnnStudentClassroomUpdateWithWhereUniqueWithoutScoreInput = {
  where: AnnStudentClassroomWhereUniqueInput;
  data: AnnStudentClassroomUpdateWithoutScoreInput;
};

export type AnnStudentClassroomUpdateManyWithWhereWithoutScoreInput = {
  where: AnnStudentClassroomScalarWhereInput;
  data: AnnStudentClassroomUpdateManyMutationInput;
};

export type AnnStudentClassroomUpsertWithWhereUniqueWithoutScoreInput = {
  where: AnnStudentClassroomWhereUniqueInput;
  update: AnnStudentClassroomUpdateWithoutScoreInput;
  create: AnnStudentClassroomCreateWithoutScoreInput;
};

export type AnnProfSubjDistroUpdateWithWhereUniqueWithoutScoreInput = {
  where: AnnProfSubjDistroWhereUniqueInput;
  data: AnnProfSubjDistroUpdateWithoutScoreInput;
};

export type AnnProfSubjDistroUpdateManyWithWhereWithoutScoreInput = {
  where: AnnProfSubjDistroScalarWhereInput;
  data: AnnProfSubjDistroUpdateManyMutationInput;
};

export type AnnProfSubjDistroUpsertWithWhereUniqueWithoutScoreInput = {
  where: AnnProfSubjDistroWhereUniqueInput;
  update: AnnProfSubjDistroUpdateWithoutScoreInput;
  create: AnnProfSubjDistroCreateWithoutScoreInput;
};

export type SequenceUpdateWithoutScoreInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  seqName?: Maybe<StringFieldUpdateOperationsInput>;
  seqCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Term?: Maybe<TermUpdateOneRequiredWithoutSequenceInput>;
};

export type SequenceUpsertWithoutScoreInput = {
  update: SequenceUpdateWithoutScoreInput;
  create: SequenceCreateWithoutScoreInput;
};

export type AnnProfSubjDistroCreateWithoutClassroomInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  AnnProfDept: AnnProfDeptCreateOneWithoutAnnProfSubjInput;
  Subject: SubjectCreateOneWithoutAnnProfSubjInput;
  score?: Maybe<ScoreCreateManyWithoutAnnProfSubjInput>;
  Logbook?: Maybe<LogbookCreateManyWithoutAnnProfSubjDistroInput>;
};

export type AnnProfSubjDistroCreateOrConnectWithoutClassroomInput = {
  where: AnnProfSubjDistroWhereUniqueInput;
  create: AnnProfSubjDistroCreateWithoutClassroomInput;
};

export type AnnStudentClassroomCreateWithoutClassroomInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  SchoolYear: SchoolYearCreateOneWithoutAnnStudentClassroomInput;
  Student: StudentCreateOneWithoutAnnStudentClassroomInput;
  score?: Maybe<ScoreCreateManyWithoutAnnStudentClassInput>;
  feePayment?: Maybe<FinanceCreateManyWithoutAnnStudentClassroomInput>;
};

export type AnnStudentClassroomCreateOrConnectWithoutClassroomInput = {
  where: AnnStudentClassroomWhereUniqueInput;
  create: AnnStudentClassroomCreateWithoutClassroomInput;
};

export type SectionCreateWithoutClassroomInput = {
  id?: Maybe<Scalars['String']>;
  sectionName: Scalars['String'];
  sectionCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  department?: Maybe<DepartmentCreateManyWithoutSectionInput>;
  School: SchoolCreateOneWithoutSectionInput;
};

export type SectionCreateOrConnectWithoutclassroomInput = {
  where: SectionWhereUniqueInput;
  create: SectionCreateWithoutClassroomInput;
};

export type AnnProfSubjDistroUpdateWithWhereUniqueWithoutClassroomInput = {
  where: AnnProfSubjDistroWhereUniqueInput;
  data: AnnProfSubjDistroUpdateWithoutClassroomInput;
};

export type AnnProfSubjDistroUpdateManyWithWhereWithoutClassroomInput = {
  where: AnnProfSubjDistroScalarWhereInput;
  data: AnnProfSubjDistroUpdateManyMutationInput;
};

export type AnnProfSubjDistroUpsertWithWhereUniqueWithoutClassroomInput = {
  where: AnnProfSubjDistroWhereUniqueInput;
  update: AnnProfSubjDistroUpdateWithoutClassroomInput;
  create: AnnProfSubjDistroCreateWithoutClassroomInput;
};

export type AnnStudentClassroomUpdateWithWhereUniqueWithoutClassroomInput = {
  where: AnnStudentClassroomWhereUniqueInput;
  data: AnnStudentClassroomUpdateWithoutClassroomInput;
};

export type AnnStudentClassroomUpdateManyWithWhereWithoutClassroomInput = {
  where: AnnStudentClassroomScalarWhereInput;
  data: AnnStudentClassroomUpdateManyMutationInput;
};

export type AnnStudentClassroomUpsertWithWhereUniqueWithoutClassroomInput = {
  where: AnnStudentClassroomWhereUniqueInput;
  update: AnnStudentClassroomUpdateWithoutClassroomInput;
  create: AnnStudentClassroomCreateWithoutClassroomInput;
};

export type SectionUpdateWithoutClassroomInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sectionName?: Maybe<StringFieldUpdateOperationsInput>;
  sectionCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  department?: Maybe<DepartmentUpdateManyWithoutSectionInput>;
  School?: Maybe<SchoolUpdateOneRequiredWithoutSectionInput>;
};

export type SectionUpsertWithoutClassroomInput = {
  update: SectionUpdateWithoutClassroomInput;
  create: SectionCreateWithoutClassroomInput;
};

export type DivisionUpdateWithoutRegionInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  divisionName?: Maybe<StringFieldUpdateOperationsInput>;
  divisionCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  subdiv?: Maybe<SubdivisionUpdateManyWithoutDivisionInput>;
};

export type DivisionUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  divisionName?: Maybe<StringFieldUpdateOperationsInput>;
  divisionCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubdivisionUpdateWithoutDivisionInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  subdivName?: Maybe<StringFieldUpdateOperationsInput>;
  subdivCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  town?: Maybe<TownUpdateManyWithoutSubdivisionInput>;
};

export type SchoolUpdateWithoutTownInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  schoolName?: Maybe<StringFieldUpdateOperationsInput>;
  schoolPublicCode?: Maybe<StringFieldUpdateOperationsInput>;
  schoolSecretCode?: Maybe<StringFieldUpdateOperationsInput>;
  schoolCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  section?: Maybe<SectionUpdateManyWithoutSchoolInput>;
};

export type SchoolUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  schoolName?: Maybe<StringFieldUpdateOperationsInput>;
  schoolPublicCode?: Maybe<StringFieldUpdateOperationsInput>;
  schoolSecretCode?: Maybe<StringFieldUpdateOperationsInput>;
  schoolCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SectionUpdateWithoutSchoolInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sectionName?: Maybe<StringFieldUpdateOperationsInput>;
  sectionCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  department?: Maybe<DepartmentUpdateManyWithoutSectionInput>;
  classroom?: Maybe<ClassroomUpdateManyWithoutSectionInput>;
};

export type DepartmentUpdateWithoutSectionInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  deptName?: Maybe<StringFieldUpdateOperationsInput>;
  deptCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annProfDept?: Maybe<AnnProfDeptUpdateManyWithoutDepartmentInput>;
  subject?: Maybe<SubjectUpdateManyWithoutDepartmentInput>;
};

export type DepartmentUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  deptName?: Maybe<StringFieldUpdateOperationsInput>;
  deptCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClassroomUpdateWithoutSectionInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  className?: Maybe<StringFieldUpdateOperationsInput>;
  classCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annProfSubj?: Maybe<AnnProfSubjDistroUpdateManyWithoutClassroomInput>;
  annStudentClassroom?: Maybe<AnnStudentClassroomUpdateManyWithoutClassroomInput>;
};

export type ClassroomUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  className?: Maybe<StringFieldUpdateOperationsInput>;
  classCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TownUpdateWithoutSubdivisionInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  townName?: Maybe<StringFieldUpdateOperationsInput>;
  townCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  school?: Maybe<SchoolUpdateManyWithoutTownInput>;
};

export type TownUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  townName?: Maybe<StringFieldUpdateOperationsInput>;
  townCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AnnProfDeptUpdateWithoutDepartmentInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annProfSubj?: Maybe<AnnProfSubjDistroUpdateManyWithoutAnnProfDeptInput>;
  SchoolYear?: Maybe<SchoolYearUpdateOneRequiredWithoutAnnProfDeptInput>;
  Prof?: Maybe<ProfUpdateOneRequiredWithoutAnnProfDeptInput>;
};

export type AnnProfDeptUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubjectUpdateWithoutDepartmentInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  subjectName?: Maybe<StringFieldUpdateOperationsInput>;
  subjectCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annProfSubj?: Maybe<AnnProfSubjDistroUpdateManyWithoutSubjectInput>;
};

export type SubjectUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  subjectName?: Maybe<StringFieldUpdateOperationsInput>;
  subjectCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AnnProfDeptUpdateWithoutProfInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annProfSubj?: Maybe<AnnProfSubjDistroUpdateManyWithoutAnnProfDeptInput>;
  Department?: Maybe<DepartmentUpdateOneRequiredWithoutAnnProfDeptInput>;
  SchoolYear?: Maybe<SchoolYearUpdateOneRequiredWithoutAnnProfDeptInput>;
};

export type SequenceUpdateWithoutTermInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  seqName?: Maybe<StringFieldUpdateOperationsInput>;
  seqCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  score?: Maybe<ScoreUpdateManyWithoutSequenceInput>;
};

export type SequenceUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  seqName?: Maybe<StringFieldUpdateOperationsInput>;
  seqCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AnnStudentClassroomUpdateWithoutSchoolYearInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Classroom?: Maybe<ClassroomUpdateOneRequiredWithoutAnnStudentClassroomInput>;
  Student?: Maybe<StudentUpdateOneRequiredWithoutAnnStudentClassroomInput>;
  score?: Maybe<ScoreUpdateManyWithoutAnnStudentClassInput>;
  feePayment?: Maybe<FinanceUpdateManyWithoutAnnStudentClassroomInput>;
};

export type AnnStudentClassroomUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AnnProfDeptUpdateWithoutSchoolYearInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annProfSubj?: Maybe<AnnProfSubjDistroUpdateManyWithoutAnnProfDeptInput>;
  Department?: Maybe<DepartmentUpdateOneRequiredWithoutAnnProfDeptInput>;
  Prof?: Maybe<ProfUpdateOneRequiredWithoutAnnProfDeptInput>;
};

export type AnnProfSubjDistroUpdateWithoutSubjectInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  AnnProfDept?: Maybe<AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput>;
  Classroom?: Maybe<ClassroomUpdateOneRequiredWithoutAnnProfSubjInput>;
  score?: Maybe<ScoreUpdateManyWithoutAnnProfSubjInput>;
  Logbook?: Maybe<LogbookUpdateManyWithoutAnnProfSubjDistroInput>;
};

export type AnnProfSubjDistroUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScoreUpdateWithoutSequenceInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  marks?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annStudentClass?: Maybe<AnnStudentClassroomUpdateManyWithoutScoreInput>;
  annProfSubj?: Maybe<AnnProfSubjDistroUpdateManyWithoutScoreInput>;
};

export type ScoreUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  marks?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AnnProfSubjDistroUpdateWithoutAnnProfDeptInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  Subject?: Maybe<SubjectUpdateOneRequiredWithoutAnnProfSubjInput>;
  Classroom?: Maybe<ClassroomUpdateOneRequiredWithoutAnnProfSubjInput>;
  score?: Maybe<ScoreUpdateManyWithoutAnnProfSubjInput>;
  Logbook?: Maybe<LogbookUpdateManyWithoutAnnProfSubjDistroInput>;
};

export type ScoreUpdateWithoutAnnProfSubjInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  marks?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annStudentClass?: Maybe<AnnStudentClassroomUpdateManyWithoutScoreInput>;
  Sequence?: Maybe<SequenceUpdateOneRequiredWithoutScoreInput>;
};

export type LogbookUpdateWithoutAnnProfSubjDistroInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  subjectMatter?: Maybe<StringFieldUpdateOperationsInput>;
  timeOfPeriod?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type LogbookUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  subjectMatter?: Maybe<StringFieldUpdateOperationsInput>;
  timeOfPeriod?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScoreUpdateWithoutAnnStudentClassInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  marks?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  annProfSubj?: Maybe<AnnProfSubjDistroUpdateManyWithoutScoreInput>;
  Sequence?: Maybe<SequenceUpdateOneRequiredWithoutScoreInput>;
};

export type FinanceUpdateWithoutAnnStudentClassroomInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amountPaid?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  paymentDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FinanceUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amountPaid?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  paymentDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type AnnStudentClassroomUpdateWithoutStudentInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  SchoolYear?: Maybe<SchoolYearUpdateOneRequiredWithoutAnnStudentClassroomInput>;
  Classroom?: Maybe<ClassroomUpdateOneRequiredWithoutAnnStudentClassroomInput>;
  score?: Maybe<ScoreUpdateManyWithoutAnnStudentClassInput>;
  feePayment?: Maybe<FinanceUpdateManyWithoutAnnStudentClassroomInput>;
};

export type AnnStudentClassroomUpdateWithoutScoreInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  SchoolYear?: Maybe<SchoolYearUpdateOneRequiredWithoutAnnStudentClassroomInput>;
  Classroom?: Maybe<ClassroomUpdateOneRequiredWithoutAnnStudentClassroomInput>;
  Student?: Maybe<StudentUpdateOneRequiredWithoutAnnStudentClassroomInput>;
  feePayment?: Maybe<FinanceUpdateManyWithoutAnnStudentClassroomInput>;
};

export type AnnProfSubjDistroUpdateWithoutScoreInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  AnnProfDept?: Maybe<AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput>;
  Subject?: Maybe<SubjectUpdateOneRequiredWithoutAnnProfSubjInput>;
  Classroom?: Maybe<ClassroomUpdateOneRequiredWithoutAnnProfSubjInput>;
  Logbook?: Maybe<LogbookUpdateManyWithoutAnnProfSubjDistroInput>;
};

export type AnnProfSubjDistroUpdateWithoutClassroomInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  AnnProfDept?: Maybe<AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput>;
  Subject?: Maybe<SubjectUpdateOneRequiredWithoutAnnProfSubjInput>;
  score?: Maybe<ScoreUpdateManyWithoutAnnProfSubjInput>;
  Logbook?: Maybe<LogbookUpdateManyWithoutAnnProfSubjDistroInput>;
};

export type AnnStudentClassroomUpdateWithoutClassroomInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  SchoolYear?: Maybe<SchoolYearUpdateOneRequiredWithoutAnnStudentClassroomInput>;
  Student?: Maybe<StudentUpdateOneRequiredWithoutAnnStudentClassroomInput>;
  score?: Maybe<ScoreUpdateManyWithoutAnnStudentClassInput>;
  feePayment?: Maybe<FinanceUpdateManyWithoutAnnStudentClassroomInput>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type AnnProfDeptFragmentFragment = Pick<AnnProfDept, 'id'>;

export type AnnProfSubjDistroFragmentFragment = Pick<AnnProfSubjDistro, 'id'>;

export type AnnStudentClassroomFragmentFragment = Pick<AnnStudentClassroom, 'id'>;

export type ClassroomFragmentFragment = Pick<Classroom, 'id' | 'className' | 'classCode'>;

export type DepartmentFragmentFragment = Pick<Department, 'id' | 'deptName' | 'deptCode'>;

export type DivisionFragmentFragment = Pick<Division, 'id' | 'divisionName' | 'divisionCode'>;

export type DivisionsOfARegionFragFragment = (
  Pick<Region, 'id' | 'regName' | 'regCode'>
  & { divisions?: Maybe<Array<Maybe<Pick<Division, 'id' | 'divisionName' | 'divisionCode'>>>> }
);

export type LogbookFragmentFragment = Pick<Logbook, 'id' | 'subjectMatter' | 'timeOfPeriod'>;

export type ProfFragmentFragment = Pick<Prof, 'id' | 'prof1stName' | 'prof2ndName' | 'prof3rdName' | 'profMatricule' | 'profSecretCode' | 'gender' | 'image' | 'email' | 'phoneNumber' | 'specialty'>;

export type RegionFragmentFragment = Pick<Region, 'id' | 'regName' | 'regCode'>;

export type SchoolYearFragmentFragment = Pick<SchoolYear, 'id' | 'yearName' | 'yearCode'>;

export type SchoolFragmentFragment = Pick<School, 'id' | 'schoolName' | 'schoolPublicCode' | 'schoolCode' | 'schoolSecretCode'>;

export type ScoreFragmentFragment = Pick<Score, 'id' | 'marks'>;

export type SectionFragmentFragment = Pick<Section, 'id' | 'sectionName' | 'sectionCode'>;

export type SequenceFragmentFragment = Pick<Sequence, 'id' | 'seqName' | 'seqCode'>;

export type StudentFragmentFragment = Pick<Student, 'id' | 'student1stName' | 'student2ndName' | 'student3rdName' | 'gender' | 'studentMatricule' | 'studentSecretCode' | 'dateOfBirth' | 'placeOfBirth' | 'email' | 'phoneNumber' | 'image'>;

export type SubdivisionFragmentFragment = Pick<Subdivision, 'id' | 'subdivName' | 'subdivCode'>;

export type SubjectFragmentFragment = Pick<Subject, 'id' | 'subjectName' | 'subjectCode'>;

export type TermFragmentFragment = Pick<Term, 'id' | 'termName' | 'termCode'>;

export type TownFragmentFragment = Pick<Town, 'id' | 'townName' | 'townCode'>;

export type UserFragmentFragment = Pick<User, 'id' | 'name' | 'email' | 'image'>;

export type CreateAnnProfDeptMutationVariables = Exact<{
  data: AnnProfDeptCreateInput;
}>;


export type CreateAnnProfDeptMutation = { createOneAnnProfDept: AnnProfDeptFragmentFragment };

export type CreateAnnProfSubjDistroMutationVariables = Exact<{
  data: AnnProfSubjDistroCreateInput;
}>;


export type CreateAnnProfSubjDistroMutation = { createOneAnnProfSubjDistro: AnnProfSubjDistroFragmentFragment };

export type CreateAnnStudentClassroomMutationVariables = Exact<{
  data: AnnStudentClassroomCreateInput;
}>;


export type CreateAnnStudentClassroomMutation = { createOneAnnStudentClassroom: AnnStudentClassroomFragmentFragment };

export type CreateClassroomMutationVariables = Exact<{
  data: ClassroomCreateInput;
}>;


export type CreateClassroomMutation = { createOneClassroom: ClassroomFragmentFragment };

export type CreateDepartmentMutationVariables = Exact<{
  data: DepartmentCreateInput;
}>;


export type CreateDepartmentMutation = { createOneDepartment: DepartmentFragmentFragment };

export type CreateDivisionMutationVariables = Exact<{
  data: DivisionCreateInput;
}>;


export type CreateDivisionMutation = { createOneDivision: DivisionFragmentFragment };

export type CreateLogbookMutationVariables = Exact<{
  data: LogbookCreateInput;
}>;


export type CreateLogbookMutation = { createOneLogbook: LogbookFragmentFragment };

export type CreateProfMutationVariables = Exact<{
  data: ProfCreateInput;
}>;


export type CreateProfMutation = { createOneProf: ProfFragmentFragment };

export type CreateRegionMutationVariables = Exact<{
  data: RegionCreateInput;
}>;


export type CreateRegionMutation = { createOneRegion: RegionFragmentFragment };

export type CreateSchoolMutationVariables = Exact<{
  data: SchoolCreateInput;
}>;


export type CreateSchoolMutation = { createOneSchool: SchoolFragmentFragment };

export type CreateSchoolYearMutationVariables = Exact<{
  data: SchoolYearCreateInput;
}>;


export type CreateSchoolYearMutation = { createOneSchoolYear: SchoolYearFragmentFragment };

export type CreateScoreMutationVariables = Exact<{
  data: ScoreCreateInput;
}>;


export type CreateScoreMutation = { createOneScore: ScoreFragmentFragment };

export type CreateSectionMutationVariables = Exact<{
  data: SectionCreateInput;
}>;


export type CreateSectionMutation = { createOneSection: SectionFragmentFragment };

export type CreateSequenceMutationVariables = Exact<{
  data: SequenceCreateInput;
}>;


export type CreateSequenceMutation = { createOneSequence: SequenceFragmentFragment };

export type CreateStudentMutationVariables = Exact<{
  data: StudentCreateInput;
}>;


export type CreateStudentMutation = { createOneStudent: StudentFragmentFragment };

export type CreateSubdivisionMutationVariables = Exact<{
  data: SubdivisionCreateInput;
}>;


export type CreateSubdivisionMutation = { createOneSubdivision: SubdivisionFragmentFragment };

export type CreateSubjectMutationVariables = Exact<{
  data: SubjectCreateInput;
}>;


export type CreateSubjectMutation = { createOneSubject: SubjectFragmentFragment };

export type CreateTermMutationVariables = Exact<{
  data: TermCreateInput;
}>;


export type CreateTermMutation = { createOneTerm: TermFragmentFragment };

export type CreateTownMutationVariables = Exact<{
  data: TownCreateInput;
}>;


export type CreateTownMutation = { createOneTown: TownFragmentFragment };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { createOneUser: UserFragmentFragment };

export type DeleteAnnProfDeptMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteAnnProfDeptMutation = { deleteOneAnnProfDept?: Maybe<Pick<AnnProfDept, 'id'>> };

export type DeleteAnnProfSubjDistroMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteAnnProfSubjDistroMutation = { deleteOneAnnProfSubjDistro?: Maybe<Pick<AnnProfSubjDistro, 'id'>> };

export type DeleteAnnStudentClassroomMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteAnnStudentClassroomMutation = { deleteOneAnnStudentClassroom?: Maybe<Pick<AnnStudentClassroom, 'id'>> };

export type DeleteClassroomMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteClassroomMutation = { deleteOneClassroom?: Maybe<Pick<Classroom, 'id'>> };

export type DeleteDepartmentMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteDepartmentMutation = { deleteOneDepartment?: Maybe<Pick<Department, 'id'>> };

export type DeleteDivisionMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteDivisionMutation = { deleteOneDivision?: Maybe<Pick<Division, 'id'>> };

export type DeleteLogbookMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteLogbookMutation = { deleteOneLogbook?: Maybe<Pick<Logbook, 'id'>> };

export type DeleteProfMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteProfMutation = { deleteOneProf?: Maybe<Pick<Prof, 'id'>> };

export type DeleteRegionMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteRegionMutation = { deleteOneRegion?: Maybe<Pick<Region, 'id'>> };

export type DeleteSchoolMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteSchoolMutation = { deleteOneSchool?: Maybe<Pick<School, 'id'>> };

export type DeleteSchoolYearMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteSchoolYearMutation = { deleteOneSchoolYear?: Maybe<Pick<SchoolYear, 'id'>> };

export type DeleteScoreMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteScoreMutation = { deleteOneScore?: Maybe<Pick<Score, 'id'>> };

export type DeleteSectionMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteSectionMutation = { deleteOneSection?: Maybe<Pick<Section, 'id'>> };

export type DeleteSequenceMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteSequenceMutation = { deleteOneSequence?: Maybe<Pick<Sequence, 'id'>> };

export type DeleteStudentMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteStudentMutation = { deleteOneStudent?: Maybe<Pick<Student, 'id'>> };

export type DeleteSubdivisionMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteSubdivisionMutation = { deleteOneSubdivision?: Maybe<Pick<Subdivision, 'id'>> };

export type DeleteSubjectMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteSubjectMutation = { deleteOneSubject?: Maybe<Pick<Subject, 'id'>> };

export type DeleteTermMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTermMutation = { deleteOneTerm?: Maybe<Pick<Term, 'id'>> };

export type DeleteTownMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTownMutation = { deleteOneTown?: Maybe<Pick<Town, 'id'>> };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUserMutation = { deleteOneUser?: Maybe<Pick<User, 'id'>> };

export type AllAnnProfDeptsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAnnProfDeptsQuery = { annProfDepts?: Maybe<Array<Maybe<AnnProfDeptFragmentFragment>>> };

export type AllAnnProfSubjDistrosQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAnnProfSubjDistrosQuery = { annProfSubjDistros?: Maybe<Array<Maybe<AnnProfSubjDistroFragmentFragment>>> };

export type AllAnnStudentClassroomQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAnnStudentClassroomQuery = { annStudentClassroom?: Maybe<AnnStudentClassroomFragmentFragment> };

export type AllClassroomsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllClassroomsQuery = { classrooms?: Maybe<Array<Maybe<ClassroomFragmentFragment>>> };

export type AllDepartmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDepartmentsQuery = { departments?: Maybe<Array<Maybe<DepartmentFragmentFragment>>> };

export type AllDivisionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDivisionsQuery = { divisions?: Maybe<Array<Maybe<DivisionFragmentFragment>>> };

export type SingleDivisionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleDivisionQuery = { division?: Maybe<(
    { subdivisions?: Maybe<Array<Maybe<SubdivisionFragmentFragment>>> }
    & DivisionFragmentFragment
  )> };

export type LogbooksQueryVariables = Exact<{ [key: string]: never; }>;


export type LogbooksQuery = { logbooks?: Maybe<Array<Maybe<LogbookFragmentFragment>>> };

export type AllProfsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProfsQuery = { profs?: Maybe<Array<Maybe<ProfFragmentFragment>>> };

export type SingleProfByMatriculeQueryVariables = Exact<{
  profMatricule: Scalars['String'];
}>;


export type SingleProfByMatriculeQuery = { profByMatricule?: Maybe<ProfFragmentFragment> };

export type AllRegionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllRegionsQuery = { regions?: Maybe<Array<Maybe<RegionFragmentFragment>>> };

export type SingleRegionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleRegionQuery = { region?: Maybe<DivisionsOfARegionFragFragment> };

export type AllSchoolsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSchoolsQuery = { schools?: Maybe<Array<Maybe<SchoolFragmentFragment>>> };

export type SingleSchoolQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleSchoolQuery = { schoolByID?: Maybe<(
    { sections?: Maybe<Array<Maybe<SectionFragmentFragment>>> }
    & SchoolFragmentFragment
  )> };

export type SingleSchoolBySecretCodeQueryVariables = Exact<{
  schoolSecretCode: Scalars['String'];
}>;


export type SingleSchoolBySecretCodeQuery = { schoolBySecretCode?: Maybe<(
    { sections?: Maybe<Array<Maybe<SectionFragmentFragment>>> }
    & SchoolFragmentFragment
  )> };

export type SingleSchoolByPublicCodeQueryVariables = Exact<{
  schoolPublicCode: Scalars['String'];
}>;


export type SingleSchoolByPublicCodeQuery = { schoolByPublicCode?: Maybe<(
    { sections?: Maybe<Array<Maybe<SectionFragmentFragment>>> }
    & SchoolFragmentFragment
  )> };

export type AllSchoolYearsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSchoolYearsQuery = { schoolYears?: Maybe<Array<Maybe<SchoolYearFragmentFragment>>> };

export type AllScoresQueryVariables = Exact<{ [key: string]: never; }>;


export type AllScoresQuery = { scores?: Maybe<Array<Maybe<ScoreFragmentFragment>>> };

export type AllSectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSectionsQuery = { sections?: Maybe<Array<Maybe<SectionFragmentFragment>>> };

export type SingleSectionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleSectionQuery = { section?: Maybe<(
    { departments?: Maybe<Array<Maybe<DepartmentFragmentFragment>>> }
    & SectionFragmentFragment
  )> };

export type SingleSectionForClassroomsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleSectionForClassroomsQuery = { sectionForClasses?: Maybe<(
    { classrooms?: Maybe<Array<Maybe<ClassroomFragmentFragment>>> }
    & SectionFragmentFragment
  )> };

export type AllSequencesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSequencesQuery = { sequences?: Maybe<Array<Maybe<SequenceFragmentFragment>>> };

export type AllStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllStudentsQuery = { students?: Maybe<Array<Maybe<StudentFragmentFragment>>> };

export type SingleStudentBySecretCodeQueryVariables = Exact<{
  studentSecretCode: Scalars['String'];
}>;


export type SingleStudentBySecretCodeQuery = { studentBySecretCode?: Maybe<(
    { annStudentClassroom?: Maybe<Array<Maybe<Pick<AnnStudentClassroom, 'id'>>>> }
    & StudentFragmentFragment
  )> };

export type SingleStudentByMatriculeQueryVariables = Exact<{
  studentMatricule: Scalars['String'];
}>;


export type SingleStudentByMatriculeQuery = { studentByMatricule?: Maybe<(
    { annStudentClassroom?: Maybe<Array<Maybe<Pick<AnnStudentClassroom, 'id'>>>> }
    & StudentFragmentFragment
  )> };

export type AllSubdivisionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSubdivisionsQuery = { subdivisions?: Maybe<Array<Maybe<SubdivisionFragmentFragment>>> };

export type SingleSubdivisionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleSubdivisionQuery = { subdivision?: Maybe<(
    { towns?: Maybe<Array<Maybe<TownFragmentFragment>>> }
    & SubdivisionFragmentFragment
  )> };

export type AllSubjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSubjectsQuery = { subjects?: Maybe<Array<Maybe<SubjectFragmentFragment>>> };

export type AllTermsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTermsQuery = { terms?: Maybe<Array<Maybe<TermFragmentFragment>>> };

export type AllTownsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTownsQuery = { towns?: Maybe<Array<Maybe<TownFragmentFragment>>> };

export type SingleTownQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleTownQuery = { town?: Maybe<(
    { schools?: Maybe<Array<Maybe<SchoolFragmentFragment>>> }
    & TownFragmentFragment
  )> };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { users?: Maybe<Array<Maybe<UserFragmentFragment>>> };

export const AnnProfDeptFragmentFragmentDoc = gql`
    fragment AnnProfDeptFragment on AnnProfDept {
  id
}
    `;
export const AnnProfSubjDistroFragmentFragmentDoc = gql`
    fragment AnnProfSubjDistroFragment on AnnProfSubjDistro {
  id
}
    `;
export const AnnStudentClassroomFragmentFragmentDoc = gql`
    fragment AnnStudentClassroomFragment on AnnStudentClassroom {
  id
}
    `;
export const ClassroomFragmentFragmentDoc = gql`
    fragment ClassroomFragment on Classroom {
  id
  className
  classCode
}
    `;
export const DepartmentFragmentFragmentDoc = gql`
    fragment DepartmentFragment on Department {
  id
  deptName
  deptCode
}
    `;
export const DivisionFragmentFragmentDoc = gql`
    fragment DivisionFragment on Division {
  id
  divisionName
  divisionCode
}
    `;
export const DivisionsOfARegionFragFragmentDoc = gql`
    fragment DivisionsOfARegionFrag on Region {
  id
  regName
  regCode
  divisions {
    id
    divisionName
    divisionCode
  }
}
    `;
export const LogbookFragmentFragmentDoc = gql`
    fragment LogbookFragment on Logbook {
  id
  subjectMatter
  timeOfPeriod
}
    `;
export const ProfFragmentFragmentDoc = gql`
    fragment ProfFragment on Prof {
  id
  prof1stName
  prof2ndName
  prof3rdName
  profMatricule
  profSecretCode
  gender
  image
  email
  phoneNumber
  specialty
}
    `;
export const RegionFragmentFragmentDoc = gql`
    fragment RegionFragment on Region {
  id
  regName
  regCode
}
    `;
export const SchoolYearFragmentFragmentDoc = gql`
    fragment SchoolYearFragment on SchoolYear {
  id
  yearName
  yearCode
}
    `;
export const SchoolFragmentFragmentDoc = gql`
    fragment SchoolFragment on School {
  id
  schoolName
  schoolPublicCode
  schoolCode
  schoolSecretCode
}
    `;
export const ScoreFragmentFragmentDoc = gql`
    fragment ScoreFragment on Score {
  id
  marks
}
    `;
export const SectionFragmentFragmentDoc = gql`
    fragment SectionFragment on Section {
  id
  sectionName
  sectionCode
}
    `;
export const SequenceFragmentFragmentDoc = gql`
    fragment SequenceFragment on Sequence {
  id
  seqName
  seqCode
}
    `;
export const StudentFragmentFragmentDoc = gql`
    fragment StudentFragment on Student {
  id
  student1stName
  student2ndName
  student3rdName
  gender
  studentMatricule
  studentSecretCode
  dateOfBirth
  placeOfBirth
  email
  phoneNumber
  image
}
    `;
export const SubdivisionFragmentFragmentDoc = gql`
    fragment SubdivisionFragment on Subdivision {
  id
  subdivName
  subdivCode
}
    `;
export const SubjectFragmentFragmentDoc = gql`
    fragment SubjectFragment on Subject {
  id
  subjectName
  subjectCode
}
    `;
export const TermFragmentFragmentDoc = gql`
    fragment TermFragment on Term {
  id
  termName
  termCode
}
    `;
export const TownFragmentFragmentDoc = gql`
    fragment TownFragment on Town {
  id
  townName
  townCode
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
  email
  image
}
    `;
export const CreateAnnProfDeptDocument = gql`
    mutation createAnnProfDept($data: AnnProfDeptCreateInput!) {
  createOneAnnProfDept(data: $data) {
    ...AnnProfDeptFragment
  }
}
    ${AnnProfDeptFragmentFragmentDoc}`;
export type CreateAnnProfDeptMutationFn = Apollo.MutationFunction<CreateAnnProfDeptMutation, CreateAnnProfDeptMutationVariables>;
export type CreateAnnProfDeptComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAnnProfDeptMutation, CreateAnnProfDeptMutationVariables>, 'mutation'>;

    export const CreateAnnProfDeptComponent = (props: CreateAnnProfDeptComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAnnProfDeptMutation, CreateAnnProfDeptMutationVariables> mutation={CreateAnnProfDeptDocument} {...props} />
    );
    
export type CreateAnnProfDeptProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAnnProfDeptMutation, CreateAnnProfDeptMutationVariables>
    } & TChildProps;
export function withCreateAnnProfDept<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAnnProfDeptMutation,
  CreateAnnProfDeptMutationVariables,
  CreateAnnProfDeptProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAnnProfDeptMutation, CreateAnnProfDeptMutationVariables, CreateAnnProfDeptProps<TChildProps, TDataName>>(CreateAnnProfDeptDocument, {
      alias: 'createAnnProfDept',
      ...operationOptions
    });
};

/**
 * __useCreateAnnProfDeptMutation__
 *
 * To run a mutation, you first call `useCreateAnnProfDeptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnnProfDeptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnnProfDeptMutation, { data, loading, error }] = useCreateAnnProfDeptMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAnnProfDeptMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAnnProfDeptMutation, CreateAnnProfDeptMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAnnProfDeptMutation, CreateAnnProfDeptMutationVariables>(CreateAnnProfDeptDocument, options);
      }
export type CreateAnnProfDeptMutationHookResult = ReturnType<typeof useCreateAnnProfDeptMutation>;
export type CreateAnnProfDeptMutationResult = Apollo.MutationResult<CreateAnnProfDeptMutation>;
export type CreateAnnProfDeptMutationOptions = Apollo.BaseMutationOptions<CreateAnnProfDeptMutation, CreateAnnProfDeptMutationVariables>;
export const CreateAnnProfSubjDistroDocument = gql`
    mutation createAnnProfSubjDistro($data: AnnProfSubjDistroCreateInput!) {
  createOneAnnProfSubjDistro(data: $data) {
    ...AnnProfSubjDistroFragment
  }
}
    ${AnnProfSubjDistroFragmentFragmentDoc}`;
export type CreateAnnProfSubjDistroMutationFn = Apollo.MutationFunction<CreateAnnProfSubjDistroMutation, CreateAnnProfSubjDistroMutationVariables>;
export type CreateAnnProfSubjDistroComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAnnProfSubjDistroMutation, CreateAnnProfSubjDistroMutationVariables>, 'mutation'>;

    export const CreateAnnProfSubjDistroComponent = (props: CreateAnnProfSubjDistroComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAnnProfSubjDistroMutation, CreateAnnProfSubjDistroMutationVariables> mutation={CreateAnnProfSubjDistroDocument} {...props} />
    );
    
export type CreateAnnProfSubjDistroProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAnnProfSubjDistroMutation, CreateAnnProfSubjDistroMutationVariables>
    } & TChildProps;
export function withCreateAnnProfSubjDistro<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAnnProfSubjDistroMutation,
  CreateAnnProfSubjDistroMutationVariables,
  CreateAnnProfSubjDistroProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAnnProfSubjDistroMutation, CreateAnnProfSubjDistroMutationVariables, CreateAnnProfSubjDistroProps<TChildProps, TDataName>>(CreateAnnProfSubjDistroDocument, {
      alias: 'createAnnProfSubjDistro',
      ...operationOptions
    });
};

/**
 * __useCreateAnnProfSubjDistroMutation__
 *
 * To run a mutation, you first call `useCreateAnnProfSubjDistroMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnnProfSubjDistroMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnnProfSubjDistroMutation, { data, loading, error }] = useCreateAnnProfSubjDistroMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAnnProfSubjDistroMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAnnProfSubjDistroMutation, CreateAnnProfSubjDistroMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAnnProfSubjDistroMutation, CreateAnnProfSubjDistroMutationVariables>(CreateAnnProfSubjDistroDocument, options);
      }
export type CreateAnnProfSubjDistroMutationHookResult = ReturnType<typeof useCreateAnnProfSubjDistroMutation>;
export type CreateAnnProfSubjDistroMutationResult = Apollo.MutationResult<CreateAnnProfSubjDistroMutation>;
export type CreateAnnProfSubjDistroMutationOptions = Apollo.BaseMutationOptions<CreateAnnProfSubjDistroMutation, CreateAnnProfSubjDistroMutationVariables>;
export const CreateAnnStudentClassroomDocument = gql`
    mutation createAnnStudentClassroom($data: AnnStudentClassroomCreateInput!) {
  createOneAnnStudentClassroom(data: $data) {
    ...AnnStudentClassroomFragment
  }
}
    ${AnnStudentClassroomFragmentFragmentDoc}`;
export type CreateAnnStudentClassroomMutationFn = Apollo.MutationFunction<CreateAnnStudentClassroomMutation, CreateAnnStudentClassroomMutationVariables>;
export type CreateAnnStudentClassroomComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAnnStudentClassroomMutation, CreateAnnStudentClassroomMutationVariables>, 'mutation'>;

    export const CreateAnnStudentClassroomComponent = (props: CreateAnnStudentClassroomComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAnnStudentClassroomMutation, CreateAnnStudentClassroomMutationVariables> mutation={CreateAnnStudentClassroomDocument} {...props} />
    );
    
export type CreateAnnStudentClassroomProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateAnnStudentClassroomMutation, CreateAnnStudentClassroomMutationVariables>
    } & TChildProps;
export function withCreateAnnStudentClassroom<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAnnStudentClassroomMutation,
  CreateAnnStudentClassroomMutationVariables,
  CreateAnnStudentClassroomProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAnnStudentClassroomMutation, CreateAnnStudentClassroomMutationVariables, CreateAnnStudentClassroomProps<TChildProps, TDataName>>(CreateAnnStudentClassroomDocument, {
      alias: 'createAnnStudentClassroom',
      ...operationOptions
    });
};

/**
 * __useCreateAnnStudentClassroomMutation__
 *
 * To run a mutation, you first call `useCreateAnnStudentClassroomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnnStudentClassroomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnnStudentClassroomMutation, { data, loading, error }] = useCreateAnnStudentClassroomMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAnnStudentClassroomMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAnnStudentClassroomMutation, CreateAnnStudentClassroomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAnnStudentClassroomMutation, CreateAnnStudentClassroomMutationVariables>(CreateAnnStudentClassroomDocument, options);
      }
export type CreateAnnStudentClassroomMutationHookResult = ReturnType<typeof useCreateAnnStudentClassroomMutation>;
export type CreateAnnStudentClassroomMutationResult = Apollo.MutationResult<CreateAnnStudentClassroomMutation>;
export type CreateAnnStudentClassroomMutationOptions = Apollo.BaseMutationOptions<CreateAnnStudentClassroomMutation, CreateAnnStudentClassroomMutationVariables>;
export const CreateClassroomDocument = gql`
    mutation createClassroom($data: ClassroomCreateInput!) {
  createOneClassroom(data: $data) {
    ...ClassroomFragment
  }
}
    ${ClassroomFragmentFragmentDoc}`;
export type CreateClassroomMutationFn = Apollo.MutationFunction<CreateClassroomMutation, CreateClassroomMutationVariables>;
export type CreateClassroomComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateClassroomMutation, CreateClassroomMutationVariables>, 'mutation'>;

    export const CreateClassroomComponent = (props: CreateClassroomComponentProps) => (
      <ApolloReactComponents.Mutation<CreateClassroomMutation, CreateClassroomMutationVariables> mutation={CreateClassroomDocument} {...props} />
    );
    
export type CreateClassroomProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateClassroomMutation, CreateClassroomMutationVariables>
    } & TChildProps;
export function withCreateClassroom<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateClassroomMutation,
  CreateClassroomMutationVariables,
  CreateClassroomProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateClassroomMutation, CreateClassroomMutationVariables, CreateClassroomProps<TChildProps, TDataName>>(CreateClassroomDocument, {
      alias: 'createClassroom',
      ...operationOptions
    });
};

/**
 * __useCreateClassroomMutation__
 *
 * To run a mutation, you first call `useCreateClassroomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClassroomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClassroomMutation, { data, loading, error }] = useCreateClassroomMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateClassroomMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateClassroomMutation, CreateClassroomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateClassroomMutation, CreateClassroomMutationVariables>(CreateClassroomDocument, options);
      }
export type CreateClassroomMutationHookResult = ReturnType<typeof useCreateClassroomMutation>;
export type CreateClassroomMutationResult = Apollo.MutationResult<CreateClassroomMutation>;
export type CreateClassroomMutationOptions = Apollo.BaseMutationOptions<CreateClassroomMutation, CreateClassroomMutationVariables>;
export const CreateDepartmentDocument = gql`
    mutation createDepartment($data: DepartmentCreateInput!) {
  createOneDepartment(data: $data) {
    ...DepartmentFragment
  }
}
    ${DepartmentFragmentFragmentDoc}`;
export type CreateDepartmentMutationFn = Apollo.MutationFunction<CreateDepartmentMutation, CreateDepartmentMutationVariables>;
export type CreateDepartmentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateDepartmentMutation, CreateDepartmentMutationVariables>, 'mutation'>;

    export const CreateDepartmentComponent = (props: CreateDepartmentComponentProps) => (
      <ApolloReactComponents.Mutation<CreateDepartmentMutation, CreateDepartmentMutationVariables> mutation={CreateDepartmentDocument} {...props} />
    );
    
export type CreateDepartmentProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateDepartmentMutation, CreateDepartmentMutationVariables>
    } & TChildProps;
export function withCreateDepartment<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateDepartmentMutation,
  CreateDepartmentMutationVariables,
  CreateDepartmentProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateDepartmentMutation, CreateDepartmentMutationVariables, CreateDepartmentProps<TChildProps, TDataName>>(CreateDepartmentDocument, {
      alias: 'createDepartment',
      ...operationOptions
    });
};

/**
 * __useCreateDepartmentMutation__
 *
 * To run a mutation, you first call `useCreateDepartmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDepartmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDepartmentMutation, { data, loading, error }] = useCreateDepartmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateDepartmentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateDepartmentMutation, CreateDepartmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateDepartmentMutation, CreateDepartmentMutationVariables>(CreateDepartmentDocument, options);
      }
export type CreateDepartmentMutationHookResult = ReturnType<typeof useCreateDepartmentMutation>;
export type CreateDepartmentMutationResult = Apollo.MutationResult<CreateDepartmentMutation>;
export type CreateDepartmentMutationOptions = Apollo.BaseMutationOptions<CreateDepartmentMutation, CreateDepartmentMutationVariables>;
export const CreateDivisionDocument = gql`
    mutation createDivision($data: DivisionCreateInput!) {
  createOneDivision(data: $data) {
    ...DivisionFragment
  }
}
    ${DivisionFragmentFragmentDoc}`;
export type CreateDivisionMutationFn = Apollo.MutationFunction<CreateDivisionMutation, CreateDivisionMutationVariables>;
export type CreateDivisionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateDivisionMutation, CreateDivisionMutationVariables>, 'mutation'>;

    export const CreateDivisionComponent = (props: CreateDivisionComponentProps) => (
      <ApolloReactComponents.Mutation<CreateDivisionMutation, CreateDivisionMutationVariables> mutation={CreateDivisionDocument} {...props} />
    );
    
export type CreateDivisionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateDivisionMutation, CreateDivisionMutationVariables>
    } & TChildProps;
export function withCreateDivision<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateDivisionMutation,
  CreateDivisionMutationVariables,
  CreateDivisionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateDivisionMutation, CreateDivisionMutationVariables, CreateDivisionProps<TChildProps, TDataName>>(CreateDivisionDocument, {
      alias: 'createDivision',
      ...operationOptions
    });
};

/**
 * __useCreateDivisionMutation__
 *
 * To run a mutation, you first call `useCreateDivisionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDivisionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDivisionMutation, { data, loading, error }] = useCreateDivisionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateDivisionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateDivisionMutation, CreateDivisionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateDivisionMutation, CreateDivisionMutationVariables>(CreateDivisionDocument, options);
      }
export type CreateDivisionMutationHookResult = ReturnType<typeof useCreateDivisionMutation>;
export type CreateDivisionMutationResult = Apollo.MutationResult<CreateDivisionMutation>;
export type CreateDivisionMutationOptions = Apollo.BaseMutationOptions<CreateDivisionMutation, CreateDivisionMutationVariables>;
export const CreateLogbookDocument = gql`
    mutation createLogbook($data: LogbookCreateInput!) {
  createOneLogbook(data: $data) {
    ...LogbookFragment
  }
}
    ${LogbookFragmentFragmentDoc}`;
export type CreateLogbookMutationFn = Apollo.MutationFunction<CreateLogbookMutation, CreateLogbookMutationVariables>;
export type CreateLogbookComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateLogbookMutation, CreateLogbookMutationVariables>, 'mutation'>;

    export const CreateLogbookComponent = (props: CreateLogbookComponentProps) => (
      <ApolloReactComponents.Mutation<CreateLogbookMutation, CreateLogbookMutationVariables> mutation={CreateLogbookDocument} {...props} />
    );
    
export type CreateLogbookProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateLogbookMutation, CreateLogbookMutationVariables>
    } & TChildProps;
export function withCreateLogbook<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateLogbookMutation,
  CreateLogbookMutationVariables,
  CreateLogbookProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateLogbookMutation, CreateLogbookMutationVariables, CreateLogbookProps<TChildProps, TDataName>>(CreateLogbookDocument, {
      alias: 'createLogbook',
      ...operationOptions
    });
};

/**
 * __useCreateLogbookMutation__
 *
 * To run a mutation, you first call `useCreateLogbookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLogbookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLogbookMutation, { data, loading, error }] = useCreateLogbookMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateLogbookMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateLogbookMutation, CreateLogbookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateLogbookMutation, CreateLogbookMutationVariables>(CreateLogbookDocument, options);
      }
export type CreateLogbookMutationHookResult = ReturnType<typeof useCreateLogbookMutation>;
export type CreateLogbookMutationResult = Apollo.MutationResult<CreateLogbookMutation>;
export type CreateLogbookMutationOptions = Apollo.BaseMutationOptions<CreateLogbookMutation, CreateLogbookMutationVariables>;
export const CreateProfDocument = gql`
    mutation createProf($data: ProfCreateInput!) {
  createOneProf(data: $data) {
    ...ProfFragment
  }
}
    ${ProfFragmentFragmentDoc}`;
export type CreateProfMutationFn = Apollo.MutationFunction<CreateProfMutation, CreateProfMutationVariables>;
export type CreateProfComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateProfMutation, CreateProfMutationVariables>, 'mutation'>;

    export const CreateProfComponent = (props: CreateProfComponentProps) => (
      <ApolloReactComponents.Mutation<CreateProfMutation, CreateProfMutationVariables> mutation={CreateProfDocument} {...props} />
    );
    
export type CreateProfProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateProfMutation, CreateProfMutationVariables>
    } & TChildProps;
export function withCreateProf<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateProfMutation,
  CreateProfMutationVariables,
  CreateProfProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateProfMutation, CreateProfMutationVariables, CreateProfProps<TChildProps, TDataName>>(CreateProfDocument, {
      alias: 'createProf',
      ...operationOptions
    });
};

/**
 * __useCreateProfMutation__
 *
 * To run a mutation, you first call `useCreateProfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfMutation, { data, loading, error }] = useCreateProfMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProfMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateProfMutation, CreateProfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateProfMutation, CreateProfMutationVariables>(CreateProfDocument, options);
      }
export type CreateProfMutationHookResult = ReturnType<typeof useCreateProfMutation>;
export type CreateProfMutationResult = Apollo.MutationResult<CreateProfMutation>;
export type CreateProfMutationOptions = Apollo.BaseMutationOptions<CreateProfMutation, CreateProfMutationVariables>;
export const CreateRegionDocument = gql`
    mutation createRegion($data: RegionCreateInput!) {
  createOneRegion(data: $data) {
    ...RegionFragment
  }
}
    ${RegionFragmentFragmentDoc}`;
export type CreateRegionMutationFn = Apollo.MutationFunction<CreateRegionMutation, CreateRegionMutationVariables>;
export type CreateRegionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateRegionMutation, CreateRegionMutationVariables>, 'mutation'>;

    export const CreateRegionComponent = (props: CreateRegionComponentProps) => (
      <ApolloReactComponents.Mutation<CreateRegionMutation, CreateRegionMutationVariables> mutation={CreateRegionDocument} {...props} />
    );
    
export type CreateRegionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateRegionMutation, CreateRegionMutationVariables>
    } & TChildProps;
export function withCreateRegion<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateRegionMutation,
  CreateRegionMutationVariables,
  CreateRegionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateRegionMutation, CreateRegionMutationVariables, CreateRegionProps<TChildProps, TDataName>>(CreateRegionDocument, {
      alias: 'createRegion',
      ...operationOptions
    });
};

/**
 * __useCreateRegionMutation__
 *
 * To run a mutation, you first call `useCreateRegionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRegionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRegionMutation, { data, loading, error }] = useCreateRegionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateRegionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateRegionMutation, CreateRegionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateRegionMutation, CreateRegionMutationVariables>(CreateRegionDocument, options);
      }
export type CreateRegionMutationHookResult = ReturnType<typeof useCreateRegionMutation>;
export type CreateRegionMutationResult = Apollo.MutationResult<CreateRegionMutation>;
export type CreateRegionMutationOptions = Apollo.BaseMutationOptions<CreateRegionMutation, CreateRegionMutationVariables>;
export const CreateSchoolDocument = gql`
    mutation createSchool($data: SchoolCreateInput!) {
  createOneSchool(data: $data) {
    ...SchoolFragment
  }
}
    ${SchoolFragmentFragmentDoc}`;
export type CreateSchoolMutationFn = Apollo.MutationFunction<CreateSchoolMutation, CreateSchoolMutationVariables>;
export type CreateSchoolComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateSchoolMutation, CreateSchoolMutationVariables>, 'mutation'>;

    export const CreateSchoolComponent = (props: CreateSchoolComponentProps) => (
      <ApolloReactComponents.Mutation<CreateSchoolMutation, CreateSchoolMutationVariables> mutation={CreateSchoolDocument} {...props} />
    );
    
export type CreateSchoolProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateSchoolMutation, CreateSchoolMutationVariables>
    } & TChildProps;
export function withCreateSchool<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateSchoolMutation,
  CreateSchoolMutationVariables,
  CreateSchoolProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateSchoolMutation, CreateSchoolMutationVariables, CreateSchoolProps<TChildProps, TDataName>>(CreateSchoolDocument, {
      alias: 'createSchool',
      ...operationOptions
    });
};

/**
 * __useCreateSchoolMutation__
 *
 * To run a mutation, you first call `useCreateSchoolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSchoolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSchoolMutation, { data, loading, error }] = useCreateSchoolMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSchoolMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSchoolMutation, CreateSchoolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateSchoolMutation, CreateSchoolMutationVariables>(CreateSchoolDocument, options);
      }
export type CreateSchoolMutationHookResult = ReturnType<typeof useCreateSchoolMutation>;
export type CreateSchoolMutationResult = Apollo.MutationResult<CreateSchoolMutation>;
export type CreateSchoolMutationOptions = Apollo.BaseMutationOptions<CreateSchoolMutation, CreateSchoolMutationVariables>;
export const CreateSchoolYearDocument = gql`
    mutation createSchoolYear($data: SchoolYearCreateInput!) {
  createOneSchoolYear(data: $data) {
    ...SchoolYearFragment
  }
}
    ${SchoolYearFragmentFragmentDoc}`;
export type CreateSchoolYearMutationFn = Apollo.MutationFunction<CreateSchoolYearMutation, CreateSchoolYearMutationVariables>;
export type CreateSchoolYearComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateSchoolYearMutation, CreateSchoolYearMutationVariables>, 'mutation'>;

    export const CreateSchoolYearComponent = (props: CreateSchoolYearComponentProps) => (
      <ApolloReactComponents.Mutation<CreateSchoolYearMutation, CreateSchoolYearMutationVariables> mutation={CreateSchoolYearDocument} {...props} />
    );
    
export type CreateSchoolYearProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateSchoolYearMutation, CreateSchoolYearMutationVariables>
    } & TChildProps;
export function withCreateSchoolYear<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateSchoolYearMutation,
  CreateSchoolYearMutationVariables,
  CreateSchoolYearProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateSchoolYearMutation, CreateSchoolYearMutationVariables, CreateSchoolYearProps<TChildProps, TDataName>>(CreateSchoolYearDocument, {
      alias: 'createSchoolYear',
      ...operationOptions
    });
};

/**
 * __useCreateSchoolYearMutation__
 *
 * To run a mutation, you first call `useCreateSchoolYearMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSchoolYearMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSchoolYearMutation, { data, loading, error }] = useCreateSchoolYearMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSchoolYearMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSchoolYearMutation, CreateSchoolYearMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateSchoolYearMutation, CreateSchoolYearMutationVariables>(CreateSchoolYearDocument, options);
      }
export type CreateSchoolYearMutationHookResult = ReturnType<typeof useCreateSchoolYearMutation>;
export type CreateSchoolYearMutationResult = Apollo.MutationResult<CreateSchoolYearMutation>;
export type CreateSchoolYearMutationOptions = Apollo.BaseMutationOptions<CreateSchoolYearMutation, CreateSchoolYearMutationVariables>;
export const CreateScoreDocument = gql`
    mutation createScore($data: ScoreCreateInput!) {
  createOneScore(data: $data) {
    ...ScoreFragment
  }
}
    ${ScoreFragmentFragmentDoc}`;
export type CreateScoreMutationFn = Apollo.MutationFunction<CreateScoreMutation, CreateScoreMutationVariables>;
export type CreateScoreComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateScoreMutation, CreateScoreMutationVariables>, 'mutation'>;

    export const CreateScoreComponent = (props: CreateScoreComponentProps) => (
      <ApolloReactComponents.Mutation<CreateScoreMutation, CreateScoreMutationVariables> mutation={CreateScoreDocument} {...props} />
    );
    
export type CreateScoreProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateScoreMutation, CreateScoreMutationVariables>
    } & TChildProps;
export function withCreateScore<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateScoreMutation,
  CreateScoreMutationVariables,
  CreateScoreProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateScoreMutation, CreateScoreMutationVariables, CreateScoreProps<TChildProps, TDataName>>(CreateScoreDocument, {
      alias: 'createScore',
      ...operationOptions
    });
};

/**
 * __useCreateScoreMutation__
 *
 * To run a mutation, you first call `useCreateScoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateScoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createScoreMutation, { data, loading, error }] = useCreateScoreMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateScoreMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateScoreMutation, CreateScoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateScoreMutation, CreateScoreMutationVariables>(CreateScoreDocument, options);
      }
export type CreateScoreMutationHookResult = ReturnType<typeof useCreateScoreMutation>;
export type CreateScoreMutationResult = Apollo.MutationResult<CreateScoreMutation>;
export type CreateScoreMutationOptions = Apollo.BaseMutationOptions<CreateScoreMutation, CreateScoreMutationVariables>;
export const CreateSectionDocument = gql`
    mutation createSection($data: SectionCreateInput!) {
  createOneSection(data: $data) {
    ...SectionFragment
  }
}
    ${SectionFragmentFragmentDoc}`;
export type CreateSectionMutationFn = Apollo.MutationFunction<CreateSectionMutation, CreateSectionMutationVariables>;
export type CreateSectionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateSectionMutation, CreateSectionMutationVariables>, 'mutation'>;

    export const CreateSectionComponent = (props: CreateSectionComponentProps) => (
      <ApolloReactComponents.Mutation<CreateSectionMutation, CreateSectionMutationVariables> mutation={CreateSectionDocument} {...props} />
    );
    
export type CreateSectionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateSectionMutation, CreateSectionMutationVariables>
    } & TChildProps;
export function withCreateSection<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateSectionMutation,
  CreateSectionMutationVariables,
  CreateSectionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateSectionMutation, CreateSectionMutationVariables, CreateSectionProps<TChildProps, TDataName>>(CreateSectionDocument, {
      alias: 'createSection',
      ...operationOptions
    });
};

/**
 * __useCreateSectionMutation__
 *
 * To run a mutation, you first call `useCreateSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSectionMutation, { data, loading, error }] = useCreateSectionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSectionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSectionMutation, CreateSectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateSectionMutation, CreateSectionMutationVariables>(CreateSectionDocument, options);
      }
export type CreateSectionMutationHookResult = ReturnType<typeof useCreateSectionMutation>;
export type CreateSectionMutationResult = Apollo.MutationResult<CreateSectionMutation>;
export type CreateSectionMutationOptions = Apollo.BaseMutationOptions<CreateSectionMutation, CreateSectionMutationVariables>;
export const CreateSequenceDocument = gql`
    mutation createSequence($data: SequenceCreateInput!) {
  createOneSequence(data: $data) {
    ...SequenceFragment
  }
}
    ${SequenceFragmentFragmentDoc}`;
export type CreateSequenceMutationFn = Apollo.MutationFunction<CreateSequenceMutation, CreateSequenceMutationVariables>;
export type CreateSequenceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateSequenceMutation, CreateSequenceMutationVariables>, 'mutation'>;

    export const CreateSequenceComponent = (props: CreateSequenceComponentProps) => (
      <ApolloReactComponents.Mutation<CreateSequenceMutation, CreateSequenceMutationVariables> mutation={CreateSequenceDocument} {...props} />
    );
    
export type CreateSequenceProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateSequenceMutation, CreateSequenceMutationVariables>
    } & TChildProps;
export function withCreateSequence<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateSequenceMutation,
  CreateSequenceMutationVariables,
  CreateSequenceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateSequenceMutation, CreateSequenceMutationVariables, CreateSequenceProps<TChildProps, TDataName>>(CreateSequenceDocument, {
      alias: 'createSequence',
      ...operationOptions
    });
};

/**
 * __useCreateSequenceMutation__
 *
 * To run a mutation, you first call `useCreateSequenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSequenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSequenceMutation, { data, loading, error }] = useCreateSequenceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSequenceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSequenceMutation, CreateSequenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateSequenceMutation, CreateSequenceMutationVariables>(CreateSequenceDocument, options);
      }
export type CreateSequenceMutationHookResult = ReturnType<typeof useCreateSequenceMutation>;
export type CreateSequenceMutationResult = Apollo.MutationResult<CreateSequenceMutation>;
export type CreateSequenceMutationOptions = Apollo.BaseMutationOptions<CreateSequenceMutation, CreateSequenceMutationVariables>;
export const CreateStudentDocument = gql`
    mutation createStudent($data: StudentCreateInput!) {
  createOneStudent(data: $data) {
    ...StudentFragment
  }
}
    ${StudentFragmentFragmentDoc}`;
export type CreateStudentMutationFn = Apollo.MutationFunction<CreateStudentMutation, CreateStudentMutationVariables>;
export type CreateStudentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateStudentMutation, CreateStudentMutationVariables>, 'mutation'>;

    export const CreateStudentComponent = (props: CreateStudentComponentProps) => (
      <ApolloReactComponents.Mutation<CreateStudentMutation, CreateStudentMutationVariables> mutation={CreateStudentDocument} {...props} />
    );
    
export type CreateStudentProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateStudentMutation, CreateStudentMutationVariables>
    } & TChildProps;
export function withCreateStudent<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateStudentMutation,
  CreateStudentMutationVariables,
  CreateStudentProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateStudentMutation, CreateStudentMutationVariables, CreateStudentProps<TChildProps, TDataName>>(CreateStudentDocument, {
      alias: 'createStudent',
      ...operationOptions
    });
};

/**
 * __useCreateStudentMutation__
 *
 * To run a mutation, you first call `useCreateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStudentMutation, { data, loading, error }] = useCreateStudentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateStudentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateStudentMutation, CreateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateStudentMutation, CreateStudentMutationVariables>(CreateStudentDocument, options);
      }
export type CreateStudentMutationHookResult = ReturnType<typeof useCreateStudentMutation>;
export type CreateStudentMutationResult = Apollo.MutationResult<CreateStudentMutation>;
export type CreateStudentMutationOptions = Apollo.BaseMutationOptions<CreateStudentMutation, CreateStudentMutationVariables>;
export const CreateSubdivisionDocument = gql`
    mutation createSubdivision($data: SubdivisionCreateInput!) {
  createOneSubdivision(data: $data) {
    ...SubdivisionFragment
  }
}
    ${SubdivisionFragmentFragmentDoc}`;
export type CreateSubdivisionMutationFn = Apollo.MutationFunction<CreateSubdivisionMutation, CreateSubdivisionMutationVariables>;
export type CreateSubdivisionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateSubdivisionMutation, CreateSubdivisionMutationVariables>, 'mutation'>;

    export const CreateSubdivisionComponent = (props: CreateSubdivisionComponentProps) => (
      <ApolloReactComponents.Mutation<CreateSubdivisionMutation, CreateSubdivisionMutationVariables> mutation={CreateSubdivisionDocument} {...props} />
    );
    
export type CreateSubdivisionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateSubdivisionMutation, CreateSubdivisionMutationVariables>
    } & TChildProps;
export function withCreateSubdivision<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateSubdivisionMutation,
  CreateSubdivisionMutationVariables,
  CreateSubdivisionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateSubdivisionMutation, CreateSubdivisionMutationVariables, CreateSubdivisionProps<TChildProps, TDataName>>(CreateSubdivisionDocument, {
      alias: 'createSubdivision',
      ...operationOptions
    });
};

/**
 * __useCreateSubdivisionMutation__
 *
 * To run a mutation, you first call `useCreateSubdivisionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubdivisionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubdivisionMutation, { data, loading, error }] = useCreateSubdivisionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSubdivisionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSubdivisionMutation, CreateSubdivisionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateSubdivisionMutation, CreateSubdivisionMutationVariables>(CreateSubdivisionDocument, options);
      }
export type CreateSubdivisionMutationHookResult = ReturnType<typeof useCreateSubdivisionMutation>;
export type CreateSubdivisionMutationResult = Apollo.MutationResult<CreateSubdivisionMutation>;
export type CreateSubdivisionMutationOptions = Apollo.BaseMutationOptions<CreateSubdivisionMutation, CreateSubdivisionMutationVariables>;
export const CreateSubjectDocument = gql`
    mutation createSubject($data: SubjectCreateInput!) {
  createOneSubject(data: $data) {
    ...SubjectFragment
  }
}
    ${SubjectFragmentFragmentDoc}`;
export type CreateSubjectMutationFn = Apollo.MutationFunction<CreateSubjectMutation, CreateSubjectMutationVariables>;
export type CreateSubjectComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateSubjectMutation, CreateSubjectMutationVariables>, 'mutation'>;

    export const CreateSubjectComponent = (props: CreateSubjectComponentProps) => (
      <ApolloReactComponents.Mutation<CreateSubjectMutation, CreateSubjectMutationVariables> mutation={CreateSubjectDocument} {...props} />
    );
    
export type CreateSubjectProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateSubjectMutation, CreateSubjectMutationVariables>
    } & TChildProps;
export function withCreateSubject<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateSubjectMutation,
  CreateSubjectMutationVariables,
  CreateSubjectProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateSubjectMutation, CreateSubjectMutationVariables, CreateSubjectProps<TChildProps, TDataName>>(CreateSubjectDocument, {
      alias: 'createSubject',
      ...operationOptions
    });
};

/**
 * __useCreateSubjectMutation__
 *
 * To run a mutation, you first call `useCreateSubjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubjectMutation, { data, loading, error }] = useCreateSubjectMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSubjectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSubjectMutation, CreateSubjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateSubjectMutation, CreateSubjectMutationVariables>(CreateSubjectDocument, options);
      }
export type CreateSubjectMutationHookResult = ReturnType<typeof useCreateSubjectMutation>;
export type CreateSubjectMutationResult = Apollo.MutationResult<CreateSubjectMutation>;
export type CreateSubjectMutationOptions = Apollo.BaseMutationOptions<CreateSubjectMutation, CreateSubjectMutationVariables>;
export const CreateTermDocument = gql`
    mutation createTerm($data: TermCreateInput!) {
  createOneTerm(data: $data) {
    ...TermFragment
  }
}
    ${TermFragmentFragmentDoc}`;
export type CreateTermMutationFn = Apollo.MutationFunction<CreateTermMutation, CreateTermMutationVariables>;
export type CreateTermComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTermMutation, CreateTermMutationVariables>, 'mutation'>;

    export const CreateTermComponent = (props: CreateTermComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTermMutation, CreateTermMutationVariables> mutation={CreateTermDocument} {...props} />
    );
    
export type CreateTermProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateTermMutation, CreateTermMutationVariables>
    } & TChildProps;
export function withCreateTerm<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateTermMutation,
  CreateTermMutationVariables,
  CreateTermProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateTermMutation, CreateTermMutationVariables, CreateTermProps<TChildProps, TDataName>>(CreateTermDocument, {
      alias: 'createTerm',
      ...operationOptions
    });
};

/**
 * __useCreateTermMutation__
 *
 * To run a mutation, you first call `useCreateTermMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTermMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTermMutation, { data, loading, error }] = useCreateTermMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTermMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTermMutation, CreateTermMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateTermMutation, CreateTermMutationVariables>(CreateTermDocument, options);
      }
export type CreateTermMutationHookResult = ReturnType<typeof useCreateTermMutation>;
export type CreateTermMutationResult = Apollo.MutationResult<CreateTermMutation>;
export type CreateTermMutationOptions = Apollo.BaseMutationOptions<CreateTermMutation, CreateTermMutationVariables>;
export const CreateTownDocument = gql`
    mutation createTown($data: TownCreateInput!) {
  createOneTown(data: $data) {
    ...TownFragment
  }
}
    ${TownFragmentFragmentDoc}`;
export type CreateTownMutationFn = Apollo.MutationFunction<CreateTownMutation, CreateTownMutationVariables>;
export type CreateTownComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTownMutation, CreateTownMutationVariables>, 'mutation'>;

    export const CreateTownComponent = (props: CreateTownComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTownMutation, CreateTownMutationVariables> mutation={CreateTownDocument} {...props} />
    );
    
export type CreateTownProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateTownMutation, CreateTownMutationVariables>
    } & TChildProps;
export function withCreateTown<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateTownMutation,
  CreateTownMutationVariables,
  CreateTownProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateTownMutation, CreateTownMutationVariables, CreateTownProps<TChildProps, TDataName>>(CreateTownDocument, {
      alias: 'createTown',
      ...operationOptions
    });
};

/**
 * __useCreateTownMutation__
 *
 * To run a mutation, you first call `useCreateTownMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTownMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTownMutation, { data, loading, error }] = useCreateTownMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTownMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTownMutation, CreateTownMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateTownMutation, CreateTownMutationVariables>(CreateTownDocument, options);
      }
export type CreateTownMutationHookResult = ReturnType<typeof useCreateTownMutation>;
export type CreateTownMutationResult = Apollo.MutationResult<CreateTownMutation>;
export type CreateTownMutationOptions = Apollo.BaseMutationOptions<CreateTownMutation, CreateTownMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($data: UserCreateInput!) {
  createOneUser(data: $data) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUserMutation, CreateUserMutationVariables>, 'mutation'>;

    export const CreateUserComponent = (props: CreateUserComponentProps) => (
      <ApolloReactComponents.Mutation<CreateUserMutation, CreateUserMutationVariables> mutation={CreateUserDocument} {...props} />
    );
    
export type CreateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>
    } & TChildProps;
export function withCreateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUserMutation, CreateUserMutationVariables, CreateUserProps<TChildProps, TDataName>>(CreateUserDocument, {
      alias: 'createUser',
      ...operationOptions
    });
};

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteAnnProfDeptDocument = gql`
    mutation deleteAnnProfDept($id: String!) {
  deleteOneAnnProfDept(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteAnnProfDeptMutationFn = Apollo.MutationFunction<DeleteAnnProfDeptMutation, DeleteAnnProfDeptMutationVariables>;
export type DeleteAnnProfDeptComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAnnProfDeptMutation, DeleteAnnProfDeptMutationVariables>, 'mutation'>;

    export const DeleteAnnProfDeptComponent = (props: DeleteAnnProfDeptComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAnnProfDeptMutation, DeleteAnnProfDeptMutationVariables> mutation={DeleteAnnProfDeptDocument} {...props} />
    );
    
export type DeleteAnnProfDeptProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteAnnProfDeptMutation, DeleteAnnProfDeptMutationVariables>
    } & TChildProps;
export function withDeleteAnnProfDept<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAnnProfDeptMutation,
  DeleteAnnProfDeptMutationVariables,
  DeleteAnnProfDeptProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAnnProfDeptMutation, DeleteAnnProfDeptMutationVariables, DeleteAnnProfDeptProps<TChildProps, TDataName>>(DeleteAnnProfDeptDocument, {
      alias: 'deleteAnnProfDept',
      ...operationOptions
    });
};

/**
 * __useDeleteAnnProfDeptMutation__
 *
 * To run a mutation, you first call `useDeleteAnnProfDeptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAnnProfDeptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAnnProfDeptMutation, { data, loading, error }] = useDeleteAnnProfDeptMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAnnProfDeptMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAnnProfDeptMutation, DeleteAnnProfDeptMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAnnProfDeptMutation, DeleteAnnProfDeptMutationVariables>(DeleteAnnProfDeptDocument, options);
      }
export type DeleteAnnProfDeptMutationHookResult = ReturnType<typeof useDeleteAnnProfDeptMutation>;
export type DeleteAnnProfDeptMutationResult = Apollo.MutationResult<DeleteAnnProfDeptMutation>;
export type DeleteAnnProfDeptMutationOptions = Apollo.BaseMutationOptions<DeleteAnnProfDeptMutation, DeleteAnnProfDeptMutationVariables>;
export const DeleteAnnProfSubjDistroDocument = gql`
    mutation deleteAnnProfSubjDistro($id: String!) {
  deleteOneAnnProfSubjDistro(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteAnnProfSubjDistroMutationFn = Apollo.MutationFunction<DeleteAnnProfSubjDistroMutation, DeleteAnnProfSubjDistroMutationVariables>;
export type DeleteAnnProfSubjDistroComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAnnProfSubjDistroMutation, DeleteAnnProfSubjDistroMutationVariables>, 'mutation'>;

    export const DeleteAnnProfSubjDistroComponent = (props: DeleteAnnProfSubjDistroComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAnnProfSubjDistroMutation, DeleteAnnProfSubjDistroMutationVariables> mutation={DeleteAnnProfSubjDistroDocument} {...props} />
    );
    
export type DeleteAnnProfSubjDistroProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteAnnProfSubjDistroMutation, DeleteAnnProfSubjDistroMutationVariables>
    } & TChildProps;
export function withDeleteAnnProfSubjDistro<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAnnProfSubjDistroMutation,
  DeleteAnnProfSubjDistroMutationVariables,
  DeleteAnnProfSubjDistroProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAnnProfSubjDistroMutation, DeleteAnnProfSubjDistroMutationVariables, DeleteAnnProfSubjDistroProps<TChildProps, TDataName>>(DeleteAnnProfSubjDistroDocument, {
      alias: 'deleteAnnProfSubjDistro',
      ...operationOptions
    });
};

/**
 * __useDeleteAnnProfSubjDistroMutation__
 *
 * To run a mutation, you first call `useDeleteAnnProfSubjDistroMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAnnProfSubjDistroMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAnnProfSubjDistroMutation, { data, loading, error }] = useDeleteAnnProfSubjDistroMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAnnProfSubjDistroMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAnnProfSubjDistroMutation, DeleteAnnProfSubjDistroMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAnnProfSubjDistroMutation, DeleteAnnProfSubjDistroMutationVariables>(DeleteAnnProfSubjDistroDocument, options);
      }
export type DeleteAnnProfSubjDistroMutationHookResult = ReturnType<typeof useDeleteAnnProfSubjDistroMutation>;
export type DeleteAnnProfSubjDistroMutationResult = Apollo.MutationResult<DeleteAnnProfSubjDistroMutation>;
export type DeleteAnnProfSubjDistroMutationOptions = Apollo.BaseMutationOptions<DeleteAnnProfSubjDistroMutation, DeleteAnnProfSubjDistroMutationVariables>;
export const DeleteAnnStudentClassroomDocument = gql`
    mutation deleteAnnStudentClassroom($id: String!) {
  deleteOneAnnStudentClassroom(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteAnnStudentClassroomMutationFn = Apollo.MutationFunction<DeleteAnnStudentClassroomMutation, DeleteAnnStudentClassroomMutationVariables>;
export type DeleteAnnStudentClassroomComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAnnStudentClassroomMutation, DeleteAnnStudentClassroomMutationVariables>, 'mutation'>;

    export const DeleteAnnStudentClassroomComponent = (props: DeleteAnnStudentClassroomComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAnnStudentClassroomMutation, DeleteAnnStudentClassroomMutationVariables> mutation={DeleteAnnStudentClassroomDocument} {...props} />
    );
    
export type DeleteAnnStudentClassroomProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteAnnStudentClassroomMutation, DeleteAnnStudentClassroomMutationVariables>
    } & TChildProps;
export function withDeleteAnnStudentClassroom<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAnnStudentClassroomMutation,
  DeleteAnnStudentClassroomMutationVariables,
  DeleteAnnStudentClassroomProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAnnStudentClassroomMutation, DeleteAnnStudentClassroomMutationVariables, DeleteAnnStudentClassroomProps<TChildProps, TDataName>>(DeleteAnnStudentClassroomDocument, {
      alias: 'deleteAnnStudentClassroom',
      ...operationOptions
    });
};

/**
 * __useDeleteAnnStudentClassroomMutation__
 *
 * To run a mutation, you first call `useDeleteAnnStudentClassroomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAnnStudentClassroomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAnnStudentClassroomMutation, { data, loading, error }] = useDeleteAnnStudentClassroomMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAnnStudentClassroomMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAnnStudentClassroomMutation, DeleteAnnStudentClassroomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteAnnStudentClassroomMutation, DeleteAnnStudentClassroomMutationVariables>(DeleteAnnStudentClassroomDocument, options);
      }
export type DeleteAnnStudentClassroomMutationHookResult = ReturnType<typeof useDeleteAnnStudentClassroomMutation>;
export type DeleteAnnStudentClassroomMutationResult = Apollo.MutationResult<DeleteAnnStudentClassroomMutation>;
export type DeleteAnnStudentClassroomMutationOptions = Apollo.BaseMutationOptions<DeleteAnnStudentClassroomMutation, DeleteAnnStudentClassroomMutationVariables>;
export const DeleteClassroomDocument = gql`
    mutation deleteClassroom($id: String!) {
  deleteOneClassroom(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteClassroomMutationFn = Apollo.MutationFunction<DeleteClassroomMutation, DeleteClassroomMutationVariables>;
export type DeleteClassroomComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteClassroomMutation, DeleteClassroomMutationVariables>, 'mutation'>;

    export const DeleteClassroomComponent = (props: DeleteClassroomComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteClassroomMutation, DeleteClassroomMutationVariables> mutation={DeleteClassroomDocument} {...props} />
    );
    
export type DeleteClassroomProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteClassroomMutation, DeleteClassroomMutationVariables>
    } & TChildProps;
export function withDeleteClassroom<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteClassroomMutation,
  DeleteClassroomMutationVariables,
  DeleteClassroomProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteClassroomMutation, DeleteClassroomMutationVariables, DeleteClassroomProps<TChildProps, TDataName>>(DeleteClassroomDocument, {
      alias: 'deleteClassroom',
      ...operationOptions
    });
};

/**
 * __useDeleteClassroomMutation__
 *
 * To run a mutation, you first call `useDeleteClassroomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClassroomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClassroomMutation, { data, loading, error }] = useDeleteClassroomMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteClassroomMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteClassroomMutation, DeleteClassroomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteClassroomMutation, DeleteClassroomMutationVariables>(DeleteClassroomDocument, options);
      }
export type DeleteClassroomMutationHookResult = ReturnType<typeof useDeleteClassroomMutation>;
export type DeleteClassroomMutationResult = Apollo.MutationResult<DeleteClassroomMutation>;
export type DeleteClassroomMutationOptions = Apollo.BaseMutationOptions<DeleteClassroomMutation, DeleteClassroomMutationVariables>;
export const DeleteDepartmentDocument = gql`
    mutation deleteDepartment($id: String!) {
  deleteOneDepartment(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteDepartmentMutationFn = Apollo.MutationFunction<DeleteDepartmentMutation, DeleteDepartmentMutationVariables>;
export type DeleteDepartmentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteDepartmentMutation, DeleteDepartmentMutationVariables>, 'mutation'>;

    export const DeleteDepartmentComponent = (props: DeleteDepartmentComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteDepartmentMutation, DeleteDepartmentMutationVariables> mutation={DeleteDepartmentDocument} {...props} />
    );
    
export type DeleteDepartmentProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteDepartmentMutation, DeleteDepartmentMutationVariables>
    } & TChildProps;
export function withDeleteDepartment<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteDepartmentMutation,
  DeleteDepartmentMutationVariables,
  DeleteDepartmentProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteDepartmentMutation, DeleteDepartmentMutationVariables, DeleteDepartmentProps<TChildProps, TDataName>>(DeleteDepartmentDocument, {
      alias: 'deleteDepartment',
      ...operationOptions
    });
};

/**
 * __useDeleteDepartmentMutation__
 *
 * To run a mutation, you first call `useDeleteDepartmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDepartmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDepartmentMutation, { data, loading, error }] = useDeleteDepartmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDepartmentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteDepartmentMutation, DeleteDepartmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteDepartmentMutation, DeleteDepartmentMutationVariables>(DeleteDepartmentDocument, options);
      }
export type DeleteDepartmentMutationHookResult = ReturnType<typeof useDeleteDepartmentMutation>;
export type DeleteDepartmentMutationResult = Apollo.MutationResult<DeleteDepartmentMutation>;
export type DeleteDepartmentMutationOptions = Apollo.BaseMutationOptions<DeleteDepartmentMutation, DeleteDepartmentMutationVariables>;
export const DeleteDivisionDocument = gql`
    mutation deleteDivision($id: String!) {
  deleteOneDivision(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteDivisionMutationFn = Apollo.MutationFunction<DeleteDivisionMutation, DeleteDivisionMutationVariables>;
export type DeleteDivisionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteDivisionMutation, DeleteDivisionMutationVariables>, 'mutation'>;

    export const DeleteDivisionComponent = (props: DeleteDivisionComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteDivisionMutation, DeleteDivisionMutationVariables> mutation={DeleteDivisionDocument} {...props} />
    );
    
export type DeleteDivisionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteDivisionMutation, DeleteDivisionMutationVariables>
    } & TChildProps;
export function withDeleteDivision<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteDivisionMutation,
  DeleteDivisionMutationVariables,
  DeleteDivisionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteDivisionMutation, DeleteDivisionMutationVariables, DeleteDivisionProps<TChildProps, TDataName>>(DeleteDivisionDocument, {
      alias: 'deleteDivision',
      ...operationOptions
    });
};

/**
 * __useDeleteDivisionMutation__
 *
 * To run a mutation, you first call `useDeleteDivisionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDivisionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDivisionMutation, { data, loading, error }] = useDeleteDivisionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDivisionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteDivisionMutation, DeleteDivisionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteDivisionMutation, DeleteDivisionMutationVariables>(DeleteDivisionDocument, options);
      }
export type DeleteDivisionMutationHookResult = ReturnType<typeof useDeleteDivisionMutation>;
export type DeleteDivisionMutationResult = Apollo.MutationResult<DeleteDivisionMutation>;
export type DeleteDivisionMutationOptions = Apollo.BaseMutationOptions<DeleteDivisionMutation, DeleteDivisionMutationVariables>;
export const DeleteLogbookDocument = gql`
    mutation deleteLogbook($id: String!) {
  deleteOneLogbook(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteLogbookMutationFn = Apollo.MutationFunction<DeleteLogbookMutation, DeleteLogbookMutationVariables>;
export type DeleteLogbookComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteLogbookMutation, DeleteLogbookMutationVariables>, 'mutation'>;

    export const DeleteLogbookComponent = (props: DeleteLogbookComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteLogbookMutation, DeleteLogbookMutationVariables> mutation={DeleteLogbookDocument} {...props} />
    );
    
export type DeleteLogbookProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteLogbookMutation, DeleteLogbookMutationVariables>
    } & TChildProps;
export function withDeleteLogbook<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteLogbookMutation,
  DeleteLogbookMutationVariables,
  DeleteLogbookProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteLogbookMutation, DeleteLogbookMutationVariables, DeleteLogbookProps<TChildProps, TDataName>>(DeleteLogbookDocument, {
      alias: 'deleteLogbook',
      ...operationOptions
    });
};

/**
 * __useDeleteLogbookMutation__
 *
 * To run a mutation, you first call `useDeleteLogbookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLogbookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLogbookMutation, { data, loading, error }] = useDeleteLogbookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLogbookMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteLogbookMutation, DeleteLogbookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteLogbookMutation, DeleteLogbookMutationVariables>(DeleteLogbookDocument, options);
      }
export type DeleteLogbookMutationHookResult = ReturnType<typeof useDeleteLogbookMutation>;
export type DeleteLogbookMutationResult = Apollo.MutationResult<DeleteLogbookMutation>;
export type DeleteLogbookMutationOptions = Apollo.BaseMutationOptions<DeleteLogbookMutation, DeleteLogbookMutationVariables>;
export const DeleteProfDocument = gql`
    mutation deleteProf($id: String!) {
  deleteOneProf(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteProfMutationFn = Apollo.MutationFunction<DeleteProfMutation, DeleteProfMutationVariables>;
export type DeleteProfComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteProfMutation, DeleteProfMutationVariables>, 'mutation'>;

    export const DeleteProfComponent = (props: DeleteProfComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteProfMutation, DeleteProfMutationVariables> mutation={DeleteProfDocument} {...props} />
    );
    
export type DeleteProfProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteProfMutation, DeleteProfMutationVariables>
    } & TChildProps;
export function withDeleteProf<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteProfMutation,
  DeleteProfMutationVariables,
  DeleteProfProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteProfMutation, DeleteProfMutationVariables, DeleteProfProps<TChildProps, TDataName>>(DeleteProfDocument, {
      alias: 'deleteProf',
      ...operationOptions
    });
};

/**
 * __useDeleteProfMutation__
 *
 * To run a mutation, you first call `useDeleteProfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProfMutation, { data, loading, error }] = useDeleteProfMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProfMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteProfMutation, DeleteProfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteProfMutation, DeleteProfMutationVariables>(DeleteProfDocument, options);
      }
export type DeleteProfMutationHookResult = ReturnType<typeof useDeleteProfMutation>;
export type DeleteProfMutationResult = Apollo.MutationResult<DeleteProfMutation>;
export type DeleteProfMutationOptions = Apollo.BaseMutationOptions<DeleteProfMutation, DeleteProfMutationVariables>;
export const DeleteRegionDocument = gql`
    mutation deleteRegion($id: String!) {
  deleteOneRegion(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteRegionMutationFn = Apollo.MutationFunction<DeleteRegionMutation, DeleteRegionMutationVariables>;
export type DeleteRegionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteRegionMutation, DeleteRegionMutationVariables>, 'mutation'>;

    export const DeleteRegionComponent = (props: DeleteRegionComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteRegionMutation, DeleteRegionMutationVariables> mutation={DeleteRegionDocument} {...props} />
    );
    
export type DeleteRegionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteRegionMutation, DeleteRegionMutationVariables>
    } & TChildProps;
export function withDeleteRegion<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteRegionMutation,
  DeleteRegionMutationVariables,
  DeleteRegionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteRegionMutation, DeleteRegionMutationVariables, DeleteRegionProps<TChildProps, TDataName>>(DeleteRegionDocument, {
      alias: 'deleteRegion',
      ...operationOptions
    });
};

/**
 * __useDeleteRegionMutation__
 *
 * To run a mutation, you first call `useDeleteRegionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRegionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRegionMutation, { data, loading, error }] = useDeleteRegionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRegionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteRegionMutation, DeleteRegionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteRegionMutation, DeleteRegionMutationVariables>(DeleteRegionDocument, options);
      }
export type DeleteRegionMutationHookResult = ReturnType<typeof useDeleteRegionMutation>;
export type DeleteRegionMutationResult = Apollo.MutationResult<DeleteRegionMutation>;
export type DeleteRegionMutationOptions = Apollo.BaseMutationOptions<DeleteRegionMutation, DeleteRegionMutationVariables>;
export const DeleteSchoolDocument = gql`
    mutation deleteSchool($id: String!) {
  deleteOneSchool(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteSchoolMutationFn = Apollo.MutationFunction<DeleteSchoolMutation, DeleteSchoolMutationVariables>;
export type DeleteSchoolComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteSchoolMutation, DeleteSchoolMutationVariables>, 'mutation'>;

    export const DeleteSchoolComponent = (props: DeleteSchoolComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteSchoolMutation, DeleteSchoolMutationVariables> mutation={DeleteSchoolDocument} {...props} />
    );
    
export type DeleteSchoolProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteSchoolMutation, DeleteSchoolMutationVariables>
    } & TChildProps;
export function withDeleteSchool<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteSchoolMutation,
  DeleteSchoolMutationVariables,
  DeleteSchoolProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteSchoolMutation, DeleteSchoolMutationVariables, DeleteSchoolProps<TChildProps, TDataName>>(DeleteSchoolDocument, {
      alias: 'deleteSchool',
      ...operationOptions
    });
};

/**
 * __useDeleteSchoolMutation__
 *
 * To run a mutation, you first call `useDeleteSchoolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSchoolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSchoolMutation, { data, loading, error }] = useDeleteSchoolMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSchoolMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteSchoolMutation, DeleteSchoolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteSchoolMutation, DeleteSchoolMutationVariables>(DeleteSchoolDocument, options);
      }
export type DeleteSchoolMutationHookResult = ReturnType<typeof useDeleteSchoolMutation>;
export type DeleteSchoolMutationResult = Apollo.MutationResult<DeleteSchoolMutation>;
export type DeleteSchoolMutationOptions = Apollo.BaseMutationOptions<DeleteSchoolMutation, DeleteSchoolMutationVariables>;
export const DeleteSchoolYearDocument = gql`
    mutation deleteSchoolYear($id: String!) {
  deleteOneSchoolYear(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteSchoolYearMutationFn = Apollo.MutationFunction<DeleteSchoolYearMutation, DeleteSchoolYearMutationVariables>;
export type DeleteSchoolYearComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteSchoolYearMutation, DeleteSchoolYearMutationVariables>, 'mutation'>;

    export const DeleteSchoolYearComponent = (props: DeleteSchoolYearComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteSchoolYearMutation, DeleteSchoolYearMutationVariables> mutation={DeleteSchoolYearDocument} {...props} />
    );
    
export type DeleteSchoolYearProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteSchoolYearMutation, DeleteSchoolYearMutationVariables>
    } & TChildProps;
export function withDeleteSchoolYear<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteSchoolYearMutation,
  DeleteSchoolYearMutationVariables,
  DeleteSchoolYearProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteSchoolYearMutation, DeleteSchoolYearMutationVariables, DeleteSchoolYearProps<TChildProps, TDataName>>(DeleteSchoolYearDocument, {
      alias: 'deleteSchoolYear',
      ...operationOptions
    });
};

/**
 * __useDeleteSchoolYearMutation__
 *
 * To run a mutation, you first call `useDeleteSchoolYearMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSchoolYearMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSchoolYearMutation, { data, loading, error }] = useDeleteSchoolYearMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSchoolYearMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteSchoolYearMutation, DeleteSchoolYearMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteSchoolYearMutation, DeleteSchoolYearMutationVariables>(DeleteSchoolYearDocument, options);
      }
export type DeleteSchoolYearMutationHookResult = ReturnType<typeof useDeleteSchoolYearMutation>;
export type DeleteSchoolYearMutationResult = Apollo.MutationResult<DeleteSchoolYearMutation>;
export type DeleteSchoolYearMutationOptions = Apollo.BaseMutationOptions<DeleteSchoolYearMutation, DeleteSchoolYearMutationVariables>;
export const DeleteScoreDocument = gql`
    mutation deleteScore($id: String!) {
  deleteOneScore(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteScoreMutationFn = Apollo.MutationFunction<DeleteScoreMutation, DeleteScoreMutationVariables>;
export type DeleteScoreComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteScoreMutation, DeleteScoreMutationVariables>, 'mutation'>;

    export const DeleteScoreComponent = (props: DeleteScoreComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteScoreMutation, DeleteScoreMutationVariables> mutation={DeleteScoreDocument} {...props} />
    );
    
export type DeleteScoreProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteScoreMutation, DeleteScoreMutationVariables>
    } & TChildProps;
export function withDeleteScore<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteScoreMutation,
  DeleteScoreMutationVariables,
  DeleteScoreProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteScoreMutation, DeleteScoreMutationVariables, DeleteScoreProps<TChildProps, TDataName>>(DeleteScoreDocument, {
      alias: 'deleteScore',
      ...operationOptions
    });
};

/**
 * __useDeleteScoreMutation__
 *
 * To run a mutation, you first call `useDeleteScoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteScoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteScoreMutation, { data, loading, error }] = useDeleteScoreMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteScoreMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteScoreMutation, DeleteScoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteScoreMutation, DeleteScoreMutationVariables>(DeleteScoreDocument, options);
      }
export type DeleteScoreMutationHookResult = ReturnType<typeof useDeleteScoreMutation>;
export type DeleteScoreMutationResult = Apollo.MutationResult<DeleteScoreMutation>;
export type DeleteScoreMutationOptions = Apollo.BaseMutationOptions<DeleteScoreMutation, DeleteScoreMutationVariables>;
export const DeleteSectionDocument = gql`
    mutation deleteSection($id: String!) {
  deleteOneSection(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteSectionMutationFn = Apollo.MutationFunction<DeleteSectionMutation, DeleteSectionMutationVariables>;
export type DeleteSectionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteSectionMutation, DeleteSectionMutationVariables>, 'mutation'>;

    export const DeleteSectionComponent = (props: DeleteSectionComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteSectionMutation, DeleteSectionMutationVariables> mutation={DeleteSectionDocument} {...props} />
    );
    
export type DeleteSectionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteSectionMutation, DeleteSectionMutationVariables>
    } & TChildProps;
export function withDeleteSection<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteSectionMutation,
  DeleteSectionMutationVariables,
  DeleteSectionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteSectionMutation, DeleteSectionMutationVariables, DeleteSectionProps<TChildProps, TDataName>>(DeleteSectionDocument, {
      alias: 'deleteSection',
      ...operationOptions
    });
};

/**
 * __useDeleteSectionMutation__
 *
 * To run a mutation, you first call `useDeleteSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSectionMutation, { data, loading, error }] = useDeleteSectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSectionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteSectionMutation, DeleteSectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteSectionMutation, DeleteSectionMutationVariables>(DeleteSectionDocument, options);
      }
export type DeleteSectionMutationHookResult = ReturnType<typeof useDeleteSectionMutation>;
export type DeleteSectionMutationResult = Apollo.MutationResult<DeleteSectionMutation>;
export type DeleteSectionMutationOptions = Apollo.BaseMutationOptions<DeleteSectionMutation, DeleteSectionMutationVariables>;
export const DeleteSequenceDocument = gql`
    mutation deleteSequence($id: String!) {
  deleteOneSequence(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteSequenceMutationFn = Apollo.MutationFunction<DeleteSequenceMutation, DeleteSequenceMutationVariables>;
export type DeleteSequenceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteSequenceMutation, DeleteSequenceMutationVariables>, 'mutation'>;

    export const DeleteSequenceComponent = (props: DeleteSequenceComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteSequenceMutation, DeleteSequenceMutationVariables> mutation={DeleteSequenceDocument} {...props} />
    );
    
export type DeleteSequenceProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteSequenceMutation, DeleteSequenceMutationVariables>
    } & TChildProps;
export function withDeleteSequence<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteSequenceMutation,
  DeleteSequenceMutationVariables,
  DeleteSequenceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteSequenceMutation, DeleteSequenceMutationVariables, DeleteSequenceProps<TChildProps, TDataName>>(DeleteSequenceDocument, {
      alias: 'deleteSequence',
      ...operationOptions
    });
};

/**
 * __useDeleteSequenceMutation__
 *
 * To run a mutation, you first call `useDeleteSequenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSequenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSequenceMutation, { data, loading, error }] = useDeleteSequenceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSequenceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteSequenceMutation, DeleteSequenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteSequenceMutation, DeleteSequenceMutationVariables>(DeleteSequenceDocument, options);
      }
export type DeleteSequenceMutationHookResult = ReturnType<typeof useDeleteSequenceMutation>;
export type DeleteSequenceMutationResult = Apollo.MutationResult<DeleteSequenceMutation>;
export type DeleteSequenceMutationOptions = Apollo.BaseMutationOptions<DeleteSequenceMutation, DeleteSequenceMutationVariables>;
export const DeleteStudentDocument = gql`
    mutation deleteStudent($id: String!) {
  deleteOneStudent(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteStudentMutationFn = Apollo.MutationFunction<DeleteStudentMutation, DeleteStudentMutationVariables>;
export type DeleteStudentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteStudentMutation, DeleteStudentMutationVariables>, 'mutation'>;

    export const DeleteStudentComponent = (props: DeleteStudentComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteStudentMutation, DeleteStudentMutationVariables> mutation={DeleteStudentDocument} {...props} />
    );
    
export type DeleteStudentProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteStudentMutation, DeleteStudentMutationVariables>
    } & TChildProps;
export function withDeleteStudent<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteStudentMutation,
  DeleteStudentMutationVariables,
  DeleteStudentProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteStudentMutation, DeleteStudentMutationVariables, DeleteStudentProps<TChildProps, TDataName>>(DeleteStudentDocument, {
      alias: 'deleteStudent',
      ...operationOptions
    });
};

/**
 * __useDeleteStudentMutation__
 *
 * To run a mutation, you first call `useDeleteStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStudentMutation, { data, loading, error }] = useDeleteStudentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStudentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteStudentMutation, DeleteStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteStudentMutation, DeleteStudentMutationVariables>(DeleteStudentDocument, options);
      }
export type DeleteStudentMutationHookResult = ReturnType<typeof useDeleteStudentMutation>;
export type DeleteStudentMutationResult = Apollo.MutationResult<DeleteStudentMutation>;
export type DeleteStudentMutationOptions = Apollo.BaseMutationOptions<DeleteStudentMutation, DeleteStudentMutationVariables>;
export const DeleteSubdivisionDocument = gql`
    mutation deleteSubdivision($id: String!) {
  deleteOneSubdivision(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteSubdivisionMutationFn = Apollo.MutationFunction<DeleteSubdivisionMutation, DeleteSubdivisionMutationVariables>;
export type DeleteSubdivisionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteSubdivisionMutation, DeleteSubdivisionMutationVariables>, 'mutation'>;

    export const DeleteSubdivisionComponent = (props: DeleteSubdivisionComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteSubdivisionMutation, DeleteSubdivisionMutationVariables> mutation={DeleteSubdivisionDocument} {...props} />
    );
    
export type DeleteSubdivisionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteSubdivisionMutation, DeleteSubdivisionMutationVariables>
    } & TChildProps;
export function withDeleteSubdivision<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteSubdivisionMutation,
  DeleteSubdivisionMutationVariables,
  DeleteSubdivisionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteSubdivisionMutation, DeleteSubdivisionMutationVariables, DeleteSubdivisionProps<TChildProps, TDataName>>(DeleteSubdivisionDocument, {
      alias: 'deleteSubdivision',
      ...operationOptions
    });
};

/**
 * __useDeleteSubdivisionMutation__
 *
 * To run a mutation, you first call `useDeleteSubdivisionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubdivisionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubdivisionMutation, { data, loading, error }] = useDeleteSubdivisionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSubdivisionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteSubdivisionMutation, DeleteSubdivisionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteSubdivisionMutation, DeleteSubdivisionMutationVariables>(DeleteSubdivisionDocument, options);
      }
export type DeleteSubdivisionMutationHookResult = ReturnType<typeof useDeleteSubdivisionMutation>;
export type DeleteSubdivisionMutationResult = Apollo.MutationResult<DeleteSubdivisionMutation>;
export type DeleteSubdivisionMutationOptions = Apollo.BaseMutationOptions<DeleteSubdivisionMutation, DeleteSubdivisionMutationVariables>;
export const DeleteSubjectDocument = gql`
    mutation deleteSubject($id: String!) {
  deleteOneSubject(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteSubjectMutationFn = Apollo.MutationFunction<DeleteSubjectMutation, DeleteSubjectMutationVariables>;
export type DeleteSubjectComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteSubjectMutation, DeleteSubjectMutationVariables>, 'mutation'>;

    export const DeleteSubjectComponent = (props: DeleteSubjectComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteSubjectMutation, DeleteSubjectMutationVariables> mutation={DeleteSubjectDocument} {...props} />
    );
    
export type DeleteSubjectProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteSubjectMutation, DeleteSubjectMutationVariables>
    } & TChildProps;
export function withDeleteSubject<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteSubjectMutation,
  DeleteSubjectMutationVariables,
  DeleteSubjectProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteSubjectMutation, DeleteSubjectMutationVariables, DeleteSubjectProps<TChildProps, TDataName>>(DeleteSubjectDocument, {
      alias: 'deleteSubject',
      ...operationOptions
    });
};

/**
 * __useDeleteSubjectMutation__
 *
 * To run a mutation, you first call `useDeleteSubjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubjectMutation, { data, loading, error }] = useDeleteSubjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSubjectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteSubjectMutation, DeleteSubjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteSubjectMutation, DeleteSubjectMutationVariables>(DeleteSubjectDocument, options);
      }
export type DeleteSubjectMutationHookResult = ReturnType<typeof useDeleteSubjectMutation>;
export type DeleteSubjectMutationResult = Apollo.MutationResult<DeleteSubjectMutation>;
export type DeleteSubjectMutationOptions = Apollo.BaseMutationOptions<DeleteSubjectMutation, DeleteSubjectMutationVariables>;
export const DeleteTermDocument = gql`
    mutation deleteTerm($id: String!) {
  deleteOneTerm(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteTermMutationFn = Apollo.MutationFunction<DeleteTermMutation, DeleteTermMutationVariables>;
export type DeleteTermComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteTermMutation, DeleteTermMutationVariables>, 'mutation'>;

    export const DeleteTermComponent = (props: DeleteTermComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteTermMutation, DeleteTermMutationVariables> mutation={DeleteTermDocument} {...props} />
    );
    
export type DeleteTermProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteTermMutation, DeleteTermMutationVariables>
    } & TChildProps;
export function withDeleteTerm<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTermMutation,
  DeleteTermMutationVariables,
  DeleteTermProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTermMutation, DeleteTermMutationVariables, DeleteTermProps<TChildProps, TDataName>>(DeleteTermDocument, {
      alias: 'deleteTerm',
      ...operationOptions
    });
};

/**
 * __useDeleteTermMutation__
 *
 * To run a mutation, you first call `useDeleteTermMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTermMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTermMutation, { data, loading, error }] = useDeleteTermMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTermMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTermMutation, DeleteTermMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteTermMutation, DeleteTermMutationVariables>(DeleteTermDocument, options);
      }
export type DeleteTermMutationHookResult = ReturnType<typeof useDeleteTermMutation>;
export type DeleteTermMutationResult = Apollo.MutationResult<DeleteTermMutation>;
export type DeleteTermMutationOptions = Apollo.BaseMutationOptions<DeleteTermMutation, DeleteTermMutationVariables>;
export const DeleteTownDocument = gql`
    mutation deleteTown($id: String!) {
  deleteOneTown(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteTownMutationFn = Apollo.MutationFunction<DeleteTownMutation, DeleteTownMutationVariables>;
export type DeleteTownComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteTownMutation, DeleteTownMutationVariables>, 'mutation'>;

    export const DeleteTownComponent = (props: DeleteTownComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteTownMutation, DeleteTownMutationVariables> mutation={DeleteTownDocument} {...props} />
    );
    
export type DeleteTownProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteTownMutation, DeleteTownMutationVariables>
    } & TChildProps;
export function withDeleteTown<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTownMutation,
  DeleteTownMutationVariables,
  DeleteTownProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTownMutation, DeleteTownMutationVariables, DeleteTownProps<TChildProps, TDataName>>(DeleteTownDocument, {
      alias: 'deleteTown',
      ...operationOptions
    });
};

/**
 * __useDeleteTownMutation__
 *
 * To run a mutation, you first call `useDeleteTownMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTownMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTownMutation, { data, loading, error }] = useDeleteTownMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTownMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTownMutation, DeleteTownMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteTownMutation, DeleteTownMutationVariables>(DeleteTownDocument, options);
      }
export type DeleteTownMutationHookResult = ReturnType<typeof useDeleteTownMutation>;
export type DeleteTownMutationResult = Apollo.MutationResult<DeleteTownMutation>;
export type DeleteTownMutationOptions = Apollo.BaseMutationOptions<DeleteTownMutation, DeleteTownMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($id: String!) {
  deleteOneUser(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;
export type DeleteUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteUserMutation, DeleteUserMutationVariables>, 'mutation'>;

    export const DeleteUserComponent = (props: DeleteUserComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteUserMutation, DeleteUserMutationVariables> mutation={DeleteUserDocument} {...props} />
    );
    
export type DeleteUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>
    } & TChildProps;
export function withDeleteUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteUserMutation,
  DeleteUserMutationVariables,
  DeleteUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteUserMutation, DeleteUserMutationVariables, DeleteUserProps<TChildProps, TDataName>>(DeleteUserDocument, {
      alias: 'deleteUser',
      ...operationOptions
    });
};

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const AllAnnProfDeptsDocument = gql`
    query AllAnnProfDepts {
  annProfDepts {
    ...AnnProfDeptFragment
  }
}
    ${AnnProfDeptFragmentFragmentDoc}`;
export type AllAnnProfDeptsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllAnnProfDeptsQuery, AllAnnProfDeptsQueryVariables>, 'query'>;

    export const AllAnnProfDeptsComponent = (props: AllAnnProfDeptsComponentProps) => (
      <ApolloReactComponents.Query<AllAnnProfDeptsQuery, AllAnnProfDeptsQueryVariables> query={AllAnnProfDeptsDocument} {...props} />
    );
    
export type AllAnnProfDeptsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllAnnProfDeptsQuery, AllAnnProfDeptsQueryVariables>
    } & TChildProps;
export function withAllAnnProfDepts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllAnnProfDeptsQuery,
  AllAnnProfDeptsQueryVariables,
  AllAnnProfDeptsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllAnnProfDeptsQuery, AllAnnProfDeptsQueryVariables, AllAnnProfDeptsProps<TChildProps, TDataName>>(AllAnnProfDeptsDocument, {
      alias: 'allAnnProfDepts',
      ...operationOptions
    });
};

/**
 * __useAllAnnProfDeptsQuery__
 *
 * To run a query within a React component, call `useAllAnnProfDeptsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAnnProfDeptsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAnnProfDeptsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAnnProfDeptsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllAnnProfDeptsQuery, AllAnnProfDeptsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllAnnProfDeptsQuery, AllAnnProfDeptsQueryVariables>(AllAnnProfDeptsDocument, options);
      }
export function useAllAnnProfDeptsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllAnnProfDeptsQuery, AllAnnProfDeptsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllAnnProfDeptsQuery, AllAnnProfDeptsQueryVariables>(AllAnnProfDeptsDocument, options);
        }
export type AllAnnProfDeptsQueryHookResult = ReturnType<typeof useAllAnnProfDeptsQuery>;
export type AllAnnProfDeptsLazyQueryHookResult = ReturnType<typeof useAllAnnProfDeptsLazyQuery>;
export type AllAnnProfDeptsQueryResult = Apollo.QueryResult<AllAnnProfDeptsQuery, AllAnnProfDeptsQueryVariables>;
export const AllAnnProfSubjDistrosDocument = gql`
    query AllAnnProfSubjDistros {
  annProfSubjDistros {
    ...AnnProfSubjDistroFragment
  }
}
    ${AnnProfSubjDistroFragmentFragmentDoc}`;
export type AllAnnProfSubjDistrosComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllAnnProfSubjDistrosQuery, AllAnnProfSubjDistrosQueryVariables>, 'query'>;

    export const AllAnnProfSubjDistrosComponent = (props: AllAnnProfSubjDistrosComponentProps) => (
      <ApolloReactComponents.Query<AllAnnProfSubjDistrosQuery, AllAnnProfSubjDistrosQueryVariables> query={AllAnnProfSubjDistrosDocument} {...props} />
    );
    
export type AllAnnProfSubjDistrosProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllAnnProfSubjDistrosQuery, AllAnnProfSubjDistrosQueryVariables>
    } & TChildProps;
export function withAllAnnProfSubjDistros<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllAnnProfSubjDistrosQuery,
  AllAnnProfSubjDistrosQueryVariables,
  AllAnnProfSubjDistrosProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllAnnProfSubjDistrosQuery, AllAnnProfSubjDistrosQueryVariables, AllAnnProfSubjDistrosProps<TChildProps, TDataName>>(AllAnnProfSubjDistrosDocument, {
      alias: 'allAnnProfSubjDistros',
      ...operationOptions
    });
};

/**
 * __useAllAnnProfSubjDistrosQuery__
 *
 * To run a query within a React component, call `useAllAnnProfSubjDistrosQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAnnProfSubjDistrosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAnnProfSubjDistrosQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAnnProfSubjDistrosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllAnnProfSubjDistrosQuery, AllAnnProfSubjDistrosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllAnnProfSubjDistrosQuery, AllAnnProfSubjDistrosQueryVariables>(AllAnnProfSubjDistrosDocument, options);
      }
export function useAllAnnProfSubjDistrosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllAnnProfSubjDistrosQuery, AllAnnProfSubjDistrosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllAnnProfSubjDistrosQuery, AllAnnProfSubjDistrosQueryVariables>(AllAnnProfSubjDistrosDocument, options);
        }
export type AllAnnProfSubjDistrosQueryHookResult = ReturnType<typeof useAllAnnProfSubjDistrosQuery>;
export type AllAnnProfSubjDistrosLazyQueryHookResult = ReturnType<typeof useAllAnnProfSubjDistrosLazyQuery>;
export type AllAnnProfSubjDistrosQueryResult = Apollo.QueryResult<AllAnnProfSubjDistrosQuery, AllAnnProfSubjDistrosQueryVariables>;
export const AllAnnStudentClassroomDocument = gql`
    query AllAnnStudentClassroom {
  annStudentClassroom {
    ...AnnStudentClassroomFragment
  }
}
    ${AnnStudentClassroomFragmentFragmentDoc}`;
export type AllAnnStudentClassroomComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllAnnStudentClassroomQuery, AllAnnStudentClassroomQueryVariables>, 'query'>;

    export const AllAnnStudentClassroomComponent = (props: AllAnnStudentClassroomComponentProps) => (
      <ApolloReactComponents.Query<AllAnnStudentClassroomQuery, AllAnnStudentClassroomQueryVariables> query={AllAnnStudentClassroomDocument} {...props} />
    );
    
export type AllAnnStudentClassroomProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllAnnStudentClassroomQuery, AllAnnStudentClassroomQueryVariables>
    } & TChildProps;
export function withAllAnnStudentClassroom<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllAnnStudentClassroomQuery,
  AllAnnStudentClassroomQueryVariables,
  AllAnnStudentClassroomProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllAnnStudentClassroomQuery, AllAnnStudentClassroomQueryVariables, AllAnnStudentClassroomProps<TChildProps, TDataName>>(AllAnnStudentClassroomDocument, {
      alias: 'allAnnStudentClassroom',
      ...operationOptions
    });
};

/**
 * __useAllAnnStudentClassroomQuery__
 *
 * To run a query within a React component, call `useAllAnnStudentClassroomQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAnnStudentClassroomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAnnStudentClassroomQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAnnStudentClassroomQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllAnnStudentClassroomQuery, AllAnnStudentClassroomQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllAnnStudentClassroomQuery, AllAnnStudentClassroomQueryVariables>(AllAnnStudentClassroomDocument, options);
      }
export function useAllAnnStudentClassroomLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllAnnStudentClassroomQuery, AllAnnStudentClassroomQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllAnnStudentClassroomQuery, AllAnnStudentClassroomQueryVariables>(AllAnnStudentClassroomDocument, options);
        }
export type AllAnnStudentClassroomQueryHookResult = ReturnType<typeof useAllAnnStudentClassroomQuery>;
export type AllAnnStudentClassroomLazyQueryHookResult = ReturnType<typeof useAllAnnStudentClassroomLazyQuery>;
export type AllAnnStudentClassroomQueryResult = Apollo.QueryResult<AllAnnStudentClassroomQuery, AllAnnStudentClassroomQueryVariables>;
export const AllClassroomsDocument = gql`
    query AllClassrooms {
  classrooms {
    ...ClassroomFragment
  }
}
    ${ClassroomFragmentFragmentDoc}`;
export type AllClassroomsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllClassroomsQuery, AllClassroomsQueryVariables>, 'query'>;

    export const AllClassroomsComponent = (props: AllClassroomsComponentProps) => (
      <ApolloReactComponents.Query<AllClassroomsQuery, AllClassroomsQueryVariables> query={AllClassroomsDocument} {...props} />
    );
    
export type AllClassroomsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllClassroomsQuery, AllClassroomsQueryVariables>
    } & TChildProps;
export function withAllClassrooms<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllClassroomsQuery,
  AllClassroomsQueryVariables,
  AllClassroomsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllClassroomsQuery, AllClassroomsQueryVariables, AllClassroomsProps<TChildProps, TDataName>>(AllClassroomsDocument, {
      alias: 'allClassrooms',
      ...operationOptions
    });
};

/**
 * __useAllClassroomsQuery__
 *
 * To run a query within a React component, call `useAllClassroomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllClassroomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllClassroomsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllClassroomsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllClassroomsQuery, AllClassroomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllClassroomsQuery, AllClassroomsQueryVariables>(AllClassroomsDocument, options);
      }
export function useAllClassroomsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllClassroomsQuery, AllClassroomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllClassroomsQuery, AllClassroomsQueryVariables>(AllClassroomsDocument, options);
        }
export type AllClassroomsQueryHookResult = ReturnType<typeof useAllClassroomsQuery>;
export type AllClassroomsLazyQueryHookResult = ReturnType<typeof useAllClassroomsLazyQuery>;
export type AllClassroomsQueryResult = Apollo.QueryResult<AllClassroomsQuery, AllClassroomsQueryVariables>;
export const AllDepartmentsDocument = gql`
    query AllDepartments {
  departments {
    ...DepartmentFragment
  }
}
    ${DepartmentFragmentFragmentDoc}`;
export type AllDepartmentsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllDepartmentsQuery, AllDepartmentsQueryVariables>, 'query'>;

    export const AllDepartmentsComponent = (props: AllDepartmentsComponentProps) => (
      <ApolloReactComponents.Query<AllDepartmentsQuery, AllDepartmentsQueryVariables> query={AllDepartmentsDocument} {...props} />
    );
    
export type AllDepartmentsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllDepartmentsQuery, AllDepartmentsQueryVariables>
    } & TChildProps;
export function withAllDepartments<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllDepartmentsQuery,
  AllDepartmentsQueryVariables,
  AllDepartmentsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllDepartmentsQuery, AllDepartmentsQueryVariables, AllDepartmentsProps<TChildProps, TDataName>>(AllDepartmentsDocument, {
      alias: 'allDepartments',
      ...operationOptions
    });
};

/**
 * __useAllDepartmentsQuery__
 *
 * To run a query within a React component, call `useAllDepartmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllDepartmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllDepartmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllDepartmentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllDepartmentsQuery, AllDepartmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllDepartmentsQuery, AllDepartmentsQueryVariables>(AllDepartmentsDocument, options);
      }
export function useAllDepartmentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllDepartmentsQuery, AllDepartmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllDepartmentsQuery, AllDepartmentsQueryVariables>(AllDepartmentsDocument, options);
        }
export type AllDepartmentsQueryHookResult = ReturnType<typeof useAllDepartmentsQuery>;
export type AllDepartmentsLazyQueryHookResult = ReturnType<typeof useAllDepartmentsLazyQuery>;
export type AllDepartmentsQueryResult = Apollo.QueryResult<AllDepartmentsQuery, AllDepartmentsQueryVariables>;
export const AllDivisionsDocument = gql`
    query AllDivisions {
  divisions {
    ...DivisionFragment
  }
}
    ${DivisionFragmentFragmentDoc}`;
export type AllDivisionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllDivisionsQuery, AllDivisionsQueryVariables>, 'query'>;

    export const AllDivisionsComponent = (props: AllDivisionsComponentProps) => (
      <ApolloReactComponents.Query<AllDivisionsQuery, AllDivisionsQueryVariables> query={AllDivisionsDocument} {...props} />
    );
    
export type AllDivisionsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllDivisionsQuery, AllDivisionsQueryVariables>
    } & TChildProps;
export function withAllDivisions<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllDivisionsQuery,
  AllDivisionsQueryVariables,
  AllDivisionsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllDivisionsQuery, AllDivisionsQueryVariables, AllDivisionsProps<TChildProps, TDataName>>(AllDivisionsDocument, {
      alias: 'allDivisions',
      ...operationOptions
    });
};

/**
 * __useAllDivisionsQuery__
 *
 * To run a query within a React component, call `useAllDivisionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllDivisionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllDivisionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllDivisionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllDivisionsQuery, AllDivisionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllDivisionsQuery, AllDivisionsQueryVariables>(AllDivisionsDocument, options);
      }
export function useAllDivisionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllDivisionsQuery, AllDivisionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllDivisionsQuery, AllDivisionsQueryVariables>(AllDivisionsDocument, options);
        }
export type AllDivisionsQueryHookResult = ReturnType<typeof useAllDivisionsQuery>;
export type AllDivisionsLazyQueryHookResult = ReturnType<typeof useAllDivisionsLazyQuery>;
export type AllDivisionsQueryResult = Apollo.QueryResult<AllDivisionsQuery, AllDivisionsQueryVariables>;
export const SingleDivisionDocument = gql`
    query SingleDivision($id: String!) {
  division(id: $id) {
    ...DivisionFragment
    subdivisions {
      ...SubdivisionFragment
    }
  }
}
    ${DivisionFragmentFragmentDoc}
${SubdivisionFragmentFragmentDoc}`;
export type SingleDivisionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleDivisionQuery, SingleDivisionQueryVariables>, 'query'> & ({ variables: SingleDivisionQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleDivisionComponent = (props: SingleDivisionComponentProps) => (
      <ApolloReactComponents.Query<SingleDivisionQuery, SingleDivisionQueryVariables> query={SingleDivisionDocument} {...props} />
    );
    
export type SingleDivisionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleDivisionQuery, SingleDivisionQueryVariables>
    } & TChildProps;
export function withSingleDivision<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleDivisionQuery,
  SingleDivisionQueryVariables,
  SingleDivisionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleDivisionQuery, SingleDivisionQueryVariables, SingleDivisionProps<TChildProps, TDataName>>(SingleDivisionDocument, {
      alias: 'singleDivision',
      ...operationOptions
    });
};

/**
 * __useSingleDivisionQuery__
 *
 * To run a query within a React component, call `useSingleDivisionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleDivisionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleDivisionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleDivisionQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleDivisionQuery, SingleDivisionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleDivisionQuery, SingleDivisionQueryVariables>(SingleDivisionDocument, options);
      }
export function useSingleDivisionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleDivisionQuery, SingleDivisionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleDivisionQuery, SingleDivisionQueryVariables>(SingleDivisionDocument, options);
        }
export type SingleDivisionQueryHookResult = ReturnType<typeof useSingleDivisionQuery>;
export type SingleDivisionLazyQueryHookResult = ReturnType<typeof useSingleDivisionLazyQuery>;
export type SingleDivisionQueryResult = Apollo.QueryResult<SingleDivisionQuery, SingleDivisionQueryVariables>;
export const LogbooksDocument = gql`
    query Logbooks {
  logbooks {
    ...LogbookFragment
  }
}
    ${LogbookFragmentFragmentDoc}`;
export type LogbooksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LogbooksQuery, LogbooksQueryVariables>, 'query'>;

    export const LogbooksComponent = (props: LogbooksComponentProps) => (
      <ApolloReactComponents.Query<LogbooksQuery, LogbooksQueryVariables> query={LogbooksDocument} {...props} />
    );
    
export type LogbooksProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<LogbooksQuery, LogbooksQueryVariables>
    } & TChildProps;
export function withLogbooks<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LogbooksQuery,
  LogbooksQueryVariables,
  LogbooksProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, LogbooksQuery, LogbooksQueryVariables, LogbooksProps<TChildProps, TDataName>>(LogbooksDocument, {
      alias: 'logbooks',
      ...operationOptions
    });
};

/**
 * __useLogbooksQuery__
 *
 * To run a query within a React component, call `useLogbooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogbooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogbooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogbooksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LogbooksQuery, LogbooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<LogbooksQuery, LogbooksQueryVariables>(LogbooksDocument, options);
      }
export function useLogbooksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LogbooksQuery, LogbooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<LogbooksQuery, LogbooksQueryVariables>(LogbooksDocument, options);
        }
export type LogbooksQueryHookResult = ReturnType<typeof useLogbooksQuery>;
export type LogbooksLazyQueryHookResult = ReturnType<typeof useLogbooksLazyQuery>;
export type LogbooksQueryResult = Apollo.QueryResult<LogbooksQuery, LogbooksQueryVariables>;
export const AllProfsDocument = gql`
    query AllProfs {
  profs {
    ...ProfFragment
  }
}
    ${ProfFragmentFragmentDoc}`;
export type AllProfsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllProfsQuery, AllProfsQueryVariables>, 'query'>;

    export const AllProfsComponent = (props: AllProfsComponentProps) => (
      <ApolloReactComponents.Query<AllProfsQuery, AllProfsQueryVariables> query={AllProfsDocument} {...props} />
    );
    
export type AllProfsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllProfsQuery, AllProfsQueryVariables>
    } & TChildProps;
export function withAllProfs<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllProfsQuery,
  AllProfsQueryVariables,
  AllProfsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllProfsQuery, AllProfsQueryVariables, AllProfsProps<TChildProps, TDataName>>(AllProfsDocument, {
      alias: 'allProfs',
      ...operationOptions
    });
};

/**
 * __useAllProfsQuery__
 *
 * To run a query within a React component, call `useAllProfsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProfsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProfsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProfsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllProfsQuery, AllProfsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllProfsQuery, AllProfsQueryVariables>(AllProfsDocument, options);
      }
export function useAllProfsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllProfsQuery, AllProfsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllProfsQuery, AllProfsQueryVariables>(AllProfsDocument, options);
        }
export type AllProfsQueryHookResult = ReturnType<typeof useAllProfsQuery>;
export type AllProfsLazyQueryHookResult = ReturnType<typeof useAllProfsLazyQuery>;
export type AllProfsQueryResult = Apollo.QueryResult<AllProfsQuery, AllProfsQueryVariables>;
export const SingleProfByMatriculeDocument = gql`
    query SingleProfByMatricule($profMatricule: String!) {
  profByMatricule(profMatricule: $profMatricule) {
    ...ProfFragment
  }
}
    ${ProfFragmentFragmentDoc}`;
export type SingleProfByMatriculeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleProfByMatriculeQuery, SingleProfByMatriculeQueryVariables>, 'query'> & ({ variables: SingleProfByMatriculeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleProfByMatriculeComponent = (props: SingleProfByMatriculeComponentProps) => (
      <ApolloReactComponents.Query<SingleProfByMatriculeQuery, SingleProfByMatriculeQueryVariables> query={SingleProfByMatriculeDocument} {...props} />
    );
    
export type SingleProfByMatriculeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleProfByMatriculeQuery, SingleProfByMatriculeQueryVariables>
    } & TChildProps;
export function withSingleProfByMatricule<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleProfByMatriculeQuery,
  SingleProfByMatriculeQueryVariables,
  SingleProfByMatriculeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleProfByMatriculeQuery, SingleProfByMatriculeQueryVariables, SingleProfByMatriculeProps<TChildProps, TDataName>>(SingleProfByMatriculeDocument, {
      alias: 'singleProfByMatricule',
      ...operationOptions
    });
};

/**
 * __useSingleProfByMatriculeQuery__
 *
 * To run a query within a React component, call `useSingleProfByMatriculeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleProfByMatriculeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleProfByMatriculeQuery({
 *   variables: {
 *      profMatricule: // value for 'profMatricule'
 *   },
 * });
 */
export function useSingleProfByMatriculeQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleProfByMatriculeQuery, SingleProfByMatriculeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleProfByMatriculeQuery, SingleProfByMatriculeQueryVariables>(SingleProfByMatriculeDocument, options);
      }
export function useSingleProfByMatriculeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleProfByMatriculeQuery, SingleProfByMatriculeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleProfByMatriculeQuery, SingleProfByMatriculeQueryVariables>(SingleProfByMatriculeDocument, options);
        }
export type SingleProfByMatriculeQueryHookResult = ReturnType<typeof useSingleProfByMatriculeQuery>;
export type SingleProfByMatriculeLazyQueryHookResult = ReturnType<typeof useSingleProfByMatriculeLazyQuery>;
export type SingleProfByMatriculeQueryResult = Apollo.QueryResult<SingleProfByMatriculeQuery, SingleProfByMatriculeQueryVariables>;
export const AllRegionsDocument = gql`
    query AllRegions {
  regions {
    ...RegionFragment
  }
}
    ${RegionFragmentFragmentDoc}`;
export type AllRegionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllRegionsQuery, AllRegionsQueryVariables>, 'query'>;

    export const AllRegionsComponent = (props: AllRegionsComponentProps) => (
      <ApolloReactComponents.Query<AllRegionsQuery, AllRegionsQueryVariables> query={AllRegionsDocument} {...props} />
    );
    
export type AllRegionsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllRegionsQuery, AllRegionsQueryVariables>
    } & TChildProps;
export function withAllRegions<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllRegionsQuery,
  AllRegionsQueryVariables,
  AllRegionsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllRegionsQuery, AllRegionsQueryVariables, AllRegionsProps<TChildProps, TDataName>>(AllRegionsDocument, {
      alias: 'allRegions',
      ...operationOptions
    });
};

/**
 * __useAllRegionsQuery__
 *
 * To run a query within a React component, call `useAllRegionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllRegionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllRegionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllRegionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllRegionsQuery, AllRegionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllRegionsQuery, AllRegionsQueryVariables>(AllRegionsDocument, options);
      }
export function useAllRegionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllRegionsQuery, AllRegionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllRegionsQuery, AllRegionsQueryVariables>(AllRegionsDocument, options);
        }
export type AllRegionsQueryHookResult = ReturnType<typeof useAllRegionsQuery>;
export type AllRegionsLazyQueryHookResult = ReturnType<typeof useAllRegionsLazyQuery>;
export type AllRegionsQueryResult = Apollo.QueryResult<AllRegionsQuery, AllRegionsQueryVariables>;
export const SingleRegionDocument = gql`
    query SingleRegion($id: String!) {
  region(id: $id) {
    ...DivisionsOfARegionFrag
  }
}
    ${DivisionsOfARegionFragFragmentDoc}`;
export type SingleRegionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleRegionQuery, SingleRegionQueryVariables>, 'query'> & ({ variables: SingleRegionQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleRegionComponent = (props: SingleRegionComponentProps) => (
      <ApolloReactComponents.Query<SingleRegionQuery, SingleRegionQueryVariables> query={SingleRegionDocument} {...props} />
    );
    
export type SingleRegionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleRegionQuery, SingleRegionQueryVariables>
    } & TChildProps;
export function withSingleRegion<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleRegionQuery,
  SingleRegionQueryVariables,
  SingleRegionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleRegionQuery, SingleRegionQueryVariables, SingleRegionProps<TChildProps, TDataName>>(SingleRegionDocument, {
      alias: 'singleRegion',
      ...operationOptions
    });
};

/**
 * __useSingleRegionQuery__
 *
 * To run a query within a React component, call `useSingleRegionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleRegionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleRegionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleRegionQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleRegionQuery, SingleRegionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleRegionQuery, SingleRegionQueryVariables>(SingleRegionDocument, options);
      }
export function useSingleRegionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleRegionQuery, SingleRegionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleRegionQuery, SingleRegionQueryVariables>(SingleRegionDocument, options);
        }
export type SingleRegionQueryHookResult = ReturnType<typeof useSingleRegionQuery>;
export type SingleRegionLazyQueryHookResult = ReturnType<typeof useSingleRegionLazyQuery>;
export type SingleRegionQueryResult = Apollo.QueryResult<SingleRegionQuery, SingleRegionQueryVariables>;
export const AllSchoolsDocument = gql`
    query AllSchools {
  schools {
    ...SchoolFragment
  }
}
    ${SchoolFragmentFragmentDoc}`;
export type AllSchoolsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllSchoolsQuery, AllSchoolsQueryVariables>, 'query'>;

    export const AllSchoolsComponent = (props: AllSchoolsComponentProps) => (
      <ApolloReactComponents.Query<AllSchoolsQuery, AllSchoolsQueryVariables> query={AllSchoolsDocument} {...props} />
    );
    
export type AllSchoolsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllSchoolsQuery, AllSchoolsQueryVariables>
    } & TChildProps;
export function withAllSchools<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllSchoolsQuery,
  AllSchoolsQueryVariables,
  AllSchoolsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllSchoolsQuery, AllSchoolsQueryVariables, AllSchoolsProps<TChildProps, TDataName>>(AllSchoolsDocument, {
      alias: 'allSchools',
      ...operationOptions
    });
};

/**
 * __useAllSchoolsQuery__
 *
 * To run a query within a React component, call `useAllSchoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSchoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSchoolsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSchoolsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllSchoolsQuery, AllSchoolsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllSchoolsQuery, AllSchoolsQueryVariables>(AllSchoolsDocument, options);
      }
export function useAllSchoolsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllSchoolsQuery, AllSchoolsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllSchoolsQuery, AllSchoolsQueryVariables>(AllSchoolsDocument, options);
        }
export type AllSchoolsQueryHookResult = ReturnType<typeof useAllSchoolsQuery>;
export type AllSchoolsLazyQueryHookResult = ReturnType<typeof useAllSchoolsLazyQuery>;
export type AllSchoolsQueryResult = Apollo.QueryResult<AllSchoolsQuery, AllSchoolsQueryVariables>;
export const SingleSchoolDocument = gql`
    query SingleSchool($id: String!) {
  schoolByID(id: $id) {
    ...SchoolFragment
    sections {
      ...SectionFragment
    }
  }
}
    ${SchoolFragmentFragmentDoc}
${SectionFragmentFragmentDoc}`;
export type SingleSchoolComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleSchoolQuery, SingleSchoolQueryVariables>, 'query'> & ({ variables: SingleSchoolQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleSchoolComponent = (props: SingleSchoolComponentProps) => (
      <ApolloReactComponents.Query<SingleSchoolQuery, SingleSchoolQueryVariables> query={SingleSchoolDocument} {...props} />
    );
    
export type SingleSchoolProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleSchoolQuery, SingleSchoolQueryVariables>
    } & TChildProps;
export function withSingleSchool<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleSchoolQuery,
  SingleSchoolQueryVariables,
  SingleSchoolProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleSchoolQuery, SingleSchoolQueryVariables, SingleSchoolProps<TChildProps, TDataName>>(SingleSchoolDocument, {
      alias: 'singleSchool',
      ...operationOptions
    });
};

/**
 * __useSingleSchoolQuery__
 *
 * To run a query within a React component, call `useSingleSchoolQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleSchoolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleSchoolQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleSchoolQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleSchoolQuery, SingleSchoolQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleSchoolQuery, SingleSchoolQueryVariables>(SingleSchoolDocument, options);
      }
export function useSingleSchoolLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleSchoolQuery, SingleSchoolQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleSchoolQuery, SingleSchoolQueryVariables>(SingleSchoolDocument, options);
        }
export type SingleSchoolQueryHookResult = ReturnType<typeof useSingleSchoolQuery>;
export type SingleSchoolLazyQueryHookResult = ReturnType<typeof useSingleSchoolLazyQuery>;
export type SingleSchoolQueryResult = Apollo.QueryResult<SingleSchoolQuery, SingleSchoolQueryVariables>;
export const SingleSchoolBySecretCodeDocument = gql`
    query SingleSchoolBySecretCode($schoolSecretCode: String!) {
  schoolBySecretCode(schoolSecretCode: $schoolSecretCode) {
    ...SchoolFragment
    sections {
      ...SectionFragment
    }
  }
}
    ${SchoolFragmentFragmentDoc}
${SectionFragmentFragmentDoc}`;
export type SingleSchoolBySecretCodeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleSchoolBySecretCodeQuery, SingleSchoolBySecretCodeQueryVariables>, 'query'> & ({ variables: SingleSchoolBySecretCodeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleSchoolBySecretCodeComponent = (props: SingleSchoolBySecretCodeComponentProps) => (
      <ApolloReactComponents.Query<SingleSchoolBySecretCodeQuery, SingleSchoolBySecretCodeQueryVariables> query={SingleSchoolBySecretCodeDocument} {...props} />
    );
    
export type SingleSchoolBySecretCodeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleSchoolBySecretCodeQuery, SingleSchoolBySecretCodeQueryVariables>
    } & TChildProps;
export function withSingleSchoolBySecretCode<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleSchoolBySecretCodeQuery,
  SingleSchoolBySecretCodeQueryVariables,
  SingleSchoolBySecretCodeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleSchoolBySecretCodeQuery, SingleSchoolBySecretCodeQueryVariables, SingleSchoolBySecretCodeProps<TChildProps, TDataName>>(SingleSchoolBySecretCodeDocument, {
      alias: 'singleSchoolBySecretCode',
      ...operationOptions
    });
};

/**
 * __useSingleSchoolBySecretCodeQuery__
 *
 * To run a query within a React component, call `useSingleSchoolBySecretCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleSchoolBySecretCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleSchoolBySecretCodeQuery({
 *   variables: {
 *      schoolSecretCode: // value for 'schoolSecretCode'
 *   },
 * });
 */
export function useSingleSchoolBySecretCodeQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleSchoolBySecretCodeQuery, SingleSchoolBySecretCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleSchoolBySecretCodeQuery, SingleSchoolBySecretCodeQueryVariables>(SingleSchoolBySecretCodeDocument, options);
      }
export function useSingleSchoolBySecretCodeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleSchoolBySecretCodeQuery, SingleSchoolBySecretCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleSchoolBySecretCodeQuery, SingleSchoolBySecretCodeQueryVariables>(SingleSchoolBySecretCodeDocument, options);
        }
export type SingleSchoolBySecretCodeQueryHookResult = ReturnType<typeof useSingleSchoolBySecretCodeQuery>;
export type SingleSchoolBySecretCodeLazyQueryHookResult = ReturnType<typeof useSingleSchoolBySecretCodeLazyQuery>;
export type SingleSchoolBySecretCodeQueryResult = Apollo.QueryResult<SingleSchoolBySecretCodeQuery, SingleSchoolBySecretCodeQueryVariables>;
export const SingleSchoolByPublicCodeDocument = gql`
    query SingleSchoolByPublicCode($schoolPublicCode: String!) {
  schoolByPublicCode(schoolPublicCode: $schoolPublicCode) {
    ...SchoolFragment
    sections {
      ...SectionFragment
    }
  }
}
    ${SchoolFragmentFragmentDoc}
${SectionFragmentFragmentDoc}`;
export type SingleSchoolByPublicCodeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleSchoolByPublicCodeQuery, SingleSchoolByPublicCodeQueryVariables>, 'query'> & ({ variables: SingleSchoolByPublicCodeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleSchoolByPublicCodeComponent = (props: SingleSchoolByPublicCodeComponentProps) => (
      <ApolloReactComponents.Query<SingleSchoolByPublicCodeQuery, SingleSchoolByPublicCodeQueryVariables> query={SingleSchoolByPublicCodeDocument} {...props} />
    );
    
export type SingleSchoolByPublicCodeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleSchoolByPublicCodeQuery, SingleSchoolByPublicCodeQueryVariables>
    } & TChildProps;
export function withSingleSchoolByPublicCode<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleSchoolByPublicCodeQuery,
  SingleSchoolByPublicCodeQueryVariables,
  SingleSchoolByPublicCodeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleSchoolByPublicCodeQuery, SingleSchoolByPublicCodeQueryVariables, SingleSchoolByPublicCodeProps<TChildProps, TDataName>>(SingleSchoolByPublicCodeDocument, {
      alias: 'singleSchoolByPublicCode',
      ...operationOptions
    });
};

/**
 * __useSingleSchoolByPublicCodeQuery__
 *
 * To run a query within a React component, call `useSingleSchoolByPublicCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleSchoolByPublicCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleSchoolByPublicCodeQuery({
 *   variables: {
 *      schoolPublicCode: // value for 'schoolPublicCode'
 *   },
 * });
 */
export function useSingleSchoolByPublicCodeQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleSchoolByPublicCodeQuery, SingleSchoolByPublicCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleSchoolByPublicCodeQuery, SingleSchoolByPublicCodeQueryVariables>(SingleSchoolByPublicCodeDocument, options);
      }
export function useSingleSchoolByPublicCodeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleSchoolByPublicCodeQuery, SingleSchoolByPublicCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleSchoolByPublicCodeQuery, SingleSchoolByPublicCodeQueryVariables>(SingleSchoolByPublicCodeDocument, options);
        }
export type SingleSchoolByPublicCodeQueryHookResult = ReturnType<typeof useSingleSchoolByPublicCodeQuery>;
export type SingleSchoolByPublicCodeLazyQueryHookResult = ReturnType<typeof useSingleSchoolByPublicCodeLazyQuery>;
export type SingleSchoolByPublicCodeQueryResult = Apollo.QueryResult<SingleSchoolByPublicCodeQuery, SingleSchoolByPublicCodeQueryVariables>;
export const AllSchoolYearsDocument = gql`
    query AllSchoolYears {
  schoolYears {
    ...SchoolYearFragment
  }
}
    ${SchoolYearFragmentFragmentDoc}`;
export type AllSchoolYearsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllSchoolYearsQuery, AllSchoolYearsQueryVariables>, 'query'>;

    export const AllSchoolYearsComponent = (props: AllSchoolYearsComponentProps) => (
      <ApolloReactComponents.Query<AllSchoolYearsQuery, AllSchoolYearsQueryVariables> query={AllSchoolYearsDocument} {...props} />
    );
    
export type AllSchoolYearsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllSchoolYearsQuery, AllSchoolYearsQueryVariables>
    } & TChildProps;
export function withAllSchoolYears<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllSchoolYearsQuery,
  AllSchoolYearsQueryVariables,
  AllSchoolYearsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllSchoolYearsQuery, AllSchoolYearsQueryVariables, AllSchoolYearsProps<TChildProps, TDataName>>(AllSchoolYearsDocument, {
      alias: 'allSchoolYears',
      ...operationOptions
    });
};

/**
 * __useAllSchoolYearsQuery__
 *
 * To run a query within a React component, call `useAllSchoolYearsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSchoolYearsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSchoolYearsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSchoolYearsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllSchoolYearsQuery, AllSchoolYearsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllSchoolYearsQuery, AllSchoolYearsQueryVariables>(AllSchoolYearsDocument, options);
      }
export function useAllSchoolYearsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllSchoolYearsQuery, AllSchoolYearsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllSchoolYearsQuery, AllSchoolYearsQueryVariables>(AllSchoolYearsDocument, options);
        }
export type AllSchoolYearsQueryHookResult = ReturnType<typeof useAllSchoolYearsQuery>;
export type AllSchoolYearsLazyQueryHookResult = ReturnType<typeof useAllSchoolYearsLazyQuery>;
export type AllSchoolYearsQueryResult = Apollo.QueryResult<AllSchoolYearsQuery, AllSchoolYearsQueryVariables>;
export const AllScoresDocument = gql`
    query AllScores {
  scores {
    ...ScoreFragment
  }
}
    ${ScoreFragmentFragmentDoc}`;
export type AllScoresComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllScoresQuery, AllScoresQueryVariables>, 'query'>;

    export const AllScoresComponent = (props: AllScoresComponentProps) => (
      <ApolloReactComponents.Query<AllScoresQuery, AllScoresQueryVariables> query={AllScoresDocument} {...props} />
    );
    
export type AllScoresProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllScoresQuery, AllScoresQueryVariables>
    } & TChildProps;
export function withAllScores<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllScoresQuery,
  AllScoresQueryVariables,
  AllScoresProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllScoresQuery, AllScoresQueryVariables, AllScoresProps<TChildProps, TDataName>>(AllScoresDocument, {
      alias: 'allScores',
      ...operationOptions
    });
};

/**
 * __useAllScoresQuery__
 *
 * To run a query within a React component, call `useAllScoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllScoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllScoresQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllScoresQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllScoresQuery, AllScoresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllScoresQuery, AllScoresQueryVariables>(AllScoresDocument, options);
      }
export function useAllScoresLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllScoresQuery, AllScoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllScoresQuery, AllScoresQueryVariables>(AllScoresDocument, options);
        }
export type AllScoresQueryHookResult = ReturnType<typeof useAllScoresQuery>;
export type AllScoresLazyQueryHookResult = ReturnType<typeof useAllScoresLazyQuery>;
export type AllScoresQueryResult = Apollo.QueryResult<AllScoresQuery, AllScoresQueryVariables>;
export const AllSectionsDocument = gql`
    query AllSections {
  sections {
    ...SectionFragment
  }
}
    ${SectionFragmentFragmentDoc}`;
export type AllSectionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllSectionsQuery, AllSectionsQueryVariables>, 'query'>;

    export const AllSectionsComponent = (props: AllSectionsComponentProps) => (
      <ApolloReactComponents.Query<AllSectionsQuery, AllSectionsQueryVariables> query={AllSectionsDocument} {...props} />
    );
    
export type AllSectionsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllSectionsQuery, AllSectionsQueryVariables>
    } & TChildProps;
export function withAllSections<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllSectionsQuery,
  AllSectionsQueryVariables,
  AllSectionsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllSectionsQuery, AllSectionsQueryVariables, AllSectionsProps<TChildProps, TDataName>>(AllSectionsDocument, {
      alias: 'allSections',
      ...operationOptions
    });
};

/**
 * __useAllSectionsQuery__
 *
 * To run a query within a React component, call `useAllSectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllSectionsQuery, AllSectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllSectionsQuery, AllSectionsQueryVariables>(AllSectionsDocument, options);
      }
export function useAllSectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllSectionsQuery, AllSectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllSectionsQuery, AllSectionsQueryVariables>(AllSectionsDocument, options);
        }
export type AllSectionsQueryHookResult = ReturnType<typeof useAllSectionsQuery>;
export type AllSectionsLazyQueryHookResult = ReturnType<typeof useAllSectionsLazyQuery>;
export type AllSectionsQueryResult = Apollo.QueryResult<AllSectionsQuery, AllSectionsQueryVariables>;
export const SingleSectionDocument = gql`
    query SingleSection($id: String!) {
  section(id: $id) {
    ...SectionFragment
    departments {
      ...DepartmentFragment
    }
  }
}
    ${SectionFragmentFragmentDoc}
${DepartmentFragmentFragmentDoc}`;
export type SingleSectionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleSectionQuery, SingleSectionQueryVariables>, 'query'> & ({ variables: SingleSectionQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleSectionComponent = (props: SingleSectionComponentProps) => (
      <ApolloReactComponents.Query<SingleSectionQuery, SingleSectionQueryVariables> query={SingleSectionDocument} {...props} />
    );
    
export type SingleSectionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleSectionQuery, SingleSectionQueryVariables>
    } & TChildProps;
export function withSingleSection<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleSectionQuery,
  SingleSectionQueryVariables,
  SingleSectionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleSectionQuery, SingleSectionQueryVariables, SingleSectionProps<TChildProps, TDataName>>(SingleSectionDocument, {
      alias: 'singleSection',
      ...operationOptions
    });
};

/**
 * __useSingleSectionQuery__
 *
 * To run a query within a React component, call `useSingleSectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleSectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleSectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleSectionQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleSectionQuery, SingleSectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleSectionQuery, SingleSectionQueryVariables>(SingleSectionDocument, options);
      }
export function useSingleSectionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleSectionQuery, SingleSectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleSectionQuery, SingleSectionQueryVariables>(SingleSectionDocument, options);
        }
export type SingleSectionQueryHookResult = ReturnType<typeof useSingleSectionQuery>;
export type SingleSectionLazyQueryHookResult = ReturnType<typeof useSingleSectionLazyQuery>;
export type SingleSectionQueryResult = Apollo.QueryResult<SingleSectionQuery, SingleSectionQueryVariables>;
export const SingleSectionForClassroomsDocument = gql`
    query SingleSectionForClassrooms($id: String!) {
  sectionForClasses(id: $id) {
    ...SectionFragment
    classrooms {
      ...ClassroomFragment
    }
  }
}
    ${SectionFragmentFragmentDoc}
${ClassroomFragmentFragmentDoc}`;
export type SingleSectionForClassroomsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleSectionForClassroomsQuery, SingleSectionForClassroomsQueryVariables>, 'query'> & ({ variables: SingleSectionForClassroomsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleSectionForClassroomsComponent = (props: SingleSectionForClassroomsComponentProps) => (
      <ApolloReactComponents.Query<SingleSectionForClassroomsQuery, SingleSectionForClassroomsQueryVariables> query={SingleSectionForClassroomsDocument} {...props} />
    );
    
export type SingleSectionForClassroomsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleSectionForClassroomsQuery, SingleSectionForClassroomsQueryVariables>
    } & TChildProps;
export function withSingleSectionForClassrooms<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleSectionForClassroomsQuery,
  SingleSectionForClassroomsQueryVariables,
  SingleSectionForClassroomsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleSectionForClassroomsQuery, SingleSectionForClassroomsQueryVariables, SingleSectionForClassroomsProps<TChildProps, TDataName>>(SingleSectionForClassroomsDocument, {
      alias: 'singleSectionForClassrooms',
      ...operationOptions
    });
};

/**
 * __useSingleSectionForClassroomsQuery__
 *
 * To run a query within a React component, call `useSingleSectionForClassroomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleSectionForClassroomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleSectionForClassroomsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleSectionForClassroomsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleSectionForClassroomsQuery, SingleSectionForClassroomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleSectionForClassroomsQuery, SingleSectionForClassroomsQueryVariables>(SingleSectionForClassroomsDocument, options);
      }
export function useSingleSectionForClassroomsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleSectionForClassroomsQuery, SingleSectionForClassroomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleSectionForClassroomsQuery, SingleSectionForClassroomsQueryVariables>(SingleSectionForClassroomsDocument, options);
        }
export type SingleSectionForClassroomsQueryHookResult = ReturnType<typeof useSingleSectionForClassroomsQuery>;
export type SingleSectionForClassroomsLazyQueryHookResult = ReturnType<typeof useSingleSectionForClassroomsLazyQuery>;
export type SingleSectionForClassroomsQueryResult = Apollo.QueryResult<SingleSectionForClassroomsQuery, SingleSectionForClassroomsQueryVariables>;
export const AllSequencesDocument = gql`
    query AllSequences {
  sequences {
    ...SequenceFragment
  }
}
    ${SequenceFragmentFragmentDoc}`;
export type AllSequencesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllSequencesQuery, AllSequencesQueryVariables>, 'query'>;

    export const AllSequencesComponent = (props: AllSequencesComponentProps) => (
      <ApolloReactComponents.Query<AllSequencesQuery, AllSequencesQueryVariables> query={AllSequencesDocument} {...props} />
    );
    
export type AllSequencesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllSequencesQuery, AllSequencesQueryVariables>
    } & TChildProps;
export function withAllSequences<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllSequencesQuery,
  AllSequencesQueryVariables,
  AllSequencesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllSequencesQuery, AllSequencesQueryVariables, AllSequencesProps<TChildProps, TDataName>>(AllSequencesDocument, {
      alias: 'allSequences',
      ...operationOptions
    });
};

/**
 * __useAllSequencesQuery__
 *
 * To run a query within a React component, call `useAllSequencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSequencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSequencesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSequencesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllSequencesQuery, AllSequencesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllSequencesQuery, AllSequencesQueryVariables>(AllSequencesDocument, options);
      }
export function useAllSequencesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllSequencesQuery, AllSequencesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllSequencesQuery, AllSequencesQueryVariables>(AllSequencesDocument, options);
        }
export type AllSequencesQueryHookResult = ReturnType<typeof useAllSequencesQuery>;
export type AllSequencesLazyQueryHookResult = ReturnType<typeof useAllSequencesLazyQuery>;
export type AllSequencesQueryResult = Apollo.QueryResult<AllSequencesQuery, AllSequencesQueryVariables>;
export const AllStudentsDocument = gql`
    query AllStudents {
  students {
    ...StudentFragment
  }
}
    ${StudentFragmentFragmentDoc}`;
export type AllStudentsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllStudentsQuery, AllStudentsQueryVariables>, 'query'>;

    export const AllStudentsComponent = (props: AllStudentsComponentProps) => (
      <ApolloReactComponents.Query<AllStudentsQuery, AllStudentsQueryVariables> query={AllStudentsDocument} {...props} />
    );
    
export type AllStudentsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllStudentsQuery, AllStudentsQueryVariables>
    } & TChildProps;
export function withAllStudents<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllStudentsQuery,
  AllStudentsQueryVariables,
  AllStudentsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllStudentsQuery, AllStudentsQueryVariables, AllStudentsProps<TChildProps, TDataName>>(AllStudentsDocument, {
      alias: 'allStudents',
      ...operationOptions
    });
};

/**
 * __useAllStudentsQuery__
 *
 * To run a query within a React component, call `useAllStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllStudentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllStudentsQuery, AllStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllStudentsQuery, AllStudentsQueryVariables>(AllStudentsDocument, options);
      }
export function useAllStudentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllStudentsQuery, AllStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllStudentsQuery, AllStudentsQueryVariables>(AllStudentsDocument, options);
        }
export type AllStudentsQueryHookResult = ReturnType<typeof useAllStudentsQuery>;
export type AllStudentsLazyQueryHookResult = ReturnType<typeof useAllStudentsLazyQuery>;
export type AllStudentsQueryResult = Apollo.QueryResult<AllStudentsQuery, AllStudentsQueryVariables>;
export const SingleStudentBySecretCodeDocument = gql`
    query SingleStudentBySecretCode($studentSecretCode: String!) {
  studentBySecretCode(studentSecretCode: $studentSecretCode) {
    ...StudentFragment
    annStudentClassroom {
      id
    }
  }
}
    ${StudentFragmentFragmentDoc}`;
export type SingleStudentBySecretCodeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleStudentBySecretCodeQuery, SingleStudentBySecretCodeQueryVariables>, 'query'> & ({ variables: SingleStudentBySecretCodeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleStudentBySecretCodeComponent = (props: SingleStudentBySecretCodeComponentProps) => (
      <ApolloReactComponents.Query<SingleStudentBySecretCodeQuery, SingleStudentBySecretCodeQueryVariables> query={SingleStudentBySecretCodeDocument} {...props} />
    );
    
export type SingleStudentBySecretCodeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleStudentBySecretCodeQuery, SingleStudentBySecretCodeQueryVariables>
    } & TChildProps;
export function withSingleStudentBySecretCode<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleStudentBySecretCodeQuery,
  SingleStudentBySecretCodeQueryVariables,
  SingleStudentBySecretCodeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleStudentBySecretCodeQuery, SingleStudentBySecretCodeQueryVariables, SingleStudentBySecretCodeProps<TChildProps, TDataName>>(SingleStudentBySecretCodeDocument, {
      alias: 'singleStudentBySecretCode',
      ...operationOptions
    });
};

/**
 * __useSingleStudentBySecretCodeQuery__
 *
 * To run a query within a React component, call `useSingleStudentBySecretCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleStudentBySecretCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleStudentBySecretCodeQuery({
 *   variables: {
 *      studentSecretCode: // value for 'studentSecretCode'
 *   },
 * });
 */
export function useSingleStudentBySecretCodeQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleStudentBySecretCodeQuery, SingleStudentBySecretCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleStudentBySecretCodeQuery, SingleStudentBySecretCodeQueryVariables>(SingleStudentBySecretCodeDocument, options);
      }
export function useSingleStudentBySecretCodeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleStudentBySecretCodeQuery, SingleStudentBySecretCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleStudentBySecretCodeQuery, SingleStudentBySecretCodeQueryVariables>(SingleStudentBySecretCodeDocument, options);
        }
export type SingleStudentBySecretCodeQueryHookResult = ReturnType<typeof useSingleStudentBySecretCodeQuery>;
export type SingleStudentBySecretCodeLazyQueryHookResult = ReturnType<typeof useSingleStudentBySecretCodeLazyQuery>;
export type SingleStudentBySecretCodeQueryResult = Apollo.QueryResult<SingleStudentBySecretCodeQuery, SingleStudentBySecretCodeQueryVariables>;
export const SingleStudentByMatriculeDocument = gql`
    query SingleStudentByMatricule($studentMatricule: String!) {
  studentByMatricule(studentMatricule: $studentMatricule) {
    ...StudentFragment
    annStudentClassroom {
      id
    }
  }
}
    ${StudentFragmentFragmentDoc}`;
export type SingleStudentByMatriculeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleStudentByMatriculeQuery, SingleStudentByMatriculeQueryVariables>, 'query'> & ({ variables: SingleStudentByMatriculeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleStudentByMatriculeComponent = (props: SingleStudentByMatriculeComponentProps) => (
      <ApolloReactComponents.Query<SingleStudentByMatriculeQuery, SingleStudentByMatriculeQueryVariables> query={SingleStudentByMatriculeDocument} {...props} />
    );
    
export type SingleStudentByMatriculeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleStudentByMatriculeQuery, SingleStudentByMatriculeQueryVariables>
    } & TChildProps;
export function withSingleStudentByMatricule<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleStudentByMatriculeQuery,
  SingleStudentByMatriculeQueryVariables,
  SingleStudentByMatriculeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleStudentByMatriculeQuery, SingleStudentByMatriculeQueryVariables, SingleStudentByMatriculeProps<TChildProps, TDataName>>(SingleStudentByMatriculeDocument, {
      alias: 'singleStudentByMatricule',
      ...operationOptions
    });
};

/**
 * __useSingleStudentByMatriculeQuery__
 *
 * To run a query within a React component, call `useSingleStudentByMatriculeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleStudentByMatriculeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleStudentByMatriculeQuery({
 *   variables: {
 *      studentMatricule: // value for 'studentMatricule'
 *   },
 * });
 */
export function useSingleStudentByMatriculeQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleStudentByMatriculeQuery, SingleStudentByMatriculeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleStudentByMatriculeQuery, SingleStudentByMatriculeQueryVariables>(SingleStudentByMatriculeDocument, options);
      }
export function useSingleStudentByMatriculeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleStudentByMatriculeQuery, SingleStudentByMatriculeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleStudentByMatriculeQuery, SingleStudentByMatriculeQueryVariables>(SingleStudentByMatriculeDocument, options);
        }
export type SingleStudentByMatriculeQueryHookResult = ReturnType<typeof useSingleStudentByMatriculeQuery>;
export type SingleStudentByMatriculeLazyQueryHookResult = ReturnType<typeof useSingleStudentByMatriculeLazyQuery>;
export type SingleStudentByMatriculeQueryResult = Apollo.QueryResult<SingleStudentByMatriculeQuery, SingleStudentByMatriculeQueryVariables>;
export const AllSubdivisionsDocument = gql`
    query AllSubdivisions {
  subdivisions {
    ...SubdivisionFragment
  }
}
    ${SubdivisionFragmentFragmentDoc}`;
export type AllSubdivisionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllSubdivisionsQuery, AllSubdivisionsQueryVariables>, 'query'>;

    export const AllSubdivisionsComponent = (props: AllSubdivisionsComponentProps) => (
      <ApolloReactComponents.Query<AllSubdivisionsQuery, AllSubdivisionsQueryVariables> query={AllSubdivisionsDocument} {...props} />
    );
    
export type AllSubdivisionsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllSubdivisionsQuery, AllSubdivisionsQueryVariables>
    } & TChildProps;
export function withAllSubdivisions<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllSubdivisionsQuery,
  AllSubdivisionsQueryVariables,
  AllSubdivisionsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllSubdivisionsQuery, AllSubdivisionsQueryVariables, AllSubdivisionsProps<TChildProps, TDataName>>(AllSubdivisionsDocument, {
      alias: 'allSubdivisions',
      ...operationOptions
    });
};

/**
 * __useAllSubdivisionsQuery__
 *
 * To run a query within a React component, call `useAllSubdivisionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSubdivisionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSubdivisionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSubdivisionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllSubdivisionsQuery, AllSubdivisionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllSubdivisionsQuery, AllSubdivisionsQueryVariables>(AllSubdivisionsDocument, options);
      }
export function useAllSubdivisionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllSubdivisionsQuery, AllSubdivisionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllSubdivisionsQuery, AllSubdivisionsQueryVariables>(AllSubdivisionsDocument, options);
        }
export type AllSubdivisionsQueryHookResult = ReturnType<typeof useAllSubdivisionsQuery>;
export type AllSubdivisionsLazyQueryHookResult = ReturnType<typeof useAllSubdivisionsLazyQuery>;
export type AllSubdivisionsQueryResult = Apollo.QueryResult<AllSubdivisionsQuery, AllSubdivisionsQueryVariables>;
export const SingleSubdivisionDocument = gql`
    query SingleSubdivision($id: String!) {
  subdivision(id: $id) {
    ...SubdivisionFragment
    towns {
      ...TownFragment
    }
  }
}
    ${SubdivisionFragmentFragmentDoc}
${TownFragmentFragmentDoc}`;
export type SingleSubdivisionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleSubdivisionQuery, SingleSubdivisionQueryVariables>, 'query'> & ({ variables: SingleSubdivisionQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleSubdivisionComponent = (props: SingleSubdivisionComponentProps) => (
      <ApolloReactComponents.Query<SingleSubdivisionQuery, SingleSubdivisionQueryVariables> query={SingleSubdivisionDocument} {...props} />
    );
    
export type SingleSubdivisionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleSubdivisionQuery, SingleSubdivisionQueryVariables>
    } & TChildProps;
export function withSingleSubdivision<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleSubdivisionQuery,
  SingleSubdivisionQueryVariables,
  SingleSubdivisionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleSubdivisionQuery, SingleSubdivisionQueryVariables, SingleSubdivisionProps<TChildProps, TDataName>>(SingleSubdivisionDocument, {
      alias: 'singleSubdivision',
      ...operationOptions
    });
};

/**
 * __useSingleSubdivisionQuery__
 *
 * To run a query within a React component, call `useSingleSubdivisionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleSubdivisionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleSubdivisionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleSubdivisionQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleSubdivisionQuery, SingleSubdivisionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleSubdivisionQuery, SingleSubdivisionQueryVariables>(SingleSubdivisionDocument, options);
      }
export function useSingleSubdivisionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleSubdivisionQuery, SingleSubdivisionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleSubdivisionQuery, SingleSubdivisionQueryVariables>(SingleSubdivisionDocument, options);
        }
export type SingleSubdivisionQueryHookResult = ReturnType<typeof useSingleSubdivisionQuery>;
export type SingleSubdivisionLazyQueryHookResult = ReturnType<typeof useSingleSubdivisionLazyQuery>;
export type SingleSubdivisionQueryResult = Apollo.QueryResult<SingleSubdivisionQuery, SingleSubdivisionQueryVariables>;
export const AllSubjectsDocument = gql`
    query AllSubjects {
  subjects {
    ...SubjectFragment
  }
}
    ${SubjectFragmentFragmentDoc}`;
export type AllSubjectsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllSubjectsQuery, AllSubjectsQueryVariables>, 'query'>;

    export const AllSubjectsComponent = (props: AllSubjectsComponentProps) => (
      <ApolloReactComponents.Query<AllSubjectsQuery, AllSubjectsQueryVariables> query={AllSubjectsDocument} {...props} />
    );
    
export type AllSubjectsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllSubjectsQuery, AllSubjectsQueryVariables>
    } & TChildProps;
export function withAllSubjects<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllSubjectsQuery,
  AllSubjectsQueryVariables,
  AllSubjectsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllSubjectsQuery, AllSubjectsQueryVariables, AllSubjectsProps<TChildProps, TDataName>>(AllSubjectsDocument, {
      alias: 'allSubjects',
      ...operationOptions
    });
};

/**
 * __useAllSubjectsQuery__
 *
 * To run a query within a React component, call `useAllSubjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSubjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSubjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSubjectsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllSubjectsQuery, AllSubjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllSubjectsQuery, AllSubjectsQueryVariables>(AllSubjectsDocument, options);
      }
export function useAllSubjectsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllSubjectsQuery, AllSubjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllSubjectsQuery, AllSubjectsQueryVariables>(AllSubjectsDocument, options);
        }
export type AllSubjectsQueryHookResult = ReturnType<typeof useAllSubjectsQuery>;
export type AllSubjectsLazyQueryHookResult = ReturnType<typeof useAllSubjectsLazyQuery>;
export type AllSubjectsQueryResult = Apollo.QueryResult<AllSubjectsQuery, AllSubjectsQueryVariables>;
export const AllTermsDocument = gql`
    query AllTerms {
  terms {
    ...TermFragment
  }
}
    ${TermFragmentFragmentDoc}`;
export type AllTermsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllTermsQuery, AllTermsQueryVariables>, 'query'>;

    export const AllTermsComponent = (props: AllTermsComponentProps) => (
      <ApolloReactComponents.Query<AllTermsQuery, AllTermsQueryVariables> query={AllTermsDocument} {...props} />
    );
    
export type AllTermsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllTermsQuery, AllTermsQueryVariables>
    } & TChildProps;
export function withAllTerms<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllTermsQuery,
  AllTermsQueryVariables,
  AllTermsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllTermsQuery, AllTermsQueryVariables, AllTermsProps<TChildProps, TDataName>>(AllTermsDocument, {
      alias: 'allTerms',
      ...operationOptions
    });
};

/**
 * __useAllTermsQuery__
 *
 * To run a query within a React component, call `useAllTermsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTermsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTermsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTermsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllTermsQuery, AllTermsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllTermsQuery, AllTermsQueryVariables>(AllTermsDocument, options);
      }
export function useAllTermsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllTermsQuery, AllTermsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllTermsQuery, AllTermsQueryVariables>(AllTermsDocument, options);
        }
export type AllTermsQueryHookResult = ReturnType<typeof useAllTermsQuery>;
export type AllTermsLazyQueryHookResult = ReturnType<typeof useAllTermsLazyQuery>;
export type AllTermsQueryResult = Apollo.QueryResult<AllTermsQuery, AllTermsQueryVariables>;
export const AllTownsDocument = gql`
    query AllTowns {
  towns {
    ...TownFragment
  }
}
    ${TownFragmentFragmentDoc}`;
export type AllTownsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllTownsQuery, AllTownsQueryVariables>, 'query'>;

    export const AllTownsComponent = (props: AllTownsComponentProps) => (
      <ApolloReactComponents.Query<AllTownsQuery, AllTownsQueryVariables> query={AllTownsDocument} {...props} />
    );
    
export type AllTownsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllTownsQuery, AllTownsQueryVariables>
    } & TChildProps;
export function withAllTowns<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllTownsQuery,
  AllTownsQueryVariables,
  AllTownsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllTownsQuery, AllTownsQueryVariables, AllTownsProps<TChildProps, TDataName>>(AllTownsDocument, {
      alias: 'allTowns',
      ...operationOptions
    });
};

/**
 * __useAllTownsQuery__
 *
 * To run a query within a React component, call `useAllTownsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTownsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTownsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTownsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllTownsQuery, AllTownsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllTownsQuery, AllTownsQueryVariables>(AllTownsDocument, options);
      }
export function useAllTownsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllTownsQuery, AllTownsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllTownsQuery, AllTownsQueryVariables>(AllTownsDocument, options);
        }
export type AllTownsQueryHookResult = ReturnType<typeof useAllTownsQuery>;
export type AllTownsLazyQueryHookResult = ReturnType<typeof useAllTownsLazyQuery>;
export type AllTownsQueryResult = Apollo.QueryResult<AllTownsQuery, AllTownsQueryVariables>;
export const SingleTownDocument = gql`
    query SingleTown($id: String!) {
  town(id: $id) {
    ...TownFragment
    schools {
      ...SchoolFragment
    }
  }
}
    ${TownFragmentFragmentDoc}
${SchoolFragmentFragmentDoc}`;
export type SingleTownComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleTownQuery, SingleTownQueryVariables>, 'query'> & ({ variables: SingleTownQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleTownComponent = (props: SingleTownComponentProps) => (
      <ApolloReactComponents.Query<SingleTownQuery, SingleTownQueryVariables> query={SingleTownDocument} {...props} />
    );
    
export type SingleTownProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleTownQuery, SingleTownQueryVariables>
    } & TChildProps;
export function withSingleTown<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleTownQuery,
  SingleTownQueryVariables,
  SingleTownProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleTownQuery, SingleTownQueryVariables, SingleTownProps<TChildProps, TDataName>>(SingleTownDocument, {
      alias: 'singleTown',
      ...operationOptions
    });
};

/**
 * __useSingleTownQuery__
 *
 * To run a query within a React component, call `useSingleTownQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleTownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleTownQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleTownQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleTownQuery, SingleTownQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleTownQuery, SingleTownQueryVariables>(SingleTownDocument, options);
      }
export function useSingleTownLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleTownQuery, SingleTownQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleTownQuery, SingleTownQueryVariables>(SingleTownDocument, options);
        }
export type SingleTownQueryHookResult = ReturnType<typeof useSingleTownQuery>;
export type SingleTownLazyQueryHookResult = ReturnType<typeof useSingleTownLazyQuery>;
export type SingleTownQueryResult = Apollo.QueryResult<SingleTownQuery, SingleTownQueryVariables>;
export const AllUsersDocument = gql`
    query AllUsers {
  users {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type AllUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllUsersQuery, AllUsersQueryVariables>, 'query'>;

    export const AllUsersComponent = (props: AllUsersComponentProps) => (
      <ApolloReactComponents.Query<AllUsersQuery, AllUsersQueryVariables> query={AllUsersDocument} {...props} />
    );
    
export type AllUsersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllUsersQuery, AllUsersQueryVariables>
    } & TChildProps;
export function withAllUsers<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllUsersQuery,
  AllUsersQueryVariables,
  AllUsersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllUsersQuery, AllUsersQueryVariables, AllUsersProps<TChildProps, TDataName>>(AllUsersDocument, {
      alias: 'allUsers',
      ...operationOptions
    });
};

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  User: ResolverTypeWrapper<User>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Region: ResolverTypeWrapper<Region>;
  Division: ResolverTypeWrapper<Division>;
  Subdivision: ResolverTypeWrapper<Subdivision>;
  Town: ResolverTypeWrapper<Town>;
  School: ResolverTypeWrapper<School>;
  Section: ResolverTypeWrapper<Section>;
  Department: ResolverTypeWrapper<Department>;
  Prof: ResolverTypeWrapper<Prof>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Sequence: ResolverTypeWrapper<Sequence>;
  AnnProfDept: ResolverTypeWrapper<AnnProfDept>;
  AnnProfSubjDistro: ResolverTypeWrapper<AnnProfSubjDistro>;
  AnnStudentClassroom: ResolverTypeWrapper<AnnStudentClassroom>;
  Classroom: ResolverTypeWrapper<Classroom>;
  Logbook: ResolverTypeWrapper<Logbook>;
  SchoolYear: ResolverTypeWrapper<SchoolYear>;
  Student: ResolverTypeWrapper<Student>;
  Subject: ResolverTypeWrapper<Subject>;
  Term: ResolverTypeWrapper<Term>;
  Score: ResolverTypeWrapper<Score>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  UserCreateInput: UserCreateInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  UserUpdateInput: UserUpdateInput;
  BatchPayload: ResolverTypeWrapper<BatchPayload>;
  UserWhereInput: UserWhereInput;
  RegionCreateInput: RegionCreateInput;
  RegionWhereUniqueInput: RegionWhereUniqueInput;
  RegionUpdateInput: RegionUpdateInput;
  RegionWhereInput: RegionWhereInput;
  DivisionCreateInput: DivisionCreateInput;
  DivisionWhereUniqueInput: DivisionWhereUniqueInput;
  DivisionUpdateInput: DivisionUpdateInput;
  DivisionWhereInput: DivisionWhereInput;
  TownCreateInput: TownCreateInput;
  TownWhereUniqueInput: TownWhereUniqueInput;
  TownUpdateInput: TownUpdateInput;
  TownWhereInput: TownWhereInput;
  SchoolCreateInput: SchoolCreateInput;
  SchoolWhereUniqueInput: SchoolWhereUniqueInput;
  SchoolUpdateInput: SchoolUpdateInput;
  SchoolWhereInput: SchoolWhereInput;
  SectionCreateInput: SectionCreateInput;
  SectionWhereUniqueInput: SectionWhereUniqueInput;
  SectionUpdateInput: SectionUpdateInput;
  SectionUpdateManyMutationInput: SectionUpdateManyMutationInput;
  SectionWhereInput: SectionWhereInput;
  SubdivisionUpdateManyMutationInput: SubdivisionUpdateManyMutationInput;
  SubdivisionWhereInput: SubdivisionWhereInput;
  SubdivisionCreateInput: SubdivisionCreateInput;
  SubdivisionWhereUniqueInput: SubdivisionWhereUniqueInput;
  SubdivisionUpdateInput: SubdivisionUpdateInput;
  DepartmentWhereInput: DepartmentWhereInput;
  DepartmentCreateInput: DepartmentCreateInput;
  DepartmentWhereUniqueInput: DepartmentWhereUniqueInput;
  DepartmentUpdateInput: DepartmentUpdateInput;
  ProfCreateInput: ProfCreateInput;
  ProfWhereUniqueInput: ProfWhereUniqueInput;
  ProfUpdateInput: ProfUpdateInput;
  ProfWhereInput: ProfWhereInput;
  TermCreateInput: TermCreateInput;
  TermWhereUniqueInput: TermWhereUniqueInput;
  TermUpdateInput: TermUpdateInput;
  TermWhereInput: TermWhereInput;
  LogbookCreateInput: LogbookCreateInput;
  LogbookWhereUniqueInput: LogbookWhereUniqueInput;
  LogbookUpdateInput: LogbookUpdateInput;
  LogbookWhereInput: LogbookWhereInput;
  SchoolYearCreateInput: SchoolYearCreateInput;
  SchoolYearWhereUniqueInput: SchoolYearWhereUniqueInput;
  SchoolYearUpdateInput: SchoolYearUpdateInput;
  SchoolYearWhereInput: SchoolYearWhereInput;
  SubjectCreateInput: SubjectCreateInput;
  SubjectWhereUniqueInput: SubjectWhereUniqueInput;
  SubjectUpdateInput: SubjectUpdateInput;
  SubjectWhereInput: SubjectWhereInput;
  SequenceCreateInput: SequenceCreateInput;
  SequenceWhereUniqueInput: SequenceWhereUniqueInput;
  SequenceUpdateInput: SequenceUpdateInput;
  SequenceWhereInput: SequenceWhereInput;
  AnnProfDeptCreateInput: AnnProfDeptCreateInput;
  AnnProfDeptWhereUniqueInput: AnnProfDeptWhereUniqueInput;
  AnnProfDeptUpdateInput: AnnProfDeptUpdateInput;
  AnnProfDeptWhereInput: AnnProfDeptWhereInput;
  AnnProfSubjDistroCreateInput: AnnProfSubjDistroCreateInput;
  AnnProfSubjDistroWhereUniqueInput: AnnProfSubjDistroWhereUniqueInput;
  AnnProfSubjDistroUpdateInput: AnnProfSubjDistroUpdateInput;
  AnnProfSubjDistroWhereInput: AnnProfSubjDistroWhereInput;
  AnnStudentClassroomCreateInput: AnnStudentClassroomCreateInput;
  AnnStudentClassroomWhereUniqueInput: AnnStudentClassroomWhereUniqueInput;
  AnnStudentClassroomUpdateInput: AnnStudentClassroomUpdateInput;
  AnnStudentClassroomWhereInput: AnnStudentClassroomWhereInput;
  StudentCreateInput: StudentCreateInput;
  StudentWhereUniqueInput: StudentWhereUniqueInput;
  StudentUpdateInput: StudentUpdateInput;
  StudentWhereInput: StudentWhereInput;
  ScoreCreateInput: ScoreCreateInput;
  ScoreWhereUniqueInput: ScoreWhereUniqueInput;
  ScoreUpdateInput: ScoreUpdateInput;
  ScoreWhereInput: ScoreWhereInput;
  ClassroomCreateInput: ClassroomCreateInput;
  ClassroomWhereUniqueInput: ClassroomWhereUniqueInput;
  ClassroomUpdateInput: ClassroomUpdateInput;
  ClassroomWhereInput: ClassroomWhereInput;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  DateTimeFilter: DateTimeFilter;
  DivisionCreateManyWithoutRegionInput: DivisionCreateManyWithoutRegionInput;
  DivisionUpdateManyWithoutRegionInput: DivisionUpdateManyWithoutRegionInput;
  DivisionListRelationFilter: DivisionListRelationFilter;
  SubdivisionCreateManyWithoutDivisionInput: SubdivisionCreateManyWithoutDivisionInput;
  RegionCreateOneWithoutDivisionInput: RegionCreateOneWithoutDivisionInput;
  SubdivisionUpdateManyWithoutDivisionInput: SubdivisionUpdateManyWithoutDivisionInput;
  RegionUpdateOneRequiredWithoutDivisionInput: RegionUpdateOneRequiredWithoutDivisionInput;
  SubdivisionListRelationFilter: SubdivisionListRelationFilter;
  SchoolCreateManyWithoutTownInput: SchoolCreateManyWithoutTownInput;
  SubdivisionCreateOneWithoutTownInput: SubdivisionCreateOneWithoutTownInput;
  SchoolUpdateManyWithoutTownInput: SchoolUpdateManyWithoutTownInput;
  SubdivisionUpdateOneRequiredWithoutTownInput: SubdivisionUpdateOneRequiredWithoutTownInput;
  SchoolListRelationFilter: SchoolListRelationFilter;
  SectionCreateManyWithoutSchoolInput: SectionCreateManyWithoutSchoolInput;
  TownCreateOneWithoutSchoolInput: TownCreateOneWithoutSchoolInput;
  SectionUpdateManyWithoutSchoolInput: SectionUpdateManyWithoutSchoolInput;
  TownUpdateOneRequiredWithoutSchoolInput: TownUpdateOneRequiredWithoutSchoolInput;
  SectionListRelationFilter: SectionListRelationFilter;
  DepartmentCreateManyWithoutSectionInput: DepartmentCreateManyWithoutSectionInput;
  ClassroomCreateManyWithoutSectionInput: ClassroomCreateManyWithoutSectionInput;
  SchoolCreateOneWithoutSectionInput: SchoolCreateOneWithoutSectionInput;
  DepartmentUpdateManyWithoutSectionInput: DepartmentUpdateManyWithoutSectionInput;
  ClassroomUpdateManyWithoutSectionInput: ClassroomUpdateManyWithoutSectionInput;
  SchoolUpdateOneRequiredWithoutSectionInput: SchoolUpdateOneRequiredWithoutSectionInput;
  DepartmentListRelationFilter: DepartmentListRelationFilter;
  ClassroomListRelationFilter: ClassroomListRelationFilter;
  TownListRelationFilter: TownListRelationFilter;
  TownCreateManyWithoutSubdivisionInput: TownCreateManyWithoutSubdivisionInput;
  DivisionCreateOneWithoutSubdivInput: DivisionCreateOneWithoutSubdivInput;
  TownUpdateManyWithoutSubdivisionInput: TownUpdateManyWithoutSubdivisionInput;
  DivisionUpdateOneRequiredWithoutSubdivInput: DivisionUpdateOneRequiredWithoutSubdivInput;
  AnnProfDeptListRelationFilter: AnnProfDeptListRelationFilter;
  SubjectListRelationFilter: SubjectListRelationFilter;
  AnnProfDeptCreateManyWithoutDepartmentInput: AnnProfDeptCreateManyWithoutDepartmentInput;
  SubjectCreateManyWithoutDepartmentInput: SubjectCreateManyWithoutDepartmentInput;
  SectionCreateOneWithoutDepartmentInput: SectionCreateOneWithoutDepartmentInput;
  AnnProfDeptUpdateManyWithoutDepartmentInput: AnnProfDeptUpdateManyWithoutDepartmentInput;
  SubjectUpdateManyWithoutDepartmentInput: SubjectUpdateManyWithoutDepartmentInput;
  SectionUpdateOneRequiredWithoutDepartmentInput: SectionUpdateOneRequiredWithoutDepartmentInput;
  AnnProfDeptCreateManyWithoutProfInput: AnnProfDeptCreateManyWithoutProfInput;
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  AnnProfDeptUpdateManyWithoutProfInput: AnnProfDeptUpdateManyWithoutProfInput;
  IntFilter: IntFilter;
  SequenceCreateManyWithoutTermInput: SequenceCreateManyWithoutTermInput;
  SequenceUpdateManyWithoutTermInput: SequenceUpdateManyWithoutTermInput;
  SequenceListRelationFilter: SequenceListRelationFilter;
  AnnProfSubjDistroCreateOneWithoutLogbookInput: AnnProfSubjDistroCreateOneWithoutLogbookInput;
  AnnProfSubjDistroUpdateOneRequiredWithoutLogbookInput: AnnProfSubjDistroUpdateOneRequiredWithoutLogbookInput;
  AnnStudentClassroomCreateManyWithoutSchoolYearInput: AnnStudentClassroomCreateManyWithoutSchoolYearInput;
  AnnProfDeptCreateManyWithoutSchoolYearInput: AnnProfDeptCreateManyWithoutSchoolYearInput;
  AnnStudentClassroomUpdateManyWithoutSchoolYearInput: AnnStudentClassroomUpdateManyWithoutSchoolYearInput;
  AnnProfDeptUpdateManyWithoutSchoolYearInput: AnnProfDeptUpdateManyWithoutSchoolYearInput;
  AnnStudentClassroomListRelationFilter: AnnStudentClassroomListRelationFilter;
  AnnProfSubjDistroCreateManyWithoutSubjectInput: AnnProfSubjDistroCreateManyWithoutSubjectInput;
  DepartmentCreateOneWithoutSubjectInput: DepartmentCreateOneWithoutSubjectInput;
  AnnProfSubjDistroUpdateManyWithoutSubjectInput: AnnProfSubjDistroUpdateManyWithoutSubjectInput;
  DepartmentUpdateOneRequiredWithoutSubjectInput: DepartmentUpdateOneRequiredWithoutSubjectInput;
  AnnProfSubjDistroListRelationFilter: AnnProfSubjDistroListRelationFilter;
  ScoreCreateManyWithoutSequenceInput: ScoreCreateManyWithoutSequenceInput;
  TermCreateOneWithoutSequenceInput: TermCreateOneWithoutSequenceInput;
  ScoreUpdateManyWithoutSequenceInput: ScoreUpdateManyWithoutSequenceInput;
  TermUpdateOneRequiredWithoutSequenceInput: TermUpdateOneRequiredWithoutSequenceInput;
  ScoreListRelationFilter: ScoreListRelationFilter;
  AnnProfSubjDistroCreateManyWithoutAnnProfDeptInput: AnnProfSubjDistroCreateManyWithoutAnnProfDeptInput;
  DepartmentCreateOneWithoutAnnProfDeptInput: DepartmentCreateOneWithoutAnnProfDeptInput;
  SchoolYearCreateOneWithoutAnnProfDeptInput: SchoolYearCreateOneWithoutAnnProfDeptInput;
  ProfCreateOneWithoutAnnProfDeptInput: ProfCreateOneWithoutAnnProfDeptInput;
  AnnProfSubjDistroUpdateManyWithoutAnnProfDeptInput: AnnProfSubjDistroUpdateManyWithoutAnnProfDeptInput;
  DepartmentUpdateOneRequiredWithoutAnnProfDeptInput: DepartmentUpdateOneRequiredWithoutAnnProfDeptInput;
  SchoolYearUpdateOneRequiredWithoutAnnProfDeptInput: SchoolYearUpdateOneRequiredWithoutAnnProfDeptInput;
  ProfUpdateOneRequiredWithoutAnnProfDeptInput: ProfUpdateOneRequiredWithoutAnnProfDeptInput;
  AnnProfDeptCreateOneWithoutAnnProfSubjInput: AnnProfDeptCreateOneWithoutAnnProfSubjInput;
  SubjectCreateOneWithoutAnnProfSubjInput: SubjectCreateOneWithoutAnnProfSubjInput;
  ClassroomCreateOneWithoutAnnProfSubjInput: ClassroomCreateOneWithoutAnnProfSubjInput;
  ScoreCreateManyWithoutAnnProfSubjInput: ScoreCreateManyWithoutAnnProfSubjInput;
  LogbookCreateManyWithoutAnnProfSubjDistroInput: LogbookCreateManyWithoutAnnProfSubjDistroInput;
  AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput: AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput;
  SubjectUpdateOneRequiredWithoutAnnProfSubjInput: SubjectUpdateOneRequiredWithoutAnnProfSubjInput;
  ClassroomUpdateOneRequiredWithoutAnnProfSubjInput: ClassroomUpdateOneRequiredWithoutAnnProfSubjInput;
  ScoreUpdateManyWithoutAnnProfSubjInput: ScoreUpdateManyWithoutAnnProfSubjInput;
  LogbookUpdateManyWithoutAnnProfSubjDistroInput: LogbookUpdateManyWithoutAnnProfSubjDistroInput;
  LogbookListRelationFilter: LogbookListRelationFilter;
  SchoolYearCreateOneWithoutAnnStudentClassroomInput: SchoolYearCreateOneWithoutAnnStudentClassroomInput;
  ClassroomCreateOneWithoutAnnStudentClassroomInput: ClassroomCreateOneWithoutAnnStudentClassroomInput;
  StudentCreateOneWithoutAnnStudentClassroomInput: StudentCreateOneWithoutAnnStudentClassroomInput;
  ScoreCreateManyWithoutAnnStudentClassInput: ScoreCreateManyWithoutAnnStudentClassInput;
  FinanceCreateManyWithoutAnnStudentClassroomInput: FinanceCreateManyWithoutAnnStudentClassroomInput;
  SchoolYearUpdateOneRequiredWithoutAnnStudentClassroomInput: SchoolYearUpdateOneRequiredWithoutAnnStudentClassroomInput;
  ClassroomUpdateOneRequiredWithoutAnnStudentClassroomInput: ClassroomUpdateOneRequiredWithoutAnnStudentClassroomInput;
  StudentUpdateOneRequiredWithoutAnnStudentClassroomInput: StudentUpdateOneRequiredWithoutAnnStudentClassroomInput;
  ScoreUpdateManyWithoutAnnStudentClassInput: ScoreUpdateManyWithoutAnnStudentClassInput;
  FinanceUpdateManyWithoutAnnStudentClassroomInput: FinanceUpdateManyWithoutAnnStudentClassroomInput;
  FinanceListRelationFilter: FinanceListRelationFilter;
  AnnStudentClassroomCreateManyWithoutStudentInput: AnnStudentClassroomCreateManyWithoutStudentInput;
  AnnStudentClassroomUpdateManyWithoutStudentInput: AnnStudentClassroomUpdateManyWithoutStudentInput;
  AnnStudentClassroomCreateManyWithoutScoreInput: AnnStudentClassroomCreateManyWithoutScoreInput;
  AnnProfSubjDistroCreateManyWithoutScoreInput: AnnProfSubjDistroCreateManyWithoutScoreInput;
  SequenceCreateOneWithoutScoreInput: SequenceCreateOneWithoutScoreInput;
  AnnStudentClassroomUpdateManyWithoutScoreInput: AnnStudentClassroomUpdateManyWithoutScoreInput;
  AnnProfSubjDistroUpdateManyWithoutScoreInput: AnnProfSubjDistroUpdateManyWithoutScoreInput;
  SequenceUpdateOneRequiredWithoutScoreInput: SequenceUpdateOneRequiredWithoutScoreInput;
  AnnProfSubjDistroCreateManyWithoutClassroomInput: AnnProfSubjDistroCreateManyWithoutClassroomInput;
  AnnStudentClassroomCreateManyWithoutClassroomInput: AnnStudentClassroomCreateManyWithoutClassroomInput;
  SectionCreateOneWithoutClassroomInput: SectionCreateOneWithoutClassroomInput;
  AnnProfSubjDistroUpdateManyWithoutClassroomInput: AnnProfSubjDistroUpdateManyWithoutClassroomInput;
  AnnStudentClassroomUpdateManyWithoutClassroomInput: AnnStudentClassroomUpdateManyWithoutClassroomInput;
  SectionUpdateOneRequiredWithoutClassroomInput: SectionUpdateOneRequiredWithoutClassroomInput;
  QueryMode: QueryMode;
  NestedStringFilter: NestedStringFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  DivisionCreateWithoutRegionInput: DivisionCreateWithoutRegionInput;
  DivisionCreateOrConnectWithoutRegionInput: DivisionCreateOrConnectWithoutRegionInput;
  DivisionUpdateWithWhereUniqueWithoutRegionInput: DivisionUpdateWithWhereUniqueWithoutRegionInput;
  DivisionUpdateManyWithWhereWithoutRegionInput: DivisionUpdateManyWithWhereWithoutRegionInput;
  DivisionScalarWhereInput: DivisionScalarWhereInput;
  DivisionUpsertWithWhereUniqueWithoutRegionInput: DivisionUpsertWithWhereUniqueWithoutRegionInput;
  SubdivisionCreateWithoutDivisionInput: SubdivisionCreateWithoutDivisionInput;
  SubdivisionCreateOrConnectWithoutDivisionInput: SubdivisionCreateOrConnectWithoutDivisionInput;
  RegionCreateWithoutDivisionInput: RegionCreateWithoutDivisionInput;
  RegionCreateOrConnectWithoutdivisionInput: RegionCreateOrConnectWithoutdivisionInput;
  SubdivisionUpdateWithWhereUniqueWithoutDivisionInput: SubdivisionUpdateWithWhereUniqueWithoutDivisionInput;
  SubdivisionUpdateManyWithWhereWithoutDivisionInput: SubdivisionUpdateManyWithWhereWithoutDivisionInput;
  SubdivisionScalarWhereInput: SubdivisionScalarWhereInput;
  SubdivisionUpsertWithWhereUniqueWithoutDivisionInput: SubdivisionUpsertWithWhereUniqueWithoutDivisionInput;
  RegionUpdateWithoutDivisionInput: RegionUpdateWithoutDivisionInput;
  RegionUpsertWithoutDivisionInput: RegionUpsertWithoutDivisionInput;
  SchoolCreateWithoutTownInput: SchoolCreateWithoutTownInput;
  SchoolCreateOrConnectWithoutTownInput: SchoolCreateOrConnectWithoutTownInput;
  SubdivisionCreateWithoutTownInput: SubdivisionCreateWithoutTownInput;
  SubdivisionCreateOrConnectWithouttownInput: SubdivisionCreateOrConnectWithouttownInput;
  SchoolUpdateWithWhereUniqueWithoutTownInput: SchoolUpdateWithWhereUniqueWithoutTownInput;
  SchoolUpdateManyWithWhereWithoutTownInput: SchoolUpdateManyWithWhereWithoutTownInput;
  SchoolScalarWhereInput: SchoolScalarWhereInput;
  SchoolUpsertWithWhereUniqueWithoutTownInput: SchoolUpsertWithWhereUniqueWithoutTownInput;
  SubdivisionUpdateWithoutTownInput: SubdivisionUpdateWithoutTownInput;
  SubdivisionUpsertWithoutTownInput: SubdivisionUpsertWithoutTownInput;
  SectionCreateWithoutSchoolInput: SectionCreateWithoutSchoolInput;
  SectionCreateOrConnectWithoutSchoolInput: SectionCreateOrConnectWithoutSchoolInput;
  TownCreateWithoutSchoolInput: TownCreateWithoutSchoolInput;
  TownCreateOrConnectWithoutschoolInput: TownCreateOrConnectWithoutschoolInput;
  SectionUpdateWithWhereUniqueWithoutSchoolInput: SectionUpdateWithWhereUniqueWithoutSchoolInput;
  SectionUpdateManyWithWhereWithoutSchoolInput: SectionUpdateManyWithWhereWithoutSchoolInput;
  SectionScalarWhereInput: SectionScalarWhereInput;
  SectionUpsertWithWhereUniqueWithoutSchoolInput: SectionUpsertWithWhereUniqueWithoutSchoolInput;
  TownUpdateWithoutSchoolInput: TownUpdateWithoutSchoolInput;
  TownUpsertWithoutSchoolInput: TownUpsertWithoutSchoolInput;
  DepartmentCreateWithoutSectionInput: DepartmentCreateWithoutSectionInput;
  DepartmentCreateOrConnectWithoutSectionInput: DepartmentCreateOrConnectWithoutSectionInput;
  ClassroomCreateWithoutSectionInput: ClassroomCreateWithoutSectionInput;
  ClassroomCreateOrConnectWithoutSectionInput: ClassroomCreateOrConnectWithoutSectionInput;
  SchoolCreateWithoutSectionInput: SchoolCreateWithoutSectionInput;
  SchoolCreateOrConnectWithoutsectionInput: SchoolCreateOrConnectWithoutsectionInput;
  DepartmentUpdateWithWhereUniqueWithoutSectionInput: DepartmentUpdateWithWhereUniqueWithoutSectionInput;
  DepartmentUpdateManyWithWhereWithoutSectionInput: DepartmentUpdateManyWithWhereWithoutSectionInput;
  DepartmentScalarWhereInput: DepartmentScalarWhereInput;
  DepartmentUpsertWithWhereUniqueWithoutSectionInput: DepartmentUpsertWithWhereUniqueWithoutSectionInput;
  ClassroomUpdateWithWhereUniqueWithoutSectionInput: ClassroomUpdateWithWhereUniqueWithoutSectionInput;
  ClassroomUpdateManyWithWhereWithoutSectionInput: ClassroomUpdateManyWithWhereWithoutSectionInput;
  ClassroomScalarWhereInput: ClassroomScalarWhereInput;
  ClassroomUpsertWithWhereUniqueWithoutSectionInput: ClassroomUpsertWithWhereUniqueWithoutSectionInput;
  SchoolUpdateWithoutSectionInput: SchoolUpdateWithoutSectionInput;
  SchoolUpsertWithoutSectionInput: SchoolUpsertWithoutSectionInput;
  TownCreateWithoutSubdivisionInput: TownCreateWithoutSubdivisionInput;
  TownCreateOrConnectWithoutSubdivisionInput: TownCreateOrConnectWithoutSubdivisionInput;
  DivisionCreateWithoutSubdivInput: DivisionCreateWithoutSubdivInput;
  DivisionCreateOrConnectWithoutsubdivInput: DivisionCreateOrConnectWithoutsubdivInput;
  TownUpdateWithWhereUniqueWithoutSubdivisionInput: TownUpdateWithWhereUniqueWithoutSubdivisionInput;
  TownUpdateManyWithWhereWithoutSubdivisionInput: TownUpdateManyWithWhereWithoutSubdivisionInput;
  TownScalarWhereInput: TownScalarWhereInput;
  TownUpsertWithWhereUniqueWithoutSubdivisionInput: TownUpsertWithWhereUniqueWithoutSubdivisionInput;
  DivisionUpdateWithoutSubdivInput: DivisionUpdateWithoutSubdivInput;
  DivisionUpsertWithoutSubdivInput: DivisionUpsertWithoutSubdivInput;
  AnnProfDeptCreateWithoutDepartmentInput: AnnProfDeptCreateWithoutDepartmentInput;
  AnnProfDeptCreateOrConnectWithoutDepartmentInput: AnnProfDeptCreateOrConnectWithoutDepartmentInput;
  SubjectCreateWithoutDepartmentInput: SubjectCreateWithoutDepartmentInput;
  SubjectCreateOrConnectWithoutDepartmentInput: SubjectCreateOrConnectWithoutDepartmentInput;
  SectionCreateWithoutDepartmentInput: SectionCreateWithoutDepartmentInput;
  SectionCreateOrConnectWithoutdepartmentInput: SectionCreateOrConnectWithoutdepartmentInput;
  AnnProfDeptUpdateWithWhereUniqueWithoutDepartmentInput: AnnProfDeptUpdateWithWhereUniqueWithoutDepartmentInput;
  AnnProfDeptUpdateManyWithWhereWithoutDepartmentInput: AnnProfDeptUpdateManyWithWhereWithoutDepartmentInput;
  AnnProfDeptScalarWhereInput: AnnProfDeptScalarWhereInput;
  AnnProfDeptUpsertWithWhereUniqueWithoutDepartmentInput: AnnProfDeptUpsertWithWhereUniqueWithoutDepartmentInput;
  SubjectUpdateWithWhereUniqueWithoutDepartmentInput: SubjectUpdateWithWhereUniqueWithoutDepartmentInput;
  SubjectUpdateManyWithWhereWithoutDepartmentInput: SubjectUpdateManyWithWhereWithoutDepartmentInput;
  SubjectScalarWhereInput: SubjectScalarWhereInput;
  SubjectUpsertWithWhereUniqueWithoutDepartmentInput: SubjectUpsertWithWhereUniqueWithoutDepartmentInput;
  SectionUpdateWithoutDepartmentInput: SectionUpdateWithoutDepartmentInput;
  SectionUpsertWithoutDepartmentInput: SectionUpsertWithoutDepartmentInput;
  AnnProfDeptCreateWithoutProfInput: AnnProfDeptCreateWithoutProfInput;
  AnnProfDeptCreateOrConnectWithoutProfInput: AnnProfDeptCreateOrConnectWithoutProfInput;
  AnnProfDeptUpdateWithWhereUniqueWithoutProfInput: AnnProfDeptUpdateWithWhereUniqueWithoutProfInput;
  AnnProfDeptUpdateManyWithWhereWithoutProfInput: AnnProfDeptUpdateManyWithWhereWithoutProfInput;
  AnnProfDeptUpsertWithWhereUniqueWithoutProfInput: AnnProfDeptUpsertWithWhereUniqueWithoutProfInput;
  NestedIntFilter: NestedIntFilter;
  SequenceCreateWithoutTermInput: SequenceCreateWithoutTermInput;
  SequenceCreateOrConnectWithoutTermInput: SequenceCreateOrConnectWithoutTermInput;
  SequenceUpdateWithWhereUniqueWithoutTermInput: SequenceUpdateWithWhereUniqueWithoutTermInput;
  SequenceUpdateManyWithWhereWithoutTermInput: SequenceUpdateManyWithWhereWithoutTermInput;
  SequenceScalarWhereInput: SequenceScalarWhereInput;
  SequenceUpsertWithWhereUniqueWithoutTermInput: SequenceUpsertWithWhereUniqueWithoutTermInput;
  AnnProfSubjDistroCreateWithoutLogbookInput: AnnProfSubjDistroCreateWithoutLogbookInput;
  AnnProfSubjDistroCreateOrConnectWithoutLogbookInput: AnnProfSubjDistroCreateOrConnectWithoutLogbookInput;
  AnnProfSubjDistroUpdateWithoutLogbookInput: AnnProfSubjDistroUpdateWithoutLogbookInput;
  AnnProfSubjDistroUpsertWithoutLogbookInput: AnnProfSubjDistroUpsertWithoutLogbookInput;
  AnnStudentClassroomCreateWithoutSchoolYearInput: AnnStudentClassroomCreateWithoutSchoolYearInput;
  AnnStudentClassroomCreateOrConnectWithoutSchoolYearInput: AnnStudentClassroomCreateOrConnectWithoutSchoolYearInput;
  AnnProfDeptCreateWithoutSchoolYearInput: AnnProfDeptCreateWithoutSchoolYearInput;
  AnnProfDeptCreateOrConnectWithoutSchoolYearInput: AnnProfDeptCreateOrConnectWithoutSchoolYearInput;
  AnnStudentClassroomUpdateWithWhereUniqueWithoutSchoolYearInput: AnnStudentClassroomUpdateWithWhereUniqueWithoutSchoolYearInput;
  AnnStudentClassroomUpdateManyWithWhereWithoutSchoolYearInput: AnnStudentClassroomUpdateManyWithWhereWithoutSchoolYearInput;
  AnnStudentClassroomScalarWhereInput: AnnStudentClassroomScalarWhereInput;
  AnnStudentClassroomUpsertWithWhereUniqueWithoutSchoolYearInput: AnnStudentClassroomUpsertWithWhereUniqueWithoutSchoolYearInput;
  AnnProfDeptUpdateWithWhereUniqueWithoutSchoolYearInput: AnnProfDeptUpdateWithWhereUniqueWithoutSchoolYearInput;
  AnnProfDeptUpdateManyWithWhereWithoutSchoolYearInput: AnnProfDeptUpdateManyWithWhereWithoutSchoolYearInput;
  AnnProfDeptUpsertWithWhereUniqueWithoutSchoolYearInput: AnnProfDeptUpsertWithWhereUniqueWithoutSchoolYearInput;
  AnnProfSubjDistroCreateWithoutSubjectInput: AnnProfSubjDistroCreateWithoutSubjectInput;
  AnnProfSubjDistroCreateOrConnectWithoutSubjectInput: AnnProfSubjDistroCreateOrConnectWithoutSubjectInput;
  DepartmentCreateWithoutSubjectInput: DepartmentCreateWithoutSubjectInput;
  DepartmentCreateOrConnectWithoutsubjectInput: DepartmentCreateOrConnectWithoutsubjectInput;
  AnnProfSubjDistroUpdateWithWhereUniqueWithoutSubjectInput: AnnProfSubjDistroUpdateWithWhereUniqueWithoutSubjectInput;
  AnnProfSubjDistroUpdateManyWithWhereWithoutSubjectInput: AnnProfSubjDistroUpdateManyWithWhereWithoutSubjectInput;
  AnnProfSubjDistroScalarWhereInput: AnnProfSubjDistroScalarWhereInput;
  AnnProfSubjDistroUpsertWithWhereUniqueWithoutSubjectInput: AnnProfSubjDistroUpsertWithWhereUniqueWithoutSubjectInput;
  DepartmentUpdateWithoutSubjectInput: DepartmentUpdateWithoutSubjectInput;
  DepartmentUpsertWithoutSubjectInput: DepartmentUpsertWithoutSubjectInput;
  ScoreCreateWithoutSequenceInput: ScoreCreateWithoutSequenceInput;
  ScoreCreateOrConnectWithoutSequenceInput: ScoreCreateOrConnectWithoutSequenceInput;
  TermCreateWithoutSequenceInput: TermCreateWithoutSequenceInput;
  TermCreateOrConnectWithoutsequenceInput: TermCreateOrConnectWithoutsequenceInput;
  ScoreUpdateWithWhereUniqueWithoutSequenceInput: ScoreUpdateWithWhereUniqueWithoutSequenceInput;
  ScoreUpdateManyWithWhereWithoutSequenceInput: ScoreUpdateManyWithWhereWithoutSequenceInput;
  ScoreScalarWhereInput: ScoreScalarWhereInput;
  ScoreUpsertWithWhereUniqueWithoutSequenceInput: ScoreUpsertWithWhereUniqueWithoutSequenceInput;
  TermUpdateWithoutSequenceInput: TermUpdateWithoutSequenceInput;
  TermUpsertWithoutSequenceInput: TermUpsertWithoutSequenceInput;
  AnnProfSubjDistroCreateWithoutAnnProfDeptInput: AnnProfSubjDistroCreateWithoutAnnProfDeptInput;
  AnnProfSubjDistroCreateOrConnectWithoutAnnProfDeptInput: AnnProfSubjDistroCreateOrConnectWithoutAnnProfDeptInput;
  DepartmentCreateWithoutAnnProfDeptInput: DepartmentCreateWithoutAnnProfDeptInput;
  DepartmentCreateOrConnectWithoutannProfDeptInput: DepartmentCreateOrConnectWithoutannProfDeptInput;
  SchoolYearCreateWithoutAnnProfDeptInput: SchoolYearCreateWithoutAnnProfDeptInput;
  SchoolYearCreateOrConnectWithoutannProfDeptInput: SchoolYearCreateOrConnectWithoutannProfDeptInput;
  ProfCreateWithoutAnnProfDeptInput: ProfCreateWithoutAnnProfDeptInput;
  ProfCreateOrConnectWithoutannProfDeptInput: ProfCreateOrConnectWithoutannProfDeptInput;
  AnnProfSubjDistroUpdateWithWhereUniqueWithoutAnnProfDeptInput: AnnProfSubjDistroUpdateWithWhereUniqueWithoutAnnProfDeptInput;
  AnnProfSubjDistroUpdateManyWithWhereWithoutAnnProfDeptInput: AnnProfSubjDistroUpdateManyWithWhereWithoutAnnProfDeptInput;
  AnnProfSubjDistroUpsertWithWhereUniqueWithoutAnnProfDeptInput: AnnProfSubjDistroUpsertWithWhereUniqueWithoutAnnProfDeptInput;
  DepartmentUpdateWithoutAnnProfDeptInput: DepartmentUpdateWithoutAnnProfDeptInput;
  DepartmentUpsertWithoutAnnProfDeptInput: DepartmentUpsertWithoutAnnProfDeptInput;
  SchoolYearUpdateWithoutAnnProfDeptInput: SchoolYearUpdateWithoutAnnProfDeptInput;
  SchoolYearUpsertWithoutAnnProfDeptInput: SchoolYearUpsertWithoutAnnProfDeptInput;
  ProfUpdateWithoutAnnProfDeptInput: ProfUpdateWithoutAnnProfDeptInput;
  ProfUpsertWithoutAnnProfDeptInput: ProfUpsertWithoutAnnProfDeptInput;
  AnnProfDeptCreateWithoutAnnProfSubjInput: AnnProfDeptCreateWithoutAnnProfSubjInput;
  AnnProfDeptCreateOrConnectWithoutannProfSubjInput: AnnProfDeptCreateOrConnectWithoutannProfSubjInput;
  SubjectCreateWithoutAnnProfSubjInput: SubjectCreateWithoutAnnProfSubjInput;
  SubjectCreateOrConnectWithoutannProfSubjInput: SubjectCreateOrConnectWithoutannProfSubjInput;
  ClassroomCreateWithoutAnnProfSubjInput: ClassroomCreateWithoutAnnProfSubjInput;
  ClassroomCreateOrConnectWithoutannProfSubjInput: ClassroomCreateOrConnectWithoutannProfSubjInput;
  ScoreCreateWithoutAnnProfSubjInput: ScoreCreateWithoutAnnProfSubjInput;
  ScoreCreateOrConnectWithoutannProfSubjInput: ScoreCreateOrConnectWithoutannProfSubjInput;
  LogbookCreateWithoutAnnProfSubjDistroInput: LogbookCreateWithoutAnnProfSubjDistroInput;
  LogbookCreateOrConnectWithoutAnnProfSubjDistroInput: LogbookCreateOrConnectWithoutAnnProfSubjDistroInput;
  AnnProfDeptUpdateWithoutAnnProfSubjInput: AnnProfDeptUpdateWithoutAnnProfSubjInput;
  AnnProfDeptUpsertWithoutAnnProfSubjInput: AnnProfDeptUpsertWithoutAnnProfSubjInput;
  SubjectUpdateWithoutAnnProfSubjInput: SubjectUpdateWithoutAnnProfSubjInput;
  SubjectUpsertWithoutAnnProfSubjInput: SubjectUpsertWithoutAnnProfSubjInput;
  ClassroomUpdateWithoutAnnProfSubjInput: ClassroomUpdateWithoutAnnProfSubjInput;
  ClassroomUpsertWithoutAnnProfSubjInput: ClassroomUpsertWithoutAnnProfSubjInput;
  ScoreUpdateWithWhereUniqueWithoutAnnProfSubjInput: ScoreUpdateWithWhereUniqueWithoutAnnProfSubjInput;
  ScoreUpdateManyWithWhereWithoutAnnProfSubjInput: ScoreUpdateManyWithWhereWithoutAnnProfSubjInput;
  ScoreUpsertWithWhereUniqueWithoutAnnProfSubjInput: ScoreUpsertWithWhereUniqueWithoutAnnProfSubjInput;
  LogbookUpdateWithWhereUniqueWithoutAnnProfSubjDistroInput: LogbookUpdateWithWhereUniqueWithoutAnnProfSubjDistroInput;
  LogbookUpdateManyWithWhereWithoutAnnProfSubjDistroInput: LogbookUpdateManyWithWhereWithoutAnnProfSubjDistroInput;
  LogbookScalarWhereInput: LogbookScalarWhereInput;
  LogbookUpsertWithWhereUniqueWithoutAnnProfSubjDistroInput: LogbookUpsertWithWhereUniqueWithoutAnnProfSubjDistroInput;
  SchoolYearCreateWithoutAnnStudentClassroomInput: SchoolYearCreateWithoutAnnStudentClassroomInput;
  SchoolYearCreateOrConnectWithoutannStudentClassroomInput: SchoolYearCreateOrConnectWithoutannStudentClassroomInput;
  ClassroomCreateWithoutAnnStudentClassroomInput: ClassroomCreateWithoutAnnStudentClassroomInput;
  ClassroomCreateOrConnectWithoutannStudentClassroomInput: ClassroomCreateOrConnectWithoutannStudentClassroomInput;
  StudentCreateWithoutAnnStudentClassroomInput: StudentCreateWithoutAnnStudentClassroomInput;
  StudentCreateOrConnectWithoutannStudentClassroomInput: StudentCreateOrConnectWithoutannStudentClassroomInput;
  ScoreCreateWithoutAnnStudentClassInput: ScoreCreateWithoutAnnStudentClassInput;
  ScoreCreateOrConnectWithoutannStudentClassInput: ScoreCreateOrConnectWithoutannStudentClassInput;
  FinanceCreateWithoutAnnStudentClassroomInput: FinanceCreateWithoutAnnStudentClassroomInput;
  FinanceWhereUniqueInput: FinanceWhereUniqueInput;
  FinanceCreateOrConnectWithoutAnnStudentClassroomInput: FinanceCreateOrConnectWithoutAnnStudentClassroomInput;
  SchoolYearUpdateWithoutAnnStudentClassroomInput: SchoolYearUpdateWithoutAnnStudentClassroomInput;
  SchoolYearUpsertWithoutAnnStudentClassroomInput: SchoolYearUpsertWithoutAnnStudentClassroomInput;
  ClassroomUpdateWithoutAnnStudentClassroomInput: ClassroomUpdateWithoutAnnStudentClassroomInput;
  ClassroomUpsertWithoutAnnStudentClassroomInput: ClassroomUpsertWithoutAnnStudentClassroomInput;
  StudentUpdateWithoutAnnStudentClassroomInput: StudentUpdateWithoutAnnStudentClassroomInput;
  StudentUpsertWithoutAnnStudentClassroomInput: StudentUpsertWithoutAnnStudentClassroomInput;
  ScoreUpdateWithWhereUniqueWithoutAnnStudentClassInput: ScoreUpdateWithWhereUniqueWithoutAnnStudentClassInput;
  ScoreUpdateManyWithWhereWithoutAnnStudentClassInput: ScoreUpdateManyWithWhereWithoutAnnStudentClassInput;
  ScoreUpsertWithWhereUniqueWithoutAnnStudentClassInput: ScoreUpsertWithWhereUniqueWithoutAnnStudentClassInput;
  FinanceUpdateWithWhereUniqueWithoutAnnStudentClassroomInput: FinanceUpdateWithWhereUniqueWithoutAnnStudentClassroomInput;
  FinanceUpdateManyWithWhereWithoutAnnStudentClassroomInput: FinanceUpdateManyWithWhereWithoutAnnStudentClassroomInput;
  FinanceScalarWhereInput: FinanceScalarWhereInput;
  FinanceUpsertWithWhereUniqueWithoutAnnStudentClassroomInput: FinanceUpsertWithWhereUniqueWithoutAnnStudentClassroomInput;
  FinanceWhereInput: FinanceWhereInput;
  AnnStudentClassroomCreateWithoutStudentInput: AnnStudentClassroomCreateWithoutStudentInput;
  AnnStudentClassroomCreateOrConnectWithoutStudentInput: AnnStudentClassroomCreateOrConnectWithoutStudentInput;
  AnnStudentClassroomUpdateWithWhereUniqueWithoutStudentInput: AnnStudentClassroomUpdateWithWhereUniqueWithoutStudentInput;
  AnnStudentClassroomUpdateManyWithWhereWithoutStudentInput: AnnStudentClassroomUpdateManyWithWhereWithoutStudentInput;
  AnnStudentClassroomUpsertWithWhereUniqueWithoutStudentInput: AnnStudentClassroomUpsertWithWhereUniqueWithoutStudentInput;
  AnnStudentClassroomCreateWithoutScoreInput: AnnStudentClassroomCreateWithoutScoreInput;
  AnnStudentClassroomCreateOrConnectWithoutscoreInput: AnnStudentClassroomCreateOrConnectWithoutscoreInput;
  AnnProfSubjDistroCreateWithoutScoreInput: AnnProfSubjDistroCreateWithoutScoreInput;
  AnnProfSubjDistroCreateOrConnectWithoutscoreInput: AnnProfSubjDistroCreateOrConnectWithoutscoreInput;
  SequenceCreateWithoutScoreInput: SequenceCreateWithoutScoreInput;
  SequenceCreateOrConnectWithoutscoreInput: SequenceCreateOrConnectWithoutscoreInput;
  AnnStudentClassroomUpdateWithWhereUniqueWithoutScoreInput: AnnStudentClassroomUpdateWithWhereUniqueWithoutScoreInput;
  AnnStudentClassroomUpdateManyWithWhereWithoutScoreInput: AnnStudentClassroomUpdateManyWithWhereWithoutScoreInput;
  AnnStudentClassroomUpsertWithWhereUniqueWithoutScoreInput: AnnStudentClassroomUpsertWithWhereUniqueWithoutScoreInput;
  AnnProfSubjDistroUpdateWithWhereUniqueWithoutScoreInput: AnnProfSubjDistroUpdateWithWhereUniqueWithoutScoreInput;
  AnnProfSubjDistroUpdateManyWithWhereWithoutScoreInput: AnnProfSubjDistroUpdateManyWithWhereWithoutScoreInput;
  AnnProfSubjDistroUpsertWithWhereUniqueWithoutScoreInput: AnnProfSubjDistroUpsertWithWhereUniqueWithoutScoreInput;
  SequenceUpdateWithoutScoreInput: SequenceUpdateWithoutScoreInput;
  SequenceUpsertWithoutScoreInput: SequenceUpsertWithoutScoreInput;
  AnnProfSubjDistroCreateWithoutClassroomInput: AnnProfSubjDistroCreateWithoutClassroomInput;
  AnnProfSubjDistroCreateOrConnectWithoutClassroomInput: AnnProfSubjDistroCreateOrConnectWithoutClassroomInput;
  AnnStudentClassroomCreateWithoutClassroomInput: AnnStudentClassroomCreateWithoutClassroomInput;
  AnnStudentClassroomCreateOrConnectWithoutClassroomInput: AnnStudentClassroomCreateOrConnectWithoutClassroomInput;
  SectionCreateWithoutClassroomInput: SectionCreateWithoutClassroomInput;
  SectionCreateOrConnectWithoutclassroomInput: SectionCreateOrConnectWithoutclassroomInput;
  AnnProfSubjDistroUpdateWithWhereUniqueWithoutClassroomInput: AnnProfSubjDistroUpdateWithWhereUniqueWithoutClassroomInput;
  AnnProfSubjDistroUpdateManyWithWhereWithoutClassroomInput: AnnProfSubjDistroUpdateManyWithWhereWithoutClassroomInput;
  AnnProfSubjDistroUpsertWithWhereUniqueWithoutClassroomInput: AnnProfSubjDistroUpsertWithWhereUniqueWithoutClassroomInput;
  AnnStudentClassroomUpdateWithWhereUniqueWithoutClassroomInput: AnnStudentClassroomUpdateWithWhereUniqueWithoutClassroomInput;
  AnnStudentClassroomUpdateManyWithWhereWithoutClassroomInput: AnnStudentClassroomUpdateManyWithWhereWithoutClassroomInput;
  AnnStudentClassroomUpsertWithWhereUniqueWithoutClassroomInput: AnnStudentClassroomUpsertWithWhereUniqueWithoutClassroomInput;
  SectionUpdateWithoutClassroomInput: SectionUpdateWithoutClassroomInput;
  SectionUpsertWithoutClassroomInput: SectionUpsertWithoutClassroomInput;
  DivisionUpdateWithoutRegionInput: DivisionUpdateWithoutRegionInput;
  DivisionUpdateManyMutationInput: DivisionUpdateManyMutationInput;
  SubdivisionUpdateWithoutDivisionInput: SubdivisionUpdateWithoutDivisionInput;
  SchoolUpdateWithoutTownInput: SchoolUpdateWithoutTownInput;
  SchoolUpdateManyMutationInput: SchoolUpdateManyMutationInput;
  SectionUpdateWithoutSchoolInput: SectionUpdateWithoutSchoolInput;
  DepartmentUpdateWithoutSectionInput: DepartmentUpdateWithoutSectionInput;
  DepartmentUpdateManyMutationInput: DepartmentUpdateManyMutationInput;
  ClassroomUpdateWithoutSectionInput: ClassroomUpdateWithoutSectionInput;
  ClassroomUpdateManyMutationInput: ClassroomUpdateManyMutationInput;
  TownUpdateWithoutSubdivisionInput: TownUpdateWithoutSubdivisionInput;
  TownUpdateManyMutationInput: TownUpdateManyMutationInput;
  AnnProfDeptUpdateWithoutDepartmentInput: AnnProfDeptUpdateWithoutDepartmentInput;
  AnnProfDeptUpdateManyMutationInput: AnnProfDeptUpdateManyMutationInput;
  SubjectUpdateWithoutDepartmentInput: SubjectUpdateWithoutDepartmentInput;
  SubjectUpdateManyMutationInput: SubjectUpdateManyMutationInput;
  AnnProfDeptUpdateWithoutProfInput: AnnProfDeptUpdateWithoutProfInput;
  SequenceUpdateWithoutTermInput: SequenceUpdateWithoutTermInput;
  SequenceUpdateManyMutationInput: SequenceUpdateManyMutationInput;
  AnnStudentClassroomUpdateWithoutSchoolYearInput: AnnStudentClassroomUpdateWithoutSchoolYearInput;
  AnnStudentClassroomUpdateManyMutationInput: AnnStudentClassroomUpdateManyMutationInput;
  AnnProfDeptUpdateWithoutSchoolYearInput: AnnProfDeptUpdateWithoutSchoolYearInput;
  AnnProfSubjDistroUpdateWithoutSubjectInput: AnnProfSubjDistroUpdateWithoutSubjectInput;
  AnnProfSubjDistroUpdateManyMutationInput: AnnProfSubjDistroUpdateManyMutationInput;
  ScoreUpdateWithoutSequenceInput: ScoreUpdateWithoutSequenceInput;
  ScoreUpdateManyMutationInput: ScoreUpdateManyMutationInput;
  AnnProfSubjDistroUpdateWithoutAnnProfDeptInput: AnnProfSubjDistroUpdateWithoutAnnProfDeptInput;
  ScoreUpdateWithoutAnnProfSubjInput: ScoreUpdateWithoutAnnProfSubjInput;
  LogbookUpdateWithoutAnnProfSubjDistroInput: LogbookUpdateWithoutAnnProfSubjDistroInput;
  LogbookUpdateManyMutationInput: LogbookUpdateManyMutationInput;
  ScoreUpdateWithoutAnnStudentClassInput: ScoreUpdateWithoutAnnStudentClassInput;
  FinanceUpdateWithoutAnnStudentClassroomInput: FinanceUpdateWithoutAnnStudentClassroomInput;
  FinanceUpdateManyMutationInput: FinanceUpdateManyMutationInput;
  StringNullableFilter: StringNullableFilter;
  AnnStudentClassroomUpdateWithoutStudentInput: AnnStudentClassroomUpdateWithoutStudentInput;
  AnnStudentClassroomUpdateWithoutScoreInput: AnnStudentClassroomUpdateWithoutScoreInput;
  AnnProfSubjDistroUpdateWithoutScoreInput: AnnProfSubjDistroUpdateWithoutScoreInput;
  AnnProfSubjDistroUpdateWithoutClassroomInput: AnnProfSubjDistroUpdateWithoutClassroomInput;
  AnnStudentClassroomUpdateWithoutClassroomInput: AnnStudentClassroomUpdateWithoutClassroomInput;
  NestedStringNullableFilter: NestedStringNullableFilter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  User: User;
  String: Scalars['String'];
  Region: Region;
  Division: Division;
  Subdivision: Subdivision;
  Town: Town;
  School: School;
  Section: Section;
  Department: Department;
  Prof: Prof;
  Int: Scalars['Int'];
  Sequence: Sequence;
  AnnProfDept: AnnProfDept;
  AnnProfSubjDistro: AnnProfSubjDistro;
  AnnStudentClassroom: AnnStudentClassroom;
  Classroom: Classroom;
  Logbook: Logbook;
  SchoolYear: SchoolYear;
  Student: Student;
  Subject: Subject;
  Term: Term;
  Score: Score;
  Query: {};
  Mutation: {};
  DateTime: Scalars['DateTime'];
  UserCreateInput: UserCreateInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  UserUpdateInput: UserUpdateInput;
  BatchPayload: BatchPayload;
  UserWhereInput: UserWhereInput;
  RegionCreateInput: RegionCreateInput;
  RegionWhereUniqueInput: RegionWhereUniqueInput;
  RegionUpdateInput: RegionUpdateInput;
  RegionWhereInput: RegionWhereInput;
  DivisionCreateInput: DivisionCreateInput;
  DivisionWhereUniqueInput: DivisionWhereUniqueInput;
  DivisionUpdateInput: DivisionUpdateInput;
  DivisionWhereInput: DivisionWhereInput;
  TownCreateInput: TownCreateInput;
  TownWhereUniqueInput: TownWhereUniqueInput;
  TownUpdateInput: TownUpdateInput;
  TownWhereInput: TownWhereInput;
  SchoolCreateInput: SchoolCreateInput;
  SchoolWhereUniqueInput: SchoolWhereUniqueInput;
  SchoolUpdateInput: SchoolUpdateInput;
  SchoolWhereInput: SchoolWhereInput;
  SectionCreateInput: SectionCreateInput;
  SectionWhereUniqueInput: SectionWhereUniqueInput;
  SectionUpdateInput: SectionUpdateInput;
  SectionUpdateManyMutationInput: SectionUpdateManyMutationInput;
  SectionWhereInput: SectionWhereInput;
  SubdivisionUpdateManyMutationInput: SubdivisionUpdateManyMutationInput;
  SubdivisionWhereInput: SubdivisionWhereInput;
  SubdivisionCreateInput: SubdivisionCreateInput;
  SubdivisionWhereUniqueInput: SubdivisionWhereUniqueInput;
  SubdivisionUpdateInput: SubdivisionUpdateInput;
  DepartmentWhereInput: DepartmentWhereInput;
  DepartmentCreateInput: DepartmentCreateInput;
  DepartmentWhereUniqueInput: DepartmentWhereUniqueInput;
  DepartmentUpdateInput: DepartmentUpdateInput;
  ProfCreateInput: ProfCreateInput;
  ProfWhereUniqueInput: ProfWhereUniqueInput;
  ProfUpdateInput: ProfUpdateInput;
  ProfWhereInput: ProfWhereInput;
  TermCreateInput: TermCreateInput;
  TermWhereUniqueInput: TermWhereUniqueInput;
  TermUpdateInput: TermUpdateInput;
  TermWhereInput: TermWhereInput;
  LogbookCreateInput: LogbookCreateInput;
  LogbookWhereUniqueInput: LogbookWhereUniqueInput;
  LogbookUpdateInput: LogbookUpdateInput;
  LogbookWhereInput: LogbookWhereInput;
  SchoolYearCreateInput: SchoolYearCreateInput;
  SchoolYearWhereUniqueInput: SchoolYearWhereUniqueInput;
  SchoolYearUpdateInput: SchoolYearUpdateInput;
  SchoolYearWhereInput: SchoolYearWhereInput;
  SubjectCreateInput: SubjectCreateInput;
  SubjectWhereUniqueInput: SubjectWhereUniqueInput;
  SubjectUpdateInput: SubjectUpdateInput;
  SubjectWhereInput: SubjectWhereInput;
  SequenceCreateInput: SequenceCreateInput;
  SequenceWhereUniqueInput: SequenceWhereUniqueInput;
  SequenceUpdateInput: SequenceUpdateInput;
  SequenceWhereInput: SequenceWhereInput;
  AnnProfDeptCreateInput: AnnProfDeptCreateInput;
  AnnProfDeptWhereUniqueInput: AnnProfDeptWhereUniqueInput;
  AnnProfDeptUpdateInput: AnnProfDeptUpdateInput;
  AnnProfDeptWhereInput: AnnProfDeptWhereInput;
  AnnProfSubjDistroCreateInput: AnnProfSubjDistroCreateInput;
  AnnProfSubjDistroWhereUniqueInput: AnnProfSubjDistroWhereUniqueInput;
  AnnProfSubjDistroUpdateInput: AnnProfSubjDistroUpdateInput;
  AnnProfSubjDistroWhereInput: AnnProfSubjDistroWhereInput;
  AnnStudentClassroomCreateInput: AnnStudentClassroomCreateInput;
  AnnStudentClassroomWhereUniqueInput: AnnStudentClassroomWhereUniqueInput;
  AnnStudentClassroomUpdateInput: AnnStudentClassroomUpdateInput;
  AnnStudentClassroomWhereInput: AnnStudentClassroomWhereInput;
  StudentCreateInput: StudentCreateInput;
  StudentWhereUniqueInput: StudentWhereUniqueInput;
  StudentUpdateInput: StudentUpdateInput;
  StudentWhereInput: StudentWhereInput;
  ScoreCreateInput: ScoreCreateInput;
  ScoreWhereUniqueInput: ScoreWhereUniqueInput;
  ScoreUpdateInput: ScoreUpdateInput;
  ScoreWhereInput: ScoreWhereInput;
  ClassroomCreateInput: ClassroomCreateInput;
  ClassroomWhereUniqueInput: ClassroomWhereUniqueInput;
  ClassroomUpdateInput: ClassroomUpdateInput;
  ClassroomWhereInput: ClassroomWhereInput;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  DateTimeFilter: DateTimeFilter;
  DivisionCreateManyWithoutRegionInput: DivisionCreateManyWithoutRegionInput;
  DivisionUpdateManyWithoutRegionInput: DivisionUpdateManyWithoutRegionInput;
  DivisionListRelationFilter: DivisionListRelationFilter;
  SubdivisionCreateManyWithoutDivisionInput: SubdivisionCreateManyWithoutDivisionInput;
  RegionCreateOneWithoutDivisionInput: RegionCreateOneWithoutDivisionInput;
  SubdivisionUpdateManyWithoutDivisionInput: SubdivisionUpdateManyWithoutDivisionInput;
  RegionUpdateOneRequiredWithoutDivisionInput: RegionUpdateOneRequiredWithoutDivisionInput;
  SubdivisionListRelationFilter: SubdivisionListRelationFilter;
  SchoolCreateManyWithoutTownInput: SchoolCreateManyWithoutTownInput;
  SubdivisionCreateOneWithoutTownInput: SubdivisionCreateOneWithoutTownInput;
  SchoolUpdateManyWithoutTownInput: SchoolUpdateManyWithoutTownInput;
  SubdivisionUpdateOneRequiredWithoutTownInput: SubdivisionUpdateOneRequiredWithoutTownInput;
  SchoolListRelationFilter: SchoolListRelationFilter;
  SectionCreateManyWithoutSchoolInput: SectionCreateManyWithoutSchoolInput;
  TownCreateOneWithoutSchoolInput: TownCreateOneWithoutSchoolInput;
  SectionUpdateManyWithoutSchoolInput: SectionUpdateManyWithoutSchoolInput;
  TownUpdateOneRequiredWithoutSchoolInput: TownUpdateOneRequiredWithoutSchoolInput;
  SectionListRelationFilter: SectionListRelationFilter;
  DepartmentCreateManyWithoutSectionInput: DepartmentCreateManyWithoutSectionInput;
  ClassroomCreateManyWithoutSectionInput: ClassroomCreateManyWithoutSectionInput;
  SchoolCreateOneWithoutSectionInput: SchoolCreateOneWithoutSectionInput;
  DepartmentUpdateManyWithoutSectionInput: DepartmentUpdateManyWithoutSectionInput;
  ClassroomUpdateManyWithoutSectionInput: ClassroomUpdateManyWithoutSectionInput;
  SchoolUpdateOneRequiredWithoutSectionInput: SchoolUpdateOneRequiredWithoutSectionInput;
  DepartmentListRelationFilter: DepartmentListRelationFilter;
  ClassroomListRelationFilter: ClassroomListRelationFilter;
  TownListRelationFilter: TownListRelationFilter;
  TownCreateManyWithoutSubdivisionInput: TownCreateManyWithoutSubdivisionInput;
  DivisionCreateOneWithoutSubdivInput: DivisionCreateOneWithoutSubdivInput;
  TownUpdateManyWithoutSubdivisionInput: TownUpdateManyWithoutSubdivisionInput;
  DivisionUpdateOneRequiredWithoutSubdivInput: DivisionUpdateOneRequiredWithoutSubdivInput;
  AnnProfDeptListRelationFilter: AnnProfDeptListRelationFilter;
  SubjectListRelationFilter: SubjectListRelationFilter;
  AnnProfDeptCreateManyWithoutDepartmentInput: AnnProfDeptCreateManyWithoutDepartmentInput;
  SubjectCreateManyWithoutDepartmentInput: SubjectCreateManyWithoutDepartmentInput;
  SectionCreateOneWithoutDepartmentInput: SectionCreateOneWithoutDepartmentInput;
  AnnProfDeptUpdateManyWithoutDepartmentInput: AnnProfDeptUpdateManyWithoutDepartmentInput;
  SubjectUpdateManyWithoutDepartmentInput: SubjectUpdateManyWithoutDepartmentInput;
  SectionUpdateOneRequiredWithoutDepartmentInput: SectionUpdateOneRequiredWithoutDepartmentInput;
  AnnProfDeptCreateManyWithoutProfInput: AnnProfDeptCreateManyWithoutProfInput;
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  AnnProfDeptUpdateManyWithoutProfInput: AnnProfDeptUpdateManyWithoutProfInput;
  IntFilter: IntFilter;
  SequenceCreateManyWithoutTermInput: SequenceCreateManyWithoutTermInput;
  SequenceUpdateManyWithoutTermInput: SequenceUpdateManyWithoutTermInput;
  SequenceListRelationFilter: SequenceListRelationFilter;
  AnnProfSubjDistroCreateOneWithoutLogbookInput: AnnProfSubjDistroCreateOneWithoutLogbookInput;
  AnnProfSubjDistroUpdateOneRequiredWithoutLogbookInput: AnnProfSubjDistroUpdateOneRequiredWithoutLogbookInput;
  AnnStudentClassroomCreateManyWithoutSchoolYearInput: AnnStudentClassroomCreateManyWithoutSchoolYearInput;
  AnnProfDeptCreateManyWithoutSchoolYearInput: AnnProfDeptCreateManyWithoutSchoolYearInput;
  AnnStudentClassroomUpdateManyWithoutSchoolYearInput: AnnStudentClassroomUpdateManyWithoutSchoolYearInput;
  AnnProfDeptUpdateManyWithoutSchoolYearInput: AnnProfDeptUpdateManyWithoutSchoolYearInput;
  AnnStudentClassroomListRelationFilter: AnnStudentClassroomListRelationFilter;
  AnnProfSubjDistroCreateManyWithoutSubjectInput: AnnProfSubjDistroCreateManyWithoutSubjectInput;
  DepartmentCreateOneWithoutSubjectInput: DepartmentCreateOneWithoutSubjectInput;
  AnnProfSubjDistroUpdateManyWithoutSubjectInput: AnnProfSubjDistroUpdateManyWithoutSubjectInput;
  DepartmentUpdateOneRequiredWithoutSubjectInput: DepartmentUpdateOneRequiredWithoutSubjectInput;
  AnnProfSubjDistroListRelationFilter: AnnProfSubjDistroListRelationFilter;
  ScoreCreateManyWithoutSequenceInput: ScoreCreateManyWithoutSequenceInput;
  TermCreateOneWithoutSequenceInput: TermCreateOneWithoutSequenceInput;
  ScoreUpdateManyWithoutSequenceInput: ScoreUpdateManyWithoutSequenceInput;
  TermUpdateOneRequiredWithoutSequenceInput: TermUpdateOneRequiredWithoutSequenceInput;
  ScoreListRelationFilter: ScoreListRelationFilter;
  AnnProfSubjDistroCreateManyWithoutAnnProfDeptInput: AnnProfSubjDistroCreateManyWithoutAnnProfDeptInput;
  DepartmentCreateOneWithoutAnnProfDeptInput: DepartmentCreateOneWithoutAnnProfDeptInput;
  SchoolYearCreateOneWithoutAnnProfDeptInput: SchoolYearCreateOneWithoutAnnProfDeptInput;
  ProfCreateOneWithoutAnnProfDeptInput: ProfCreateOneWithoutAnnProfDeptInput;
  AnnProfSubjDistroUpdateManyWithoutAnnProfDeptInput: AnnProfSubjDistroUpdateManyWithoutAnnProfDeptInput;
  DepartmentUpdateOneRequiredWithoutAnnProfDeptInput: DepartmentUpdateOneRequiredWithoutAnnProfDeptInput;
  SchoolYearUpdateOneRequiredWithoutAnnProfDeptInput: SchoolYearUpdateOneRequiredWithoutAnnProfDeptInput;
  ProfUpdateOneRequiredWithoutAnnProfDeptInput: ProfUpdateOneRequiredWithoutAnnProfDeptInput;
  AnnProfDeptCreateOneWithoutAnnProfSubjInput: AnnProfDeptCreateOneWithoutAnnProfSubjInput;
  SubjectCreateOneWithoutAnnProfSubjInput: SubjectCreateOneWithoutAnnProfSubjInput;
  ClassroomCreateOneWithoutAnnProfSubjInput: ClassroomCreateOneWithoutAnnProfSubjInput;
  ScoreCreateManyWithoutAnnProfSubjInput: ScoreCreateManyWithoutAnnProfSubjInput;
  LogbookCreateManyWithoutAnnProfSubjDistroInput: LogbookCreateManyWithoutAnnProfSubjDistroInput;
  AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput: AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput;
  SubjectUpdateOneRequiredWithoutAnnProfSubjInput: SubjectUpdateOneRequiredWithoutAnnProfSubjInput;
  ClassroomUpdateOneRequiredWithoutAnnProfSubjInput: ClassroomUpdateOneRequiredWithoutAnnProfSubjInput;
  ScoreUpdateManyWithoutAnnProfSubjInput: ScoreUpdateManyWithoutAnnProfSubjInput;
  LogbookUpdateManyWithoutAnnProfSubjDistroInput: LogbookUpdateManyWithoutAnnProfSubjDistroInput;
  LogbookListRelationFilter: LogbookListRelationFilter;
  SchoolYearCreateOneWithoutAnnStudentClassroomInput: SchoolYearCreateOneWithoutAnnStudentClassroomInput;
  ClassroomCreateOneWithoutAnnStudentClassroomInput: ClassroomCreateOneWithoutAnnStudentClassroomInput;
  StudentCreateOneWithoutAnnStudentClassroomInput: StudentCreateOneWithoutAnnStudentClassroomInput;
  ScoreCreateManyWithoutAnnStudentClassInput: ScoreCreateManyWithoutAnnStudentClassInput;
  FinanceCreateManyWithoutAnnStudentClassroomInput: FinanceCreateManyWithoutAnnStudentClassroomInput;
  SchoolYearUpdateOneRequiredWithoutAnnStudentClassroomInput: SchoolYearUpdateOneRequiredWithoutAnnStudentClassroomInput;
  ClassroomUpdateOneRequiredWithoutAnnStudentClassroomInput: ClassroomUpdateOneRequiredWithoutAnnStudentClassroomInput;
  StudentUpdateOneRequiredWithoutAnnStudentClassroomInput: StudentUpdateOneRequiredWithoutAnnStudentClassroomInput;
  ScoreUpdateManyWithoutAnnStudentClassInput: ScoreUpdateManyWithoutAnnStudentClassInput;
  FinanceUpdateManyWithoutAnnStudentClassroomInput: FinanceUpdateManyWithoutAnnStudentClassroomInput;
  FinanceListRelationFilter: FinanceListRelationFilter;
  AnnStudentClassroomCreateManyWithoutStudentInput: AnnStudentClassroomCreateManyWithoutStudentInput;
  AnnStudentClassroomUpdateManyWithoutStudentInput: AnnStudentClassroomUpdateManyWithoutStudentInput;
  AnnStudentClassroomCreateManyWithoutScoreInput: AnnStudentClassroomCreateManyWithoutScoreInput;
  AnnProfSubjDistroCreateManyWithoutScoreInput: AnnProfSubjDistroCreateManyWithoutScoreInput;
  SequenceCreateOneWithoutScoreInput: SequenceCreateOneWithoutScoreInput;
  AnnStudentClassroomUpdateManyWithoutScoreInput: AnnStudentClassroomUpdateManyWithoutScoreInput;
  AnnProfSubjDistroUpdateManyWithoutScoreInput: AnnProfSubjDistroUpdateManyWithoutScoreInput;
  SequenceUpdateOneRequiredWithoutScoreInput: SequenceUpdateOneRequiredWithoutScoreInput;
  AnnProfSubjDistroCreateManyWithoutClassroomInput: AnnProfSubjDistroCreateManyWithoutClassroomInput;
  AnnStudentClassroomCreateManyWithoutClassroomInput: AnnStudentClassroomCreateManyWithoutClassroomInput;
  SectionCreateOneWithoutClassroomInput: SectionCreateOneWithoutClassroomInput;
  AnnProfSubjDistroUpdateManyWithoutClassroomInput: AnnProfSubjDistroUpdateManyWithoutClassroomInput;
  AnnStudentClassroomUpdateManyWithoutClassroomInput: AnnStudentClassroomUpdateManyWithoutClassroomInput;
  SectionUpdateOneRequiredWithoutClassroomInput: SectionUpdateOneRequiredWithoutClassroomInput;
  NestedStringFilter: NestedStringFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  DivisionCreateWithoutRegionInput: DivisionCreateWithoutRegionInput;
  DivisionCreateOrConnectWithoutRegionInput: DivisionCreateOrConnectWithoutRegionInput;
  DivisionUpdateWithWhereUniqueWithoutRegionInput: DivisionUpdateWithWhereUniqueWithoutRegionInput;
  DivisionUpdateManyWithWhereWithoutRegionInput: DivisionUpdateManyWithWhereWithoutRegionInput;
  DivisionScalarWhereInput: DivisionScalarWhereInput;
  DivisionUpsertWithWhereUniqueWithoutRegionInput: DivisionUpsertWithWhereUniqueWithoutRegionInput;
  SubdivisionCreateWithoutDivisionInput: SubdivisionCreateWithoutDivisionInput;
  SubdivisionCreateOrConnectWithoutDivisionInput: SubdivisionCreateOrConnectWithoutDivisionInput;
  RegionCreateWithoutDivisionInput: RegionCreateWithoutDivisionInput;
  RegionCreateOrConnectWithoutdivisionInput: RegionCreateOrConnectWithoutdivisionInput;
  SubdivisionUpdateWithWhereUniqueWithoutDivisionInput: SubdivisionUpdateWithWhereUniqueWithoutDivisionInput;
  SubdivisionUpdateManyWithWhereWithoutDivisionInput: SubdivisionUpdateManyWithWhereWithoutDivisionInput;
  SubdivisionScalarWhereInput: SubdivisionScalarWhereInput;
  SubdivisionUpsertWithWhereUniqueWithoutDivisionInput: SubdivisionUpsertWithWhereUniqueWithoutDivisionInput;
  RegionUpdateWithoutDivisionInput: RegionUpdateWithoutDivisionInput;
  RegionUpsertWithoutDivisionInput: RegionUpsertWithoutDivisionInput;
  SchoolCreateWithoutTownInput: SchoolCreateWithoutTownInput;
  SchoolCreateOrConnectWithoutTownInput: SchoolCreateOrConnectWithoutTownInput;
  SubdivisionCreateWithoutTownInput: SubdivisionCreateWithoutTownInput;
  SubdivisionCreateOrConnectWithouttownInput: SubdivisionCreateOrConnectWithouttownInput;
  SchoolUpdateWithWhereUniqueWithoutTownInput: SchoolUpdateWithWhereUniqueWithoutTownInput;
  SchoolUpdateManyWithWhereWithoutTownInput: SchoolUpdateManyWithWhereWithoutTownInput;
  SchoolScalarWhereInput: SchoolScalarWhereInput;
  SchoolUpsertWithWhereUniqueWithoutTownInput: SchoolUpsertWithWhereUniqueWithoutTownInput;
  SubdivisionUpdateWithoutTownInput: SubdivisionUpdateWithoutTownInput;
  SubdivisionUpsertWithoutTownInput: SubdivisionUpsertWithoutTownInput;
  SectionCreateWithoutSchoolInput: SectionCreateWithoutSchoolInput;
  SectionCreateOrConnectWithoutSchoolInput: SectionCreateOrConnectWithoutSchoolInput;
  TownCreateWithoutSchoolInput: TownCreateWithoutSchoolInput;
  TownCreateOrConnectWithoutschoolInput: TownCreateOrConnectWithoutschoolInput;
  SectionUpdateWithWhereUniqueWithoutSchoolInput: SectionUpdateWithWhereUniqueWithoutSchoolInput;
  SectionUpdateManyWithWhereWithoutSchoolInput: SectionUpdateManyWithWhereWithoutSchoolInput;
  SectionScalarWhereInput: SectionScalarWhereInput;
  SectionUpsertWithWhereUniqueWithoutSchoolInput: SectionUpsertWithWhereUniqueWithoutSchoolInput;
  TownUpdateWithoutSchoolInput: TownUpdateWithoutSchoolInput;
  TownUpsertWithoutSchoolInput: TownUpsertWithoutSchoolInput;
  DepartmentCreateWithoutSectionInput: DepartmentCreateWithoutSectionInput;
  DepartmentCreateOrConnectWithoutSectionInput: DepartmentCreateOrConnectWithoutSectionInput;
  ClassroomCreateWithoutSectionInput: ClassroomCreateWithoutSectionInput;
  ClassroomCreateOrConnectWithoutSectionInput: ClassroomCreateOrConnectWithoutSectionInput;
  SchoolCreateWithoutSectionInput: SchoolCreateWithoutSectionInput;
  SchoolCreateOrConnectWithoutsectionInput: SchoolCreateOrConnectWithoutsectionInput;
  DepartmentUpdateWithWhereUniqueWithoutSectionInput: DepartmentUpdateWithWhereUniqueWithoutSectionInput;
  DepartmentUpdateManyWithWhereWithoutSectionInput: DepartmentUpdateManyWithWhereWithoutSectionInput;
  DepartmentScalarWhereInput: DepartmentScalarWhereInput;
  DepartmentUpsertWithWhereUniqueWithoutSectionInput: DepartmentUpsertWithWhereUniqueWithoutSectionInput;
  ClassroomUpdateWithWhereUniqueWithoutSectionInput: ClassroomUpdateWithWhereUniqueWithoutSectionInput;
  ClassroomUpdateManyWithWhereWithoutSectionInput: ClassroomUpdateManyWithWhereWithoutSectionInput;
  ClassroomScalarWhereInput: ClassroomScalarWhereInput;
  ClassroomUpsertWithWhereUniqueWithoutSectionInput: ClassroomUpsertWithWhereUniqueWithoutSectionInput;
  SchoolUpdateWithoutSectionInput: SchoolUpdateWithoutSectionInput;
  SchoolUpsertWithoutSectionInput: SchoolUpsertWithoutSectionInput;
  TownCreateWithoutSubdivisionInput: TownCreateWithoutSubdivisionInput;
  TownCreateOrConnectWithoutSubdivisionInput: TownCreateOrConnectWithoutSubdivisionInput;
  DivisionCreateWithoutSubdivInput: DivisionCreateWithoutSubdivInput;
  DivisionCreateOrConnectWithoutsubdivInput: DivisionCreateOrConnectWithoutsubdivInput;
  TownUpdateWithWhereUniqueWithoutSubdivisionInput: TownUpdateWithWhereUniqueWithoutSubdivisionInput;
  TownUpdateManyWithWhereWithoutSubdivisionInput: TownUpdateManyWithWhereWithoutSubdivisionInput;
  TownScalarWhereInput: TownScalarWhereInput;
  TownUpsertWithWhereUniqueWithoutSubdivisionInput: TownUpsertWithWhereUniqueWithoutSubdivisionInput;
  DivisionUpdateWithoutSubdivInput: DivisionUpdateWithoutSubdivInput;
  DivisionUpsertWithoutSubdivInput: DivisionUpsertWithoutSubdivInput;
  AnnProfDeptCreateWithoutDepartmentInput: AnnProfDeptCreateWithoutDepartmentInput;
  AnnProfDeptCreateOrConnectWithoutDepartmentInput: AnnProfDeptCreateOrConnectWithoutDepartmentInput;
  SubjectCreateWithoutDepartmentInput: SubjectCreateWithoutDepartmentInput;
  SubjectCreateOrConnectWithoutDepartmentInput: SubjectCreateOrConnectWithoutDepartmentInput;
  SectionCreateWithoutDepartmentInput: SectionCreateWithoutDepartmentInput;
  SectionCreateOrConnectWithoutdepartmentInput: SectionCreateOrConnectWithoutdepartmentInput;
  AnnProfDeptUpdateWithWhereUniqueWithoutDepartmentInput: AnnProfDeptUpdateWithWhereUniqueWithoutDepartmentInput;
  AnnProfDeptUpdateManyWithWhereWithoutDepartmentInput: AnnProfDeptUpdateManyWithWhereWithoutDepartmentInput;
  AnnProfDeptScalarWhereInput: AnnProfDeptScalarWhereInput;
  AnnProfDeptUpsertWithWhereUniqueWithoutDepartmentInput: AnnProfDeptUpsertWithWhereUniqueWithoutDepartmentInput;
  SubjectUpdateWithWhereUniqueWithoutDepartmentInput: SubjectUpdateWithWhereUniqueWithoutDepartmentInput;
  SubjectUpdateManyWithWhereWithoutDepartmentInput: SubjectUpdateManyWithWhereWithoutDepartmentInput;
  SubjectScalarWhereInput: SubjectScalarWhereInput;
  SubjectUpsertWithWhereUniqueWithoutDepartmentInput: SubjectUpsertWithWhereUniqueWithoutDepartmentInput;
  SectionUpdateWithoutDepartmentInput: SectionUpdateWithoutDepartmentInput;
  SectionUpsertWithoutDepartmentInput: SectionUpsertWithoutDepartmentInput;
  AnnProfDeptCreateWithoutProfInput: AnnProfDeptCreateWithoutProfInput;
  AnnProfDeptCreateOrConnectWithoutProfInput: AnnProfDeptCreateOrConnectWithoutProfInput;
  AnnProfDeptUpdateWithWhereUniqueWithoutProfInput: AnnProfDeptUpdateWithWhereUniqueWithoutProfInput;
  AnnProfDeptUpdateManyWithWhereWithoutProfInput: AnnProfDeptUpdateManyWithWhereWithoutProfInput;
  AnnProfDeptUpsertWithWhereUniqueWithoutProfInput: AnnProfDeptUpsertWithWhereUniqueWithoutProfInput;
  NestedIntFilter: NestedIntFilter;
  SequenceCreateWithoutTermInput: SequenceCreateWithoutTermInput;
  SequenceCreateOrConnectWithoutTermInput: SequenceCreateOrConnectWithoutTermInput;
  SequenceUpdateWithWhereUniqueWithoutTermInput: SequenceUpdateWithWhereUniqueWithoutTermInput;
  SequenceUpdateManyWithWhereWithoutTermInput: SequenceUpdateManyWithWhereWithoutTermInput;
  SequenceScalarWhereInput: SequenceScalarWhereInput;
  SequenceUpsertWithWhereUniqueWithoutTermInput: SequenceUpsertWithWhereUniqueWithoutTermInput;
  AnnProfSubjDistroCreateWithoutLogbookInput: AnnProfSubjDistroCreateWithoutLogbookInput;
  AnnProfSubjDistroCreateOrConnectWithoutLogbookInput: AnnProfSubjDistroCreateOrConnectWithoutLogbookInput;
  AnnProfSubjDistroUpdateWithoutLogbookInput: AnnProfSubjDistroUpdateWithoutLogbookInput;
  AnnProfSubjDistroUpsertWithoutLogbookInput: AnnProfSubjDistroUpsertWithoutLogbookInput;
  AnnStudentClassroomCreateWithoutSchoolYearInput: AnnStudentClassroomCreateWithoutSchoolYearInput;
  AnnStudentClassroomCreateOrConnectWithoutSchoolYearInput: AnnStudentClassroomCreateOrConnectWithoutSchoolYearInput;
  AnnProfDeptCreateWithoutSchoolYearInput: AnnProfDeptCreateWithoutSchoolYearInput;
  AnnProfDeptCreateOrConnectWithoutSchoolYearInput: AnnProfDeptCreateOrConnectWithoutSchoolYearInput;
  AnnStudentClassroomUpdateWithWhereUniqueWithoutSchoolYearInput: AnnStudentClassroomUpdateWithWhereUniqueWithoutSchoolYearInput;
  AnnStudentClassroomUpdateManyWithWhereWithoutSchoolYearInput: AnnStudentClassroomUpdateManyWithWhereWithoutSchoolYearInput;
  AnnStudentClassroomScalarWhereInput: AnnStudentClassroomScalarWhereInput;
  AnnStudentClassroomUpsertWithWhereUniqueWithoutSchoolYearInput: AnnStudentClassroomUpsertWithWhereUniqueWithoutSchoolYearInput;
  AnnProfDeptUpdateWithWhereUniqueWithoutSchoolYearInput: AnnProfDeptUpdateWithWhereUniqueWithoutSchoolYearInput;
  AnnProfDeptUpdateManyWithWhereWithoutSchoolYearInput: AnnProfDeptUpdateManyWithWhereWithoutSchoolYearInput;
  AnnProfDeptUpsertWithWhereUniqueWithoutSchoolYearInput: AnnProfDeptUpsertWithWhereUniqueWithoutSchoolYearInput;
  AnnProfSubjDistroCreateWithoutSubjectInput: AnnProfSubjDistroCreateWithoutSubjectInput;
  AnnProfSubjDistroCreateOrConnectWithoutSubjectInput: AnnProfSubjDistroCreateOrConnectWithoutSubjectInput;
  DepartmentCreateWithoutSubjectInput: DepartmentCreateWithoutSubjectInput;
  DepartmentCreateOrConnectWithoutsubjectInput: DepartmentCreateOrConnectWithoutsubjectInput;
  AnnProfSubjDistroUpdateWithWhereUniqueWithoutSubjectInput: AnnProfSubjDistroUpdateWithWhereUniqueWithoutSubjectInput;
  AnnProfSubjDistroUpdateManyWithWhereWithoutSubjectInput: AnnProfSubjDistroUpdateManyWithWhereWithoutSubjectInput;
  AnnProfSubjDistroScalarWhereInput: AnnProfSubjDistroScalarWhereInput;
  AnnProfSubjDistroUpsertWithWhereUniqueWithoutSubjectInput: AnnProfSubjDistroUpsertWithWhereUniqueWithoutSubjectInput;
  DepartmentUpdateWithoutSubjectInput: DepartmentUpdateWithoutSubjectInput;
  DepartmentUpsertWithoutSubjectInput: DepartmentUpsertWithoutSubjectInput;
  ScoreCreateWithoutSequenceInput: ScoreCreateWithoutSequenceInput;
  ScoreCreateOrConnectWithoutSequenceInput: ScoreCreateOrConnectWithoutSequenceInput;
  TermCreateWithoutSequenceInput: TermCreateWithoutSequenceInput;
  TermCreateOrConnectWithoutsequenceInput: TermCreateOrConnectWithoutsequenceInput;
  ScoreUpdateWithWhereUniqueWithoutSequenceInput: ScoreUpdateWithWhereUniqueWithoutSequenceInput;
  ScoreUpdateManyWithWhereWithoutSequenceInput: ScoreUpdateManyWithWhereWithoutSequenceInput;
  ScoreScalarWhereInput: ScoreScalarWhereInput;
  ScoreUpsertWithWhereUniqueWithoutSequenceInput: ScoreUpsertWithWhereUniqueWithoutSequenceInput;
  TermUpdateWithoutSequenceInput: TermUpdateWithoutSequenceInput;
  TermUpsertWithoutSequenceInput: TermUpsertWithoutSequenceInput;
  AnnProfSubjDistroCreateWithoutAnnProfDeptInput: AnnProfSubjDistroCreateWithoutAnnProfDeptInput;
  AnnProfSubjDistroCreateOrConnectWithoutAnnProfDeptInput: AnnProfSubjDistroCreateOrConnectWithoutAnnProfDeptInput;
  DepartmentCreateWithoutAnnProfDeptInput: DepartmentCreateWithoutAnnProfDeptInput;
  DepartmentCreateOrConnectWithoutannProfDeptInput: DepartmentCreateOrConnectWithoutannProfDeptInput;
  SchoolYearCreateWithoutAnnProfDeptInput: SchoolYearCreateWithoutAnnProfDeptInput;
  SchoolYearCreateOrConnectWithoutannProfDeptInput: SchoolYearCreateOrConnectWithoutannProfDeptInput;
  ProfCreateWithoutAnnProfDeptInput: ProfCreateWithoutAnnProfDeptInput;
  ProfCreateOrConnectWithoutannProfDeptInput: ProfCreateOrConnectWithoutannProfDeptInput;
  AnnProfSubjDistroUpdateWithWhereUniqueWithoutAnnProfDeptInput: AnnProfSubjDistroUpdateWithWhereUniqueWithoutAnnProfDeptInput;
  AnnProfSubjDistroUpdateManyWithWhereWithoutAnnProfDeptInput: AnnProfSubjDistroUpdateManyWithWhereWithoutAnnProfDeptInput;
  AnnProfSubjDistroUpsertWithWhereUniqueWithoutAnnProfDeptInput: AnnProfSubjDistroUpsertWithWhereUniqueWithoutAnnProfDeptInput;
  DepartmentUpdateWithoutAnnProfDeptInput: DepartmentUpdateWithoutAnnProfDeptInput;
  DepartmentUpsertWithoutAnnProfDeptInput: DepartmentUpsertWithoutAnnProfDeptInput;
  SchoolYearUpdateWithoutAnnProfDeptInput: SchoolYearUpdateWithoutAnnProfDeptInput;
  SchoolYearUpsertWithoutAnnProfDeptInput: SchoolYearUpsertWithoutAnnProfDeptInput;
  ProfUpdateWithoutAnnProfDeptInput: ProfUpdateWithoutAnnProfDeptInput;
  ProfUpsertWithoutAnnProfDeptInput: ProfUpsertWithoutAnnProfDeptInput;
  AnnProfDeptCreateWithoutAnnProfSubjInput: AnnProfDeptCreateWithoutAnnProfSubjInput;
  AnnProfDeptCreateOrConnectWithoutannProfSubjInput: AnnProfDeptCreateOrConnectWithoutannProfSubjInput;
  SubjectCreateWithoutAnnProfSubjInput: SubjectCreateWithoutAnnProfSubjInput;
  SubjectCreateOrConnectWithoutannProfSubjInput: SubjectCreateOrConnectWithoutannProfSubjInput;
  ClassroomCreateWithoutAnnProfSubjInput: ClassroomCreateWithoutAnnProfSubjInput;
  ClassroomCreateOrConnectWithoutannProfSubjInput: ClassroomCreateOrConnectWithoutannProfSubjInput;
  ScoreCreateWithoutAnnProfSubjInput: ScoreCreateWithoutAnnProfSubjInput;
  ScoreCreateOrConnectWithoutannProfSubjInput: ScoreCreateOrConnectWithoutannProfSubjInput;
  LogbookCreateWithoutAnnProfSubjDistroInput: LogbookCreateWithoutAnnProfSubjDistroInput;
  LogbookCreateOrConnectWithoutAnnProfSubjDistroInput: LogbookCreateOrConnectWithoutAnnProfSubjDistroInput;
  AnnProfDeptUpdateWithoutAnnProfSubjInput: AnnProfDeptUpdateWithoutAnnProfSubjInput;
  AnnProfDeptUpsertWithoutAnnProfSubjInput: AnnProfDeptUpsertWithoutAnnProfSubjInput;
  SubjectUpdateWithoutAnnProfSubjInput: SubjectUpdateWithoutAnnProfSubjInput;
  SubjectUpsertWithoutAnnProfSubjInput: SubjectUpsertWithoutAnnProfSubjInput;
  ClassroomUpdateWithoutAnnProfSubjInput: ClassroomUpdateWithoutAnnProfSubjInput;
  ClassroomUpsertWithoutAnnProfSubjInput: ClassroomUpsertWithoutAnnProfSubjInput;
  ScoreUpdateWithWhereUniqueWithoutAnnProfSubjInput: ScoreUpdateWithWhereUniqueWithoutAnnProfSubjInput;
  ScoreUpdateManyWithWhereWithoutAnnProfSubjInput: ScoreUpdateManyWithWhereWithoutAnnProfSubjInput;
  ScoreUpsertWithWhereUniqueWithoutAnnProfSubjInput: ScoreUpsertWithWhereUniqueWithoutAnnProfSubjInput;
  LogbookUpdateWithWhereUniqueWithoutAnnProfSubjDistroInput: LogbookUpdateWithWhereUniqueWithoutAnnProfSubjDistroInput;
  LogbookUpdateManyWithWhereWithoutAnnProfSubjDistroInput: LogbookUpdateManyWithWhereWithoutAnnProfSubjDistroInput;
  LogbookScalarWhereInput: LogbookScalarWhereInput;
  LogbookUpsertWithWhereUniqueWithoutAnnProfSubjDistroInput: LogbookUpsertWithWhereUniqueWithoutAnnProfSubjDistroInput;
  SchoolYearCreateWithoutAnnStudentClassroomInput: SchoolYearCreateWithoutAnnStudentClassroomInput;
  SchoolYearCreateOrConnectWithoutannStudentClassroomInput: SchoolYearCreateOrConnectWithoutannStudentClassroomInput;
  ClassroomCreateWithoutAnnStudentClassroomInput: ClassroomCreateWithoutAnnStudentClassroomInput;
  ClassroomCreateOrConnectWithoutannStudentClassroomInput: ClassroomCreateOrConnectWithoutannStudentClassroomInput;
  StudentCreateWithoutAnnStudentClassroomInput: StudentCreateWithoutAnnStudentClassroomInput;
  StudentCreateOrConnectWithoutannStudentClassroomInput: StudentCreateOrConnectWithoutannStudentClassroomInput;
  ScoreCreateWithoutAnnStudentClassInput: ScoreCreateWithoutAnnStudentClassInput;
  ScoreCreateOrConnectWithoutannStudentClassInput: ScoreCreateOrConnectWithoutannStudentClassInput;
  FinanceCreateWithoutAnnStudentClassroomInput: FinanceCreateWithoutAnnStudentClassroomInput;
  FinanceWhereUniqueInput: FinanceWhereUniqueInput;
  FinanceCreateOrConnectWithoutAnnStudentClassroomInput: FinanceCreateOrConnectWithoutAnnStudentClassroomInput;
  SchoolYearUpdateWithoutAnnStudentClassroomInput: SchoolYearUpdateWithoutAnnStudentClassroomInput;
  SchoolYearUpsertWithoutAnnStudentClassroomInput: SchoolYearUpsertWithoutAnnStudentClassroomInput;
  ClassroomUpdateWithoutAnnStudentClassroomInput: ClassroomUpdateWithoutAnnStudentClassroomInput;
  ClassroomUpsertWithoutAnnStudentClassroomInput: ClassroomUpsertWithoutAnnStudentClassroomInput;
  StudentUpdateWithoutAnnStudentClassroomInput: StudentUpdateWithoutAnnStudentClassroomInput;
  StudentUpsertWithoutAnnStudentClassroomInput: StudentUpsertWithoutAnnStudentClassroomInput;
  ScoreUpdateWithWhereUniqueWithoutAnnStudentClassInput: ScoreUpdateWithWhereUniqueWithoutAnnStudentClassInput;
  ScoreUpdateManyWithWhereWithoutAnnStudentClassInput: ScoreUpdateManyWithWhereWithoutAnnStudentClassInput;
  ScoreUpsertWithWhereUniqueWithoutAnnStudentClassInput: ScoreUpsertWithWhereUniqueWithoutAnnStudentClassInput;
  FinanceUpdateWithWhereUniqueWithoutAnnStudentClassroomInput: FinanceUpdateWithWhereUniqueWithoutAnnStudentClassroomInput;
  FinanceUpdateManyWithWhereWithoutAnnStudentClassroomInput: FinanceUpdateManyWithWhereWithoutAnnStudentClassroomInput;
  FinanceScalarWhereInput: FinanceScalarWhereInput;
  FinanceUpsertWithWhereUniqueWithoutAnnStudentClassroomInput: FinanceUpsertWithWhereUniqueWithoutAnnStudentClassroomInput;
  FinanceWhereInput: FinanceWhereInput;
  AnnStudentClassroomCreateWithoutStudentInput: AnnStudentClassroomCreateWithoutStudentInput;
  AnnStudentClassroomCreateOrConnectWithoutStudentInput: AnnStudentClassroomCreateOrConnectWithoutStudentInput;
  AnnStudentClassroomUpdateWithWhereUniqueWithoutStudentInput: AnnStudentClassroomUpdateWithWhereUniqueWithoutStudentInput;
  AnnStudentClassroomUpdateManyWithWhereWithoutStudentInput: AnnStudentClassroomUpdateManyWithWhereWithoutStudentInput;
  AnnStudentClassroomUpsertWithWhereUniqueWithoutStudentInput: AnnStudentClassroomUpsertWithWhereUniqueWithoutStudentInput;
  AnnStudentClassroomCreateWithoutScoreInput: AnnStudentClassroomCreateWithoutScoreInput;
  AnnStudentClassroomCreateOrConnectWithoutscoreInput: AnnStudentClassroomCreateOrConnectWithoutscoreInput;
  AnnProfSubjDistroCreateWithoutScoreInput: AnnProfSubjDistroCreateWithoutScoreInput;
  AnnProfSubjDistroCreateOrConnectWithoutscoreInput: AnnProfSubjDistroCreateOrConnectWithoutscoreInput;
  SequenceCreateWithoutScoreInput: SequenceCreateWithoutScoreInput;
  SequenceCreateOrConnectWithoutscoreInput: SequenceCreateOrConnectWithoutscoreInput;
  AnnStudentClassroomUpdateWithWhereUniqueWithoutScoreInput: AnnStudentClassroomUpdateWithWhereUniqueWithoutScoreInput;
  AnnStudentClassroomUpdateManyWithWhereWithoutScoreInput: AnnStudentClassroomUpdateManyWithWhereWithoutScoreInput;
  AnnStudentClassroomUpsertWithWhereUniqueWithoutScoreInput: AnnStudentClassroomUpsertWithWhereUniqueWithoutScoreInput;
  AnnProfSubjDistroUpdateWithWhereUniqueWithoutScoreInput: AnnProfSubjDistroUpdateWithWhereUniqueWithoutScoreInput;
  AnnProfSubjDistroUpdateManyWithWhereWithoutScoreInput: AnnProfSubjDistroUpdateManyWithWhereWithoutScoreInput;
  AnnProfSubjDistroUpsertWithWhereUniqueWithoutScoreInput: AnnProfSubjDistroUpsertWithWhereUniqueWithoutScoreInput;
  SequenceUpdateWithoutScoreInput: SequenceUpdateWithoutScoreInput;
  SequenceUpsertWithoutScoreInput: SequenceUpsertWithoutScoreInput;
  AnnProfSubjDistroCreateWithoutClassroomInput: AnnProfSubjDistroCreateWithoutClassroomInput;
  AnnProfSubjDistroCreateOrConnectWithoutClassroomInput: AnnProfSubjDistroCreateOrConnectWithoutClassroomInput;
  AnnStudentClassroomCreateWithoutClassroomInput: AnnStudentClassroomCreateWithoutClassroomInput;
  AnnStudentClassroomCreateOrConnectWithoutClassroomInput: AnnStudentClassroomCreateOrConnectWithoutClassroomInput;
  SectionCreateWithoutClassroomInput: SectionCreateWithoutClassroomInput;
  SectionCreateOrConnectWithoutclassroomInput: SectionCreateOrConnectWithoutclassroomInput;
  AnnProfSubjDistroUpdateWithWhereUniqueWithoutClassroomInput: AnnProfSubjDistroUpdateWithWhereUniqueWithoutClassroomInput;
  AnnProfSubjDistroUpdateManyWithWhereWithoutClassroomInput: AnnProfSubjDistroUpdateManyWithWhereWithoutClassroomInput;
  AnnProfSubjDistroUpsertWithWhereUniqueWithoutClassroomInput: AnnProfSubjDistroUpsertWithWhereUniqueWithoutClassroomInput;
  AnnStudentClassroomUpdateWithWhereUniqueWithoutClassroomInput: AnnStudentClassroomUpdateWithWhereUniqueWithoutClassroomInput;
  AnnStudentClassroomUpdateManyWithWhereWithoutClassroomInput: AnnStudentClassroomUpdateManyWithWhereWithoutClassroomInput;
  AnnStudentClassroomUpsertWithWhereUniqueWithoutClassroomInput: AnnStudentClassroomUpsertWithWhereUniqueWithoutClassroomInput;
  SectionUpdateWithoutClassroomInput: SectionUpdateWithoutClassroomInput;
  SectionUpsertWithoutClassroomInput: SectionUpsertWithoutClassroomInput;
  DivisionUpdateWithoutRegionInput: DivisionUpdateWithoutRegionInput;
  DivisionUpdateManyMutationInput: DivisionUpdateManyMutationInput;
  SubdivisionUpdateWithoutDivisionInput: SubdivisionUpdateWithoutDivisionInput;
  SchoolUpdateWithoutTownInput: SchoolUpdateWithoutTownInput;
  SchoolUpdateManyMutationInput: SchoolUpdateManyMutationInput;
  SectionUpdateWithoutSchoolInput: SectionUpdateWithoutSchoolInput;
  DepartmentUpdateWithoutSectionInput: DepartmentUpdateWithoutSectionInput;
  DepartmentUpdateManyMutationInput: DepartmentUpdateManyMutationInput;
  ClassroomUpdateWithoutSectionInput: ClassroomUpdateWithoutSectionInput;
  ClassroomUpdateManyMutationInput: ClassroomUpdateManyMutationInput;
  TownUpdateWithoutSubdivisionInput: TownUpdateWithoutSubdivisionInput;
  TownUpdateManyMutationInput: TownUpdateManyMutationInput;
  AnnProfDeptUpdateWithoutDepartmentInput: AnnProfDeptUpdateWithoutDepartmentInput;
  AnnProfDeptUpdateManyMutationInput: AnnProfDeptUpdateManyMutationInput;
  SubjectUpdateWithoutDepartmentInput: SubjectUpdateWithoutDepartmentInput;
  SubjectUpdateManyMutationInput: SubjectUpdateManyMutationInput;
  AnnProfDeptUpdateWithoutProfInput: AnnProfDeptUpdateWithoutProfInput;
  SequenceUpdateWithoutTermInput: SequenceUpdateWithoutTermInput;
  SequenceUpdateManyMutationInput: SequenceUpdateManyMutationInput;
  AnnStudentClassroomUpdateWithoutSchoolYearInput: AnnStudentClassroomUpdateWithoutSchoolYearInput;
  AnnStudentClassroomUpdateManyMutationInput: AnnStudentClassroomUpdateManyMutationInput;
  AnnProfDeptUpdateWithoutSchoolYearInput: AnnProfDeptUpdateWithoutSchoolYearInput;
  AnnProfSubjDistroUpdateWithoutSubjectInput: AnnProfSubjDistroUpdateWithoutSubjectInput;
  AnnProfSubjDistroUpdateManyMutationInput: AnnProfSubjDistroUpdateManyMutationInput;
  ScoreUpdateWithoutSequenceInput: ScoreUpdateWithoutSequenceInput;
  ScoreUpdateManyMutationInput: ScoreUpdateManyMutationInput;
  AnnProfSubjDistroUpdateWithoutAnnProfDeptInput: AnnProfSubjDistroUpdateWithoutAnnProfDeptInput;
  ScoreUpdateWithoutAnnProfSubjInput: ScoreUpdateWithoutAnnProfSubjInput;
  LogbookUpdateWithoutAnnProfSubjDistroInput: LogbookUpdateWithoutAnnProfSubjDistroInput;
  LogbookUpdateManyMutationInput: LogbookUpdateManyMutationInput;
  ScoreUpdateWithoutAnnStudentClassInput: ScoreUpdateWithoutAnnStudentClassInput;
  FinanceUpdateWithoutAnnStudentClassroomInput: FinanceUpdateWithoutAnnStudentClassroomInput;
  FinanceUpdateManyMutationInput: FinanceUpdateManyMutationInput;
  StringNullableFilter: StringNullableFilter;
  AnnStudentClassroomUpdateWithoutStudentInput: AnnStudentClassroomUpdateWithoutStudentInput;
  AnnStudentClassroomUpdateWithoutScoreInput: AnnStudentClassroomUpdateWithoutScoreInput;
  AnnProfSubjDistroUpdateWithoutScoreInput: AnnProfSubjDistroUpdateWithoutScoreInput;
  AnnProfSubjDistroUpdateWithoutClassroomInput: AnnProfSubjDistroUpdateWithoutClassroomInput;
  AnnStudentClassroomUpdateWithoutClassroomInput: AnnStudentClassroomUpdateWithoutClassroomInput;
  NestedStringNullableFilter: NestedStringNullableFilter;
  Boolean: Scalars['Boolean'];
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  divisions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Division']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DivisionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Division'] = ResolversParentTypes['Division']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  divisionName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  divisionCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subdivisions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Subdivision']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubdivisionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subdivision'] = ResolversParentTypes['Subdivision']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subdivName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subdivCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  towns?: Resolver<Maybe<Array<Maybe<ResolversTypes['Town']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TownResolvers<ContextType = any, ParentType extends ResolversParentTypes['Town'] = ResolversParentTypes['Town']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  townName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  townCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schools?: Resolver<Maybe<Array<Maybe<ResolversTypes['School']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchoolResolvers<ContextType = any, ParentType extends ResolversParentTypes['School'] = ResolversParentTypes['School']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schoolName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schoolPublicCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schoolCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schoolSecretCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sections?: Resolver<Maybe<Array<Maybe<ResolversTypes['Section']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Section'] = ResolversParentTypes['Section']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sectionName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sectionCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  departments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Department']>>>, ParentType, ContextType>;
  classrooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Classroom']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Department'] = ResolversParentTypes['Department']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deptName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deptCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  annProfDept?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnnProfDept']>>>, ParentType, ContextType>;
  subject?: Resolver<Maybe<Array<Maybe<ResolversTypes['Subject']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfResolvers<ContextType = any, ParentType extends ResolversParentTypes['Prof'] = ResolversParentTypes['Prof']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prof1stName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prof2ndName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prof3rdName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profMatricule?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  profSecretCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  specialty?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SequenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sequence'] = ResolversParentTypes['Sequence']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  seqName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  seqCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnProfDeptResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnProfDept'] = ResolversParentTypes['AnnProfDept']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnProfSubjDistroResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnProfSubjDistro'] = ResolversParentTypes['AnnProfSubjDistro']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnStudentClassroomResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnStudentClassroom'] = ResolversParentTypes['AnnStudentClassroom']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassroomResolvers<ContextType = any, ParentType extends ResolversParentTypes['Classroom'] = ResolversParentTypes['Classroom']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  className?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  classCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  annStudentClassroom?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnnStudentClassroom']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogbookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Logbook'] = ResolversParentTypes['Logbook']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subjectMatter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timeOfPeriod?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchoolYearResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchoolYear'] = ResolversParentTypes['SchoolYear']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  yearName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  yearCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Student'] = ResolversParentTypes['Student']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  student1stName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  student2ndName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  student3rdName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  studentMatricule?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  studentSecretCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateOfBirth?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  placeOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  annStudentClassroom?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnnStudentClassroom']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subject'] = ResolversParentTypes['Subject']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subjectName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subjectCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TermResolvers<ContextType = any, ParentType extends ResolversParentTypes['Term'] = ResolversParentTypes['Term']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  termName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  termCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sequence?: Resolver<Maybe<Array<Maybe<ResolversTypes['Sequence']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Score'] = ResolversParentTypes['Score']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marks?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, never>>;
  divisions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Division']>>>, ParentType, ContextType>;
  division?: Resolver<Maybe<ResolversTypes['Division']>, ParentType, ContextType, RequireFields<QueryDivisionArgs, never>>;
  subdivisions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Subdivision']>>>, ParentType, ContextType>;
  subdivision?: Resolver<Maybe<ResolversTypes['Subdivision']>, ParentType, ContextType, RequireFields<QuerySubdivisionArgs, never>>;
  towns?: Resolver<Maybe<Array<Maybe<ResolversTypes['Town']>>>, ParentType, ContextType>;
  town?: Resolver<Maybe<ResolversTypes['Town']>, ParentType, ContextType, RequireFields<QueryTownArgs, never>>;
  schools?: Resolver<Maybe<Array<Maybe<ResolversTypes['School']>>>, ParentType, ContextType>;
  schoolByID?: Resolver<Maybe<ResolversTypes['School']>, ParentType, ContextType, RequireFields<QuerySchoolByIdArgs, never>>;
  schoolBySecretCode?: Resolver<Maybe<ResolversTypes['School']>, ParentType, ContextType, RequireFields<QuerySchoolBySecretCodeArgs, never>>;
  schoolByPublicCode?: Resolver<Maybe<ResolversTypes['School']>, ParentType, ContextType, RequireFields<QuerySchoolByPublicCodeArgs, never>>;
  departments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Department']>>>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<QueryDepartmentArgs, never>>;
  profs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Prof']>>>, ParentType, ContextType>;
  prof?: Resolver<Maybe<ResolversTypes['Prof']>, ParentType, ContextType, RequireFields<QueryProfArgs, never>>;
  profByMatricule?: Resolver<Maybe<ResolversTypes['Prof']>, ParentType, ContextType, RequireFields<QueryProfByMatriculeArgs, never>>;
  regions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, RequireFields<QueryRegionArgs, never>>;
  sections?: Resolver<Maybe<Array<Maybe<ResolversTypes['Section']>>>, ParentType, ContextType>;
  section?: Resolver<Maybe<ResolversTypes['Section']>, ParentType, ContextType, RequireFields<QuerySectionArgs, never>>;
  sectionForClasses?: Resolver<Maybe<ResolversTypes['Section']>, ParentType, ContextType, RequireFields<QuerySectionForClassesArgs, never>>;
  annProfDepts?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnnProfDept']>>>, ParentType, ContextType>;
  annProfDept?: Resolver<Maybe<ResolversTypes['AnnProfDept']>, ParentType, ContextType, RequireFields<QueryAnnProfDeptArgs, never>>;
  annProfSubjDistros?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnnProfSubjDistro']>>>, ParentType, ContextType>;
  annProfSubjDistro?: Resolver<Maybe<ResolversTypes['AnnProfSubjDistro']>, ParentType, ContextType, RequireFields<QueryAnnProfSubjDistroArgs, never>>;
  annStudentClassrooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnnStudentClassroom']>>>, ParentType, ContextType>;
  annStudentClassroom?: Resolver<Maybe<ResolversTypes['AnnStudentClassroom']>, ParentType, ContextType, RequireFields<QueryAnnStudentClassroomArgs, never>>;
  logbooks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Logbook']>>>, ParentType, ContextType>;
  logbook?: Resolver<Maybe<ResolversTypes['Logbook']>, ParentType, ContextType, RequireFields<QueryLogbookArgs, never>>;
  schoolYears?: Resolver<Maybe<Array<Maybe<ResolversTypes['SchoolYear']>>>, ParentType, ContextType>;
  schoolYear?: Resolver<Maybe<ResolversTypes['SchoolYear']>, ParentType, ContextType, RequireFields<QuerySchoolYearArgs, never>>;
  scores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score']>>>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Score']>, ParentType, ContextType, RequireFields<QueryScoreArgs, never>>;
  sequences?: Resolver<Maybe<Array<Maybe<ResolversTypes['Sequence']>>>, ParentType, ContextType>;
  sequence?: Resolver<Maybe<ResolversTypes['Sequence']>, ParentType, ContextType, RequireFields<QuerySequenceArgs, never>>;
  students?: Resolver<Maybe<Array<Maybe<ResolversTypes['Student']>>>, ParentType, ContextType>;
  student?: Resolver<Maybe<ResolversTypes['Student']>, ParentType, ContextType, RequireFields<QueryStudentArgs, never>>;
  studentBySecretCode?: Resolver<Maybe<ResolversTypes['Student']>, ParentType, ContextType, RequireFields<QueryStudentBySecretCodeArgs, never>>;
  studentByMatricule?: Resolver<Maybe<ResolversTypes['Student']>, ParentType, ContextType, RequireFields<QueryStudentByMatriculeArgs, never>>;
  subjects?: Resolver<Maybe<Array<Maybe<ResolversTypes['Subject']>>>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType, RequireFields<QuerySubjectArgs, never>>;
  terms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Term']>>>, ParentType, ContextType>;
  term?: Resolver<Maybe<ResolversTypes['Term']>, ParentType, ContextType, RequireFields<QueryTermArgs, never>>;
  classrooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Classroom']>>>, ParentType, ContextType>;
  classroom?: Resolver<Maybe<ResolversTypes['Classroom']>, ParentType, ContextType, RequireFields<QueryClassroomArgs, never>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createOneUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateOneUserArgs, 'data'>>;
  deleteOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteOneUserArgs, 'where'>>;
  updateOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateOneUserArgs, 'data' | 'where'>>;
  deleteManyUser?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyUserArgs, never>>;
  createOneRegion?: Resolver<ResolversTypes['Region'], ParentType, ContextType, RequireFields<MutationCreateOneRegionArgs, 'data'>>;
  deleteOneRegion?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, RequireFields<MutationDeleteOneRegionArgs, 'where'>>;
  updateOneRegion?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, RequireFields<MutationUpdateOneRegionArgs, 'data' | 'where'>>;
  deleteManyRegion?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyRegionArgs, never>>;
  createOneDivision?: Resolver<ResolversTypes['Division'], ParentType, ContextType, RequireFields<MutationCreateOneDivisionArgs, 'data'>>;
  deleteOneDivision?: Resolver<Maybe<ResolversTypes['Division']>, ParentType, ContextType, RequireFields<MutationDeleteOneDivisionArgs, 'where'>>;
  updateOneDivision?: Resolver<Maybe<ResolversTypes['Division']>, ParentType, ContextType, RequireFields<MutationUpdateOneDivisionArgs, 'data' | 'where'>>;
  deleteManyDivision?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyDivisionArgs, never>>;
  createOneTown?: Resolver<ResolversTypes['Town'], ParentType, ContextType, RequireFields<MutationCreateOneTownArgs, 'data'>>;
  deleteOneTown?: Resolver<Maybe<ResolversTypes['Town']>, ParentType, ContextType, RequireFields<MutationDeleteOneTownArgs, 'where'>>;
  updateOneTown?: Resolver<Maybe<ResolversTypes['Town']>, ParentType, ContextType, RequireFields<MutationUpdateOneTownArgs, 'data' | 'where'>>;
  deleteManyTown?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyTownArgs, never>>;
  createOneSchool?: Resolver<ResolversTypes['School'], ParentType, ContextType, RequireFields<MutationCreateOneSchoolArgs, 'data'>>;
  deleteOneSchool?: Resolver<Maybe<ResolversTypes['School']>, ParentType, ContextType, RequireFields<MutationDeleteOneSchoolArgs, 'where'>>;
  updateOneSchool?: Resolver<Maybe<ResolversTypes['School']>, ParentType, ContextType, RequireFields<MutationUpdateOneSchoolArgs, 'data' | 'where'>>;
  deleteManySchool?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManySchoolArgs, never>>;
  createOneSection?: Resolver<ResolversTypes['Section'], ParentType, ContextType, RequireFields<MutationCreateOneSectionArgs, 'data'>>;
  deleteOneSection?: Resolver<Maybe<ResolversTypes['Section']>, ParentType, ContextType, RequireFields<MutationDeleteOneSectionArgs, 'where'>>;
  updateOneSection?: Resolver<Maybe<ResolversTypes['Section']>, ParentType, ContextType, RequireFields<MutationUpdateOneSectionArgs, 'data' | 'where'>>;
  updateManySection?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManySectionArgs, 'data'>>;
  updateManySubdivision?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManySubdivisionArgs, 'data'>>;
  createOneSubdivision?: Resolver<ResolversTypes['Subdivision'], ParentType, ContextType, RequireFields<MutationCreateOneSubdivisionArgs, 'data'>>;
  deleteOneSubdivision?: Resolver<Maybe<ResolversTypes['Subdivision']>, ParentType, ContextType, RequireFields<MutationDeleteOneSubdivisionArgs, 'where'>>;
  updateOneSubdivision?: Resolver<Maybe<ResolversTypes['Subdivision']>, ParentType, ContextType, RequireFields<MutationUpdateOneSubdivisionArgs, 'data' | 'where'>>;
  deleteManyDepartment?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyDepartmentArgs, never>>;
  createOneDepartment?: Resolver<ResolversTypes['Department'], ParentType, ContextType, RequireFields<MutationCreateOneDepartmentArgs, 'data'>>;
  deleteOneDepartment?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<MutationDeleteOneDepartmentArgs, 'where'>>;
  updateOneDepartment?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<MutationUpdateOneDepartmentArgs, 'data' | 'where'>>;
  createOneProf?: Resolver<ResolversTypes['Prof'], ParentType, ContextType, RequireFields<MutationCreateOneProfArgs, 'data'>>;
  deleteOneProf?: Resolver<Maybe<ResolversTypes['Prof']>, ParentType, ContextType, RequireFields<MutationDeleteOneProfArgs, 'where'>>;
  updateOneProf?: Resolver<Maybe<ResolversTypes['Prof']>, ParentType, ContextType, RequireFields<MutationUpdateOneProfArgs, 'data' | 'where'>>;
  deleteManyProf?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyProfArgs, never>>;
  createOneTerm?: Resolver<ResolversTypes['Term'], ParentType, ContextType, RequireFields<MutationCreateOneTermArgs, 'data'>>;
  deleteOneTerm?: Resolver<Maybe<ResolversTypes['Term']>, ParentType, ContextType, RequireFields<MutationDeleteOneTermArgs, 'where'>>;
  updateOneTerm?: Resolver<Maybe<ResolversTypes['Term']>, ParentType, ContextType, RequireFields<MutationUpdateOneTermArgs, 'data' | 'where'>>;
  deleteManyTerm?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyTermArgs, never>>;
  createOneLogbook?: Resolver<ResolversTypes['Logbook'], ParentType, ContextType, RequireFields<MutationCreateOneLogbookArgs, 'data'>>;
  deleteOneLogbook?: Resolver<Maybe<ResolversTypes['Logbook']>, ParentType, ContextType, RequireFields<MutationDeleteOneLogbookArgs, 'where'>>;
  updateOneLogbook?: Resolver<Maybe<ResolversTypes['Logbook']>, ParentType, ContextType, RequireFields<MutationUpdateOneLogbookArgs, 'data' | 'where'>>;
  deleteManyLogbook?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyLogbookArgs, never>>;
  createOneSchoolYear?: Resolver<ResolversTypes['SchoolYear'], ParentType, ContextType, RequireFields<MutationCreateOneSchoolYearArgs, 'data'>>;
  deleteOneSchoolYear?: Resolver<Maybe<ResolversTypes['SchoolYear']>, ParentType, ContextType, RequireFields<MutationDeleteOneSchoolYearArgs, 'where'>>;
  updateOneSchoolYear?: Resolver<Maybe<ResolversTypes['SchoolYear']>, ParentType, ContextType, RequireFields<MutationUpdateOneSchoolYearArgs, 'data' | 'where'>>;
  deleteManySchoolYear?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManySchoolYearArgs, never>>;
  createOneSubject?: Resolver<ResolversTypes['Subject'], ParentType, ContextType, RequireFields<MutationCreateOneSubjectArgs, 'data'>>;
  deleteOneSubject?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType, RequireFields<MutationDeleteOneSubjectArgs, 'where'>>;
  updateOneSubject?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType, RequireFields<MutationUpdateOneSubjectArgs, 'data' | 'where'>>;
  deleteManySubject?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManySubjectArgs, never>>;
  createOneSequence?: Resolver<ResolversTypes['Sequence'], ParentType, ContextType, RequireFields<MutationCreateOneSequenceArgs, 'data'>>;
  deleteOneSequence?: Resolver<Maybe<ResolversTypes['Sequence']>, ParentType, ContextType, RequireFields<MutationDeleteOneSequenceArgs, 'where'>>;
  updateOneSequence?: Resolver<Maybe<ResolversTypes['Sequence']>, ParentType, ContextType, RequireFields<MutationUpdateOneSequenceArgs, 'data' | 'where'>>;
  deleteManySequence?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManySequenceArgs, never>>;
  createOneAnnProfDept?: Resolver<ResolversTypes['AnnProfDept'], ParentType, ContextType, RequireFields<MutationCreateOneAnnProfDeptArgs, 'data'>>;
  deleteOneAnnProfDept?: Resolver<Maybe<ResolversTypes['AnnProfDept']>, ParentType, ContextType, RequireFields<MutationDeleteOneAnnProfDeptArgs, 'where'>>;
  updateOneAnnProfDept?: Resolver<Maybe<ResolversTypes['AnnProfDept']>, ParentType, ContextType, RequireFields<MutationUpdateOneAnnProfDeptArgs, 'data' | 'where'>>;
  deleteManyAnnProfDept?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyAnnProfDeptArgs, never>>;
  createOneAnnProfSubjDistro?: Resolver<ResolversTypes['AnnProfSubjDistro'], ParentType, ContextType, RequireFields<MutationCreateOneAnnProfSubjDistroArgs, 'data'>>;
  deleteOneAnnProfSubjDistro?: Resolver<Maybe<ResolversTypes['AnnProfSubjDistro']>, ParentType, ContextType, RequireFields<MutationDeleteOneAnnProfSubjDistroArgs, 'where'>>;
  updateOneAnnProfSubjDistro?: Resolver<Maybe<ResolversTypes['AnnProfSubjDistro']>, ParentType, ContextType, RequireFields<MutationUpdateOneAnnProfSubjDistroArgs, 'data' | 'where'>>;
  deleteManyAnnProfSubjDistro?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyAnnProfSubjDistroArgs, never>>;
  createOneAnnStudentClassroom?: Resolver<ResolversTypes['AnnStudentClassroom'], ParentType, ContextType, RequireFields<MutationCreateOneAnnStudentClassroomArgs, 'data'>>;
  deleteOneAnnStudentClassroom?: Resolver<Maybe<ResolversTypes['AnnStudentClassroom']>, ParentType, ContextType, RequireFields<MutationDeleteOneAnnStudentClassroomArgs, 'where'>>;
  updateOneAnnStudentClassroom?: Resolver<Maybe<ResolversTypes['AnnStudentClassroom']>, ParentType, ContextType, RequireFields<MutationUpdateOneAnnStudentClassroomArgs, 'data' | 'where'>>;
  deleteManyAnnStudentClassroom?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyAnnStudentClassroomArgs, never>>;
  createOneStudent?: Resolver<ResolversTypes['Student'], ParentType, ContextType, RequireFields<MutationCreateOneStudentArgs, 'data'>>;
  deleteOneStudent?: Resolver<Maybe<ResolversTypes['Student']>, ParentType, ContextType, RequireFields<MutationDeleteOneStudentArgs, 'where'>>;
  updateOneStudent?: Resolver<Maybe<ResolversTypes['Student']>, ParentType, ContextType, RequireFields<MutationUpdateOneStudentArgs, 'data' | 'where'>>;
  deleteManyStudent?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyStudentArgs, never>>;
  createOneScore?: Resolver<ResolversTypes['Score'], ParentType, ContextType, RequireFields<MutationCreateOneScoreArgs, 'data'>>;
  deleteOneScore?: Resolver<Maybe<ResolversTypes['Score']>, ParentType, ContextType, RequireFields<MutationDeleteOneScoreArgs, 'where'>>;
  updateOneScore?: Resolver<Maybe<ResolversTypes['Score']>, ParentType, ContextType, RequireFields<MutationUpdateOneScoreArgs, 'data' | 'where'>>;
  deleteManyScore?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyScoreArgs, never>>;
  createOneClassroom?: Resolver<ResolversTypes['Classroom'], ParentType, ContextType, RequireFields<MutationCreateOneClassroomArgs, 'data'>>;
  deleteOneClassroom?: Resolver<Maybe<ResolversTypes['Classroom']>, ParentType, ContextType, RequireFields<MutationDeleteOneClassroomArgs, 'where'>>;
  updateOneClassroom?: Resolver<Maybe<ResolversTypes['Classroom']>, ParentType, ContextType, RequireFields<MutationUpdateOneClassroomArgs, 'data' | 'where'>>;
  deleteManyClassroom?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationDeleteManyClassroomArgs, never>>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type BatchPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchPayload'] = ResolversParentTypes['BatchPayload']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  User?: UserResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  Division?: DivisionResolvers<ContextType>;
  Subdivision?: SubdivisionResolvers<ContextType>;
  Town?: TownResolvers<ContextType>;
  School?: SchoolResolvers<ContextType>;
  Section?: SectionResolvers<ContextType>;
  Department?: DepartmentResolvers<ContextType>;
  Prof?: ProfResolvers<ContextType>;
  Sequence?: SequenceResolvers<ContextType>;
  AnnProfDept?: AnnProfDeptResolvers<ContextType>;
  AnnProfSubjDistro?: AnnProfSubjDistroResolvers<ContextType>;
  AnnStudentClassroom?: AnnStudentClassroomResolvers<ContextType>;
  Classroom?: ClassroomResolvers<ContextType>;
  Logbook?: LogbookResolvers<ContextType>;
  SchoolYear?: SchoolYearResolvers<ContextType>;
  Student?: StudentResolvers<ContextType>;
  Subject?: SubjectResolvers<ContextType>;
  Term?: TermResolvers<ContextType>;
  Score?: ScoreResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  BatchPayload?: BatchPayloadResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
