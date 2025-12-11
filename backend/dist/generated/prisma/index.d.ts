
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Preference
 * 
 */
export type Preference = $Result.DefaultSelection<Prisma.$PreferencePayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Requirement
 * 
 */
export type Requirement = $Result.DefaultSelection<Prisma.$RequirementPayload>
/**
 * Model RoomListing
 * 
 */
export type RoomListing = $Result.DefaultSelection<Prisma.$RoomListingPayload>
/**
 * Model TeamRequest
 * 
 */
export type TeamRequest = $Result.DefaultSelection<Prisma.$TeamRequestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
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
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preference`: Exposes CRUD operations for the **Preference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preferences
    * const preferences = await prisma.preference.findMany()
    * ```
    */
  get preference(): Prisma.PreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requirement`: Exposes CRUD operations for the **Requirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requirements
    * const requirements = await prisma.requirement.findMany()
    * ```
    */
  get requirement(): Prisma.RequirementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomListing`: Exposes CRUD operations for the **RoomListing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomListings
    * const roomListings = await prisma.roomListing.findMany()
    * ```
    */
  get roomListing(): Prisma.RoomListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamRequest`: Exposes CRUD operations for the **TeamRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamRequests
    * const teamRequests = await prisma.teamRequest.findMany()
    * ```
    */
  get teamRequest(): Prisma.TeamRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Preference: 'Preference',
    Property: 'Property',
    Requirement: 'Requirement',
    RoomListing: 'RoomListing',
    TeamRequest: 'TeamRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "preference" | "property" | "requirement" | "roomListing" | "teamRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Preference: {
        payload: Prisma.$PreferencePayload<ExtArgs>
        fields: Prisma.PreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          findFirst: {
            args: Prisma.PreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          findMany: {
            args: Prisma.PreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>[]
          }
          create: {
            args: Prisma.PreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          createMany: {
            args: Prisma.PreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>[]
          }
          delete: {
            args: Prisma.PreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          update: {
            args: Prisma.PreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          deleteMany: {
            args: Prisma.PreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>[]
          }
          upsert: {
            args: Prisma.PreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          aggregate: {
            args: Prisma.PreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreference>
          }
          groupBy: {
            args: Prisma.PreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<PreferenceCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Requirement: {
        payload: Prisma.$RequirementPayload<ExtArgs>
        fields: Prisma.RequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequirementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequirementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>
          }
          findFirst: {
            args: Prisma.RequirementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequirementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>
          }
          findMany: {
            args: Prisma.RequirementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>[]
          }
          create: {
            args: Prisma.RequirementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>
          }
          createMany: {
            args: Prisma.RequirementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequirementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>[]
          }
          delete: {
            args: Prisma.RequirementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>
          }
          update: {
            args: Prisma.RequirementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>
          }
          deleteMany: {
            args: Prisma.RequirementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequirementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequirementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>[]
          }
          upsert: {
            args: Prisma.RequirementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementPayload>
          }
          aggregate: {
            args: Prisma.RequirementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequirement>
          }
          groupBy: {
            args: Prisma.RequirementGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequirementGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequirementCountArgs<ExtArgs>
            result: $Utils.Optional<RequirementCountAggregateOutputType> | number
          }
        }
      }
      RoomListing: {
        payload: Prisma.$RoomListingPayload<ExtArgs>
        fields: Prisma.RoomListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomListingPayload>
          }
          findFirst: {
            args: Prisma.RoomListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomListingPayload>
          }
          findMany: {
            args: Prisma.RoomListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomListingPayload>[]
          }
          create: {
            args: Prisma.RoomListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomListingPayload>
          }
          createMany: {
            args: Prisma.RoomListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomListingPayload>[]
          }
          delete: {
            args: Prisma.RoomListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomListingPayload>
          }
          update: {
            args: Prisma.RoomListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomListingPayload>
          }
          deleteMany: {
            args: Prisma.RoomListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomListingPayload>[]
          }
          upsert: {
            args: Prisma.RoomListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomListingPayload>
          }
          aggregate: {
            args: Prisma.RoomListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomListing>
          }
          groupBy: {
            args: Prisma.RoomListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomListingCountArgs<ExtArgs>
            result: $Utils.Optional<RoomListingCountAggregateOutputType> | number
          }
        }
      }
      TeamRequest: {
        payload: Prisma.$TeamRequestPayload<ExtArgs>
        fields: Prisma.TeamRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRequestPayload>
          }
          findFirst: {
            args: Prisma.TeamRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRequestPayload>
          }
          findMany: {
            args: Prisma.TeamRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRequestPayload>[]
          }
          create: {
            args: Prisma.TeamRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRequestPayload>
          }
          createMany: {
            args: Prisma.TeamRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRequestPayload>[]
          }
          delete: {
            args: Prisma.TeamRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRequestPayload>
          }
          update: {
            args: Prisma.TeamRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRequestPayload>
          }
          deleteMany: {
            args: Prisma.TeamRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRequestPayload>[]
          }
          upsert: {
            args: Prisma.TeamRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRequestPayload>
          }
          aggregate: {
            args: Prisma.TeamRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamRequest>
          }
          groupBy: {
            args: Prisma.TeamRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamRequestCountArgs<ExtArgs>
            result: $Utils.Optional<TeamRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    preference?: PreferenceOmit
    property?: PropertyOmit
    requirement?: RequirementOmit
    roomListing?: RoomListingOmit
    teamRequest?: TeamRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    requirements: number
    roomListings: number
    sentRequests: number
    receivedRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requirements?: boolean | UserCountOutputTypeCountRequirementsArgs
    roomListings?: boolean | UserCountOutputTypeCountRoomListingsArgs
    sentRequests?: boolean | UserCountOutputTypeCountSentRequestsArgs
    receivedRequests?: boolean | UserCountOutputTypeCountReceivedRequestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequirementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomListingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    requirements?: boolean | User$requirementsArgs<ExtArgs>
    roomListings?: boolean | User$roomListingsArgs<ExtArgs>
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    requirements?: boolean | User$requirementsArgs<ExtArgs>
    roomListings?: boolean | User$roomListingsArgs<ExtArgs>
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      preferences: Prisma.$PreferencePayload<ExtArgs> | null
      requirements: Prisma.$RequirementPayload<ExtArgs>[]
      roomListings: Prisma.$RoomListingPayload<ExtArgs>[]
      sentRequests: Prisma.$TeamRequestPayload<ExtArgs>[]
      receivedRequests: Prisma.$TeamRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    requirements<T extends User$requirementsArgs<ExtArgs> = {}>(args?: Subset<T, User$requirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomListings<T extends User$roomListingsArgs<ExtArgs> = {}>(args?: Subset<T, User$roomListingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentRequests<T extends User$sentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedRequests<T extends User$receivedRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    where?: PreferenceWhereInput
  }

  /**
   * User.requirements
   */
  export type User$requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirement
     */
    omit?: RequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    where?: RequirementWhereInput
    orderBy?: RequirementOrderByWithRelationInput | RequirementOrderByWithRelationInput[]
    cursor?: RequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequirementScalarFieldEnum | RequirementScalarFieldEnum[]
  }

  /**
   * User.roomListings
   */
  export type User$roomListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomListing
     */
    select?: RoomListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomListing
     */
    omit?: RoomListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomListingInclude<ExtArgs> | null
    where?: RoomListingWhereInput
    orderBy?: RoomListingOrderByWithRelationInput | RoomListingOrderByWithRelationInput[]
    cursor?: RoomListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomListingScalarFieldEnum | RoomListingScalarFieldEnum[]
  }

  /**
   * User.sentRequests
   */
  export type User$sentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRequest
     */
    select?: TeamRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRequest
     */
    omit?: TeamRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRequestInclude<ExtArgs> | null
    where?: TeamRequestWhereInput
    orderBy?: TeamRequestOrderByWithRelationInput | TeamRequestOrderByWithRelationInput[]
    cursor?: TeamRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamRequestScalarFieldEnum | TeamRequestScalarFieldEnum[]
  }

  /**
   * User.receivedRequests
   */
  export type User$receivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRequest
     */
    select?: TeamRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRequest
     */
    omit?: TeamRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRequestInclude<ExtArgs> | null
    where?: TeamRequestWhereInput
    orderBy?: TeamRequestOrderByWithRelationInput | TeamRequestOrderByWithRelationInput[]
    cursor?: TeamRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamRequestScalarFieldEnum | TeamRequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Preference
   */

  export type AggregatePreference = {
    _count: PreferenceCountAggregateOutputType | null
    _avg: PreferenceAvgAggregateOutputType | null
    _sum: PreferenceSumAggregateOutputType | null
    _min: PreferenceMinAggregateOutputType | null
    _max: PreferenceMaxAggregateOutputType | null
  }

  export type PreferenceAvgAggregateOutputType = {
    budgetMin: number | null
    budgetMax: number | null
    bedrooms: number | null
    bathrooms: number | null
  }

  export type PreferenceSumAggregateOutputType = {
    budgetMin: number | null
    budgetMax: number | null
    bedrooms: number | null
    bathrooms: number | null
  }

  export type PreferenceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    budgetMin: number | null
    budgetMax: number | null
    preferredLocation: string | null
    preferenceLabels: string | null
    bedrooms: number | null
    bathrooms: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PreferenceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    budgetMin: number | null
    budgetMax: number | null
    preferredLocation: string | null
    preferenceLabels: string | null
    bedrooms: number | null
    bathrooms: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PreferenceCountAggregateOutputType = {
    id: number
    userId: number
    budgetMin: number
    budgetMax: number
    preferredLocation: number
    preferenceLabels: number
    bedrooms: number
    bathrooms: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PreferenceAvgAggregateInputType = {
    budgetMin?: true
    budgetMax?: true
    bedrooms?: true
    bathrooms?: true
  }

  export type PreferenceSumAggregateInputType = {
    budgetMin?: true
    budgetMax?: true
    bedrooms?: true
    bathrooms?: true
  }

  export type PreferenceMinAggregateInputType = {
    id?: true
    userId?: true
    budgetMin?: true
    budgetMax?: true
    preferredLocation?: true
    preferenceLabels?: true
    bedrooms?: true
    bathrooms?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PreferenceMaxAggregateInputType = {
    id?: true
    userId?: true
    budgetMin?: true
    budgetMax?: true
    preferredLocation?: true
    preferenceLabels?: true
    bedrooms?: true
    bathrooms?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PreferenceCountAggregateInputType = {
    id?: true
    userId?: true
    budgetMin?: true
    budgetMax?: true
    preferredLocation?: true
    preferenceLabels?: true
    bedrooms?: true
    bathrooms?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preference to aggregate.
     */
    where?: PreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferenceOrderByWithRelationInput | PreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Preferences
    **/
    _count?: true | PreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferenceMaxAggregateInputType
  }

  export type GetPreferenceAggregateType<T extends PreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregatePreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreference[P]>
      : GetScalarType<T[P], AggregatePreference[P]>
  }




  export type PreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferenceWhereInput
    orderBy?: PreferenceOrderByWithAggregationInput | PreferenceOrderByWithAggregationInput[]
    by: PreferenceScalarFieldEnum[] | PreferenceScalarFieldEnum
    having?: PreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferenceCountAggregateInputType | true
    _avg?: PreferenceAvgAggregateInputType
    _sum?: PreferenceSumAggregateInputType
    _min?: PreferenceMinAggregateInputType
    _max?: PreferenceMaxAggregateInputType
  }

  export type PreferenceGroupByOutputType = {
    id: string
    userId: string
    budgetMin: number | null
    budgetMax: number | null
    preferredLocation: string | null
    preferenceLabels: string | null
    bedrooms: number | null
    bathrooms: number | null
    createdAt: Date
    updatedAt: Date
    _count: PreferenceCountAggregateOutputType | null
    _avg: PreferenceAvgAggregateOutputType | null
    _sum: PreferenceSumAggregateOutputType | null
    _min: PreferenceMinAggregateOutputType | null
    _max: PreferenceMaxAggregateOutputType | null
  }

  type GetPreferenceGroupByPayload<T extends PreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], PreferenceGroupByOutputType[P]>
        }
      >
    >


  export type PreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    budgetMin?: boolean
    budgetMax?: boolean
    preferredLocation?: boolean
    preferenceLabels?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preference"]>

  export type PreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    budgetMin?: boolean
    budgetMax?: boolean
    preferredLocation?: boolean
    preferenceLabels?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preference"]>

  export type PreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    budgetMin?: boolean
    budgetMax?: boolean
    preferredLocation?: boolean
    preferenceLabels?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preference"]>

  export type PreferenceSelectScalar = {
    id?: boolean
    userId?: boolean
    budgetMin?: boolean
    budgetMax?: boolean
    preferredLocation?: boolean
    preferenceLabels?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "budgetMin" | "budgetMax" | "preferredLocation" | "preferenceLabels" | "bedrooms" | "bathrooms" | "createdAt" | "updatedAt", ExtArgs["result"]["preference"]>
  export type PreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Preference"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      budgetMin: number | null
      budgetMax: number | null
      preferredLocation: string | null
      preferenceLabels: string | null
      bedrooms: number | null
      bathrooms: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["preference"]>
    composites: {}
  }

  type PreferenceGetPayload<S extends boolean | null | undefined | PreferenceDefaultArgs> = $Result.GetResult<Prisma.$PreferencePayload, S>

  type PreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreferenceCountAggregateInputType | true
    }

  export interface PreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Preference'], meta: { name: 'Preference' } }
    /**
     * Find zero or one Preference that matches the filter.
     * @param {PreferenceFindUniqueArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreferenceFindUniqueArgs>(args: SelectSubset<T, PreferenceFindUniqueArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreferenceFindUniqueOrThrowArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, PreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceFindFirstArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreferenceFindFirstArgs>(args?: SelectSubset<T, PreferenceFindFirstArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceFindFirstOrThrowArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, PreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preferences
     * const preferences = await prisma.preference.findMany()
     * 
     * // Get first 10 Preferences
     * const preferences = await prisma.preference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preferenceWithIdOnly = await prisma.preference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreferenceFindManyArgs>(args?: SelectSubset<T, PreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preference.
     * @param {PreferenceCreateArgs} args - Arguments to create a Preference.
     * @example
     * // Create one Preference
     * const Preference = await prisma.preference.create({
     *   data: {
     *     // ... data to create a Preference
     *   }
     * })
     * 
     */
    create<T extends PreferenceCreateArgs>(args: SelectSubset<T, PreferenceCreateArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preferences.
     * @param {PreferenceCreateManyArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preference = await prisma.preference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreferenceCreateManyArgs>(args?: SelectSubset<T, PreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Preferences and returns the data saved in the database.
     * @param {PreferenceCreateManyAndReturnArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preference = await prisma.preference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Preferences and only return the `id`
     * const preferenceWithIdOnly = await prisma.preference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, PreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preference.
     * @param {PreferenceDeleteArgs} args - Arguments to delete one Preference.
     * @example
     * // Delete one Preference
     * const Preference = await prisma.preference.delete({
     *   where: {
     *     // ... filter to delete one Preference
     *   }
     * })
     * 
     */
    delete<T extends PreferenceDeleteArgs>(args: SelectSubset<T, PreferenceDeleteArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preference.
     * @param {PreferenceUpdateArgs} args - Arguments to update one Preference.
     * @example
     * // Update one Preference
     * const preference = await prisma.preference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreferenceUpdateArgs>(args: SelectSubset<T, PreferenceUpdateArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preferences.
     * @param {PreferenceDeleteManyArgs} args - Arguments to filter Preferences to delete.
     * @example
     * // Delete a few Preferences
     * const { count } = await prisma.preference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreferenceDeleteManyArgs>(args?: SelectSubset<T, PreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preferences
     * const preference = await prisma.preference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreferenceUpdateManyArgs>(args: SelectSubset<T, PreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences and returns the data updated in the database.
     * @param {PreferenceUpdateManyAndReturnArgs} args - Arguments to update many Preferences.
     * @example
     * // Update many Preferences
     * const preference = await prisma.preference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Preferences and only return the `id`
     * const preferenceWithIdOnly = await prisma.preference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, PreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preference.
     * @param {PreferenceUpsertArgs} args - Arguments to update or create a Preference.
     * @example
     * // Update or create a Preference
     * const preference = await prisma.preference.upsert({
     *   create: {
     *     // ... data to create a Preference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preference we want to update
     *   }
     * })
     */
    upsert<T extends PreferenceUpsertArgs>(args: SelectSubset<T, PreferenceUpsertArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceCountArgs} args - Arguments to filter Preferences to count.
     * @example
     * // Count the number of Preferences
     * const count = await prisma.preference.count({
     *   where: {
     *     // ... the filter for the Preferences we want to count
     *   }
     * })
    **/
    count<T extends PreferenceCountArgs>(
      args?: Subset<T, PreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreferenceAggregateArgs>(args: Subset<T, PreferenceAggregateArgs>): Prisma.PrismaPromise<GetPreferenceAggregateType<T>>

    /**
     * Group by Preference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreferenceGroupByArgs['orderBy'] }
        : { orderBy?: PreferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Preference model
   */
  readonly fields: PreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Preference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Preference model
   */
  interface PreferenceFieldRefs {
    readonly id: FieldRef<"Preference", 'String'>
    readonly userId: FieldRef<"Preference", 'String'>
    readonly budgetMin: FieldRef<"Preference", 'Int'>
    readonly budgetMax: FieldRef<"Preference", 'Int'>
    readonly preferredLocation: FieldRef<"Preference", 'String'>
    readonly preferenceLabels: FieldRef<"Preference", 'String'>
    readonly bedrooms: FieldRef<"Preference", 'Int'>
    readonly bathrooms: FieldRef<"Preference", 'Int'>
    readonly createdAt: FieldRef<"Preference", 'DateTime'>
    readonly updatedAt: FieldRef<"Preference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Preference findUnique
   */
  export type PreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter, which Preference to fetch.
     */
    where: PreferenceWhereUniqueInput
  }

  /**
   * Preference findUniqueOrThrow
   */
  export type PreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter, which Preference to fetch.
     */
    where: PreferenceWhereUniqueInput
  }

  /**
   * Preference findFirst
   */
  export type PreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter, which Preference to fetch.
     */
    where?: PreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferenceOrderByWithRelationInput | PreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferenceScalarFieldEnum | PreferenceScalarFieldEnum[]
  }

  /**
   * Preference findFirstOrThrow
   */
  export type PreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter, which Preference to fetch.
     */
    where?: PreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferenceOrderByWithRelationInput | PreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferenceScalarFieldEnum | PreferenceScalarFieldEnum[]
  }

  /**
   * Preference findMany
   */
  export type PreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferenceOrderByWithRelationInput | PreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Preferences.
     */
    cursor?: PreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    distinct?: PreferenceScalarFieldEnum | PreferenceScalarFieldEnum[]
  }

  /**
   * Preference create
   */
  export type PreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Preference.
     */
    data: XOR<PreferenceCreateInput, PreferenceUncheckedCreateInput>
  }

  /**
   * Preference createMany
   */
  export type PreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Preferences.
     */
    data: PreferenceCreateManyInput | PreferenceCreateManyInput[]
  }

  /**
   * Preference createManyAndReturn
   */
  export type PreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many Preferences.
     */
    data: PreferenceCreateManyInput | PreferenceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preference update
   */
  export type PreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Preference.
     */
    data: XOR<PreferenceUpdateInput, PreferenceUncheckedUpdateInput>
    /**
     * Choose, which Preference to update.
     */
    where: PreferenceWhereUniqueInput
  }

  /**
   * Preference updateMany
   */
  export type PreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferenceUpdateManyMutationInput, PreferenceUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferenceWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
  }

  /**
   * Preference updateManyAndReturn
   */
  export type PreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferenceUpdateManyMutationInput, PreferenceUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferenceWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preference upsert
   */
  export type PreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Preference to update in case it exists.
     */
    where: PreferenceWhereUniqueInput
    /**
     * In case the Preference found by the `where` argument doesn't exist, create a new Preference with this data.
     */
    create: XOR<PreferenceCreateInput, PreferenceUncheckedCreateInput>
    /**
     * In case the Preference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreferenceUpdateInput, PreferenceUncheckedUpdateInput>
  }

  /**
   * Preference delete
   */
  export type PreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter which Preference to delete.
     */
    where: PreferenceWhereUniqueInput
  }

  /**
   * Preference deleteMany
   */
  export type PreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preferences to delete
     */
    where?: PreferenceWhereInput
    /**
     * Limit how many Preferences to delete.
     */
    limit?: number
  }

  /**
   * Preference without action
   */
  export type PreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    price: number | null
    bedrooms: number | null
    bathrooms: number | null
    areaSqFt: number | null
  }

  export type PropertySumAggregateOutputType = {
    price: number | null
    bedrooms: number | null
    bathrooms: number | null
    areaSqFt: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    location: string | null
    bedrooms: number | null
    bathrooms: number | null
    areaSqFt: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    location: string | null
    bedrooms: number | null
    bathrooms: number | null
    areaSqFt: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    location: number
    bedrooms: number
    bathrooms: number
    areaSqFt: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    price?: true
    bedrooms?: true
    bathrooms?: true
    areaSqFt?: true
  }

  export type PropertySumAggregateInputType = {
    price?: true
    bedrooms?: true
    bathrooms?: true
    areaSqFt?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    location?: true
    bedrooms?: true
    bathrooms?: true
    areaSqFt?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    location?: true
    bedrooms?: true
    bathrooms?: true
    areaSqFt?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    location?: true
    bedrooms?: true
    bathrooms?: true
    areaSqFt?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    areaSqFt: number
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    location?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    areaSqFt?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    location?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    areaSqFt?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    location?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    areaSqFt?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    location?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    areaSqFt?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "location" | "bedrooms" | "bathrooms" | "areaSqFt" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      price: number
      location: string
      bedrooms: number
      bathrooms: number
      areaSqFt: number
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly title: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly price: FieldRef<"Property", 'Int'>
    readonly location: FieldRef<"Property", 'String'>
    readonly bedrooms: FieldRef<"Property", 'Int'>
    readonly bathrooms: FieldRef<"Property", 'Int'>
    readonly areaSqFt: FieldRef<"Property", 'Int'>
    readonly imageUrl: FieldRef<"Property", 'String'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
  }


  /**
   * Model Requirement
   */

  export type AggregateRequirement = {
    _count: RequirementCountAggregateOutputType | null
    _avg: RequirementAvgAggregateOutputType | null
    _sum: RequirementSumAggregateOutputType | null
    _min: RequirementMinAggregateOutputType | null
    _max: RequirementMaxAggregateOutputType | null
  }

  export type RequirementAvgAggregateOutputType = {
    approxRent: number | null
  }

  export type RequirementSumAggregateOutputType = {
    approxRent: number | null
  }

  export type RequirementMinAggregateOutputType = {
    id: string | null
    userId: string | null
    location: string | null
    approxRent: number | null
    lookingFor: string | null
    occupancy: string | null
    highlights: string | null
    interestedInPg: boolean | null
    phoneVisibility: string | null
    interestedInTeams: boolean | null
    description: string | null
    createdAt: Date | null
  }

  export type RequirementMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    location: string | null
    approxRent: number | null
    lookingFor: string | null
    occupancy: string | null
    highlights: string | null
    interestedInPg: boolean | null
    phoneVisibility: string | null
    interestedInTeams: boolean | null
    description: string | null
    createdAt: Date | null
  }

  export type RequirementCountAggregateOutputType = {
    id: number
    userId: number
    location: number
    approxRent: number
    lookingFor: number
    occupancy: number
    highlights: number
    interestedInPg: number
    phoneVisibility: number
    interestedInTeams: number
    description: number
    createdAt: number
    _all: number
  }


  export type RequirementAvgAggregateInputType = {
    approxRent?: true
  }

  export type RequirementSumAggregateInputType = {
    approxRent?: true
  }

  export type RequirementMinAggregateInputType = {
    id?: true
    userId?: true
    location?: true
    approxRent?: true
    lookingFor?: true
    occupancy?: true
    highlights?: true
    interestedInPg?: true
    phoneVisibility?: true
    interestedInTeams?: true
    description?: true
    createdAt?: true
  }

  export type RequirementMaxAggregateInputType = {
    id?: true
    userId?: true
    location?: true
    approxRent?: true
    lookingFor?: true
    occupancy?: true
    highlights?: true
    interestedInPg?: true
    phoneVisibility?: true
    interestedInTeams?: true
    description?: true
    createdAt?: true
  }

  export type RequirementCountAggregateInputType = {
    id?: true
    userId?: true
    location?: true
    approxRent?: true
    lookingFor?: true
    occupancy?: true
    highlights?: true
    interestedInPg?: true
    phoneVisibility?: true
    interestedInTeams?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type RequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requirement to aggregate.
     */
    where?: RequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requirements to fetch.
     */
    orderBy?: RequirementOrderByWithRelationInput | RequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requirements
    **/
    _count?: true | RequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequirementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequirementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequirementMaxAggregateInputType
  }

  export type GetRequirementAggregateType<T extends RequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequirement[P]>
      : GetScalarType<T[P], AggregateRequirement[P]>
  }




  export type RequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequirementWhereInput
    orderBy?: RequirementOrderByWithAggregationInput | RequirementOrderByWithAggregationInput[]
    by: RequirementScalarFieldEnum[] | RequirementScalarFieldEnum
    having?: RequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequirementCountAggregateInputType | true
    _avg?: RequirementAvgAggregateInputType
    _sum?: RequirementSumAggregateInputType
    _min?: RequirementMinAggregateInputType
    _max?: RequirementMaxAggregateInputType
  }

  export type RequirementGroupByOutputType = {
    id: string
    userId: string
    location: string
    approxRent: number
    lookingFor: string
    occupancy: string
    highlights: string | null
    interestedInPg: boolean
    phoneVisibility: string
    interestedInTeams: boolean
    description: string
    createdAt: Date
    _count: RequirementCountAggregateOutputType | null
    _avg: RequirementAvgAggregateOutputType | null
    _sum: RequirementSumAggregateOutputType | null
    _min: RequirementMinAggregateOutputType | null
    _max: RequirementMaxAggregateOutputType | null
  }

  type GetRequirementGroupByPayload<T extends RequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequirementGroupByOutputType[P]>
            : GetScalarType<T[P], RequirementGroupByOutputType[P]>
        }
      >
    >


  export type RequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    location?: boolean
    approxRent?: boolean
    lookingFor?: boolean
    occupancy?: boolean
    highlights?: boolean
    interestedInPg?: boolean
    phoneVisibility?: boolean
    interestedInTeams?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requirement"]>

  export type RequirementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    location?: boolean
    approxRent?: boolean
    lookingFor?: boolean
    occupancy?: boolean
    highlights?: boolean
    interestedInPg?: boolean
    phoneVisibility?: boolean
    interestedInTeams?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requirement"]>

  export type RequirementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    location?: boolean
    approxRent?: boolean
    lookingFor?: boolean
    occupancy?: boolean
    highlights?: boolean
    interestedInPg?: boolean
    phoneVisibility?: boolean
    interestedInTeams?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requirement"]>

  export type RequirementSelectScalar = {
    id?: boolean
    userId?: boolean
    location?: boolean
    approxRent?: boolean
    lookingFor?: boolean
    occupancy?: boolean
    highlights?: boolean
    interestedInPg?: boolean
    phoneVisibility?: boolean
    interestedInTeams?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type RequirementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "location" | "approxRent" | "lookingFor" | "occupancy" | "highlights" | "interestedInPg" | "phoneVisibility" | "interestedInTeams" | "description" | "createdAt", ExtArgs["result"]["requirement"]>
  export type RequirementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RequirementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RequirementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Requirement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      location: string
      approxRent: number
      lookingFor: string
      occupancy: string
      highlights: string | null
      interestedInPg: boolean
      phoneVisibility: string
      interestedInTeams: boolean
      description: string
      createdAt: Date
    }, ExtArgs["result"]["requirement"]>
    composites: {}
  }

  type RequirementGetPayload<S extends boolean | null | undefined | RequirementDefaultArgs> = $Result.GetResult<Prisma.$RequirementPayload, S>

  type RequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequirementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequirementCountAggregateInputType | true
    }

  export interface RequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Requirement'], meta: { name: 'Requirement' } }
    /**
     * Find zero or one Requirement that matches the filter.
     * @param {RequirementFindUniqueArgs} args - Arguments to find a Requirement
     * @example
     * // Get one Requirement
     * const requirement = await prisma.requirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequirementFindUniqueArgs>(args: SelectSubset<T, RequirementFindUniqueArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Requirement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequirementFindUniqueOrThrowArgs} args - Arguments to find a Requirement
     * @example
     * // Get one Requirement
     * const requirement = await prisma.requirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequirementFindUniqueOrThrowArgs>(args: SelectSubset<T, RequirementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Requirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementFindFirstArgs} args - Arguments to find a Requirement
     * @example
     * // Get one Requirement
     * const requirement = await prisma.requirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequirementFindFirstArgs>(args?: SelectSubset<T, RequirementFindFirstArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Requirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementFindFirstOrThrowArgs} args - Arguments to find a Requirement
     * @example
     * // Get one Requirement
     * const requirement = await prisma.requirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequirementFindFirstOrThrowArgs>(args?: SelectSubset<T, RequirementFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requirements
     * const requirements = await prisma.requirement.findMany()
     * 
     * // Get first 10 Requirements
     * const requirements = await prisma.requirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requirementWithIdOnly = await prisma.requirement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequirementFindManyArgs>(args?: SelectSubset<T, RequirementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Requirement.
     * @param {RequirementCreateArgs} args - Arguments to create a Requirement.
     * @example
     * // Create one Requirement
     * const Requirement = await prisma.requirement.create({
     *   data: {
     *     // ... data to create a Requirement
     *   }
     * })
     * 
     */
    create<T extends RequirementCreateArgs>(args: SelectSubset<T, RequirementCreateArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requirements.
     * @param {RequirementCreateManyArgs} args - Arguments to create many Requirements.
     * @example
     * // Create many Requirements
     * const requirement = await prisma.requirement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequirementCreateManyArgs>(args?: SelectSubset<T, RequirementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requirements and returns the data saved in the database.
     * @param {RequirementCreateManyAndReturnArgs} args - Arguments to create many Requirements.
     * @example
     * // Create many Requirements
     * const requirement = await prisma.requirement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requirements and only return the `id`
     * const requirementWithIdOnly = await prisma.requirement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequirementCreateManyAndReturnArgs>(args?: SelectSubset<T, RequirementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Requirement.
     * @param {RequirementDeleteArgs} args - Arguments to delete one Requirement.
     * @example
     * // Delete one Requirement
     * const Requirement = await prisma.requirement.delete({
     *   where: {
     *     // ... filter to delete one Requirement
     *   }
     * })
     * 
     */
    delete<T extends RequirementDeleteArgs>(args: SelectSubset<T, RequirementDeleteArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Requirement.
     * @param {RequirementUpdateArgs} args - Arguments to update one Requirement.
     * @example
     * // Update one Requirement
     * const requirement = await prisma.requirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequirementUpdateArgs>(args: SelectSubset<T, RequirementUpdateArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requirements.
     * @param {RequirementDeleteManyArgs} args - Arguments to filter Requirements to delete.
     * @example
     * // Delete a few Requirements
     * const { count } = await prisma.requirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequirementDeleteManyArgs>(args?: SelectSubset<T, RequirementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requirements
     * const requirement = await prisma.requirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequirementUpdateManyArgs>(args: SelectSubset<T, RequirementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requirements and returns the data updated in the database.
     * @param {RequirementUpdateManyAndReturnArgs} args - Arguments to update many Requirements.
     * @example
     * // Update many Requirements
     * const requirement = await prisma.requirement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requirements and only return the `id`
     * const requirementWithIdOnly = await prisma.requirement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequirementUpdateManyAndReturnArgs>(args: SelectSubset<T, RequirementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Requirement.
     * @param {RequirementUpsertArgs} args - Arguments to update or create a Requirement.
     * @example
     * // Update or create a Requirement
     * const requirement = await prisma.requirement.upsert({
     *   create: {
     *     // ... data to create a Requirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Requirement we want to update
     *   }
     * })
     */
    upsert<T extends RequirementUpsertArgs>(args: SelectSubset<T, RequirementUpsertArgs<ExtArgs>>): Prisma__RequirementClient<$Result.GetResult<Prisma.$RequirementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementCountArgs} args - Arguments to filter Requirements to count.
     * @example
     * // Count the number of Requirements
     * const count = await prisma.requirement.count({
     *   where: {
     *     // ... the filter for the Requirements we want to count
     *   }
     * })
    **/
    count<T extends RequirementCountArgs>(
      args?: Subset<T, RequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Requirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequirementAggregateArgs>(args: Subset<T, RequirementAggregateArgs>): Prisma.PrismaPromise<GetRequirementAggregateType<T>>

    /**
     * Group by Requirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequirementGroupByArgs['orderBy'] }
        : { orderBy?: RequirementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Requirement model
   */
  readonly fields: RequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Requirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Requirement model
   */
  interface RequirementFieldRefs {
    readonly id: FieldRef<"Requirement", 'String'>
    readonly userId: FieldRef<"Requirement", 'String'>
    readonly location: FieldRef<"Requirement", 'String'>
    readonly approxRent: FieldRef<"Requirement", 'Int'>
    readonly lookingFor: FieldRef<"Requirement", 'String'>
    readonly occupancy: FieldRef<"Requirement", 'String'>
    readonly highlights: FieldRef<"Requirement", 'String'>
    readonly interestedInPg: FieldRef<"Requirement", 'Boolean'>
    readonly phoneVisibility: FieldRef<"Requirement", 'String'>
    readonly interestedInTeams: FieldRef<"Requirement", 'Boolean'>
    readonly description: FieldRef<"Requirement", 'String'>
    readonly createdAt: FieldRef<"Requirement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Requirement findUnique
   */
  export type RequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirement
     */
    omit?: RequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * Filter, which Requirement to fetch.
     */
    where: RequirementWhereUniqueInput
  }

  /**
   * Requirement findUniqueOrThrow
   */
  export type RequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirement
     */
    omit?: RequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * Filter, which Requirement to fetch.
     */
    where: RequirementWhereUniqueInput
  }

  /**
   * Requirement findFirst
   */
  export type RequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirement
     */
    omit?: RequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * Filter, which Requirement to fetch.
     */
    where?: RequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requirements to fetch.
     */
    orderBy?: RequirementOrderByWithRelationInput | RequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requirements.
     */
    cursor?: RequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requirements.
     */
    distinct?: RequirementScalarFieldEnum | RequirementScalarFieldEnum[]
  }

  /**
   * Requirement findFirstOrThrow
   */
  export type RequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirement
     */
    omit?: RequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * Filter, which Requirement to fetch.
     */
    where?: RequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requirements to fetch.
     */
    orderBy?: RequirementOrderByWithRelationInput | RequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requirements.
     */
    cursor?: RequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requirements.
     */
    distinct?: RequirementScalarFieldEnum | RequirementScalarFieldEnum[]
  }

  /**
   * Requirement findMany
   */
  export type RequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirement
     */
    omit?: RequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * Filter, which Requirements to fetch.
     */
    where?: RequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requirements to fetch.
     */
    orderBy?: RequirementOrderByWithRelationInput | RequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requirements.
     */
    cursor?: RequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requirements.
     */
    skip?: number
    distinct?: RequirementScalarFieldEnum | RequirementScalarFieldEnum[]
  }

  /**
   * Requirement create
   */
  export type RequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirement
     */
    omit?: RequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * The data needed to create a Requirement.
     */
    data: XOR<RequirementCreateInput, RequirementUncheckedCreateInput>
  }

  /**
   * Requirement createMany
   */
  export type RequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requirements.
     */
    data: RequirementCreateManyInput | RequirementCreateManyInput[]
  }

  /**
   * Requirement createManyAndReturn
   */
  export type RequirementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Requirement
     */
    omit?: RequirementOmit<ExtArgs> | null
    /**
     * The data used to create many Requirements.
     */
    data: RequirementCreateManyInput | RequirementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Requirement update
   */
  export type RequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirement
     */
    omit?: RequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * The data needed to update a Requirement.
     */
    data: XOR<RequirementUpdateInput, RequirementUncheckedUpdateInput>
    /**
     * Choose, which Requirement to update.
     */
    where: RequirementWhereUniqueInput
  }

  /**
   * Requirement updateMany
   */
  export type RequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requirements.
     */
    data: XOR<RequirementUpdateManyMutationInput, RequirementUncheckedUpdateManyInput>
    /**
     * Filter which Requirements to update
     */
    where?: RequirementWhereInput
    /**
     * Limit how many Requirements to update.
     */
    limit?: number
  }

  /**
   * Requirement updateManyAndReturn
   */
  export type RequirementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Requirement
     */
    omit?: RequirementOmit<ExtArgs> | null
    /**
     * The data used to update Requirements.
     */
    data: XOR<RequirementUpdateManyMutationInput, RequirementUncheckedUpdateManyInput>
    /**
     * Filter which Requirements to update
     */
    where?: RequirementWhereInput
    /**
     * Limit how many Requirements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Requirement upsert
   */
  export type RequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirement
     */
    omit?: RequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * The filter to search for the Requirement to update in case it exists.
     */
    where: RequirementWhereUniqueInput
    /**
     * In case the Requirement found by the `where` argument doesn't exist, create a new Requirement with this data.
     */
    create: XOR<RequirementCreateInput, RequirementUncheckedCreateInput>
    /**
     * In case the Requirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequirementUpdateInput, RequirementUncheckedUpdateInput>
  }

  /**
   * Requirement delete
   */
  export type RequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirement
     */
    omit?: RequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
    /**
     * Filter which Requirement to delete.
     */
    where: RequirementWhereUniqueInput
  }

  /**
   * Requirement deleteMany
   */
  export type RequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requirements to delete
     */
    where?: RequirementWhereInput
    /**
     * Limit how many Requirements to delete.
     */
    limit?: number
  }

  /**
   * Requirement without action
   */
  export type RequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirement
     */
    select?: RequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirement
     */
    omit?: RequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementInclude<ExtArgs> | null
  }


  /**
   * Model RoomListing
   */

  export type AggregateRoomListing = {
    _count: RoomListingCountAggregateOutputType | null
    _avg: RoomListingAvgAggregateOutputType | null
    _sum: RoomListingSumAggregateOutputType | null
    _min: RoomListingMinAggregateOutputType | null
    _max: RoomListingMaxAggregateOutputType | null
  }

  export type RoomListingAvgAggregateOutputType = {
    approxRent: number | null
  }

  export type RoomListingSumAggregateOutputType = {
    approxRent: number | null
  }

  export type RoomListingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    location: string | null
    approxRent: number | null
    occupancy: string | null
    lookingFor: string | null
    highlights: string | null
    amenities: string | null
    phoneVisibility: string | null
    description: string | null
    createdAt: Date | null
  }

  export type RoomListingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    location: string | null
    approxRent: number | null
    occupancy: string | null
    lookingFor: string | null
    highlights: string | null
    amenities: string | null
    phoneVisibility: string | null
    description: string | null
    createdAt: Date | null
  }

  export type RoomListingCountAggregateOutputType = {
    id: number
    userId: number
    location: number
    approxRent: number
    occupancy: number
    lookingFor: number
    highlights: number
    amenities: number
    phoneVisibility: number
    description: number
    createdAt: number
    _all: number
  }


  export type RoomListingAvgAggregateInputType = {
    approxRent?: true
  }

  export type RoomListingSumAggregateInputType = {
    approxRent?: true
  }

  export type RoomListingMinAggregateInputType = {
    id?: true
    userId?: true
    location?: true
    approxRent?: true
    occupancy?: true
    lookingFor?: true
    highlights?: true
    amenities?: true
    phoneVisibility?: true
    description?: true
    createdAt?: true
  }

  export type RoomListingMaxAggregateInputType = {
    id?: true
    userId?: true
    location?: true
    approxRent?: true
    occupancy?: true
    lookingFor?: true
    highlights?: true
    amenities?: true
    phoneVisibility?: true
    description?: true
    createdAt?: true
  }

  export type RoomListingCountAggregateInputType = {
    id?: true
    userId?: true
    location?: true
    approxRent?: true
    occupancy?: true
    lookingFor?: true
    highlights?: true
    amenities?: true
    phoneVisibility?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type RoomListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomListing to aggregate.
     */
    where?: RoomListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomListings to fetch.
     */
    orderBy?: RoomListingOrderByWithRelationInput | RoomListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomListings
    **/
    _count?: true | RoomListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomListingMaxAggregateInputType
  }

  export type GetRoomListingAggregateType<T extends RoomListingAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomListing[P]>
      : GetScalarType<T[P], AggregateRoomListing[P]>
  }




  export type RoomListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomListingWhereInput
    orderBy?: RoomListingOrderByWithAggregationInput | RoomListingOrderByWithAggregationInput[]
    by: RoomListingScalarFieldEnum[] | RoomListingScalarFieldEnum
    having?: RoomListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomListingCountAggregateInputType | true
    _avg?: RoomListingAvgAggregateInputType
    _sum?: RoomListingSumAggregateInputType
    _min?: RoomListingMinAggregateInputType
    _max?: RoomListingMaxAggregateInputType
  }

  export type RoomListingGroupByOutputType = {
    id: string
    userId: string
    location: string
    approxRent: number
    occupancy: string
    lookingFor: string | null
    highlights: string | null
    amenities: string | null
    phoneVisibility: string
    description: string
    createdAt: Date
    _count: RoomListingCountAggregateOutputType | null
    _avg: RoomListingAvgAggregateOutputType | null
    _sum: RoomListingSumAggregateOutputType | null
    _min: RoomListingMinAggregateOutputType | null
    _max: RoomListingMaxAggregateOutputType | null
  }

  type GetRoomListingGroupByPayload<T extends RoomListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomListingGroupByOutputType[P]>
            : GetScalarType<T[P], RoomListingGroupByOutputType[P]>
        }
      >
    >


  export type RoomListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    location?: boolean
    approxRent?: boolean
    occupancy?: boolean
    lookingFor?: boolean
    highlights?: boolean
    amenities?: boolean
    phoneVisibility?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomListing"]>

  export type RoomListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    location?: boolean
    approxRent?: boolean
    occupancy?: boolean
    lookingFor?: boolean
    highlights?: boolean
    amenities?: boolean
    phoneVisibility?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomListing"]>

  export type RoomListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    location?: boolean
    approxRent?: boolean
    occupancy?: boolean
    lookingFor?: boolean
    highlights?: boolean
    amenities?: boolean
    phoneVisibility?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomListing"]>

  export type RoomListingSelectScalar = {
    id?: boolean
    userId?: boolean
    location?: boolean
    approxRent?: boolean
    occupancy?: boolean
    lookingFor?: boolean
    highlights?: boolean
    amenities?: boolean
    phoneVisibility?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type RoomListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "location" | "approxRent" | "occupancy" | "lookingFor" | "highlights" | "amenities" | "phoneVisibility" | "description" | "createdAt", ExtArgs["result"]["roomListing"]>
  export type RoomListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomListing"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      location: string
      approxRent: number
      occupancy: string
      lookingFor: string | null
      highlights: string | null
      amenities: string | null
      phoneVisibility: string
      description: string
      createdAt: Date
    }, ExtArgs["result"]["roomListing"]>
    composites: {}
  }

  type RoomListingGetPayload<S extends boolean | null | undefined | RoomListingDefaultArgs> = $Result.GetResult<Prisma.$RoomListingPayload, S>

  type RoomListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomListingCountAggregateInputType | true
    }

  export interface RoomListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomListing'], meta: { name: 'RoomListing' } }
    /**
     * Find zero or one RoomListing that matches the filter.
     * @param {RoomListingFindUniqueArgs} args - Arguments to find a RoomListing
     * @example
     * // Get one RoomListing
     * const roomListing = await prisma.roomListing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomListingFindUniqueArgs>(args: SelectSubset<T, RoomListingFindUniqueArgs<ExtArgs>>): Prisma__RoomListingClient<$Result.GetResult<Prisma.$RoomListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomListing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomListingFindUniqueOrThrowArgs} args - Arguments to find a RoomListing
     * @example
     * // Get one RoomListing
     * const roomListing = await prisma.roomListing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomListingFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomListingClient<$Result.GetResult<Prisma.$RoomListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomListing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomListingFindFirstArgs} args - Arguments to find a RoomListing
     * @example
     * // Get one RoomListing
     * const roomListing = await prisma.roomListing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomListingFindFirstArgs>(args?: SelectSubset<T, RoomListingFindFirstArgs<ExtArgs>>): Prisma__RoomListingClient<$Result.GetResult<Prisma.$RoomListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomListing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomListingFindFirstOrThrowArgs} args - Arguments to find a RoomListing
     * @example
     * // Get one RoomListing
     * const roomListing = await prisma.roomListing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomListingFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomListingClient<$Result.GetResult<Prisma.$RoomListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomListings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomListings
     * const roomListings = await prisma.roomListing.findMany()
     * 
     * // Get first 10 RoomListings
     * const roomListings = await prisma.roomListing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomListingWithIdOnly = await prisma.roomListing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomListingFindManyArgs>(args?: SelectSubset<T, RoomListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomListing.
     * @param {RoomListingCreateArgs} args - Arguments to create a RoomListing.
     * @example
     * // Create one RoomListing
     * const RoomListing = await prisma.roomListing.create({
     *   data: {
     *     // ... data to create a RoomListing
     *   }
     * })
     * 
     */
    create<T extends RoomListingCreateArgs>(args: SelectSubset<T, RoomListingCreateArgs<ExtArgs>>): Prisma__RoomListingClient<$Result.GetResult<Prisma.$RoomListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomListings.
     * @param {RoomListingCreateManyArgs} args - Arguments to create many RoomListings.
     * @example
     * // Create many RoomListings
     * const roomListing = await prisma.roomListing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomListingCreateManyArgs>(args?: SelectSubset<T, RoomListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomListings and returns the data saved in the database.
     * @param {RoomListingCreateManyAndReturnArgs} args - Arguments to create many RoomListings.
     * @example
     * // Create many RoomListings
     * const roomListing = await prisma.roomListing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomListings and only return the `id`
     * const roomListingWithIdOnly = await prisma.roomListing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomListingCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomListing.
     * @param {RoomListingDeleteArgs} args - Arguments to delete one RoomListing.
     * @example
     * // Delete one RoomListing
     * const RoomListing = await prisma.roomListing.delete({
     *   where: {
     *     // ... filter to delete one RoomListing
     *   }
     * })
     * 
     */
    delete<T extends RoomListingDeleteArgs>(args: SelectSubset<T, RoomListingDeleteArgs<ExtArgs>>): Prisma__RoomListingClient<$Result.GetResult<Prisma.$RoomListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomListing.
     * @param {RoomListingUpdateArgs} args - Arguments to update one RoomListing.
     * @example
     * // Update one RoomListing
     * const roomListing = await prisma.roomListing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomListingUpdateArgs>(args: SelectSubset<T, RoomListingUpdateArgs<ExtArgs>>): Prisma__RoomListingClient<$Result.GetResult<Prisma.$RoomListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomListings.
     * @param {RoomListingDeleteManyArgs} args - Arguments to filter RoomListings to delete.
     * @example
     * // Delete a few RoomListings
     * const { count } = await prisma.roomListing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomListingDeleteManyArgs>(args?: SelectSubset<T, RoomListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomListings
     * const roomListing = await prisma.roomListing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomListingUpdateManyArgs>(args: SelectSubset<T, RoomListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomListings and returns the data updated in the database.
     * @param {RoomListingUpdateManyAndReturnArgs} args - Arguments to update many RoomListings.
     * @example
     * // Update many RoomListings
     * const roomListing = await prisma.roomListing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomListings and only return the `id`
     * const roomListingWithIdOnly = await prisma.roomListing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomListingUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomListing.
     * @param {RoomListingUpsertArgs} args - Arguments to update or create a RoomListing.
     * @example
     * // Update or create a RoomListing
     * const roomListing = await prisma.roomListing.upsert({
     *   create: {
     *     // ... data to create a RoomListing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomListing we want to update
     *   }
     * })
     */
    upsert<T extends RoomListingUpsertArgs>(args: SelectSubset<T, RoomListingUpsertArgs<ExtArgs>>): Prisma__RoomListingClient<$Result.GetResult<Prisma.$RoomListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomListingCountArgs} args - Arguments to filter RoomListings to count.
     * @example
     * // Count the number of RoomListings
     * const count = await prisma.roomListing.count({
     *   where: {
     *     // ... the filter for the RoomListings we want to count
     *   }
     * })
    **/
    count<T extends RoomListingCountArgs>(
      args?: Subset<T, RoomListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomListingAggregateArgs>(args: Subset<T, RoomListingAggregateArgs>): Prisma.PrismaPromise<GetRoomListingAggregateType<T>>

    /**
     * Group by RoomListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomListingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomListingGroupByArgs['orderBy'] }
        : { orderBy?: RoomListingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomListing model
   */
  readonly fields: RoomListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomListing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomListing model
   */
  interface RoomListingFieldRefs {
    readonly id: FieldRef<"RoomListing", 'String'>
    readonly userId: FieldRef<"RoomListing", 'String'>
    readonly location: FieldRef<"RoomListing", 'String'>
    readonly approxRent: FieldRef<"RoomListing", 'Int'>
    readonly occupancy: FieldRef<"RoomListing", 'String'>
    readonly lookingFor: FieldRef<"RoomListing", 'String'>
    readonly highlights: FieldRef<"RoomListing", 'String'>
    readonly amenities: FieldRef<"RoomListing", 'String'>
    readonly phoneVisibility: FieldRef<"RoomListing", 'String'>
    readonly description: FieldRef<"RoomListing", 'String'>
    readonly createdAt: FieldRef<"RoomListing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomListing findUnique
   */
  export type RoomListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomListing
     */
    select?: RoomListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomListing
     */
    omit?: RoomListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomListingInclude<ExtArgs> | null
    /**
     * Filter, which RoomListing to fetch.
     */
    where: RoomListingWhereUniqueInput
  }

  /**
   * RoomListing findUniqueOrThrow
   */
  export type RoomListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomListing
     */
    select?: RoomListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomListing
     */
    omit?: RoomListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomListingInclude<ExtArgs> | null
    /**
     * Filter, which RoomListing to fetch.
     */
    where: RoomListingWhereUniqueInput
  }

  /**
   * RoomListing findFirst
   */
  export type RoomListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomListing
     */
    select?: RoomListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomListing
     */
    omit?: RoomListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomListingInclude<ExtArgs> | null
    /**
     * Filter, which RoomListing to fetch.
     */
    where?: RoomListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomListings to fetch.
     */
    orderBy?: RoomListingOrderByWithRelationInput | RoomListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomListings.
     */
    cursor?: RoomListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomListings.
     */
    distinct?: RoomListingScalarFieldEnum | RoomListingScalarFieldEnum[]
  }

  /**
   * RoomListing findFirstOrThrow
   */
  export type RoomListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomListing
     */
    select?: RoomListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomListing
     */
    omit?: RoomListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomListingInclude<ExtArgs> | null
    /**
     * Filter, which RoomListing to fetch.
     */
    where?: RoomListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomListings to fetch.
     */
    orderBy?: RoomListingOrderByWithRelationInput | RoomListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomListings.
     */
    cursor?: RoomListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomListings.
     */
    distinct?: RoomListingScalarFieldEnum | RoomListingScalarFieldEnum[]
  }

  /**
   * RoomListing findMany
   */
  export type RoomListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomListing
     */
    select?: RoomListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomListing
     */
    omit?: RoomListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomListingInclude<ExtArgs> | null
    /**
     * Filter, which RoomListings to fetch.
     */
    where?: RoomListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomListings to fetch.
     */
    orderBy?: RoomListingOrderByWithRelationInput | RoomListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomListings.
     */
    cursor?: RoomListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomListings.
     */
    skip?: number
    distinct?: RoomListingScalarFieldEnum | RoomListingScalarFieldEnum[]
  }

  /**
   * RoomListing create
   */
  export type RoomListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomListing
     */
    select?: RoomListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomListing
     */
    omit?: RoomListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomListingInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomListing.
     */
    data: XOR<RoomListingCreateInput, RoomListingUncheckedCreateInput>
  }

  /**
   * RoomListing createMany
   */
  export type RoomListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomListings.
     */
    data: RoomListingCreateManyInput | RoomListingCreateManyInput[]
  }

  /**
   * RoomListing createManyAndReturn
   */
  export type RoomListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomListing
     */
    select?: RoomListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomListing
     */
    omit?: RoomListingOmit<ExtArgs> | null
    /**
     * The data used to create many RoomListings.
     */
    data: RoomListingCreateManyInput | RoomListingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomListing update
   */
  export type RoomListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomListing
     */
    select?: RoomListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomListing
     */
    omit?: RoomListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomListingInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomListing.
     */
    data: XOR<RoomListingUpdateInput, RoomListingUncheckedUpdateInput>
    /**
     * Choose, which RoomListing to update.
     */
    where: RoomListingWhereUniqueInput
  }

  /**
   * RoomListing updateMany
   */
  export type RoomListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomListings.
     */
    data: XOR<RoomListingUpdateManyMutationInput, RoomListingUncheckedUpdateManyInput>
    /**
     * Filter which RoomListings to update
     */
    where?: RoomListingWhereInput
    /**
     * Limit how many RoomListings to update.
     */
    limit?: number
  }

  /**
   * RoomListing updateManyAndReturn
   */
  export type RoomListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomListing
     */
    select?: RoomListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomListing
     */
    omit?: RoomListingOmit<ExtArgs> | null
    /**
     * The data used to update RoomListings.
     */
    data: XOR<RoomListingUpdateManyMutationInput, RoomListingUncheckedUpdateManyInput>
    /**
     * Filter which RoomListings to update
     */
    where?: RoomListingWhereInput
    /**
     * Limit how many RoomListings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomListing upsert
   */
  export type RoomListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomListing
     */
    select?: RoomListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomListing
     */
    omit?: RoomListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomListingInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomListing to update in case it exists.
     */
    where: RoomListingWhereUniqueInput
    /**
     * In case the RoomListing found by the `where` argument doesn't exist, create a new RoomListing with this data.
     */
    create: XOR<RoomListingCreateInput, RoomListingUncheckedCreateInput>
    /**
     * In case the RoomListing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomListingUpdateInput, RoomListingUncheckedUpdateInput>
  }

  /**
   * RoomListing delete
   */
  export type RoomListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomListing
     */
    select?: RoomListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomListing
     */
    omit?: RoomListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomListingInclude<ExtArgs> | null
    /**
     * Filter which RoomListing to delete.
     */
    where: RoomListingWhereUniqueInput
  }

  /**
   * RoomListing deleteMany
   */
  export type RoomListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomListings to delete
     */
    where?: RoomListingWhereInput
    /**
     * Limit how many RoomListings to delete.
     */
    limit?: number
  }

  /**
   * RoomListing without action
   */
  export type RoomListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomListing
     */
    select?: RoomListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomListing
     */
    omit?: RoomListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomListingInclude<ExtArgs> | null
  }


  /**
   * Model TeamRequest
   */

  export type AggregateTeamRequest = {
    _count: TeamRequestCountAggregateOutputType | null
    _min: TeamRequestMinAggregateOutputType | null
    _max: TeamRequestMaxAggregateOutputType | null
  }

  export type TeamRequestMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    status: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamRequestMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    status: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamRequestCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    status: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamRequestMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamRequestMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamRequestCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamRequest to aggregate.
     */
    where?: TeamRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamRequests to fetch.
     */
    orderBy?: TeamRequestOrderByWithRelationInput | TeamRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamRequests
    **/
    _count?: true | TeamRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamRequestMaxAggregateInputType
  }

  export type GetTeamRequestAggregateType<T extends TeamRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamRequest[P]>
      : GetScalarType<T[P], AggregateTeamRequest[P]>
  }




  export type TeamRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamRequestWhereInput
    orderBy?: TeamRequestOrderByWithAggregationInput | TeamRequestOrderByWithAggregationInput[]
    by: TeamRequestScalarFieldEnum[] | TeamRequestScalarFieldEnum
    having?: TeamRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamRequestCountAggregateInputType | true
    _min?: TeamRequestMinAggregateInputType
    _max?: TeamRequestMaxAggregateInputType
  }

  export type TeamRequestGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    status: string
    message: string | null
    createdAt: Date
    updatedAt: Date
    _count: TeamRequestCountAggregateOutputType | null
    _min: TeamRequestMinAggregateOutputType | null
    _max: TeamRequestMaxAggregateOutputType | null
  }

  type GetTeamRequestGroupByPayload<T extends TeamRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamRequestGroupByOutputType[P]>
            : GetScalarType<T[P], TeamRequestGroupByOutputType[P]>
        }
      >
    >


  export type TeamRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamRequest"]>

  export type TeamRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamRequest"]>

  export type TeamRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamRequest"]>

  export type TeamRequestSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "status" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["teamRequest"]>
  export type TeamRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeamRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamRequest"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      status: string
      message: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teamRequest"]>
    composites: {}
  }

  type TeamRequestGetPayload<S extends boolean | null | undefined | TeamRequestDefaultArgs> = $Result.GetResult<Prisma.$TeamRequestPayload, S>

  type TeamRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamRequestCountAggregateInputType | true
    }

  export interface TeamRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamRequest'], meta: { name: 'TeamRequest' } }
    /**
     * Find zero or one TeamRequest that matches the filter.
     * @param {TeamRequestFindUniqueArgs} args - Arguments to find a TeamRequest
     * @example
     * // Get one TeamRequest
     * const teamRequest = await prisma.teamRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamRequestFindUniqueArgs>(args: SelectSubset<T, TeamRequestFindUniqueArgs<ExtArgs>>): Prisma__TeamRequestClient<$Result.GetResult<Prisma.$TeamRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamRequestFindUniqueOrThrowArgs} args - Arguments to find a TeamRequest
     * @example
     * // Get one TeamRequest
     * const teamRequest = await prisma.teamRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamRequestClient<$Result.GetResult<Prisma.$TeamRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRequestFindFirstArgs} args - Arguments to find a TeamRequest
     * @example
     * // Get one TeamRequest
     * const teamRequest = await prisma.teamRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamRequestFindFirstArgs>(args?: SelectSubset<T, TeamRequestFindFirstArgs<ExtArgs>>): Prisma__TeamRequestClient<$Result.GetResult<Prisma.$TeamRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRequestFindFirstOrThrowArgs} args - Arguments to find a TeamRequest
     * @example
     * // Get one TeamRequest
     * const teamRequest = await prisma.teamRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamRequestClient<$Result.GetResult<Prisma.$TeamRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamRequests
     * const teamRequests = await prisma.teamRequest.findMany()
     * 
     * // Get first 10 TeamRequests
     * const teamRequests = await prisma.teamRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamRequestWithIdOnly = await prisma.teamRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamRequestFindManyArgs>(args?: SelectSubset<T, TeamRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamRequest.
     * @param {TeamRequestCreateArgs} args - Arguments to create a TeamRequest.
     * @example
     * // Create one TeamRequest
     * const TeamRequest = await prisma.teamRequest.create({
     *   data: {
     *     // ... data to create a TeamRequest
     *   }
     * })
     * 
     */
    create<T extends TeamRequestCreateArgs>(args: SelectSubset<T, TeamRequestCreateArgs<ExtArgs>>): Prisma__TeamRequestClient<$Result.GetResult<Prisma.$TeamRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamRequests.
     * @param {TeamRequestCreateManyArgs} args - Arguments to create many TeamRequests.
     * @example
     * // Create many TeamRequests
     * const teamRequest = await prisma.teamRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamRequestCreateManyArgs>(args?: SelectSubset<T, TeamRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamRequests and returns the data saved in the database.
     * @param {TeamRequestCreateManyAndReturnArgs} args - Arguments to create many TeamRequests.
     * @example
     * // Create many TeamRequests
     * const teamRequest = await prisma.teamRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamRequests and only return the `id`
     * const teamRequestWithIdOnly = await prisma.teamRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamRequest.
     * @param {TeamRequestDeleteArgs} args - Arguments to delete one TeamRequest.
     * @example
     * // Delete one TeamRequest
     * const TeamRequest = await prisma.teamRequest.delete({
     *   where: {
     *     // ... filter to delete one TeamRequest
     *   }
     * })
     * 
     */
    delete<T extends TeamRequestDeleteArgs>(args: SelectSubset<T, TeamRequestDeleteArgs<ExtArgs>>): Prisma__TeamRequestClient<$Result.GetResult<Prisma.$TeamRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamRequest.
     * @param {TeamRequestUpdateArgs} args - Arguments to update one TeamRequest.
     * @example
     * // Update one TeamRequest
     * const teamRequest = await prisma.teamRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamRequestUpdateArgs>(args: SelectSubset<T, TeamRequestUpdateArgs<ExtArgs>>): Prisma__TeamRequestClient<$Result.GetResult<Prisma.$TeamRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamRequests.
     * @param {TeamRequestDeleteManyArgs} args - Arguments to filter TeamRequests to delete.
     * @example
     * // Delete a few TeamRequests
     * const { count } = await prisma.teamRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamRequestDeleteManyArgs>(args?: SelectSubset<T, TeamRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamRequests
     * const teamRequest = await prisma.teamRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamRequestUpdateManyArgs>(args: SelectSubset<T, TeamRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamRequests and returns the data updated in the database.
     * @param {TeamRequestUpdateManyAndReturnArgs} args - Arguments to update many TeamRequests.
     * @example
     * // Update many TeamRequests
     * const teamRequest = await prisma.teamRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamRequests and only return the `id`
     * const teamRequestWithIdOnly = await prisma.teamRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamRequest.
     * @param {TeamRequestUpsertArgs} args - Arguments to update or create a TeamRequest.
     * @example
     * // Update or create a TeamRequest
     * const teamRequest = await prisma.teamRequest.upsert({
     *   create: {
     *     // ... data to create a TeamRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamRequest we want to update
     *   }
     * })
     */
    upsert<T extends TeamRequestUpsertArgs>(args: SelectSubset<T, TeamRequestUpsertArgs<ExtArgs>>): Prisma__TeamRequestClient<$Result.GetResult<Prisma.$TeamRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRequestCountArgs} args - Arguments to filter TeamRequests to count.
     * @example
     * // Count the number of TeamRequests
     * const count = await prisma.teamRequest.count({
     *   where: {
     *     // ... the filter for the TeamRequests we want to count
     *   }
     * })
    **/
    count<T extends TeamRequestCountArgs>(
      args?: Subset<T, TeamRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamRequestAggregateArgs>(args: Subset<T, TeamRequestAggregateArgs>): Prisma.PrismaPromise<GetTeamRequestAggregateType<T>>

    /**
     * Group by TeamRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamRequestGroupByArgs['orderBy'] }
        : { orderBy?: TeamRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamRequest model
   */
  readonly fields: TeamRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamRequest model
   */
  interface TeamRequestFieldRefs {
    readonly id: FieldRef<"TeamRequest", 'String'>
    readonly senderId: FieldRef<"TeamRequest", 'String'>
    readonly receiverId: FieldRef<"TeamRequest", 'String'>
    readonly status: FieldRef<"TeamRequest", 'String'>
    readonly message: FieldRef<"TeamRequest", 'String'>
    readonly createdAt: FieldRef<"TeamRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"TeamRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamRequest findUnique
   */
  export type TeamRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRequest
     */
    select?: TeamRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRequest
     */
    omit?: TeamRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRequestInclude<ExtArgs> | null
    /**
     * Filter, which TeamRequest to fetch.
     */
    where: TeamRequestWhereUniqueInput
  }

  /**
   * TeamRequest findUniqueOrThrow
   */
  export type TeamRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRequest
     */
    select?: TeamRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRequest
     */
    omit?: TeamRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRequestInclude<ExtArgs> | null
    /**
     * Filter, which TeamRequest to fetch.
     */
    where: TeamRequestWhereUniqueInput
  }

  /**
   * TeamRequest findFirst
   */
  export type TeamRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRequest
     */
    select?: TeamRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRequest
     */
    omit?: TeamRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRequestInclude<ExtArgs> | null
    /**
     * Filter, which TeamRequest to fetch.
     */
    where?: TeamRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamRequests to fetch.
     */
    orderBy?: TeamRequestOrderByWithRelationInput | TeamRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamRequests.
     */
    cursor?: TeamRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamRequests.
     */
    distinct?: TeamRequestScalarFieldEnum | TeamRequestScalarFieldEnum[]
  }

  /**
   * TeamRequest findFirstOrThrow
   */
  export type TeamRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRequest
     */
    select?: TeamRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRequest
     */
    omit?: TeamRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRequestInclude<ExtArgs> | null
    /**
     * Filter, which TeamRequest to fetch.
     */
    where?: TeamRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamRequests to fetch.
     */
    orderBy?: TeamRequestOrderByWithRelationInput | TeamRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamRequests.
     */
    cursor?: TeamRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamRequests.
     */
    distinct?: TeamRequestScalarFieldEnum | TeamRequestScalarFieldEnum[]
  }

  /**
   * TeamRequest findMany
   */
  export type TeamRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRequest
     */
    select?: TeamRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRequest
     */
    omit?: TeamRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRequestInclude<ExtArgs> | null
    /**
     * Filter, which TeamRequests to fetch.
     */
    where?: TeamRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamRequests to fetch.
     */
    orderBy?: TeamRequestOrderByWithRelationInput | TeamRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamRequests.
     */
    cursor?: TeamRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamRequests.
     */
    skip?: number
    distinct?: TeamRequestScalarFieldEnum | TeamRequestScalarFieldEnum[]
  }

  /**
   * TeamRequest create
   */
  export type TeamRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRequest
     */
    select?: TeamRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRequest
     */
    omit?: TeamRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamRequest.
     */
    data: XOR<TeamRequestCreateInput, TeamRequestUncheckedCreateInput>
  }

  /**
   * TeamRequest createMany
   */
  export type TeamRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamRequests.
     */
    data: TeamRequestCreateManyInput | TeamRequestCreateManyInput[]
  }

  /**
   * TeamRequest createManyAndReturn
   */
  export type TeamRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRequest
     */
    select?: TeamRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRequest
     */
    omit?: TeamRequestOmit<ExtArgs> | null
    /**
     * The data used to create many TeamRequests.
     */
    data: TeamRequestCreateManyInput | TeamRequestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamRequest update
   */
  export type TeamRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRequest
     */
    select?: TeamRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRequest
     */
    omit?: TeamRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamRequest.
     */
    data: XOR<TeamRequestUpdateInput, TeamRequestUncheckedUpdateInput>
    /**
     * Choose, which TeamRequest to update.
     */
    where: TeamRequestWhereUniqueInput
  }

  /**
   * TeamRequest updateMany
   */
  export type TeamRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamRequests.
     */
    data: XOR<TeamRequestUpdateManyMutationInput, TeamRequestUncheckedUpdateManyInput>
    /**
     * Filter which TeamRequests to update
     */
    where?: TeamRequestWhereInput
    /**
     * Limit how many TeamRequests to update.
     */
    limit?: number
  }

  /**
   * TeamRequest updateManyAndReturn
   */
  export type TeamRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRequest
     */
    select?: TeamRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRequest
     */
    omit?: TeamRequestOmit<ExtArgs> | null
    /**
     * The data used to update TeamRequests.
     */
    data: XOR<TeamRequestUpdateManyMutationInput, TeamRequestUncheckedUpdateManyInput>
    /**
     * Filter which TeamRequests to update
     */
    where?: TeamRequestWhereInput
    /**
     * Limit how many TeamRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamRequest upsert
   */
  export type TeamRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRequest
     */
    select?: TeamRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRequest
     */
    omit?: TeamRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamRequest to update in case it exists.
     */
    where: TeamRequestWhereUniqueInput
    /**
     * In case the TeamRequest found by the `where` argument doesn't exist, create a new TeamRequest with this data.
     */
    create: XOR<TeamRequestCreateInput, TeamRequestUncheckedCreateInput>
    /**
     * In case the TeamRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamRequestUpdateInput, TeamRequestUncheckedUpdateInput>
  }

  /**
   * TeamRequest delete
   */
  export type TeamRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRequest
     */
    select?: TeamRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRequest
     */
    omit?: TeamRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRequestInclude<ExtArgs> | null
    /**
     * Filter which TeamRequest to delete.
     */
    where: TeamRequestWhereUniqueInput
  }

  /**
   * TeamRequest deleteMany
   */
  export type TeamRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamRequests to delete
     */
    where?: TeamRequestWhereInput
    /**
     * Limit how many TeamRequests to delete.
     */
    limit?: number
  }

  /**
   * TeamRequest without action
   */
  export type TeamRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRequest
     */
    select?: TeamRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRequest
     */
    omit?: TeamRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRequestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PreferenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    budgetMin: 'budgetMin',
    budgetMax: 'budgetMax',
    preferredLocation: 'preferredLocation',
    preferenceLabels: 'preferenceLabels',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PreferenceScalarFieldEnum = (typeof PreferenceScalarFieldEnum)[keyof typeof PreferenceScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    location: 'location',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    areaSqFt: 'areaSqFt',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const RequirementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    location: 'location',
    approxRent: 'approxRent',
    lookingFor: 'lookingFor',
    occupancy: 'occupancy',
    highlights: 'highlights',
    interestedInPg: 'interestedInPg',
    phoneVisibility: 'phoneVisibility',
    interestedInTeams: 'interestedInTeams',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type RequirementScalarFieldEnum = (typeof RequirementScalarFieldEnum)[keyof typeof RequirementScalarFieldEnum]


  export const RoomListingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    location: 'location',
    approxRent: 'approxRent',
    occupancy: 'occupancy',
    lookingFor: 'lookingFor',
    highlights: 'highlights',
    amenities: 'amenities',
    phoneVisibility: 'phoneVisibility',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type RoomListingScalarFieldEnum = (typeof RoomListingScalarFieldEnum)[keyof typeof RoomListingScalarFieldEnum]


  export const TeamRequestScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    status: 'status',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamRequestScalarFieldEnum = (typeof TeamRequestScalarFieldEnum)[keyof typeof TeamRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    preferences?: XOR<PreferenceNullableScalarRelationFilter, PreferenceWhereInput> | null
    requirements?: RequirementListRelationFilter
    roomListings?: RoomListingListRelationFilter
    sentRequests?: TeamRequestListRelationFilter
    receivedRequests?: TeamRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    preferences?: PreferenceOrderByWithRelationInput
    requirements?: RequirementOrderByRelationAggregateInput
    roomListings?: RoomListingOrderByRelationAggregateInput
    sentRequests?: TeamRequestOrderByRelationAggregateInput
    receivedRequests?: TeamRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    preferences?: XOR<PreferenceNullableScalarRelationFilter, PreferenceWhereInput> | null
    requirements?: RequirementListRelationFilter
    roomListings?: RoomListingListRelationFilter
    sentRequests?: TeamRequestListRelationFilter
    receivedRequests?: TeamRequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PreferenceWhereInput = {
    AND?: PreferenceWhereInput | PreferenceWhereInput[]
    OR?: PreferenceWhereInput[]
    NOT?: PreferenceWhereInput | PreferenceWhereInput[]
    id?: StringFilter<"Preference"> | string
    userId?: StringFilter<"Preference"> | string
    budgetMin?: IntNullableFilter<"Preference"> | number | null
    budgetMax?: IntNullableFilter<"Preference"> | number | null
    preferredLocation?: StringNullableFilter<"Preference"> | string | null
    preferenceLabels?: StringNullableFilter<"Preference"> | string | null
    bedrooms?: IntNullableFilter<"Preference"> | number | null
    bathrooms?: IntNullableFilter<"Preference"> | number | null
    createdAt?: DateTimeFilter<"Preference"> | Date | string
    updatedAt?: DateTimeFilter<"Preference"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PreferenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    budgetMin?: SortOrderInput | SortOrder
    budgetMax?: SortOrderInput | SortOrder
    preferredLocation?: SortOrderInput | SortOrder
    preferenceLabels?: SortOrderInput | SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PreferenceWhereInput | PreferenceWhereInput[]
    OR?: PreferenceWhereInput[]
    NOT?: PreferenceWhereInput | PreferenceWhereInput[]
    budgetMin?: IntNullableFilter<"Preference"> | number | null
    budgetMax?: IntNullableFilter<"Preference"> | number | null
    preferredLocation?: StringNullableFilter<"Preference"> | string | null
    preferenceLabels?: StringNullableFilter<"Preference"> | string | null
    bedrooms?: IntNullableFilter<"Preference"> | number | null
    bathrooms?: IntNullableFilter<"Preference"> | number | null
    createdAt?: DateTimeFilter<"Preference"> | Date | string
    updatedAt?: DateTimeFilter<"Preference"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type PreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    budgetMin?: SortOrderInput | SortOrder
    budgetMax?: SortOrderInput | SortOrder
    preferredLocation?: SortOrderInput | SortOrder
    preferenceLabels?: SortOrderInput | SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PreferenceCountOrderByAggregateInput
    _avg?: PreferenceAvgOrderByAggregateInput
    _max?: PreferenceMaxOrderByAggregateInput
    _min?: PreferenceMinOrderByAggregateInput
    _sum?: PreferenceSumOrderByAggregateInput
  }

  export type PreferenceScalarWhereWithAggregatesInput = {
    AND?: PreferenceScalarWhereWithAggregatesInput | PreferenceScalarWhereWithAggregatesInput[]
    OR?: PreferenceScalarWhereWithAggregatesInput[]
    NOT?: PreferenceScalarWhereWithAggregatesInput | PreferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Preference"> | string
    userId?: StringWithAggregatesFilter<"Preference"> | string
    budgetMin?: IntNullableWithAggregatesFilter<"Preference"> | number | null
    budgetMax?: IntNullableWithAggregatesFilter<"Preference"> | number | null
    preferredLocation?: StringNullableWithAggregatesFilter<"Preference"> | string | null
    preferenceLabels?: StringNullableWithAggregatesFilter<"Preference"> | string | null
    bedrooms?: IntNullableWithAggregatesFilter<"Preference"> | number | null
    bathrooms?: IntNullableWithAggregatesFilter<"Preference"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Preference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Preference"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    title?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    price?: IntFilter<"Property"> | number
    location?: StringFilter<"Property"> | string
    bedrooms?: IntFilter<"Property"> | number
    bathrooms?: IntFilter<"Property"> | number
    areaSqFt?: IntFilter<"Property"> | number
    imageUrl?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    areaSqFt?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    title?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    price?: IntFilter<"Property"> | number
    location?: StringFilter<"Property"> | string
    bedrooms?: IntFilter<"Property"> | number
    bathrooms?: IntFilter<"Property"> | number
    areaSqFt?: IntFilter<"Property"> | number
    imageUrl?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    areaSqFt?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    title?: StringWithAggregatesFilter<"Property"> | string
    description?: StringWithAggregatesFilter<"Property"> | string
    price?: IntWithAggregatesFilter<"Property"> | number
    location?: StringWithAggregatesFilter<"Property"> | string
    bedrooms?: IntWithAggregatesFilter<"Property"> | number
    bathrooms?: IntWithAggregatesFilter<"Property"> | number
    areaSqFt?: IntWithAggregatesFilter<"Property"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Property"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type RequirementWhereInput = {
    AND?: RequirementWhereInput | RequirementWhereInput[]
    OR?: RequirementWhereInput[]
    NOT?: RequirementWhereInput | RequirementWhereInput[]
    id?: StringFilter<"Requirement"> | string
    userId?: StringFilter<"Requirement"> | string
    location?: StringFilter<"Requirement"> | string
    approxRent?: IntFilter<"Requirement"> | number
    lookingFor?: StringFilter<"Requirement"> | string
    occupancy?: StringFilter<"Requirement"> | string
    highlights?: StringNullableFilter<"Requirement"> | string | null
    interestedInPg?: BoolFilter<"Requirement"> | boolean
    phoneVisibility?: StringFilter<"Requirement"> | string
    interestedInTeams?: BoolFilter<"Requirement"> | boolean
    description?: StringFilter<"Requirement"> | string
    createdAt?: DateTimeFilter<"Requirement"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RequirementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    location?: SortOrder
    approxRent?: SortOrder
    lookingFor?: SortOrder
    occupancy?: SortOrder
    highlights?: SortOrderInput | SortOrder
    interestedInPg?: SortOrder
    phoneVisibility?: SortOrder
    interestedInTeams?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequirementWhereInput | RequirementWhereInput[]
    OR?: RequirementWhereInput[]
    NOT?: RequirementWhereInput | RequirementWhereInput[]
    userId?: StringFilter<"Requirement"> | string
    location?: StringFilter<"Requirement"> | string
    approxRent?: IntFilter<"Requirement"> | number
    lookingFor?: StringFilter<"Requirement"> | string
    occupancy?: StringFilter<"Requirement"> | string
    highlights?: StringNullableFilter<"Requirement"> | string | null
    interestedInPg?: BoolFilter<"Requirement"> | boolean
    phoneVisibility?: StringFilter<"Requirement"> | string
    interestedInTeams?: BoolFilter<"Requirement"> | boolean
    description?: StringFilter<"Requirement"> | string
    createdAt?: DateTimeFilter<"Requirement"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RequirementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    location?: SortOrder
    approxRent?: SortOrder
    lookingFor?: SortOrder
    occupancy?: SortOrder
    highlights?: SortOrderInput | SortOrder
    interestedInPg?: SortOrder
    phoneVisibility?: SortOrder
    interestedInTeams?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: RequirementCountOrderByAggregateInput
    _avg?: RequirementAvgOrderByAggregateInput
    _max?: RequirementMaxOrderByAggregateInput
    _min?: RequirementMinOrderByAggregateInput
    _sum?: RequirementSumOrderByAggregateInput
  }

  export type RequirementScalarWhereWithAggregatesInput = {
    AND?: RequirementScalarWhereWithAggregatesInput | RequirementScalarWhereWithAggregatesInput[]
    OR?: RequirementScalarWhereWithAggregatesInput[]
    NOT?: RequirementScalarWhereWithAggregatesInput | RequirementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Requirement"> | string
    userId?: StringWithAggregatesFilter<"Requirement"> | string
    location?: StringWithAggregatesFilter<"Requirement"> | string
    approxRent?: IntWithAggregatesFilter<"Requirement"> | number
    lookingFor?: StringWithAggregatesFilter<"Requirement"> | string
    occupancy?: StringWithAggregatesFilter<"Requirement"> | string
    highlights?: StringNullableWithAggregatesFilter<"Requirement"> | string | null
    interestedInPg?: BoolWithAggregatesFilter<"Requirement"> | boolean
    phoneVisibility?: StringWithAggregatesFilter<"Requirement"> | string
    interestedInTeams?: BoolWithAggregatesFilter<"Requirement"> | boolean
    description?: StringWithAggregatesFilter<"Requirement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Requirement"> | Date | string
  }

  export type RoomListingWhereInput = {
    AND?: RoomListingWhereInput | RoomListingWhereInput[]
    OR?: RoomListingWhereInput[]
    NOT?: RoomListingWhereInput | RoomListingWhereInput[]
    id?: StringFilter<"RoomListing"> | string
    userId?: StringFilter<"RoomListing"> | string
    location?: StringFilter<"RoomListing"> | string
    approxRent?: IntFilter<"RoomListing"> | number
    occupancy?: StringFilter<"RoomListing"> | string
    lookingFor?: StringNullableFilter<"RoomListing"> | string | null
    highlights?: StringNullableFilter<"RoomListing"> | string | null
    amenities?: StringNullableFilter<"RoomListing"> | string | null
    phoneVisibility?: StringFilter<"RoomListing"> | string
    description?: StringFilter<"RoomListing"> | string
    createdAt?: DateTimeFilter<"RoomListing"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RoomListingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    location?: SortOrder
    approxRent?: SortOrder
    occupancy?: SortOrder
    lookingFor?: SortOrderInput | SortOrder
    highlights?: SortOrderInput | SortOrder
    amenities?: SortOrderInput | SortOrder
    phoneVisibility?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RoomListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomListingWhereInput | RoomListingWhereInput[]
    OR?: RoomListingWhereInput[]
    NOT?: RoomListingWhereInput | RoomListingWhereInput[]
    userId?: StringFilter<"RoomListing"> | string
    location?: StringFilter<"RoomListing"> | string
    approxRent?: IntFilter<"RoomListing"> | number
    occupancy?: StringFilter<"RoomListing"> | string
    lookingFor?: StringNullableFilter<"RoomListing"> | string | null
    highlights?: StringNullableFilter<"RoomListing"> | string | null
    amenities?: StringNullableFilter<"RoomListing"> | string | null
    phoneVisibility?: StringFilter<"RoomListing"> | string
    description?: StringFilter<"RoomListing"> | string
    createdAt?: DateTimeFilter<"RoomListing"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RoomListingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    location?: SortOrder
    approxRent?: SortOrder
    occupancy?: SortOrder
    lookingFor?: SortOrderInput | SortOrder
    highlights?: SortOrderInput | SortOrder
    amenities?: SortOrderInput | SortOrder
    phoneVisibility?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: RoomListingCountOrderByAggregateInput
    _avg?: RoomListingAvgOrderByAggregateInput
    _max?: RoomListingMaxOrderByAggregateInput
    _min?: RoomListingMinOrderByAggregateInput
    _sum?: RoomListingSumOrderByAggregateInput
  }

  export type RoomListingScalarWhereWithAggregatesInput = {
    AND?: RoomListingScalarWhereWithAggregatesInput | RoomListingScalarWhereWithAggregatesInput[]
    OR?: RoomListingScalarWhereWithAggregatesInput[]
    NOT?: RoomListingScalarWhereWithAggregatesInput | RoomListingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomListing"> | string
    userId?: StringWithAggregatesFilter<"RoomListing"> | string
    location?: StringWithAggregatesFilter<"RoomListing"> | string
    approxRent?: IntWithAggregatesFilter<"RoomListing"> | number
    occupancy?: StringWithAggregatesFilter<"RoomListing"> | string
    lookingFor?: StringNullableWithAggregatesFilter<"RoomListing"> | string | null
    highlights?: StringNullableWithAggregatesFilter<"RoomListing"> | string | null
    amenities?: StringNullableWithAggregatesFilter<"RoomListing"> | string | null
    phoneVisibility?: StringWithAggregatesFilter<"RoomListing"> | string
    description?: StringWithAggregatesFilter<"RoomListing"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RoomListing"> | Date | string
  }

  export type TeamRequestWhereInput = {
    AND?: TeamRequestWhereInput | TeamRequestWhereInput[]
    OR?: TeamRequestWhereInput[]
    NOT?: TeamRequestWhereInput | TeamRequestWhereInput[]
    id?: StringFilter<"TeamRequest"> | string
    senderId?: StringFilter<"TeamRequest"> | string
    receiverId?: StringFilter<"TeamRequest"> | string
    status?: StringFilter<"TeamRequest"> | string
    message?: StringNullableFilter<"TeamRequest"> | string | null
    createdAt?: DateTimeFilter<"TeamRequest"> | Date | string
    updatedAt?: DateTimeFilter<"TeamRequest"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TeamRequestOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type TeamRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamRequestWhereInput | TeamRequestWhereInput[]
    OR?: TeamRequestWhereInput[]
    NOT?: TeamRequestWhereInput | TeamRequestWhereInput[]
    senderId?: StringFilter<"TeamRequest"> | string
    receiverId?: StringFilter<"TeamRequest"> | string
    status?: StringFilter<"TeamRequest"> | string
    message?: StringNullableFilter<"TeamRequest"> | string | null
    createdAt?: DateTimeFilter<"TeamRequest"> | Date | string
    updatedAt?: DateTimeFilter<"TeamRequest"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TeamRequestOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamRequestCountOrderByAggregateInput
    _max?: TeamRequestMaxOrderByAggregateInput
    _min?: TeamRequestMinOrderByAggregateInput
  }

  export type TeamRequestScalarWhereWithAggregatesInput = {
    AND?: TeamRequestScalarWhereWithAggregatesInput | TeamRequestScalarWhereWithAggregatesInput[]
    OR?: TeamRequestScalarWhereWithAggregatesInput[]
    NOT?: TeamRequestScalarWhereWithAggregatesInput | TeamRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamRequest"> | string
    senderId?: StringWithAggregatesFilter<"TeamRequest"> | string
    receiverId?: StringWithAggregatesFilter<"TeamRequest"> | string
    status?: StringWithAggregatesFilter<"TeamRequest"> | string
    message?: StringNullableWithAggregatesFilter<"TeamRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TeamRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeamRequest"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: PreferenceCreateNestedOneWithoutUserInput
    requirements?: RequirementCreateNestedManyWithoutUserInput
    roomListings?: RoomListingCreateNestedManyWithoutUserInput
    sentRequests?: TeamRequestCreateNestedManyWithoutSenderInput
    receivedRequests?: TeamRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    requirements?: RequirementUncheckedCreateNestedManyWithoutUserInput
    roomListings?: RoomListingUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: TeamRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: TeamRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUpdateOneWithoutUserNestedInput
    requirements?: RequirementUpdateManyWithoutUserNestedInput
    roomListings?: RoomListingUpdateManyWithoutUserNestedInput
    sentRequests?: TeamRequestUpdateManyWithoutSenderNestedInput
    receivedRequests?: TeamRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    requirements?: RequirementUncheckedUpdateManyWithoutUserNestedInput
    roomListings?: RoomListingUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: TeamRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: TeamRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferenceCreateInput = {
    id?: string
    budgetMin?: number | null
    budgetMax?: number | null
    preferredLocation?: string | null
    preferenceLabels?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type PreferenceUncheckedCreateInput = {
    id?: string
    userId: string
    budgetMin?: number | null
    budgetMax?: number | null
    preferredLocation?: string | null
    preferenceLabels?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableIntFieldUpdateOperationsInput | number | null
    preferredLocation?: NullableStringFieldUpdateOperationsInput | string | null
    preferenceLabels?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type PreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    budgetMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableIntFieldUpdateOperationsInput | number | null
    preferredLocation?: NullableStringFieldUpdateOperationsInput | string | null
    preferenceLabels?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferenceCreateManyInput = {
    id?: string
    userId: string
    budgetMin?: number | null
    budgetMax?: number | null
    preferredLocation?: string | null
    preferenceLabels?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableIntFieldUpdateOperationsInput | number | null
    preferredLocation?: NullableStringFieldUpdateOperationsInput | string | null
    preferenceLabels?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    budgetMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableIntFieldUpdateOperationsInput | number | null
    preferredLocation?: NullableStringFieldUpdateOperationsInput | string | null
    preferenceLabels?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    areaSqFt: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    areaSqFt: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    areaSqFt?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    areaSqFt?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateManyInput = {
    id?: string
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    areaSqFt: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    areaSqFt?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    areaSqFt?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementCreateInput = {
    id?: string
    location: string
    approxRent: number
    lookingFor: string
    occupancy: string
    highlights?: string | null
    interestedInPg: boolean
    phoneVisibility: string
    interestedInTeams: boolean
    description: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRequirementsInput
  }

  export type RequirementUncheckedCreateInput = {
    id?: string
    userId: string
    location: string
    approxRent: number
    lookingFor: string
    occupancy: string
    highlights?: string | null
    interestedInPg: boolean
    phoneVisibility: string
    interestedInTeams: boolean
    description: string
    createdAt?: Date | string
  }

  export type RequirementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    approxRent?: IntFieldUpdateOperationsInput | number
    lookingFor?: StringFieldUpdateOperationsInput | string
    occupancy?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    interestedInPg?: BoolFieldUpdateOperationsInput | boolean
    phoneVisibility?: StringFieldUpdateOperationsInput | string
    interestedInTeams?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequirementsNestedInput
  }

  export type RequirementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    approxRent?: IntFieldUpdateOperationsInput | number
    lookingFor?: StringFieldUpdateOperationsInput | string
    occupancy?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    interestedInPg?: BoolFieldUpdateOperationsInput | boolean
    phoneVisibility?: StringFieldUpdateOperationsInput | string
    interestedInTeams?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementCreateManyInput = {
    id?: string
    userId: string
    location: string
    approxRent: number
    lookingFor: string
    occupancy: string
    highlights?: string | null
    interestedInPg: boolean
    phoneVisibility: string
    interestedInTeams: boolean
    description: string
    createdAt?: Date | string
  }

  export type RequirementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    approxRent?: IntFieldUpdateOperationsInput | number
    lookingFor?: StringFieldUpdateOperationsInput | string
    occupancy?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    interestedInPg?: BoolFieldUpdateOperationsInput | boolean
    phoneVisibility?: StringFieldUpdateOperationsInput | string
    interestedInTeams?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    approxRent?: IntFieldUpdateOperationsInput | number
    lookingFor?: StringFieldUpdateOperationsInput | string
    occupancy?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    interestedInPg?: BoolFieldUpdateOperationsInput | boolean
    phoneVisibility?: StringFieldUpdateOperationsInput | string
    interestedInTeams?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomListingCreateInput = {
    id?: string
    location: string
    approxRent: number
    occupancy: string
    lookingFor?: string | null
    highlights?: string | null
    amenities?: string | null
    phoneVisibility: string
    description: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRoomListingsInput
  }

  export type RoomListingUncheckedCreateInput = {
    id?: string
    userId: string
    location: string
    approxRent: number
    occupancy: string
    lookingFor?: string | null
    highlights?: string | null
    amenities?: string | null
    phoneVisibility: string
    description: string
    createdAt?: Date | string
  }

  export type RoomListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    approxRent?: IntFieldUpdateOperationsInput | number
    occupancy?: StringFieldUpdateOperationsInput | string
    lookingFor?: NullableStringFieldUpdateOperationsInput | string | null
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVisibility?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoomListingsNestedInput
  }

  export type RoomListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    approxRent?: IntFieldUpdateOperationsInput | number
    occupancy?: StringFieldUpdateOperationsInput | string
    lookingFor?: NullableStringFieldUpdateOperationsInput | string | null
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVisibility?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomListingCreateManyInput = {
    id?: string
    userId: string
    location: string
    approxRent: number
    occupancy: string
    lookingFor?: string | null
    highlights?: string | null
    amenities?: string | null
    phoneVisibility: string
    description: string
    createdAt?: Date | string
  }

  export type RoomListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    approxRent?: IntFieldUpdateOperationsInput | number
    occupancy?: StringFieldUpdateOperationsInput | string
    lookingFor?: NullableStringFieldUpdateOperationsInput | string | null
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVisibility?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    approxRent?: IntFieldUpdateOperationsInput | number
    occupancy?: StringFieldUpdateOperationsInput | string
    lookingFor?: NullableStringFieldUpdateOperationsInput | string | null
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVisibility?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamRequestCreateInput = {
    id?: string
    status?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentRequestsInput
    receiver: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type TeamRequestUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    status?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type TeamRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamRequestCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    status?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PreferenceNullableScalarRelationFilter = {
    is?: PreferenceWhereInput | null
    isNot?: PreferenceWhereInput | null
  }

  export type RequirementListRelationFilter = {
    every?: RequirementWhereInput
    some?: RequirementWhereInput
    none?: RequirementWhereInput
  }

  export type RoomListingListRelationFilter = {
    every?: RoomListingWhereInput
    some?: RoomListingWhereInput
    none?: RoomListingWhereInput
  }

  export type TeamRequestListRelationFilter = {
    every?: TeamRequestWhereInput
    some?: TeamRequestWhereInput
    none?: TeamRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RequirementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    budgetMin?: SortOrder
    budgetMax?: SortOrder
    preferredLocation?: SortOrder
    preferenceLabels?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreferenceAvgOrderByAggregateInput = {
    budgetMin?: SortOrder
    budgetMax?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
  }

  export type PreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    budgetMin?: SortOrder
    budgetMax?: SortOrder
    preferredLocation?: SortOrder
    preferenceLabels?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    budgetMin?: SortOrder
    budgetMax?: SortOrder
    preferredLocation?: SortOrder
    preferenceLabels?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreferenceSumOrderByAggregateInput = {
    budgetMin?: SortOrder
    budgetMax?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    areaSqFt?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    areaSqFt?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    areaSqFt?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    areaSqFt?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    areaSqFt?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RequirementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    location?: SortOrder
    approxRent?: SortOrder
    lookingFor?: SortOrder
    occupancy?: SortOrder
    highlights?: SortOrder
    interestedInPg?: SortOrder
    phoneVisibility?: SortOrder
    interestedInTeams?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type RequirementAvgOrderByAggregateInput = {
    approxRent?: SortOrder
  }

  export type RequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    location?: SortOrder
    approxRent?: SortOrder
    lookingFor?: SortOrder
    occupancy?: SortOrder
    highlights?: SortOrder
    interestedInPg?: SortOrder
    phoneVisibility?: SortOrder
    interestedInTeams?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type RequirementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    location?: SortOrder
    approxRent?: SortOrder
    lookingFor?: SortOrder
    occupancy?: SortOrder
    highlights?: SortOrder
    interestedInPg?: SortOrder
    phoneVisibility?: SortOrder
    interestedInTeams?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type RequirementSumOrderByAggregateInput = {
    approxRent?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoomListingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    location?: SortOrder
    approxRent?: SortOrder
    occupancy?: SortOrder
    lookingFor?: SortOrder
    highlights?: SortOrder
    amenities?: SortOrder
    phoneVisibility?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomListingAvgOrderByAggregateInput = {
    approxRent?: SortOrder
  }

  export type RoomListingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    location?: SortOrder
    approxRent?: SortOrder
    occupancy?: SortOrder
    lookingFor?: SortOrder
    highlights?: SortOrder
    amenities?: SortOrder
    phoneVisibility?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomListingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    location?: SortOrder
    approxRent?: SortOrder
    occupancy?: SortOrder
    lookingFor?: SortOrder
    highlights?: SortOrder
    amenities?: SortOrder
    phoneVisibility?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomListingSumOrderByAggregateInput = {
    approxRent?: SortOrder
  }

  export type TeamRequestCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamRequestMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreferenceCreateNestedOneWithoutUserInput = {
    create?: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferenceCreateOrConnectWithoutUserInput
    connect?: PreferenceWhereUniqueInput
  }

  export type RequirementCreateNestedManyWithoutUserInput = {
    create?: XOR<RequirementCreateWithoutUserInput, RequirementUncheckedCreateWithoutUserInput> | RequirementCreateWithoutUserInput[] | RequirementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequirementCreateOrConnectWithoutUserInput | RequirementCreateOrConnectWithoutUserInput[]
    createMany?: RequirementCreateManyUserInputEnvelope
    connect?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
  }

  export type RoomListingCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomListingCreateWithoutUserInput, RoomListingUncheckedCreateWithoutUserInput> | RoomListingCreateWithoutUserInput[] | RoomListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomListingCreateOrConnectWithoutUserInput | RoomListingCreateOrConnectWithoutUserInput[]
    createMany?: RoomListingCreateManyUserInputEnvelope
    connect?: RoomListingWhereUniqueInput | RoomListingWhereUniqueInput[]
  }

  export type TeamRequestCreateNestedManyWithoutSenderInput = {
    create?: XOR<TeamRequestCreateWithoutSenderInput, TeamRequestUncheckedCreateWithoutSenderInput> | TeamRequestCreateWithoutSenderInput[] | TeamRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TeamRequestCreateOrConnectWithoutSenderInput | TeamRequestCreateOrConnectWithoutSenderInput[]
    createMany?: TeamRequestCreateManySenderInputEnvelope
    connect?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
  }

  export type TeamRequestCreateNestedManyWithoutReceiverInput = {
    create?: XOR<TeamRequestCreateWithoutReceiverInput, TeamRequestUncheckedCreateWithoutReceiverInput> | TeamRequestCreateWithoutReceiverInput[] | TeamRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TeamRequestCreateOrConnectWithoutReceiverInput | TeamRequestCreateOrConnectWithoutReceiverInput[]
    createMany?: TeamRequestCreateManyReceiverInputEnvelope
    connect?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
  }

  export type PreferenceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferenceCreateOrConnectWithoutUserInput
    connect?: PreferenceWhereUniqueInput
  }

  export type RequirementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RequirementCreateWithoutUserInput, RequirementUncheckedCreateWithoutUserInput> | RequirementCreateWithoutUserInput[] | RequirementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequirementCreateOrConnectWithoutUserInput | RequirementCreateOrConnectWithoutUserInput[]
    createMany?: RequirementCreateManyUserInputEnvelope
    connect?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
  }

  export type RoomListingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomListingCreateWithoutUserInput, RoomListingUncheckedCreateWithoutUserInput> | RoomListingCreateWithoutUserInput[] | RoomListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomListingCreateOrConnectWithoutUserInput | RoomListingCreateOrConnectWithoutUserInput[]
    createMany?: RoomListingCreateManyUserInputEnvelope
    connect?: RoomListingWhereUniqueInput | RoomListingWhereUniqueInput[]
  }

  export type TeamRequestUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<TeamRequestCreateWithoutSenderInput, TeamRequestUncheckedCreateWithoutSenderInput> | TeamRequestCreateWithoutSenderInput[] | TeamRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TeamRequestCreateOrConnectWithoutSenderInput | TeamRequestCreateOrConnectWithoutSenderInput[]
    createMany?: TeamRequestCreateManySenderInputEnvelope
    connect?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
  }

  export type TeamRequestUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<TeamRequestCreateWithoutReceiverInput, TeamRequestUncheckedCreateWithoutReceiverInput> | TeamRequestCreateWithoutReceiverInput[] | TeamRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TeamRequestCreateOrConnectWithoutReceiverInput | TeamRequestCreateOrConnectWithoutReceiverInput[]
    createMany?: TeamRequestCreateManyReceiverInputEnvelope
    connect?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PreferenceUpdateOneWithoutUserNestedInput = {
    create?: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferenceCreateOrConnectWithoutUserInput
    upsert?: PreferenceUpsertWithoutUserInput
    disconnect?: PreferenceWhereInput | boolean
    delete?: PreferenceWhereInput | boolean
    connect?: PreferenceWhereUniqueInput
    update?: XOR<XOR<PreferenceUpdateToOneWithWhereWithoutUserInput, PreferenceUpdateWithoutUserInput>, PreferenceUncheckedUpdateWithoutUserInput>
  }

  export type RequirementUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequirementCreateWithoutUserInput, RequirementUncheckedCreateWithoutUserInput> | RequirementCreateWithoutUserInput[] | RequirementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequirementCreateOrConnectWithoutUserInput | RequirementCreateOrConnectWithoutUserInput[]
    upsert?: RequirementUpsertWithWhereUniqueWithoutUserInput | RequirementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequirementCreateManyUserInputEnvelope
    set?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    disconnect?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    delete?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    connect?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    update?: RequirementUpdateWithWhereUniqueWithoutUserInput | RequirementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequirementUpdateManyWithWhereWithoutUserInput | RequirementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequirementScalarWhereInput | RequirementScalarWhereInput[]
  }

  export type RoomListingUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomListingCreateWithoutUserInput, RoomListingUncheckedCreateWithoutUserInput> | RoomListingCreateWithoutUserInput[] | RoomListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomListingCreateOrConnectWithoutUserInput | RoomListingCreateOrConnectWithoutUserInput[]
    upsert?: RoomListingUpsertWithWhereUniqueWithoutUserInput | RoomListingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomListingCreateManyUserInputEnvelope
    set?: RoomListingWhereUniqueInput | RoomListingWhereUniqueInput[]
    disconnect?: RoomListingWhereUniqueInput | RoomListingWhereUniqueInput[]
    delete?: RoomListingWhereUniqueInput | RoomListingWhereUniqueInput[]
    connect?: RoomListingWhereUniqueInput | RoomListingWhereUniqueInput[]
    update?: RoomListingUpdateWithWhereUniqueWithoutUserInput | RoomListingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomListingUpdateManyWithWhereWithoutUserInput | RoomListingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomListingScalarWhereInput | RoomListingScalarWhereInput[]
  }

  export type TeamRequestUpdateManyWithoutSenderNestedInput = {
    create?: XOR<TeamRequestCreateWithoutSenderInput, TeamRequestUncheckedCreateWithoutSenderInput> | TeamRequestCreateWithoutSenderInput[] | TeamRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TeamRequestCreateOrConnectWithoutSenderInput | TeamRequestCreateOrConnectWithoutSenderInput[]
    upsert?: TeamRequestUpsertWithWhereUniqueWithoutSenderInput | TeamRequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: TeamRequestCreateManySenderInputEnvelope
    set?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    disconnect?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    delete?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    connect?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    update?: TeamRequestUpdateWithWhereUniqueWithoutSenderInput | TeamRequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: TeamRequestUpdateManyWithWhereWithoutSenderInput | TeamRequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: TeamRequestScalarWhereInput | TeamRequestScalarWhereInput[]
  }

  export type TeamRequestUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<TeamRequestCreateWithoutReceiverInput, TeamRequestUncheckedCreateWithoutReceiverInput> | TeamRequestCreateWithoutReceiverInput[] | TeamRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TeamRequestCreateOrConnectWithoutReceiverInput | TeamRequestCreateOrConnectWithoutReceiverInput[]
    upsert?: TeamRequestUpsertWithWhereUniqueWithoutReceiverInput | TeamRequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: TeamRequestCreateManyReceiverInputEnvelope
    set?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    disconnect?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    delete?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    connect?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    update?: TeamRequestUpdateWithWhereUniqueWithoutReceiverInput | TeamRequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: TeamRequestUpdateManyWithWhereWithoutReceiverInput | TeamRequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: TeamRequestScalarWhereInput | TeamRequestScalarWhereInput[]
  }

  export type PreferenceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferenceCreateOrConnectWithoutUserInput
    upsert?: PreferenceUpsertWithoutUserInput
    disconnect?: PreferenceWhereInput | boolean
    delete?: PreferenceWhereInput | boolean
    connect?: PreferenceWhereUniqueInput
    update?: XOR<XOR<PreferenceUpdateToOneWithWhereWithoutUserInput, PreferenceUpdateWithoutUserInput>, PreferenceUncheckedUpdateWithoutUserInput>
  }

  export type RequirementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequirementCreateWithoutUserInput, RequirementUncheckedCreateWithoutUserInput> | RequirementCreateWithoutUserInput[] | RequirementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequirementCreateOrConnectWithoutUserInput | RequirementCreateOrConnectWithoutUserInput[]
    upsert?: RequirementUpsertWithWhereUniqueWithoutUserInput | RequirementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequirementCreateManyUserInputEnvelope
    set?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    disconnect?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    delete?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    connect?: RequirementWhereUniqueInput | RequirementWhereUniqueInput[]
    update?: RequirementUpdateWithWhereUniqueWithoutUserInput | RequirementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequirementUpdateManyWithWhereWithoutUserInput | RequirementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequirementScalarWhereInput | RequirementScalarWhereInput[]
  }

  export type RoomListingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomListingCreateWithoutUserInput, RoomListingUncheckedCreateWithoutUserInput> | RoomListingCreateWithoutUserInput[] | RoomListingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomListingCreateOrConnectWithoutUserInput | RoomListingCreateOrConnectWithoutUserInput[]
    upsert?: RoomListingUpsertWithWhereUniqueWithoutUserInput | RoomListingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomListingCreateManyUserInputEnvelope
    set?: RoomListingWhereUniqueInput | RoomListingWhereUniqueInput[]
    disconnect?: RoomListingWhereUniqueInput | RoomListingWhereUniqueInput[]
    delete?: RoomListingWhereUniqueInput | RoomListingWhereUniqueInput[]
    connect?: RoomListingWhereUniqueInput | RoomListingWhereUniqueInput[]
    update?: RoomListingUpdateWithWhereUniqueWithoutUserInput | RoomListingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomListingUpdateManyWithWhereWithoutUserInput | RoomListingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomListingScalarWhereInput | RoomListingScalarWhereInput[]
  }

  export type TeamRequestUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<TeamRequestCreateWithoutSenderInput, TeamRequestUncheckedCreateWithoutSenderInput> | TeamRequestCreateWithoutSenderInput[] | TeamRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TeamRequestCreateOrConnectWithoutSenderInput | TeamRequestCreateOrConnectWithoutSenderInput[]
    upsert?: TeamRequestUpsertWithWhereUniqueWithoutSenderInput | TeamRequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: TeamRequestCreateManySenderInputEnvelope
    set?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    disconnect?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    delete?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    connect?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    update?: TeamRequestUpdateWithWhereUniqueWithoutSenderInput | TeamRequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: TeamRequestUpdateManyWithWhereWithoutSenderInput | TeamRequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: TeamRequestScalarWhereInput | TeamRequestScalarWhereInput[]
  }

  export type TeamRequestUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<TeamRequestCreateWithoutReceiverInput, TeamRequestUncheckedCreateWithoutReceiverInput> | TeamRequestCreateWithoutReceiverInput[] | TeamRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TeamRequestCreateOrConnectWithoutReceiverInput | TeamRequestCreateOrConnectWithoutReceiverInput[]
    upsert?: TeamRequestUpsertWithWhereUniqueWithoutReceiverInput | TeamRequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: TeamRequestCreateManyReceiverInputEnvelope
    set?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    disconnect?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    delete?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    connect?: TeamRequestWhereUniqueInput | TeamRequestWhereUniqueInput[]
    update?: TeamRequestUpdateWithWhereUniqueWithoutReceiverInput | TeamRequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: TeamRequestUpdateManyWithWhereWithoutReceiverInput | TeamRequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: TeamRequestScalarWhereInput | TeamRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutRequirementsInput = {
    create?: XOR<UserCreateWithoutRequirementsInput, UserUncheckedCreateWithoutRequirementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequirementsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutRequirementsNestedInput = {
    create?: XOR<UserCreateWithoutRequirementsInput, UserUncheckedCreateWithoutRequirementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequirementsInput
    upsert?: UserUpsertWithoutRequirementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequirementsInput, UserUpdateWithoutRequirementsInput>, UserUncheckedUpdateWithoutRequirementsInput>
  }

  export type UserCreateNestedOneWithoutRoomListingsInput = {
    create?: XOR<UserCreateWithoutRoomListingsInput, UserUncheckedCreateWithoutRoomListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomListingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRoomListingsNestedInput = {
    create?: XOR<UserCreateWithoutRoomListingsInput, UserUncheckedCreateWithoutRoomListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomListingsInput
    upsert?: UserUpsertWithoutRoomListingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomListingsInput, UserUpdateWithoutRoomListingsInput>, UserUncheckedUpdateWithoutRoomListingsInput>
  }

  export type UserCreateNestedOneWithoutSentRequestsInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    upsert?: UserUpsertWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentRequestsInput, UserUpdateWithoutSentRequestsInput>, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    upsert?: UserUpsertWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedRequestsInput, UserUpdateWithoutReceivedRequestsInput>, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PreferenceCreateWithoutUserInput = {
    id?: string
    budgetMin?: number | null
    budgetMax?: number | null
    preferredLocation?: string | null
    preferenceLabels?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreferenceUncheckedCreateWithoutUserInput = {
    id?: string
    budgetMin?: number | null
    budgetMax?: number | null
    preferredLocation?: string | null
    preferenceLabels?: string | null
    bedrooms?: number | null
    bathrooms?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreferenceCreateOrConnectWithoutUserInput = {
    where: PreferenceWhereUniqueInput
    create: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
  }

  export type RequirementCreateWithoutUserInput = {
    id?: string
    location: string
    approxRent: number
    lookingFor: string
    occupancy: string
    highlights?: string | null
    interestedInPg: boolean
    phoneVisibility: string
    interestedInTeams: boolean
    description: string
    createdAt?: Date | string
  }

  export type RequirementUncheckedCreateWithoutUserInput = {
    id?: string
    location: string
    approxRent: number
    lookingFor: string
    occupancy: string
    highlights?: string | null
    interestedInPg: boolean
    phoneVisibility: string
    interestedInTeams: boolean
    description: string
    createdAt?: Date | string
  }

  export type RequirementCreateOrConnectWithoutUserInput = {
    where: RequirementWhereUniqueInput
    create: XOR<RequirementCreateWithoutUserInput, RequirementUncheckedCreateWithoutUserInput>
  }

  export type RequirementCreateManyUserInputEnvelope = {
    data: RequirementCreateManyUserInput | RequirementCreateManyUserInput[]
  }

  export type RoomListingCreateWithoutUserInput = {
    id?: string
    location: string
    approxRent: number
    occupancy: string
    lookingFor?: string | null
    highlights?: string | null
    amenities?: string | null
    phoneVisibility: string
    description: string
    createdAt?: Date | string
  }

  export type RoomListingUncheckedCreateWithoutUserInput = {
    id?: string
    location: string
    approxRent: number
    occupancy: string
    lookingFor?: string | null
    highlights?: string | null
    amenities?: string | null
    phoneVisibility: string
    description: string
    createdAt?: Date | string
  }

  export type RoomListingCreateOrConnectWithoutUserInput = {
    where: RoomListingWhereUniqueInput
    create: XOR<RoomListingCreateWithoutUserInput, RoomListingUncheckedCreateWithoutUserInput>
  }

  export type RoomListingCreateManyUserInputEnvelope = {
    data: RoomListingCreateManyUserInput | RoomListingCreateManyUserInput[]
  }

  export type TeamRequestCreateWithoutSenderInput = {
    id?: string
    status?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type TeamRequestUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverId: string
    status?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamRequestCreateOrConnectWithoutSenderInput = {
    where: TeamRequestWhereUniqueInput
    create: XOR<TeamRequestCreateWithoutSenderInput, TeamRequestUncheckedCreateWithoutSenderInput>
  }

  export type TeamRequestCreateManySenderInputEnvelope = {
    data: TeamRequestCreateManySenderInput | TeamRequestCreateManySenderInput[]
  }

  export type TeamRequestCreateWithoutReceiverInput = {
    id?: string
    status?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentRequestsInput
  }

  export type TeamRequestUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderId: string
    status?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamRequestCreateOrConnectWithoutReceiverInput = {
    where: TeamRequestWhereUniqueInput
    create: XOR<TeamRequestCreateWithoutReceiverInput, TeamRequestUncheckedCreateWithoutReceiverInput>
  }

  export type TeamRequestCreateManyReceiverInputEnvelope = {
    data: TeamRequestCreateManyReceiverInput | TeamRequestCreateManyReceiverInput[]
  }

  export type PreferenceUpsertWithoutUserInput = {
    update: XOR<PreferenceUpdateWithoutUserInput, PreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
    where?: PreferenceWhereInput
  }

  export type PreferenceUpdateToOneWithWhereWithoutUserInput = {
    where?: PreferenceWhereInput
    data: XOR<PreferenceUpdateWithoutUserInput, PreferenceUncheckedUpdateWithoutUserInput>
  }

  export type PreferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableIntFieldUpdateOperationsInput | number | null
    preferredLocation?: NullableStringFieldUpdateOperationsInput | string | null
    preferenceLabels?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableIntFieldUpdateOperationsInput | number | null
    preferredLocation?: NullableStringFieldUpdateOperationsInput | string | null
    preferenceLabels?: NullableStringFieldUpdateOperationsInput | string | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementUpsertWithWhereUniqueWithoutUserInput = {
    where: RequirementWhereUniqueInput
    update: XOR<RequirementUpdateWithoutUserInput, RequirementUncheckedUpdateWithoutUserInput>
    create: XOR<RequirementCreateWithoutUserInput, RequirementUncheckedCreateWithoutUserInput>
  }

  export type RequirementUpdateWithWhereUniqueWithoutUserInput = {
    where: RequirementWhereUniqueInput
    data: XOR<RequirementUpdateWithoutUserInput, RequirementUncheckedUpdateWithoutUserInput>
  }

  export type RequirementUpdateManyWithWhereWithoutUserInput = {
    where: RequirementScalarWhereInput
    data: XOR<RequirementUpdateManyMutationInput, RequirementUncheckedUpdateManyWithoutUserInput>
  }

  export type RequirementScalarWhereInput = {
    AND?: RequirementScalarWhereInput | RequirementScalarWhereInput[]
    OR?: RequirementScalarWhereInput[]
    NOT?: RequirementScalarWhereInput | RequirementScalarWhereInput[]
    id?: StringFilter<"Requirement"> | string
    userId?: StringFilter<"Requirement"> | string
    location?: StringFilter<"Requirement"> | string
    approxRent?: IntFilter<"Requirement"> | number
    lookingFor?: StringFilter<"Requirement"> | string
    occupancy?: StringFilter<"Requirement"> | string
    highlights?: StringNullableFilter<"Requirement"> | string | null
    interestedInPg?: BoolFilter<"Requirement"> | boolean
    phoneVisibility?: StringFilter<"Requirement"> | string
    interestedInTeams?: BoolFilter<"Requirement"> | boolean
    description?: StringFilter<"Requirement"> | string
    createdAt?: DateTimeFilter<"Requirement"> | Date | string
  }

  export type RoomListingUpsertWithWhereUniqueWithoutUserInput = {
    where: RoomListingWhereUniqueInput
    update: XOR<RoomListingUpdateWithoutUserInput, RoomListingUncheckedUpdateWithoutUserInput>
    create: XOR<RoomListingCreateWithoutUserInput, RoomListingUncheckedCreateWithoutUserInput>
  }

  export type RoomListingUpdateWithWhereUniqueWithoutUserInput = {
    where: RoomListingWhereUniqueInput
    data: XOR<RoomListingUpdateWithoutUserInput, RoomListingUncheckedUpdateWithoutUserInput>
  }

  export type RoomListingUpdateManyWithWhereWithoutUserInput = {
    where: RoomListingScalarWhereInput
    data: XOR<RoomListingUpdateManyMutationInput, RoomListingUncheckedUpdateManyWithoutUserInput>
  }

  export type RoomListingScalarWhereInput = {
    AND?: RoomListingScalarWhereInput | RoomListingScalarWhereInput[]
    OR?: RoomListingScalarWhereInput[]
    NOT?: RoomListingScalarWhereInput | RoomListingScalarWhereInput[]
    id?: StringFilter<"RoomListing"> | string
    userId?: StringFilter<"RoomListing"> | string
    location?: StringFilter<"RoomListing"> | string
    approxRent?: IntFilter<"RoomListing"> | number
    occupancy?: StringFilter<"RoomListing"> | string
    lookingFor?: StringNullableFilter<"RoomListing"> | string | null
    highlights?: StringNullableFilter<"RoomListing"> | string | null
    amenities?: StringNullableFilter<"RoomListing"> | string | null
    phoneVisibility?: StringFilter<"RoomListing"> | string
    description?: StringFilter<"RoomListing"> | string
    createdAt?: DateTimeFilter<"RoomListing"> | Date | string
  }

  export type TeamRequestUpsertWithWhereUniqueWithoutSenderInput = {
    where: TeamRequestWhereUniqueInput
    update: XOR<TeamRequestUpdateWithoutSenderInput, TeamRequestUncheckedUpdateWithoutSenderInput>
    create: XOR<TeamRequestCreateWithoutSenderInput, TeamRequestUncheckedCreateWithoutSenderInput>
  }

  export type TeamRequestUpdateWithWhereUniqueWithoutSenderInput = {
    where: TeamRequestWhereUniqueInput
    data: XOR<TeamRequestUpdateWithoutSenderInput, TeamRequestUncheckedUpdateWithoutSenderInput>
  }

  export type TeamRequestUpdateManyWithWhereWithoutSenderInput = {
    where: TeamRequestScalarWhereInput
    data: XOR<TeamRequestUpdateManyMutationInput, TeamRequestUncheckedUpdateManyWithoutSenderInput>
  }

  export type TeamRequestScalarWhereInput = {
    AND?: TeamRequestScalarWhereInput | TeamRequestScalarWhereInput[]
    OR?: TeamRequestScalarWhereInput[]
    NOT?: TeamRequestScalarWhereInput | TeamRequestScalarWhereInput[]
    id?: StringFilter<"TeamRequest"> | string
    senderId?: StringFilter<"TeamRequest"> | string
    receiverId?: StringFilter<"TeamRequest"> | string
    status?: StringFilter<"TeamRequest"> | string
    message?: StringNullableFilter<"TeamRequest"> | string | null
    createdAt?: DateTimeFilter<"TeamRequest"> | Date | string
    updatedAt?: DateTimeFilter<"TeamRequest"> | Date | string
  }

  export type TeamRequestUpsertWithWhereUniqueWithoutReceiverInput = {
    where: TeamRequestWhereUniqueInput
    update: XOR<TeamRequestUpdateWithoutReceiverInput, TeamRequestUncheckedUpdateWithoutReceiverInput>
    create: XOR<TeamRequestCreateWithoutReceiverInput, TeamRequestUncheckedCreateWithoutReceiverInput>
  }

  export type TeamRequestUpdateWithWhereUniqueWithoutReceiverInput = {
    where: TeamRequestWhereUniqueInput
    data: XOR<TeamRequestUpdateWithoutReceiverInput, TeamRequestUncheckedUpdateWithoutReceiverInput>
  }

  export type TeamRequestUpdateManyWithWhereWithoutReceiverInput = {
    where: TeamRequestScalarWhereInput
    data: XOR<TeamRequestUpdateManyMutationInput, TeamRequestUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requirements?: RequirementCreateNestedManyWithoutUserInput
    roomListings?: RoomListingCreateNestedManyWithoutUserInput
    sentRequests?: TeamRequestCreateNestedManyWithoutSenderInput
    receivedRequests?: TeamRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requirements?: RequirementUncheckedCreateNestedManyWithoutUserInput
    roomListings?: RoomListingUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: TeamRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: TeamRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requirements?: RequirementUpdateManyWithoutUserNestedInput
    roomListings?: RoomListingUpdateManyWithoutUserNestedInput
    sentRequests?: TeamRequestUpdateManyWithoutSenderNestedInput
    receivedRequests?: TeamRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requirements?: RequirementUncheckedUpdateManyWithoutUserNestedInput
    roomListings?: RoomListingUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: TeamRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: TeamRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutRequirementsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: PreferenceCreateNestedOneWithoutUserInput
    roomListings?: RoomListingCreateNestedManyWithoutUserInput
    sentRequests?: TeamRequestCreateNestedManyWithoutSenderInput
    receivedRequests?: TeamRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutRequirementsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    roomListings?: RoomListingUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: TeamRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: TeamRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutRequirementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequirementsInput, UserUncheckedCreateWithoutRequirementsInput>
  }

  export type UserUpsertWithoutRequirementsInput = {
    update: XOR<UserUpdateWithoutRequirementsInput, UserUncheckedUpdateWithoutRequirementsInput>
    create: XOR<UserCreateWithoutRequirementsInput, UserUncheckedCreateWithoutRequirementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequirementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequirementsInput, UserUncheckedUpdateWithoutRequirementsInput>
  }

  export type UserUpdateWithoutRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUpdateOneWithoutUserNestedInput
    roomListings?: RoomListingUpdateManyWithoutUserNestedInput
    sentRequests?: TeamRequestUpdateManyWithoutSenderNestedInput
    receivedRequests?: TeamRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutRequirementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    roomListings?: RoomListingUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: TeamRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: TeamRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutRoomListingsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: PreferenceCreateNestedOneWithoutUserInput
    requirements?: RequirementCreateNestedManyWithoutUserInput
    sentRequests?: TeamRequestCreateNestedManyWithoutSenderInput
    receivedRequests?: TeamRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutRoomListingsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    requirements?: RequirementUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: TeamRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedRequests?: TeamRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutRoomListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomListingsInput, UserUncheckedCreateWithoutRoomListingsInput>
  }

  export type UserUpsertWithoutRoomListingsInput = {
    update: XOR<UserUpdateWithoutRoomListingsInput, UserUncheckedUpdateWithoutRoomListingsInput>
    create: XOR<UserCreateWithoutRoomListingsInput, UserUncheckedCreateWithoutRoomListingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomListingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomListingsInput, UserUncheckedUpdateWithoutRoomListingsInput>
  }

  export type UserUpdateWithoutRoomListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUpdateOneWithoutUserNestedInput
    requirements?: RequirementUpdateManyWithoutUserNestedInput
    sentRequests?: TeamRequestUpdateManyWithoutSenderNestedInput
    receivedRequests?: TeamRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    requirements?: RequirementUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: TeamRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedRequests?: TeamRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutSentRequestsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: PreferenceCreateNestedOneWithoutUserInput
    requirements?: RequirementCreateNestedManyWithoutUserInput
    roomListings?: RoomListingCreateNestedManyWithoutUserInput
    receivedRequests?: TeamRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSentRequestsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    requirements?: RequirementUncheckedCreateNestedManyWithoutUserInput
    roomListings?: RoomListingUncheckedCreateNestedManyWithoutUserInput
    receivedRequests?: TeamRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
  }

  export type UserCreateWithoutReceivedRequestsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: PreferenceCreateNestedOneWithoutUserInput
    requirements?: RequirementCreateNestedManyWithoutUserInput
    roomListings?: RoomListingCreateNestedManyWithoutUserInput
    sentRequests?: TeamRequestCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedRequestsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    requirements?: RequirementUncheckedCreateNestedManyWithoutUserInput
    roomListings?: RoomListingUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: TeamRequestUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
  }

  export type UserUpsertWithoutSentRequestsInput = {
    update: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateWithoutSentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUpdateOneWithoutUserNestedInput
    requirements?: RequirementUpdateManyWithoutUserNestedInput
    roomListings?: RoomListingUpdateManyWithoutUserNestedInput
    receivedRequests?: TeamRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    requirements?: RequirementUncheckedUpdateManyWithoutUserNestedInput
    roomListings?: RoomListingUncheckedUpdateManyWithoutUserNestedInput
    receivedRequests?: TeamRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserUpdateWithoutReceivedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUpdateOneWithoutUserNestedInput
    requirements?: RequirementUpdateManyWithoutUserNestedInput
    roomListings?: RoomListingUpdateManyWithoutUserNestedInput
    sentRequests?: TeamRequestUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    requirements?: RequirementUncheckedUpdateManyWithoutUserNestedInput
    roomListings?: RoomListingUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: TeamRequestUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type RequirementCreateManyUserInput = {
    id?: string
    location: string
    approxRent: number
    lookingFor: string
    occupancy: string
    highlights?: string | null
    interestedInPg: boolean
    phoneVisibility: string
    interestedInTeams: boolean
    description: string
    createdAt?: Date | string
  }

  export type RoomListingCreateManyUserInput = {
    id?: string
    location: string
    approxRent: number
    occupancy: string
    lookingFor?: string | null
    highlights?: string | null
    amenities?: string | null
    phoneVisibility: string
    description: string
    createdAt?: Date | string
  }

  export type TeamRequestCreateManySenderInput = {
    id?: string
    receiverId: string
    status?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamRequestCreateManyReceiverInput = {
    id?: string
    senderId: string
    status?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequirementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    approxRent?: IntFieldUpdateOperationsInput | number
    lookingFor?: StringFieldUpdateOperationsInput | string
    occupancy?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    interestedInPg?: BoolFieldUpdateOperationsInput | boolean
    phoneVisibility?: StringFieldUpdateOperationsInput | string
    interestedInTeams?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    approxRent?: IntFieldUpdateOperationsInput | number
    lookingFor?: StringFieldUpdateOperationsInput | string
    occupancy?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    interestedInPg?: BoolFieldUpdateOperationsInput | boolean
    phoneVisibility?: StringFieldUpdateOperationsInput | string
    interestedInTeams?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    approxRent?: IntFieldUpdateOperationsInput | number
    lookingFor?: StringFieldUpdateOperationsInput | string
    occupancy?: StringFieldUpdateOperationsInput | string
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    interestedInPg?: BoolFieldUpdateOperationsInput | boolean
    phoneVisibility?: StringFieldUpdateOperationsInput | string
    interestedInTeams?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomListingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    approxRent?: IntFieldUpdateOperationsInput | number
    occupancy?: StringFieldUpdateOperationsInput | string
    lookingFor?: NullableStringFieldUpdateOperationsInput | string | null
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVisibility?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomListingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    approxRent?: IntFieldUpdateOperationsInput | number
    occupancy?: StringFieldUpdateOperationsInput | string
    lookingFor?: NullableStringFieldUpdateOperationsInput | string | null
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVisibility?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomListingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    approxRent?: IntFieldUpdateOperationsInput | number
    occupancy?: StringFieldUpdateOperationsInput | string
    lookingFor?: NullableStringFieldUpdateOperationsInput | string | null
    highlights?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVisibility?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamRequestUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type TeamRequestUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamRequestUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamRequestUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
  }

  export type TeamRequestUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamRequestUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}