import {
  DMMF,
  DMMFClass,
  Engine,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  sqltag as sql,
  empty,
  join,
  raw,
  Sql,
  Decimal,
} from './runtime';

export { PrismaClientKnownRequestError }
export { PrismaClientUnknownRequestError }
export { PrismaClientRustPanicError }
export { PrismaClientInitializationError }
export { PrismaClientValidationError }
export { Decimal }

/**
 * Re-export of sql-template-tag
 */
export { sql, empty, join, raw, Sql }

/**
 * Prisma Client JS version: 2.11.0
 * Query Engine version: 58369335532e47bdcec77a2f1e7c1fb83a463918
 */
export declare type PrismaVersion = {
  client: string
}

export declare const prismaVersion: PrismaVersion 

/**
 * Utility Types
 */

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON object.
 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
 */
export declare type JsonObject = {[Key in string]?: JsonValue}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
export declare interface JsonArray extends Array<JsonValue> {}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches any valid JSON value.
 */
export declare type JsonValue = string | number | boolean | null | JsonObject | JsonArray

/**
 * Same as JsonObject, but allows undefined
 */
export declare type InputJsonObject = {[Key in string]?: JsonValue}
 
export declare interface InputJsonArray extends Array<JsonValue> {}
 
export declare type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray

declare type SelectAndInclude = {
  select: any
  include: any
}

declare type HasSelect = {
  select: any
}

declare type HasInclude = {
  include: any
}

declare type CheckSelect<T, S, U> = T extends SelectAndInclude
  ? 'Please either choose `select` or `include`'
  : T extends HasSelect
  ? U
  : T extends HasInclude
  ? U
  : S

/**
 * Get the type of the value, that the Promise holds.
 */
export declare type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

/**
 * Get the return type of a function which returns a Promise.
 */
export declare type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>


export declare type Enumerable<T> = T | Array<T>;

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

export declare type TruthyKeys<T> = {
  [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

export declare type TrueKeys<T> = TruthyKeys<Pick<T, RequiredKeys<T>>>

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export declare type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

declare class PrismaClientFetcher {
  private readonly prisma;
  private readonly debug;
  private readonly hooks?;
  constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
  request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
  sanitizeMessage(message: string): string;
  protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
}


/**
 * Client
**/

export declare type Datasource = {
  url?: string
}

export type Datasources = {
  db?: Datasource
}

export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

export interface PrismaClientOptions {
  /**
   * Overwrites the datasource url from your prisma.schema file
   */
  datasources?: Datasources

  /**
   * @default "colorless"
   */
  errorFormat?: ErrorFormat

  /**
   * @example
   * ```
   * // Defaults to stdout
   * log: ['query', 'info', 'warn', 'error']
   * 
   * // Emit as events
   * log: [
   *  { emit: 'stdout', level: 'query' },
   *  { emit: 'stdout', level: 'info' },
   *  { emit: 'stdout', level: 'warn' }
   *  { emit: 'stdout', level: 'error' }
   * ]
   * ```
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
   */
  log?: Array<LogLevel | LogDefinition>
}

export type Hooks = {
  beforeRequest?: (options: {query: string, path: string[], rootField?: string, typeName?: string, document: any}) => any
}

/* Types for Logging */
export type LogLevel = 'info' | 'query' | 'warn' | 'error'
export type LogDefinition = {
  level: LogLevel
  emit: 'stdout' | 'event'
}

export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
  GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
  : never

export type QueryEvent = {
  timestamp: Date
  query: string
  params: string
  duration: number
  target: string
}

export type LogEvent = {
  timestamp: Date
  message: string
  target: string
}
/* End Types for Logging */


export type PrismaAction =
  | 'findOne'
  | 'findMany'
  | 'findFirst'
  | 'create'
  | 'update'
  | 'updateMany'
  | 'upsert'
  | 'delete'
  | 'deleteMany'
  | 'executeRaw'
  | 'queryRaw'
  | 'aggregate'


/**
 * These options are being passed in to the middleware as "params"
 */
export type MiddlewareParams = {
  model?: ModelName
  action: PrismaAction
  args: any
  dataPath: string[]
  runInTransaction: boolean
}

/**
 * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
 */
export type Middleware<T = any> = (
  params: MiddlewareParams,
  next: (params: MiddlewareParams) => Promise<T>,
) => Promise<T>

// tested in getLogLevel.test.ts
export declare function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare class PrismaClient<
  T extends PrismaClientOptions = PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<LogLevel | LogDefinition> ? GetEvents<T['log']> : never : never
> {
  /**
   * @private
   */
  private fetcher;
  /**
   * @private
   */
  private readonly dmmf;
  /**
   * @private
   */
  private connectionPromise?;
  /**
   * @private
   */
  private disconnectionPromise?;
  /**
   * @private
   */
  private readonly engineConfig;
  /**
   * @private
   */
  private readonly measurePerformance;
  /**
   * @private
   */
  private engine: Engine;
  /**
   * @private
   */
  private errorFormat: ErrorFormat;

  /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
  constructor(optionsArg?: T);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * @deprecated renamed to `$on`
   */
  on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * Connect with the database
   */
  $connect(): Promise<void>;
  /**
   * @deprecated renamed to `$connect`
   */
  connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;
  /**
   * @deprecated renamed to `$disconnect`
   */
  disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw<T = any>(query: string | TemplateStringsArray | Sql, ...values: any[]): Promise<number>;

  /**
   * @deprecated renamed to `$executeRaw`
   */
  executeRaw<T = any>(query: string | TemplateStringsArray | Sql, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw<T = any>(query: string | TemplateStringsArray | Sql, ...values: any[]): Promise<T>;
 
  /**
   * @deprecated renamed to `$queryRaw`
   */
  queryRaw<T = any>(query: string | TemplateStringsArray | Sql, ...values: any[]): Promise<T>;
  /**
   * Execute queries in a transaction
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   */
  $transaction: PromiseConstructor['all']
  /**
   * @deprecated renamed to `$transaction`
   */
  transaction: PromiseConstructor['all']

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): UserDelegate;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): RegionDelegate;

  /**
   * `prisma.division`: Exposes CRUD operations for the **Division** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Divisions
    * const divisions = await prisma.division.findMany()
    * ```
    */
  get division(): DivisionDelegate;

  /**
   * `prisma.subdivision`: Exposes CRUD operations for the **Subdivision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subdivisions
    * const subdivisions = await prisma.subdivision.findMany()
    * ```
    */
  get subdivision(): SubdivisionDelegate;

  /**
   * `prisma.town`: Exposes CRUD operations for the **Town** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Towns
    * const towns = await prisma.town.findMany()
    * ```
    */
  get town(): TownDelegate;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): SchoolDelegate;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): SectionDelegate;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): DepartmentDelegate;

  /**
   * `prisma.term`: Exposes CRUD operations for the **Term** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Terms
    * const terms = await prisma.term.findMany()
    * ```
    */
  get term(): TermDelegate;

  /**
   * `prisma.sequence`: Exposes CRUD operations for the **Sequence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sequences
    * const sequences = await prisma.sequence.findMany()
    * ```
    */
  get sequence(): SequenceDelegate;

  /**
   * `prisma.schoolYear`: Exposes CRUD operations for the **SchoolYear** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchoolYears
    * const schoolYears = await prisma.schoolYear.findMany()
    * ```
    */
  get schoolYear(): SchoolYearDelegate;

  /**
   * `prisma.annProfDept`: Exposes CRUD operations for the **AnnProfDept** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnnProfDepts
    * const annProfDepts = await prisma.annProfDept.findMany()
    * ```
    */
  get annProfDept(): AnnProfDeptDelegate;

  /**
   * `prisma.logbook`: Exposes CRUD operations for the **Logbook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logbooks
    * const logbooks = await prisma.logbook.findMany()
    * ```
    */
  get logbook(): LogbookDelegate;

  /**
   * `prisma.score`: Exposes CRUD operations for the **Score** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scores
    * const scores = await prisma.score.findMany()
    * ```
    */
  get score(): ScoreDelegate;

  /**
   * `prisma.annProfSubjDistro`: Exposes CRUD operations for the **AnnProfSubjDistro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnnProfSubjDistros
    * const annProfSubjDistros = await prisma.annProfSubjDistro.findMany()
    * ```
    */
  get annProfSubjDistro(): AnnProfSubjDistroDelegate;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): SubjectDelegate;

  /**
   * `prisma.classroom`: Exposes CRUD operations for the **Classroom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classrooms
    * const classrooms = await prisma.classroom.findMany()
    * ```
    */
  get classroom(): ClassroomDelegate;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): StudentDelegate;

  /**
   * `prisma.annStudentClassroom`: Exposes CRUD operations for the **AnnStudentClassroom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnnStudentClassrooms
    * const annStudentClassrooms = await prisma.annStudentClassroom.findMany()
    * ```
    */
  get annStudentClassroom(): AnnStudentClassroomDelegate;

  /**
   * `prisma.prof`: Exposes CRUD operations for the **Prof** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profs
    * const profs = await prisma.prof.findMany()
    * ```
    */
  get prof(): ProfDelegate;
}



/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export declare const ModelName: {
  User: 'User',
  Region: 'Region',
  Division: 'Division',
  Subdivision: 'Subdivision',
  Town: 'Town',
  School: 'School',
  Section: 'Section',
  Department: 'Department',
  Term: 'Term',
  Sequence: 'Sequence',
  SchoolYear: 'SchoolYear',
  AnnProfDept: 'AnnProfDept',
  Logbook: 'Logbook',
  Score: 'Score',
  AnnProfSubjDistro: 'AnnProfSubjDistro',
  Subject: 'Subject',
  Classroom: 'Classroom',
  Student: 'Student',
  AnnStudentClassroom: 'AnnStudentClassroom',
  Prof: 'Prof'
};

export declare type ModelName = (typeof ModelName)[keyof typeof ModelName]


export declare const UserDistinctFieldEnum: {
  id: 'id',
  name: 'name',
  email: 'email',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export declare type UserDistinctFieldEnum = (typeof UserDistinctFieldEnum)[keyof typeof UserDistinctFieldEnum]


export declare const RegionDistinctFieldEnum: {
  id: 'id',
  regName: 'regName',
  regCode: 'regCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export declare type RegionDistinctFieldEnum = (typeof RegionDistinctFieldEnum)[keyof typeof RegionDistinctFieldEnum]


export declare const DivisionDistinctFieldEnum: {
  id: 'id',
  divisionName: 'divisionName',
  divisionCode: 'divisionCode',
  regionId: 'regionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export declare type DivisionDistinctFieldEnum = (typeof DivisionDistinctFieldEnum)[keyof typeof DivisionDistinctFieldEnum]


export declare const SubdivisionDistinctFieldEnum: {
  id: 'id',
  subdivName: 'subdivName',
  subdivCode: 'subdivCode',
  divisionId: 'divisionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export declare type SubdivisionDistinctFieldEnum = (typeof SubdivisionDistinctFieldEnum)[keyof typeof SubdivisionDistinctFieldEnum]


export declare const TownDistinctFieldEnum: {
  id: 'id',
  townName: 'townName',
  townCode: 'townCode',
  subdivisionId: 'subdivisionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export declare type TownDistinctFieldEnum = (typeof TownDistinctFieldEnum)[keyof typeof TownDistinctFieldEnum]


export declare const SchoolDistinctFieldEnum: {
  id: 'id',
  schoolName: 'schoolName',
  schoolNumber: 'schoolNumber',
  schoolCode: 'schoolCode',
  townId: 'townId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export declare type SchoolDistinctFieldEnum = (typeof SchoolDistinctFieldEnum)[keyof typeof SchoolDistinctFieldEnum]


export declare const SectionDistinctFieldEnum: {
  id: 'id',
  sectionName: 'sectionName',
  sectionCode: 'sectionCode',
  schoolId: 'schoolId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export declare type SectionDistinctFieldEnum = (typeof SectionDistinctFieldEnum)[keyof typeof SectionDistinctFieldEnum]


export declare const DepartmentDistinctFieldEnum: {
  id: 'id',
  deptName: 'deptName',
  deptCode: 'deptCode',
  sectionId: 'sectionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export declare type DepartmentDistinctFieldEnum = (typeof DepartmentDistinctFieldEnum)[keyof typeof DepartmentDistinctFieldEnum]


export declare const TermDistinctFieldEnum: {
  id: 'id',
  termName: 'termName',
  termCode: 'termCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export declare type TermDistinctFieldEnum = (typeof TermDistinctFieldEnum)[keyof typeof TermDistinctFieldEnum]


export declare const SequenceDistinctFieldEnum: {
  id: 'id',
  seqName: 'seqName',
  seqCode: 'seqCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  scoreId: 'scoreId'
};

export declare type SequenceDistinctFieldEnum = (typeof SequenceDistinctFieldEnum)[keyof typeof SequenceDistinctFieldEnum]


export declare const SchoolYearDistinctFieldEnum: {
  id: 'id',
  yearName: 'yearName',
  yearCode: 'yearCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export declare type SchoolYearDistinctFieldEnum = (typeof SchoolYearDistinctFieldEnum)[keyof typeof SchoolYearDistinctFieldEnum]


export declare const AnnProfDeptDistinctFieldEnum: {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  departmentId: 'departmentId',
  schoolYearId: 'schoolYearId',
  profId: 'profId'
};

export declare type AnnProfDeptDistinctFieldEnum = (typeof AnnProfDeptDistinctFieldEnum)[keyof typeof AnnProfDeptDistinctFieldEnum]


export declare const LogbookDistinctFieldEnum: {
  id: 'id',
  subjectMatter: 'subjectMatter',
  timeOfPeriod: 'timeOfPeriod',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  AnnProfSubjDistroId: 'AnnProfSubjDistroId'
};

export declare type LogbookDistinctFieldEnum = (typeof LogbookDistinctFieldEnum)[keyof typeof LogbookDistinctFieldEnum]


export declare const ScoreDistinctFieldEnum: {
  id: 'id',
  marks: 'marks',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export declare type ScoreDistinctFieldEnum = (typeof ScoreDistinctFieldEnum)[keyof typeof ScoreDistinctFieldEnum]


export declare const AnnProfSubjDistroDistinctFieldEnum: {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  annProfDeptId: 'annProfDeptId',
  subjectId: 'subjectId',
  classroomId: 'classroomId',
  scoreId: 'scoreId'
};

export declare type AnnProfSubjDistroDistinctFieldEnum = (typeof AnnProfSubjDistroDistinctFieldEnum)[keyof typeof AnnProfSubjDistroDistinctFieldEnum]


export declare const SubjectDistinctFieldEnum: {
  id: 'id',
  subjectName: 'subjectName',
  subjectCode: 'subjectCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  departmentId: 'departmentId'
};

export declare type SubjectDistinctFieldEnum = (typeof SubjectDistinctFieldEnum)[keyof typeof SubjectDistinctFieldEnum]


export declare const ClassroomDistinctFieldEnum: {
  id: 'id',
  className: 'className',
  classCode: 'classCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export declare type ClassroomDistinctFieldEnum = (typeof ClassroomDistinctFieldEnum)[keyof typeof ClassroomDistinctFieldEnum]


export declare const StudentDistinctFieldEnum: {
  id: 'id',
  student1stName: 'student1stName',
  student2ndName: 'student2ndName',
  student3rdName: 'student3rdName',
  sex: 'sex',
  studentMatricule: 'studentMatricule',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export declare type StudentDistinctFieldEnum = (typeof StudentDistinctFieldEnum)[keyof typeof StudentDistinctFieldEnum]


export declare const AnnStudentClassroomDistinctFieldEnum: {
  id: 'id',
  student1stName: 'student1stName',
  student2ndName: 'student2ndName',
  student3rdName: 'student3rdName',
  sex: 'sex',
  studentMatricule: 'studentMatricule',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  schoolYearId: 'schoolYearId',
  classroomId: 'classroomId',
  studentId: 'studentId',
  scoreId: 'scoreId'
};

export declare type AnnStudentClassroomDistinctFieldEnum = (typeof AnnStudentClassroomDistinctFieldEnum)[keyof typeof AnnStudentClassroomDistinctFieldEnum]


export declare const ProfDistinctFieldEnum: {
  id: 'id',
  prof1stName: 'prof1stName',
  prof2ndName: 'prof2ndName',
  prof3rdName: 'prof3rdName',
  profMatricule: 'profMatricule',
  specialty: 'specialty',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export declare type ProfDistinctFieldEnum = (typeof ProfDistinctFieldEnum)[keyof typeof ProfDistinctFieldEnum]


export declare const SortOrder: {
  asc: 'asc',
  desc: 'desc'
};

export declare type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


export declare const QueryMode: {
  default: 'default',
  insensitive: 'insensitive'
};

export declare type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]



/**
 * Model User
 */

export type User = {
  id: string
  name: string
  email: string
  image: string
  createdAt: Date
  updatedAt: Date
}


export type AggregateUser = {
  count: number
}



export type AggregateUserArgs = {
  where?: UserWhereInput
  orderBy?: XOR<Enumerable<UserOrderByInput>, UserOrderByInput>
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<UserDistinctFieldEnum>
  count?: true
}

export type GetUserAggregateType<T extends AggregateUserArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type UserSelect = {
  id?: boolean
  name?: boolean
  email?: boolean
  image?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type UserGetPayload<
  S extends boolean | null | undefined | UserArgs,
  U = keyof S
> = S extends true
  ? User
  : S extends undefined
  ? never
  : S extends UserArgs | FindManyUserArgs
  ? 'include' extends U
    ? User 
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof User ? User[P]
: 
 never
    }
  : User
: User


export interface UserDelegate {
  /**
   * Find zero or one User that matches the filter.
   * @param {FindOneUserArgs} args - Arguments to find a User
   * @example
   * // Get one User
   * const user = await prisma.user.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneUserArgs>(
    args: Subset<T, FindOneUserArgs>
  ): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>
  /**
   * Find the first User that matches the filter.
   * @param {FindFirstUserArgs} args - Arguments to find a User
   * @example
   * // Get one User
   * const user = await prisma.user.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstUserArgs>(
    args?: Subset<T, FindFirstUserArgs>
  ): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>
  /**
   * Find zero or more Users that matches the filter.
   * @param {FindManyUserArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Users
   * const users = await prisma.user.findMany()
   * 
   * // Get first 10 Users
   * const users = await prisma.user.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyUserArgs>(
    args?: Subset<T, FindManyUserArgs>
  ): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>
  /**
   * Create a User.
   * @param {UserCreateArgs} args - Arguments to create a User.
   * @example
   * // Create one User
   * const User = await prisma.user.create({
   *   data: {
   *     // ... data to create a User
   *   }
   * })
   * 
  **/
  create<T extends UserCreateArgs>(
    args: Subset<T, UserCreateArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * Delete a User.
   * @param {UserDeleteArgs} args - Arguments to delete one User.
   * @example
   * // Delete one User
   * const User = await prisma.user.delete({
   *   where: {
   *     // ... filter to delete one User
   *   }
   * })
   * 
  **/
  delete<T extends UserDeleteArgs>(
    args: Subset<T, UserDeleteArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * Update one User.
   * @param {UserUpdateArgs} args - Arguments to update one User.
   * @example
   * // Update one User
   * const user = await prisma.user.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends UserUpdateArgs>(
    args: Subset<T, UserUpdateArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * Delete zero or more Users.
   * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
   * @example
   * // Delete a few Users
   * const { count } = await prisma.user.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends UserDeleteManyArgs>(
    args: Subset<T, UserDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Users.
   * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Users
   * const user = await prisma.user.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends UserUpdateManyArgs>(
    args: Subset<T, UserUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one User.
   * @param {UserUpsertArgs} args - Arguments to update or create a User.
   * @example
   * // Update or create a User
   * const user = await prisma.user.upsert({
   *   create: {
   *     // ... data to create a User
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the User we want to update
   *   }
   * })
  **/
  upsert<T extends UserUpsertArgs>(
    args: Subset<T, UserUpsertArgs>
  ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyUserArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateUserArgs>(args: Subset<T, AggregateUserArgs>): Promise<GetUserAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__UserClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';


  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * User findOne
 */
export type FindOneUserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: XOR<UserSelect, null>
  /**
   * Filter, which User to fetch.
  **/
  where: UserWhereUniqueInput
}


/**
 * User findFirst
 */
export type FindFirstUserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: XOR<UserSelect, null>
  /**
   * Filter, which User to fetch.
  **/
  where?: UserWhereInput
  orderBy?: XOR<Enumerable<UserOrderByInput>, UserOrderByInput>
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<UserDistinctFieldEnum>
}


/**
 * User findMany
 */
export type FindManyUserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: XOR<UserSelect, null>
  /**
   * Filter, which Users to fetch.
  **/
  where?: UserWhereInput
  /**
   * Determine the order of the Users to fetch.
  **/
  orderBy?: XOR<Enumerable<UserOrderByInput>, UserOrderByInput>
  /**
   * Sets the position for listing Users.
  **/
  cursor?: UserWhereUniqueInput
  /**
   * The number of Users to fetch. If negative number, it will take Users before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Users.
  **/
  skip?: number
  distinct?: Enumerable<UserDistinctFieldEnum>
}


/**
 * User create
 */
export type UserCreateArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: XOR<UserSelect, null>
  /**
   * The data needed to create a User.
  **/
  data: UserCreateInput
}


/**
 * User update
 */
export type UserUpdateArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: XOR<UserSelect, null>
  /**
   * The data needed to update a User.
  **/
  data: UserUpdateInput
  /**
   * Choose, which User to update.
  **/
  where: UserWhereUniqueInput
}


/**
 * User updateMany
 */
export type UserUpdateManyArgs = {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
}


/**
 * User upsert
 */
export type UserUpsertArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: XOR<UserSelect, null>
  /**
   * The filter to search for the User to update in case it exists.
  **/
  where: UserWhereUniqueInput
  /**
   * In case the User found by the `where` argument doesn't exist, create a new User with this data.
  **/
  create: UserCreateInput
  /**
   * In case the User was found with the provided `where` argument, update it with this data.
  **/
  update: UserUpdateInput
}


/**
 * User delete
 */
export type UserDeleteArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: XOR<UserSelect, null>
  /**
   * Filter which User to delete.
  **/
  where: UserWhereUniqueInput
}


/**
 * User deleteMany
 */
export type UserDeleteManyArgs = {
  where?: UserWhereInput
}


/**
 * User without action
 */
export type UserArgs = {
  /**
   * Select specific fields to fetch from the User
  **/
  select?: XOR<UserSelect, null>
}



/**
 * Model Region
 */

export type Region = {
  id: string
  regName: string
  regCode: string
  createdAt: Date
  updatedAt: Date
}


export type AggregateRegion = {
  count: number
}



export type AggregateRegionArgs = {
  where?: RegionWhereInput
  orderBy?: XOR<Enumerable<RegionOrderByInput>, RegionOrderByInput>
  cursor?: RegionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<RegionDistinctFieldEnum>
  count?: true
}

export type GetRegionAggregateType<T extends AggregateRegionArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type RegionSelect = {
  id?: boolean
  regName?: boolean
  regCode?: boolean
  division?: boolean | FindManyDivisionArgs
  createdAt?: boolean
  updatedAt?: boolean
}

export type RegionInclude = {
  division?: boolean | FindManyDivisionArgs
}

export type RegionGetPayload<
  S extends boolean | null | undefined | RegionArgs,
  U = keyof S
> = S extends true
  ? Region
  : S extends undefined
  ? never
  : S extends RegionArgs | FindManyRegionArgs
  ? 'include' extends U
    ? Region  & {
      [P in TrueKeys<S['include']>]:
      P extends 'division'
      ? Array<DivisionGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Region ? Region[P]
: 
      P extends 'division'
      ? Array<DivisionGetPayload<S['select'][P]>> : never
    }
  : Region
: Region


export interface RegionDelegate {
  /**
   * Find zero or one Region that matches the filter.
   * @param {FindOneRegionArgs} args - Arguments to find a Region
   * @example
   * // Get one Region
   * const region = await prisma.region.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneRegionArgs>(
    args: Subset<T, FindOneRegionArgs>
  ): CheckSelect<T, Prisma__RegionClient<Region | null>, Prisma__RegionClient<RegionGetPayload<T> | null>>
  /**
   * Find the first Region that matches the filter.
   * @param {FindFirstRegionArgs} args - Arguments to find a Region
   * @example
   * // Get one Region
   * const region = await prisma.region.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstRegionArgs>(
    args?: Subset<T, FindFirstRegionArgs>
  ): CheckSelect<T, Prisma__RegionClient<Region | null>, Prisma__RegionClient<RegionGetPayload<T> | null>>
  /**
   * Find zero or more Regions that matches the filter.
   * @param {FindManyRegionArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Regions
   * const regions = await prisma.region.findMany()
   * 
   * // Get first 10 Regions
   * const regions = await prisma.region.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyRegionArgs>(
    args?: Subset<T, FindManyRegionArgs>
  ): CheckSelect<T, Promise<Array<Region>>, Promise<Array<RegionGetPayload<T>>>>
  /**
   * Create a Region.
   * @param {RegionCreateArgs} args - Arguments to create a Region.
   * @example
   * // Create one Region
   * const Region = await prisma.region.create({
   *   data: {
   *     // ... data to create a Region
   *   }
   * })
   * 
  **/
  create<T extends RegionCreateArgs>(
    args: Subset<T, RegionCreateArgs>
  ): CheckSelect<T, Prisma__RegionClient<Region>, Prisma__RegionClient<RegionGetPayload<T>>>
  /**
   * Delete a Region.
   * @param {RegionDeleteArgs} args - Arguments to delete one Region.
   * @example
   * // Delete one Region
   * const Region = await prisma.region.delete({
   *   where: {
   *     // ... filter to delete one Region
   *   }
   * })
   * 
  **/
  delete<T extends RegionDeleteArgs>(
    args: Subset<T, RegionDeleteArgs>
  ): CheckSelect<T, Prisma__RegionClient<Region>, Prisma__RegionClient<RegionGetPayload<T>>>
  /**
   * Update one Region.
   * @param {RegionUpdateArgs} args - Arguments to update one Region.
   * @example
   * // Update one Region
   * const region = await prisma.region.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends RegionUpdateArgs>(
    args: Subset<T, RegionUpdateArgs>
  ): CheckSelect<T, Prisma__RegionClient<Region>, Prisma__RegionClient<RegionGetPayload<T>>>
  /**
   * Delete zero or more Regions.
   * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
   * @example
   * // Delete a few Regions
   * const { count } = await prisma.region.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends RegionDeleteManyArgs>(
    args: Subset<T, RegionDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Regions.
   * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Regions
   * const region = await prisma.region.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends RegionUpdateManyArgs>(
    args: Subset<T, RegionUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Region.
   * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
   * @example
   * // Update or create a Region
   * const region = await prisma.region.upsert({
   *   create: {
   *     // ... data to create a Region
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Region we want to update
   *   }
   * })
  **/
  upsert<T extends RegionUpsertArgs>(
    args: Subset<T, RegionUpsertArgs>
  ): CheckSelect<T, Prisma__RegionClient<Region>, Prisma__RegionClient<RegionGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyRegionArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateRegionArgs>(args: Subset<T, AggregateRegionArgs>): Promise<GetRegionAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Region.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__RegionClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  division<T extends FindManyDivisionArgs = {}>(args?: Subset<T, FindManyDivisionArgs>): CheckSelect<T, Promise<Array<Division>>, Promise<Array<DivisionGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Region findOne
 */
export type FindOneRegionArgs = {
  /**
   * Select specific fields to fetch from the Region
  **/
  select?: XOR<RegionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<RegionInclude, null>
  /**
   * Filter, which Region to fetch.
  **/
  where: RegionWhereUniqueInput
}


/**
 * Region findFirst
 */
export type FindFirstRegionArgs = {
  /**
   * Select specific fields to fetch from the Region
  **/
  select?: XOR<RegionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<RegionInclude, null>
  /**
   * Filter, which Region to fetch.
  **/
  where?: RegionWhereInput
  orderBy?: XOR<Enumerable<RegionOrderByInput>, RegionOrderByInput>
  cursor?: RegionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<RegionDistinctFieldEnum>
}


/**
 * Region findMany
 */
export type FindManyRegionArgs = {
  /**
   * Select specific fields to fetch from the Region
  **/
  select?: XOR<RegionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<RegionInclude, null>
  /**
   * Filter, which Regions to fetch.
  **/
  where?: RegionWhereInput
  /**
   * Determine the order of the Regions to fetch.
  **/
  orderBy?: XOR<Enumerable<RegionOrderByInput>, RegionOrderByInput>
  /**
   * Sets the position for listing Regions.
  **/
  cursor?: RegionWhereUniqueInput
  /**
   * The number of Regions to fetch. If negative number, it will take Regions before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Regions.
  **/
  skip?: number
  distinct?: Enumerable<RegionDistinctFieldEnum>
}


/**
 * Region create
 */
export type RegionCreateArgs = {
  /**
   * Select specific fields to fetch from the Region
  **/
  select?: XOR<RegionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<RegionInclude, null>
  /**
   * The data needed to create a Region.
  **/
  data: RegionCreateInput
}


/**
 * Region update
 */
export type RegionUpdateArgs = {
  /**
   * Select specific fields to fetch from the Region
  **/
  select?: XOR<RegionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<RegionInclude, null>
  /**
   * The data needed to update a Region.
  **/
  data: RegionUpdateInput
  /**
   * Choose, which Region to update.
  **/
  where: RegionWhereUniqueInput
}


/**
 * Region updateMany
 */
export type RegionUpdateManyArgs = {
  data: RegionUpdateManyMutationInput
  where?: RegionWhereInput
}


/**
 * Region upsert
 */
export type RegionUpsertArgs = {
  /**
   * Select specific fields to fetch from the Region
  **/
  select?: XOR<RegionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<RegionInclude, null>
  /**
   * The filter to search for the Region to update in case it exists.
  **/
  where: RegionWhereUniqueInput
  /**
   * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
  **/
  create: RegionCreateInput
  /**
   * In case the Region was found with the provided `where` argument, update it with this data.
  **/
  update: RegionUpdateInput
}


/**
 * Region delete
 */
export type RegionDeleteArgs = {
  /**
   * Select specific fields to fetch from the Region
  **/
  select?: XOR<RegionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<RegionInclude, null>
  /**
   * Filter which Region to delete.
  **/
  where: RegionWhereUniqueInput
}


/**
 * Region deleteMany
 */
export type RegionDeleteManyArgs = {
  where?: RegionWhereInput
}


/**
 * Region without action
 */
export type RegionArgs = {
  /**
   * Select specific fields to fetch from the Region
  **/
  select?: XOR<RegionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<RegionInclude, null>
}



/**
 * Model Division
 */

export type Division = {
  id: string
  divisionName: string
  divisionCode: string
  regionId: string
  createdAt: Date
  updatedAt: Date
}


export type AggregateDivision = {
  count: number
}



export type AggregateDivisionArgs = {
  where?: DivisionWhereInput
  orderBy?: XOR<Enumerable<DivisionOrderByInput>, DivisionOrderByInput>
  cursor?: DivisionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<DivisionDistinctFieldEnum>
  count?: true
}

export type GetDivisionAggregateType<T extends AggregateDivisionArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type DivisionSelect = {
  id?: boolean
  divisionName?: boolean
  divisionCode?: boolean
  subdiv?: boolean | FindManySubdivisionArgs
  Region?: boolean | RegionArgs
  regionId?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type DivisionInclude = {
  subdiv?: boolean | FindManySubdivisionArgs
  Region?: boolean | RegionArgs
}

export type DivisionGetPayload<
  S extends boolean | null | undefined | DivisionArgs,
  U = keyof S
> = S extends true
  ? Division
  : S extends undefined
  ? never
  : S extends DivisionArgs | FindManyDivisionArgs
  ? 'include' extends U
    ? Division  & {
      [P in TrueKeys<S['include']>]:
      P extends 'subdiv'
      ? Array<SubdivisionGetPayload<S['include'][P]>> :
      P extends 'Region'
      ? RegionGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Division ? Division[P]
: 
      P extends 'subdiv'
      ? Array<SubdivisionGetPayload<S['select'][P]>> :
      P extends 'Region'
      ? RegionGetPayload<S['select'][P]> : never
    }
  : Division
: Division


export interface DivisionDelegate {
  /**
   * Find zero or one Division that matches the filter.
   * @param {FindOneDivisionArgs} args - Arguments to find a Division
   * @example
   * // Get one Division
   * const division = await prisma.division.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneDivisionArgs>(
    args: Subset<T, FindOneDivisionArgs>
  ): CheckSelect<T, Prisma__DivisionClient<Division | null>, Prisma__DivisionClient<DivisionGetPayload<T> | null>>
  /**
   * Find the first Division that matches the filter.
   * @param {FindFirstDivisionArgs} args - Arguments to find a Division
   * @example
   * // Get one Division
   * const division = await prisma.division.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstDivisionArgs>(
    args?: Subset<T, FindFirstDivisionArgs>
  ): CheckSelect<T, Prisma__DivisionClient<Division | null>, Prisma__DivisionClient<DivisionGetPayload<T> | null>>
  /**
   * Find zero or more Divisions that matches the filter.
   * @param {FindManyDivisionArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Divisions
   * const divisions = await prisma.division.findMany()
   * 
   * // Get first 10 Divisions
   * const divisions = await prisma.division.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const divisionWithIdOnly = await prisma.division.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyDivisionArgs>(
    args?: Subset<T, FindManyDivisionArgs>
  ): CheckSelect<T, Promise<Array<Division>>, Promise<Array<DivisionGetPayload<T>>>>
  /**
   * Create a Division.
   * @param {DivisionCreateArgs} args - Arguments to create a Division.
   * @example
   * // Create one Division
   * const Division = await prisma.division.create({
   *   data: {
   *     // ... data to create a Division
   *   }
   * })
   * 
  **/
  create<T extends DivisionCreateArgs>(
    args: Subset<T, DivisionCreateArgs>
  ): CheckSelect<T, Prisma__DivisionClient<Division>, Prisma__DivisionClient<DivisionGetPayload<T>>>
  /**
   * Delete a Division.
   * @param {DivisionDeleteArgs} args - Arguments to delete one Division.
   * @example
   * // Delete one Division
   * const Division = await prisma.division.delete({
   *   where: {
   *     // ... filter to delete one Division
   *   }
   * })
   * 
  **/
  delete<T extends DivisionDeleteArgs>(
    args: Subset<T, DivisionDeleteArgs>
  ): CheckSelect<T, Prisma__DivisionClient<Division>, Prisma__DivisionClient<DivisionGetPayload<T>>>
  /**
   * Update one Division.
   * @param {DivisionUpdateArgs} args - Arguments to update one Division.
   * @example
   * // Update one Division
   * const division = await prisma.division.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends DivisionUpdateArgs>(
    args: Subset<T, DivisionUpdateArgs>
  ): CheckSelect<T, Prisma__DivisionClient<Division>, Prisma__DivisionClient<DivisionGetPayload<T>>>
  /**
   * Delete zero or more Divisions.
   * @param {DivisionDeleteManyArgs} args - Arguments to filter Divisions to delete.
   * @example
   * // Delete a few Divisions
   * const { count } = await prisma.division.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends DivisionDeleteManyArgs>(
    args: Subset<T, DivisionDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Divisions.
   * @param {DivisionUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Divisions
   * const division = await prisma.division.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends DivisionUpdateManyArgs>(
    args: Subset<T, DivisionUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Division.
   * @param {DivisionUpsertArgs} args - Arguments to update or create a Division.
   * @example
   * // Update or create a Division
   * const division = await prisma.division.upsert({
   *   create: {
   *     // ... data to create a Division
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Division we want to update
   *   }
   * })
  **/
  upsert<T extends DivisionUpsertArgs>(
    args: Subset<T, DivisionUpsertArgs>
  ): CheckSelect<T, Prisma__DivisionClient<Division>, Prisma__DivisionClient<DivisionGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyDivisionArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateDivisionArgs>(args: Subset<T, AggregateDivisionArgs>): Promise<GetDivisionAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Division.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__DivisionClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  subdiv<T extends FindManySubdivisionArgs = {}>(args?: Subset<T, FindManySubdivisionArgs>): CheckSelect<T, Promise<Array<Subdivision>>, Promise<Array<SubdivisionGetPayload<T>>>>;

  Region<T extends RegionArgs = {}>(args?: Subset<T, RegionArgs>): CheckSelect<T, Prisma__RegionClient<Region | null>, Prisma__RegionClient<RegionGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Division findOne
 */
export type FindOneDivisionArgs = {
  /**
   * Select specific fields to fetch from the Division
  **/
  select?: XOR<DivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DivisionInclude, null>
  /**
   * Filter, which Division to fetch.
  **/
  where: DivisionWhereUniqueInput
}


/**
 * Division findFirst
 */
export type FindFirstDivisionArgs = {
  /**
   * Select specific fields to fetch from the Division
  **/
  select?: XOR<DivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DivisionInclude, null>
  /**
   * Filter, which Division to fetch.
  **/
  where?: DivisionWhereInput
  orderBy?: XOR<Enumerable<DivisionOrderByInput>, DivisionOrderByInput>
  cursor?: DivisionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<DivisionDistinctFieldEnum>
}


/**
 * Division findMany
 */
export type FindManyDivisionArgs = {
  /**
   * Select specific fields to fetch from the Division
  **/
  select?: XOR<DivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DivisionInclude, null>
  /**
   * Filter, which Divisions to fetch.
  **/
  where?: DivisionWhereInput
  /**
   * Determine the order of the Divisions to fetch.
  **/
  orderBy?: XOR<Enumerable<DivisionOrderByInput>, DivisionOrderByInput>
  /**
   * Sets the position for listing Divisions.
  **/
  cursor?: DivisionWhereUniqueInput
  /**
   * The number of Divisions to fetch. If negative number, it will take Divisions before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Divisions.
  **/
  skip?: number
  distinct?: Enumerable<DivisionDistinctFieldEnum>
}


/**
 * Division create
 */
export type DivisionCreateArgs = {
  /**
   * Select specific fields to fetch from the Division
  **/
  select?: XOR<DivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DivisionInclude, null>
  /**
   * The data needed to create a Division.
  **/
  data: DivisionCreateInput
}


/**
 * Division update
 */
export type DivisionUpdateArgs = {
  /**
   * Select specific fields to fetch from the Division
  **/
  select?: XOR<DivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DivisionInclude, null>
  /**
   * The data needed to update a Division.
  **/
  data: DivisionUpdateInput
  /**
   * Choose, which Division to update.
  **/
  where: DivisionWhereUniqueInput
}


/**
 * Division updateMany
 */
export type DivisionUpdateManyArgs = {
  data: DivisionUpdateManyMutationInput
  where?: DivisionWhereInput
}


/**
 * Division upsert
 */
export type DivisionUpsertArgs = {
  /**
   * Select specific fields to fetch from the Division
  **/
  select?: XOR<DivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DivisionInclude, null>
  /**
   * The filter to search for the Division to update in case it exists.
  **/
  where: DivisionWhereUniqueInput
  /**
   * In case the Division found by the `where` argument doesn't exist, create a new Division with this data.
  **/
  create: DivisionCreateInput
  /**
   * In case the Division was found with the provided `where` argument, update it with this data.
  **/
  update: DivisionUpdateInput
}


/**
 * Division delete
 */
export type DivisionDeleteArgs = {
  /**
   * Select specific fields to fetch from the Division
  **/
  select?: XOR<DivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DivisionInclude, null>
  /**
   * Filter which Division to delete.
  **/
  where: DivisionWhereUniqueInput
}


/**
 * Division deleteMany
 */
export type DivisionDeleteManyArgs = {
  where?: DivisionWhereInput
}


/**
 * Division without action
 */
export type DivisionArgs = {
  /**
   * Select specific fields to fetch from the Division
  **/
  select?: XOR<DivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DivisionInclude, null>
}



/**
 * Model Subdivision
 */

export type Subdivision = {
  id: string
  subdivName: string
  subdivCode: string
  divisionId: string
  createdAt: Date
  updatedAt: Date
}


export type AggregateSubdivision = {
  count: number
}



export type AggregateSubdivisionArgs = {
  where?: SubdivisionWhereInput
  orderBy?: XOR<Enumerable<SubdivisionOrderByInput>, SubdivisionOrderByInput>
  cursor?: SubdivisionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<SubdivisionDistinctFieldEnum>
  count?: true
}

export type GetSubdivisionAggregateType<T extends AggregateSubdivisionArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type SubdivisionSelect = {
  id?: boolean
  subdivName?: boolean
  subdivCode?: boolean
  town?: boolean | FindManyTownArgs
  Division?: boolean | DivisionArgs
  divisionId?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type SubdivisionInclude = {
  town?: boolean | FindManyTownArgs
  Division?: boolean | DivisionArgs
}

export type SubdivisionGetPayload<
  S extends boolean | null | undefined | SubdivisionArgs,
  U = keyof S
> = S extends true
  ? Subdivision
  : S extends undefined
  ? never
  : S extends SubdivisionArgs | FindManySubdivisionArgs
  ? 'include' extends U
    ? Subdivision  & {
      [P in TrueKeys<S['include']>]:
      P extends 'town'
      ? Array<TownGetPayload<S['include'][P]>> :
      P extends 'Division'
      ? DivisionGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Subdivision ? Subdivision[P]
: 
      P extends 'town'
      ? Array<TownGetPayload<S['select'][P]>> :
      P extends 'Division'
      ? DivisionGetPayload<S['select'][P]> : never
    }
  : Subdivision
: Subdivision


export interface SubdivisionDelegate {
  /**
   * Find zero or one Subdivision that matches the filter.
   * @param {FindOneSubdivisionArgs} args - Arguments to find a Subdivision
   * @example
   * // Get one Subdivision
   * const subdivision = await prisma.subdivision.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneSubdivisionArgs>(
    args: Subset<T, FindOneSubdivisionArgs>
  ): CheckSelect<T, Prisma__SubdivisionClient<Subdivision | null>, Prisma__SubdivisionClient<SubdivisionGetPayload<T> | null>>
  /**
   * Find the first Subdivision that matches the filter.
   * @param {FindFirstSubdivisionArgs} args - Arguments to find a Subdivision
   * @example
   * // Get one Subdivision
   * const subdivision = await prisma.subdivision.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstSubdivisionArgs>(
    args?: Subset<T, FindFirstSubdivisionArgs>
  ): CheckSelect<T, Prisma__SubdivisionClient<Subdivision | null>, Prisma__SubdivisionClient<SubdivisionGetPayload<T> | null>>
  /**
   * Find zero or more Subdivisions that matches the filter.
   * @param {FindManySubdivisionArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Subdivisions
   * const subdivisions = await prisma.subdivision.findMany()
   * 
   * // Get first 10 Subdivisions
   * const subdivisions = await prisma.subdivision.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const subdivisionWithIdOnly = await prisma.subdivision.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManySubdivisionArgs>(
    args?: Subset<T, FindManySubdivisionArgs>
  ): CheckSelect<T, Promise<Array<Subdivision>>, Promise<Array<SubdivisionGetPayload<T>>>>
  /**
   * Create a Subdivision.
   * @param {SubdivisionCreateArgs} args - Arguments to create a Subdivision.
   * @example
   * // Create one Subdivision
   * const Subdivision = await prisma.subdivision.create({
   *   data: {
   *     // ... data to create a Subdivision
   *   }
   * })
   * 
  **/
  create<T extends SubdivisionCreateArgs>(
    args: Subset<T, SubdivisionCreateArgs>
  ): CheckSelect<T, Prisma__SubdivisionClient<Subdivision>, Prisma__SubdivisionClient<SubdivisionGetPayload<T>>>
  /**
   * Delete a Subdivision.
   * @param {SubdivisionDeleteArgs} args - Arguments to delete one Subdivision.
   * @example
   * // Delete one Subdivision
   * const Subdivision = await prisma.subdivision.delete({
   *   where: {
   *     // ... filter to delete one Subdivision
   *   }
   * })
   * 
  **/
  delete<T extends SubdivisionDeleteArgs>(
    args: Subset<T, SubdivisionDeleteArgs>
  ): CheckSelect<T, Prisma__SubdivisionClient<Subdivision>, Prisma__SubdivisionClient<SubdivisionGetPayload<T>>>
  /**
   * Update one Subdivision.
   * @param {SubdivisionUpdateArgs} args - Arguments to update one Subdivision.
   * @example
   * // Update one Subdivision
   * const subdivision = await prisma.subdivision.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends SubdivisionUpdateArgs>(
    args: Subset<T, SubdivisionUpdateArgs>
  ): CheckSelect<T, Prisma__SubdivisionClient<Subdivision>, Prisma__SubdivisionClient<SubdivisionGetPayload<T>>>
  /**
   * Delete zero or more Subdivisions.
   * @param {SubdivisionDeleteManyArgs} args - Arguments to filter Subdivisions to delete.
   * @example
   * // Delete a few Subdivisions
   * const { count } = await prisma.subdivision.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends SubdivisionDeleteManyArgs>(
    args: Subset<T, SubdivisionDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Subdivisions.
   * @param {SubdivisionUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Subdivisions
   * const subdivision = await prisma.subdivision.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends SubdivisionUpdateManyArgs>(
    args: Subset<T, SubdivisionUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Subdivision.
   * @param {SubdivisionUpsertArgs} args - Arguments to update or create a Subdivision.
   * @example
   * // Update or create a Subdivision
   * const subdivision = await prisma.subdivision.upsert({
   *   create: {
   *     // ... data to create a Subdivision
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Subdivision we want to update
   *   }
   * })
  **/
  upsert<T extends SubdivisionUpsertArgs>(
    args: Subset<T, SubdivisionUpsertArgs>
  ): CheckSelect<T, Prisma__SubdivisionClient<Subdivision>, Prisma__SubdivisionClient<SubdivisionGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManySubdivisionArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateSubdivisionArgs>(args: Subset<T, AggregateSubdivisionArgs>): Promise<GetSubdivisionAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Subdivision.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__SubdivisionClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  town<T extends FindManyTownArgs = {}>(args?: Subset<T, FindManyTownArgs>): CheckSelect<T, Promise<Array<Town>>, Promise<Array<TownGetPayload<T>>>>;

  Division<T extends DivisionArgs = {}>(args?: Subset<T, DivisionArgs>): CheckSelect<T, Prisma__DivisionClient<Division | null>, Prisma__DivisionClient<DivisionGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Subdivision findOne
 */
export type FindOneSubdivisionArgs = {
  /**
   * Select specific fields to fetch from the Subdivision
  **/
  select?: XOR<SubdivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubdivisionInclude, null>
  /**
   * Filter, which Subdivision to fetch.
  **/
  where: SubdivisionWhereUniqueInput
}


/**
 * Subdivision findFirst
 */
export type FindFirstSubdivisionArgs = {
  /**
   * Select specific fields to fetch from the Subdivision
  **/
  select?: XOR<SubdivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubdivisionInclude, null>
  /**
   * Filter, which Subdivision to fetch.
  **/
  where?: SubdivisionWhereInput
  orderBy?: XOR<Enumerable<SubdivisionOrderByInput>, SubdivisionOrderByInput>
  cursor?: SubdivisionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<SubdivisionDistinctFieldEnum>
}


/**
 * Subdivision findMany
 */
export type FindManySubdivisionArgs = {
  /**
   * Select specific fields to fetch from the Subdivision
  **/
  select?: XOR<SubdivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubdivisionInclude, null>
  /**
   * Filter, which Subdivisions to fetch.
  **/
  where?: SubdivisionWhereInput
  /**
   * Determine the order of the Subdivisions to fetch.
  **/
  orderBy?: XOR<Enumerable<SubdivisionOrderByInput>, SubdivisionOrderByInput>
  /**
   * Sets the position for listing Subdivisions.
  **/
  cursor?: SubdivisionWhereUniqueInput
  /**
   * The number of Subdivisions to fetch. If negative number, it will take Subdivisions before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Subdivisions.
  **/
  skip?: number
  distinct?: Enumerable<SubdivisionDistinctFieldEnum>
}


/**
 * Subdivision create
 */
export type SubdivisionCreateArgs = {
  /**
   * Select specific fields to fetch from the Subdivision
  **/
  select?: XOR<SubdivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubdivisionInclude, null>
  /**
   * The data needed to create a Subdivision.
  **/
  data: SubdivisionCreateInput
}


/**
 * Subdivision update
 */
export type SubdivisionUpdateArgs = {
  /**
   * Select specific fields to fetch from the Subdivision
  **/
  select?: XOR<SubdivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubdivisionInclude, null>
  /**
   * The data needed to update a Subdivision.
  **/
  data: SubdivisionUpdateInput
  /**
   * Choose, which Subdivision to update.
  **/
  where: SubdivisionWhereUniqueInput
}


/**
 * Subdivision updateMany
 */
export type SubdivisionUpdateManyArgs = {
  data: SubdivisionUpdateManyMutationInput
  where?: SubdivisionWhereInput
}


/**
 * Subdivision upsert
 */
export type SubdivisionUpsertArgs = {
  /**
   * Select specific fields to fetch from the Subdivision
  **/
  select?: XOR<SubdivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubdivisionInclude, null>
  /**
   * The filter to search for the Subdivision to update in case it exists.
  **/
  where: SubdivisionWhereUniqueInput
  /**
   * In case the Subdivision found by the `where` argument doesn't exist, create a new Subdivision with this data.
  **/
  create: SubdivisionCreateInput
  /**
   * In case the Subdivision was found with the provided `where` argument, update it with this data.
  **/
  update: SubdivisionUpdateInput
}


/**
 * Subdivision delete
 */
export type SubdivisionDeleteArgs = {
  /**
   * Select specific fields to fetch from the Subdivision
  **/
  select?: XOR<SubdivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubdivisionInclude, null>
  /**
   * Filter which Subdivision to delete.
  **/
  where: SubdivisionWhereUniqueInput
}


/**
 * Subdivision deleteMany
 */
export type SubdivisionDeleteManyArgs = {
  where?: SubdivisionWhereInput
}


/**
 * Subdivision without action
 */
export type SubdivisionArgs = {
  /**
   * Select specific fields to fetch from the Subdivision
  **/
  select?: XOR<SubdivisionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubdivisionInclude, null>
}



/**
 * Model Town
 */

export type Town = {
  id: string
  townName: string
  townCode: string
  subdivisionId: string
  createdAt: Date
  updatedAt: Date
}


export type AggregateTown = {
  count: number
}



export type AggregateTownArgs = {
  where?: TownWhereInput
  orderBy?: XOR<Enumerable<TownOrderByInput>, TownOrderByInput>
  cursor?: TownWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<TownDistinctFieldEnum>
  count?: true
}

export type GetTownAggregateType<T extends AggregateTownArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type TownSelect = {
  id?: boolean
  townName?: boolean
  townCode?: boolean
  school?: boolean | FindManySchoolArgs
  Subdivision?: boolean | SubdivisionArgs
  subdivisionId?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type TownInclude = {
  school?: boolean | FindManySchoolArgs
  Subdivision?: boolean | SubdivisionArgs
}

export type TownGetPayload<
  S extends boolean | null | undefined | TownArgs,
  U = keyof S
> = S extends true
  ? Town
  : S extends undefined
  ? never
  : S extends TownArgs | FindManyTownArgs
  ? 'include' extends U
    ? Town  & {
      [P in TrueKeys<S['include']>]:
      P extends 'school'
      ? Array<SchoolGetPayload<S['include'][P]>> :
      P extends 'Subdivision'
      ? SubdivisionGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Town ? Town[P]
: 
      P extends 'school'
      ? Array<SchoolGetPayload<S['select'][P]>> :
      P extends 'Subdivision'
      ? SubdivisionGetPayload<S['select'][P]> : never
    }
  : Town
: Town


export interface TownDelegate {
  /**
   * Find zero or one Town that matches the filter.
   * @param {FindOneTownArgs} args - Arguments to find a Town
   * @example
   * // Get one Town
   * const town = await prisma.town.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneTownArgs>(
    args: Subset<T, FindOneTownArgs>
  ): CheckSelect<T, Prisma__TownClient<Town | null>, Prisma__TownClient<TownGetPayload<T> | null>>
  /**
   * Find the first Town that matches the filter.
   * @param {FindFirstTownArgs} args - Arguments to find a Town
   * @example
   * // Get one Town
   * const town = await prisma.town.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstTownArgs>(
    args?: Subset<T, FindFirstTownArgs>
  ): CheckSelect<T, Prisma__TownClient<Town | null>, Prisma__TownClient<TownGetPayload<T> | null>>
  /**
   * Find zero or more Towns that matches the filter.
   * @param {FindManyTownArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Towns
   * const towns = await prisma.town.findMany()
   * 
   * // Get first 10 Towns
   * const towns = await prisma.town.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const townWithIdOnly = await prisma.town.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyTownArgs>(
    args?: Subset<T, FindManyTownArgs>
  ): CheckSelect<T, Promise<Array<Town>>, Promise<Array<TownGetPayload<T>>>>
  /**
   * Create a Town.
   * @param {TownCreateArgs} args - Arguments to create a Town.
   * @example
   * // Create one Town
   * const Town = await prisma.town.create({
   *   data: {
   *     // ... data to create a Town
   *   }
   * })
   * 
  **/
  create<T extends TownCreateArgs>(
    args: Subset<T, TownCreateArgs>
  ): CheckSelect<T, Prisma__TownClient<Town>, Prisma__TownClient<TownGetPayload<T>>>
  /**
   * Delete a Town.
   * @param {TownDeleteArgs} args - Arguments to delete one Town.
   * @example
   * // Delete one Town
   * const Town = await prisma.town.delete({
   *   where: {
   *     // ... filter to delete one Town
   *   }
   * })
   * 
  **/
  delete<T extends TownDeleteArgs>(
    args: Subset<T, TownDeleteArgs>
  ): CheckSelect<T, Prisma__TownClient<Town>, Prisma__TownClient<TownGetPayload<T>>>
  /**
   * Update one Town.
   * @param {TownUpdateArgs} args - Arguments to update one Town.
   * @example
   * // Update one Town
   * const town = await prisma.town.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends TownUpdateArgs>(
    args: Subset<T, TownUpdateArgs>
  ): CheckSelect<T, Prisma__TownClient<Town>, Prisma__TownClient<TownGetPayload<T>>>
  /**
   * Delete zero or more Towns.
   * @param {TownDeleteManyArgs} args - Arguments to filter Towns to delete.
   * @example
   * // Delete a few Towns
   * const { count } = await prisma.town.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends TownDeleteManyArgs>(
    args: Subset<T, TownDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Towns.
   * @param {TownUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Towns
   * const town = await prisma.town.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends TownUpdateManyArgs>(
    args: Subset<T, TownUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Town.
   * @param {TownUpsertArgs} args - Arguments to update or create a Town.
   * @example
   * // Update or create a Town
   * const town = await prisma.town.upsert({
   *   create: {
   *     // ... data to create a Town
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Town we want to update
   *   }
   * })
  **/
  upsert<T extends TownUpsertArgs>(
    args: Subset<T, TownUpsertArgs>
  ): CheckSelect<T, Prisma__TownClient<Town>, Prisma__TownClient<TownGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyTownArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateTownArgs>(args: Subset<T, AggregateTownArgs>): Promise<GetTownAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Town.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__TownClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  school<T extends FindManySchoolArgs = {}>(args?: Subset<T, FindManySchoolArgs>): CheckSelect<T, Promise<Array<School>>, Promise<Array<SchoolGetPayload<T>>>>;

  Subdivision<T extends SubdivisionArgs = {}>(args?: Subset<T, SubdivisionArgs>): CheckSelect<T, Prisma__SubdivisionClient<Subdivision | null>, Prisma__SubdivisionClient<SubdivisionGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Town findOne
 */
export type FindOneTownArgs = {
  /**
   * Select specific fields to fetch from the Town
  **/
  select?: XOR<TownSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<TownInclude, null>
  /**
   * Filter, which Town to fetch.
  **/
  where: TownWhereUniqueInput
}


/**
 * Town findFirst
 */
export type FindFirstTownArgs = {
  /**
   * Select specific fields to fetch from the Town
  **/
  select?: XOR<TownSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<TownInclude, null>
  /**
   * Filter, which Town to fetch.
  **/
  where?: TownWhereInput
  orderBy?: XOR<Enumerable<TownOrderByInput>, TownOrderByInput>
  cursor?: TownWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<TownDistinctFieldEnum>
}


/**
 * Town findMany
 */
export type FindManyTownArgs = {
  /**
   * Select specific fields to fetch from the Town
  **/
  select?: XOR<TownSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<TownInclude, null>
  /**
   * Filter, which Towns to fetch.
  **/
  where?: TownWhereInput
  /**
   * Determine the order of the Towns to fetch.
  **/
  orderBy?: XOR<Enumerable<TownOrderByInput>, TownOrderByInput>
  /**
   * Sets the position for listing Towns.
  **/
  cursor?: TownWhereUniqueInput
  /**
   * The number of Towns to fetch. If negative number, it will take Towns before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Towns.
  **/
  skip?: number
  distinct?: Enumerable<TownDistinctFieldEnum>
}


/**
 * Town create
 */
export type TownCreateArgs = {
  /**
   * Select specific fields to fetch from the Town
  **/
  select?: XOR<TownSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<TownInclude, null>
  /**
   * The data needed to create a Town.
  **/
  data: TownCreateInput
}


/**
 * Town update
 */
export type TownUpdateArgs = {
  /**
   * Select specific fields to fetch from the Town
  **/
  select?: XOR<TownSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<TownInclude, null>
  /**
   * The data needed to update a Town.
  **/
  data: TownUpdateInput
  /**
   * Choose, which Town to update.
  **/
  where: TownWhereUniqueInput
}


/**
 * Town updateMany
 */
export type TownUpdateManyArgs = {
  data: TownUpdateManyMutationInput
  where?: TownWhereInput
}


/**
 * Town upsert
 */
export type TownUpsertArgs = {
  /**
   * Select specific fields to fetch from the Town
  **/
  select?: XOR<TownSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<TownInclude, null>
  /**
   * The filter to search for the Town to update in case it exists.
  **/
  where: TownWhereUniqueInput
  /**
   * In case the Town found by the `where` argument doesn't exist, create a new Town with this data.
  **/
  create: TownCreateInput
  /**
   * In case the Town was found with the provided `where` argument, update it with this data.
  **/
  update: TownUpdateInput
}


/**
 * Town delete
 */
export type TownDeleteArgs = {
  /**
   * Select specific fields to fetch from the Town
  **/
  select?: XOR<TownSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<TownInclude, null>
  /**
   * Filter which Town to delete.
  **/
  where: TownWhereUniqueInput
}


/**
 * Town deleteMany
 */
export type TownDeleteManyArgs = {
  where?: TownWhereInput
}


/**
 * Town without action
 */
export type TownArgs = {
  /**
   * Select specific fields to fetch from the Town
  **/
  select?: XOR<TownSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<TownInclude, null>
}



/**
 * Model School
 */

export type School = {
  id: string
  schoolName: string
  schoolNumber: string
  schoolCode: string
  townId: string
  createdAt: Date
  updatedAt: Date
}


export type AggregateSchool = {
  count: number
}



export type AggregateSchoolArgs = {
  where?: SchoolWhereInput
  orderBy?: XOR<Enumerable<SchoolOrderByInput>, SchoolOrderByInput>
  cursor?: SchoolWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<SchoolDistinctFieldEnum>
  count?: true
}

export type GetSchoolAggregateType<T extends AggregateSchoolArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type SchoolSelect = {
  id?: boolean
  schoolName?: boolean
  schoolNumber?: boolean
  schoolCode?: boolean
  section?: boolean | FindManySectionArgs
  Town?: boolean | TownArgs
  townId?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type SchoolInclude = {
  section?: boolean | FindManySectionArgs
  Town?: boolean | TownArgs
}

export type SchoolGetPayload<
  S extends boolean | null | undefined | SchoolArgs,
  U = keyof S
> = S extends true
  ? School
  : S extends undefined
  ? never
  : S extends SchoolArgs | FindManySchoolArgs
  ? 'include' extends U
    ? School  & {
      [P in TrueKeys<S['include']>]:
      P extends 'section'
      ? Array<SectionGetPayload<S['include'][P]>> :
      P extends 'Town'
      ? TownGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof School ? School[P]
: 
      P extends 'section'
      ? Array<SectionGetPayload<S['select'][P]>> :
      P extends 'Town'
      ? TownGetPayload<S['select'][P]> : never
    }
  : School
: School


export interface SchoolDelegate {
  /**
   * Find zero or one School that matches the filter.
   * @param {FindOneSchoolArgs} args - Arguments to find a School
   * @example
   * // Get one School
   * const school = await prisma.school.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneSchoolArgs>(
    args: Subset<T, FindOneSchoolArgs>
  ): CheckSelect<T, Prisma__SchoolClient<School | null>, Prisma__SchoolClient<SchoolGetPayload<T> | null>>
  /**
   * Find the first School that matches the filter.
   * @param {FindFirstSchoolArgs} args - Arguments to find a School
   * @example
   * // Get one School
   * const school = await prisma.school.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstSchoolArgs>(
    args?: Subset<T, FindFirstSchoolArgs>
  ): CheckSelect<T, Prisma__SchoolClient<School | null>, Prisma__SchoolClient<SchoolGetPayload<T> | null>>
  /**
   * Find zero or more Schools that matches the filter.
   * @param {FindManySchoolArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Schools
   * const schools = await prisma.school.findMany()
   * 
   * // Get first 10 Schools
   * const schools = await prisma.school.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManySchoolArgs>(
    args?: Subset<T, FindManySchoolArgs>
  ): CheckSelect<T, Promise<Array<School>>, Promise<Array<SchoolGetPayload<T>>>>
  /**
   * Create a School.
   * @param {SchoolCreateArgs} args - Arguments to create a School.
   * @example
   * // Create one School
   * const School = await prisma.school.create({
   *   data: {
   *     // ... data to create a School
   *   }
   * })
   * 
  **/
  create<T extends SchoolCreateArgs>(
    args: Subset<T, SchoolCreateArgs>
  ): CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>>
  /**
   * Delete a School.
   * @param {SchoolDeleteArgs} args - Arguments to delete one School.
   * @example
   * // Delete one School
   * const School = await prisma.school.delete({
   *   where: {
   *     // ... filter to delete one School
   *   }
   * })
   * 
  **/
  delete<T extends SchoolDeleteArgs>(
    args: Subset<T, SchoolDeleteArgs>
  ): CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>>
  /**
   * Update one School.
   * @param {SchoolUpdateArgs} args - Arguments to update one School.
   * @example
   * // Update one School
   * const school = await prisma.school.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends SchoolUpdateArgs>(
    args: Subset<T, SchoolUpdateArgs>
  ): CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>>
  /**
   * Delete zero or more Schools.
   * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
   * @example
   * // Delete a few Schools
   * const { count } = await prisma.school.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends SchoolDeleteManyArgs>(
    args: Subset<T, SchoolDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Schools.
   * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Schools
   * const school = await prisma.school.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends SchoolUpdateManyArgs>(
    args: Subset<T, SchoolUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one School.
   * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
   * @example
   * // Update or create a School
   * const school = await prisma.school.upsert({
   *   create: {
   *     // ... data to create a School
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the School we want to update
   *   }
   * })
  **/
  upsert<T extends SchoolUpsertArgs>(
    args: Subset<T, SchoolUpsertArgs>
  ): CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManySchoolArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateSchoolArgs>(args: Subset<T, AggregateSchoolArgs>): Promise<GetSchoolAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for School.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__SchoolClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  section<T extends FindManySectionArgs = {}>(args?: Subset<T, FindManySectionArgs>): CheckSelect<T, Promise<Array<Section>>, Promise<Array<SectionGetPayload<T>>>>;

  Town<T extends TownArgs = {}>(args?: Subset<T, TownArgs>): CheckSelect<T, Prisma__TownClient<Town | null>, Prisma__TownClient<TownGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * School findOne
 */
export type FindOneSchoolArgs = {
  /**
   * Select specific fields to fetch from the School
  **/
  select?: XOR<SchoolSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolInclude, null>
  /**
   * Filter, which School to fetch.
  **/
  where: SchoolWhereUniqueInput
}


/**
 * School findFirst
 */
export type FindFirstSchoolArgs = {
  /**
   * Select specific fields to fetch from the School
  **/
  select?: XOR<SchoolSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolInclude, null>
  /**
   * Filter, which School to fetch.
  **/
  where?: SchoolWhereInput
  orderBy?: XOR<Enumerable<SchoolOrderByInput>, SchoolOrderByInput>
  cursor?: SchoolWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<SchoolDistinctFieldEnum>
}


/**
 * School findMany
 */
export type FindManySchoolArgs = {
  /**
   * Select specific fields to fetch from the School
  **/
  select?: XOR<SchoolSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolInclude, null>
  /**
   * Filter, which Schools to fetch.
  **/
  where?: SchoolWhereInput
  /**
   * Determine the order of the Schools to fetch.
  **/
  orderBy?: XOR<Enumerable<SchoolOrderByInput>, SchoolOrderByInput>
  /**
   * Sets the position for listing Schools.
  **/
  cursor?: SchoolWhereUniqueInput
  /**
   * The number of Schools to fetch. If negative number, it will take Schools before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Schools.
  **/
  skip?: number
  distinct?: Enumerable<SchoolDistinctFieldEnum>
}


/**
 * School create
 */
export type SchoolCreateArgs = {
  /**
   * Select specific fields to fetch from the School
  **/
  select?: XOR<SchoolSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolInclude, null>
  /**
   * The data needed to create a School.
  **/
  data: SchoolCreateInput
}


/**
 * School update
 */
export type SchoolUpdateArgs = {
  /**
   * Select specific fields to fetch from the School
  **/
  select?: XOR<SchoolSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolInclude, null>
  /**
   * The data needed to update a School.
  **/
  data: SchoolUpdateInput
  /**
   * Choose, which School to update.
  **/
  where: SchoolWhereUniqueInput
}


/**
 * School updateMany
 */
export type SchoolUpdateManyArgs = {
  data: SchoolUpdateManyMutationInput
  where?: SchoolWhereInput
}


/**
 * School upsert
 */
export type SchoolUpsertArgs = {
  /**
   * Select specific fields to fetch from the School
  **/
  select?: XOR<SchoolSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolInclude, null>
  /**
   * The filter to search for the School to update in case it exists.
  **/
  where: SchoolWhereUniqueInput
  /**
   * In case the School found by the `where` argument doesn't exist, create a new School with this data.
  **/
  create: SchoolCreateInput
  /**
   * In case the School was found with the provided `where` argument, update it with this data.
  **/
  update: SchoolUpdateInput
}


/**
 * School delete
 */
export type SchoolDeleteArgs = {
  /**
   * Select specific fields to fetch from the School
  **/
  select?: XOR<SchoolSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolInclude, null>
  /**
   * Filter which School to delete.
  **/
  where: SchoolWhereUniqueInput
}


/**
 * School deleteMany
 */
export type SchoolDeleteManyArgs = {
  where?: SchoolWhereInput
}


/**
 * School without action
 */
export type SchoolArgs = {
  /**
   * Select specific fields to fetch from the School
  **/
  select?: XOR<SchoolSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolInclude, null>
}



/**
 * Model Section
 */

export type Section = {
  id: string
  sectionName: string
  sectionCode: string
  schoolId: string
  createdAt: Date
  updatedAt: Date
}


export type AggregateSection = {
  count: number
}



export type AggregateSectionArgs = {
  where?: SectionWhereInput
  orderBy?: XOR<Enumerable<SectionOrderByInput>, SectionOrderByInput>
  cursor?: SectionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<SectionDistinctFieldEnum>
  count?: true
}

export type GetSectionAggregateType<T extends AggregateSectionArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type SectionSelect = {
  id?: boolean
  sectionName?: boolean
  sectionCode?: boolean
  department?: boolean | FindManyDepartmentArgs
  School?: boolean | SchoolArgs
  schoolId?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type SectionInclude = {
  department?: boolean | FindManyDepartmentArgs
  School?: boolean | SchoolArgs
}

export type SectionGetPayload<
  S extends boolean | null | undefined | SectionArgs,
  U = keyof S
> = S extends true
  ? Section
  : S extends undefined
  ? never
  : S extends SectionArgs | FindManySectionArgs
  ? 'include' extends U
    ? Section  & {
      [P in TrueKeys<S['include']>]:
      P extends 'department'
      ? Array<DepartmentGetPayload<S['include'][P]>> :
      P extends 'School'
      ? SchoolGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Section ? Section[P]
: 
      P extends 'department'
      ? Array<DepartmentGetPayload<S['select'][P]>> :
      P extends 'School'
      ? SchoolGetPayload<S['select'][P]> : never
    }
  : Section
: Section


export interface SectionDelegate {
  /**
   * Find zero or one Section that matches the filter.
   * @param {FindOneSectionArgs} args - Arguments to find a Section
   * @example
   * // Get one Section
   * const section = await prisma.section.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneSectionArgs>(
    args: Subset<T, FindOneSectionArgs>
  ): CheckSelect<T, Prisma__SectionClient<Section | null>, Prisma__SectionClient<SectionGetPayload<T> | null>>
  /**
   * Find the first Section that matches the filter.
   * @param {FindFirstSectionArgs} args - Arguments to find a Section
   * @example
   * // Get one Section
   * const section = await prisma.section.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstSectionArgs>(
    args?: Subset<T, FindFirstSectionArgs>
  ): CheckSelect<T, Prisma__SectionClient<Section | null>, Prisma__SectionClient<SectionGetPayload<T> | null>>
  /**
   * Find zero or more Sections that matches the filter.
   * @param {FindManySectionArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Sections
   * const sections = await prisma.section.findMany()
   * 
   * // Get first 10 Sections
   * const sections = await prisma.section.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManySectionArgs>(
    args?: Subset<T, FindManySectionArgs>
  ): CheckSelect<T, Promise<Array<Section>>, Promise<Array<SectionGetPayload<T>>>>
  /**
   * Create a Section.
   * @param {SectionCreateArgs} args - Arguments to create a Section.
   * @example
   * // Create one Section
   * const Section = await prisma.section.create({
   *   data: {
   *     // ... data to create a Section
   *   }
   * })
   * 
  **/
  create<T extends SectionCreateArgs>(
    args: Subset<T, SectionCreateArgs>
  ): CheckSelect<T, Prisma__SectionClient<Section>, Prisma__SectionClient<SectionGetPayload<T>>>
  /**
   * Delete a Section.
   * @param {SectionDeleteArgs} args - Arguments to delete one Section.
   * @example
   * // Delete one Section
   * const Section = await prisma.section.delete({
   *   where: {
   *     // ... filter to delete one Section
   *   }
   * })
   * 
  **/
  delete<T extends SectionDeleteArgs>(
    args: Subset<T, SectionDeleteArgs>
  ): CheckSelect<T, Prisma__SectionClient<Section>, Prisma__SectionClient<SectionGetPayload<T>>>
  /**
   * Update one Section.
   * @param {SectionUpdateArgs} args - Arguments to update one Section.
   * @example
   * // Update one Section
   * const section = await prisma.section.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends SectionUpdateArgs>(
    args: Subset<T, SectionUpdateArgs>
  ): CheckSelect<T, Prisma__SectionClient<Section>, Prisma__SectionClient<SectionGetPayload<T>>>
  /**
   * Delete zero or more Sections.
   * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
   * @example
   * // Delete a few Sections
   * const { count } = await prisma.section.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends SectionDeleteManyArgs>(
    args: Subset<T, SectionDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Sections.
   * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Sections
   * const section = await prisma.section.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends SectionUpdateManyArgs>(
    args: Subset<T, SectionUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Section.
   * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
   * @example
   * // Update or create a Section
   * const section = await prisma.section.upsert({
   *   create: {
   *     // ... data to create a Section
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Section we want to update
   *   }
   * })
  **/
  upsert<T extends SectionUpsertArgs>(
    args: Subset<T, SectionUpsertArgs>
  ): CheckSelect<T, Prisma__SectionClient<Section>, Prisma__SectionClient<SectionGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManySectionArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateSectionArgs>(args: Subset<T, AggregateSectionArgs>): Promise<GetSectionAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Section.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__SectionClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  department<T extends FindManyDepartmentArgs = {}>(args?: Subset<T, FindManyDepartmentArgs>): CheckSelect<T, Promise<Array<Department>>, Promise<Array<DepartmentGetPayload<T>>>>;

  School<T extends SchoolArgs = {}>(args?: Subset<T, SchoolArgs>): CheckSelect<T, Prisma__SchoolClient<School | null>, Prisma__SchoolClient<SchoolGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Section findOne
 */
export type FindOneSectionArgs = {
  /**
   * Select specific fields to fetch from the Section
  **/
  select?: XOR<SectionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SectionInclude, null>
  /**
   * Filter, which Section to fetch.
  **/
  where: SectionWhereUniqueInput
}


/**
 * Section findFirst
 */
export type FindFirstSectionArgs = {
  /**
   * Select specific fields to fetch from the Section
  **/
  select?: XOR<SectionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SectionInclude, null>
  /**
   * Filter, which Section to fetch.
  **/
  where?: SectionWhereInput
  orderBy?: XOR<Enumerable<SectionOrderByInput>, SectionOrderByInput>
  cursor?: SectionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<SectionDistinctFieldEnum>
}


/**
 * Section findMany
 */
export type FindManySectionArgs = {
  /**
   * Select specific fields to fetch from the Section
  **/
  select?: XOR<SectionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SectionInclude, null>
  /**
   * Filter, which Sections to fetch.
  **/
  where?: SectionWhereInput
  /**
   * Determine the order of the Sections to fetch.
  **/
  orderBy?: XOR<Enumerable<SectionOrderByInput>, SectionOrderByInput>
  /**
   * Sets the position for listing Sections.
  **/
  cursor?: SectionWhereUniqueInput
  /**
   * The number of Sections to fetch. If negative number, it will take Sections before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Sections.
  **/
  skip?: number
  distinct?: Enumerable<SectionDistinctFieldEnum>
}


/**
 * Section create
 */
export type SectionCreateArgs = {
  /**
   * Select specific fields to fetch from the Section
  **/
  select?: XOR<SectionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SectionInclude, null>
  /**
   * The data needed to create a Section.
  **/
  data: SectionCreateInput
}


/**
 * Section update
 */
export type SectionUpdateArgs = {
  /**
   * Select specific fields to fetch from the Section
  **/
  select?: XOR<SectionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SectionInclude, null>
  /**
   * The data needed to update a Section.
  **/
  data: SectionUpdateInput
  /**
   * Choose, which Section to update.
  **/
  where: SectionWhereUniqueInput
}


/**
 * Section updateMany
 */
export type SectionUpdateManyArgs = {
  data: SectionUpdateManyMutationInput
  where?: SectionWhereInput
}


/**
 * Section upsert
 */
export type SectionUpsertArgs = {
  /**
   * Select specific fields to fetch from the Section
  **/
  select?: XOR<SectionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SectionInclude, null>
  /**
   * The filter to search for the Section to update in case it exists.
  **/
  where: SectionWhereUniqueInput
  /**
   * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
  **/
  create: SectionCreateInput
  /**
   * In case the Section was found with the provided `where` argument, update it with this data.
  **/
  update: SectionUpdateInput
}


/**
 * Section delete
 */
export type SectionDeleteArgs = {
  /**
   * Select specific fields to fetch from the Section
  **/
  select?: XOR<SectionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SectionInclude, null>
  /**
   * Filter which Section to delete.
  **/
  where: SectionWhereUniqueInput
}


/**
 * Section deleteMany
 */
export type SectionDeleteManyArgs = {
  where?: SectionWhereInput
}


/**
 * Section without action
 */
export type SectionArgs = {
  /**
   * Select specific fields to fetch from the Section
  **/
  select?: XOR<SectionSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SectionInclude, null>
}



/**
 * Model Department
 */

export type Department = {
  id: string
  deptName: string
  deptCode: string
  sectionId: string
  createdAt: Date
  updatedAt: Date
}


export type AggregateDepartment = {
  count: number
}



export type AggregateDepartmentArgs = {
  where?: DepartmentWhereInput
  orderBy?: XOR<Enumerable<DepartmentOrderByInput>, DepartmentOrderByInput>
  cursor?: DepartmentWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<DepartmentDistinctFieldEnum>
  count?: true
}

export type GetDepartmentAggregateType<T extends AggregateDepartmentArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type DepartmentSelect = {
  id?: boolean
  deptName?: boolean
  deptCode?: boolean
  annProfDept?: boolean | FindManyAnnProfDeptArgs
  subject?: boolean | FindManySubjectArgs
  Section?: boolean | SectionArgs
  sectionId?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type DepartmentInclude = {
  annProfDept?: boolean | FindManyAnnProfDeptArgs
  subject?: boolean | FindManySubjectArgs
  Section?: boolean | SectionArgs
}

export type DepartmentGetPayload<
  S extends boolean | null | undefined | DepartmentArgs,
  U = keyof S
> = S extends true
  ? Department
  : S extends undefined
  ? never
  : S extends DepartmentArgs | FindManyDepartmentArgs
  ? 'include' extends U
    ? Department  & {
      [P in TrueKeys<S['include']>]:
      P extends 'annProfDept'
      ? Array<AnnProfDeptGetPayload<S['include'][P]>> :
      P extends 'subject'
      ? Array<SubjectGetPayload<S['include'][P]>> :
      P extends 'Section'
      ? SectionGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Department ? Department[P]
: 
      P extends 'annProfDept'
      ? Array<AnnProfDeptGetPayload<S['select'][P]>> :
      P extends 'subject'
      ? Array<SubjectGetPayload<S['select'][P]>> :
      P extends 'Section'
      ? SectionGetPayload<S['select'][P]> : never
    }
  : Department
: Department


export interface DepartmentDelegate {
  /**
   * Find zero or one Department that matches the filter.
   * @param {FindOneDepartmentArgs} args - Arguments to find a Department
   * @example
   * // Get one Department
   * const department = await prisma.department.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneDepartmentArgs>(
    args: Subset<T, FindOneDepartmentArgs>
  ): CheckSelect<T, Prisma__DepartmentClient<Department | null>, Prisma__DepartmentClient<DepartmentGetPayload<T> | null>>
  /**
   * Find the first Department that matches the filter.
   * @param {FindFirstDepartmentArgs} args - Arguments to find a Department
   * @example
   * // Get one Department
   * const department = await prisma.department.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstDepartmentArgs>(
    args?: Subset<T, FindFirstDepartmentArgs>
  ): CheckSelect<T, Prisma__DepartmentClient<Department | null>, Prisma__DepartmentClient<DepartmentGetPayload<T> | null>>
  /**
   * Find zero or more Departments that matches the filter.
   * @param {FindManyDepartmentArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Departments
   * const departments = await prisma.department.findMany()
   * 
   * // Get first 10 Departments
   * const departments = await prisma.department.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyDepartmentArgs>(
    args?: Subset<T, FindManyDepartmentArgs>
  ): CheckSelect<T, Promise<Array<Department>>, Promise<Array<DepartmentGetPayload<T>>>>
  /**
   * Create a Department.
   * @param {DepartmentCreateArgs} args - Arguments to create a Department.
   * @example
   * // Create one Department
   * const Department = await prisma.department.create({
   *   data: {
   *     // ... data to create a Department
   *   }
   * })
   * 
  **/
  create<T extends DepartmentCreateArgs>(
    args: Subset<T, DepartmentCreateArgs>
  ): CheckSelect<T, Prisma__DepartmentClient<Department>, Prisma__DepartmentClient<DepartmentGetPayload<T>>>
  /**
   * Delete a Department.
   * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
   * @example
   * // Delete one Department
   * const Department = await prisma.department.delete({
   *   where: {
   *     // ... filter to delete one Department
   *   }
   * })
   * 
  **/
  delete<T extends DepartmentDeleteArgs>(
    args: Subset<T, DepartmentDeleteArgs>
  ): CheckSelect<T, Prisma__DepartmentClient<Department>, Prisma__DepartmentClient<DepartmentGetPayload<T>>>
  /**
   * Update one Department.
   * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
   * @example
   * // Update one Department
   * const department = await prisma.department.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends DepartmentUpdateArgs>(
    args: Subset<T, DepartmentUpdateArgs>
  ): CheckSelect<T, Prisma__DepartmentClient<Department>, Prisma__DepartmentClient<DepartmentGetPayload<T>>>
  /**
   * Delete zero or more Departments.
   * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
   * @example
   * // Delete a few Departments
   * const { count } = await prisma.department.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends DepartmentDeleteManyArgs>(
    args: Subset<T, DepartmentDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Departments.
   * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Departments
   * const department = await prisma.department.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends DepartmentUpdateManyArgs>(
    args: Subset<T, DepartmentUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Department.
   * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
   * @example
   * // Update or create a Department
   * const department = await prisma.department.upsert({
   *   create: {
   *     // ... data to create a Department
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Department we want to update
   *   }
   * })
  **/
  upsert<T extends DepartmentUpsertArgs>(
    args: Subset<T, DepartmentUpsertArgs>
  ): CheckSelect<T, Prisma__DepartmentClient<Department>, Prisma__DepartmentClient<DepartmentGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyDepartmentArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateDepartmentArgs>(args: Subset<T, AggregateDepartmentArgs>): Promise<GetDepartmentAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Department.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__DepartmentClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  annProfDept<T extends FindManyAnnProfDeptArgs = {}>(args?: Subset<T, FindManyAnnProfDeptArgs>): CheckSelect<T, Promise<Array<AnnProfDept>>, Promise<Array<AnnProfDeptGetPayload<T>>>>;

  subject<T extends FindManySubjectArgs = {}>(args?: Subset<T, FindManySubjectArgs>): CheckSelect<T, Promise<Array<Subject>>, Promise<Array<SubjectGetPayload<T>>>>;

  Section<T extends SectionArgs = {}>(args?: Subset<T, SectionArgs>): CheckSelect<T, Prisma__SectionClient<Section | null>, Prisma__SectionClient<SectionGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Department findOne
 */
export type FindOneDepartmentArgs = {
  /**
   * Select specific fields to fetch from the Department
  **/
  select?: XOR<DepartmentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DepartmentInclude, null>
  /**
   * Filter, which Department to fetch.
  **/
  where: DepartmentWhereUniqueInput
}


/**
 * Department findFirst
 */
export type FindFirstDepartmentArgs = {
  /**
   * Select specific fields to fetch from the Department
  **/
  select?: XOR<DepartmentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DepartmentInclude, null>
  /**
   * Filter, which Department to fetch.
  **/
  where?: DepartmentWhereInput
  orderBy?: XOR<Enumerable<DepartmentOrderByInput>, DepartmentOrderByInput>
  cursor?: DepartmentWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<DepartmentDistinctFieldEnum>
}


/**
 * Department findMany
 */
export type FindManyDepartmentArgs = {
  /**
   * Select specific fields to fetch from the Department
  **/
  select?: XOR<DepartmentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DepartmentInclude, null>
  /**
   * Filter, which Departments to fetch.
  **/
  where?: DepartmentWhereInput
  /**
   * Determine the order of the Departments to fetch.
  **/
  orderBy?: XOR<Enumerable<DepartmentOrderByInput>, DepartmentOrderByInput>
  /**
   * Sets the position for listing Departments.
  **/
  cursor?: DepartmentWhereUniqueInput
  /**
   * The number of Departments to fetch. If negative number, it will take Departments before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Departments.
  **/
  skip?: number
  distinct?: Enumerable<DepartmentDistinctFieldEnum>
}


/**
 * Department create
 */
export type DepartmentCreateArgs = {
  /**
   * Select specific fields to fetch from the Department
  **/
  select?: XOR<DepartmentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DepartmentInclude, null>
  /**
   * The data needed to create a Department.
  **/
  data: DepartmentCreateInput
}


/**
 * Department update
 */
export type DepartmentUpdateArgs = {
  /**
   * Select specific fields to fetch from the Department
  **/
  select?: XOR<DepartmentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DepartmentInclude, null>
  /**
   * The data needed to update a Department.
  **/
  data: DepartmentUpdateInput
  /**
   * Choose, which Department to update.
  **/
  where: DepartmentWhereUniqueInput
}


/**
 * Department updateMany
 */
export type DepartmentUpdateManyArgs = {
  data: DepartmentUpdateManyMutationInput
  where?: DepartmentWhereInput
}


/**
 * Department upsert
 */
export type DepartmentUpsertArgs = {
  /**
   * Select specific fields to fetch from the Department
  **/
  select?: XOR<DepartmentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DepartmentInclude, null>
  /**
   * The filter to search for the Department to update in case it exists.
  **/
  where: DepartmentWhereUniqueInput
  /**
   * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
  **/
  create: DepartmentCreateInput
  /**
   * In case the Department was found with the provided `where` argument, update it with this data.
  **/
  update: DepartmentUpdateInput
}


/**
 * Department delete
 */
export type DepartmentDeleteArgs = {
  /**
   * Select specific fields to fetch from the Department
  **/
  select?: XOR<DepartmentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DepartmentInclude, null>
  /**
   * Filter which Department to delete.
  **/
  where: DepartmentWhereUniqueInput
}


/**
 * Department deleteMany
 */
export type DepartmentDeleteManyArgs = {
  where?: DepartmentWhereInput
}


/**
 * Department without action
 */
export type DepartmentArgs = {
  /**
   * Select specific fields to fetch from the Department
  **/
  select?: XOR<DepartmentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<DepartmentInclude, null>
}



/**
 * Model Term
 */

export type Term = {
  id: string
  termName: string
  termCode: string
  createdAt: Date
  updatedAt: Date
}


export type AggregateTerm = {
  count: number
}



export type AggregateTermArgs = {
  where?: TermWhereInput
  orderBy?: XOR<Enumerable<TermOrderByInput>, TermOrderByInput>
  cursor?: TermWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<TermDistinctFieldEnum>
  count?: true
}

export type GetTermAggregateType<T extends AggregateTermArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type TermSelect = {
  id?: boolean
  termName?: boolean
  termCode?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type TermGetPayload<
  S extends boolean | null | undefined | TermArgs,
  U = keyof S
> = S extends true
  ? Term
  : S extends undefined
  ? never
  : S extends TermArgs | FindManyTermArgs
  ? 'include' extends U
    ? Term 
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Term ? Term[P]
: 
 never
    }
  : Term
: Term


export interface TermDelegate {
  /**
   * Find zero or one Term that matches the filter.
   * @param {FindOneTermArgs} args - Arguments to find a Term
   * @example
   * // Get one Term
   * const term = await prisma.term.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneTermArgs>(
    args: Subset<T, FindOneTermArgs>
  ): CheckSelect<T, Prisma__TermClient<Term | null>, Prisma__TermClient<TermGetPayload<T> | null>>
  /**
   * Find the first Term that matches the filter.
   * @param {FindFirstTermArgs} args - Arguments to find a Term
   * @example
   * // Get one Term
   * const term = await prisma.term.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstTermArgs>(
    args?: Subset<T, FindFirstTermArgs>
  ): CheckSelect<T, Prisma__TermClient<Term | null>, Prisma__TermClient<TermGetPayload<T> | null>>
  /**
   * Find zero or more Terms that matches the filter.
   * @param {FindManyTermArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Terms
   * const terms = await prisma.term.findMany()
   * 
   * // Get first 10 Terms
   * const terms = await prisma.term.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const termWithIdOnly = await prisma.term.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyTermArgs>(
    args?: Subset<T, FindManyTermArgs>
  ): CheckSelect<T, Promise<Array<Term>>, Promise<Array<TermGetPayload<T>>>>
  /**
   * Create a Term.
   * @param {TermCreateArgs} args - Arguments to create a Term.
   * @example
   * // Create one Term
   * const Term = await prisma.term.create({
   *   data: {
   *     // ... data to create a Term
   *   }
   * })
   * 
  **/
  create<T extends TermCreateArgs>(
    args: Subset<T, TermCreateArgs>
  ): CheckSelect<T, Prisma__TermClient<Term>, Prisma__TermClient<TermGetPayload<T>>>
  /**
   * Delete a Term.
   * @param {TermDeleteArgs} args - Arguments to delete one Term.
   * @example
   * // Delete one Term
   * const Term = await prisma.term.delete({
   *   where: {
   *     // ... filter to delete one Term
   *   }
   * })
   * 
  **/
  delete<T extends TermDeleteArgs>(
    args: Subset<T, TermDeleteArgs>
  ): CheckSelect<T, Prisma__TermClient<Term>, Prisma__TermClient<TermGetPayload<T>>>
  /**
   * Update one Term.
   * @param {TermUpdateArgs} args - Arguments to update one Term.
   * @example
   * // Update one Term
   * const term = await prisma.term.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends TermUpdateArgs>(
    args: Subset<T, TermUpdateArgs>
  ): CheckSelect<T, Prisma__TermClient<Term>, Prisma__TermClient<TermGetPayload<T>>>
  /**
   * Delete zero or more Terms.
   * @param {TermDeleteManyArgs} args - Arguments to filter Terms to delete.
   * @example
   * // Delete a few Terms
   * const { count } = await prisma.term.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends TermDeleteManyArgs>(
    args: Subset<T, TermDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Terms.
   * @param {TermUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Terms
   * const term = await prisma.term.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends TermUpdateManyArgs>(
    args: Subset<T, TermUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Term.
   * @param {TermUpsertArgs} args - Arguments to update or create a Term.
   * @example
   * // Update or create a Term
   * const term = await prisma.term.upsert({
   *   create: {
   *     // ... data to create a Term
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Term we want to update
   *   }
   * })
  **/
  upsert<T extends TermUpsertArgs>(
    args: Subset<T, TermUpsertArgs>
  ): CheckSelect<T, Prisma__TermClient<Term>, Prisma__TermClient<TermGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyTermArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateTermArgs>(args: Subset<T, AggregateTermArgs>): Promise<GetTermAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Term.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__TermClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';


  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Term findOne
 */
export type FindOneTermArgs = {
  /**
   * Select specific fields to fetch from the Term
  **/
  select?: XOR<TermSelect, null>
  /**
   * Filter, which Term to fetch.
  **/
  where: TermWhereUniqueInput
}


/**
 * Term findFirst
 */
export type FindFirstTermArgs = {
  /**
   * Select specific fields to fetch from the Term
  **/
  select?: XOR<TermSelect, null>
  /**
   * Filter, which Term to fetch.
  **/
  where?: TermWhereInput
  orderBy?: XOR<Enumerable<TermOrderByInput>, TermOrderByInput>
  cursor?: TermWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<TermDistinctFieldEnum>
}


/**
 * Term findMany
 */
export type FindManyTermArgs = {
  /**
   * Select specific fields to fetch from the Term
  **/
  select?: XOR<TermSelect, null>
  /**
   * Filter, which Terms to fetch.
  **/
  where?: TermWhereInput
  /**
   * Determine the order of the Terms to fetch.
  **/
  orderBy?: XOR<Enumerable<TermOrderByInput>, TermOrderByInput>
  /**
   * Sets the position for listing Terms.
  **/
  cursor?: TermWhereUniqueInput
  /**
   * The number of Terms to fetch. If negative number, it will take Terms before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Terms.
  **/
  skip?: number
  distinct?: Enumerable<TermDistinctFieldEnum>
}


/**
 * Term create
 */
export type TermCreateArgs = {
  /**
   * Select specific fields to fetch from the Term
  **/
  select?: XOR<TermSelect, null>
  /**
   * The data needed to create a Term.
  **/
  data: TermCreateInput
}


/**
 * Term update
 */
export type TermUpdateArgs = {
  /**
   * Select specific fields to fetch from the Term
  **/
  select?: XOR<TermSelect, null>
  /**
   * The data needed to update a Term.
  **/
  data: TermUpdateInput
  /**
   * Choose, which Term to update.
  **/
  where: TermWhereUniqueInput
}


/**
 * Term updateMany
 */
export type TermUpdateManyArgs = {
  data: TermUpdateManyMutationInput
  where?: TermWhereInput
}


/**
 * Term upsert
 */
export type TermUpsertArgs = {
  /**
   * Select specific fields to fetch from the Term
  **/
  select?: XOR<TermSelect, null>
  /**
   * The filter to search for the Term to update in case it exists.
  **/
  where: TermWhereUniqueInput
  /**
   * In case the Term found by the `where` argument doesn't exist, create a new Term with this data.
  **/
  create: TermCreateInput
  /**
   * In case the Term was found with the provided `where` argument, update it with this data.
  **/
  update: TermUpdateInput
}


/**
 * Term delete
 */
export type TermDeleteArgs = {
  /**
   * Select specific fields to fetch from the Term
  **/
  select?: XOR<TermSelect, null>
  /**
   * Filter which Term to delete.
  **/
  where: TermWhereUniqueInput
}


/**
 * Term deleteMany
 */
export type TermDeleteManyArgs = {
  where?: TermWhereInput
}


/**
 * Term without action
 */
export type TermArgs = {
  /**
   * Select specific fields to fetch from the Term
  **/
  select?: XOR<TermSelect, null>
}



/**
 * Model Sequence
 */

export type Sequence = {
  id: string
  seqName: string
  seqCode: string
  createdAt: Date
  updatedAt: Date
  scoreId: string
}


export type AggregateSequence = {
  count: number
}



export type AggregateSequenceArgs = {
  where?: SequenceWhereInput
  orderBy?: XOR<Enumerable<SequenceOrderByInput>, SequenceOrderByInput>
  cursor?: SequenceWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<SequenceDistinctFieldEnum>
  count?: true
}

export type GetSequenceAggregateType<T extends AggregateSequenceArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type SequenceSelect = {
  id?: boolean
  seqName?: boolean
  seqCode?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  Score?: boolean | ScoreArgs
  scoreId?: boolean
}

export type SequenceInclude = {
  Score?: boolean | ScoreArgs
}

export type SequenceGetPayload<
  S extends boolean | null | undefined | SequenceArgs,
  U = keyof S
> = S extends true
  ? Sequence
  : S extends undefined
  ? never
  : S extends SequenceArgs | FindManySequenceArgs
  ? 'include' extends U
    ? Sequence  & {
      [P in TrueKeys<S['include']>]:
      P extends 'Score'
      ? ScoreGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Sequence ? Sequence[P]
: 
      P extends 'Score'
      ? ScoreGetPayload<S['select'][P]> : never
    }
  : Sequence
: Sequence


export interface SequenceDelegate {
  /**
   * Find zero or one Sequence that matches the filter.
   * @param {FindOneSequenceArgs} args - Arguments to find a Sequence
   * @example
   * // Get one Sequence
   * const sequence = await prisma.sequence.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneSequenceArgs>(
    args: Subset<T, FindOneSequenceArgs>
  ): CheckSelect<T, Prisma__SequenceClient<Sequence | null>, Prisma__SequenceClient<SequenceGetPayload<T> | null>>
  /**
   * Find the first Sequence that matches the filter.
   * @param {FindFirstSequenceArgs} args - Arguments to find a Sequence
   * @example
   * // Get one Sequence
   * const sequence = await prisma.sequence.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstSequenceArgs>(
    args?: Subset<T, FindFirstSequenceArgs>
  ): CheckSelect<T, Prisma__SequenceClient<Sequence | null>, Prisma__SequenceClient<SequenceGetPayload<T> | null>>
  /**
   * Find zero or more Sequences that matches the filter.
   * @param {FindManySequenceArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Sequences
   * const sequences = await prisma.sequence.findMany()
   * 
   * // Get first 10 Sequences
   * const sequences = await prisma.sequence.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const sequenceWithIdOnly = await prisma.sequence.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManySequenceArgs>(
    args?: Subset<T, FindManySequenceArgs>
  ): CheckSelect<T, Promise<Array<Sequence>>, Promise<Array<SequenceGetPayload<T>>>>
  /**
   * Create a Sequence.
   * @param {SequenceCreateArgs} args - Arguments to create a Sequence.
   * @example
   * // Create one Sequence
   * const Sequence = await prisma.sequence.create({
   *   data: {
   *     // ... data to create a Sequence
   *   }
   * })
   * 
  **/
  create<T extends SequenceCreateArgs>(
    args: Subset<T, SequenceCreateArgs>
  ): CheckSelect<T, Prisma__SequenceClient<Sequence>, Prisma__SequenceClient<SequenceGetPayload<T>>>
  /**
   * Delete a Sequence.
   * @param {SequenceDeleteArgs} args - Arguments to delete one Sequence.
   * @example
   * // Delete one Sequence
   * const Sequence = await prisma.sequence.delete({
   *   where: {
   *     // ... filter to delete one Sequence
   *   }
   * })
   * 
  **/
  delete<T extends SequenceDeleteArgs>(
    args: Subset<T, SequenceDeleteArgs>
  ): CheckSelect<T, Prisma__SequenceClient<Sequence>, Prisma__SequenceClient<SequenceGetPayload<T>>>
  /**
   * Update one Sequence.
   * @param {SequenceUpdateArgs} args - Arguments to update one Sequence.
   * @example
   * // Update one Sequence
   * const sequence = await prisma.sequence.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends SequenceUpdateArgs>(
    args: Subset<T, SequenceUpdateArgs>
  ): CheckSelect<T, Prisma__SequenceClient<Sequence>, Prisma__SequenceClient<SequenceGetPayload<T>>>
  /**
   * Delete zero or more Sequences.
   * @param {SequenceDeleteManyArgs} args - Arguments to filter Sequences to delete.
   * @example
   * // Delete a few Sequences
   * const { count } = await prisma.sequence.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends SequenceDeleteManyArgs>(
    args: Subset<T, SequenceDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Sequences.
   * @param {SequenceUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Sequences
   * const sequence = await prisma.sequence.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends SequenceUpdateManyArgs>(
    args: Subset<T, SequenceUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Sequence.
   * @param {SequenceUpsertArgs} args - Arguments to update or create a Sequence.
   * @example
   * // Update or create a Sequence
   * const sequence = await prisma.sequence.upsert({
   *   create: {
   *     // ... data to create a Sequence
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Sequence we want to update
   *   }
   * })
  **/
  upsert<T extends SequenceUpsertArgs>(
    args: Subset<T, SequenceUpsertArgs>
  ): CheckSelect<T, Prisma__SequenceClient<Sequence>, Prisma__SequenceClient<SequenceGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManySequenceArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateSequenceArgs>(args: Subset<T, AggregateSequenceArgs>): Promise<GetSequenceAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Sequence.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__SequenceClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  Score<T extends ScoreArgs = {}>(args?: Subset<T, ScoreArgs>): CheckSelect<T, Prisma__ScoreClient<Score | null>, Prisma__ScoreClient<ScoreGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Sequence findOne
 */
export type FindOneSequenceArgs = {
  /**
   * Select specific fields to fetch from the Sequence
  **/
  select?: XOR<SequenceSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SequenceInclude, null>
  /**
   * Filter, which Sequence to fetch.
  **/
  where: SequenceWhereUniqueInput
}


/**
 * Sequence findFirst
 */
export type FindFirstSequenceArgs = {
  /**
   * Select specific fields to fetch from the Sequence
  **/
  select?: XOR<SequenceSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SequenceInclude, null>
  /**
   * Filter, which Sequence to fetch.
  **/
  where?: SequenceWhereInput
  orderBy?: XOR<Enumerable<SequenceOrderByInput>, SequenceOrderByInput>
  cursor?: SequenceWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<SequenceDistinctFieldEnum>
}


/**
 * Sequence findMany
 */
export type FindManySequenceArgs = {
  /**
   * Select specific fields to fetch from the Sequence
  **/
  select?: XOR<SequenceSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SequenceInclude, null>
  /**
   * Filter, which Sequences to fetch.
  **/
  where?: SequenceWhereInput
  /**
   * Determine the order of the Sequences to fetch.
  **/
  orderBy?: XOR<Enumerable<SequenceOrderByInput>, SequenceOrderByInput>
  /**
   * Sets the position for listing Sequences.
  **/
  cursor?: SequenceWhereUniqueInput
  /**
   * The number of Sequences to fetch. If negative number, it will take Sequences before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Sequences.
  **/
  skip?: number
  distinct?: Enumerable<SequenceDistinctFieldEnum>
}


/**
 * Sequence create
 */
export type SequenceCreateArgs = {
  /**
   * Select specific fields to fetch from the Sequence
  **/
  select?: XOR<SequenceSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SequenceInclude, null>
  /**
   * The data needed to create a Sequence.
  **/
  data: SequenceCreateInput
}


/**
 * Sequence update
 */
export type SequenceUpdateArgs = {
  /**
   * Select specific fields to fetch from the Sequence
  **/
  select?: XOR<SequenceSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SequenceInclude, null>
  /**
   * The data needed to update a Sequence.
  **/
  data: SequenceUpdateInput
  /**
   * Choose, which Sequence to update.
  **/
  where: SequenceWhereUniqueInput
}


/**
 * Sequence updateMany
 */
export type SequenceUpdateManyArgs = {
  data: SequenceUpdateManyMutationInput
  where?: SequenceWhereInput
}


/**
 * Sequence upsert
 */
export type SequenceUpsertArgs = {
  /**
   * Select specific fields to fetch from the Sequence
  **/
  select?: XOR<SequenceSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SequenceInclude, null>
  /**
   * The filter to search for the Sequence to update in case it exists.
  **/
  where: SequenceWhereUniqueInput
  /**
   * In case the Sequence found by the `where` argument doesn't exist, create a new Sequence with this data.
  **/
  create: SequenceCreateInput
  /**
   * In case the Sequence was found with the provided `where` argument, update it with this data.
  **/
  update: SequenceUpdateInput
}


/**
 * Sequence delete
 */
export type SequenceDeleteArgs = {
  /**
   * Select specific fields to fetch from the Sequence
  **/
  select?: XOR<SequenceSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SequenceInclude, null>
  /**
   * Filter which Sequence to delete.
  **/
  where: SequenceWhereUniqueInput
}


/**
 * Sequence deleteMany
 */
export type SequenceDeleteManyArgs = {
  where?: SequenceWhereInput
}


/**
 * Sequence without action
 */
export type SequenceArgs = {
  /**
   * Select specific fields to fetch from the Sequence
  **/
  select?: XOR<SequenceSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SequenceInclude, null>
}



/**
 * Model SchoolYear
 */

export type SchoolYear = {
  id: string
  yearName: string
  yearCode: string
  createdAt: Date
  updatedAt: Date
}


export type AggregateSchoolYear = {
  count: number
}



export type AggregateSchoolYearArgs = {
  where?: SchoolYearWhereInput
  orderBy?: XOR<Enumerable<SchoolYearOrderByInput>, SchoolYearOrderByInput>
  cursor?: SchoolYearWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<SchoolYearDistinctFieldEnum>
  count?: true
}

export type GetSchoolYearAggregateType<T extends AggregateSchoolYearArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type SchoolYearSelect = {
  id?: boolean
  yearName?: boolean
  yearCode?: boolean
  annStudentClassroom?: boolean | FindManyAnnStudentClassroomArgs
  annProfDept?: boolean | FindManyAnnProfDeptArgs
  createdAt?: boolean
  updatedAt?: boolean
}

export type SchoolYearInclude = {
  annStudentClassroom?: boolean | FindManyAnnStudentClassroomArgs
  annProfDept?: boolean | FindManyAnnProfDeptArgs
}

export type SchoolYearGetPayload<
  S extends boolean | null | undefined | SchoolYearArgs,
  U = keyof S
> = S extends true
  ? SchoolYear
  : S extends undefined
  ? never
  : S extends SchoolYearArgs | FindManySchoolYearArgs
  ? 'include' extends U
    ? SchoolYear  & {
      [P in TrueKeys<S['include']>]:
      P extends 'annStudentClassroom'
      ? Array<AnnStudentClassroomGetPayload<S['include'][P]>> :
      P extends 'annProfDept'
      ? Array<AnnProfDeptGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof SchoolYear ? SchoolYear[P]
: 
      P extends 'annStudentClassroom'
      ? Array<AnnStudentClassroomGetPayload<S['select'][P]>> :
      P extends 'annProfDept'
      ? Array<AnnProfDeptGetPayload<S['select'][P]>> : never
    }
  : SchoolYear
: SchoolYear


export interface SchoolYearDelegate {
  /**
   * Find zero or one SchoolYear that matches the filter.
   * @param {FindOneSchoolYearArgs} args - Arguments to find a SchoolYear
   * @example
   * // Get one SchoolYear
   * const schoolYear = await prisma.schoolYear.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneSchoolYearArgs>(
    args: Subset<T, FindOneSchoolYearArgs>
  ): CheckSelect<T, Prisma__SchoolYearClient<SchoolYear | null>, Prisma__SchoolYearClient<SchoolYearGetPayload<T> | null>>
  /**
   * Find the first SchoolYear that matches the filter.
   * @param {FindFirstSchoolYearArgs} args - Arguments to find a SchoolYear
   * @example
   * // Get one SchoolYear
   * const schoolYear = await prisma.schoolYear.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstSchoolYearArgs>(
    args?: Subset<T, FindFirstSchoolYearArgs>
  ): CheckSelect<T, Prisma__SchoolYearClient<SchoolYear | null>, Prisma__SchoolYearClient<SchoolYearGetPayload<T> | null>>
  /**
   * Find zero or more SchoolYears that matches the filter.
   * @param {FindManySchoolYearArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all SchoolYears
   * const schoolYears = await prisma.schoolYear.findMany()
   * 
   * // Get first 10 SchoolYears
   * const schoolYears = await prisma.schoolYear.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const schoolYearWithIdOnly = await prisma.schoolYear.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManySchoolYearArgs>(
    args?: Subset<T, FindManySchoolYearArgs>
  ): CheckSelect<T, Promise<Array<SchoolYear>>, Promise<Array<SchoolYearGetPayload<T>>>>
  /**
   * Create a SchoolYear.
   * @param {SchoolYearCreateArgs} args - Arguments to create a SchoolYear.
   * @example
   * // Create one SchoolYear
   * const SchoolYear = await prisma.schoolYear.create({
   *   data: {
   *     // ... data to create a SchoolYear
   *   }
   * })
   * 
  **/
  create<T extends SchoolYearCreateArgs>(
    args: Subset<T, SchoolYearCreateArgs>
  ): CheckSelect<T, Prisma__SchoolYearClient<SchoolYear>, Prisma__SchoolYearClient<SchoolYearGetPayload<T>>>
  /**
   * Delete a SchoolYear.
   * @param {SchoolYearDeleteArgs} args - Arguments to delete one SchoolYear.
   * @example
   * // Delete one SchoolYear
   * const SchoolYear = await prisma.schoolYear.delete({
   *   where: {
   *     // ... filter to delete one SchoolYear
   *   }
   * })
   * 
  **/
  delete<T extends SchoolYearDeleteArgs>(
    args: Subset<T, SchoolYearDeleteArgs>
  ): CheckSelect<T, Prisma__SchoolYearClient<SchoolYear>, Prisma__SchoolYearClient<SchoolYearGetPayload<T>>>
  /**
   * Update one SchoolYear.
   * @param {SchoolYearUpdateArgs} args - Arguments to update one SchoolYear.
   * @example
   * // Update one SchoolYear
   * const schoolYear = await prisma.schoolYear.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends SchoolYearUpdateArgs>(
    args: Subset<T, SchoolYearUpdateArgs>
  ): CheckSelect<T, Prisma__SchoolYearClient<SchoolYear>, Prisma__SchoolYearClient<SchoolYearGetPayload<T>>>
  /**
   * Delete zero or more SchoolYears.
   * @param {SchoolYearDeleteManyArgs} args - Arguments to filter SchoolYears to delete.
   * @example
   * // Delete a few SchoolYears
   * const { count } = await prisma.schoolYear.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends SchoolYearDeleteManyArgs>(
    args: Subset<T, SchoolYearDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more SchoolYears.
   * @param {SchoolYearUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many SchoolYears
   * const schoolYear = await prisma.schoolYear.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends SchoolYearUpdateManyArgs>(
    args: Subset<T, SchoolYearUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one SchoolYear.
   * @param {SchoolYearUpsertArgs} args - Arguments to update or create a SchoolYear.
   * @example
   * // Update or create a SchoolYear
   * const schoolYear = await prisma.schoolYear.upsert({
   *   create: {
   *     // ... data to create a SchoolYear
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the SchoolYear we want to update
   *   }
   * })
  **/
  upsert<T extends SchoolYearUpsertArgs>(
    args: Subset<T, SchoolYearUpsertArgs>
  ): CheckSelect<T, Prisma__SchoolYearClient<SchoolYear>, Prisma__SchoolYearClient<SchoolYearGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManySchoolYearArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateSchoolYearArgs>(args: Subset<T, AggregateSchoolYearArgs>): Promise<GetSchoolYearAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for SchoolYear.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__SchoolYearClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  annStudentClassroom<T extends FindManyAnnStudentClassroomArgs = {}>(args?: Subset<T, FindManyAnnStudentClassroomArgs>): CheckSelect<T, Promise<Array<AnnStudentClassroom>>, Promise<Array<AnnStudentClassroomGetPayload<T>>>>;

  annProfDept<T extends FindManyAnnProfDeptArgs = {}>(args?: Subset<T, FindManyAnnProfDeptArgs>): CheckSelect<T, Promise<Array<AnnProfDept>>, Promise<Array<AnnProfDeptGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * SchoolYear findOne
 */
export type FindOneSchoolYearArgs = {
  /**
   * Select specific fields to fetch from the SchoolYear
  **/
  select?: XOR<SchoolYearSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolYearInclude, null>
  /**
   * Filter, which SchoolYear to fetch.
  **/
  where: SchoolYearWhereUniqueInput
}


/**
 * SchoolYear findFirst
 */
export type FindFirstSchoolYearArgs = {
  /**
   * Select specific fields to fetch from the SchoolYear
  **/
  select?: XOR<SchoolYearSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolYearInclude, null>
  /**
   * Filter, which SchoolYear to fetch.
  **/
  where?: SchoolYearWhereInput
  orderBy?: XOR<Enumerable<SchoolYearOrderByInput>, SchoolYearOrderByInput>
  cursor?: SchoolYearWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<SchoolYearDistinctFieldEnum>
}


/**
 * SchoolYear findMany
 */
export type FindManySchoolYearArgs = {
  /**
   * Select specific fields to fetch from the SchoolYear
  **/
  select?: XOR<SchoolYearSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolYearInclude, null>
  /**
   * Filter, which SchoolYears to fetch.
  **/
  where?: SchoolYearWhereInput
  /**
   * Determine the order of the SchoolYears to fetch.
  **/
  orderBy?: XOR<Enumerable<SchoolYearOrderByInput>, SchoolYearOrderByInput>
  /**
   * Sets the position for listing SchoolYears.
  **/
  cursor?: SchoolYearWhereUniqueInput
  /**
   * The number of SchoolYears to fetch. If negative number, it will take SchoolYears before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` SchoolYears.
  **/
  skip?: number
  distinct?: Enumerable<SchoolYearDistinctFieldEnum>
}


/**
 * SchoolYear create
 */
export type SchoolYearCreateArgs = {
  /**
   * Select specific fields to fetch from the SchoolYear
  **/
  select?: XOR<SchoolYearSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolYearInclude, null>
  /**
   * The data needed to create a SchoolYear.
  **/
  data: SchoolYearCreateInput
}


/**
 * SchoolYear update
 */
export type SchoolYearUpdateArgs = {
  /**
   * Select specific fields to fetch from the SchoolYear
  **/
  select?: XOR<SchoolYearSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolYearInclude, null>
  /**
   * The data needed to update a SchoolYear.
  **/
  data: SchoolYearUpdateInput
  /**
   * Choose, which SchoolYear to update.
  **/
  where: SchoolYearWhereUniqueInput
}


/**
 * SchoolYear updateMany
 */
export type SchoolYearUpdateManyArgs = {
  data: SchoolYearUpdateManyMutationInput
  where?: SchoolYearWhereInput
}


/**
 * SchoolYear upsert
 */
export type SchoolYearUpsertArgs = {
  /**
   * Select specific fields to fetch from the SchoolYear
  **/
  select?: XOR<SchoolYearSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolYearInclude, null>
  /**
   * The filter to search for the SchoolYear to update in case it exists.
  **/
  where: SchoolYearWhereUniqueInput
  /**
   * In case the SchoolYear found by the `where` argument doesn't exist, create a new SchoolYear with this data.
  **/
  create: SchoolYearCreateInput
  /**
   * In case the SchoolYear was found with the provided `where` argument, update it with this data.
  **/
  update: SchoolYearUpdateInput
}


/**
 * SchoolYear delete
 */
export type SchoolYearDeleteArgs = {
  /**
   * Select specific fields to fetch from the SchoolYear
  **/
  select?: XOR<SchoolYearSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolYearInclude, null>
  /**
   * Filter which SchoolYear to delete.
  **/
  where: SchoolYearWhereUniqueInput
}


/**
 * SchoolYear deleteMany
 */
export type SchoolYearDeleteManyArgs = {
  where?: SchoolYearWhereInput
}


/**
 * SchoolYear without action
 */
export type SchoolYearArgs = {
  /**
   * Select specific fields to fetch from the SchoolYear
  **/
  select?: XOR<SchoolYearSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SchoolYearInclude, null>
}



/**
 * Model AnnProfDept
 */

export type AnnProfDept = {
  id: string
  createdAt: Date
  updatedAt: Date
  departmentId: string
  schoolYearId: string
  profId: string
}


export type AggregateAnnProfDept = {
  count: number
}



export type AggregateAnnProfDeptArgs = {
  where?: AnnProfDeptWhereInput
  orderBy?: XOR<Enumerable<AnnProfDeptOrderByInput>, AnnProfDeptOrderByInput>
  cursor?: AnnProfDeptWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<AnnProfDeptDistinctFieldEnum>
  count?: true
}

export type GetAnnProfDeptAggregateType<T extends AggregateAnnProfDeptArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type AnnProfDeptSelect = {
  id?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  annProfSubj?: boolean | FindManyAnnProfSubjDistroArgs
  Department?: boolean | DepartmentArgs
  departmentId?: boolean
  SchoolYear?: boolean | SchoolYearArgs
  schoolYearId?: boolean
  Prof?: boolean | ProfArgs
  profId?: boolean
}

export type AnnProfDeptInclude = {
  annProfSubj?: boolean | FindManyAnnProfSubjDistroArgs
  Department?: boolean | DepartmentArgs
  SchoolYear?: boolean | SchoolYearArgs
  Prof?: boolean | ProfArgs
}

export type AnnProfDeptGetPayload<
  S extends boolean | null | undefined | AnnProfDeptArgs,
  U = keyof S
> = S extends true
  ? AnnProfDept
  : S extends undefined
  ? never
  : S extends AnnProfDeptArgs | FindManyAnnProfDeptArgs
  ? 'include' extends U
    ? AnnProfDept  & {
      [P in TrueKeys<S['include']>]:
      P extends 'annProfSubj'
      ? Array<AnnProfSubjDistroGetPayload<S['include'][P]>> :
      P extends 'Department'
      ? DepartmentGetPayload<S['include'][P]> :
      P extends 'SchoolYear'
      ? SchoolYearGetPayload<S['include'][P]> :
      P extends 'Prof'
      ? ProfGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof AnnProfDept ? AnnProfDept[P]
: 
      P extends 'annProfSubj'
      ? Array<AnnProfSubjDistroGetPayload<S['select'][P]>> :
      P extends 'Department'
      ? DepartmentGetPayload<S['select'][P]> :
      P extends 'SchoolYear'
      ? SchoolYearGetPayload<S['select'][P]> :
      P extends 'Prof'
      ? ProfGetPayload<S['select'][P]> : never
    }
  : AnnProfDept
: AnnProfDept


export interface AnnProfDeptDelegate {
  /**
   * Find zero or one AnnProfDept that matches the filter.
   * @param {FindOneAnnProfDeptArgs} args - Arguments to find a AnnProfDept
   * @example
   * // Get one AnnProfDept
   * const annProfDept = await prisma.annProfDept.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneAnnProfDeptArgs>(
    args: Subset<T, FindOneAnnProfDeptArgs>
  ): CheckSelect<T, Prisma__AnnProfDeptClient<AnnProfDept | null>, Prisma__AnnProfDeptClient<AnnProfDeptGetPayload<T> | null>>
  /**
   * Find the first AnnProfDept that matches the filter.
   * @param {FindFirstAnnProfDeptArgs} args - Arguments to find a AnnProfDept
   * @example
   * // Get one AnnProfDept
   * const annProfDept = await prisma.annProfDept.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstAnnProfDeptArgs>(
    args?: Subset<T, FindFirstAnnProfDeptArgs>
  ): CheckSelect<T, Prisma__AnnProfDeptClient<AnnProfDept | null>, Prisma__AnnProfDeptClient<AnnProfDeptGetPayload<T> | null>>
  /**
   * Find zero or more AnnProfDepts that matches the filter.
   * @param {FindManyAnnProfDeptArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all AnnProfDepts
   * const annProfDepts = await prisma.annProfDept.findMany()
   * 
   * // Get first 10 AnnProfDepts
   * const annProfDepts = await prisma.annProfDept.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const annProfDeptWithIdOnly = await prisma.annProfDept.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyAnnProfDeptArgs>(
    args?: Subset<T, FindManyAnnProfDeptArgs>
  ): CheckSelect<T, Promise<Array<AnnProfDept>>, Promise<Array<AnnProfDeptGetPayload<T>>>>
  /**
   * Create a AnnProfDept.
   * @param {AnnProfDeptCreateArgs} args - Arguments to create a AnnProfDept.
   * @example
   * // Create one AnnProfDept
   * const AnnProfDept = await prisma.annProfDept.create({
   *   data: {
   *     // ... data to create a AnnProfDept
   *   }
   * })
   * 
  **/
  create<T extends AnnProfDeptCreateArgs>(
    args: Subset<T, AnnProfDeptCreateArgs>
  ): CheckSelect<T, Prisma__AnnProfDeptClient<AnnProfDept>, Prisma__AnnProfDeptClient<AnnProfDeptGetPayload<T>>>
  /**
   * Delete a AnnProfDept.
   * @param {AnnProfDeptDeleteArgs} args - Arguments to delete one AnnProfDept.
   * @example
   * // Delete one AnnProfDept
   * const AnnProfDept = await prisma.annProfDept.delete({
   *   where: {
   *     // ... filter to delete one AnnProfDept
   *   }
   * })
   * 
  **/
  delete<T extends AnnProfDeptDeleteArgs>(
    args: Subset<T, AnnProfDeptDeleteArgs>
  ): CheckSelect<T, Prisma__AnnProfDeptClient<AnnProfDept>, Prisma__AnnProfDeptClient<AnnProfDeptGetPayload<T>>>
  /**
   * Update one AnnProfDept.
   * @param {AnnProfDeptUpdateArgs} args - Arguments to update one AnnProfDept.
   * @example
   * // Update one AnnProfDept
   * const annProfDept = await prisma.annProfDept.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends AnnProfDeptUpdateArgs>(
    args: Subset<T, AnnProfDeptUpdateArgs>
  ): CheckSelect<T, Prisma__AnnProfDeptClient<AnnProfDept>, Prisma__AnnProfDeptClient<AnnProfDeptGetPayload<T>>>
  /**
   * Delete zero or more AnnProfDepts.
   * @param {AnnProfDeptDeleteManyArgs} args - Arguments to filter AnnProfDepts to delete.
   * @example
   * // Delete a few AnnProfDepts
   * const { count } = await prisma.annProfDept.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends AnnProfDeptDeleteManyArgs>(
    args: Subset<T, AnnProfDeptDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more AnnProfDepts.
   * @param {AnnProfDeptUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many AnnProfDepts
   * const annProfDept = await prisma.annProfDept.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends AnnProfDeptUpdateManyArgs>(
    args: Subset<T, AnnProfDeptUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one AnnProfDept.
   * @param {AnnProfDeptUpsertArgs} args - Arguments to update or create a AnnProfDept.
   * @example
   * // Update or create a AnnProfDept
   * const annProfDept = await prisma.annProfDept.upsert({
   *   create: {
   *     // ... data to create a AnnProfDept
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the AnnProfDept we want to update
   *   }
   * })
  **/
  upsert<T extends AnnProfDeptUpsertArgs>(
    args: Subset<T, AnnProfDeptUpsertArgs>
  ): CheckSelect<T, Prisma__AnnProfDeptClient<AnnProfDept>, Prisma__AnnProfDeptClient<AnnProfDeptGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyAnnProfDeptArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateAnnProfDeptArgs>(args: Subset<T, AggregateAnnProfDeptArgs>): Promise<GetAnnProfDeptAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for AnnProfDept.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__AnnProfDeptClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  annProfSubj<T extends FindManyAnnProfSubjDistroArgs = {}>(args?: Subset<T, FindManyAnnProfSubjDistroArgs>): CheckSelect<T, Promise<Array<AnnProfSubjDistro>>, Promise<Array<AnnProfSubjDistroGetPayload<T>>>>;

  Department<T extends DepartmentArgs = {}>(args?: Subset<T, DepartmentArgs>): CheckSelect<T, Prisma__DepartmentClient<Department | null>, Prisma__DepartmentClient<DepartmentGetPayload<T> | null>>;

  SchoolYear<T extends SchoolYearArgs = {}>(args?: Subset<T, SchoolYearArgs>): CheckSelect<T, Prisma__SchoolYearClient<SchoolYear | null>, Prisma__SchoolYearClient<SchoolYearGetPayload<T> | null>>;

  Prof<T extends ProfArgs = {}>(args?: Subset<T, ProfArgs>): CheckSelect<T, Prisma__ProfClient<Prof | null>, Prisma__ProfClient<ProfGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * AnnProfDept findOne
 */
export type FindOneAnnProfDeptArgs = {
  /**
   * Select specific fields to fetch from the AnnProfDept
  **/
  select?: XOR<AnnProfDeptSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfDeptInclude, null>
  /**
   * Filter, which AnnProfDept to fetch.
  **/
  where: AnnProfDeptWhereUniqueInput
}


/**
 * AnnProfDept findFirst
 */
export type FindFirstAnnProfDeptArgs = {
  /**
   * Select specific fields to fetch from the AnnProfDept
  **/
  select?: XOR<AnnProfDeptSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfDeptInclude, null>
  /**
   * Filter, which AnnProfDept to fetch.
  **/
  where?: AnnProfDeptWhereInput
  orderBy?: XOR<Enumerable<AnnProfDeptOrderByInput>, AnnProfDeptOrderByInput>
  cursor?: AnnProfDeptWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<AnnProfDeptDistinctFieldEnum>
}


/**
 * AnnProfDept findMany
 */
export type FindManyAnnProfDeptArgs = {
  /**
   * Select specific fields to fetch from the AnnProfDept
  **/
  select?: XOR<AnnProfDeptSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfDeptInclude, null>
  /**
   * Filter, which AnnProfDepts to fetch.
  **/
  where?: AnnProfDeptWhereInput
  /**
   * Determine the order of the AnnProfDepts to fetch.
  **/
  orderBy?: XOR<Enumerable<AnnProfDeptOrderByInput>, AnnProfDeptOrderByInput>
  /**
   * Sets the position for listing AnnProfDepts.
  **/
  cursor?: AnnProfDeptWhereUniqueInput
  /**
   * The number of AnnProfDepts to fetch. If negative number, it will take AnnProfDepts before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` AnnProfDepts.
  **/
  skip?: number
  distinct?: Enumerable<AnnProfDeptDistinctFieldEnum>
}


/**
 * AnnProfDept create
 */
export type AnnProfDeptCreateArgs = {
  /**
   * Select specific fields to fetch from the AnnProfDept
  **/
  select?: XOR<AnnProfDeptSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfDeptInclude, null>
  /**
   * The data needed to create a AnnProfDept.
  **/
  data: AnnProfDeptCreateInput
}


/**
 * AnnProfDept update
 */
export type AnnProfDeptUpdateArgs = {
  /**
   * Select specific fields to fetch from the AnnProfDept
  **/
  select?: XOR<AnnProfDeptSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfDeptInclude, null>
  /**
   * The data needed to update a AnnProfDept.
  **/
  data: AnnProfDeptUpdateInput
  /**
   * Choose, which AnnProfDept to update.
  **/
  where: AnnProfDeptWhereUniqueInput
}


/**
 * AnnProfDept updateMany
 */
export type AnnProfDeptUpdateManyArgs = {
  data: AnnProfDeptUpdateManyMutationInput
  where?: AnnProfDeptWhereInput
}


/**
 * AnnProfDept upsert
 */
export type AnnProfDeptUpsertArgs = {
  /**
   * Select specific fields to fetch from the AnnProfDept
  **/
  select?: XOR<AnnProfDeptSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfDeptInclude, null>
  /**
   * The filter to search for the AnnProfDept to update in case it exists.
  **/
  where: AnnProfDeptWhereUniqueInput
  /**
   * In case the AnnProfDept found by the `where` argument doesn't exist, create a new AnnProfDept with this data.
  **/
  create: AnnProfDeptCreateInput
  /**
   * In case the AnnProfDept was found with the provided `where` argument, update it with this data.
  **/
  update: AnnProfDeptUpdateInput
}


/**
 * AnnProfDept delete
 */
export type AnnProfDeptDeleteArgs = {
  /**
   * Select specific fields to fetch from the AnnProfDept
  **/
  select?: XOR<AnnProfDeptSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfDeptInclude, null>
  /**
   * Filter which AnnProfDept to delete.
  **/
  where: AnnProfDeptWhereUniqueInput
}


/**
 * AnnProfDept deleteMany
 */
export type AnnProfDeptDeleteManyArgs = {
  where?: AnnProfDeptWhereInput
}


/**
 * AnnProfDept without action
 */
export type AnnProfDeptArgs = {
  /**
   * Select specific fields to fetch from the AnnProfDept
  **/
  select?: XOR<AnnProfDeptSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfDeptInclude, null>
}



/**
 * Model Logbook
 */

export type Logbook = {
  id: string
  subjectMatter: string
  timeOfPeriod: Date
  createdAt: Date
  updatedAt: Date
  AnnProfSubjDistroId: string
}


export type AggregateLogbook = {
  count: number
}



export type AggregateLogbookArgs = {
  where?: LogbookWhereInput
  orderBy?: XOR<Enumerable<LogbookOrderByInput>, LogbookOrderByInput>
  cursor?: LogbookWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<LogbookDistinctFieldEnum>
  count?: true
}

export type GetLogbookAggregateType<T extends AggregateLogbookArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type LogbookSelect = {
  id?: boolean
  subjectMatter?: boolean
  timeOfPeriod?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  AnnProfSubjDistro?: boolean | AnnProfSubjDistroArgs
  AnnProfSubjDistroId?: boolean
}

export type LogbookInclude = {
  AnnProfSubjDistro?: boolean | AnnProfSubjDistroArgs
}

export type LogbookGetPayload<
  S extends boolean | null | undefined | LogbookArgs,
  U = keyof S
> = S extends true
  ? Logbook
  : S extends undefined
  ? never
  : S extends LogbookArgs | FindManyLogbookArgs
  ? 'include' extends U
    ? Logbook  & {
      [P in TrueKeys<S['include']>]:
      P extends 'AnnProfSubjDistro'
      ? AnnProfSubjDistroGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Logbook ? Logbook[P]
: 
      P extends 'AnnProfSubjDistro'
      ? AnnProfSubjDistroGetPayload<S['select'][P]> : never
    }
  : Logbook
: Logbook


export interface LogbookDelegate {
  /**
   * Find zero or one Logbook that matches the filter.
   * @param {FindOneLogbookArgs} args - Arguments to find a Logbook
   * @example
   * // Get one Logbook
   * const logbook = await prisma.logbook.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneLogbookArgs>(
    args: Subset<T, FindOneLogbookArgs>
  ): CheckSelect<T, Prisma__LogbookClient<Logbook | null>, Prisma__LogbookClient<LogbookGetPayload<T> | null>>
  /**
   * Find the first Logbook that matches the filter.
   * @param {FindFirstLogbookArgs} args - Arguments to find a Logbook
   * @example
   * // Get one Logbook
   * const logbook = await prisma.logbook.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstLogbookArgs>(
    args?: Subset<T, FindFirstLogbookArgs>
  ): CheckSelect<T, Prisma__LogbookClient<Logbook | null>, Prisma__LogbookClient<LogbookGetPayload<T> | null>>
  /**
   * Find zero or more Logbooks that matches the filter.
   * @param {FindManyLogbookArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Logbooks
   * const logbooks = await prisma.logbook.findMany()
   * 
   * // Get first 10 Logbooks
   * const logbooks = await prisma.logbook.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const logbookWithIdOnly = await prisma.logbook.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyLogbookArgs>(
    args?: Subset<T, FindManyLogbookArgs>
  ): CheckSelect<T, Promise<Array<Logbook>>, Promise<Array<LogbookGetPayload<T>>>>
  /**
   * Create a Logbook.
   * @param {LogbookCreateArgs} args - Arguments to create a Logbook.
   * @example
   * // Create one Logbook
   * const Logbook = await prisma.logbook.create({
   *   data: {
   *     // ... data to create a Logbook
   *   }
   * })
   * 
  **/
  create<T extends LogbookCreateArgs>(
    args: Subset<T, LogbookCreateArgs>
  ): CheckSelect<T, Prisma__LogbookClient<Logbook>, Prisma__LogbookClient<LogbookGetPayload<T>>>
  /**
   * Delete a Logbook.
   * @param {LogbookDeleteArgs} args - Arguments to delete one Logbook.
   * @example
   * // Delete one Logbook
   * const Logbook = await prisma.logbook.delete({
   *   where: {
   *     // ... filter to delete one Logbook
   *   }
   * })
   * 
  **/
  delete<T extends LogbookDeleteArgs>(
    args: Subset<T, LogbookDeleteArgs>
  ): CheckSelect<T, Prisma__LogbookClient<Logbook>, Prisma__LogbookClient<LogbookGetPayload<T>>>
  /**
   * Update one Logbook.
   * @param {LogbookUpdateArgs} args - Arguments to update one Logbook.
   * @example
   * // Update one Logbook
   * const logbook = await prisma.logbook.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends LogbookUpdateArgs>(
    args: Subset<T, LogbookUpdateArgs>
  ): CheckSelect<T, Prisma__LogbookClient<Logbook>, Prisma__LogbookClient<LogbookGetPayload<T>>>
  /**
   * Delete zero or more Logbooks.
   * @param {LogbookDeleteManyArgs} args - Arguments to filter Logbooks to delete.
   * @example
   * // Delete a few Logbooks
   * const { count } = await prisma.logbook.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends LogbookDeleteManyArgs>(
    args: Subset<T, LogbookDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Logbooks.
   * @param {LogbookUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Logbooks
   * const logbook = await prisma.logbook.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends LogbookUpdateManyArgs>(
    args: Subset<T, LogbookUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Logbook.
   * @param {LogbookUpsertArgs} args - Arguments to update or create a Logbook.
   * @example
   * // Update or create a Logbook
   * const logbook = await prisma.logbook.upsert({
   *   create: {
   *     // ... data to create a Logbook
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Logbook we want to update
   *   }
   * })
  **/
  upsert<T extends LogbookUpsertArgs>(
    args: Subset<T, LogbookUpsertArgs>
  ): CheckSelect<T, Prisma__LogbookClient<Logbook>, Prisma__LogbookClient<LogbookGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyLogbookArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateLogbookArgs>(args: Subset<T, AggregateLogbookArgs>): Promise<GetLogbookAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Logbook.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__LogbookClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  AnnProfSubjDistro<T extends AnnProfSubjDistroArgs = {}>(args?: Subset<T, AnnProfSubjDistroArgs>): CheckSelect<T, Prisma__AnnProfSubjDistroClient<AnnProfSubjDistro | null>, Prisma__AnnProfSubjDistroClient<AnnProfSubjDistroGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Logbook findOne
 */
export type FindOneLogbookArgs = {
  /**
   * Select specific fields to fetch from the Logbook
  **/
  select?: XOR<LogbookSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<LogbookInclude, null>
  /**
   * Filter, which Logbook to fetch.
  **/
  where: LogbookWhereUniqueInput
}


/**
 * Logbook findFirst
 */
export type FindFirstLogbookArgs = {
  /**
   * Select specific fields to fetch from the Logbook
  **/
  select?: XOR<LogbookSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<LogbookInclude, null>
  /**
   * Filter, which Logbook to fetch.
  **/
  where?: LogbookWhereInput
  orderBy?: XOR<Enumerable<LogbookOrderByInput>, LogbookOrderByInput>
  cursor?: LogbookWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<LogbookDistinctFieldEnum>
}


/**
 * Logbook findMany
 */
export type FindManyLogbookArgs = {
  /**
   * Select specific fields to fetch from the Logbook
  **/
  select?: XOR<LogbookSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<LogbookInclude, null>
  /**
   * Filter, which Logbooks to fetch.
  **/
  where?: LogbookWhereInput
  /**
   * Determine the order of the Logbooks to fetch.
  **/
  orderBy?: XOR<Enumerable<LogbookOrderByInput>, LogbookOrderByInput>
  /**
   * Sets the position for listing Logbooks.
  **/
  cursor?: LogbookWhereUniqueInput
  /**
   * The number of Logbooks to fetch. If negative number, it will take Logbooks before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Logbooks.
  **/
  skip?: number
  distinct?: Enumerable<LogbookDistinctFieldEnum>
}


/**
 * Logbook create
 */
export type LogbookCreateArgs = {
  /**
   * Select specific fields to fetch from the Logbook
  **/
  select?: XOR<LogbookSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<LogbookInclude, null>
  /**
   * The data needed to create a Logbook.
  **/
  data: LogbookCreateInput
}


/**
 * Logbook update
 */
export type LogbookUpdateArgs = {
  /**
   * Select specific fields to fetch from the Logbook
  **/
  select?: XOR<LogbookSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<LogbookInclude, null>
  /**
   * The data needed to update a Logbook.
  **/
  data: LogbookUpdateInput
  /**
   * Choose, which Logbook to update.
  **/
  where: LogbookWhereUniqueInput
}


/**
 * Logbook updateMany
 */
export type LogbookUpdateManyArgs = {
  data: LogbookUpdateManyMutationInput
  where?: LogbookWhereInput
}


/**
 * Logbook upsert
 */
export type LogbookUpsertArgs = {
  /**
   * Select specific fields to fetch from the Logbook
  **/
  select?: XOR<LogbookSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<LogbookInclude, null>
  /**
   * The filter to search for the Logbook to update in case it exists.
  **/
  where: LogbookWhereUniqueInput
  /**
   * In case the Logbook found by the `where` argument doesn't exist, create a new Logbook with this data.
  **/
  create: LogbookCreateInput
  /**
   * In case the Logbook was found with the provided `where` argument, update it with this data.
  **/
  update: LogbookUpdateInput
}


/**
 * Logbook delete
 */
export type LogbookDeleteArgs = {
  /**
   * Select specific fields to fetch from the Logbook
  **/
  select?: XOR<LogbookSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<LogbookInclude, null>
  /**
   * Filter which Logbook to delete.
  **/
  where: LogbookWhereUniqueInput
}


/**
 * Logbook deleteMany
 */
export type LogbookDeleteManyArgs = {
  where?: LogbookWhereInput
}


/**
 * Logbook without action
 */
export type LogbookArgs = {
  /**
   * Select specific fields to fetch from the Logbook
  **/
  select?: XOR<LogbookSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<LogbookInclude, null>
}



/**
 * Model Score
 */

export type Score = {
  id: string
  marks: string
  createdAt: Date
  updatedAt: Date
}


export type AggregateScore = {
  count: number
}



export type AggregateScoreArgs = {
  where?: ScoreWhereInput
  orderBy?: XOR<Enumerable<ScoreOrderByInput>, ScoreOrderByInput>
  cursor?: ScoreWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ScoreDistinctFieldEnum>
  count?: true
}

export type GetScoreAggregateType<T extends AggregateScoreArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type ScoreSelect = {
  id?: boolean
  marks?: boolean
  seq?: boolean | FindManySequenceArgs
  annStudentClass?: boolean | FindManyAnnStudentClassroomArgs
  annProfSubj?: boolean | FindManyAnnProfSubjDistroArgs
  createdAt?: boolean
  updatedAt?: boolean
}

export type ScoreInclude = {
  seq?: boolean | FindManySequenceArgs
  annStudentClass?: boolean | FindManyAnnStudentClassroomArgs
  annProfSubj?: boolean | FindManyAnnProfSubjDistroArgs
}

export type ScoreGetPayload<
  S extends boolean | null | undefined | ScoreArgs,
  U = keyof S
> = S extends true
  ? Score
  : S extends undefined
  ? never
  : S extends ScoreArgs | FindManyScoreArgs
  ? 'include' extends U
    ? Score  & {
      [P in TrueKeys<S['include']>]:
      P extends 'seq'
      ? Array<SequenceGetPayload<S['include'][P]>> :
      P extends 'annStudentClass'
      ? Array<AnnStudentClassroomGetPayload<S['include'][P]>> :
      P extends 'annProfSubj'
      ? Array<AnnProfSubjDistroGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Score ? Score[P]
: 
      P extends 'seq'
      ? Array<SequenceGetPayload<S['select'][P]>> :
      P extends 'annStudentClass'
      ? Array<AnnStudentClassroomGetPayload<S['select'][P]>> :
      P extends 'annProfSubj'
      ? Array<AnnProfSubjDistroGetPayload<S['select'][P]>> : never
    }
  : Score
: Score


export interface ScoreDelegate {
  /**
   * Find zero or one Score that matches the filter.
   * @param {FindOneScoreArgs} args - Arguments to find a Score
   * @example
   * // Get one Score
   * const score = await prisma.score.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneScoreArgs>(
    args: Subset<T, FindOneScoreArgs>
  ): CheckSelect<T, Prisma__ScoreClient<Score | null>, Prisma__ScoreClient<ScoreGetPayload<T> | null>>
  /**
   * Find the first Score that matches the filter.
   * @param {FindFirstScoreArgs} args - Arguments to find a Score
   * @example
   * // Get one Score
   * const score = await prisma.score.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstScoreArgs>(
    args?: Subset<T, FindFirstScoreArgs>
  ): CheckSelect<T, Prisma__ScoreClient<Score | null>, Prisma__ScoreClient<ScoreGetPayload<T> | null>>
  /**
   * Find zero or more Scores that matches the filter.
   * @param {FindManyScoreArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Scores
   * const scores = await prisma.score.findMany()
   * 
   * // Get first 10 Scores
   * const scores = await prisma.score.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const scoreWithIdOnly = await prisma.score.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyScoreArgs>(
    args?: Subset<T, FindManyScoreArgs>
  ): CheckSelect<T, Promise<Array<Score>>, Promise<Array<ScoreGetPayload<T>>>>
  /**
   * Create a Score.
   * @param {ScoreCreateArgs} args - Arguments to create a Score.
   * @example
   * // Create one Score
   * const Score = await prisma.score.create({
   *   data: {
   *     // ... data to create a Score
   *   }
   * })
   * 
  **/
  create<T extends ScoreCreateArgs>(
    args: Subset<T, ScoreCreateArgs>
  ): CheckSelect<T, Prisma__ScoreClient<Score>, Prisma__ScoreClient<ScoreGetPayload<T>>>
  /**
   * Delete a Score.
   * @param {ScoreDeleteArgs} args - Arguments to delete one Score.
   * @example
   * // Delete one Score
   * const Score = await prisma.score.delete({
   *   where: {
   *     // ... filter to delete one Score
   *   }
   * })
   * 
  **/
  delete<T extends ScoreDeleteArgs>(
    args: Subset<T, ScoreDeleteArgs>
  ): CheckSelect<T, Prisma__ScoreClient<Score>, Prisma__ScoreClient<ScoreGetPayload<T>>>
  /**
   * Update one Score.
   * @param {ScoreUpdateArgs} args - Arguments to update one Score.
   * @example
   * // Update one Score
   * const score = await prisma.score.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends ScoreUpdateArgs>(
    args: Subset<T, ScoreUpdateArgs>
  ): CheckSelect<T, Prisma__ScoreClient<Score>, Prisma__ScoreClient<ScoreGetPayload<T>>>
  /**
   * Delete zero or more Scores.
   * @param {ScoreDeleteManyArgs} args - Arguments to filter Scores to delete.
   * @example
   * // Delete a few Scores
   * const { count } = await prisma.score.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends ScoreDeleteManyArgs>(
    args: Subset<T, ScoreDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Scores.
   * @param {ScoreUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Scores
   * const score = await prisma.score.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends ScoreUpdateManyArgs>(
    args: Subset<T, ScoreUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Score.
   * @param {ScoreUpsertArgs} args - Arguments to update or create a Score.
   * @example
   * // Update or create a Score
   * const score = await prisma.score.upsert({
   *   create: {
   *     // ... data to create a Score
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Score we want to update
   *   }
   * })
  **/
  upsert<T extends ScoreUpsertArgs>(
    args: Subset<T, ScoreUpsertArgs>
  ): CheckSelect<T, Prisma__ScoreClient<Score>, Prisma__ScoreClient<ScoreGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyScoreArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateScoreArgs>(args: Subset<T, AggregateScoreArgs>): Promise<GetScoreAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Score.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__ScoreClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  seq<T extends FindManySequenceArgs = {}>(args?: Subset<T, FindManySequenceArgs>): CheckSelect<T, Promise<Array<Sequence>>, Promise<Array<SequenceGetPayload<T>>>>;

  annStudentClass<T extends FindManyAnnStudentClassroomArgs = {}>(args?: Subset<T, FindManyAnnStudentClassroomArgs>): CheckSelect<T, Promise<Array<AnnStudentClassroom>>, Promise<Array<AnnStudentClassroomGetPayload<T>>>>;

  annProfSubj<T extends FindManyAnnProfSubjDistroArgs = {}>(args?: Subset<T, FindManyAnnProfSubjDistroArgs>): CheckSelect<T, Promise<Array<AnnProfSubjDistro>>, Promise<Array<AnnProfSubjDistroGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Score findOne
 */
export type FindOneScoreArgs = {
  /**
   * Select specific fields to fetch from the Score
  **/
  select?: XOR<ScoreSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ScoreInclude, null>
  /**
   * Filter, which Score to fetch.
  **/
  where: ScoreWhereUniqueInput
}


/**
 * Score findFirst
 */
export type FindFirstScoreArgs = {
  /**
   * Select specific fields to fetch from the Score
  **/
  select?: XOR<ScoreSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ScoreInclude, null>
  /**
   * Filter, which Score to fetch.
  **/
  where?: ScoreWhereInput
  orderBy?: XOR<Enumerable<ScoreOrderByInput>, ScoreOrderByInput>
  cursor?: ScoreWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ScoreDistinctFieldEnum>
}


/**
 * Score findMany
 */
export type FindManyScoreArgs = {
  /**
   * Select specific fields to fetch from the Score
  **/
  select?: XOR<ScoreSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ScoreInclude, null>
  /**
   * Filter, which Scores to fetch.
  **/
  where?: ScoreWhereInput
  /**
   * Determine the order of the Scores to fetch.
  **/
  orderBy?: XOR<Enumerable<ScoreOrderByInput>, ScoreOrderByInput>
  /**
   * Sets the position for listing Scores.
  **/
  cursor?: ScoreWhereUniqueInput
  /**
   * The number of Scores to fetch. If negative number, it will take Scores before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Scores.
  **/
  skip?: number
  distinct?: Enumerable<ScoreDistinctFieldEnum>
}


/**
 * Score create
 */
export type ScoreCreateArgs = {
  /**
   * Select specific fields to fetch from the Score
  **/
  select?: XOR<ScoreSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ScoreInclude, null>
  /**
   * The data needed to create a Score.
  **/
  data: ScoreCreateInput
}


/**
 * Score update
 */
export type ScoreUpdateArgs = {
  /**
   * Select specific fields to fetch from the Score
  **/
  select?: XOR<ScoreSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ScoreInclude, null>
  /**
   * The data needed to update a Score.
  **/
  data: ScoreUpdateInput
  /**
   * Choose, which Score to update.
  **/
  where: ScoreWhereUniqueInput
}


/**
 * Score updateMany
 */
export type ScoreUpdateManyArgs = {
  data: ScoreUpdateManyMutationInput
  where?: ScoreWhereInput
}


/**
 * Score upsert
 */
export type ScoreUpsertArgs = {
  /**
   * Select specific fields to fetch from the Score
  **/
  select?: XOR<ScoreSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ScoreInclude, null>
  /**
   * The filter to search for the Score to update in case it exists.
  **/
  where: ScoreWhereUniqueInput
  /**
   * In case the Score found by the `where` argument doesn't exist, create a new Score with this data.
  **/
  create: ScoreCreateInput
  /**
   * In case the Score was found with the provided `where` argument, update it with this data.
  **/
  update: ScoreUpdateInput
}


/**
 * Score delete
 */
export type ScoreDeleteArgs = {
  /**
   * Select specific fields to fetch from the Score
  **/
  select?: XOR<ScoreSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ScoreInclude, null>
  /**
   * Filter which Score to delete.
  **/
  where: ScoreWhereUniqueInput
}


/**
 * Score deleteMany
 */
export type ScoreDeleteManyArgs = {
  where?: ScoreWhereInput
}


/**
 * Score without action
 */
export type ScoreArgs = {
  /**
   * Select specific fields to fetch from the Score
  **/
  select?: XOR<ScoreSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ScoreInclude, null>
}



/**
 * Model AnnProfSubjDistro
 */

export type AnnProfSubjDistro = {
  id: string
  createdAt: Date
  updatedAt: Date
  annProfDeptId: string
  subjectId: string
  classroomId: string
  scoreId: string
}


export type AggregateAnnProfSubjDistro = {
  count: number
}



export type AggregateAnnProfSubjDistroArgs = {
  where?: AnnProfSubjDistroWhereInput
  orderBy?: XOR<Enumerable<AnnProfSubjDistroOrderByInput>, AnnProfSubjDistroOrderByInput>
  cursor?: AnnProfSubjDistroWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<AnnProfSubjDistroDistinctFieldEnum>
  count?: true
}

export type GetAnnProfSubjDistroAggregateType<T extends AggregateAnnProfSubjDistroArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type AnnProfSubjDistroSelect = {
  id?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  AnnProfDept?: boolean | AnnProfDeptArgs
  annProfDeptId?: boolean
  Subject?: boolean | SubjectArgs
  subjectId?: boolean
  Classroom?: boolean | ClassroomArgs
  classroomId?: boolean
  Score?: boolean | ScoreArgs
  scoreId?: boolean
  Logbook?: boolean | FindManyLogbookArgs
}

export type AnnProfSubjDistroInclude = {
  AnnProfDept?: boolean | AnnProfDeptArgs
  Subject?: boolean | SubjectArgs
  Classroom?: boolean | ClassroomArgs
  Score?: boolean | ScoreArgs
  Logbook?: boolean | FindManyLogbookArgs
}

export type AnnProfSubjDistroGetPayload<
  S extends boolean | null | undefined | AnnProfSubjDistroArgs,
  U = keyof S
> = S extends true
  ? AnnProfSubjDistro
  : S extends undefined
  ? never
  : S extends AnnProfSubjDistroArgs | FindManyAnnProfSubjDistroArgs
  ? 'include' extends U
    ? AnnProfSubjDistro  & {
      [P in TrueKeys<S['include']>]:
      P extends 'AnnProfDept'
      ? AnnProfDeptGetPayload<S['include'][P]> :
      P extends 'Subject'
      ? SubjectGetPayload<S['include'][P]> :
      P extends 'Classroom'
      ? ClassroomGetPayload<S['include'][P]> :
      P extends 'Score'
      ? ScoreGetPayload<S['include'][P]> :
      P extends 'Logbook'
      ? Array<LogbookGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof AnnProfSubjDistro ? AnnProfSubjDistro[P]
: 
      P extends 'AnnProfDept'
      ? AnnProfDeptGetPayload<S['select'][P]> :
      P extends 'Subject'
      ? SubjectGetPayload<S['select'][P]> :
      P extends 'Classroom'
      ? ClassroomGetPayload<S['select'][P]> :
      P extends 'Score'
      ? ScoreGetPayload<S['select'][P]> :
      P extends 'Logbook'
      ? Array<LogbookGetPayload<S['select'][P]>> : never
    }
  : AnnProfSubjDistro
: AnnProfSubjDistro


export interface AnnProfSubjDistroDelegate {
  /**
   * Find zero or one AnnProfSubjDistro that matches the filter.
   * @param {FindOneAnnProfSubjDistroArgs} args - Arguments to find a AnnProfSubjDistro
   * @example
   * // Get one AnnProfSubjDistro
   * const annProfSubjDistro = await prisma.annProfSubjDistro.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneAnnProfSubjDistroArgs>(
    args: Subset<T, FindOneAnnProfSubjDistroArgs>
  ): CheckSelect<T, Prisma__AnnProfSubjDistroClient<AnnProfSubjDistro | null>, Prisma__AnnProfSubjDistroClient<AnnProfSubjDistroGetPayload<T> | null>>
  /**
   * Find the first AnnProfSubjDistro that matches the filter.
   * @param {FindFirstAnnProfSubjDistroArgs} args - Arguments to find a AnnProfSubjDistro
   * @example
   * // Get one AnnProfSubjDistro
   * const annProfSubjDistro = await prisma.annProfSubjDistro.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstAnnProfSubjDistroArgs>(
    args?: Subset<T, FindFirstAnnProfSubjDistroArgs>
  ): CheckSelect<T, Prisma__AnnProfSubjDistroClient<AnnProfSubjDistro | null>, Prisma__AnnProfSubjDistroClient<AnnProfSubjDistroGetPayload<T> | null>>
  /**
   * Find zero or more AnnProfSubjDistros that matches the filter.
   * @param {FindManyAnnProfSubjDistroArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all AnnProfSubjDistros
   * const annProfSubjDistros = await prisma.annProfSubjDistro.findMany()
   * 
   * // Get first 10 AnnProfSubjDistros
   * const annProfSubjDistros = await prisma.annProfSubjDistro.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const annProfSubjDistroWithIdOnly = await prisma.annProfSubjDistro.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyAnnProfSubjDistroArgs>(
    args?: Subset<T, FindManyAnnProfSubjDistroArgs>
  ): CheckSelect<T, Promise<Array<AnnProfSubjDistro>>, Promise<Array<AnnProfSubjDistroGetPayload<T>>>>
  /**
   * Create a AnnProfSubjDistro.
   * @param {AnnProfSubjDistroCreateArgs} args - Arguments to create a AnnProfSubjDistro.
   * @example
   * // Create one AnnProfSubjDistro
   * const AnnProfSubjDistro = await prisma.annProfSubjDistro.create({
   *   data: {
   *     // ... data to create a AnnProfSubjDistro
   *   }
   * })
   * 
  **/
  create<T extends AnnProfSubjDistroCreateArgs>(
    args: Subset<T, AnnProfSubjDistroCreateArgs>
  ): CheckSelect<T, Prisma__AnnProfSubjDistroClient<AnnProfSubjDistro>, Prisma__AnnProfSubjDistroClient<AnnProfSubjDistroGetPayload<T>>>
  /**
   * Delete a AnnProfSubjDistro.
   * @param {AnnProfSubjDistroDeleteArgs} args - Arguments to delete one AnnProfSubjDistro.
   * @example
   * // Delete one AnnProfSubjDistro
   * const AnnProfSubjDistro = await prisma.annProfSubjDistro.delete({
   *   where: {
   *     // ... filter to delete one AnnProfSubjDistro
   *   }
   * })
   * 
  **/
  delete<T extends AnnProfSubjDistroDeleteArgs>(
    args: Subset<T, AnnProfSubjDistroDeleteArgs>
  ): CheckSelect<T, Prisma__AnnProfSubjDistroClient<AnnProfSubjDistro>, Prisma__AnnProfSubjDistroClient<AnnProfSubjDistroGetPayload<T>>>
  /**
   * Update one AnnProfSubjDistro.
   * @param {AnnProfSubjDistroUpdateArgs} args - Arguments to update one AnnProfSubjDistro.
   * @example
   * // Update one AnnProfSubjDistro
   * const annProfSubjDistro = await prisma.annProfSubjDistro.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends AnnProfSubjDistroUpdateArgs>(
    args: Subset<T, AnnProfSubjDistroUpdateArgs>
  ): CheckSelect<T, Prisma__AnnProfSubjDistroClient<AnnProfSubjDistro>, Prisma__AnnProfSubjDistroClient<AnnProfSubjDistroGetPayload<T>>>
  /**
   * Delete zero or more AnnProfSubjDistros.
   * @param {AnnProfSubjDistroDeleteManyArgs} args - Arguments to filter AnnProfSubjDistros to delete.
   * @example
   * // Delete a few AnnProfSubjDistros
   * const { count } = await prisma.annProfSubjDistro.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends AnnProfSubjDistroDeleteManyArgs>(
    args: Subset<T, AnnProfSubjDistroDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more AnnProfSubjDistros.
   * @param {AnnProfSubjDistroUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many AnnProfSubjDistros
   * const annProfSubjDistro = await prisma.annProfSubjDistro.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends AnnProfSubjDistroUpdateManyArgs>(
    args: Subset<T, AnnProfSubjDistroUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one AnnProfSubjDistro.
   * @param {AnnProfSubjDistroUpsertArgs} args - Arguments to update or create a AnnProfSubjDistro.
   * @example
   * // Update or create a AnnProfSubjDistro
   * const annProfSubjDistro = await prisma.annProfSubjDistro.upsert({
   *   create: {
   *     // ... data to create a AnnProfSubjDistro
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the AnnProfSubjDistro we want to update
   *   }
   * })
  **/
  upsert<T extends AnnProfSubjDistroUpsertArgs>(
    args: Subset<T, AnnProfSubjDistroUpsertArgs>
  ): CheckSelect<T, Prisma__AnnProfSubjDistroClient<AnnProfSubjDistro>, Prisma__AnnProfSubjDistroClient<AnnProfSubjDistroGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyAnnProfSubjDistroArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateAnnProfSubjDistroArgs>(args: Subset<T, AggregateAnnProfSubjDistroArgs>): Promise<GetAnnProfSubjDistroAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for AnnProfSubjDistro.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__AnnProfSubjDistroClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  AnnProfDept<T extends AnnProfDeptArgs = {}>(args?: Subset<T, AnnProfDeptArgs>): CheckSelect<T, Prisma__AnnProfDeptClient<AnnProfDept | null>, Prisma__AnnProfDeptClient<AnnProfDeptGetPayload<T> | null>>;

  Subject<T extends SubjectArgs = {}>(args?: Subset<T, SubjectArgs>): CheckSelect<T, Prisma__SubjectClient<Subject | null>, Prisma__SubjectClient<SubjectGetPayload<T> | null>>;

  Classroom<T extends ClassroomArgs = {}>(args?: Subset<T, ClassroomArgs>): CheckSelect<T, Prisma__ClassroomClient<Classroom | null>, Prisma__ClassroomClient<ClassroomGetPayload<T> | null>>;

  Score<T extends ScoreArgs = {}>(args?: Subset<T, ScoreArgs>): CheckSelect<T, Prisma__ScoreClient<Score | null>, Prisma__ScoreClient<ScoreGetPayload<T> | null>>;

  Logbook<T extends FindManyLogbookArgs = {}>(args?: Subset<T, FindManyLogbookArgs>): CheckSelect<T, Promise<Array<Logbook>>, Promise<Array<LogbookGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * AnnProfSubjDistro findOne
 */
export type FindOneAnnProfSubjDistroArgs = {
  /**
   * Select specific fields to fetch from the AnnProfSubjDistro
  **/
  select?: XOR<AnnProfSubjDistroSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfSubjDistroInclude, null>
  /**
   * Filter, which AnnProfSubjDistro to fetch.
  **/
  where: AnnProfSubjDistroWhereUniqueInput
}


/**
 * AnnProfSubjDistro findFirst
 */
export type FindFirstAnnProfSubjDistroArgs = {
  /**
   * Select specific fields to fetch from the AnnProfSubjDistro
  **/
  select?: XOR<AnnProfSubjDistroSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfSubjDistroInclude, null>
  /**
   * Filter, which AnnProfSubjDistro to fetch.
  **/
  where?: AnnProfSubjDistroWhereInput
  orderBy?: XOR<Enumerable<AnnProfSubjDistroOrderByInput>, AnnProfSubjDistroOrderByInput>
  cursor?: AnnProfSubjDistroWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<AnnProfSubjDistroDistinctFieldEnum>
}


/**
 * AnnProfSubjDistro findMany
 */
export type FindManyAnnProfSubjDistroArgs = {
  /**
   * Select specific fields to fetch from the AnnProfSubjDistro
  **/
  select?: XOR<AnnProfSubjDistroSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfSubjDistroInclude, null>
  /**
   * Filter, which AnnProfSubjDistros to fetch.
  **/
  where?: AnnProfSubjDistroWhereInput
  /**
   * Determine the order of the AnnProfSubjDistros to fetch.
  **/
  orderBy?: XOR<Enumerable<AnnProfSubjDistroOrderByInput>, AnnProfSubjDistroOrderByInput>
  /**
   * Sets the position for listing AnnProfSubjDistros.
  **/
  cursor?: AnnProfSubjDistroWhereUniqueInput
  /**
   * The number of AnnProfSubjDistros to fetch. If negative number, it will take AnnProfSubjDistros before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` AnnProfSubjDistros.
  **/
  skip?: number
  distinct?: Enumerable<AnnProfSubjDistroDistinctFieldEnum>
}


/**
 * AnnProfSubjDistro create
 */
export type AnnProfSubjDistroCreateArgs = {
  /**
   * Select specific fields to fetch from the AnnProfSubjDistro
  **/
  select?: XOR<AnnProfSubjDistroSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfSubjDistroInclude, null>
  /**
   * The data needed to create a AnnProfSubjDistro.
  **/
  data: AnnProfSubjDistroCreateInput
}


/**
 * AnnProfSubjDistro update
 */
export type AnnProfSubjDistroUpdateArgs = {
  /**
   * Select specific fields to fetch from the AnnProfSubjDistro
  **/
  select?: XOR<AnnProfSubjDistroSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfSubjDistroInclude, null>
  /**
   * The data needed to update a AnnProfSubjDistro.
  **/
  data: AnnProfSubjDistroUpdateInput
  /**
   * Choose, which AnnProfSubjDistro to update.
  **/
  where: AnnProfSubjDistroWhereUniqueInput
}


/**
 * AnnProfSubjDistro updateMany
 */
export type AnnProfSubjDistroUpdateManyArgs = {
  data: AnnProfSubjDistroUpdateManyMutationInput
  where?: AnnProfSubjDistroWhereInput
}


/**
 * AnnProfSubjDistro upsert
 */
export type AnnProfSubjDistroUpsertArgs = {
  /**
   * Select specific fields to fetch from the AnnProfSubjDistro
  **/
  select?: XOR<AnnProfSubjDistroSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfSubjDistroInclude, null>
  /**
   * The filter to search for the AnnProfSubjDistro to update in case it exists.
  **/
  where: AnnProfSubjDistroWhereUniqueInput
  /**
   * In case the AnnProfSubjDistro found by the `where` argument doesn't exist, create a new AnnProfSubjDistro with this data.
  **/
  create: AnnProfSubjDistroCreateInput
  /**
   * In case the AnnProfSubjDistro was found with the provided `where` argument, update it with this data.
  **/
  update: AnnProfSubjDistroUpdateInput
}


/**
 * AnnProfSubjDistro delete
 */
export type AnnProfSubjDistroDeleteArgs = {
  /**
   * Select specific fields to fetch from the AnnProfSubjDistro
  **/
  select?: XOR<AnnProfSubjDistroSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfSubjDistroInclude, null>
  /**
   * Filter which AnnProfSubjDistro to delete.
  **/
  where: AnnProfSubjDistroWhereUniqueInput
}


/**
 * AnnProfSubjDistro deleteMany
 */
export type AnnProfSubjDistroDeleteManyArgs = {
  where?: AnnProfSubjDistroWhereInput
}


/**
 * AnnProfSubjDistro without action
 */
export type AnnProfSubjDistroArgs = {
  /**
   * Select specific fields to fetch from the AnnProfSubjDistro
  **/
  select?: XOR<AnnProfSubjDistroSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnProfSubjDistroInclude, null>
}



/**
 * Model Subject
 */

export type Subject = {
  id: string
  subjectName: string
  subjectCode: string
  createdAt: Date
  updatedAt: Date
  departmentId: string
}


export type AggregateSubject = {
  count: number
}



export type AggregateSubjectArgs = {
  where?: SubjectWhereInput
  orderBy?: XOR<Enumerable<SubjectOrderByInput>, SubjectOrderByInput>
  cursor?: SubjectWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<SubjectDistinctFieldEnum>
  count?: true
}

export type GetSubjectAggregateType<T extends AggregateSubjectArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type SubjectSelect = {
  id?: boolean
  subjectName?: boolean
  subjectCode?: boolean
  annProfSubj?: boolean | FindManyAnnProfSubjDistroArgs
  createdAt?: boolean
  updatedAt?: boolean
  Department?: boolean | DepartmentArgs
  departmentId?: boolean
}

export type SubjectInclude = {
  annProfSubj?: boolean | FindManyAnnProfSubjDistroArgs
  Department?: boolean | DepartmentArgs
}

export type SubjectGetPayload<
  S extends boolean | null | undefined | SubjectArgs,
  U = keyof S
> = S extends true
  ? Subject
  : S extends undefined
  ? never
  : S extends SubjectArgs | FindManySubjectArgs
  ? 'include' extends U
    ? Subject  & {
      [P in TrueKeys<S['include']>]:
      P extends 'annProfSubj'
      ? Array<AnnProfSubjDistroGetPayload<S['include'][P]>> :
      P extends 'Department'
      ? DepartmentGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Subject ? Subject[P]
: 
      P extends 'annProfSubj'
      ? Array<AnnProfSubjDistroGetPayload<S['select'][P]>> :
      P extends 'Department'
      ? DepartmentGetPayload<S['select'][P]> : never
    }
  : Subject
: Subject


export interface SubjectDelegate {
  /**
   * Find zero or one Subject that matches the filter.
   * @param {FindOneSubjectArgs} args - Arguments to find a Subject
   * @example
   * // Get one Subject
   * const subject = await prisma.subject.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneSubjectArgs>(
    args: Subset<T, FindOneSubjectArgs>
  ): CheckSelect<T, Prisma__SubjectClient<Subject | null>, Prisma__SubjectClient<SubjectGetPayload<T> | null>>
  /**
   * Find the first Subject that matches the filter.
   * @param {FindFirstSubjectArgs} args - Arguments to find a Subject
   * @example
   * // Get one Subject
   * const subject = await prisma.subject.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstSubjectArgs>(
    args?: Subset<T, FindFirstSubjectArgs>
  ): CheckSelect<T, Prisma__SubjectClient<Subject | null>, Prisma__SubjectClient<SubjectGetPayload<T> | null>>
  /**
   * Find zero or more Subjects that matches the filter.
   * @param {FindManySubjectArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Subjects
   * const subjects = await prisma.subject.findMany()
   * 
   * // Get first 10 Subjects
   * const subjects = await prisma.subject.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManySubjectArgs>(
    args?: Subset<T, FindManySubjectArgs>
  ): CheckSelect<T, Promise<Array<Subject>>, Promise<Array<SubjectGetPayload<T>>>>
  /**
   * Create a Subject.
   * @param {SubjectCreateArgs} args - Arguments to create a Subject.
   * @example
   * // Create one Subject
   * const Subject = await prisma.subject.create({
   *   data: {
   *     // ... data to create a Subject
   *   }
   * })
   * 
  **/
  create<T extends SubjectCreateArgs>(
    args: Subset<T, SubjectCreateArgs>
  ): CheckSelect<T, Prisma__SubjectClient<Subject>, Prisma__SubjectClient<SubjectGetPayload<T>>>
  /**
   * Delete a Subject.
   * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
   * @example
   * // Delete one Subject
   * const Subject = await prisma.subject.delete({
   *   where: {
   *     // ... filter to delete one Subject
   *   }
   * })
   * 
  **/
  delete<T extends SubjectDeleteArgs>(
    args: Subset<T, SubjectDeleteArgs>
  ): CheckSelect<T, Prisma__SubjectClient<Subject>, Prisma__SubjectClient<SubjectGetPayload<T>>>
  /**
   * Update one Subject.
   * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
   * @example
   * // Update one Subject
   * const subject = await prisma.subject.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends SubjectUpdateArgs>(
    args: Subset<T, SubjectUpdateArgs>
  ): CheckSelect<T, Prisma__SubjectClient<Subject>, Prisma__SubjectClient<SubjectGetPayload<T>>>
  /**
   * Delete zero or more Subjects.
   * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
   * @example
   * // Delete a few Subjects
   * const { count } = await prisma.subject.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends SubjectDeleteManyArgs>(
    args: Subset<T, SubjectDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Subjects.
   * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Subjects
   * const subject = await prisma.subject.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends SubjectUpdateManyArgs>(
    args: Subset<T, SubjectUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Subject.
   * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
   * @example
   * // Update or create a Subject
   * const subject = await prisma.subject.upsert({
   *   create: {
   *     // ... data to create a Subject
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Subject we want to update
   *   }
   * })
  **/
  upsert<T extends SubjectUpsertArgs>(
    args: Subset<T, SubjectUpsertArgs>
  ): CheckSelect<T, Prisma__SubjectClient<Subject>, Prisma__SubjectClient<SubjectGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManySubjectArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateSubjectArgs>(args: Subset<T, AggregateSubjectArgs>): Promise<GetSubjectAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Subject.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__SubjectClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  annProfSubj<T extends FindManyAnnProfSubjDistroArgs = {}>(args?: Subset<T, FindManyAnnProfSubjDistroArgs>): CheckSelect<T, Promise<Array<AnnProfSubjDistro>>, Promise<Array<AnnProfSubjDistroGetPayload<T>>>>;

  Department<T extends DepartmentArgs = {}>(args?: Subset<T, DepartmentArgs>): CheckSelect<T, Prisma__DepartmentClient<Department | null>, Prisma__DepartmentClient<DepartmentGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Subject findOne
 */
export type FindOneSubjectArgs = {
  /**
   * Select specific fields to fetch from the Subject
  **/
  select?: XOR<SubjectSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubjectInclude, null>
  /**
   * Filter, which Subject to fetch.
  **/
  where: SubjectWhereUniqueInput
}


/**
 * Subject findFirst
 */
export type FindFirstSubjectArgs = {
  /**
   * Select specific fields to fetch from the Subject
  **/
  select?: XOR<SubjectSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubjectInclude, null>
  /**
   * Filter, which Subject to fetch.
  **/
  where?: SubjectWhereInput
  orderBy?: XOR<Enumerable<SubjectOrderByInput>, SubjectOrderByInput>
  cursor?: SubjectWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<SubjectDistinctFieldEnum>
}


/**
 * Subject findMany
 */
export type FindManySubjectArgs = {
  /**
   * Select specific fields to fetch from the Subject
  **/
  select?: XOR<SubjectSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubjectInclude, null>
  /**
   * Filter, which Subjects to fetch.
  **/
  where?: SubjectWhereInput
  /**
   * Determine the order of the Subjects to fetch.
  **/
  orderBy?: XOR<Enumerable<SubjectOrderByInput>, SubjectOrderByInput>
  /**
   * Sets the position for listing Subjects.
  **/
  cursor?: SubjectWhereUniqueInput
  /**
   * The number of Subjects to fetch. If negative number, it will take Subjects before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Subjects.
  **/
  skip?: number
  distinct?: Enumerable<SubjectDistinctFieldEnum>
}


/**
 * Subject create
 */
export type SubjectCreateArgs = {
  /**
   * Select specific fields to fetch from the Subject
  **/
  select?: XOR<SubjectSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubjectInclude, null>
  /**
   * The data needed to create a Subject.
  **/
  data: SubjectCreateInput
}


/**
 * Subject update
 */
export type SubjectUpdateArgs = {
  /**
   * Select specific fields to fetch from the Subject
  **/
  select?: XOR<SubjectSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubjectInclude, null>
  /**
   * The data needed to update a Subject.
  **/
  data: SubjectUpdateInput
  /**
   * Choose, which Subject to update.
  **/
  where: SubjectWhereUniqueInput
}


/**
 * Subject updateMany
 */
export type SubjectUpdateManyArgs = {
  data: SubjectUpdateManyMutationInput
  where?: SubjectWhereInput
}


/**
 * Subject upsert
 */
export type SubjectUpsertArgs = {
  /**
   * Select specific fields to fetch from the Subject
  **/
  select?: XOR<SubjectSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubjectInclude, null>
  /**
   * The filter to search for the Subject to update in case it exists.
  **/
  where: SubjectWhereUniqueInput
  /**
   * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
  **/
  create: SubjectCreateInput
  /**
   * In case the Subject was found with the provided `where` argument, update it with this data.
  **/
  update: SubjectUpdateInput
}


/**
 * Subject delete
 */
export type SubjectDeleteArgs = {
  /**
   * Select specific fields to fetch from the Subject
  **/
  select?: XOR<SubjectSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubjectInclude, null>
  /**
   * Filter which Subject to delete.
  **/
  where: SubjectWhereUniqueInput
}


/**
 * Subject deleteMany
 */
export type SubjectDeleteManyArgs = {
  where?: SubjectWhereInput
}


/**
 * Subject without action
 */
export type SubjectArgs = {
  /**
   * Select specific fields to fetch from the Subject
  **/
  select?: XOR<SubjectSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<SubjectInclude, null>
}



/**
 * Model Classroom
 */

export type Classroom = {
  id: string
  className: string
  classCode: string
  createdAt: Date
  updatedAt: Date
}


export type AggregateClassroom = {
  count: number
}



export type AggregateClassroomArgs = {
  where?: ClassroomWhereInput
  orderBy?: XOR<Enumerable<ClassroomOrderByInput>, ClassroomOrderByInput>
  cursor?: ClassroomWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ClassroomDistinctFieldEnum>
  count?: true
}

export type GetClassroomAggregateType<T extends AggregateClassroomArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type ClassroomSelect = {
  id?: boolean
  className?: boolean
  classCode?: boolean
  annProfSubj?: boolean | FindManyAnnProfSubjDistroArgs
  annStudentClassroom?: boolean | FindManyAnnStudentClassroomArgs
  createdAt?: boolean
  updatedAt?: boolean
}

export type ClassroomInclude = {
  annProfSubj?: boolean | FindManyAnnProfSubjDistroArgs
  annStudentClassroom?: boolean | FindManyAnnStudentClassroomArgs
}

export type ClassroomGetPayload<
  S extends boolean | null | undefined | ClassroomArgs,
  U = keyof S
> = S extends true
  ? Classroom
  : S extends undefined
  ? never
  : S extends ClassroomArgs | FindManyClassroomArgs
  ? 'include' extends U
    ? Classroom  & {
      [P in TrueKeys<S['include']>]:
      P extends 'annProfSubj'
      ? Array<AnnProfSubjDistroGetPayload<S['include'][P]>> :
      P extends 'annStudentClassroom'
      ? Array<AnnStudentClassroomGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Classroom ? Classroom[P]
: 
      P extends 'annProfSubj'
      ? Array<AnnProfSubjDistroGetPayload<S['select'][P]>> :
      P extends 'annStudentClassroom'
      ? Array<AnnStudentClassroomGetPayload<S['select'][P]>> : never
    }
  : Classroom
: Classroom


export interface ClassroomDelegate {
  /**
   * Find zero or one Classroom that matches the filter.
   * @param {FindOneClassroomArgs} args - Arguments to find a Classroom
   * @example
   * // Get one Classroom
   * const classroom = await prisma.classroom.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneClassroomArgs>(
    args: Subset<T, FindOneClassroomArgs>
  ): CheckSelect<T, Prisma__ClassroomClient<Classroom | null>, Prisma__ClassroomClient<ClassroomGetPayload<T> | null>>
  /**
   * Find the first Classroom that matches the filter.
   * @param {FindFirstClassroomArgs} args - Arguments to find a Classroom
   * @example
   * // Get one Classroom
   * const classroom = await prisma.classroom.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstClassroomArgs>(
    args?: Subset<T, FindFirstClassroomArgs>
  ): CheckSelect<T, Prisma__ClassroomClient<Classroom | null>, Prisma__ClassroomClient<ClassroomGetPayload<T> | null>>
  /**
   * Find zero or more Classrooms that matches the filter.
   * @param {FindManyClassroomArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Classrooms
   * const classrooms = await prisma.classroom.findMany()
   * 
   * // Get first 10 Classrooms
   * const classrooms = await prisma.classroom.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const classroomWithIdOnly = await prisma.classroom.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyClassroomArgs>(
    args?: Subset<T, FindManyClassroomArgs>
  ): CheckSelect<T, Promise<Array<Classroom>>, Promise<Array<ClassroomGetPayload<T>>>>
  /**
   * Create a Classroom.
   * @param {ClassroomCreateArgs} args - Arguments to create a Classroom.
   * @example
   * // Create one Classroom
   * const Classroom = await prisma.classroom.create({
   *   data: {
   *     // ... data to create a Classroom
   *   }
   * })
   * 
  **/
  create<T extends ClassroomCreateArgs>(
    args: Subset<T, ClassroomCreateArgs>
  ): CheckSelect<T, Prisma__ClassroomClient<Classroom>, Prisma__ClassroomClient<ClassroomGetPayload<T>>>
  /**
   * Delete a Classroom.
   * @param {ClassroomDeleteArgs} args - Arguments to delete one Classroom.
   * @example
   * // Delete one Classroom
   * const Classroom = await prisma.classroom.delete({
   *   where: {
   *     // ... filter to delete one Classroom
   *   }
   * })
   * 
  **/
  delete<T extends ClassroomDeleteArgs>(
    args: Subset<T, ClassroomDeleteArgs>
  ): CheckSelect<T, Prisma__ClassroomClient<Classroom>, Prisma__ClassroomClient<ClassroomGetPayload<T>>>
  /**
   * Update one Classroom.
   * @param {ClassroomUpdateArgs} args - Arguments to update one Classroom.
   * @example
   * // Update one Classroom
   * const classroom = await prisma.classroom.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends ClassroomUpdateArgs>(
    args: Subset<T, ClassroomUpdateArgs>
  ): CheckSelect<T, Prisma__ClassroomClient<Classroom>, Prisma__ClassroomClient<ClassroomGetPayload<T>>>
  /**
   * Delete zero or more Classrooms.
   * @param {ClassroomDeleteManyArgs} args - Arguments to filter Classrooms to delete.
   * @example
   * // Delete a few Classrooms
   * const { count } = await prisma.classroom.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends ClassroomDeleteManyArgs>(
    args: Subset<T, ClassroomDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Classrooms.
   * @param {ClassroomUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Classrooms
   * const classroom = await prisma.classroom.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends ClassroomUpdateManyArgs>(
    args: Subset<T, ClassroomUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Classroom.
   * @param {ClassroomUpsertArgs} args - Arguments to update or create a Classroom.
   * @example
   * // Update or create a Classroom
   * const classroom = await prisma.classroom.upsert({
   *   create: {
   *     // ... data to create a Classroom
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Classroom we want to update
   *   }
   * })
  **/
  upsert<T extends ClassroomUpsertArgs>(
    args: Subset<T, ClassroomUpsertArgs>
  ): CheckSelect<T, Prisma__ClassroomClient<Classroom>, Prisma__ClassroomClient<ClassroomGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyClassroomArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateClassroomArgs>(args: Subset<T, AggregateClassroomArgs>): Promise<GetClassroomAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Classroom.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__ClassroomClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  annProfSubj<T extends FindManyAnnProfSubjDistroArgs = {}>(args?: Subset<T, FindManyAnnProfSubjDistroArgs>): CheckSelect<T, Promise<Array<AnnProfSubjDistro>>, Promise<Array<AnnProfSubjDistroGetPayload<T>>>>;

  annStudentClassroom<T extends FindManyAnnStudentClassroomArgs = {}>(args?: Subset<T, FindManyAnnStudentClassroomArgs>): CheckSelect<T, Promise<Array<AnnStudentClassroom>>, Promise<Array<AnnStudentClassroomGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Classroom findOne
 */
export type FindOneClassroomArgs = {
  /**
   * Select specific fields to fetch from the Classroom
  **/
  select?: XOR<ClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ClassroomInclude, null>
  /**
   * Filter, which Classroom to fetch.
  **/
  where: ClassroomWhereUniqueInput
}


/**
 * Classroom findFirst
 */
export type FindFirstClassroomArgs = {
  /**
   * Select specific fields to fetch from the Classroom
  **/
  select?: XOR<ClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ClassroomInclude, null>
  /**
   * Filter, which Classroom to fetch.
  **/
  where?: ClassroomWhereInput
  orderBy?: XOR<Enumerable<ClassroomOrderByInput>, ClassroomOrderByInput>
  cursor?: ClassroomWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ClassroomDistinctFieldEnum>
}


/**
 * Classroom findMany
 */
export type FindManyClassroomArgs = {
  /**
   * Select specific fields to fetch from the Classroom
  **/
  select?: XOR<ClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ClassroomInclude, null>
  /**
   * Filter, which Classrooms to fetch.
  **/
  where?: ClassroomWhereInput
  /**
   * Determine the order of the Classrooms to fetch.
  **/
  orderBy?: XOR<Enumerable<ClassroomOrderByInput>, ClassroomOrderByInput>
  /**
   * Sets the position for listing Classrooms.
  **/
  cursor?: ClassroomWhereUniqueInput
  /**
   * The number of Classrooms to fetch. If negative number, it will take Classrooms before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Classrooms.
  **/
  skip?: number
  distinct?: Enumerable<ClassroomDistinctFieldEnum>
}


/**
 * Classroom create
 */
export type ClassroomCreateArgs = {
  /**
   * Select specific fields to fetch from the Classroom
  **/
  select?: XOR<ClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ClassroomInclude, null>
  /**
   * The data needed to create a Classroom.
  **/
  data: ClassroomCreateInput
}


/**
 * Classroom update
 */
export type ClassroomUpdateArgs = {
  /**
   * Select specific fields to fetch from the Classroom
  **/
  select?: XOR<ClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ClassroomInclude, null>
  /**
   * The data needed to update a Classroom.
  **/
  data: ClassroomUpdateInput
  /**
   * Choose, which Classroom to update.
  **/
  where: ClassroomWhereUniqueInput
}


/**
 * Classroom updateMany
 */
export type ClassroomUpdateManyArgs = {
  data: ClassroomUpdateManyMutationInput
  where?: ClassroomWhereInput
}


/**
 * Classroom upsert
 */
export type ClassroomUpsertArgs = {
  /**
   * Select specific fields to fetch from the Classroom
  **/
  select?: XOR<ClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ClassroomInclude, null>
  /**
   * The filter to search for the Classroom to update in case it exists.
  **/
  where: ClassroomWhereUniqueInput
  /**
   * In case the Classroom found by the `where` argument doesn't exist, create a new Classroom with this data.
  **/
  create: ClassroomCreateInput
  /**
   * In case the Classroom was found with the provided `where` argument, update it with this data.
  **/
  update: ClassroomUpdateInput
}


/**
 * Classroom delete
 */
export type ClassroomDeleteArgs = {
  /**
   * Select specific fields to fetch from the Classroom
  **/
  select?: XOR<ClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ClassroomInclude, null>
  /**
   * Filter which Classroom to delete.
  **/
  where: ClassroomWhereUniqueInput
}


/**
 * Classroom deleteMany
 */
export type ClassroomDeleteManyArgs = {
  where?: ClassroomWhereInput
}


/**
 * Classroom without action
 */
export type ClassroomArgs = {
  /**
   * Select specific fields to fetch from the Classroom
  **/
  select?: XOR<ClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ClassroomInclude, null>
}



/**
 * Model Student
 */

export type Student = {
  id: string
  student1stName: string
  student2ndName: string
  student3rdName: string
  sex: string
  studentMatricule: string
  image: string
  createdAt: Date
  updatedAt: Date
}


export type AggregateStudent = {
  count: number
}



export type AggregateStudentArgs = {
  where?: StudentWhereInput
  orderBy?: XOR<Enumerable<StudentOrderByInput>, StudentOrderByInput>
  cursor?: StudentWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<StudentDistinctFieldEnum>
  count?: true
}

export type GetStudentAggregateType<T extends AggregateStudentArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type StudentSelect = {
  id?: boolean
  student1stName?: boolean
  student2ndName?: boolean
  student3rdName?: boolean
  sex?: boolean
  studentMatricule?: boolean
  image?: boolean
  annStudentClassroom?: boolean | FindManyAnnStudentClassroomArgs
  createdAt?: boolean
  updatedAt?: boolean
}

export type StudentInclude = {
  annStudentClassroom?: boolean | FindManyAnnStudentClassroomArgs
}

export type StudentGetPayload<
  S extends boolean | null | undefined | StudentArgs,
  U = keyof S
> = S extends true
  ? Student
  : S extends undefined
  ? never
  : S extends StudentArgs | FindManyStudentArgs
  ? 'include' extends U
    ? Student  & {
      [P in TrueKeys<S['include']>]:
      P extends 'annStudentClassroom'
      ? Array<AnnStudentClassroomGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Student ? Student[P]
: 
      P extends 'annStudentClassroom'
      ? Array<AnnStudentClassroomGetPayload<S['select'][P]>> : never
    }
  : Student
: Student


export interface StudentDelegate {
  /**
   * Find zero or one Student that matches the filter.
   * @param {FindOneStudentArgs} args - Arguments to find a Student
   * @example
   * // Get one Student
   * const student = await prisma.student.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneStudentArgs>(
    args: Subset<T, FindOneStudentArgs>
  ): CheckSelect<T, Prisma__StudentClient<Student | null>, Prisma__StudentClient<StudentGetPayload<T> | null>>
  /**
   * Find the first Student that matches the filter.
   * @param {FindFirstStudentArgs} args - Arguments to find a Student
   * @example
   * // Get one Student
   * const student = await prisma.student.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstStudentArgs>(
    args?: Subset<T, FindFirstStudentArgs>
  ): CheckSelect<T, Prisma__StudentClient<Student | null>, Prisma__StudentClient<StudentGetPayload<T> | null>>
  /**
   * Find zero or more Students that matches the filter.
   * @param {FindManyStudentArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Students
   * const students = await prisma.student.findMany()
   * 
   * // Get first 10 Students
   * const students = await prisma.student.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyStudentArgs>(
    args?: Subset<T, FindManyStudentArgs>
  ): CheckSelect<T, Promise<Array<Student>>, Promise<Array<StudentGetPayload<T>>>>
  /**
   * Create a Student.
   * @param {StudentCreateArgs} args - Arguments to create a Student.
   * @example
   * // Create one Student
   * const Student = await prisma.student.create({
   *   data: {
   *     // ... data to create a Student
   *   }
   * })
   * 
  **/
  create<T extends StudentCreateArgs>(
    args: Subset<T, StudentCreateArgs>
  ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>
  /**
   * Delete a Student.
   * @param {StudentDeleteArgs} args - Arguments to delete one Student.
   * @example
   * // Delete one Student
   * const Student = await prisma.student.delete({
   *   where: {
   *     // ... filter to delete one Student
   *   }
   * })
   * 
  **/
  delete<T extends StudentDeleteArgs>(
    args: Subset<T, StudentDeleteArgs>
  ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>
  /**
   * Update one Student.
   * @param {StudentUpdateArgs} args - Arguments to update one Student.
   * @example
   * // Update one Student
   * const student = await prisma.student.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends StudentUpdateArgs>(
    args: Subset<T, StudentUpdateArgs>
  ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>
  /**
   * Delete zero or more Students.
   * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
   * @example
   * // Delete a few Students
   * const { count } = await prisma.student.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends StudentDeleteManyArgs>(
    args: Subset<T, StudentDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Students.
   * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Students
   * const student = await prisma.student.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends StudentUpdateManyArgs>(
    args: Subset<T, StudentUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Student.
   * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
   * @example
   * // Update or create a Student
   * const student = await prisma.student.upsert({
   *   create: {
   *     // ... data to create a Student
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Student we want to update
   *   }
   * })
  **/
  upsert<T extends StudentUpsertArgs>(
    args: Subset<T, StudentUpsertArgs>
  ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyStudentArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateStudentArgs>(args: Subset<T, AggregateStudentArgs>): Promise<GetStudentAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Student.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__StudentClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  annStudentClassroom<T extends FindManyAnnStudentClassroomArgs = {}>(args?: Subset<T, FindManyAnnStudentClassroomArgs>): CheckSelect<T, Promise<Array<AnnStudentClassroom>>, Promise<Array<AnnStudentClassroomGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Student findOne
 */
export type FindOneStudentArgs = {
  /**
   * Select specific fields to fetch from the Student
  **/
  select?: XOR<StudentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<StudentInclude, null>
  /**
   * Filter, which Student to fetch.
  **/
  where: StudentWhereUniqueInput
}


/**
 * Student findFirst
 */
export type FindFirstStudentArgs = {
  /**
   * Select specific fields to fetch from the Student
  **/
  select?: XOR<StudentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<StudentInclude, null>
  /**
   * Filter, which Student to fetch.
  **/
  where?: StudentWhereInput
  orderBy?: XOR<Enumerable<StudentOrderByInput>, StudentOrderByInput>
  cursor?: StudentWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<StudentDistinctFieldEnum>
}


/**
 * Student findMany
 */
export type FindManyStudentArgs = {
  /**
   * Select specific fields to fetch from the Student
  **/
  select?: XOR<StudentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<StudentInclude, null>
  /**
   * Filter, which Students to fetch.
  **/
  where?: StudentWhereInput
  /**
   * Determine the order of the Students to fetch.
  **/
  orderBy?: XOR<Enumerable<StudentOrderByInput>, StudentOrderByInput>
  /**
   * Sets the position for listing Students.
  **/
  cursor?: StudentWhereUniqueInput
  /**
   * The number of Students to fetch. If negative number, it will take Students before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Students.
  **/
  skip?: number
  distinct?: Enumerable<StudentDistinctFieldEnum>
}


/**
 * Student create
 */
export type StudentCreateArgs = {
  /**
   * Select specific fields to fetch from the Student
  **/
  select?: XOR<StudentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<StudentInclude, null>
  /**
   * The data needed to create a Student.
  **/
  data: StudentCreateInput
}


/**
 * Student update
 */
export type StudentUpdateArgs = {
  /**
   * Select specific fields to fetch from the Student
  **/
  select?: XOR<StudentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<StudentInclude, null>
  /**
   * The data needed to update a Student.
  **/
  data: StudentUpdateInput
  /**
   * Choose, which Student to update.
  **/
  where: StudentWhereUniqueInput
}


/**
 * Student updateMany
 */
export type StudentUpdateManyArgs = {
  data: StudentUpdateManyMutationInput
  where?: StudentWhereInput
}


/**
 * Student upsert
 */
export type StudentUpsertArgs = {
  /**
   * Select specific fields to fetch from the Student
  **/
  select?: XOR<StudentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<StudentInclude, null>
  /**
   * The filter to search for the Student to update in case it exists.
  **/
  where: StudentWhereUniqueInput
  /**
   * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
  **/
  create: StudentCreateInput
  /**
   * In case the Student was found with the provided `where` argument, update it with this data.
  **/
  update: StudentUpdateInput
}


/**
 * Student delete
 */
export type StudentDeleteArgs = {
  /**
   * Select specific fields to fetch from the Student
  **/
  select?: XOR<StudentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<StudentInclude, null>
  /**
   * Filter which Student to delete.
  **/
  where: StudentWhereUniqueInput
}


/**
 * Student deleteMany
 */
export type StudentDeleteManyArgs = {
  where?: StudentWhereInput
}


/**
 * Student without action
 */
export type StudentArgs = {
  /**
   * Select specific fields to fetch from the Student
  **/
  select?: XOR<StudentSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<StudentInclude, null>
}



/**
 * Model AnnStudentClassroom
 */

export type AnnStudentClassroom = {
  id: string
  student1stName: string
  student2ndName: string
  student3rdName: string
  sex: string
  studentMatricule: string
  image: string
  createdAt: Date
  updatedAt: Date
  schoolYearId: string
  classroomId: string
  studentId: string
  scoreId: string
}


export type AggregateAnnStudentClassroom = {
  count: number
}



export type AggregateAnnStudentClassroomArgs = {
  where?: AnnStudentClassroomWhereInput
  orderBy?: XOR<Enumerable<AnnStudentClassroomOrderByInput>, AnnStudentClassroomOrderByInput>
  cursor?: AnnStudentClassroomWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<AnnStudentClassroomDistinctFieldEnum>
  count?: true
}

export type GetAnnStudentClassroomAggregateType<T extends AggregateAnnStudentClassroomArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type AnnStudentClassroomSelect = {
  id?: boolean
  student1stName?: boolean
  student2ndName?: boolean
  student3rdName?: boolean
  sex?: boolean
  studentMatricule?: boolean
  image?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  SchoolYear?: boolean | SchoolYearArgs
  schoolYearId?: boolean
  Classroom?: boolean | ClassroomArgs
  classroomId?: boolean
  Student?: boolean | StudentArgs
  studentId?: boolean
  Score?: boolean | ScoreArgs
  scoreId?: boolean
}

export type AnnStudentClassroomInclude = {
  SchoolYear?: boolean | SchoolYearArgs
  Classroom?: boolean | ClassroomArgs
  Student?: boolean | StudentArgs
  Score?: boolean | ScoreArgs
}

export type AnnStudentClassroomGetPayload<
  S extends boolean | null | undefined | AnnStudentClassroomArgs,
  U = keyof S
> = S extends true
  ? AnnStudentClassroom
  : S extends undefined
  ? never
  : S extends AnnStudentClassroomArgs | FindManyAnnStudentClassroomArgs
  ? 'include' extends U
    ? AnnStudentClassroom  & {
      [P in TrueKeys<S['include']>]:
      P extends 'SchoolYear'
      ? SchoolYearGetPayload<S['include'][P]> :
      P extends 'Classroom'
      ? ClassroomGetPayload<S['include'][P]> :
      P extends 'Student'
      ? StudentGetPayload<S['include'][P]> :
      P extends 'Score'
      ? ScoreGetPayload<S['include'][P]> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof AnnStudentClassroom ? AnnStudentClassroom[P]
: 
      P extends 'SchoolYear'
      ? SchoolYearGetPayload<S['select'][P]> :
      P extends 'Classroom'
      ? ClassroomGetPayload<S['select'][P]> :
      P extends 'Student'
      ? StudentGetPayload<S['select'][P]> :
      P extends 'Score'
      ? ScoreGetPayload<S['select'][P]> : never
    }
  : AnnStudentClassroom
: AnnStudentClassroom


export interface AnnStudentClassroomDelegate {
  /**
   * Find zero or one AnnStudentClassroom that matches the filter.
   * @param {FindOneAnnStudentClassroomArgs} args - Arguments to find a AnnStudentClassroom
   * @example
   * // Get one AnnStudentClassroom
   * const annStudentClassroom = await prisma.annStudentClassroom.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneAnnStudentClassroomArgs>(
    args: Subset<T, FindOneAnnStudentClassroomArgs>
  ): CheckSelect<T, Prisma__AnnStudentClassroomClient<AnnStudentClassroom | null>, Prisma__AnnStudentClassroomClient<AnnStudentClassroomGetPayload<T> | null>>
  /**
   * Find the first AnnStudentClassroom that matches the filter.
   * @param {FindFirstAnnStudentClassroomArgs} args - Arguments to find a AnnStudentClassroom
   * @example
   * // Get one AnnStudentClassroom
   * const annStudentClassroom = await prisma.annStudentClassroom.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstAnnStudentClassroomArgs>(
    args?: Subset<T, FindFirstAnnStudentClassroomArgs>
  ): CheckSelect<T, Prisma__AnnStudentClassroomClient<AnnStudentClassroom | null>, Prisma__AnnStudentClassroomClient<AnnStudentClassroomGetPayload<T> | null>>
  /**
   * Find zero or more AnnStudentClassrooms that matches the filter.
   * @param {FindManyAnnStudentClassroomArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all AnnStudentClassrooms
   * const annStudentClassrooms = await prisma.annStudentClassroom.findMany()
   * 
   * // Get first 10 AnnStudentClassrooms
   * const annStudentClassrooms = await prisma.annStudentClassroom.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const annStudentClassroomWithIdOnly = await prisma.annStudentClassroom.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyAnnStudentClassroomArgs>(
    args?: Subset<T, FindManyAnnStudentClassroomArgs>
  ): CheckSelect<T, Promise<Array<AnnStudentClassroom>>, Promise<Array<AnnStudentClassroomGetPayload<T>>>>
  /**
   * Create a AnnStudentClassroom.
   * @param {AnnStudentClassroomCreateArgs} args - Arguments to create a AnnStudentClassroom.
   * @example
   * // Create one AnnStudentClassroom
   * const AnnStudentClassroom = await prisma.annStudentClassroom.create({
   *   data: {
   *     // ... data to create a AnnStudentClassroom
   *   }
   * })
   * 
  **/
  create<T extends AnnStudentClassroomCreateArgs>(
    args: Subset<T, AnnStudentClassroomCreateArgs>
  ): CheckSelect<T, Prisma__AnnStudentClassroomClient<AnnStudentClassroom>, Prisma__AnnStudentClassroomClient<AnnStudentClassroomGetPayload<T>>>
  /**
   * Delete a AnnStudentClassroom.
   * @param {AnnStudentClassroomDeleteArgs} args - Arguments to delete one AnnStudentClassroom.
   * @example
   * // Delete one AnnStudentClassroom
   * const AnnStudentClassroom = await prisma.annStudentClassroom.delete({
   *   where: {
   *     // ... filter to delete one AnnStudentClassroom
   *   }
   * })
   * 
  **/
  delete<T extends AnnStudentClassroomDeleteArgs>(
    args: Subset<T, AnnStudentClassroomDeleteArgs>
  ): CheckSelect<T, Prisma__AnnStudentClassroomClient<AnnStudentClassroom>, Prisma__AnnStudentClassroomClient<AnnStudentClassroomGetPayload<T>>>
  /**
   * Update one AnnStudentClassroom.
   * @param {AnnStudentClassroomUpdateArgs} args - Arguments to update one AnnStudentClassroom.
   * @example
   * // Update one AnnStudentClassroom
   * const annStudentClassroom = await prisma.annStudentClassroom.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends AnnStudentClassroomUpdateArgs>(
    args: Subset<T, AnnStudentClassroomUpdateArgs>
  ): CheckSelect<T, Prisma__AnnStudentClassroomClient<AnnStudentClassroom>, Prisma__AnnStudentClassroomClient<AnnStudentClassroomGetPayload<T>>>
  /**
   * Delete zero or more AnnStudentClassrooms.
   * @param {AnnStudentClassroomDeleteManyArgs} args - Arguments to filter AnnStudentClassrooms to delete.
   * @example
   * // Delete a few AnnStudentClassrooms
   * const { count } = await prisma.annStudentClassroom.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends AnnStudentClassroomDeleteManyArgs>(
    args: Subset<T, AnnStudentClassroomDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more AnnStudentClassrooms.
   * @param {AnnStudentClassroomUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many AnnStudentClassrooms
   * const annStudentClassroom = await prisma.annStudentClassroom.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends AnnStudentClassroomUpdateManyArgs>(
    args: Subset<T, AnnStudentClassroomUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one AnnStudentClassroom.
   * @param {AnnStudentClassroomUpsertArgs} args - Arguments to update or create a AnnStudentClassroom.
   * @example
   * // Update or create a AnnStudentClassroom
   * const annStudentClassroom = await prisma.annStudentClassroom.upsert({
   *   create: {
   *     // ... data to create a AnnStudentClassroom
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the AnnStudentClassroom we want to update
   *   }
   * })
  **/
  upsert<T extends AnnStudentClassroomUpsertArgs>(
    args: Subset<T, AnnStudentClassroomUpsertArgs>
  ): CheckSelect<T, Prisma__AnnStudentClassroomClient<AnnStudentClassroom>, Prisma__AnnStudentClassroomClient<AnnStudentClassroomGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyAnnStudentClassroomArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateAnnStudentClassroomArgs>(args: Subset<T, AggregateAnnStudentClassroomArgs>): Promise<GetAnnStudentClassroomAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for AnnStudentClassroom.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__AnnStudentClassroomClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  SchoolYear<T extends SchoolYearArgs = {}>(args?: Subset<T, SchoolYearArgs>): CheckSelect<T, Prisma__SchoolYearClient<SchoolYear | null>, Prisma__SchoolYearClient<SchoolYearGetPayload<T> | null>>;

  Classroom<T extends ClassroomArgs = {}>(args?: Subset<T, ClassroomArgs>): CheckSelect<T, Prisma__ClassroomClient<Classroom | null>, Prisma__ClassroomClient<ClassroomGetPayload<T> | null>>;

  Student<T extends StudentArgs = {}>(args?: Subset<T, StudentArgs>): CheckSelect<T, Prisma__StudentClient<Student | null>, Prisma__StudentClient<StudentGetPayload<T> | null>>;

  Score<T extends ScoreArgs = {}>(args?: Subset<T, ScoreArgs>): CheckSelect<T, Prisma__ScoreClient<Score | null>, Prisma__ScoreClient<ScoreGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * AnnStudentClassroom findOne
 */
export type FindOneAnnStudentClassroomArgs = {
  /**
   * Select specific fields to fetch from the AnnStudentClassroom
  **/
  select?: XOR<AnnStudentClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnStudentClassroomInclude, null>
  /**
   * Filter, which AnnStudentClassroom to fetch.
  **/
  where: AnnStudentClassroomWhereUniqueInput
}


/**
 * AnnStudentClassroom findFirst
 */
export type FindFirstAnnStudentClassroomArgs = {
  /**
   * Select specific fields to fetch from the AnnStudentClassroom
  **/
  select?: XOR<AnnStudentClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnStudentClassroomInclude, null>
  /**
   * Filter, which AnnStudentClassroom to fetch.
  **/
  where?: AnnStudentClassroomWhereInput
  orderBy?: XOR<Enumerable<AnnStudentClassroomOrderByInput>, AnnStudentClassroomOrderByInput>
  cursor?: AnnStudentClassroomWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<AnnStudentClassroomDistinctFieldEnum>
}


/**
 * AnnStudentClassroom findMany
 */
export type FindManyAnnStudentClassroomArgs = {
  /**
   * Select specific fields to fetch from the AnnStudentClassroom
  **/
  select?: XOR<AnnStudentClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnStudentClassroomInclude, null>
  /**
   * Filter, which AnnStudentClassrooms to fetch.
  **/
  where?: AnnStudentClassroomWhereInput
  /**
   * Determine the order of the AnnStudentClassrooms to fetch.
  **/
  orderBy?: XOR<Enumerable<AnnStudentClassroomOrderByInput>, AnnStudentClassroomOrderByInput>
  /**
   * Sets the position for listing AnnStudentClassrooms.
  **/
  cursor?: AnnStudentClassroomWhereUniqueInput
  /**
   * The number of AnnStudentClassrooms to fetch. If negative number, it will take AnnStudentClassrooms before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` AnnStudentClassrooms.
  **/
  skip?: number
  distinct?: Enumerable<AnnStudentClassroomDistinctFieldEnum>
}


/**
 * AnnStudentClassroom create
 */
export type AnnStudentClassroomCreateArgs = {
  /**
   * Select specific fields to fetch from the AnnStudentClassroom
  **/
  select?: XOR<AnnStudentClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnStudentClassroomInclude, null>
  /**
   * The data needed to create a AnnStudentClassroom.
  **/
  data: AnnStudentClassroomCreateInput
}


/**
 * AnnStudentClassroom update
 */
export type AnnStudentClassroomUpdateArgs = {
  /**
   * Select specific fields to fetch from the AnnStudentClassroom
  **/
  select?: XOR<AnnStudentClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnStudentClassroomInclude, null>
  /**
   * The data needed to update a AnnStudentClassroom.
  **/
  data: AnnStudentClassroomUpdateInput
  /**
   * Choose, which AnnStudentClassroom to update.
  **/
  where: AnnStudentClassroomWhereUniqueInput
}


/**
 * AnnStudentClassroom updateMany
 */
export type AnnStudentClassroomUpdateManyArgs = {
  data: AnnStudentClassroomUpdateManyMutationInput
  where?: AnnStudentClassroomWhereInput
}


/**
 * AnnStudentClassroom upsert
 */
export type AnnStudentClassroomUpsertArgs = {
  /**
   * Select specific fields to fetch from the AnnStudentClassroom
  **/
  select?: XOR<AnnStudentClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnStudentClassroomInclude, null>
  /**
   * The filter to search for the AnnStudentClassroom to update in case it exists.
  **/
  where: AnnStudentClassroomWhereUniqueInput
  /**
   * In case the AnnStudentClassroom found by the `where` argument doesn't exist, create a new AnnStudentClassroom with this data.
  **/
  create: AnnStudentClassroomCreateInput
  /**
   * In case the AnnStudentClassroom was found with the provided `where` argument, update it with this data.
  **/
  update: AnnStudentClassroomUpdateInput
}


/**
 * AnnStudentClassroom delete
 */
export type AnnStudentClassroomDeleteArgs = {
  /**
   * Select specific fields to fetch from the AnnStudentClassroom
  **/
  select?: XOR<AnnStudentClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnStudentClassroomInclude, null>
  /**
   * Filter which AnnStudentClassroom to delete.
  **/
  where: AnnStudentClassroomWhereUniqueInput
}


/**
 * AnnStudentClassroom deleteMany
 */
export type AnnStudentClassroomDeleteManyArgs = {
  where?: AnnStudentClassroomWhereInput
}


/**
 * AnnStudentClassroom without action
 */
export type AnnStudentClassroomArgs = {
  /**
   * Select specific fields to fetch from the AnnStudentClassroom
  **/
  select?: XOR<AnnStudentClassroomSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<AnnStudentClassroomInclude, null>
}



/**
 * Model Prof
 */

export type Prof = {
  id: string
  prof1stName: string
  prof2ndName: string
  prof3rdName: string
  profMatricule: string
  specialty: string
  createdAt: Date
  updatedAt: Date
}


export type AggregateProf = {
  count: number
}



export type AggregateProfArgs = {
  where?: ProfWhereInput
  orderBy?: XOR<Enumerable<ProfOrderByInput>, ProfOrderByInput>
  cursor?: ProfWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ProfDistinctFieldEnum>
  count?: true
}

export type GetProfAggregateType<T extends AggregateProfArgs> = {
  [P in keyof T]: P extends 'count' ? number : never
}


    
    

export type ProfSelect = {
  id?: boolean
  prof1stName?: boolean
  prof2ndName?: boolean
  prof3rdName?: boolean
  profMatricule?: boolean
  specialty?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  annProfDept?: boolean | FindManyAnnProfDeptArgs
}

export type ProfInclude = {
  annProfDept?: boolean | FindManyAnnProfDeptArgs
}

export type ProfGetPayload<
  S extends boolean | null | undefined | ProfArgs,
  U = keyof S
> = S extends true
  ? Prof
  : S extends undefined
  ? never
  : S extends ProfArgs | FindManyProfArgs
  ? 'include' extends U
    ? Prof  & {
      [P in TrueKeys<S['include']>]:
      P extends 'annProfDept'
      ? Array<AnnProfDeptGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Prof ? Prof[P]
: 
      P extends 'annProfDept'
      ? Array<AnnProfDeptGetPayload<S['select'][P]>> : never
    }
  : Prof
: Prof


export interface ProfDelegate {
  /**
   * Find zero or one Prof that matches the filter.
   * @param {FindOneProfArgs} args - Arguments to find a Prof
   * @example
   * // Get one Prof
   * const prof = await prisma.prof.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneProfArgs>(
    args: Subset<T, FindOneProfArgs>
  ): CheckSelect<T, Prisma__ProfClient<Prof | null>, Prisma__ProfClient<ProfGetPayload<T> | null>>
  /**
   * Find the first Prof that matches the filter.
   * @param {FindFirstProfArgs} args - Arguments to find a Prof
   * @example
   * // Get one Prof
   * const prof = await prisma.prof.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstProfArgs>(
    args?: Subset<T, FindFirstProfArgs>
  ): CheckSelect<T, Prisma__ProfClient<Prof | null>, Prisma__ProfClient<ProfGetPayload<T> | null>>
  /**
   * Find zero or more Profs that matches the filter.
   * @param {FindManyProfArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Profs
   * const profs = await prisma.prof.findMany()
   * 
   * // Get first 10 Profs
   * const profs = await prisma.prof.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const profWithIdOnly = await prisma.prof.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyProfArgs>(
    args?: Subset<T, FindManyProfArgs>
  ): CheckSelect<T, Promise<Array<Prof>>, Promise<Array<ProfGetPayload<T>>>>
  /**
   * Create a Prof.
   * @param {ProfCreateArgs} args - Arguments to create a Prof.
   * @example
   * // Create one Prof
   * const Prof = await prisma.prof.create({
   *   data: {
   *     // ... data to create a Prof
   *   }
   * })
   * 
  **/
  create<T extends ProfCreateArgs>(
    args: Subset<T, ProfCreateArgs>
  ): CheckSelect<T, Prisma__ProfClient<Prof>, Prisma__ProfClient<ProfGetPayload<T>>>
  /**
   * Delete a Prof.
   * @param {ProfDeleteArgs} args - Arguments to delete one Prof.
   * @example
   * // Delete one Prof
   * const Prof = await prisma.prof.delete({
   *   where: {
   *     // ... filter to delete one Prof
   *   }
   * })
   * 
  **/
  delete<T extends ProfDeleteArgs>(
    args: Subset<T, ProfDeleteArgs>
  ): CheckSelect<T, Prisma__ProfClient<Prof>, Prisma__ProfClient<ProfGetPayload<T>>>
  /**
   * Update one Prof.
   * @param {ProfUpdateArgs} args - Arguments to update one Prof.
   * @example
   * // Update one Prof
   * const prof = await prisma.prof.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends ProfUpdateArgs>(
    args: Subset<T, ProfUpdateArgs>
  ): CheckSelect<T, Prisma__ProfClient<Prof>, Prisma__ProfClient<ProfGetPayload<T>>>
  /**
   * Delete zero or more Profs.
   * @param {ProfDeleteManyArgs} args - Arguments to filter Profs to delete.
   * @example
   * // Delete a few Profs
   * const { count } = await prisma.prof.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends ProfDeleteManyArgs>(
    args: Subset<T, ProfDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Profs.
   * @param {ProfUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Profs
   * const prof = await prisma.prof.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends ProfUpdateManyArgs>(
    args: Subset<T, ProfUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Prof.
   * @param {ProfUpsertArgs} args - Arguments to update or create a Prof.
   * @example
   * // Update or create a Prof
   * const prof = await prisma.prof.upsert({
   *   create: {
   *     // ... data to create a Prof
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Prof we want to update
   *   }
   * })
  **/
  upsert<T extends ProfUpsertArgs>(
    args: Subset<T, ProfUpsertArgs>
  ): CheckSelect<T, Prisma__ProfClient<Prof>, Prisma__ProfClient<ProfGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyProfArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateProfArgs>(args: Subset<T, AggregateProfArgs>): Promise<GetProfAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Prof.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__ProfClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  annProfDept<T extends FindManyAnnProfDeptArgs = {}>(args?: Subset<T, FindManyAnnProfDeptArgs>): CheckSelect<T, Promise<Array<AnnProfDept>>, Promise<Array<AnnProfDeptGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Prof findOne
 */
export type FindOneProfArgs = {
  /**
   * Select specific fields to fetch from the Prof
  **/
  select?: XOR<ProfSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ProfInclude, null>
  /**
   * Filter, which Prof to fetch.
  **/
  where: ProfWhereUniqueInput
}


/**
 * Prof findFirst
 */
export type FindFirstProfArgs = {
  /**
   * Select specific fields to fetch from the Prof
  **/
  select?: XOR<ProfSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ProfInclude, null>
  /**
   * Filter, which Prof to fetch.
  **/
  where?: ProfWhereInput
  orderBy?: XOR<Enumerable<ProfOrderByInput>, ProfOrderByInput>
  cursor?: ProfWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ProfDistinctFieldEnum>
}


/**
 * Prof findMany
 */
export type FindManyProfArgs = {
  /**
   * Select specific fields to fetch from the Prof
  **/
  select?: XOR<ProfSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ProfInclude, null>
  /**
   * Filter, which Profs to fetch.
  **/
  where?: ProfWhereInput
  /**
   * Determine the order of the Profs to fetch.
  **/
  orderBy?: XOR<Enumerable<ProfOrderByInput>, ProfOrderByInput>
  /**
   * Sets the position for listing Profs.
  **/
  cursor?: ProfWhereUniqueInput
  /**
   * The number of Profs to fetch. If negative number, it will take Profs before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Profs.
  **/
  skip?: number
  distinct?: Enumerable<ProfDistinctFieldEnum>
}


/**
 * Prof create
 */
export type ProfCreateArgs = {
  /**
   * Select specific fields to fetch from the Prof
  **/
  select?: XOR<ProfSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ProfInclude, null>
  /**
   * The data needed to create a Prof.
  **/
  data: ProfCreateInput
}


/**
 * Prof update
 */
export type ProfUpdateArgs = {
  /**
   * Select specific fields to fetch from the Prof
  **/
  select?: XOR<ProfSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ProfInclude, null>
  /**
   * The data needed to update a Prof.
  **/
  data: ProfUpdateInput
  /**
   * Choose, which Prof to update.
  **/
  where: ProfWhereUniqueInput
}


/**
 * Prof updateMany
 */
export type ProfUpdateManyArgs = {
  data: ProfUpdateManyMutationInput
  where?: ProfWhereInput
}


/**
 * Prof upsert
 */
export type ProfUpsertArgs = {
  /**
   * Select specific fields to fetch from the Prof
  **/
  select?: XOR<ProfSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ProfInclude, null>
  /**
   * The filter to search for the Prof to update in case it exists.
  **/
  where: ProfWhereUniqueInput
  /**
   * In case the Prof found by the `where` argument doesn't exist, create a new Prof with this data.
  **/
  create: ProfCreateInput
  /**
   * In case the Prof was found with the provided `where` argument, update it with this data.
  **/
  update: ProfUpdateInput
}


/**
 * Prof delete
 */
export type ProfDeleteArgs = {
  /**
   * Select specific fields to fetch from the Prof
  **/
  select?: XOR<ProfSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ProfInclude, null>
  /**
   * Filter which Prof to delete.
  **/
  where: ProfWhereUniqueInput
}


/**
 * Prof deleteMany
 */
export type ProfDeleteManyArgs = {
  where?: ProfWhereInput
}


/**
 * Prof without action
 */
export type ProfArgs = {
  /**
   * Select specific fields to fetch from the Prof
  **/
  select?: XOR<ProfSelect, null>
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: XOR<ProfInclude, null>
}



/**
 * Deep Input Types
 */


export type UserWhereInput = {
  AND?: XOR<UserWhereInput, Enumerable<UserWhereInput>>
  OR?: XOR<UserWhereInput, Enumerable<UserWhereInput>>
  NOT?: XOR<UserWhereInput, Enumerable<UserWhereInput>>
  id?: XOR<StringFilter, string>
  name?: XOR<StringFilter, string>
  email?: XOR<StringFilter, string>
  image?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type UserOrderByInput = {
  id?: SortOrder
  name?: SortOrder
  email?: SortOrder
  image?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type UserWhereUniqueInput = {
  id?: string
}

export type RegionWhereInput = {
  AND?: XOR<RegionWhereInput, Enumerable<RegionWhereInput>>
  OR?: XOR<RegionWhereInput, Enumerable<RegionWhereInput>>
  NOT?: XOR<RegionWhereInput, Enumerable<RegionWhereInput>>
  id?: XOR<StringFilter, string>
  regName?: XOR<StringFilter, string>
  regCode?: XOR<StringFilter, string>
  division?: DivisionListRelationFilter
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type RegionOrderByInput = {
  id?: SortOrder
  regName?: SortOrder
  regCode?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type RegionWhereUniqueInput = {
  id?: string
}

export type DivisionWhereInput = {
  AND?: XOR<DivisionWhereInput, Enumerable<DivisionWhereInput>>
  OR?: XOR<DivisionWhereInput, Enumerable<DivisionWhereInput>>
  NOT?: XOR<DivisionWhereInput, Enumerable<DivisionWhereInput>>
  id?: XOR<StringFilter, string>
  divisionName?: XOR<StringFilter, string>
  divisionCode?: XOR<StringFilter, string>
  subdiv?: SubdivisionListRelationFilter
  Region?: XOR<RegionRelationFilter, RegionWhereInput>
  regionId?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type DivisionOrderByInput = {
  id?: SortOrder
  divisionName?: SortOrder
  divisionCode?: SortOrder
  regionId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type DivisionWhereUniqueInput = {
  id?: string
}

export type SubdivisionWhereInput = {
  AND?: XOR<SubdivisionWhereInput, Enumerable<SubdivisionWhereInput>>
  OR?: XOR<SubdivisionWhereInput, Enumerable<SubdivisionWhereInput>>
  NOT?: XOR<SubdivisionWhereInput, Enumerable<SubdivisionWhereInput>>
  id?: XOR<StringFilter, string>
  subdivName?: XOR<StringFilter, string>
  subdivCode?: XOR<StringFilter, string>
  town?: TownListRelationFilter
  Division?: XOR<DivisionRelationFilter, DivisionWhereInput>
  divisionId?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type SubdivisionOrderByInput = {
  id?: SortOrder
  subdivName?: SortOrder
  subdivCode?: SortOrder
  divisionId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type SubdivisionWhereUniqueInput = {
  id?: string
}

export type TownWhereInput = {
  AND?: XOR<TownWhereInput, Enumerable<TownWhereInput>>
  OR?: XOR<TownWhereInput, Enumerable<TownWhereInput>>
  NOT?: XOR<TownWhereInput, Enumerable<TownWhereInput>>
  id?: XOR<StringFilter, string>
  townName?: XOR<StringFilter, string>
  townCode?: XOR<StringFilter, string>
  school?: SchoolListRelationFilter
  Subdivision?: XOR<SubdivisionRelationFilter, SubdivisionWhereInput>
  subdivisionId?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type TownOrderByInput = {
  id?: SortOrder
  townName?: SortOrder
  townCode?: SortOrder
  subdivisionId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type TownWhereUniqueInput = {
  id?: string
}

export type SchoolWhereInput = {
  AND?: XOR<SchoolWhereInput, Enumerable<SchoolWhereInput>>
  OR?: XOR<SchoolWhereInput, Enumerable<SchoolWhereInput>>
  NOT?: XOR<SchoolWhereInput, Enumerable<SchoolWhereInput>>
  id?: XOR<StringFilter, string>
  schoolName?: XOR<StringFilter, string>
  schoolNumber?: XOR<StringFilter, string>
  schoolCode?: XOR<StringFilter, string>
  section?: SectionListRelationFilter
  Town?: XOR<TownRelationFilter, TownWhereInput>
  townId?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type SchoolOrderByInput = {
  id?: SortOrder
  schoolName?: SortOrder
  schoolNumber?: SortOrder
  schoolCode?: SortOrder
  townId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type SchoolWhereUniqueInput = {
  id?: string
}

export type SectionWhereInput = {
  AND?: XOR<SectionWhereInput, Enumerable<SectionWhereInput>>
  OR?: XOR<SectionWhereInput, Enumerable<SectionWhereInput>>
  NOT?: XOR<SectionWhereInput, Enumerable<SectionWhereInput>>
  id?: XOR<StringFilter, string>
  sectionName?: XOR<StringFilter, string>
  sectionCode?: XOR<StringFilter, string>
  department?: DepartmentListRelationFilter
  School?: XOR<SchoolRelationFilter, SchoolWhereInput>
  schoolId?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type SectionOrderByInput = {
  id?: SortOrder
  sectionName?: SortOrder
  sectionCode?: SortOrder
  schoolId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type SectionWhereUniqueInput = {
  id?: string
}

export type DepartmentWhereInput = {
  AND?: XOR<DepartmentWhereInput, Enumerable<DepartmentWhereInput>>
  OR?: XOR<DepartmentWhereInput, Enumerable<DepartmentWhereInput>>
  NOT?: XOR<DepartmentWhereInput, Enumerable<DepartmentWhereInput>>
  id?: XOR<StringFilter, string>
  deptName?: XOR<StringFilter, string>
  deptCode?: XOR<StringFilter, string>
  annProfDept?: AnnProfDeptListRelationFilter
  subject?: SubjectListRelationFilter
  Section?: XOR<SectionRelationFilter, SectionWhereInput>
  sectionId?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type DepartmentOrderByInput = {
  id?: SortOrder
  deptName?: SortOrder
  deptCode?: SortOrder
  sectionId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type DepartmentWhereUniqueInput = {
  id?: string
}

export type TermWhereInput = {
  AND?: XOR<TermWhereInput, Enumerable<TermWhereInput>>
  OR?: XOR<TermWhereInput, Enumerable<TermWhereInput>>
  NOT?: XOR<TermWhereInput, Enumerable<TermWhereInput>>
  id?: XOR<StringFilter, string>
  termName?: XOR<StringFilter, string>
  termCode?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type TermOrderByInput = {
  id?: SortOrder
  termName?: SortOrder
  termCode?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type TermWhereUniqueInput = {
  id?: string
}

export type SequenceWhereInput = {
  AND?: XOR<SequenceWhereInput, Enumerable<SequenceWhereInput>>
  OR?: XOR<SequenceWhereInput, Enumerable<SequenceWhereInput>>
  NOT?: XOR<SequenceWhereInput, Enumerable<SequenceWhereInput>>
  id?: XOR<StringFilter, string>
  seqName?: XOR<StringFilter, string>
  seqCode?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
  Score?: XOR<ScoreRelationFilter, ScoreWhereInput>
  scoreId?: XOR<StringFilter, string>
}

export type SequenceOrderByInput = {
  id?: SortOrder
  seqName?: SortOrder
  seqCode?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  scoreId?: SortOrder
}

export type SequenceWhereUniqueInput = {
  id?: string
}

export type SchoolYearWhereInput = {
  AND?: XOR<SchoolYearWhereInput, Enumerable<SchoolYearWhereInput>>
  OR?: XOR<SchoolYearWhereInput, Enumerable<SchoolYearWhereInput>>
  NOT?: XOR<SchoolYearWhereInput, Enumerable<SchoolYearWhereInput>>
  id?: XOR<StringFilter, string>
  yearName?: XOR<StringFilter, string>
  yearCode?: XOR<StringFilter, string>
  annStudentClassroom?: AnnStudentClassroomListRelationFilter
  annProfDept?: AnnProfDeptListRelationFilter
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type SchoolYearOrderByInput = {
  id?: SortOrder
  yearName?: SortOrder
  yearCode?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type SchoolYearWhereUniqueInput = {
  id?: string
}

export type AnnProfDeptWhereInput = {
  AND?: XOR<AnnProfDeptWhereInput, Enumerable<AnnProfDeptWhereInput>>
  OR?: XOR<AnnProfDeptWhereInput, Enumerable<AnnProfDeptWhereInput>>
  NOT?: XOR<AnnProfDeptWhereInput, Enumerable<AnnProfDeptWhereInput>>
  id?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
  annProfSubj?: AnnProfSubjDistroListRelationFilter
  Department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>
  departmentId?: XOR<StringFilter, string>
  SchoolYear?: XOR<SchoolYearRelationFilter, SchoolYearWhereInput>
  schoolYearId?: XOR<StringFilter, string>
  Prof?: XOR<ProfRelationFilter, ProfWhereInput>
  profId?: XOR<StringFilter, string>
}

export type AnnProfDeptOrderByInput = {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  departmentId?: SortOrder
  schoolYearId?: SortOrder
  profId?: SortOrder
}

export type AnnProfDeptWhereUniqueInput = {
  id?: string
}

export type LogbookWhereInput = {
  AND?: XOR<LogbookWhereInput, Enumerable<LogbookWhereInput>>
  OR?: XOR<LogbookWhereInput, Enumerable<LogbookWhereInput>>
  NOT?: XOR<LogbookWhereInput, Enumerable<LogbookWhereInput>>
  id?: XOR<StringFilter, string>
  subjectMatter?: XOR<StringFilter, string>
  timeOfPeriod?: XOR<DateTimeFilter, Date | string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
  AnnProfSubjDistro?: XOR<AnnProfSubjDistroRelationFilter, AnnProfSubjDistroWhereInput>
  AnnProfSubjDistroId?: XOR<StringFilter, string>
}

export type LogbookOrderByInput = {
  id?: SortOrder
  subjectMatter?: SortOrder
  timeOfPeriod?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  AnnProfSubjDistroId?: SortOrder
}

export type LogbookWhereUniqueInput = {
  id?: string
}

export type ScoreWhereInput = {
  AND?: XOR<ScoreWhereInput, Enumerable<ScoreWhereInput>>
  OR?: XOR<ScoreWhereInput, Enumerable<ScoreWhereInput>>
  NOT?: XOR<ScoreWhereInput, Enumerable<ScoreWhereInput>>
  id?: XOR<StringFilter, string>
  marks?: XOR<StringFilter, string>
  seq?: SequenceListRelationFilter
  annStudentClass?: AnnStudentClassroomListRelationFilter
  annProfSubj?: AnnProfSubjDistroListRelationFilter
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type ScoreOrderByInput = {
  id?: SortOrder
  marks?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type ScoreWhereUniqueInput = {
  id?: string
}

export type AnnProfSubjDistroWhereInput = {
  AND?: XOR<AnnProfSubjDistroWhereInput, Enumerable<AnnProfSubjDistroWhereInput>>
  OR?: XOR<AnnProfSubjDistroWhereInput, Enumerable<AnnProfSubjDistroWhereInput>>
  NOT?: XOR<AnnProfSubjDistroWhereInput, Enumerable<AnnProfSubjDistroWhereInput>>
  id?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
  AnnProfDept?: XOR<AnnProfDeptRelationFilter, AnnProfDeptWhereInput>
  annProfDeptId?: XOR<StringFilter, string>
  Subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
  subjectId?: XOR<StringFilter, string>
  Classroom?: XOR<ClassroomRelationFilter, ClassroomWhereInput>
  classroomId?: XOR<StringFilter, string>
  Score?: XOR<ScoreRelationFilter, ScoreWhereInput>
  scoreId?: XOR<StringFilter, string>
  Logbook?: LogbookListRelationFilter
}

export type AnnProfSubjDistroOrderByInput = {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  annProfDeptId?: SortOrder
  subjectId?: SortOrder
  classroomId?: SortOrder
  scoreId?: SortOrder
}

export type AnnProfSubjDistroWhereUniqueInput = {
  id?: string
}

export type SubjectWhereInput = {
  AND?: XOR<SubjectWhereInput, Enumerable<SubjectWhereInput>>
  OR?: XOR<SubjectWhereInput, Enumerable<SubjectWhereInput>>
  NOT?: XOR<SubjectWhereInput, Enumerable<SubjectWhereInput>>
  id?: XOR<StringFilter, string>
  subjectName?: XOR<StringFilter, string>
  subjectCode?: XOR<StringFilter, string>
  annProfSubj?: AnnProfSubjDistroListRelationFilter
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
  Department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>
  departmentId?: XOR<StringFilter, string>
}

export type SubjectOrderByInput = {
  id?: SortOrder
  subjectName?: SortOrder
  subjectCode?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  departmentId?: SortOrder
}

export type SubjectWhereUniqueInput = {
  id?: string
}

export type ClassroomWhereInput = {
  AND?: XOR<ClassroomWhereInput, Enumerable<ClassroomWhereInput>>
  OR?: XOR<ClassroomWhereInput, Enumerable<ClassroomWhereInput>>
  NOT?: XOR<ClassroomWhereInput, Enumerable<ClassroomWhereInput>>
  id?: XOR<StringFilter, string>
  className?: XOR<StringFilter, string>
  classCode?: XOR<StringFilter, string>
  annProfSubj?: AnnProfSubjDistroListRelationFilter
  annStudentClassroom?: AnnStudentClassroomListRelationFilter
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type ClassroomOrderByInput = {
  id?: SortOrder
  className?: SortOrder
  classCode?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type ClassroomWhereUniqueInput = {
  id?: string
}

export type StudentWhereInput = {
  AND?: XOR<StudentWhereInput, Enumerable<StudentWhereInput>>
  OR?: XOR<StudentWhereInput, Enumerable<StudentWhereInput>>
  NOT?: XOR<StudentWhereInput, Enumerable<StudentWhereInput>>
  id?: XOR<StringFilter, string>
  student1stName?: XOR<StringFilter, string>
  student2ndName?: XOR<StringFilter, string>
  student3rdName?: XOR<StringFilter, string>
  sex?: XOR<StringFilter, string>
  studentMatricule?: XOR<StringFilter, string>
  image?: XOR<StringFilter, string>
  annStudentClassroom?: AnnStudentClassroomListRelationFilter
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type StudentOrderByInput = {
  id?: SortOrder
  student1stName?: SortOrder
  student2ndName?: SortOrder
  student3rdName?: SortOrder
  sex?: SortOrder
  studentMatricule?: SortOrder
  image?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type StudentWhereUniqueInput = {
  id?: string
}

export type AnnStudentClassroomWhereInput = {
  AND?: XOR<AnnStudentClassroomWhereInput, Enumerable<AnnStudentClassroomWhereInput>>
  OR?: XOR<AnnStudentClassroomWhereInput, Enumerable<AnnStudentClassroomWhereInput>>
  NOT?: XOR<AnnStudentClassroomWhereInput, Enumerable<AnnStudentClassroomWhereInput>>
  id?: XOR<StringFilter, string>
  student1stName?: XOR<StringFilter, string>
  student2ndName?: XOR<StringFilter, string>
  student3rdName?: XOR<StringFilter, string>
  sex?: XOR<StringFilter, string>
  studentMatricule?: XOR<StringFilter, string>
  image?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
  SchoolYear?: XOR<SchoolYearRelationFilter, SchoolYearWhereInput>
  schoolYearId?: XOR<StringFilter, string>
  Classroom?: XOR<ClassroomRelationFilter, ClassroomWhereInput>
  classroomId?: XOR<StringFilter, string>
  Student?: XOR<StudentRelationFilter, StudentWhereInput>
  studentId?: XOR<StringFilter, string>
  Score?: XOR<ScoreRelationFilter, ScoreWhereInput>
  scoreId?: XOR<StringFilter, string>
}

export type AnnStudentClassroomOrderByInput = {
  id?: SortOrder
  student1stName?: SortOrder
  student2ndName?: SortOrder
  student3rdName?: SortOrder
  sex?: SortOrder
  studentMatricule?: SortOrder
  image?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  schoolYearId?: SortOrder
  classroomId?: SortOrder
  studentId?: SortOrder
  scoreId?: SortOrder
}

export type AnnStudentClassroomWhereUniqueInput = {
  id?: string
}

export type ProfWhereInput = {
  AND?: XOR<ProfWhereInput, Enumerable<ProfWhereInput>>
  OR?: XOR<ProfWhereInput, Enumerable<ProfWhereInput>>
  NOT?: XOR<ProfWhereInput, Enumerable<ProfWhereInput>>
  id?: XOR<StringFilter, string>
  prof1stName?: XOR<StringFilter, string>
  prof2ndName?: XOR<StringFilter, string>
  prof3rdName?: XOR<StringFilter, string>
  profMatricule?: XOR<StringFilter, string>
  specialty?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
  annProfDept?: AnnProfDeptListRelationFilter
}

export type ProfOrderByInput = {
  id?: SortOrder
  prof1stName?: SortOrder
  prof2ndName?: SortOrder
  prof3rdName?: SortOrder
  profMatricule?: SortOrder
  specialty?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type ProfWhereUniqueInput = {
  id?: string
}

export type UserCreateInput = {
  id?: string
  name: string
  email: string
  image: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type UserUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  name?: XOR<string, StringFieldUpdateOperationsInput>
  email?: XOR<string, StringFieldUpdateOperationsInput>
  image?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type UserUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  name?: XOR<string, StringFieldUpdateOperationsInput>
  email?: XOR<string, StringFieldUpdateOperationsInput>
  image?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type RegionCreateInput = {
  id?: string
  regName: string
  regCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  division?: DivisionCreateManyWithoutRegionInput
}

export type RegionUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  regName?: XOR<string, StringFieldUpdateOperationsInput>
  regCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  division?: DivisionUpdateManyWithoutRegionInput
}

export type RegionUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  regName?: XOR<string, StringFieldUpdateOperationsInput>
  regCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type DivisionCreateInput = {
  id?: string
  divisionName: string
  divisionCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  subdiv?: SubdivisionCreateManyWithoutDivisionInput
  Region: RegionCreateOneWithoutDivisionInput
}

export type DivisionUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  divisionName?: XOR<string, StringFieldUpdateOperationsInput>
  divisionCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  subdiv?: SubdivisionUpdateManyWithoutDivisionInput
  Region?: RegionUpdateOneRequiredWithoutDivisionInput
}

export type DivisionUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  divisionName?: XOR<string, StringFieldUpdateOperationsInput>
  divisionCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type SubdivisionCreateInput = {
  id?: string
  subdivName: string
  subdivCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  town?: TownCreateManyWithoutSubdivisionInput
  Division: DivisionCreateOneWithoutSubdivInput
}

export type SubdivisionUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  subdivName?: XOR<string, StringFieldUpdateOperationsInput>
  subdivCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  town?: TownUpdateManyWithoutSubdivisionInput
  Division?: DivisionUpdateOneRequiredWithoutSubdivInput
}

export type SubdivisionUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  subdivName?: XOR<string, StringFieldUpdateOperationsInput>
  subdivCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type TownCreateInput = {
  id?: string
  townName: string
  townCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  school?: SchoolCreateManyWithoutTownInput
  Subdivision: SubdivisionCreateOneWithoutTownInput
}

export type TownUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  townName?: XOR<string, StringFieldUpdateOperationsInput>
  townCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  school?: SchoolUpdateManyWithoutTownInput
  Subdivision?: SubdivisionUpdateOneRequiredWithoutTownInput
}

export type TownUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  townName?: XOR<string, StringFieldUpdateOperationsInput>
  townCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type SchoolCreateInput = {
  id?: string
  schoolName: string
  schoolNumber: string
  schoolCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  section?: SectionCreateManyWithoutSchoolInput
  Town: TownCreateOneWithoutSchoolInput
}

export type SchoolUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  schoolName?: XOR<string, StringFieldUpdateOperationsInput>
  schoolNumber?: XOR<string, StringFieldUpdateOperationsInput>
  schoolCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  section?: SectionUpdateManyWithoutSchoolInput
  Town?: TownUpdateOneRequiredWithoutSchoolInput
}

export type SchoolUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  schoolName?: XOR<string, StringFieldUpdateOperationsInput>
  schoolNumber?: XOR<string, StringFieldUpdateOperationsInput>
  schoolCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type SectionCreateInput = {
  id?: string
  sectionName: string
  sectionCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  department?: DepartmentCreateManyWithoutSectionInput
  School: SchoolCreateOneWithoutSectionInput
}

export type SectionUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  sectionName?: XOR<string, StringFieldUpdateOperationsInput>
  sectionCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  department?: DepartmentUpdateManyWithoutSectionInput
  School?: SchoolUpdateOneRequiredWithoutSectionInput
}

export type SectionUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  sectionName?: XOR<string, StringFieldUpdateOperationsInput>
  sectionCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type DepartmentCreateInput = {
  id?: string
  deptName: string
  deptCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annProfDept?: AnnProfDeptCreateManyWithoutDepartmentInput
  subject?: SubjectCreateManyWithoutDepartmentInput
  Section: SectionCreateOneWithoutDepartmentInput
}

export type DepartmentUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  deptName?: XOR<string, StringFieldUpdateOperationsInput>
  deptCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annProfDept?: AnnProfDeptUpdateManyWithoutDepartmentInput
  subject?: SubjectUpdateManyWithoutDepartmentInput
  Section?: SectionUpdateOneRequiredWithoutDepartmentInput
}

export type DepartmentUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  deptName?: XOR<string, StringFieldUpdateOperationsInput>
  deptCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type TermCreateInput = {
  id?: string
  termName: string
  termCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type TermUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  termName?: XOR<string, StringFieldUpdateOperationsInput>
  termCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type TermUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  termName?: XOR<string, StringFieldUpdateOperationsInput>
  termCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type SequenceCreateInput = {
  id?: string
  seqName: string
  seqCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  Score: ScoreCreateOneWithoutSeqInput
}

export type SequenceUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  seqName?: XOR<string, StringFieldUpdateOperationsInput>
  seqCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  Score?: ScoreUpdateOneRequiredWithoutSeqInput
}

export type SequenceUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  seqName?: XOR<string, StringFieldUpdateOperationsInput>
  seqCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type SchoolYearCreateInput = {
  id?: string
  yearName: string
  yearCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annStudentClassroom?: AnnStudentClassroomCreateManyWithoutSchoolYearInput
  annProfDept?: AnnProfDeptCreateManyWithoutSchoolYearInput
}

export type SchoolYearUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  yearName?: XOR<string, StringFieldUpdateOperationsInput>
  yearCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annStudentClassroom?: AnnStudentClassroomUpdateManyWithoutSchoolYearInput
  annProfDept?: AnnProfDeptUpdateManyWithoutSchoolYearInput
}

export type SchoolYearUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  yearName?: XOR<string, StringFieldUpdateOperationsInput>
  yearCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type AnnProfDeptCreateInput = {
  id?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annProfSubj?: AnnProfSubjDistroCreateManyWithoutAnnProfDeptInput
  Department: DepartmentCreateOneWithoutAnnProfDeptInput
  SchoolYear: SchoolYearCreateOneWithoutAnnProfDeptInput
  Prof: ProfCreateOneWithoutAnnProfDeptInput
}

export type AnnProfDeptUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annProfSubj?: AnnProfSubjDistroUpdateManyWithoutAnnProfDeptInput
  Department?: DepartmentUpdateOneRequiredWithoutAnnProfDeptInput
  SchoolYear?: SchoolYearUpdateOneRequiredWithoutAnnProfDeptInput
  Prof?: ProfUpdateOneRequiredWithoutAnnProfDeptInput
}

export type AnnProfDeptUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type LogbookCreateInput = {
  id?: string
  subjectMatter: string
  timeOfPeriod?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  AnnProfSubjDistro: AnnProfSubjDistroCreateOneWithoutLogbookInput
}

export type LogbookUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  subjectMatter?: XOR<string, StringFieldUpdateOperationsInput>
  timeOfPeriod?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  AnnProfSubjDistro?: AnnProfSubjDistroUpdateOneRequiredWithoutLogbookInput
}

export type LogbookUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  subjectMatter?: XOR<string, StringFieldUpdateOperationsInput>
  timeOfPeriod?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type ScoreCreateInput = {
  id?: string
  marks: string
  createdAt?: Date | string
  updatedAt?: Date | string
  seq?: SequenceCreateManyWithoutScoreInput
  annStudentClass?: AnnStudentClassroomCreateManyWithoutScoreInput
  annProfSubj?: AnnProfSubjDistroCreateManyWithoutScoreInput
}

export type ScoreUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  marks?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  seq?: SequenceUpdateManyWithoutScoreInput
  annStudentClass?: AnnStudentClassroomUpdateManyWithoutScoreInput
  annProfSubj?: AnnProfSubjDistroUpdateManyWithoutScoreInput
}

export type ScoreUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  marks?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type AnnProfSubjDistroCreateInput = {
  id?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  AnnProfDept: AnnProfDeptCreateOneWithoutAnnProfSubjInput
  Subject: SubjectCreateOneWithoutAnnProfSubjInput
  Classroom: ClassroomCreateOneWithoutAnnProfSubjInput
  Score: ScoreCreateOneWithoutAnnProfSubjInput
  Logbook?: LogbookCreateManyWithoutAnnProfSubjDistroInput
}

export type AnnProfSubjDistroUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  AnnProfDept?: AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput
  Subject?: SubjectUpdateOneRequiredWithoutAnnProfSubjInput
  Classroom?: ClassroomUpdateOneRequiredWithoutAnnProfSubjInput
  Score?: ScoreUpdateOneRequiredWithoutAnnProfSubjInput
  Logbook?: LogbookUpdateManyWithoutAnnProfSubjDistroInput
}

export type AnnProfSubjDistroUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type SubjectCreateInput = {
  id?: string
  subjectName: string
  subjectCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annProfSubj?: AnnProfSubjDistroCreateManyWithoutSubjectInput
  Department: DepartmentCreateOneWithoutSubjectInput
}

export type SubjectUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  subjectName?: XOR<string, StringFieldUpdateOperationsInput>
  subjectCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annProfSubj?: AnnProfSubjDistroUpdateManyWithoutSubjectInput
  Department?: DepartmentUpdateOneRequiredWithoutSubjectInput
}

export type SubjectUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  subjectName?: XOR<string, StringFieldUpdateOperationsInput>
  subjectCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type ClassroomCreateInput = {
  id?: string
  className: string
  classCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annProfSubj?: AnnProfSubjDistroCreateManyWithoutClassroomInput
  annStudentClassroom?: AnnStudentClassroomCreateManyWithoutClassroomInput
}

export type ClassroomUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  className?: XOR<string, StringFieldUpdateOperationsInput>
  classCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annProfSubj?: AnnProfSubjDistroUpdateManyWithoutClassroomInput
  annStudentClassroom?: AnnStudentClassroomUpdateManyWithoutClassroomInput
}

export type ClassroomUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  className?: XOR<string, StringFieldUpdateOperationsInput>
  classCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type StudentCreateInput = {
  id?: string
  student1stName: string
  student2ndName: string
  student3rdName: string
  sex: string
  studentMatricule: string
  image: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annStudentClassroom?: AnnStudentClassroomCreateManyWithoutStudentInput
}

export type StudentUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  student1stName?: XOR<string, StringFieldUpdateOperationsInput>
  student2ndName?: XOR<string, StringFieldUpdateOperationsInput>
  student3rdName?: XOR<string, StringFieldUpdateOperationsInput>
  sex?: XOR<string, StringFieldUpdateOperationsInput>
  studentMatricule?: XOR<string, StringFieldUpdateOperationsInput>
  image?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annStudentClassroom?: AnnStudentClassroomUpdateManyWithoutStudentInput
}

export type StudentUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  student1stName?: XOR<string, StringFieldUpdateOperationsInput>
  student2ndName?: XOR<string, StringFieldUpdateOperationsInput>
  student3rdName?: XOR<string, StringFieldUpdateOperationsInput>
  sex?: XOR<string, StringFieldUpdateOperationsInput>
  studentMatricule?: XOR<string, StringFieldUpdateOperationsInput>
  image?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type AnnStudentClassroomCreateInput = {
  id?: string
  student1stName: string
  student2ndName: string
  student3rdName: string
  sex: string
  studentMatricule: string
  image: string
  createdAt?: Date | string
  updatedAt?: Date | string
  SchoolYear: SchoolYearCreateOneWithoutAnnStudentClassroomInput
  Classroom: ClassroomCreateOneWithoutAnnStudentClassroomInput
  Student: StudentCreateOneWithoutAnnStudentClassroomInput
  Score: ScoreCreateOneWithoutAnnStudentClassInput
}

export type AnnStudentClassroomUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  student1stName?: XOR<string, StringFieldUpdateOperationsInput>
  student2ndName?: XOR<string, StringFieldUpdateOperationsInput>
  student3rdName?: XOR<string, StringFieldUpdateOperationsInput>
  sex?: XOR<string, StringFieldUpdateOperationsInput>
  studentMatricule?: XOR<string, StringFieldUpdateOperationsInput>
  image?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  SchoolYear?: SchoolYearUpdateOneRequiredWithoutAnnStudentClassroomInput
  Classroom?: ClassroomUpdateOneRequiredWithoutAnnStudentClassroomInput
  Student?: StudentUpdateOneRequiredWithoutAnnStudentClassroomInput
  Score?: ScoreUpdateOneRequiredWithoutAnnStudentClassInput
}

export type AnnStudentClassroomUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  student1stName?: XOR<string, StringFieldUpdateOperationsInput>
  student2ndName?: XOR<string, StringFieldUpdateOperationsInput>
  student3rdName?: XOR<string, StringFieldUpdateOperationsInput>
  sex?: XOR<string, StringFieldUpdateOperationsInput>
  studentMatricule?: XOR<string, StringFieldUpdateOperationsInput>
  image?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type ProfCreateInput = {
  id?: string
  prof1stName: string
  prof2ndName: string
  prof3rdName: string
  profMatricule: string
  specialty: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annProfDept?: AnnProfDeptCreateManyWithoutProfInput
}

export type ProfUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  prof1stName?: XOR<string, StringFieldUpdateOperationsInput>
  prof2ndName?: XOR<string, StringFieldUpdateOperationsInput>
  prof3rdName?: XOR<string, StringFieldUpdateOperationsInput>
  profMatricule?: XOR<string, StringFieldUpdateOperationsInput>
  specialty?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annProfDept?: AnnProfDeptUpdateManyWithoutProfInput
}

export type ProfUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  prof1stName?: XOR<string, StringFieldUpdateOperationsInput>
  prof2ndName?: XOR<string, StringFieldUpdateOperationsInput>
  prof3rdName?: XOR<string, StringFieldUpdateOperationsInput>
  profMatricule?: XOR<string, StringFieldUpdateOperationsInput>
  specialty?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type StringFilter = {
  equals?: string
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: XOR<string, NestedStringFilter>
}

export type DateTimeFilter = {
  equals?: Date | string
  in?: Enumerable<Date> | Enumerable<string>
  notIn?: Enumerable<Date> | Enumerable<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: XOR<Date | string, NestedDateTimeFilter>
}

export type DivisionListRelationFilter = {
  every?: DivisionWhereInput
  some?: DivisionWhereInput
  none?: DivisionWhereInput
}

export type SubdivisionListRelationFilter = {
  every?: SubdivisionWhereInput
  some?: SubdivisionWhereInput
  none?: SubdivisionWhereInput
}

export type RegionRelationFilter = {
  is?: RegionWhereInput
  isNot?: RegionWhereInput
}

export type TownListRelationFilter = {
  every?: TownWhereInput
  some?: TownWhereInput
  none?: TownWhereInput
}

export type DivisionRelationFilter = {
  is?: DivisionWhereInput
  isNot?: DivisionWhereInput
}

export type SchoolListRelationFilter = {
  every?: SchoolWhereInput
  some?: SchoolWhereInput
  none?: SchoolWhereInput
}

export type SubdivisionRelationFilter = {
  is?: SubdivisionWhereInput
  isNot?: SubdivisionWhereInput
}

export type SectionListRelationFilter = {
  every?: SectionWhereInput
  some?: SectionWhereInput
  none?: SectionWhereInput
}

export type TownRelationFilter = {
  is?: TownWhereInput
  isNot?: TownWhereInput
}

export type DepartmentListRelationFilter = {
  every?: DepartmentWhereInput
  some?: DepartmentWhereInput
  none?: DepartmentWhereInput
}

export type SchoolRelationFilter = {
  is?: SchoolWhereInput
  isNot?: SchoolWhereInput
}

export type AnnProfDeptListRelationFilter = {
  every?: AnnProfDeptWhereInput
  some?: AnnProfDeptWhereInput
  none?: AnnProfDeptWhereInput
}

export type SubjectListRelationFilter = {
  every?: SubjectWhereInput
  some?: SubjectWhereInput
  none?: SubjectWhereInput
}

export type SectionRelationFilter = {
  is?: SectionWhereInput
  isNot?: SectionWhereInput
}

export type ScoreRelationFilter = {
  is?: ScoreWhereInput
  isNot?: ScoreWhereInput
}

export type AnnStudentClassroomListRelationFilter = {
  every?: AnnStudentClassroomWhereInput
  some?: AnnStudentClassroomWhereInput
  none?: AnnStudentClassroomWhereInput
}

export type AnnProfSubjDistroListRelationFilter = {
  every?: AnnProfSubjDistroWhereInput
  some?: AnnProfSubjDistroWhereInput
  none?: AnnProfSubjDistroWhereInput
}

export type DepartmentRelationFilter = {
  is?: DepartmentWhereInput
  isNot?: DepartmentWhereInput
}

export type SchoolYearRelationFilter = {
  is?: SchoolYearWhereInput
  isNot?: SchoolYearWhereInput
}

export type ProfRelationFilter = {
  is?: ProfWhereInput
  isNot?: ProfWhereInput
}

export type AnnProfSubjDistroRelationFilter = {
  is?: AnnProfSubjDistroWhereInput
  isNot?: AnnProfSubjDistroWhereInput
}

export type SequenceListRelationFilter = {
  every?: SequenceWhereInput
  some?: SequenceWhereInput
  none?: SequenceWhereInput
}

export type AnnProfDeptRelationFilter = {
  is?: AnnProfDeptWhereInput
  isNot?: AnnProfDeptWhereInput
}

export type SubjectRelationFilter = {
  is?: SubjectWhereInput
  isNot?: SubjectWhereInput
}

export type ClassroomRelationFilter = {
  is?: ClassroomWhereInput
  isNot?: ClassroomWhereInput
}

export type LogbookListRelationFilter = {
  every?: LogbookWhereInput
  some?: LogbookWhereInput
  none?: LogbookWhereInput
}

export type StudentRelationFilter = {
  is?: StudentWhereInput
  isNot?: StudentWhereInput
}

export type StringFieldUpdateOperationsInput = {
  set?: string
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: Date | string
}

export type DivisionCreateManyWithoutRegionInput = {
  create?: XOR<DivisionCreateWithoutRegionInput, Enumerable<DivisionCreateWithoutRegionInput>>
  connect?: XOR<DivisionWhereUniqueInput, Enumerable<DivisionWhereUniqueInput>>
  connectOrCreate?: XOR<DivisionCreateOrConnectWithoutRegionInput, Enumerable<DivisionCreateOrConnectWithoutRegionInput>>
}

export type DivisionUpdateManyWithoutRegionInput = {
  create?: XOR<DivisionCreateWithoutRegionInput, Enumerable<DivisionCreateWithoutRegionInput>>
  connect?: XOR<DivisionWhereUniqueInput, Enumerable<DivisionWhereUniqueInput>>
  set?: XOR<DivisionWhereUniqueInput, Enumerable<DivisionWhereUniqueInput>>
  disconnect?: XOR<DivisionWhereUniqueInput, Enumerable<DivisionWhereUniqueInput>>
  delete?: XOR<DivisionWhereUniqueInput, Enumerable<DivisionWhereUniqueInput>>
  update?: XOR<DivisionUpdateWithWhereUniqueWithoutRegionInput, Enumerable<DivisionUpdateWithWhereUniqueWithoutRegionInput>>
  updateMany?: XOR<DivisionUpdateManyWithWhereWithoutRegionInput, Enumerable<DivisionUpdateManyWithWhereWithoutRegionInput>>
  deleteMany?: XOR<DivisionScalarWhereInput, Enumerable<DivisionScalarWhereInput>>
  upsert?: XOR<DivisionUpsertWithWhereUniqueWithoutRegionInput, Enumerable<DivisionUpsertWithWhereUniqueWithoutRegionInput>>
  connectOrCreate?: XOR<DivisionCreateOrConnectWithoutRegionInput, Enumerable<DivisionCreateOrConnectWithoutRegionInput>>
}

export type SubdivisionCreateManyWithoutDivisionInput = {
  create?: XOR<SubdivisionCreateWithoutDivisionInput, Enumerable<SubdivisionCreateWithoutDivisionInput>>
  connect?: XOR<SubdivisionWhereUniqueInput, Enumerable<SubdivisionWhereUniqueInput>>
  connectOrCreate?: XOR<SubdivisionCreateOrConnectWithoutDivisionInput, Enumerable<SubdivisionCreateOrConnectWithoutDivisionInput>>
}

export type RegionCreateOneWithoutDivisionInput = {
  create?: RegionCreateWithoutDivisionInput
  connect?: RegionWhereUniqueInput
  connectOrCreate?: RegionCreateOrConnectWithoutdivisionInput
}

export type SubdivisionUpdateManyWithoutDivisionInput = {
  create?: XOR<SubdivisionCreateWithoutDivisionInput, Enumerable<SubdivisionCreateWithoutDivisionInput>>
  connect?: XOR<SubdivisionWhereUniqueInput, Enumerable<SubdivisionWhereUniqueInput>>
  set?: XOR<SubdivisionWhereUniqueInput, Enumerable<SubdivisionWhereUniqueInput>>
  disconnect?: XOR<SubdivisionWhereUniqueInput, Enumerable<SubdivisionWhereUniqueInput>>
  delete?: XOR<SubdivisionWhereUniqueInput, Enumerable<SubdivisionWhereUniqueInput>>
  update?: XOR<SubdivisionUpdateWithWhereUniqueWithoutDivisionInput, Enumerable<SubdivisionUpdateWithWhereUniqueWithoutDivisionInput>>
  updateMany?: XOR<SubdivisionUpdateManyWithWhereWithoutDivisionInput, Enumerable<SubdivisionUpdateManyWithWhereWithoutDivisionInput>>
  deleteMany?: XOR<SubdivisionScalarWhereInput, Enumerable<SubdivisionScalarWhereInput>>
  upsert?: XOR<SubdivisionUpsertWithWhereUniqueWithoutDivisionInput, Enumerable<SubdivisionUpsertWithWhereUniqueWithoutDivisionInput>>
  connectOrCreate?: XOR<SubdivisionCreateOrConnectWithoutDivisionInput, Enumerable<SubdivisionCreateOrConnectWithoutDivisionInput>>
}

export type RegionUpdateOneRequiredWithoutDivisionInput = {
  create?: RegionCreateWithoutDivisionInput
  connect?: RegionWhereUniqueInput
  update?: RegionUpdateWithoutDivisionInput
  upsert?: RegionUpsertWithoutDivisionInput
  connectOrCreate?: RegionCreateOrConnectWithoutdivisionInput
}

export type TownCreateManyWithoutSubdivisionInput = {
  create?: XOR<TownCreateWithoutSubdivisionInput, Enumerable<TownCreateWithoutSubdivisionInput>>
  connect?: XOR<TownWhereUniqueInput, Enumerable<TownWhereUniqueInput>>
  connectOrCreate?: XOR<TownCreateOrConnectWithoutSubdivisionInput, Enumerable<TownCreateOrConnectWithoutSubdivisionInput>>
}

export type DivisionCreateOneWithoutSubdivInput = {
  create?: DivisionCreateWithoutSubdivInput
  connect?: DivisionWhereUniqueInput
  connectOrCreate?: DivisionCreateOrConnectWithoutsubdivInput
}

export type TownUpdateManyWithoutSubdivisionInput = {
  create?: XOR<TownCreateWithoutSubdivisionInput, Enumerable<TownCreateWithoutSubdivisionInput>>
  connect?: XOR<TownWhereUniqueInput, Enumerable<TownWhereUniqueInput>>
  set?: XOR<TownWhereUniqueInput, Enumerable<TownWhereUniqueInput>>
  disconnect?: XOR<TownWhereUniqueInput, Enumerable<TownWhereUniqueInput>>
  delete?: XOR<TownWhereUniqueInput, Enumerable<TownWhereUniqueInput>>
  update?: XOR<TownUpdateWithWhereUniqueWithoutSubdivisionInput, Enumerable<TownUpdateWithWhereUniqueWithoutSubdivisionInput>>
  updateMany?: XOR<TownUpdateManyWithWhereWithoutSubdivisionInput, Enumerable<TownUpdateManyWithWhereWithoutSubdivisionInput>>
  deleteMany?: XOR<TownScalarWhereInput, Enumerable<TownScalarWhereInput>>
  upsert?: XOR<TownUpsertWithWhereUniqueWithoutSubdivisionInput, Enumerable<TownUpsertWithWhereUniqueWithoutSubdivisionInput>>
  connectOrCreate?: XOR<TownCreateOrConnectWithoutSubdivisionInput, Enumerable<TownCreateOrConnectWithoutSubdivisionInput>>
}

export type DivisionUpdateOneRequiredWithoutSubdivInput = {
  create?: DivisionCreateWithoutSubdivInput
  connect?: DivisionWhereUniqueInput
  update?: DivisionUpdateWithoutSubdivInput
  upsert?: DivisionUpsertWithoutSubdivInput
  connectOrCreate?: DivisionCreateOrConnectWithoutsubdivInput
}

export type SchoolCreateManyWithoutTownInput = {
  create?: XOR<SchoolCreateWithoutTownInput, Enumerable<SchoolCreateWithoutTownInput>>
  connect?: XOR<SchoolWhereUniqueInput, Enumerable<SchoolWhereUniqueInput>>
  connectOrCreate?: XOR<SchoolCreateOrConnectWithoutTownInput, Enumerable<SchoolCreateOrConnectWithoutTownInput>>
}

export type SubdivisionCreateOneWithoutTownInput = {
  create?: SubdivisionCreateWithoutTownInput
  connect?: SubdivisionWhereUniqueInput
  connectOrCreate?: SubdivisionCreateOrConnectWithouttownInput
}

export type SchoolUpdateManyWithoutTownInput = {
  create?: XOR<SchoolCreateWithoutTownInput, Enumerable<SchoolCreateWithoutTownInput>>
  connect?: XOR<SchoolWhereUniqueInput, Enumerable<SchoolWhereUniqueInput>>
  set?: XOR<SchoolWhereUniqueInput, Enumerable<SchoolWhereUniqueInput>>
  disconnect?: XOR<SchoolWhereUniqueInput, Enumerable<SchoolWhereUniqueInput>>
  delete?: XOR<SchoolWhereUniqueInput, Enumerable<SchoolWhereUniqueInput>>
  update?: XOR<SchoolUpdateWithWhereUniqueWithoutTownInput, Enumerable<SchoolUpdateWithWhereUniqueWithoutTownInput>>
  updateMany?: XOR<SchoolUpdateManyWithWhereWithoutTownInput, Enumerable<SchoolUpdateManyWithWhereWithoutTownInput>>
  deleteMany?: XOR<SchoolScalarWhereInput, Enumerable<SchoolScalarWhereInput>>
  upsert?: XOR<SchoolUpsertWithWhereUniqueWithoutTownInput, Enumerable<SchoolUpsertWithWhereUniqueWithoutTownInput>>
  connectOrCreate?: XOR<SchoolCreateOrConnectWithoutTownInput, Enumerable<SchoolCreateOrConnectWithoutTownInput>>
}

export type SubdivisionUpdateOneRequiredWithoutTownInput = {
  create?: SubdivisionCreateWithoutTownInput
  connect?: SubdivisionWhereUniqueInput
  update?: SubdivisionUpdateWithoutTownInput
  upsert?: SubdivisionUpsertWithoutTownInput
  connectOrCreate?: SubdivisionCreateOrConnectWithouttownInput
}

export type SectionCreateManyWithoutSchoolInput = {
  create?: XOR<SectionCreateWithoutSchoolInput, Enumerable<SectionCreateWithoutSchoolInput>>
  connect?: XOR<SectionWhereUniqueInput, Enumerable<SectionWhereUniqueInput>>
  connectOrCreate?: XOR<SectionCreateOrConnectWithoutSchoolInput, Enumerable<SectionCreateOrConnectWithoutSchoolInput>>
}

export type TownCreateOneWithoutSchoolInput = {
  create?: TownCreateWithoutSchoolInput
  connect?: TownWhereUniqueInput
  connectOrCreate?: TownCreateOrConnectWithoutschoolInput
}

export type SectionUpdateManyWithoutSchoolInput = {
  create?: XOR<SectionCreateWithoutSchoolInput, Enumerable<SectionCreateWithoutSchoolInput>>
  connect?: XOR<SectionWhereUniqueInput, Enumerable<SectionWhereUniqueInput>>
  set?: XOR<SectionWhereUniqueInput, Enumerable<SectionWhereUniqueInput>>
  disconnect?: XOR<SectionWhereUniqueInput, Enumerable<SectionWhereUniqueInput>>
  delete?: XOR<SectionWhereUniqueInput, Enumerable<SectionWhereUniqueInput>>
  update?: XOR<SectionUpdateWithWhereUniqueWithoutSchoolInput, Enumerable<SectionUpdateWithWhereUniqueWithoutSchoolInput>>
  updateMany?: XOR<SectionUpdateManyWithWhereWithoutSchoolInput, Enumerable<SectionUpdateManyWithWhereWithoutSchoolInput>>
  deleteMany?: XOR<SectionScalarWhereInput, Enumerable<SectionScalarWhereInput>>
  upsert?: XOR<SectionUpsertWithWhereUniqueWithoutSchoolInput, Enumerable<SectionUpsertWithWhereUniqueWithoutSchoolInput>>
  connectOrCreate?: XOR<SectionCreateOrConnectWithoutSchoolInput, Enumerable<SectionCreateOrConnectWithoutSchoolInput>>
}

export type TownUpdateOneRequiredWithoutSchoolInput = {
  create?: TownCreateWithoutSchoolInput
  connect?: TownWhereUniqueInput
  update?: TownUpdateWithoutSchoolInput
  upsert?: TownUpsertWithoutSchoolInput
  connectOrCreate?: TownCreateOrConnectWithoutschoolInput
}

export type DepartmentCreateManyWithoutSectionInput = {
  create?: XOR<DepartmentCreateWithoutSectionInput, Enumerable<DepartmentCreateWithoutSectionInput>>
  connect?: XOR<DepartmentWhereUniqueInput, Enumerable<DepartmentWhereUniqueInput>>
  connectOrCreate?: XOR<DepartmentCreateOrConnectWithoutSectionInput, Enumerable<DepartmentCreateOrConnectWithoutSectionInput>>
}

export type SchoolCreateOneWithoutSectionInput = {
  create?: SchoolCreateWithoutSectionInput
  connect?: SchoolWhereUniqueInput
  connectOrCreate?: SchoolCreateOrConnectWithoutsectionInput
}

export type DepartmentUpdateManyWithoutSectionInput = {
  create?: XOR<DepartmentCreateWithoutSectionInput, Enumerable<DepartmentCreateWithoutSectionInput>>
  connect?: XOR<DepartmentWhereUniqueInput, Enumerable<DepartmentWhereUniqueInput>>
  set?: XOR<DepartmentWhereUniqueInput, Enumerable<DepartmentWhereUniqueInput>>
  disconnect?: XOR<DepartmentWhereUniqueInput, Enumerable<DepartmentWhereUniqueInput>>
  delete?: XOR<DepartmentWhereUniqueInput, Enumerable<DepartmentWhereUniqueInput>>
  update?: XOR<DepartmentUpdateWithWhereUniqueWithoutSectionInput, Enumerable<DepartmentUpdateWithWhereUniqueWithoutSectionInput>>
  updateMany?: XOR<DepartmentUpdateManyWithWhereWithoutSectionInput, Enumerable<DepartmentUpdateManyWithWhereWithoutSectionInput>>
  deleteMany?: XOR<DepartmentScalarWhereInput, Enumerable<DepartmentScalarWhereInput>>
  upsert?: XOR<DepartmentUpsertWithWhereUniqueWithoutSectionInput, Enumerable<DepartmentUpsertWithWhereUniqueWithoutSectionInput>>
  connectOrCreate?: XOR<DepartmentCreateOrConnectWithoutSectionInput, Enumerable<DepartmentCreateOrConnectWithoutSectionInput>>
}

export type SchoolUpdateOneRequiredWithoutSectionInput = {
  create?: SchoolCreateWithoutSectionInput
  connect?: SchoolWhereUniqueInput
  update?: SchoolUpdateWithoutSectionInput
  upsert?: SchoolUpsertWithoutSectionInput
  connectOrCreate?: SchoolCreateOrConnectWithoutsectionInput
}

export type AnnProfDeptCreateManyWithoutDepartmentInput = {
  create?: XOR<AnnProfDeptCreateWithoutDepartmentInput, Enumerable<AnnProfDeptCreateWithoutDepartmentInput>>
  connect?: XOR<AnnProfDeptWhereUniqueInput, Enumerable<AnnProfDeptWhereUniqueInput>>
  connectOrCreate?: XOR<AnnProfDeptCreateOrConnectWithoutDepartmentInput, Enumerable<AnnProfDeptCreateOrConnectWithoutDepartmentInput>>
}

export type SubjectCreateManyWithoutDepartmentInput = {
  create?: XOR<SubjectCreateWithoutDepartmentInput, Enumerable<SubjectCreateWithoutDepartmentInput>>
  connect?: XOR<SubjectWhereUniqueInput, Enumerable<SubjectWhereUniqueInput>>
  connectOrCreate?: XOR<SubjectCreateOrConnectWithoutDepartmentInput, Enumerable<SubjectCreateOrConnectWithoutDepartmentInput>>
}

export type SectionCreateOneWithoutDepartmentInput = {
  create?: SectionCreateWithoutDepartmentInput
  connect?: SectionWhereUniqueInput
  connectOrCreate?: SectionCreateOrConnectWithoutdepartmentInput
}

export type AnnProfDeptUpdateManyWithoutDepartmentInput = {
  create?: XOR<AnnProfDeptCreateWithoutDepartmentInput, Enumerable<AnnProfDeptCreateWithoutDepartmentInput>>
  connect?: XOR<AnnProfDeptWhereUniqueInput, Enumerable<AnnProfDeptWhereUniqueInput>>
  set?: XOR<AnnProfDeptWhereUniqueInput, Enumerable<AnnProfDeptWhereUniqueInput>>
  disconnect?: XOR<AnnProfDeptWhereUniqueInput, Enumerable<AnnProfDeptWhereUniqueInput>>
  delete?: XOR<AnnProfDeptWhereUniqueInput, Enumerable<AnnProfDeptWhereUniqueInput>>
  update?: XOR<AnnProfDeptUpdateWithWhereUniqueWithoutDepartmentInput, Enumerable<AnnProfDeptUpdateWithWhereUniqueWithoutDepartmentInput>>
  updateMany?: XOR<AnnProfDeptUpdateManyWithWhereWithoutDepartmentInput, Enumerable<AnnProfDeptUpdateManyWithWhereWithoutDepartmentInput>>
  deleteMany?: XOR<AnnProfDeptScalarWhereInput, Enumerable<AnnProfDeptScalarWhereInput>>
  upsert?: XOR<AnnProfDeptUpsertWithWhereUniqueWithoutDepartmentInput, Enumerable<AnnProfDeptUpsertWithWhereUniqueWithoutDepartmentInput>>
  connectOrCreate?: XOR<AnnProfDeptCreateOrConnectWithoutDepartmentInput, Enumerable<AnnProfDeptCreateOrConnectWithoutDepartmentInput>>
}

export type SubjectUpdateManyWithoutDepartmentInput = {
  create?: XOR<SubjectCreateWithoutDepartmentInput, Enumerable<SubjectCreateWithoutDepartmentInput>>
  connect?: XOR<SubjectWhereUniqueInput, Enumerable<SubjectWhereUniqueInput>>
  set?: XOR<SubjectWhereUniqueInput, Enumerable<SubjectWhereUniqueInput>>
  disconnect?: XOR<SubjectWhereUniqueInput, Enumerable<SubjectWhereUniqueInput>>
  delete?: XOR<SubjectWhereUniqueInput, Enumerable<SubjectWhereUniqueInput>>
  update?: XOR<SubjectUpdateWithWhereUniqueWithoutDepartmentInput, Enumerable<SubjectUpdateWithWhereUniqueWithoutDepartmentInput>>
  updateMany?: XOR<SubjectUpdateManyWithWhereWithoutDepartmentInput, Enumerable<SubjectUpdateManyWithWhereWithoutDepartmentInput>>
  deleteMany?: XOR<SubjectScalarWhereInput, Enumerable<SubjectScalarWhereInput>>
  upsert?: XOR<SubjectUpsertWithWhereUniqueWithoutDepartmentInput, Enumerable<SubjectUpsertWithWhereUniqueWithoutDepartmentInput>>
  connectOrCreate?: XOR<SubjectCreateOrConnectWithoutDepartmentInput, Enumerable<SubjectCreateOrConnectWithoutDepartmentInput>>
}

export type SectionUpdateOneRequiredWithoutDepartmentInput = {
  create?: SectionCreateWithoutDepartmentInput
  connect?: SectionWhereUniqueInput
  update?: SectionUpdateWithoutDepartmentInput
  upsert?: SectionUpsertWithoutDepartmentInput
  connectOrCreate?: SectionCreateOrConnectWithoutdepartmentInput
}

export type ScoreCreateOneWithoutSeqInput = {
  create?: ScoreCreateWithoutSeqInput
  connect?: ScoreWhereUniqueInput
  connectOrCreate?: ScoreCreateOrConnectWithoutseqInput
}

export type ScoreUpdateOneRequiredWithoutSeqInput = {
  create?: ScoreCreateWithoutSeqInput
  connect?: ScoreWhereUniqueInput
  update?: ScoreUpdateWithoutSeqInput
  upsert?: ScoreUpsertWithoutSeqInput
  connectOrCreate?: ScoreCreateOrConnectWithoutseqInput
}

export type AnnStudentClassroomCreateManyWithoutSchoolYearInput = {
  create?: XOR<AnnStudentClassroomCreateWithoutSchoolYearInput, Enumerable<AnnStudentClassroomCreateWithoutSchoolYearInput>>
  connect?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  connectOrCreate?: XOR<AnnStudentClassroomCreateOrConnectWithoutSchoolYearInput, Enumerable<AnnStudentClassroomCreateOrConnectWithoutSchoolYearInput>>
}

export type AnnProfDeptCreateManyWithoutSchoolYearInput = {
  create?: XOR<AnnProfDeptCreateWithoutSchoolYearInput, Enumerable<AnnProfDeptCreateWithoutSchoolYearInput>>
  connect?: XOR<AnnProfDeptWhereUniqueInput, Enumerable<AnnProfDeptWhereUniqueInput>>
  connectOrCreate?: XOR<AnnProfDeptCreateOrConnectWithoutSchoolYearInput, Enumerable<AnnProfDeptCreateOrConnectWithoutSchoolYearInput>>
}

export type AnnStudentClassroomUpdateManyWithoutSchoolYearInput = {
  create?: XOR<AnnStudentClassroomCreateWithoutSchoolYearInput, Enumerable<AnnStudentClassroomCreateWithoutSchoolYearInput>>
  connect?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  set?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  disconnect?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  delete?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  update?: XOR<AnnStudentClassroomUpdateWithWhereUniqueWithoutSchoolYearInput, Enumerable<AnnStudentClassroomUpdateWithWhereUniqueWithoutSchoolYearInput>>
  updateMany?: XOR<AnnStudentClassroomUpdateManyWithWhereWithoutSchoolYearInput, Enumerable<AnnStudentClassroomUpdateManyWithWhereWithoutSchoolYearInput>>
  deleteMany?: XOR<AnnStudentClassroomScalarWhereInput, Enumerable<AnnStudentClassroomScalarWhereInput>>
  upsert?: XOR<AnnStudentClassroomUpsertWithWhereUniqueWithoutSchoolYearInput, Enumerable<AnnStudentClassroomUpsertWithWhereUniqueWithoutSchoolYearInput>>
  connectOrCreate?: XOR<AnnStudentClassroomCreateOrConnectWithoutSchoolYearInput, Enumerable<AnnStudentClassroomCreateOrConnectWithoutSchoolYearInput>>
}

export type AnnProfDeptUpdateManyWithoutSchoolYearInput = {
  create?: XOR<AnnProfDeptCreateWithoutSchoolYearInput, Enumerable<AnnProfDeptCreateWithoutSchoolYearInput>>
  connect?: XOR<AnnProfDeptWhereUniqueInput, Enumerable<AnnProfDeptWhereUniqueInput>>
  set?: XOR<AnnProfDeptWhereUniqueInput, Enumerable<AnnProfDeptWhereUniqueInput>>
  disconnect?: XOR<AnnProfDeptWhereUniqueInput, Enumerable<AnnProfDeptWhereUniqueInput>>
  delete?: XOR<AnnProfDeptWhereUniqueInput, Enumerable<AnnProfDeptWhereUniqueInput>>
  update?: XOR<AnnProfDeptUpdateWithWhereUniqueWithoutSchoolYearInput, Enumerable<AnnProfDeptUpdateWithWhereUniqueWithoutSchoolYearInput>>
  updateMany?: XOR<AnnProfDeptUpdateManyWithWhereWithoutSchoolYearInput, Enumerable<AnnProfDeptUpdateManyWithWhereWithoutSchoolYearInput>>
  deleteMany?: XOR<AnnProfDeptScalarWhereInput, Enumerable<AnnProfDeptScalarWhereInput>>
  upsert?: XOR<AnnProfDeptUpsertWithWhereUniqueWithoutSchoolYearInput, Enumerable<AnnProfDeptUpsertWithWhereUniqueWithoutSchoolYearInput>>
  connectOrCreate?: XOR<AnnProfDeptCreateOrConnectWithoutSchoolYearInput, Enumerable<AnnProfDeptCreateOrConnectWithoutSchoolYearInput>>
}

export type AnnProfSubjDistroCreateManyWithoutAnnProfDeptInput = {
  create?: XOR<AnnProfSubjDistroCreateWithoutAnnProfDeptInput, Enumerable<AnnProfSubjDistroCreateWithoutAnnProfDeptInput>>
  connect?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  connectOrCreate?: XOR<AnnProfSubjDistroCreateOrConnectWithoutAnnProfDeptInput, Enumerable<AnnProfSubjDistroCreateOrConnectWithoutAnnProfDeptInput>>
}

export type DepartmentCreateOneWithoutAnnProfDeptInput = {
  create?: DepartmentCreateWithoutAnnProfDeptInput
  connect?: DepartmentWhereUniqueInput
  connectOrCreate?: DepartmentCreateOrConnectWithoutannProfDeptInput
}

export type SchoolYearCreateOneWithoutAnnProfDeptInput = {
  create?: SchoolYearCreateWithoutAnnProfDeptInput
  connect?: SchoolYearWhereUniqueInput
  connectOrCreate?: SchoolYearCreateOrConnectWithoutannProfDeptInput
}

export type ProfCreateOneWithoutAnnProfDeptInput = {
  create?: ProfCreateWithoutAnnProfDeptInput
  connect?: ProfWhereUniqueInput
  connectOrCreate?: ProfCreateOrConnectWithoutannProfDeptInput
}

export type AnnProfSubjDistroUpdateManyWithoutAnnProfDeptInput = {
  create?: XOR<AnnProfSubjDistroCreateWithoutAnnProfDeptInput, Enumerable<AnnProfSubjDistroCreateWithoutAnnProfDeptInput>>
  connect?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  set?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  disconnect?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  delete?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  update?: XOR<AnnProfSubjDistroUpdateWithWhereUniqueWithoutAnnProfDeptInput, Enumerable<AnnProfSubjDistroUpdateWithWhereUniqueWithoutAnnProfDeptInput>>
  updateMany?: XOR<AnnProfSubjDistroUpdateManyWithWhereWithoutAnnProfDeptInput, Enumerable<AnnProfSubjDistroUpdateManyWithWhereWithoutAnnProfDeptInput>>
  deleteMany?: XOR<AnnProfSubjDistroScalarWhereInput, Enumerable<AnnProfSubjDistroScalarWhereInput>>
  upsert?: XOR<AnnProfSubjDistroUpsertWithWhereUniqueWithoutAnnProfDeptInput, Enumerable<AnnProfSubjDistroUpsertWithWhereUniqueWithoutAnnProfDeptInput>>
  connectOrCreate?: XOR<AnnProfSubjDistroCreateOrConnectWithoutAnnProfDeptInput, Enumerable<AnnProfSubjDistroCreateOrConnectWithoutAnnProfDeptInput>>
}

export type DepartmentUpdateOneRequiredWithoutAnnProfDeptInput = {
  create?: DepartmentCreateWithoutAnnProfDeptInput
  connect?: DepartmentWhereUniqueInput
  update?: DepartmentUpdateWithoutAnnProfDeptInput
  upsert?: DepartmentUpsertWithoutAnnProfDeptInput
  connectOrCreate?: DepartmentCreateOrConnectWithoutannProfDeptInput
}

export type SchoolYearUpdateOneRequiredWithoutAnnProfDeptInput = {
  create?: SchoolYearCreateWithoutAnnProfDeptInput
  connect?: SchoolYearWhereUniqueInput
  update?: SchoolYearUpdateWithoutAnnProfDeptInput
  upsert?: SchoolYearUpsertWithoutAnnProfDeptInput
  connectOrCreate?: SchoolYearCreateOrConnectWithoutannProfDeptInput
}

export type ProfUpdateOneRequiredWithoutAnnProfDeptInput = {
  create?: ProfCreateWithoutAnnProfDeptInput
  connect?: ProfWhereUniqueInput
  update?: ProfUpdateWithoutAnnProfDeptInput
  upsert?: ProfUpsertWithoutAnnProfDeptInput
  connectOrCreate?: ProfCreateOrConnectWithoutannProfDeptInput
}

export type AnnProfSubjDistroCreateOneWithoutLogbookInput = {
  create?: AnnProfSubjDistroCreateWithoutLogbookInput
  connect?: AnnProfSubjDistroWhereUniqueInput
  connectOrCreate?: AnnProfSubjDistroCreateOrConnectWithoutLogbookInput
}

export type AnnProfSubjDistroUpdateOneRequiredWithoutLogbookInput = {
  create?: AnnProfSubjDistroCreateWithoutLogbookInput
  connect?: AnnProfSubjDistroWhereUniqueInput
  update?: AnnProfSubjDistroUpdateWithoutLogbookInput
  upsert?: AnnProfSubjDistroUpsertWithoutLogbookInput
  connectOrCreate?: AnnProfSubjDistroCreateOrConnectWithoutLogbookInput
}

export type SequenceCreateManyWithoutScoreInput = {
  create?: XOR<SequenceCreateWithoutScoreInput, Enumerable<SequenceCreateWithoutScoreInput>>
  connect?: XOR<SequenceWhereUniqueInput, Enumerable<SequenceWhereUniqueInput>>
  connectOrCreate?: XOR<SequenceCreateOrConnectWithoutScoreInput, Enumerable<SequenceCreateOrConnectWithoutScoreInput>>
}

export type AnnStudentClassroomCreateManyWithoutScoreInput = {
  create?: XOR<AnnStudentClassroomCreateWithoutScoreInput, Enumerable<AnnStudentClassroomCreateWithoutScoreInput>>
  connect?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  connectOrCreate?: XOR<AnnStudentClassroomCreateOrConnectWithoutScoreInput, Enumerable<AnnStudentClassroomCreateOrConnectWithoutScoreInput>>
}

export type AnnProfSubjDistroCreateManyWithoutScoreInput = {
  create?: XOR<AnnProfSubjDistroCreateWithoutScoreInput, Enumerable<AnnProfSubjDistroCreateWithoutScoreInput>>
  connect?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  connectOrCreate?: XOR<AnnProfSubjDistroCreateOrConnectWithoutScoreInput, Enumerable<AnnProfSubjDistroCreateOrConnectWithoutScoreInput>>
}

export type SequenceUpdateManyWithoutScoreInput = {
  create?: XOR<SequenceCreateWithoutScoreInput, Enumerable<SequenceCreateWithoutScoreInput>>
  connect?: XOR<SequenceWhereUniqueInput, Enumerable<SequenceWhereUniqueInput>>
  set?: XOR<SequenceWhereUniqueInput, Enumerable<SequenceWhereUniqueInput>>
  disconnect?: XOR<SequenceWhereUniqueInput, Enumerable<SequenceWhereUniqueInput>>
  delete?: XOR<SequenceWhereUniqueInput, Enumerable<SequenceWhereUniqueInput>>
  update?: XOR<SequenceUpdateWithWhereUniqueWithoutScoreInput, Enumerable<SequenceUpdateWithWhereUniqueWithoutScoreInput>>
  updateMany?: XOR<SequenceUpdateManyWithWhereWithoutScoreInput, Enumerable<SequenceUpdateManyWithWhereWithoutScoreInput>>
  deleteMany?: XOR<SequenceScalarWhereInput, Enumerable<SequenceScalarWhereInput>>
  upsert?: XOR<SequenceUpsertWithWhereUniqueWithoutScoreInput, Enumerable<SequenceUpsertWithWhereUniqueWithoutScoreInput>>
  connectOrCreate?: XOR<SequenceCreateOrConnectWithoutScoreInput, Enumerable<SequenceCreateOrConnectWithoutScoreInput>>
}

export type AnnStudentClassroomUpdateManyWithoutScoreInput = {
  create?: XOR<AnnStudentClassroomCreateWithoutScoreInput, Enumerable<AnnStudentClassroomCreateWithoutScoreInput>>
  connect?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  set?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  disconnect?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  delete?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  update?: XOR<AnnStudentClassroomUpdateWithWhereUniqueWithoutScoreInput, Enumerable<AnnStudentClassroomUpdateWithWhereUniqueWithoutScoreInput>>
  updateMany?: XOR<AnnStudentClassroomUpdateManyWithWhereWithoutScoreInput, Enumerable<AnnStudentClassroomUpdateManyWithWhereWithoutScoreInput>>
  deleteMany?: XOR<AnnStudentClassroomScalarWhereInput, Enumerable<AnnStudentClassroomScalarWhereInput>>
  upsert?: XOR<AnnStudentClassroomUpsertWithWhereUniqueWithoutScoreInput, Enumerable<AnnStudentClassroomUpsertWithWhereUniqueWithoutScoreInput>>
  connectOrCreate?: XOR<AnnStudentClassroomCreateOrConnectWithoutScoreInput, Enumerable<AnnStudentClassroomCreateOrConnectWithoutScoreInput>>
}

export type AnnProfSubjDistroUpdateManyWithoutScoreInput = {
  create?: XOR<AnnProfSubjDistroCreateWithoutScoreInput, Enumerable<AnnProfSubjDistroCreateWithoutScoreInput>>
  connect?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  set?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  disconnect?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  delete?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  update?: XOR<AnnProfSubjDistroUpdateWithWhereUniqueWithoutScoreInput, Enumerable<AnnProfSubjDistroUpdateWithWhereUniqueWithoutScoreInput>>
  updateMany?: XOR<AnnProfSubjDistroUpdateManyWithWhereWithoutScoreInput, Enumerable<AnnProfSubjDistroUpdateManyWithWhereWithoutScoreInput>>
  deleteMany?: XOR<AnnProfSubjDistroScalarWhereInput, Enumerable<AnnProfSubjDistroScalarWhereInput>>
  upsert?: XOR<AnnProfSubjDistroUpsertWithWhereUniqueWithoutScoreInput, Enumerable<AnnProfSubjDistroUpsertWithWhereUniqueWithoutScoreInput>>
  connectOrCreate?: XOR<AnnProfSubjDistroCreateOrConnectWithoutScoreInput, Enumerable<AnnProfSubjDistroCreateOrConnectWithoutScoreInput>>
}

export type AnnProfDeptCreateOneWithoutAnnProfSubjInput = {
  create?: AnnProfDeptCreateWithoutAnnProfSubjInput
  connect?: AnnProfDeptWhereUniqueInput
  connectOrCreate?: AnnProfDeptCreateOrConnectWithoutannProfSubjInput
}

export type SubjectCreateOneWithoutAnnProfSubjInput = {
  create?: SubjectCreateWithoutAnnProfSubjInput
  connect?: SubjectWhereUniqueInput
  connectOrCreate?: SubjectCreateOrConnectWithoutannProfSubjInput
}

export type ClassroomCreateOneWithoutAnnProfSubjInput = {
  create?: ClassroomCreateWithoutAnnProfSubjInput
  connect?: ClassroomWhereUniqueInput
  connectOrCreate?: ClassroomCreateOrConnectWithoutannProfSubjInput
}

export type ScoreCreateOneWithoutAnnProfSubjInput = {
  create?: ScoreCreateWithoutAnnProfSubjInput
  connect?: ScoreWhereUniqueInput
  connectOrCreate?: ScoreCreateOrConnectWithoutannProfSubjInput
}

export type LogbookCreateManyWithoutAnnProfSubjDistroInput = {
  create?: XOR<LogbookCreateWithoutAnnProfSubjDistroInput, Enumerable<LogbookCreateWithoutAnnProfSubjDistroInput>>
  connect?: XOR<LogbookWhereUniqueInput, Enumerable<LogbookWhereUniqueInput>>
  connectOrCreate?: XOR<LogbookCreateOrConnectWithoutAnnProfSubjDistroInput, Enumerable<LogbookCreateOrConnectWithoutAnnProfSubjDistroInput>>
}

export type AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput = {
  create?: AnnProfDeptCreateWithoutAnnProfSubjInput
  connect?: AnnProfDeptWhereUniqueInput
  update?: AnnProfDeptUpdateWithoutAnnProfSubjInput
  upsert?: AnnProfDeptUpsertWithoutAnnProfSubjInput
  connectOrCreate?: AnnProfDeptCreateOrConnectWithoutannProfSubjInput
}

export type SubjectUpdateOneRequiredWithoutAnnProfSubjInput = {
  create?: SubjectCreateWithoutAnnProfSubjInput
  connect?: SubjectWhereUniqueInput
  update?: SubjectUpdateWithoutAnnProfSubjInput
  upsert?: SubjectUpsertWithoutAnnProfSubjInput
  connectOrCreate?: SubjectCreateOrConnectWithoutannProfSubjInput
}

export type ClassroomUpdateOneRequiredWithoutAnnProfSubjInput = {
  create?: ClassroomCreateWithoutAnnProfSubjInput
  connect?: ClassroomWhereUniqueInput
  update?: ClassroomUpdateWithoutAnnProfSubjInput
  upsert?: ClassroomUpsertWithoutAnnProfSubjInput
  connectOrCreate?: ClassroomCreateOrConnectWithoutannProfSubjInput
}

export type ScoreUpdateOneRequiredWithoutAnnProfSubjInput = {
  create?: ScoreCreateWithoutAnnProfSubjInput
  connect?: ScoreWhereUniqueInput
  update?: ScoreUpdateWithoutAnnProfSubjInput
  upsert?: ScoreUpsertWithoutAnnProfSubjInput
  connectOrCreate?: ScoreCreateOrConnectWithoutannProfSubjInput
}

export type LogbookUpdateManyWithoutAnnProfSubjDistroInput = {
  create?: XOR<LogbookCreateWithoutAnnProfSubjDistroInput, Enumerable<LogbookCreateWithoutAnnProfSubjDistroInput>>
  connect?: XOR<LogbookWhereUniqueInput, Enumerable<LogbookWhereUniqueInput>>
  set?: XOR<LogbookWhereUniqueInput, Enumerable<LogbookWhereUniqueInput>>
  disconnect?: XOR<LogbookWhereUniqueInput, Enumerable<LogbookWhereUniqueInput>>
  delete?: XOR<LogbookWhereUniqueInput, Enumerable<LogbookWhereUniqueInput>>
  update?: XOR<LogbookUpdateWithWhereUniqueWithoutAnnProfSubjDistroInput, Enumerable<LogbookUpdateWithWhereUniqueWithoutAnnProfSubjDistroInput>>
  updateMany?: XOR<LogbookUpdateManyWithWhereWithoutAnnProfSubjDistroInput, Enumerable<LogbookUpdateManyWithWhereWithoutAnnProfSubjDistroInput>>
  deleteMany?: XOR<LogbookScalarWhereInput, Enumerable<LogbookScalarWhereInput>>
  upsert?: XOR<LogbookUpsertWithWhereUniqueWithoutAnnProfSubjDistroInput, Enumerable<LogbookUpsertWithWhereUniqueWithoutAnnProfSubjDistroInput>>
  connectOrCreate?: XOR<LogbookCreateOrConnectWithoutAnnProfSubjDistroInput, Enumerable<LogbookCreateOrConnectWithoutAnnProfSubjDistroInput>>
}

export type AnnProfSubjDistroCreateManyWithoutSubjectInput = {
  create?: XOR<AnnProfSubjDistroCreateWithoutSubjectInput, Enumerable<AnnProfSubjDistroCreateWithoutSubjectInput>>
  connect?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  connectOrCreate?: XOR<AnnProfSubjDistroCreateOrConnectWithoutSubjectInput, Enumerable<AnnProfSubjDistroCreateOrConnectWithoutSubjectInput>>
}

export type DepartmentCreateOneWithoutSubjectInput = {
  create?: DepartmentCreateWithoutSubjectInput
  connect?: DepartmentWhereUniqueInput
  connectOrCreate?: DepartmentCreateOrConnectWithoutsubjectInput
}

export type AnnProfSubjDistroUpdateManyWithoutSubjectInput = {
  create?: XOR<AnnProfSubjDistroCreateWithoutSubjectInput, Enumerable<AnnProfSubjDistroCreateWithoutSubjectInput>>
  connect?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  set?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  disconnect?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  delete?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  update?: XOR<AnnProfSubjDistroUpdateWithWhereUniqueWithoutSubjectInput, Enumerable<AnnProfSubjDistroUpdateWithWhereUniqueWithoutSubjectInput>>
  updateMany?: XOR<AnnProfSubjDistroUpdateManyWithWhereWithoutSubjectInput, Enumerable<AnnProfSubjDistroUpdateManyWithWhereWithoutSubjectInput>>
  deleteMany?: XOR<AnnProfSubjDistroScalarWhereInput, Enumerable<AnnProfSubjDistroScalarWhereInput>>
  upsert?: XOR<AnnProfSubjDistroUpsertWithWhereUniqueWithoutSubjectInput, Enumerable<AnnProfSubjDistroUpsertWithWhereUniqueWithoutSubjectInput>>
  connectOrCreate?: XOR<AnnProfSubjDistroCreateOrConnectWithoutSubjectInput, Enumerable<AnnProfSubjDistroCreateOrConnectWithoutSubjectInput>>
}

export type DepartmentUpdateOneRequiredWithoutSubjectInput = {
  create?: DepartmentCreateWithoutSubjectInput
  connect?: DepartmentWhereUniqueInput
  update?: DepartmentUpdateWithoutSubjectInput
  upsert?: DepartmentUpsertWithoutSubjectInput
  connectOrCreate?: DepartmentCreateOrConnectWithoutsubjectInput
}

export type AnnProfSubjDistroCreateManyWithoutClassroomInput = {
  create?: XOR<AnnProfSubjDistroCreateWithoutClassroomInput, Enumerable<AnnProfSubjDistroCreateWithoutClassroomInput>>
  connect?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  connectOrCreate?: XOR<AnnProfSubjDistroCreateOrConnectWithoutClassroomInput, Enumerable<AnnProfSubjDistroCreateOrConnectWithoutClassroomInput>>
}

export type AnnStudentClassroomCreateManyWithoutClassroomInput = {
  create?: XOR<AnnStudentClassroomCreateWithoutClassroomInput, Enumerable<AnnStudentClassroomCreateWithoutClassroomInput>>
  connect?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  connectOrCreate?: XOR<AnnStudentClassroomCreateOrConnectWithoutClassroomInput, Enumerable<AnnStudentClassroomCreateOrConnectWithoutClassroomInput>>
}

export type AnnProfSubjDistroUpdateManyWithoutClassroomInput = {
  create?: XOR<AnnProfSubjDistroCreateWithoutClassroomInput, Enumerable<AnnProfSubjDistroCreateWithoutClassroomInput>>
  connect?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  set?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  disconnect?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  delete?: XOR<AnnProfSubjDistroWhereUniqueInput, Enumerable<AnnProfSubjDistroWhereUniqueInput>>
  update?: XOR<AnnProfSubjDistroUpdateWithWhereUniqueWithoutClassroomInput, Enumerable<AnnProfSubjDistroUpdateWithWhereUniqueWithoutClassroomInput>>
  updateMany?: XOR<AnnProfSubjDistroUpdateManyWithWhereWithoutClassroomInput, Enumerable<AnnProfSubjDistroUpdateManyWithWhereWithoutClassroomInput>>
  deleteMany?: XOR<AnnProfSubjDistroScalarWhereInput, Enumerable<AnnProfSubjDistroScalarWhereInput>>
  upsert?: XOR<AnnProfSubjDistroUpsertWithWhereUniqueWithoutClassroomInput, Enumerable<AnnProfSubjDistroUpsertWithWhereUniqueWithoutClassroomInput>>
  connectOrCreate?: XOR<AnnProfSubjDistroCreateOrConnectWithoutClassroomInput, Enumerable<AnnProfSubjDistroCreateOrConnectWithoutClassroomInput>>
}

export type AnnStudentClassroomUpdateManyWithoutClassroomInput = {
  create?: XOR<AnnStudentClassroomCreateWithoutClassroomInput, Enumerable<AnnStudentClassroomCreateWithoutClassroomInput>>
  connect?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  set?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  disconnect?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  delete?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  update?: XOR<AnnStudentClassroomUpdateWithWhereUniqueWithoutClassroomInput, Enumerable<AnnStudentClassroomUpdateWithWhereUniqueWithoutClassroomInput>>
  updateMany?: XOR<AnnStudentClassroomUpdateManyWithWhereWithoutClassroomInput, Enumerable<AnnStudentClassroomUpdateManyWithWhereWithoutClassroomInput>>
  deleteMany?: XOR<AnnStudentClassroomScalarWhereInput, Enumerable<AnnStudentClassroomScalarWhereInput>>
  upsert?: XOR<AnnStudentClassroomUpsertWithWhereUniqueWithoutClassroomInput, Enumerable<AnnStudentClassroomUpsertWithWhereUniqueWithoutClassroomInput>>
  connectOrCreate?: XOR<AnnStudentClassroomCreateOrConnectWithoutClassroomInput, Enumerable<AnnStudentClassroomCreateOrConnectWithoutClassroomInput>>
}

export type AnnStudentClassroomCreateManyWithoutStudentInput = {
  create?: XOR<AnnStudentClassroomCreateWithoutStudentInput, Enumerable<AnnStudentClassroomCreateWithoutStudentInput>>
  connect?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  connectOrCreate?: XOR<AnnStudentClassroomCreateOrConnectWithoutStudentInput, Enumerable<AnnStudentClassroomCreateOrConnectWithoutStudentInput>>
}

export type AnnStudentClassroomUpdateManyWithoutStudentInput = {
  create?: XOR<AnnStudentClassroomCreateWithoutStudentInput, Enumerable<AnnStudentClassroomCreateWithoutStudentInput>>
  connect?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  set?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  disconnect?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  delete?: XOR<AnnStudentClassroomWhereUniqueInput, Enumerable<AnnStudentClassroomWhereUniqueInput>>
  update?: XOR<AnnStudentClassroomUpdateWithWhereUniqueWithoutStudentInput, Enumerable<AnnStudentClassroomUpdateWithWhereUniqueWithoutStudentInput>>
  updateMany?: XOR<AnnStudentClassroomUpdateManyWithWhereWithoutStudentInput, Enumerable<AnnStudentClassroomUpdateManyWithWhereWithoutStudentInput>>
  deleteMany?: XOR<AnnStudentClassroomScalarWhereInput, Enumerable<AnnStudentClassroomScalarWhereInput>>
  upsert?: XOR<AnnStudentClassroomUpsertWithWhereUniqueWithoutStudentInput, Enumerable<AnnStudentClassroomUpsertWithWhereUniqueWithoutStudentInput>>
  connectOrCreate?: XOR<AnnStudentClassroomCreateOrConnectWithoutStudentInput, Enumerable<AnnStudentClassroomCreateOrConnectWithoutStudentInput>>
}

export type SchoolYearCreateOneWithoutAnnStudentClassroomInput = {
  create?: SchoolYearCreateWithoutAnnStudentClassroomInput
  connect?: SchoolYearWhereUniqueInput
  connectOrCreate?: SchoolYearCreateOrConnectWithoutannStudentClassroomInput
}

export type ClassroomCreateOneWithoutAnnStudentClassroomInput = {
  create?: ClassroomCreateWithoutAnnStudentClassroomInput
  connect?: ClassroomWhereUniqueInput
  connectOrCreate?: ClassroomCreateOrConnectWithoutannStudentClassroomInput
}

export type StudentCreateOneWithoutAnnStudentClassroomInput = {
  create?: StudentCreateWithoutAnnStudentClassroomInput
  connect?: StudentWhereUniqueInput
  connectOrCreate?: StudentCreateOrConnectWithoutannStudentClassroomInput
}

export type ScoreCreateOneWithoutAnnStudentClassInput = {
  create?: ScoreCreateWithoutAnnStudentClassInput
  connect?: ScoreWhereUniqueInput
  connectOrCreate?: ScoreCreateOrConnectWithoutannStudentClassInput
}

export type SchoolYearUpdateOneRequiredWithoutAnnStudentClassroomInput = {
  create?: SchoolYearCreateWithoutAnnStudentClassroomInput
  connect?: SchoolYearWhereUniqueInput
  update?: SchoolYearUpdateWithoutAnnStudentClassroomInput
  upsert?: SchoolYearUpsertWithoutAnnStudentClassroomInput
  connectOrCreate?: SchoolYearCreateOrConnectWithoutannStudentClassroomInput
}

export type ClassroomUpdateOneRequiredWithoutAnnStudentClassroomInput = {
  create?: ClassroomCreateWithoutAnnStudentClassroomInput
  connect?: ClassroomWhereUniqueInput
  update?: ClassroomUpdateWithoutAnnStudentClassroomInput
  upsert?: ClassroomUpsertWithoutAnnStudentClassroomInput
  connectOrCreate?: ClassroomCreateOrConnectWithoutannStudentClassroomInput
}

export type StudentUpdateOneRequiredWithoutAnnStudentClassroomInput = {
  create?: StudentCreateWithoutAnnStudentClassroomInput
  connect?: StudentWhereUniqueInput
  update?: StudentUpdateWithoutAnnStudentClassroomInput
  upsert?: StudentUpsertWithoutAnnStudentClassroomInput
  connectOrCreate?: StudentCreateOrConnectWithoutannStudentClassroomInput
}

export type ScoreUpdateOneRequiredWithoutAnnStudentClassInput = {
  create?: ScoreCreateWithoutAnnStudentClassInput
  connect?: ScoreWhereUniqueInput
  update?: ScoreUpdateWithoutAnnStudentClassInput
  upsert?: ScoreUpsertWithoutAnnStudentClassInput
  connectOrCreate?: ScoreCreateOrConnectWithoutannStudentClassInput
}

export type AnnProfDeptCreateManyWithoutProfInput = {
  create?: XOR<AnnProfDeptCreateWithoutProfInput, Enumerable<AnnProfDeptCreateWithoutProfInput>>
  connect?: XOR<AnnProfDeptWhereUniqueInput, Enumerable<AnnProfDeptWhereUniqueInput>>
  connectOrCreate?: XOR<AnnProfDeptCreateOrConnectWithoutProfInput, Enumerable<AnnProfDeptCreateOrConnectWithoutProfInput>>
}

export type AnnProfDeptUpdateManyWithoutProfInput = {
  create?: XOR<AnnProfDeptCreateWithoutProfInput, Enumerable<AnnProfDeptCreateWithoutProfInput>>
  connect?: XOR<AnnProfDeptWhereUniqueInput, Enumerable<AnnProfDeptWhereUniqueInput>>
  set?: XOR<AnnProfDeptWhereUniqueInput, Enumerable<AnnProfDeptWhereUniqueInput>>
  disconnect?: XOR<AnnProfDeptWhereUniqueInput, Enumerable<AnnProfDeptWhereUniqueInput>>
  delete?: XOR<AnnProfDeptWhereUniqueInput, Enumerable<AnnProfDeptWhereUniqueInput>>
  update?: XOR<AnnProfDeptUpdateWithWhereUniqueWithoutProfInput, Enumerable<AnnProfDeptUpdateWithWhereUniqueWithoutProfInput>>
  updateMany?: XOR<AnnProfDeptUpdateManyWithWhereWithoutProfInput, Enumerable<AnnProfDeptUpdateManyWithWhereWithoutProfInput>>
  deleteMany?: XOR<AnnProfDeptScalarWhereInput, Enumerable<AnnProfDeptScalarWhereInput>>
  upsert?: XOR<AnnProfDeptUpsertWithWhereUniqueWithoutProfInput, Enumerable<AnnProfDeptUpsertWithWhereUniqueWithoutProfInput>>
  connectOrCreate?: XOR<AnnProfDeptCreateOrConnectWithoutProfInput, Enumerable<AnnProfDeptCreateOrConnectWithoutProfInput>>
}

export type NestedStringFilter = {
  equals?: string
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: XOR<string, NestedStringFilter>
}

export type NestedDateTimeFilter = {
  equals?: Date | string
  in?: Enumerable<Date> | Enumerable<string>
  notIn?: Enumerable<Date> | Enumerable<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: XOR<Date | string, NestedDateTimeFilter>
}

export type DivisionCreateWithoutRegionInput = {
  id?: string
  divisionName: string
  divisionCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  subdiv?: SubdivisionCreateManyWithoutDivisionInput
}

export type DivisionCreateOrConnectWithoutRegionInput = {
  where: DivisionWhereUniqueInput
  create: DivisionCreateWithoutRegionInput
}

export type DivisionUpdateWithWhereUniqueWithoutRegionInput = {
  where: DivisionWhereUniqueInput
  data: DivisionUpdateWithoutRegionInput
}

export type DivisionUpdateManyWithWhereWithoutRegionInput = {
  where: DivisionScalarWhereInput
  data: DivisionUpdateManyMutationInput
}

export type DivisionScalarWhereInput = {
  AND?: XOR<DivisionScalarWhereInput, Enumerable<DivisionScalarWhereInput>>
  OR?: XOR<DivisionScalarWhereInput, Enumerable<DivisionScalarWhereInput>>
  NOT?: XOR<DivisionScalarWhereInput, Enumerable<DivisionScalarWhereInput>>
  id?: XOR<StringFilter, string>
  divisionName?: XOR<StringFilter, string>
  divisionCode?: XOR<StringFilter, string>
  regionId?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type DivisionUpsertWithWhereUniqueWithoutRegionInput = {
  where: DivisionWhereUniqueInput
  update: DivisionUpdateWithoutRegionInput
  create: DivisionCreateWithoutRegionInput
}

export type SubdivisionCreateWithoutDivisionInput = {
  id?: string
  subdivName: string
  subdivCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  town?: TownCreateManyWithoutSubdivisionInput
}

export type SubdivisionCreateOrConnectWithoutDivisionInput = {
  where: SubdivisionWhereUniqueInput
  create: SubdivisionCreateWithoutDivisionInput
}

export type RegionCreateWithoutDivisionInput = {
  id?: string
  regName: string
  regCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type RegionCreateOrConnectWithoutdivisionInput = {
  where: RegionWhereUniqueInput
  create: RegionCreateWithoutDivisionInput
}

export type SubdivisionUpdateWithWhereUniqueWithoutDivisionInput = {
  where: SubdivisionWhereUniqueInput
  data: SubdivisionUpdateWithoutDivisionInput
}

export type SubdivisionUpdateManyWithWhereWithoutDivisionInput = {
  where: SubdivisionScalarWhereInput
  data: SubdivisionUpdateManyMutationInput
}

export type SubdivisionScalarWhereInput = {
  AND?: XOR<SubdivisionScalarWhereInput, Enumerable<SubdivisionScalarWhereInput>>
  OR?: XOR<SubdivisionScalarWhereInput, Enumerable<SubdivisionScalarWhereInput>>
  NOT?: XOR<SubdivisionScalarWhereInput, Enumerable<SubdivisionScalarWhereInput>>
  id?: XOR<StringFilter, string>
  subdivName?: XOR<StringFilter, string>
  subdivCode?: XOR<StringFilter, string>
  divisionId?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type SubdivisionUpsertWithWhereUniqueWithoutDivisionInput = {
  where: SubdivisionWhereUniqueInput
  update: SubdivisionUpdateWithoutDivisionInput
  create: SubdivisionCreateWithoutDivisionInput
}

export type RegionUpdateWithoutDivisionInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  regName?: XOR<string, StringFieldUpdateOperationsInput>
  regCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type RegionUpsertWithoutDivisionInput = {
  update: RegionUpdateWithoutDivisionInput
  create: RegionCreateWithoutDivisionInput
}

export type TownCreateWithoutSubdivisionInput = {
  id?: string
  townName: string
  townCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  school?: SchoolCreateManyWithoutTownInput
}

export type TownCreateOrConnectWithoutSubdivisionInput = {
  where: TownWhereUniqueInput
  create: TownCreateWithoutSubdivisionInput
}

export type DivisionCreateWithoutSubdivInput = {
  id?: string
  divisionName: string
  divisionCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  Region: RegionCreateOneWithoutDivisionInput
}

export type DivisionCreateOrConnectWithoutsubdivInput = {
  where: DivisionWhereUniqueInput
  create: DivisionCreateWithoutSubdivInput
}

export type TownUpdateWithWhereUniqueWithoutSubdivisionInput = {
  where: TownWhereUniqueInput
  data: TownUpdateWithoutSubdivisionInput
}

export type TownUpdateManyWithWhereWithoutSubdivisionInput = {
  where: TownScalarWhereInput
  data: TownUpdateManyMutationInput
}

export type TownScalarWhereInput = {
  AND?: XOR<TownScalarWhereInput, Enumerable<TownScalarWhereInput>>
  OR?: XOR<TownScalarWhereInput, Enumerable<TownScalarWhereInput>>
  NOT?: XOR<TownScalarWhereInput, Enumerable<TownScalarWhereInput>>
  id?: XOR<StringFilter, string>
  townName?: XOR<StringFilter, string>
  townCode?: XOR<StringFilter, string>
  subdivisionId?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type TownUpsertWithWhereUniqueWithoutSubdivisionInput = {
  where: TownWhereUniqueInput
  update: TownUpdateWithoutSubdivisionInput
  create: TownCreateWithoutSubdivisionInput
}

export type DivisionUpdateWithoutSubdivInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  divisionName?: XOR<string, StringFieldUpdateOperationsInput>
  divisionCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  Region?: RegionUpdateOneRequiredWithoutDivisionInput
}

export type DivisionUpsertWithoutSubdivInput = {
  update: DivisionUpdateWithoutSubdivInput
  create: DivisionCreateWithoutSubdivInput
}

export type SchoolCreateWithoutTownInput = {
  id?: string
  schoolName: string
  schoolNumber: string
  schoolCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  section?: SectionCreateManyWithoutSchoolInput
}

export type SchoolCreateOrConnectWithoutTownInput = {
  where: SchoolWhereUniqueInput
  create: SchoolCreateWithoutTownInput
}

export type SubdivisionCreateWithoutTownInput = {
  id?: string
  subdivName: string
  subdivCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  Division: DivisionCreateOneWithoutSubdivInput
}

export type SubdivisionCreateOrConnectWithouttownInput = {
  where: SubdivisionWhereUniqueInput
  create: SubdivisionCreateWithoutTownInput
}

export type SchoolUpdateWithWhereUniqueWithoutTownInput = {
  where: SchoolWhereUniqueInput
  data: SchoolUpdateWithoutTownInput
}

export type SchoolUpdateManyWithWhereWithoutTownInput = {
  where: SchoolScalarWhereInput
  data: SchoolUpdateManyMutationInput
}

export type SchoolScalarWhereInput = {
  AND?: XOR<SchoolScalarWhereInput, Enumerable<SchoolScalarWhereInput>>
  OR?: XOR<SchoolScalarWhereInput, Enumerable<SchoolScalarWhereInput>>
  NOT?: XOR<SchoolScalarWhereInput, Enumerable<SchoolScalarWhereInput>>
  id?: XOR<StringFilter, string>
  schoolName?: XOR<StringFilter, string>
  schoolNumber?: XOR<StringFilter, string>
  schoolCode?: XOR<StringFilter, string>
  townId?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type SchoolUpsertWithWhereUniqueWithoutTownInput = {
  where: SchoolWhereUniqueInput
  update: SchoolUpdateWithoutTownInput
  create: SchoolCreateWithoutTownInput
}

export type SubdivisionUpdateWithoutTownInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  subdivName?: XOR<string, StringFieldUpdateOperationsInput>
  subdivCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  Division?: DivisionUpdateOneRequiredWithoutSubdivInput
}

export type SubdivisionUpsertWithoutTownInput = {
  update: SubdivisionUpdateWithoutTownInput
  create: SubdivisionCreateWithoutTownInput
}

export type SectionCreateWithoutSchoolInput = {
  id?: string
  sectionName: string
  sectionCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  department?: DepartmentCreateManyWithoutSectionInput
}

export type SectionCreateOrConnectWithoutSchoolInput = {
  where: SectionWhereUniqueInput
  create: SectionCreateWithoutSchoolInput
}

export type TownCreateWithoutSchoolInput = {
  id?: string
  townName: string
  townCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  Subdivision: SubdivisionCreateOneWithoutTownInput
}

export type TownCreateOrConnectWithoutschoolInput = {
  where: TownWhereUniqueInput
  create: TownCreateWithoutSchoolInput
}

export type SectionUpdateWithWhereUniqueWithoutSchoolInput = {
  where: SectionWhereUniqueInput
  data: SectionUpdateWithoutSchoolInput
}

export type SectionUpdateManyWithWhereWithoutSchoolInput = {
  where: SectionScalarWhereInput
  data: SectionUpdateManyMutationInput
}

export type SectionScalarWhereInput = {
  AND?: XOR<SectionScalarWhereInput, Enumerable<SectionScalarWhereInput>>
  OR?: XOR<SectionScalarWhereInput, Enumerable<SectionScalarWhereInput>>
  NOT?: XOR<SectionScalarWhereInput, Enumerable<SectionScalarWhereInput>>
  id?: XOR<StringFilter, string>
  sectionName?: XOR<StringFilter, string>
  sectionCode?: XOR<StringFilter, string>
  schoolId?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type SectionUpsertWithWhereUniqueWithoutSchoolInput = {
  where: SectionWhereUniqueInput
  update: SectionUpdateWithoutSchoolInput
  create: SectionCreateWithoutSchoolInput
}

export type TownUpdateWithoutSchoolInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  townName?: XOR<string, StringFieldUpdateOperationsInput>
  townCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  Subdivision?: SubdivisionUpdateOneRequiredWithoutTownInput
}

export type TownUpsertWithoutSchoolInput = {
  update: TownUpdateWithoutSchoolInput
  create: TownCreateWithoutSchoolInput
}

export type DepartmentCreateWithoutSectionInput = {
  id?: string
  deptName: string
  deptCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annProfDept?: AnnProfDeptCreateManyWithoutDepartmentInput
  subject?: SubjectCreateManyWithoutDepartmentInput
}

export type DepartmentCreateOrConnectWithoutSectionInput = {
  where: DepartmentWhereUniqueInput
  create: DepartmentCreateWithoutSectionInput
}

export type SchoolCreateWithoutSectionInput = {
  id?: string
  schoolName: string
  schoolNumber: string
  schoolCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  Town: TownCreateOneWithoutSchoolInput
}

export type SchoolCreateOrConnectWithoutsectionInput = {
  where: SchoolWhereUniqueInput
  create: SchoolCreateWithoutSectionInput
}

export type DepartmentUpdateWithWhereUniqueWithoutSectionInput = {
  where: DepartmentWhereUniqueInput
  data: DepartmentUpdateWithoutSectionInput
}

export type DepartmentUpdateManyWithWhereWithoutSectionInput = {
  where: DepartmentScalarWhereInput
  data: DepartmentUpdateManyMutationInput
}

export type DepartmentScalarWhereInput = {
  AND?: XOR<DepartmentScalarWhereInput, Enumerable<DepartmentScalarWhereInput>>
  OR?: XOR<DepartmentScalarWhereInput, Enumerable<DepartmentScalarWhereInput>>
  NOT?: XOR<DepartmentScalarWhereInput, Enumerable<DepartmentScalarWhereInput>>
  id?: XOR<StringFilter, string>
  deptName?: XOR<StringFilter, string>
  deptCode?: XOR<StringFilter, string>
  sectionId?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
}

export type DepartmentUpsertWithWhereUniqueWithoutSectionInput = {
  where: DepartmentWhereUniqueInput
  update: DepartmentUpdateWithoutSectionInput
  create: DepartmentCreateWithoutSectionInput
}

export type SchoolUpdateWithoutSectionInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  schoolName?: XOR<string, StringFieldUpdateOperationsInput>
  schoolNumber?: XOR<string, StringFieldUpdateOperationsInput>
  schoolCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  Town?: TownUpdateOneRequiredWithoutSchoolInput
}

export type SchoolUpsertWithoutSectionInput = {
  update: SchoolUpdateWithoutSectionInput
  create: SchoolCreateWithoutSectionInput
}

export type AnnProfDeptCreateWithoutDepartmentInput = {
  id?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annProfSubj?: AnnProfSubjDistroCreateManyWithoutAnnProfDeptInput
  SchoolYear: SchoolYearCreateOneWithoutAnnProfDeptInput
  Prof: ProfCreateOneWithoutAnnProfDeptInput
}

export type AnnProfDeptCreateOrConnectWithoutDepartmentInput = {
  where: AnnProfDeptWhereUniqueInput
  create: AnnProfDeptCreateWithoutDepartmentInput
}

export type SubjectCreateWithoutDepartmentInput = {
  id?: string
  subjectName: string
  subjectCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annProfSubj?: AnnProfSubjDistroCreateManyWithoutSubjectInput
}

export type SubjectCreateOrConnectWithoutDepartmentInput = {
  where: SubjectWhereUniqueInput
  create: SubjectCreateWithoutDepartmentInput
}

export type SectionCreateWithoutDepartmentInput = {
  id?: string
  sectionName: string
  sectionCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  School: SchoolCreateOneWithoutSectionInput
}

export type SectionCreateOrConnectWithoutdepartmentInput = {
  where: SectionWhereUniqueInput
  create: SectionCreateWithoutDepartmentInput
}

export type AnnProfDeptUpdateWithWhereUniqueWithoutDepartmentInput = {
  where: AnnProfDeptWhereUniqueInput
  data: AnnProfDeptUpdateWithoutDepartmentInput
}

export type AnnProfDeptUpdateManyWithWhereWithoutDepartmentInput = {
  where: AnnProfDeptScalarWhereInput
  data: AnnProfDeptUpdateManyMutationInput
}

export type AnnProfDeptScalarWhereInput = {
  AND?: XOR<AnnProfDeptScalarWhereInput, Enumerable<AnnProfDeptScalarWhereInput>>
  OR?: XOR<AnnProfDeptScalarWhereInput, Enumerable<AnnProfDeptScalarWhereInput>>
  NOT?: XOR<AnnProfDeptScalarWhereInput, Enumerable<AnnProfDeptScalarWhereInput>>
  id?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
  departmentId?: XOR<StringFilter, string>
  schoolYearId?: XOR<StringFilter, string>
  profId?: XOR<StringFilter, string>
}

export type AnnProfDeptUpsertWithWhereUniqueWithoutDepartmentInput = {
  where: AnnProfDeptWhereUniqueInput
  update: AnnProfDeptUpdateWithoutDepartmentInput
  create: AnnProfDeptCreateWithoutDepartmentInput
}

export type SubjectUpdateWithWhereUniqueWithoutDepartmentInput = {
  where: SubjectWhereUniqueInput
  data: SubjectUpdateWithoutDepartmentInput
}

export type SubjectUpdateManyWithWhereWithoutDepartmentInput = {
  where: SubjectScalarWhereInput
  data: SubjectUpdateManyMutationInput
}

export type SubjectScalarWhereInput = {
  AND?: XOR<SubjectScalarWhereInput, Enumerable<SubjectScalarWhereInput>>
  OR?: XOR<SubjectScalarWhereInput, Enumerable<SubjectScalarWhereInput>>
  NOT?: XOR<SubjectScalarWhereInput, Enumerable<SubjectScalarWhereInput>>
  id?: XOR<StringFilter, string>
  subjectName?: XOR<StringFilter, string>
  subjectCode?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
  departmentId?: XOR<StringFilter, string>
}

export type SubjectUpsertWithWhereUniqueWithoutDepartmentInput = {
  where: SubjectWhereUniqueInput
  update: SubjectUpdateWithoutDepartmentInput
  create: SubjectCreateWithoutDepartmentInput
}

export type SectionUpdateWithoutDepartmentInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  sectionName?: XOR<string, StringFieldUpdateOperationsInput>
  sectionCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  School?: SchoolUpdateOneRequiredWithoutSectionInput
}

export type SectionUpsertWithoutDepartmentInput = {
  update: SectionUpdateWithoutDepartmentInput
  create: SectionCreateWithoutDepartmentInput
}

export type ScoreCreateWithoutSeqInput = {
  id?: string
  marks: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annStudentClass?: AnnStudentClassroomCreateManyWithoutScoreInput
  annProfSubj?: AnnProfSubjDistroCreateManyWithoutScoreInput
}

export type ScoreCreateOrConnectWithoutseqInput = {
  where: ScoreWhereUniqueInput
  create: ScoreCreateWithoutSeqInput
}

export type ScoreUpdateWithoutSeqInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  marks?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annStudentClass?: AnnStudentClassroomUpdateManyWithoutScoreInput
  annProfSubj?: AnnProfSubjDistroUpdateManyWithoutScoreInput
}

export type ScoreUpsertWithoutSeqInput = {
  update: ScoreUpdateWithoutSeqInput
  create: ScoreCreateWithoutSeqInput
}

export type AnnStudentClassroomCreateWithoutSchoolYearInput = {
  id?: string
  student1stName: string
  student2ndName: string
  student3rdName: string
  sex: string
  studentMatricule: string
  image: string
  createdAt?: Date | string
  updatedAt?: Date | string
  Classroom: ClassroomCreateOneWithoutAnnStudentClassroomInput
  Student: StudentCreateOneWithoutAnnStudentClassroomInput
  Score: ScoreCreateOneWithoutAnnStudentClassInput
}

export type AnnStudentClassroomCreateOrConnectWithoutSchoolYearInput = {
  where: AnnStudentClassroomWhereUniqueInput
  create: AnnStudentClassroomCreateWithoutSchoolYearInput
}

export type AnnProfDeptCreateWithoutSchoolYearInput = {
  id?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annProfSubj?: AnnProfSubjDistroCreateManyWithoutAnnProfDeptInput
  Department: DepartmentCreateOneWithoutAnnProfDeptInput
  Prof: ProfCreateOneWithoutAnnProfDeptInput
}

export type AnnProfDeptCreateOrConnectWithoutSchoolYearInput = {
  where: AnnProfDeptWhereUniqueInput
  create: AnnProfDeptCreateWithoutSchoolYearInput
}

export type AnnStudentClassroomUpdateWithWhereUniqueWithoutSchoolYearInput = {
  where: AnnStudentClassroomWhereUniqueInput
  data: AnnStudentClassroomUpdateWithoutSchoolYearInput
}

export type AnnStudentClassroomUpdateManyWithWhereWithoutSchoolYearInput = {
  where: AnnStudentClassroomScalarWhereInput
  data: AnnStudentClassroomUpdateManyMutationInput
}

export type AnnStudentClassroomScalarWhereInput = {
  AND?: XOR<AnnStudentClassroomScalarWhereInput, Enumerable<AnnStudentClassroomScalarWhereInput>>
  OR?: XOR<AnnStudentClassroomScalarWhereInput, Enumerable<AnnStudentClassroomScalarWhereInput>>
  NOT?: XOR<AnnStudentClassroomScalarWhereInput, Enumerable<AnnStudentClassroomScalarWhereInput>>
  id?: XOR<StringFilter, string>
  student1stName?: XOR<StringFilter, string>
  student2ndName?: XOR<StringFilter, string>
  student3rdName?: XOR<StringFilter, string>
  sex?: XOR<StringFilter, string>
  studentMatricule?: XOR<StringFilter, string>
  image?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
  schoolYearId?: XOR<StringFilter, string>
  classroomId?: XOR<StringFilter, string>
  studentId?: XOR<StringFilter, string>
  scoreId?: XOR<StringFilter, string>
}

export type AnnStudentClassroomUpsertWithWhereUniqueWithoutSchoolYearInput = {
  where: AnnStudentClassroomWhereUniqueInput
  update: AnnStudentClassroomUpdateWithoutSchoolYearInput
  create: AnnStudentClassroomCreateWithoutSchoolYearInput
}

export type AnnProfDeptUpdateWithWhereUniqueWithoutSchoolYearInput = {
  where: AnnProfDeptWhereUniqueInput
  data: AnnProfDeptUpdateWithoutSchoolYearInput
}

export type AnnProfDeptUpdateManyWithWhereWithoutSchoolYearInput = {
  where: AnnProfDeptScalarWhereInput
  data: AnnProfDeptUpdateManyMutationInput
}

export type AnnProfDeptUpsertWithWhereUniqueWithoutSchoolYearInput = {
  where: AnnProfDeptWhereUniqueInput
  update: AnnProfDeptUpdateWithoutSchoolYearInput
  create: AnnProfDeptCreateWithoutSchoolYearInput
}

export type AnnProfSubjDistroCreateWithoutAnnProfDeptInput = {
  id?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  Subject: SubjectCreateOneWithoutAnnProfSubjInput
  Classroom: ClassroomCreateOneWithoutAnnProfSubjInput
  Score: ScoreCreateOneWithoutAnnProfSubjInput
  Logbook?: LogbookCreateManyWithoutAnnProfSubjDistroInput
}

export type AnnProfSubjDistroCreateOrConnectWithoutAnnProfDeptInput = {
  where: AnnProfSubjDistroWhereUniqueInput
  create: AnnProfSubjDistroCreateWithoutAnnProfDeptInput
}

export type DepartmentCreateWithoutAnnProfDeptInput = {
  id?: string
  deptName: string
  deptCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  subject?: SubjectCreateManyWithoutDepartmentInput
  Section: SectionCreateOneWithoutDepartmentInput
}

export type DepartmentCreateOrConnectWithoutannProfDeptInput = {
  where: DepartmentWhereUniqueInput
  create: DepartmentCreateWithoutAnnProfDeptInput
}

export type SchoolYearCreateWithoutAnnProfDeptInput = {
  id?: string
  yearName: string
  yearCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annStudentClassroom?: AnnStudentClassroomCreateManyWithoutSchoolYearInput
}

export type SchoolYearCreateOrConnectWithoutannProfDeptInput = {
  where: SchoolYearWhereUniqueInput
  create: SchoolYearCreateWithoutAnnProfDeptInput
}

export type ProfCreateWithoutAnnProfDeptInput = {
  id?: string
  prof1stName: string
  prof2ndName: string
  prof3rdName: string
  profMatricule: string
  specialty: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ProfCreateOrConnectWithoutannProfDeptInput = {
  where: ProfWhereUniqueInput
  create: ProfCreateWithoutAnnProfDeptInput
}

export type AnnProfSubjDistroUpdateWithWhereUniqueWithoutAnnProfDeptInput = {
  where: AnnProfSubjDistroWhereUniqueInput
  data: AnnProfSubjDistroUpdateWithoutAnnProfDeptInput
}

export type AnnProfSubjDistroUpdateManyWithWhereWithoutAnnProfDeptInput = {
  where: AnnProfSubjDistroScalarWhereInput
  data: AnnProfSubjDistroUpdateManyMutationInput
}

export type AnnProfSubjDistroScalarWhereInput = {
  AND?: XOR<AnnProfSubjDistroScalarWhereInput, Enumerable<AnnProfSubjDistroScalarWhereInput>>
  OR?: XOR<AnnProfSubjDistroScalarWhereInput, Enumerable<AnnProfSubjDistroScalarWhereInput>>
  NOT?: XOR<AnnProfSubjDistroScalarWhereInput, Enumerable<AnnProfSubjDistroScalarWhereInput>>
  id?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
  annProfDeptId?: XOR<StringFilter, string>
  subjectId?: XOR<StringFilter, string>
  classroomId?: XOR<StringFilter, string>
  scoreId?: XOR<StringFilter, string>
}

export type AnnProfSubjDistroUpsertWithWhereUniqueWithoutAnnProfDeptInput = {
  where: AnnProfSubjDistroWhereUniqueInput
  update: AnnProfSubjDistroUpdateWithoutAnnProfDeptInput
  create: AnnProfSubjDistroCreateWithoutAnnProfDeptInput
}

export type DepartmentUpdateWithoutAnnProfDeptInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  deptName?: XOR<string, StringFieldUpdateOperationsInput>
  deptCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  subject?: SubjectUpdateManyWithoutDepartmentInput
  Section?: SectionUpdateOneRequiredWithoutDepartmentInput
}

export type DepartmentUpsertWithoutAnnProfDeptInput = {
  update: DepartmentUpdateWithoutAnnProfDeptInput
  create: DepartmentCreateWithoutAnnProfDeptInput
}

export type SchoolYearUpdateWithoutAnnProfDeptInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  yearName?: XOR<string, StringFieldUpdateOperationsInput>
  yearCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annStudentClassroom?: AnnStudentClassroomUpdateManyWithoutSchoolYearInput
}

export type SchoolYearUpsertWithoutAnnProfDeptInput = {
  update: SchoolYearUpdateWithoutAnnProfDeptInput
  create: SchoolYearCreateWithoutAnnProfDeptInput
}

export type ProfUpdateWithoutAnnProfDeptInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  prof1stName?: XOR<string, StringFieldUpdateOperationsInput>
  prof2ndName?: XOR<string, StringFieldUpdateOperationsInput>
  prof3rdName?: XOR<string, StringFieldUpdateOperationsInput>
  profMatricule?: XOR<string, StringFieldUpdateOperationsInput>
  specialty?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type ProfUpsertWithoutAnnProfDeptInput = {
  update: ProfUpdateWithoutAnnProfDeptInput
  create: ProfCreateWithoutAnnProfDeptInput
}

export type AnnProfSubjDistroCreateWithoutLogbookInput = {
  id?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  AnnProfDept: AnnProfDeptCreateOneWithoutAnnProfSubjInput
  Subject: SubjectCreateOneWithoutAnnProfSubjInput
  Classroom: ClassroomCreateOneWithoutAnnProfSubjInput
  Score: ScoreCreateOneWithoutAnnProfSubjInput
}

export type AnnProfSubjDistroCreateOrConnectWithoutLogbookInput = {
  where: AnnProfSubjDistroWhereUniqueInput
  create: AnnProfSubjDistroCreateWithoutLogbookInput
}

export type AnnProfSubjDistroUpdateWithoutLogbookInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  AnnProfDept?: AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput
  Subject?: SubjectUpdateOneRequiredWithoutAnnProfSubjInput
  Classroom?: ClassroomUpdateOneRequiredWithoutAnnProfSubjInput
  Score?: ScoreUpdateOneRequiredWithoutAnnProfSubjInput
}

export type AnnProfSubjDistroUpsertWithoutLogbookInput = {
  update: AnnProfSubjDistroUpdateWithoutLogbookInput
  create: AnnProfSubjDistroCreateWithoutLogbookInput
}

export type SequenceCreateWithoutScoreInput = {
  id?: string
  seqName: string
  seqCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type SequenceCreateOrConnectWithoutScoreInput = {
  where: SequenceWhereUniqueInput
  create: SequenceCreateWithoutScoreInput
}

export type AnnStudentClassroomCreateWithoutScoreInput = {
  id?: string
  student1stName: string
  student2ndName: string
  student3rdName: string
  sex: string
  studentMatricule: string
  image: string
  createdAt?: Date | string
  updatedAt?: Date | string
  SchoolYear: SchoolYearCreateOneWithoutAnnStudentClassroomInput
  Classroom: ClassroomCreateOneWithoutAnnStudentClassroomInput
  Student: StudentCreateOneWithoutAnnStudentClassroomInput
}

export type AnnStudentClassroomCreateOrConnectWithoutScoreInput = {
  where: AnnStudentClassroomWhereUniqueInput
  create: AnnStudentClassroomCreateWithoutScoreInput
}

export type AnnProfSubjDistroCreateWithoutScoreInput = {
  id?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  AnnProfDept: AnnProfDeptCreateOneWithoutAnnProfSubjInput
  Subject: SubjectCreateOneWithoutAnnProfSubjInput
  Classroom: ClassroomCreateOneWithoutAnnProfSubjInput
  Logbook?: LogbookCreateManyWithoutAnnProfSubjDistroInput
}

export type AnnProfSubjDistroCreateOrConnectWithoutScoreInput = {
  where: AnnProfSubjDistroWhereUniqueInput
  create: AnnProfSubjDistroCreateWithoutScoreInput
}

export type SequenceUpdateWithWhereUniqueWithoutScoreInput = {
  where: SequenceWhereUniqueInput
  data: SequenceUpdateWithoutScoreInput
}

export type SequenceUpdateManyWithWhereWithoutScoreInput = {
  where: SequenceScalarWhereInput
  data: SequenceUpdateManyMutationInput
}

export type SequenceScalarWhereInput = {
  AND?: XOR<SequenceScalarWhereInput, Enumerable<SequenceScalarWhereInput>>
  OR?: XOR<SequenceScalarWhereInput, Enumerable<SequenceScalarWhereInput>>
  NOT?: XOR<SequenceScalarWhereInput, Enumerable<SequenceScalarWhereInput>>
  id?: XOR<StringFilter, string>
  seqName?: XOR<StringFilter, string>
  seqCode?: XOR<StringFilter, string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
  scoreId?: XOR<StringFilter, string>
}

export type SequenceUpsertWithWhereUniqueWithoutScoreInput = {
  where: SequenceWhereUniqueInput
  update: SequenceUpdateWithoutScoreInput
  create: SequenceCreateWithoutScoreInput
}

export type AnnStudentClassroomUpdateWithWhereUniqueWithoutScoreInput = {
  where: AnnStudentClassroomWhereUniqueInput
  data: AnnStudentClassroomUpdateWithoutScoreInput
}

export type AnnStudentClassroomUpdateManyWithWhereWithoutScoreInput = {
  where: AnnStudentClassroomScalarWhereInput
  data: AnnStudentClassroomUpdateManyMutationInput
}

export type AnnStudentClassroomUpsertWithWhereUniqueWithoutScoreInput = {
  where: AnnStudentClassroomWhereUniqueInput
  update: AnnStudentClassroomUpdateWithoutScoreInput
  create: AnnStudentClassroomCreateWithoutScoreInput
}

export type AnnProfSubjDistroUpdateWithWhereUniqueWithoutScoreInput = {
  where: AnnProfSubjDistroWhereUniqueInput
  data: AnnProfSubjDistroUpdateWithoutScoreInput
}

export type AnnProfSubjDistroUpdateManyWithWhereWithoutScoreInput = {
  where: AnnProfSubjDistroScalarWhereInput
  data: AnnProfSubjDistroUpdateManyMutationInput
}

export type AnnProfSubjDistroUpsertWithWhereUniqueWithoutScoreInput = {
  where: AnnProfSubjDistroWhereUniqueInput
  update: AnnProfSubjDistroUpdateWithoutScoreInput
  create: AnnProfSubjDistroCreateWithoutScoreInput
}

export type AnnProfDeptCreateWithoutAnnProfSubjInput = {
  id?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  Department: DepartmentCreateOneWithoutAnnProfDeptInput
  SchoolYear: SchoolYearCreateOneWithoutAnnProfDeptInput
  Prof: ProfCreateOneWithoutAnnProfDeptInput
}

export type AnnProfDeptCreateOrConnectWithoutannProfSubjInput = {
  where: AnnProfDeptWhereUniqueInput
  create: AnnProfDeptCreateWithoutAnnProfSubjInput
}

export type SubjectCreateWithoutAnnProfSubjInput = {
  id?: string
  subjectName: string
  subjectCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  Department: DepartmentCreateOneWithoutSubjectInput
}

export type SubjectCreateOrConnectWithoutannProfSubjInput = {
  where: SubjectWhereUniqueInput
  create: SubjectCreateWithoutAnnProfSubjInput
}

export type ClassroomCreateWithoutAnnProfSubjInput = {
  id?: string
  className: string
  classCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annStudentClassroom?: AnnStudentClassroomCreateManyWithoutClassroomInput
}

export type ClassroomCreateOrConnectWithoutannProfSubjInput = {
  where: ClassroomWhereUniqueInput
  create: ClassroomCreateWithoutAnnProfSubjInput
}

export type ScoreCreateWithoutAnnProfSubjInput = {
  id?: string
  marks: string
  createdAt?: Date | string
  updatedAt?: Date | string
  seq?: SequenceCreateManyWithoutScoreInput
  annStudentClass?: AnnStudentClassroomCreateManyWithoutScoreInput
}

export type ScoreCreateOrConnectWithoutannProfSubjInput = {
  where: ScoreWhereUniqueInput
  create: ScoreCreateWithoutAnnProfSubjInput
}

export type LogbookCreateWithoutAnnProfSubjDistroInput = {
  id?: string
  subjectMatter: string
  timeOfPeriod?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type LogbookCreateOrConnectWithoutAnnProfSubjDistroInput = {
  where: LogbookWhereUniqueInput
  create: LogbookCreateWithoutAnnProfSubjDistroInput
}

export type AnnProfDeptUpdateWithoutAnnProfSubjInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  Department?: DepartmentUpdateOneRequiredWithoutAnnProfDeptInput
  SchoolYear?: SchoolYearUpdateOneRequiredWithoutAnnProfDeptInput
  Prof?: ProfUpdateOneRequiredWithoutAnnProfDeptInput
}

export type AnnProfDeptUpsertWithoutAnnProfSubjInput = {
  update: AnnProfDeptUpdateWithoutAnnProfSubjInput
  create: AnnProfDeptCreateWithoutAnnProfSubjInput
}

export type SubjectUpdateWithoutAnnProfSubjInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  subjectName?: XOR<string, StringFieldUpdateOperationsInput>
  subjectCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  Department?: DepartmentUpdateOneRequiredWithoutSubjectInput
}

export type SubjectUpsertWithoutAnnProfSubjInput = {
  update: SubjectUpdateWithoutAnnProfSubjInput
  create: SubjectCreateWithoutAnnProfSubjInput
}

export type ClassroomUpdateWithoutAnnProfSubjInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  className?: XOR<string, StringFieldUpdateOperationsInput>
  classCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annStudentClassroom?: AnnStudentClassroomUpdateManyWithoutClassroomInput
}

export type ClassroomUpsertWithoutAnnProfSubjInput = {
  update: ClassroomUpdateWithoutAnnProfSubjInput
  create: ClassroomCreateWithoutAnnProfSubjInput
}

export type ScoreUpdateWithoutAnnProfSubjInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  marks?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  seq?: SequenceUpdateManyWithoutScoreInput
  annStudentClass?: AnnStudentClassroomUpdateManyWithoutScoreInput
}

export type ScoreUpsertWithoutAnnProfSubjInput = {
  update: ScoreUpdateWithoutAnnProfSubjInput
  create: ScoreCreateWithoutAnnProfSubjInput
}

export type LogbookUpdateWithWhereUniqueWithoutAnnProfSubjDistroInput = {
  where: LogbookWhereUniqueInput
  data: LogbookUpdateWithoutAnnProfSubjDistroInput
}

export type LogbookUpdateManyWithWhereWithoutAnnProfSubjDistroInput = {
  where: LogbookScalarWhereInput
  data: LogbookUpdateManyMutationInput
}

export type LogbookScalarWhereInput = {
  AND?: XOR<LogbookScalarWhereInput, Enumerable<LogbookScalarWhereInput>>
  OR?: XOR<LogbookScalarWhereInput, Enumerable<LogbookScalarWhereInput>>
  NOT?: XOR<LogbookScalarWhereInput, Enumerable<LogbookScalarWhereInput>>
  id?: XOR<StringFilter, string>
  subjectMatter?: XOR<StringFilter, string>
  timeOfPeriod?: XOR<DateTimeFilter, Date | string>
  createdAt?: XOR<DateTimeFilter, Date | string>
  updatedAt?: XOR<DateTimeFilter, Date | string>
  AnnProfSubjDistroId?: XOR<StringFilter, string>
}

export type LogbookUpsertWithWhereUniqueWithoutAnnProfSubjDistroInput = {
  where: LogbookWhereUniqueInput
  update: LogbookUpdateWithoutAnnProfSubjDistroInput
  create: LogbookCreateWithoutAnnProfSubjDistroInput
}

export type AnnProfSubjDistroCreateWithoutSubjectInput = {
  id?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  AnnProfDept: AnnProfDeptCreateOneWithoutAnnProfSubjInput
  Classroom: ClassroomCreateOneWithoutAnnProfSubjInput
  Score: ScoreCreateOneWithoutAnnProfSubjInput
  Logbook?: LogbookCreateManyWithoutAnnProfSubjDistroInput
}

export type AnnProfSubjDistroCreateOrConnectWithoutSubjectInput = {
  where: AnnProfSubjDistroWhereUniqueInput
  create: AnnProfSubjDistroCreateWithoutSubjectInput
}

export type DepartmentCreateWithoutSubjectInput = {
  id?: string
  deptName: string
  deptCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annProfDept?: AnnProfDeptCreateManyWithoutDepartmentInput
  Section: SectionCreateOneWithoutDepartmentInput
}

export type DepartmentCreateOrConnectWithoutsubjectInput = {
  where: DepartmentWhereUniqueInput
  create: DepartmentCreateWithoutSubjectInput
}

export type AnnProfSubjDistroUpdateWithWhereUniqueWithoutSubjectInput = {
  where: AnnProfSubjDistroWhereUniqueInput
  data: AnnProfSubjDistroUpdateWithoutSubjectInput
}

export type AnnProfSubjDistroUpdateManyWithWhereWithoutSubjectInput = {
  where: AnnProfSubjDistroScalarWhereInput
  data: AnnProfSubjDistroUpdateManyMutationInput
}

export type AnnProfSubjDistroUpsertWithWhereUniqueWithoutSubjectInput = {
  where: AnnProfSubjDistroWhereUniqueInput
  update: AnnProfSubjDistroUpdateWithoutSubjectInput
  create: AnnProfSubjDistroCreateWithoutSubjectInput
}

export type DepartmentUpdateWithoutSubjectInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  deptName?: XOR<string, StringFieldUpdateOperationsInput>
  deptCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annProfDept?: AnnProfDeptUpdateManyWithoutDepartmentInput
  Section?: SectionUpdateOneRequiredWithoutDepartmentInput
}

export type DepartmentUpsertWithoutSubjectInput = {
  update: DepartmentUpdateWithoutSubjectInput
  create: DepartmentCreateWithoutSubjectInput
}

export type AnnProfSubjDistroCreateWithoutClassroomInput = {
  id?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  AnnProfDept: AnnProfDeptCreateOneWithoutAnnProfSubjInput
  Subject: SubjectCreateOneWithoutAnnProfSubjInput
  Score: ScoreCreateOneWithoutAnnProfSubjInput
  Logbook?: LogbookCreateManyWithoutAnnProfSubjDistroInput
}

export type AnnProfSubjDistroCreateOrConnectWithoutClassroomInput = {
  where: AnnProfSubjDistroWhereUniqueInput
  create: AnnProfSubjDistroCreateWithoutClassroomInput
}

export type AnnStudentClassroomCreateWithoutClassroomInput = {
  id?: string
  student1stName: string
  student2ndName: string
  student3rdName: string
  sex: string
  studentMatricule: string
  image: string
  createdAt?: Date | string
  updatedAt?: Date | string
  SchoolYear: SchoolYearCreateOneWithoutAnnStudentClassroomInput
  Student: StudentCreateOneWithoutAnnStudentClassroomInput
  Score: ScoreCreateOneWithoutAnnStudentClassInput
}

export type AnnStudentClassroomCreateOrConnectWithoutClassroomInput = {
  where: AnnStudentClassroomWhereUniqueInput
  create: AnnStudentClassroomCreateWithoutClassroomInput
}

export type AnnProfSubjDistroUpdateWithWhereUniqueWithoutClassroomInput = {
  where: AnnProfSubjDistroWhereUniqueInput
  data: AnnProfSubjDistroUpdateWithoutClassroomInput
}

export type AnnProfSubjDistroUpdateManyWithWhereWithoutClassroomInput = {
  where: AnnProfSubjDistroScalarWhereInput
  data: AnnProfSubjDistroUpdateManyMutationInput
}

export type AnnProfSubjDistroUpsertWithWhereUniqueWithoutClassroomInput = {
  where: AnnProfSubjDistroWhereUniqueInput
  update: AnnProfSubjDistroUpdateWithoutClassroomInput
  create: AnnProfSubjDistroCreateWithoutClassroomInput
}

export type AnnStudentClassroomUpdateWithWhereUniqueWithoutClassroomInput = {
  where: AnnStudentClassroomWhereUniqueInput
  data: AnnStudentClassroomUpdateWithoutClassroomInput
}

export type AnnStudentClassroomUpdateManyWithWhereWithoutClassroomInput = {
  where: AnnStudentClassroomScalarWhereInput
  data: AnnStudentClassroomUpdateManyMutationInput
}

export type AnnStudentClassroomUpsertWithWhereUniqueWithoutClassroomInput = {
  where: AnnStudentClassroomWhereUniqueInput
  update: AnnStudentClassroomUpdateWithoutClassroomInput
  create: AnnStudentClassroomCreateWithoutClassroomInput
}

export type AnnStudentClassroomCreateWithoutStudentInput = {
  id?: string
  student1stName: string
  student2ndName: string
  student3rdName: string
  sex: string
  studentMatricule: string
  image: string
  createdAt?: Date | string
  updatedAt?: Date | string
  SchoolYear: SchoolYearCreateOneWithoutAnnStudentClassroomInput
  Classroom: ClassroomCreateOneWithoutAnnStudentClassroomInput
  Score: ScoreCreateOneWithoutAnnStudentClassInput
}

export type AnnStudentClassroomCreateOrConnectWithoutStudentInput = {
  where: AnnStudentClassroomWhereUniqueInput
  create: AnnStudentClassroomCreateWithoutStudentInput
}

export type AnnStudentClassroomUpdateWithWhereUniqueWithoutStudentInput = {
  where: AnnStudentClassroomWhereUniqueInput
  data: AnnStudentClassroomUpdateWithoutStudentInput
}

export type AnnStudentClassroomUpdateManyWithWhereWithoutStudentInput = {
  where: AnnStudentClassroomScalarWhereInput
  data: AnnStudentClassroomUpdateManyMutationInput
}

export type AnnStudentClassroomUpsertWithWhereUniqueWithoutStudentInput = {
  where: AnnStudentClassroomWhereUniqueInput
  update: AnnStudentClassroomUpdateWithoutStudentInput
  create: AnnStudentClassroomCreateWithoutStudentInput
}

export type SchoolYearCreateWithoutAnnStudentClassroomInput = {
  id?: string
  yearName: string
  yearCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annProfDept?: AnnProfDeptCreateManyWithoutSchoolYearInput
}

export type SchoolYearCreateOrConnectWithoutannStudentClassroomInput = {
  where: SchoolYearWhereUniqueInput
  create: SchoolYearCreateWithoutAnnStudentClassroomInput
}

export type ClassroomCreateWithoutAnnStudentClassroomInput = {
  id?: string
  className: string
  classCode: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annProfSubj?: AnnProfSubjDistroCreateManyWithoutClassroomInput
}

export type ClassroomCreateOrConnectWithoutannStudentClassroomInput = {
  where: ClassroomWhereUniqueInput
  create: ClassroomCreateWithoutAnnStudentClassroomInput
}

export type StudentCreateWithoutAnnStudentClassroomInput = {
  id?: string
  student1stName: string
  student2ndName: string
  student3rdName: string
  sex: string
  studentMatricule: string
  image: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type StudentCreateOrConnectWithoutannStudentClassroomInput = {
  where: StudentWhereUniqueInput
  create: StudentCreateWithoutAnnStudentClassroomInput
}

export type ScoreCreateWithoutAnnStudentClassInput = {
  id?: string
  marks: string
  createdAt?: Date | string
  updatedAt?: Date | string
  seq?: SequenceCreateManyWithoutScoreInput
  annProfSubj?: AnnProfSubjDistroCreateManyWithoutScoreInput
}

export type ScoreCreateOrConnectWithoutannStudentClassInput = {
  where: ScoreWhereUniqueInput
  create: ScoreCreateWithoutAnnStudentClassInput
}

export type SchoolYearUpdateWithoutAnnStudentClassroomInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  yearName?: XOR<string, StringFieldUpdateOperationsInput>
  yearCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annProfDept?: AnnProfDeptUpdateManyWithoutSchoolYearInput
}

export type SchoolYearUpsertWithoutAnnStudentClassroomInput = {
  update: SchoolYearUpdateWithoutAnnStudentClassroomInput
  create: SchoolYearCreateWithoutAnnStudentClassroomInput
}

export type ClassroomUpdateWithoutAnnStudentClassroomInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  className?: XOR<string, StringFieldUpdateOperationsInput>
  classCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annProfSubj?: AnnProfSubjDistroUpdateManyWithoutClassroomInput
}

export type ClassroomUpsertWithoutAnnStudentClassroomInput = {
  update: ClassroomUpdateWithoutAnnStudentClassroomInput
  create: ClassroomCreateWithoutAnnStudentClassroomInput
}

export type StudentUpdateWithoutAnnStudentClassroomInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  student1stName?: XOR<string, StringFieldUpdateOperationsInput>
  student2ndName?: XOR<string, StringFieldUpdateOperationsInput>
  student3rdName?: XOR<string, StringFieldUpdateOperationsInput>
  sex?: XOR<string, StringFieldUpdateOperationsInput>
  studentMatricule?: XOR<string, StringFieldUpdateOperationsInput>
  image?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type StudentUpsertWithoutAnnStudentClassroomInput = {
  update: StudentUpdateWithoutAnnStudentClassroomInput
  create: StudentCreateWithoutAnnStudentClassroomInput
}

export type ScoreUpdateWithoutAnnStudentClassInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  marks?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  seq?: SequenceUpdateManyWithoutScoreInput
  annProfSubj?: AnnProfSubjDistroUpdateManyWithoutScoreInput
}

export type ScoreUpsertWithoutAnnStudentClassInput = {
  update: ScoreUpdateWithoutAnnStudentClassInput
  create: ScoreCreateWithoutAnnStudentClassInput
}

export type AnnProfDeptCreateWithoutProfInput = {
  id?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  annProfSubj?: AnnProfSubjDistroCreateManyWithoutAnnProfDeptInput
  Department: DepartmentCreateOneWithoutAnnProfDeptInput
  SchoolYear: SchoolYearCreateOneWithoutAnnProfDeptInput
}

export type AnnProfDeptCreateOrConnectWithoutProfInput = {
  where: AnnProfDeptWhereUniqueInput
  create: AnnProfDeptCreateWithoutProfInput
}

export type AnnProfDeptUpdateWithWhereUniqueWithoutProfInput = {
  where: AnnProfDeptWhereUniqueInput
  data: AnnProfDeptUpdateWithoutProfInput
}

export type AnnProfDeptUpdateManyWithWhereWithoutProfInput = {
  where: AnnProfDeptScalarWhereInput
  data: AnnProfDeptUpdateManyMutationInput
}

export type AnnProfDeptUpsertWithWhereUniqueWithoutProfInput = {
  where: AnnProfDeptWhereUniqueInput
  update: AnnProfDeptUpdateWithoutProfInput
  create: AnnProfDeptCreateWithoutProfInput
}

export type DivisionUpdateWithoutRegionInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  divisionName?: XOR<string, StringFieldUpdateOperationsInput>
  divisionCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  subdiv?: SubdivisionUpdateManyWithoutDivisionInput
}

export type SubdivisionUpdateWithoutDivisionInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  subdivName?: XOR<string, StringFieldUpdateOperationsInput>
  subdivCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  town?: TownUpdateManyWithoutSubdivisionInput
}

export type TownUpdateWithoutSubdivisionInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  townName?: XOR<string, StringFieldUpdateOperationsInput>
  townCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  school?: SchoolUpdateManyWithoutTownInput
}

export type SchoolUpdateWithoutTownInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  schoolName?: XOR<string, StringFieldUpdateOperationsInput>
  schoolNumber?: XOR<string, StringFieldUpdateOperationsInput>
  schoolCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  section?: SectionUpdateManyWithoutSchoolInput
}

export type SectionUpdateWithoutSchoolInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  sectionName?: XOR<string, StringFieldUpdateOperationsInput>
  sectionCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  department?: DepartmentUpdateManyWithoutSectionInput
}

export type DepartmentUpdateWithoutSectionInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  deptName?: XOR<string, StringFieldUpdateOperationsInput>
  deptCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annProfDept?: AnnProfDeptUpdateManyWithoutDepartmentInput
  subject?: SubjectUpdateManyWithoutDepartmentInput
}

export type AnnProfDeptUpdateWithoutDepartmentInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annProfSubj?: AnnProfSubjDistroUpdateManyWithoutAnnProfDeptInput
  SchoolYear?: SchoolYearUpdateOneRequiredWithoutAnnProfDeptInput
  Prof?: ProfUpdateOneRequiredWithoutAnnProfDeptInput
}

export type SubjectUpdateWithoutDepartmentInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  subjectName?: XOR<string, StringFieldUpdateOperationsInput>
  subjectCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annProfSubj?: AnnProfSubjDistroUpdateManyWithoutSubjectInput
}

export type AnnStudentClassroomUpdateWithoutSchoolYearInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  student1stName?: XOR<string, StringFieldUpdateOperationsInput>
  student2ndName?: XOR<string, StringFieldUpdateOperationsInput>
  student3rdName?: XOR<string, StringFieldUpdateOperationsInput>
  sex?: XOR<string, StringFieldUpdateOperationsInput>
  studentMatricule?: XOR<string, StringFieldUpdateOperationsInput>
  image?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  Classroom?: ClassroomUpdateOneRequiredWithoutAnnStudentClassroomInput
  Student?: StudentUpdateOneRequiredWithoutAnnStudentClassroomInput
  Score?: ScoreUpdateOneRequiredWithoutAnnStudentClassInput
}

export type AnnProfDeptUpdateWithoutSchoolYearInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annProfSubj?: AnnProfSubjDistroUpdateManyWithoutAnnProfDeptInput
  Department?: DepartmentUpdateOneRequiredWithoutAnnProfDeptInput
  Prof?: ProfUpdateOneRequiredWithoutAnnProfDeptInput
}

export type AnnProfSubjDistroUpdateWithoutAnnProfDeptInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  Subject?: SubjectUpdateOneRequiredWithoutAnnProfSubjInput
  Classroom?: ClassroomUpdateOneRequiredWithoutAnnProfSubjInput
  Score?: ScoreUpdateOneRequiredWithoutAnnProfSubjInput
  Logbook?: LogbookUpdateManyWithoutAnnProfSubjDistroInput
}

export type SequenceUpdateWithoutScoreInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  seqName?: XOR<string, StringFieldUpdateOperationsInput>
  seqCode?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type AnnStudentClassroomUpdateWithoutScoreInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  student1stName?: XOR<string, StringFieldUpdateOperationsInput>
  student2ndName?: XOR<string, StringFieldUpdateOperationsInput>
  student3rdName?: XOR<string, StringFieldUpdateOperationsInput>
  sex?: XOR<string, StringFieldUpdateOperationsInput>
  studentMatricule?: XOR<string, StringFieldUpdateOperationsInput>
  image?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  SchoolYear?: SchoolYearUpdateOneRequiredWithoutAnnStudentClassroomInput
  Classroom?: ClassroomUpdateOneRequiredWithoutAnnStudentClassroomInput
  Student?: StudentUpdateOneRequiredWithoutAnnStudentClassroomInput
}

export type AnnProfSubjDistroUpdateWithoutScoreInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  AnnProfDept?: AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput
  Subject?: SubjectUpdateOneRequiredWithoutAnnProfSubjInput
  Classroom?: ClassroomUpdateOneRequiredWithoutAnnProfSubjInput
  Logbook?: LogbookUpdateManyWithoutAnnProfSubjDistroInput
}

export type LogbookUpdateWithoutAnnProfSubjDistroInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  subjectMatter?: XOR<string, StringFieldUpdateOperationsInput>
  timeOfPeriod?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
}

export type AnnProfSubjDistroUpdateWithoutSubjectInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  AnnProfDept?: AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput
  Classroom?: ClassroomUpdateOneRequiredWithoutAnnProfSubjInput
  Score?: ScoreUpdateOneRequiredWithoutAnnProfSubjInput
  Logbook?: LogbookUpdateManyWithoutAnnProfSubjDistroInput
}

export type AnnProfSubjDistroUpdateWithoutClassroomInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  AnnProfDept?: AnnProfDeptUpdateOneRequiredWithoutAnnProfSubjInput
  Subject?: SubjectUpdateOneRequiredWithoutAnnProfSubjInput
  Score?: ScoreUpdateOneRequiredWithoutAnnProfSubjInput
  Logbook?: LogbookUpdateManyWithoutAnnProfSubjDistroInput
}

export type AnnStudentClassroomUpdateWithoutClassroomInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  student1stName?: XOR<string, StringFieldUpdateOperationsInput>
  student2ndName?: XOR<string, StringFieldUpdateOperationsInput>
  student3rdName?: XOR<string, StringFieldUpdateOperationsInput>
  sex?: XOR<string, StringFieldUpdateOperationsInput>
  studentMatricule?: XOR<string, StringFieldUpdateOperationsInput>
  image?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  SchoolYear?: SchoolYearUpdateOneRequiredWithoutAnnStudentClassroomInput
  Student?: StudentUpdateOneRequiredWithoutAnnStudentClassroomInput
  Score?: ScoreUpdateOneRequiredWithoutAnnStudentClassInput
}

export type AnnStudentClassroomUpdateWithoutStudentInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  student1stName?: XOR<string, StringFieldUpdateOperationsInput>
  student2ndName?: XOR<string, StringFieldUpdateOperationsInput>
  student3rdName?: XOR<string, StringFieldUpdateOperationsInput>
  sex?: XOR<string, StringFieldUpdateOperationsInput>
  studentMatricule?: XOR<string, StringFieldUpdateOperationsInput>
  image?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  SchoolYear?: SchoolYearUpdateOneRequiredWithoutAnnStudentClassroomInput
  Classroom?: ClassroomUpdateOneRequiredWithoutAnnStudentClassroomInput
  Score?: ScoreUpdateOneRequiredWithoutAnnStudentClassInput
}

export type AnnProfDeptUpdateWithoutProfInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
  annProfSubj?: AnnProfSubjDistroUpdateManyWithoutAnnProfDeptInput
  Department?: DepartmentUpdateOneRequiredWithoutAnnProfDeptInput
  SchoolYear?: SchoolYearUpdateOneRequiredWithoutAnnProfDeptInput
}

/**
 * Batch Payload for updateMany & deleteMany
 */

export type BatchPayload = {
  count: number
}

/**
 * DMMF
 */
export declare const dmmf: DMMF.Document;
export {};
