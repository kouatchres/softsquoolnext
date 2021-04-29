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
   * `prisma.town`: Exposes CRUD operations for the **Town** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Towns
    * const towns = await prisma.town.findMany()
    * ```
    */
  get town(): TownDelegate;
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
  Town: 'Town'
};

export declare type ModelName = (typeof ModelName)[keyof typeof ModelName]


export declare const UserDistinctFieldEnum: {
  id: 'id',
  name: 'name',
  email: 'email',
  image: 'image'
};

export declare type UserDistinctFieldEnum = (typeof UserDistinctFieldEnum)[keyof typeof UserDistinctFieldEnum]


export declare const RegionDistinctFieldEnum: {
  id: 'id',
  regName: 'regName',
  regCode: 'regCode'
};

export declare type RegionDistinctFieldEnum = (typeof RegionDistinctFieldEnum)[keyof typeof RegionDistinctFieldEnum]


export declare const DivisionDistinctFieldEnum: {
  id: 'id',
  divisionName: 'divisionName',
  divisionCode: 'divisionCode',
  regionId: 'regionId'
};

export declare type DivisionDistinctFieldEnum = (typeof DivisionDistinctFieldEnum)[keyof typeof DivisionDistinctFieldEnum]


export declare const TownDistinctFieldEnum: {
  id: 'id',
  townName: 'townName',
  townCode: 'townCode',
  divisionId: 'divisionId'
};

export declare type TownDistinctFieldEnum = (typeof TownDistinctFieldEnum)[keyof typeof TownDistinctFieldEnum]


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
  regionId: string | null
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
  town?: boolean | FindManyTownArgs
  Region?: boolean | RegionArgs
  regionId?: boolean
}

export type DivisionInclude = {
  town?: boolean | FindManyTownArgs
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
      P extends 'town'
      ? Array<TownGetPayload<S['include'][P]>> :
      P extends 'Region'
      ? RegionGetPayload<S['include'][P]> | null : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Division ? Division[P]
: 
      P extends 'town'
      ? Array<TownGetPayload<S['select'][P]>> :
      P extends 'Region'
      ? RegionGetPayload<S['select'][P]> | null : never
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

  town<T extends FindManyTownArgs = {}>(args?: Subset<T, FindManyTownArgs>): CheckSelect<T, Promise<Array<Town>>, Promise<Array<TownGetPayload<T>>>>;

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
 * Model Town
 */

export type Town = {
  id: string
  townName: string
  townCode: string
  divisionId: string | null
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
  Division?: boolean | DivisionArgs
  divisionId?: boolean
}

export type TownInclude = {
  Division?: boolean | DivisionArgs
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
      P extends 'Division'
      ? DivisionGetPayload<S['include'][P]> | null : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Town ? Town[P]
: 
      P extends 'Division'
      ? DivisionGetPayload<S['select'][P]> | null : never
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
}

export type UserOrderByInput = {
  id?: SortOrder
  name?: SortOrder
  email?: SortOrder
  image?: SortOrder
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
}

export type RegionOrderByInput = {
  id?: SortOrder
  regName?: SortOrder
  regCode?: SortOrder
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
  town?: TownListRelationFilter
  Region?: RegionRelationFilter | RegionWhereInput | null
  regionId?: StringNullableFilter | string | null
}

export type DivisionOrderByInput = {
  id?: SortOrder
  divisionName?: SortOrder
  divisionCode?: SortOrder
  regionId?: SortOrder
}

export type DivisionWhereUniqueInput = {
  id?: string
}

export type TownWhereInput = {
  AND?: XOR<TownWhereInput, Enumerable<TownWhereInput>>
  OR?: XOR<TownWhereInput, Enumerable<TownWhereInput>>
  NOT?: XOR<TownWhereInput, Enumerable<TownWhereInput>>
  id?: XOR<StringFilter, string>
  townName?: XOR<StringFilter, string>
  townCode?: XOR<StringFilter, string>
  Division?: DivisionRelationFilter | DivisionWhereInput | null
  divisionId?: StringNullableFilter | string | null
}

export type TownOrderByInput = {
  id?: SortOrder
  townName?: SortOrder
  townCode?: SortOrder
  divisionId?: SortOrder
}

export type TownWhereUniqueInput = {
  id?: string
}

export type UserCreateInput = {
  id?: string
  name: string
  email: string
  image: string
}

export type UserUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  name?: XOR<string, StringFieldUpdateOperationsInput>
  email?: XOR<string, StringFieldUpdateOperationsInput>
  image?: XOR<string, StringFieldUpdateOperationsInput>
}

export type UserUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  name?: XOR<string, StringFieldUpdateOperationsInput>
  email?: XOR<string, StringFieldUpdateOperationsInput>
  image?: XOR<string, StringFieldUpdateOperationsInput>
}

export type RegionCreateInput = {
  id?: string
  regName: string
  regCode: string
  division?: DivisionCreateManyWithoutRegionInput
}

export type RegionUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  regName?: XOR<string, StringFieldUpdateOperationsInput>
  regCode?: XOR<string, StringFieldUpdateOperationsInput>
  division?: DivisionUpdateManyWithoutRegionInput
}

export type RegionUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  regName?: XOR<string, StringFieldUpdateOperationsInput>
  regCode?: XOR<string, StringFieldUpdateOperationsInput>
}

export type DivisionCreateInput = {
  id?: string
  divisionName: string
  divisionCode: string
  town?: TownCreateManyWithoutDivisionInput
  Region?: RegionCreateOneWithoutDivisionInput
}

export type DivisionUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  divisionName?: XOR<string, StringFieldUpdateOperationsInput>
  divisionCode?: XOR<string, StringFieldUpdateOperationsInput>
  town?: TownUpdateManyWithoutDivisionInput
  Region?: RegionUpdateOneWithoutDivisionInput
}

export type DivisionUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  divisionName?: XOR<string, StringFieldUpdateOperationsInput>
  divisionCode?: XOR<string, StringFieldUpdateOperationsInput>
}

export type TownCreateInput = {
  id?: string
  townName: string
  townCode: string
  Division?: DivisionCreateOneWithoutTownInput
}

export type TownUpdateInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  townName?: XOR<string, StringFieldUpdateOperationsInput>
  townCode?: XOR<string, StringFieldUpdateOperationsInput>
  Division?: DivisionUpdateOneWithoutTownInput
}

export type TownUpdateManyMutationInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  townName?: XOR<string, StringFieldUpdateOperationsInput>
  townCode?: XOR<string, StringFieldUpdateOperationsInput>
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

export type DivisionListRelationFilter = {
  every?: DivisionWhereInput
  some?: DivisionWhereInput
  none?: DivisionWhereInput
}

export type TownListRelationFilter = {
  every?: TownWhereInput
  some?: TownWhereInput
  none?: TownWhereInput
}

export type RegionRelationFilter = {
  is?: XOR<RegionWhereInput, null>
  isNot?: XOR<RegionWhereInput, null>
}

export type StringNullableFilter = {
  equals?: XOR<string, null>
  in?: XOR<Enumerable<string>, null>
  notIn?: XOR<Enumerable<string>, null>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: string | NestedStringNullableFilter | null
}

export type DivisionRelationFilter = {
  is?: XOR<DivisionWhereInput, null>
  isNot?: XOR<DivisionWhereInput, null>
}

export type StringFieldUpdateOperationsInput = {
  set?: string
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

export type TownCreateManyWithoutDivisionInput = {
  create?: XOR<TownCreateWithoutDivisionInput, Enumerable<TownCreateWithoutDivisionInput>>
  connect?: XOR<TownWhereUniqueInput, Enumerable<TownWhereUniqueInput>>
  connectOrCreate?: XOR<TownCreateOrConnectWithoutDivisionInput, Enumerable<TownCreateOrConnectWithoutDivisionInput>>
}

export type RegionCreateOneWithoutDivisionInput = {
  create?: RegionCreateWithoutDivisionInput
  connect?: RegionWhereUniqueInput
  connectOrCreate?: RegionCreateOrConnectWithoutdivisionInput
}

export type TownUpdateManyWithoutDivisionInput = {
  create?: XOR<TownCreateWithoutDivisionInput, Enumerable<TownCreateWithoutDivisionInput>>
  connect?: XOR<TownWhereUniqueInput, Enumerable<TownWhereUniqueInput>>
  set?: XOR<TownWhereUniqueInput, Enumerable<TownWhereUniqueInput>>
  disconnect?: XOR<TownWhereUniqueInput, Enumerable<TownWhereUniqueInput>>
  delete?: XOR<TownWhereUniqueInput, Enumerable<TownWhereUniqueInput>>
  update?: XOR<TownUpdateWithWhereUniqueWithoutDivisionInput, Enumerable<TownUpdateWithWhereUniqueWithoutDivisionInput>>
  updateMany?: XOR<TownUpdateManyWithWhereWithoutDivisionInput, Enumerable<TownUpdateManyWithWhereWithoutDivisionInput>>
  deleteMany?: XOR<TownScalarWhereInput, Enumerable<TownScalarWhereInput>>
  upsert?: XOR<TownUpsertWithWhereUniqueWithoutDivisionInput, Enumerable<TownUpsertWithWhereUniqueWithoutDivisionInput>>
  connectOrCreate?: XOR<TownCreateOrConnectWithoutDivisionInput, Enumerable<TownCreateOrConnectWithoutDivisionInput>>
}

export type RegionUpdateOneWithoutDivisionInput = {
  create?: RegionCreateWithoutDivisionInput
  connect?: RegionWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: RegionUpdateWithoutDivisionInput
  upsert?: RegionUpsertWithoutDivisionInput
  connectOrCreate?: RegionCreateOrConnectWithoutdivisionInput
}

export type DivisionCreateOneWithoutTownInput = {
  create?: DivisionCreateWithoutTownInput
  connect?: DivisionWhereUniqueInput
  connectOrCreate?: DivisionCreateOrConnectWithouttownInput
}

export type DivisionUpdateOneWithoutTownInput = {
  create?: DivisionCreateWithoutTownInput
  connect?: DivisionWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: DivisionUpdateWithoutTownInput
  upsert?: DivisionUpsertWithoutTownInput
  connectOrCreate?: DivisionCreateOrConnectWithouttownInput
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

export type NestedStringNullableFilter = {
  equals?: XOR<string, null>
  in?: XOR<Enumerable<string>, null>
  notIn?: XOR<Enumerable<string>, null>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: string | NestedStringNullableFilter | null
}

export type DivisionCreateWithoutRegionInput = {
  id?: string
  divisionName: string
  divisionCode: string
  town?: TownCreateManyWithoutDivisionInput
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
  regionId?: StringNullableFilter | string | null
}

export type DivisionUpsertWithWhereUniqueWithoutRegionInput = {
  where: DivisionWhereUniqueInput
  update: DivisionUpdateWithoutRegionInput
  create: DivisionCreateWithoutRegionInput
}

export type TownCreateWithoutDivisionInput = {
  id?: string
  townName: string
  townCode: string
}

export type TownCreateOrConnectWithoutDivisionInput = {
  where: TownWhereUniqueInput
  create: TownCreateWithoutDivisionInput
}

export type RegionCreateWithoutDivisionInput = {
  id?: string
  regName: string
  regCode: string
}

export type RegionCreateOrConnectWithoutdivisionInput = {
  where: RegionWhereUniqueInput
  create: RegionCreateWithoutDivisionInput
}

export type TownUpdateWithWhereUniqueWithoutDivisionInput = {
  where: TownWhereUniqueInput
  data: TownUpdateWithoutDivisionInput
}

export type TownUpdateManyWithWhereWithoutDivisionInput = {
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
  divisionId?: StringNullableFilter | string | null
}

export type TownUpsertWithWhereUniqueWithoutDivisionInput = {
  where: TownWhereUniqueInput
  update: TownUpdateWithoutDivisionInput
  create: TownCreateWithoutDivisionInput
}

export type RegionUpdateWithoutDivisionInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  regName?: XOR<string, StringFieldUpdateOperationsInput>
  regCode?: XOR<string, StringFieldUpdateOperationsInput>
}

export type RegionUpsertWithoutDivisionInput = {
  update: RegionUpdateWithoutDivisionInput
  create: RegionCreateWithoutDivisionInput
}

export type DivisionCreateWithoutTownInput = {
  id?: string
  divisionName: string
  divisionCode: string
  Region?: RegionCreateOneWithoutDivisionInput
}

export type DivisionCreateOrConnectWithouttownInput = {
  where: DivisionWhereUniqueInput
  create: DivisionCreateWithoutTownInput
}

export type DivisionUpdateWithoutTownInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  divisionName?: XOR<string, StringFieldUpdateOperationsInput>
  divisionCode?: XOR<string, StringFieldUpdateOperationsInput>
  Region?: RegionUpdateOneWithoutDivisionInput
}

export type DivisionUpsertWithoutTownInput = {
  update: DivisionUpdateWithoutTownInput
  create: DivisionCreateWithoutTownInput
}

export type DivisionUpdateWithoutRegionInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  divisionName?: XOR<string, StringFieldUpdateOperationsInput>
  divisionCode?: XOR<string, StringFieldUpdateOperationsInput>
  town?: TownUpdateManyWithoutDivisionInput
}

export type TownUpdateWithoutDivisionInput = {
  id?: XOR<string, StringFieldUpdateOperationsInput>
  townName?: XOR<string, StringFieldUpdateOperationsInput>
  townCode?: XOR<string, StringFieldUpdateOperationsInput>
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
