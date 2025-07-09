
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
 * Model CFA
 * 
 */
export type CFA = $Result.DefaultSelection<Prisma.$CFAPayload>
/**
 * Model Entreprise
 * 
 */
export type Entreprise = $Result.DefaultSelection<Prisma.$EntreprisePayload>
/**
 * Model Apprenant
 * 
 */
export type Apprenant = $Result.DefaultSelection<Prisma.$ApprenantPayload>
/**
 * Model Contrat
 * 
 */
export type Contrat = $Result.DefaultSelection<Prisma.$ContratPayload>
/**
 * Model Convention
 * 
 */
export type Convention = $Result.DefaultSelection<Prisma.$ConventionPayload>
/**
 * Model Evenement
 * 
 */
export type Evenement = $Result.DefaultSelection<Prisma.$EvenementPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CFA_ADMIN: 'CFA_ADMIN',
  ENTREPRISE: 'ENTREPRISE',
  APPRENANT: 'APPRENANT',
  OPCO: 'OPCO',
  SUPERADMIN: 'SUPERADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.cFA`: Exposes CRUD operations for the **CFA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CFAS
    * const cFAS = await prisma.cFA.findMany()
    * ```
    */
  get cFA(): Prisma.CFADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entreprise`: Exposes CRUD operations for the **Entreprise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entreprises
    * const entreprises = await prisma.entreprise.findMany()
    * ```
    */
  get entreprise(): Prisma.EntrepriseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apprenant`: Exposes CRUD operations for the **Apprenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apprenants
    * const apprenants = await prisma.apprenant.findMany()
    * ```
    */
  get apprenant(): Prisma.ApprenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contrat`: Exposes CRUD operations for the **Contrat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contrats
    * const contrats = await prisma.contrat.findMany()
    * ```
    */
  get contrat(): Prisma.ContratDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.convention`: Exposes CRUD operations for the **Convention** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conventions
    * const conventions = await prisma.convention.findMany()
    * ```
    */
  get convention(): Prisma.ConventionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evenement`: Exposes CRUD operations for the **Evenement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evenements
    * const evenements = await prisma.evenement.findMany()
    * ```
    */
  get evenement(): Prisma.EvenementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    CFA: 'CFA',
    Entreprise: 'Entreprise',
    Apprenant: 'Apprenant',
    Contrat: 'Contrat',
    Convention: 'Convention',
    Evenement: 'Evenement',
    Notification: 'Notification'
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
      modelProps: "user" | "cFA" | "entreprise" | "apprenant" | "contrat" | "convention" | "evenement" | "notification"
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
      CFA: {
        payload: Prisma.$CFAPayload<ExtArgs>
        fields: Prisma.CFAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CFAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CFAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CFAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CFAPayload>
          }
          findFirst: {
            args: Prisma.CFAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CFAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CFAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CFAPayload>
          }
          findMany: {
            args: Prisma.CFAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CFAPayload>[]
          }
          create: {
            args: Prisma.CFACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CFAPayload>
          }
          createMany: {
            args: Prisma.CFACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CFACreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CFAPayload>[]
          }
          delete: {
            args: Prisma.CFADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CFAPayload>
          }
          update: {
            args: Prisma.CFAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CFAPayload>
          }
          deleteMany: {
            args: Prisma.CFADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CFAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CFAUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CFAPayload>[]
          }
          upsert: {
            args: Prisma.CFAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CFAPayload>
          }
          aggregate: {
            args: Prisma.CFAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCFA>
          }
          groupBy: {
            args: Prisma.CFAGroupByArgs<ExtArgs>
            result: $Utils.Optional<CFAGroupByOutputType>[]
          }
          count: {
            args: Prisma.CFACountArgs<ExtArgs>
            result: $Utils.Optional<CFACountAggregateOutputType> | number
          }
        }
      }
      Entreprise: {
        payload: Prisma.$EntreprisePayload<ExtArgs>
        fields: Prisma.EntrepriseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntrepriseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntrepriseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          findFirst: {
            args: Prisma.EntrepriseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntrepriseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          findMany: {
            args: Prisma.EntrepriseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          create: {
            args: Prisma.EntrepriseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          createMany: {
            args: Prisma.EntrepriseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntrepriseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          delete: {
            args: Prisma.EntrepriseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          update: {
            args: Prisma.EntrepriseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          deleteMany: {
            args: Prisma.EntrepriseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntrepriseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntrepriseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          upsert: {
            args: Prisma.EntrepriseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          aggregate: {
            args: Prisma.EntrepriseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntreprise>
          }
          groupBy: {
            args: Prisma.EntrepriseGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntrepriseGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntrepriseCountArgs<ExtArgs>
            result: $Utils.Optional<EntrepriseCountAggregateOutputType> | number
          }
        }
      }
      Apprenant: {
        payload: Prisma.$ApprenantPayload<ExtArgs>
        fields: Prisma.ApprenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprenantPayload>
          }
          findFirst: {
            args: Prisma.ApprenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprenantPayload>
          }
          findMany: {
            args: Prisma.ApprenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprenantPayload>[]
          }
          create: {
            args: Prisma.ApprenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprenantPayload>
          }
          createMany: {
            args: Prisma.ApprenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApprenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprenantPayload>[]
          }
          delete: {
            args: Prisma.ApprenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprenantPayload>
          }
          update: {
            args: Prisma.ApprenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprenantPayload>
          }
          deleteMany: {
            args: Prisma.ApprenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApprenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprenantPayload>[]
          }
          upsert: {
            args: Prisma.ApprenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprenantPayload>
          }
          aggregate: {
            args: Prisma.ApprenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApprenant>
          }
          groupBy: {
            args: Prisma.ApprenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprenantCountArgs<ExtArgs>
            result: $Utils.Optional<ApprenantCountAggregateOutputType> | number
          }
        }
      }
      Contrat: {
        payload: Prisma.$ContratPayload<ExtArgs>
        fields: Prisma.ContratFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContratFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContratFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>
          }
          findFirst: {
            args: Prisma.ContratFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContratFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>
          }
          findMany: {
            args: Prisma.ContratFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>[]
          }
          create: {
            args: Prisma.ContratCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>
          }
          createMany: {
            args: Prisma.ContratCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContratCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>[]
          }
          delete: {
            args: Prisma.ContratDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>
          }
          update: {
            args: Prisma.ContratUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>
          }
          deleteMany: {
            args: Prisma.ContratDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContratUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContratUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>[]
          }
          upsert: {
            args: Prisma.ContratUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratPayload>
          }
          aggregate: {
            args: Prisma.ContratAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContrat>
          }
          groupBy: {
            args: Prisma.ContratGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContratGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContratCountArgs<ExtArgs>
            result: $Utils.Optional<ContratCountAggregateOutputType> | number
          }
        }
      }
      Convention: {
        payload: Prisma.$ConventionPayload<ExtArgs>
        fields: Prisma.ConventionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConventionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConventionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConventionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConventionPayload>
          }
          findFirst: {
            args: Prisma.ConventionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConventionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConventionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConventionPayload>
          }
          findMany: {
            args: Prisma.ConventionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConventionPayload>[]
          }
          create: {
            args: Prisma.ConventionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConventionPayload>
          }
          createMany: {
            args: Prisma.ConventionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConventionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConventionPayload>[]
          }
          delete: {
            args: Prisma.ConventionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConventionPayload>
          }
          update: {
            args: Prisma.ConventionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConventionPayload>
          }
          deleteMany: {
            args: Prisma.ConventionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConventionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConventionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConventionPayload>[]
          }
          upsert: {
            args: Prisma.ConventionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConventionPayload>
          }
          aggregate: {
            args: Prisma.ConventionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConvention>
          }
          groupBy: {
            args: Prisma.ConventionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConventionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConventionCountArgs<ExtArgs>
            result: $Utils.Optional<ConventionCountAggregateOutputType> | number
          }
        }
      }
      Evenement: {
        payload: Prisma.$EvenementPayload<ExtArgs>
        fields: Prisma.EvenementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvenementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvenementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvenementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvenementPayload>
          }
          findFirst: {
            args: Prisma.EvenementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvenementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvenementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvenementPayload>
          }
          findMany: {
            args: Prisma.EvenementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvenementPayload>[]
          }
          create: {
            args: Prisma.EvenementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvenementPayload>
          }
          createMany: {
            args: Prisma.EvenementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvenementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvenementPayload>[]
          }
          delete: {
            args: Prisma.EvenementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvenementPayload>
          }
          update: {
            args: Prisma.EvenementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvenementPayload>
          }
          deleteMany: {
            args: Prisma.EvenementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvenementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvenementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvenementPayload>[]
          }
          upsert: {
            args: Prisma.EvenementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvenementPayload>
          }
          aggregate: {
            args: Prisma.EvenementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvenement>
          }
          groupBy: {
            args: Prisma.EvenementGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvenementGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvenementCountArgs<ExtArgs>
            result: $Utils.Optional<EvenementCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    cFA?: CFAOmit
    entreprise?: EntrepriseOmit
    apprenant?: ApprenantOmit
    contrat?: ContratOmit
    convention?: ConventionOmit
    evenement?: EvenementOmit
    notification?: NotificationOmit
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

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    contrats: number
    conventions: number
    notifications: number
    evenements: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contrats?: boolean | UserCountOutputTypeCountContratsArgs
    conventions?: boolean | UserCountOutputTypeCountConventionsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    evenements?: boolean | UserCountOutputTypeCountEvenementsArgs
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
  export type UserCountOutputTypeCountContratsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContratWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConventionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConventionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEvenementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvenementWhereInput
  }


  /**
   * Count Type CFACountOutputType
   */

  export type CFACountOutputType = {
    users: number
  }

  export type CFACountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CFACountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * CFACountOutputType without action
   */
  export type CFACountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CFACountOutputType
     */
    select?: CFACountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CFACountOutputType without action
   */
  export type CFACountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type EntrepriseCountOutputType
   */

  export type EntrepriseCountOutputType = {
    users: number
  }

  export type EntrepriseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | EntrepriseCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntrepriseCountOutputType
     */
    select?: EntrepriseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
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
    firstname: string | null
    lastname: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    cfaId: string | null
    entrepriseId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstname: string | null
    lastname: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    cfaId: string | null
    entrepriseId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstname: number
    lastname: number
    role: number
    createdAt: number
    cfaId: number
    entrepriseId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firstname?: true
    lastname?: true
    role?: true
    createdAt?: true
    cfaId?: true
    entrepriseId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstname?: true
    lastname?: true
    role?: true
    createdAt?: true
    cfaId?: true
    entrepriseId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstname?: true
    lastname?: true
    role?: true
    createdAt?: true
    cfaId?: true
    entrepriseId?: true
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
    firstname: string
    lastname: string
    role: $Enums.Role
    createdAt: Date
    cfaId: string | null
    entrepriseId: string | null
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
    firstname?: boolean
    lastname?: boolean
    role?: boolean
    createdAt?: boolean
    cfaId?: boolean
    entrepriseId?: boolean
    cfa?: boolean | User$cfaArgs<ExtArgs>
    entreprise?: boolean | User$entrepriseArgs<ExtArgs>
    apprenant?: boolean | User$apprenantArgs<ExtArgs>
    contrats?: boolean | User$contratsArgs<ExtArgs>
    conventions?: boolean | User$conventionsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    evenements?: boolean | User$evenementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    role?: boolean
    createdAt?: boolean
    cfaId?: boolean
    entrepriseId?: boolean
    cfa?: boolean | User$cfaArgs<ExtArgs>
    entreprise?: boolean | User$entrepriseArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    role?: boolean
    createdAt?: boolean
    cfaId?: boolean
    entrepriseId?: boolean
    cfa?: boolean | User$cfaArgs<ExtArgs>
    entreprise?: boolean | User$entrepriseArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    role?: boolean
    createdAt?: boolean
    cfaId?: boolean
    entrepriseId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstname" | "lastname" | "role" | "createdAt" | "cfaId" | "entrepriseId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cfa?: boolean | User$cfaArgs<ExtArgs>
    entreprise?: boolean | User$entrepriseArgs<ExtArgs>
    apprenant?: boolean | User$apprenantArgs<ExtArgs>
    contrats?: boolean | User$contratsArgs<ExtArgs>
    conventions?: boolean | User$conventionsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    evenements?: boolean | User$evenementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cfa?: boolean | User$cfaArgs<ExtArgs>
    entreprise?: boolean | User$entrepriseArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cfa?: boolean | User$cfaArgs<ExtArgs>
    entreprise?: boolean | User$entrepriseArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cfa: Prisma.$CFAPayload<ExtArgs> | null
      entreprise: Prisma.$EntreprisePayload<ExtArgs> | null
      apprenant: Prisma.$ApprenantPayload<ExtArgs> | null
      contrats: Prisma.$ContratPayload<ExtArgs>[]
      conventions: Prisma.$ConventionPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      evenements: Prisma.$EvenementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firstname: string
      lastname: string
      role: $Enums.Role
      createdAt: Date
      cfaId: string | null
      entrepriseId: string | null
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
    cfa<T extends User$cfaArgs<ExtArgs> = {}>(args?: Subset<T, User$cfaArgs<ExtArgs>>): Prisma__CFAClient<$Result.GetResult<Prisma.$CFAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    entreprise<T extends User$entrepriseArgs<ExtArgs> = {}>(args?: Subset<T, User$entrepriseArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    apprenant<T extends User$apprenantArgs<ExtArgs> = {}>(args?: Subset<T, User$apprenantArgs<ExtArgs>>): Prisma__ApprenantClient<$Result.GetResult<Prisma.$ApprenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contrats<T extends User$contratsArgs<ExtArgs> = {}>(args?: Subset<T, User$contratsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conventions<T extends User$conventionsArgs<ExtArgs> = {}>(args?: Subset<T, User$conventionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConventionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evenements<T extends User$evenementsArgs<ExtArgs> = {}>(args?: Subset<T, User$evenementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvenementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly cfaId: FieldRef<"User", 'String'>
    readonly entrepriseId: FieldRef<"User", 'String'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.cfa
   */
  export type User$cfaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CFA
     */
    select?: CFASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CFA
     */
    omit?: CFAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CFAInclude<ExtArgs> | null
    where?: CFAWhereInput
  }

  /**
   * User.entreprise
   */
  export type User$entrepriseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    where?: EntrepriseWhereInput
  }

  /**
   * User.apprenant
   */
  export type User$apprenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apprenant
     */
    select?: ApprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apprenant
     */
    omit?: ApprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprenantInclude<ExtArgs> | null
    where?: ApprenantWhereInput
  }

  /**
   * User.contrats
   */
  export type User$contratsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    where?: ContratWhereInput
    orderBy?: ContratOrderByWithRelationInput | ContratOrderByWithRelationInput[]
    cursor?: ContratWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContratScalarFieldEnum | ContratScalarFieldEnum[]
  }

  /**
   * User.conventions
   */
  export type User$conventionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convention
     */
    select?: ConventionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convention
     */
    omit?: ConventionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConventionInclude<ExtArgs> | null
    where?: ConventionWhereInput
    orderBy?: ConventionOrderByWithRelationInput | ConventionOrderByWithRelationInput[]
    cursor?: ConventionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConventionScalarFieldEnum | ConventionScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.evenements
   */
  export type User$evenementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evenement
     */
    select?: EvenementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evenement
     */
    omit?: EvenementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvenementInclude<ExtArgs> | null
    where?: EvenementWhereInput
    orderBy?: EvenementOrderByWithRelationInput | EvenementOrderByWithRelationInput[]
    cursor?: EvenementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvenementScalarFieldEnum | EvenementScalarFieldEnum[]
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
   * Model CFA
   */

  export type AggregateCFA = {
    _count: CFACountAggregateOutputType | null
    _min: CFAMinAggregateOutputType | null
    _max: CFAMaxAggregateOutputType | null
  }

  export type CFAMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type CFAMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type CFACountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type CFAMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CFAMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CFACountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type CFAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CFA to aggregate.
     */
    where?: CFAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CFAS to fetch.
     */
    orderBy?: CFAOrderByWithRelationInput | CFAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CFAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CFAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CFAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CFAS
    **/
    _count?: true | CFACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CFAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CFAMaxAggregateInputType
  }

  export type GetCFAAggregateType<T extends CFAAggregateArgs> = {
        [P in keyof T & keyof AggregateCFA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCFA[P]>
      : GetScalarType<T[P], AggregateCFA[P]>
  }




  export type CFAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CFAWhereInput
    orderBy?: CFAOrderByWithAggregationInput | CFAOrderByWithAggregationInput[]
    by: CFAScalarFieldEnum[] | CFAScalarFieldEnum
    having?: CFAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CFACountAggregateInputType | true
    _min?: CFAMinAggregateInputType
    _max?: CFAMaxAggregateInputType
  }

  export type CFAGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: CFACountAggregateOutputType | null
    _min: CFAMinAggregateOutputType | null
    _max: CFAMaxAggregateOutputType | null
  }

  type GetCFAGroupByPayload<T extends CFAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CFAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CFAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CFAGroupByOutputType[P]>
            : GetScalarType<T[P], CFAGroupByOutputType[P]>
        }
      >
    >


  export type CFASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    users?: boolean | CFA$usersArgs<ExtArgs>
    _count?: boolean | CFACountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cFA"]>

  export type CFASelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cFA"]>

  export type CFASelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cFA"]>

  export type CFASelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type CFAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["cFA"]>
  export type CFAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CFA$usersArgs<ExtArgs>
    _count?: boolean | CFACountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CFAIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CFAIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CFAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CFA"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["cFA"]>
    composites: {}
  }

  type CFAGetPayload<S extends boolean | null | undefined | CFADefaultArgs> = $Result.GetResult<Prisma.$CFAPayload, S>

  type CFACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CFAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CFACountAggregateInputType | true
    }

  export interface CFADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CFA'], meta: { name: 'CFA' } }
    /**
     * Find zero or one CFA that matches the filter.
     * @param {CFAFindUniqueArgs} args - Arguments to find a CFA
     * @example
     * // Get one CFA
     * const cFA = await prisma.cFA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CFAFindUniqueArgs>(args: SelectSubset<T, CFAFindUniqueArgs<ExtArgs>>): Prisma__CFAClient<$Result.GetResult<Prisma.$CFAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CFA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CFAFindUniqueOrThrowArgs} args - Arguments to find a CFA
     * @example
     * // Get one CFA
     * const cFA = await prisma.cFA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CFAFindUniqueOrThrowArgs>(args: SelectSubset<T, CFAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CFAClient<$Result.GetResult<Prisma.$CFAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CFA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CFAFindFirstArgs} args - Arguments to find a CFA
     * @example
     * // Get one CFA
     * const cFA = await prisma.cFA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CFAFindFirstArgs>(args?: SelectSubset<T, CFAFindFirstArgs<ExtArgs>>): Prisma__CFAClient<$Result.GetResult<Prisma.$CFAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CFA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CFAFindFirstOrThrowArgs} args - Arguments to find a CFA
     * @example
     * // Get one CFA
     * const cFA = await prisma.cFA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CFAFindFirstOrThrowArgs>(args?: SelectSubset<T, CFAFindFirstOrThrowArgs<ExtArgs>>): Prisma__CFAClient<$Result.GetResult<Prisma.$CFAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CFAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CFAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CFAS
     * const cFAS = await prisma.cFA.findMany()
     * 
     * // Get first 10 CFAS
     * const cFAS = await prisma.cFA.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cFAWithIdOnly = await prisma.cFA.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CFAFindManyArgs>(args?: SelectSubset<T, CFAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CFAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CFA.
     * @param {CFACreateArgs} args - Arguments to create a CFA.
     * @example
     * // Create one CFA
     * const CFA = await prisma.cFA.create({
     *   data: {
     *     // ... data to create a CFA
     *   }
     * })
     * 
     */
    create<T extends CFACreateArgs>(args: SelectSubset<T, CFACreateArgs<ExtArgs>>): Prisma__CFAClient<$Result.GetResult<Prisma.$CFAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CFAS.
     * @param {CFACreateManyArgs} args - Arguments to create many CFAS.
     * @example
     * // Create many CFAS
     * const cFA = await prisma.cFA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CFACreateManyArgs>(args?: SelectSubset<T, CFACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CFAS and returns the data saved in the database.
     * @param {CFACreateManyAndReturnArgs} args - Arguments to create many CFAS.
     * @example
     * // Create many CFAS
     * const cFA = await prisma.cFA.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CFAS and only return the `id`
     * const cFAWithIdOnly = await prisma.cFA.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CFACreateManyAndReturnArgs>(args?: SelectSubset<T, CFACreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CFAPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CFA.
     * @param {CFADeleteArgs} args - Arguments to delete one CFA.
     * @example
     * // Delete one CFA
     * const CFA = await prisma.cFA.delete({
     *   where: {
     *     // ... filter to delete one CFA
     *   }
     * })
     * 
     */
    delete<T extends CFADeleteArgs>(args: SelectSubset<T, CFADeleteArgs<ExtArgs>>): Prisma__CFAClient<$Result.GetResult<Prisma.$CFAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CFA.
     * @param {CFAUpdateArgs} args - Arguments to update one CFA.
     * @example
     * // Update one CFA
     * const cFA = await prisma.cFA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CFAUpdateArgs>(args: SelectSubset<T, CFAUpdateArgs<ExtArgs>>): Prisma__CFAClient<$Result.GetResult<Prisma.$CFAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CFAS.
     * @param {CFADeleteManyArgs} args - Arguments to filter CFAS to delete.
     * @example
     * // Delete a few CFAS
     * const { count } = await prisma.cFA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CFADeleteManyArgs>(args?: SelectSubset<T, CFADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CFAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CFAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CFAS
     * const cFA = await prisma.cFA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CFAUpdateManyArgs>(args: SelectSubset<T, CFAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CFAS and returns the data updated in the database.
     * @param {CFAUpdateManyAndReturnArgs} args - Arguments to update many CFAS.
     * @example
     * // Update many CFAS
     * const cFA = await prisma.cFA.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CFAS and only return the `id`
     * const cFAWithIdOnly = await prisma.cFA.updateManyAndReturn({
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
    updateManyAndReturn<T extends CFAUpdateManyAndReturnArgs>(args: SelectSubset<T, CFAUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CFAPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CFA.
     * @param {CFAUpsertArgs} args - Arguments to update or create a CFA.
     * @example
     * // Update or create a CFA
     * const cFA = await prisma.cFA.upsert({
     *   create: {
     *     // ... data to create a CFA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CFA we want to update
     *   }
     * })
     */
    upsert<T extends CFAUpsertArgs>(args: SelectSubset<T, CFAUpsertArgs<ExtArgs>>): Prisma__CFAClient<$Result.GetResult<Prisma.$CFAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CFAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CFACountArgs} args - Arguments to filter CFAS to count.
     * @example
     * // Count the number of CFAS
     * const count = await prisma.cFA.count({
     *   where: {
     *     // ... the filter for the CFAS we want to count
     *   }
     * })
    **/
    count<T extends CFACountArgs>(
      args?: Subset<T, CFACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CFACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CFA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CFAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CFAAggregateArgs>(args: Subset<T, CFAAggregateArgs>): Prisma.PrismaPromise<GetCFAAggregateType<T>>

    /**
     * Group by CFA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CFAGroupByArgs} args - Group by arguments.
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
      T extends CFAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CFAGroupByArgs['orderBy'] }
        : { orderBy?: CFAGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CFAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCFAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CFA model
   */
  readonly fields: CFAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CFA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CFAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends CFA$usersArgs<ExtArgs> = {}>(args?: Subset<T, CFA$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CFA model
   */
  interface CFAFieldRefs {
    readonly id: FieldRef<"CFA", 'String'>
    readonly name: FieldRef<"CFA", 'String'>
    readonly createdAt: FieldRef<"CFA", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CFA findUnique
   */
  export type CFAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CFA
     */
    select?: CFASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CFA
     */
    omit?: CFAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CFAInclude<ExtArgs> | null
    /**
     * Filter, which CFA to fetch.
     */
    where: CFAWhereUniqueInput
  }

  /**
   * CFA findUniqueOrThrow
   */
  export type CFAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CFA
     */
    select?: CFASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CFA
     */
    omit?: CFAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CFAInclude<ExtArgs> | null
    /**
     * Filter, which CFA to fetch.
     */
    where: CFAWhereUniqueInput
  }

  /**
   * CFA findFirst
   */
  export type CFAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CFA
     */
    select?: CFASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CFA
     */
    omit?: CFAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CFAInclude<ExtArgs> | null
    /**
     * Filter, which CFA to fetch.
     */
    where?: CFAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CFAS to fetch.
     */
    orderBy?: CFAOrderByWithRelationInput | CFAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CFAS.
     */
    cursor?: CFAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CFAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CFAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CFAS.
     */
    distinct?: CFAScalarFieldEnum | CFAScalarFieldEnum[]
  }

  /**
   * CFA findFirstOrThrow
   */
  export type CFAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CFA
     */
    select?: CFASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CFA
     */
    omit?: CFAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CFAInclude<ExtArgs> | null
    /**
     * Filter, which CFA to fetch.
     */
    where?: CFAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CFAS to fetch.
     */
    orderBy?: CFAOrderByWithRelationInput | CFAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CFAS.
     */
    cursor?: CFAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CFAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CFAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CFAS.
     */
    distinct?: CFAScalarFieldEnum | CFAScalarFieldEnum[]
  }

  /**
   * CFA findMany
   */
  export type CFAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CFA
     */
    select?: CFASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CFA
     */
    omit?: CFAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CFAInclude<ExtArgs> | null
    /**
     * Filter, which CFAS to fetch.
     */
    where?: CFAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CFAS to fetch.
     */
    orderBy?: CFAOrderByWithRelationInput | CFAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CFAS.
     */
    cursor?: CFAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CFAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CFAS.
     */
    skip?: number
    distinct?: CFAScalarFieldEnum | CFAScalarFieldEnum[]
  }

  /**
   * CFA create
   */
  export type CFACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CFA
     */
    select?: CFASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CFA
     */
    omit?: CFAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CFAInclude<ExtArgs> | null
    /**
     * The data needed to create a CFA.
     */
    data: XOR<CFACreateInput, CFAUncheckedCreateInput>
  }

  /**
   * CFA createMany
   */
  export type CFACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CFAS.
     */
    data: CFACreateManyInput | CFACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CFA createManyAndReturn
   */
  export type CFACreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CFA
     */
    select?: CFASelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CFA
     */
    omit?: CFAOmit<ExtArgs> | null
    /**
     * The data used to create many CFAS.
     */
    data: CFACreateManyInput | CFACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CFA update
   */
  export type CFAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CFA
     */
    select?: CFASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CFA
     */
    omit?: CFAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CFAInclude<ExtArgs> | null
    /**
     * The data needed to update a CFA.
     */
    data: XOR<CFAUpdateInput, CFAUncheckedUpdateInput>
    /**
     * Choose, which CFA to update.
     */
    where: CFAWhereUniqueInput
  }

  /**
   * CFA updateMany
   */
  export type CFAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CFAS.
     */
    data: XOR<CFAUpdateManyMutationInput, CFAUncheckedUpdateManyInput>
    /**
     * Filter which CFAS to update
     */
    where?: CFAWhereInput
    /**
     * Limit how many CFAS to update.
     */
    limit?: number
  }

  /**
   * CFA updateManyAndReturn
   */
  export type CFAUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CFA
     */
    select?: CFASelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CFA
     */
    omit?: CFAOmit<ExtArgs> | null
    /**
     * The data used to update CFAS.
     */
    data: XOR<CFAUpdateManyMutationInput, CFAUncheckedUpdateManyInput>
    /**
     * Filter which CFAS to update
     */
    where?: CFAWhereInput
    /**
     * Limit how many CFAS to update.
     */
    limit?: number
  }

  /**
   * CFA upsert
   */
  export type CFAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CFA
     */
    select?: CFASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CFA
     */
    omit?: CFAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CFAInclude<ExtArgs> | null
    /**
     * The filter to search for the CFA to update in case it exists.
     */
    where: CFAWhereUniqueInput
    /**
     * In case the CFA found by the `where` argument doesn't exist, create a new CFA with this data.
     */
    create: XOR<CFACreateInput, CFAUncheckedCreateInput>
    /**
     * In case the CFA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CFAUpdateInput, CFAUncheckedUpdateInput>
  }

  /**
   * CFA delete
   */
  export type CFADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CFA
     */
    select?: CFASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CFA
     */
    omit?: CFAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CFAInclude<ExtArgs> | null
    /**
     * Filter which CFA to delete.
     */
    where: CFAWhereUniqueInput
  }

  /**
   * CFA deleteMany
   */
  export type CFADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CFAS to delete
     */
    where?: CFAWhereInput
    /**
     * Limit how many CFAS to delete.
     */
    limit?: number
  }

  /**
   * CFA.users
   */
  export type CFA$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * CFA without action
   */
  export type CFADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CFA
     */
    select?: CFASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CFA
     */
    omit?: CFAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CFAInclude<ExtArgs> | null
  }


  /**
   * Model Entreprise
   */

  export type AggregateEntreprise = {
    _count: EntrepriseCountAggregateOutputType | null
    _min: EntrepriseMinAggregateOutputType | null
    _max: EntrepriseMaxAggregateOutputType | null
  }

  export type EntrepriseMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type EntrepriseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type EntrepriseCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type EntrepriseMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type EntrepriseMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type EntrepriseCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type EntrepriseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entreprise to aggregate.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entreprises
    **/
    _count?: true | EntrepriseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntrepriseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntrepriseMaxAggregateInputType
  }

  export type GetEntrepriseAggregateType<T extends EntrepriseAggregateArgs> = {
        [P in keyof T & keyof AggregateEntreprise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntreprise[P]>
      : GetScalarType<T[P], AggregateEntreprise[P]>
  }




  export type EntrepriseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntrepriseWhereInput
    orderBy?: EntrepriseOrderByWithAggregationInput | EntrepriseOrderByWithAggregationInput[]
    by: EntrepriseScalarFieldEnum[] | EntrepriseScalarFieldEnum
    having?: EntrepriseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntrepriseCountAggregateInputType | true
    _min?: EntrepriseMinAggregateInputType
    _max?: EntrepriseMaxAggregateInputType
  }

  export type EntrepriseGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: EntrepriseCountAggregateOutputType | null
    _min: EntrepriseMinAggregateOutputType | null
    _max: EntrepriseMaxAggregateOutputType | null
  }

  type GetEntrepriseGroupByPayload<T extends EntrepriseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntrepriseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntrepriseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntrepriseGroupByOutputType[P]>
            : GetScalarType<T[P], EntrepriseGroupByOutputType[P]>
        }
      >
    >


  export type EntrepriseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    users?: boolean | Entreprise$usersArgs<ExtArgs>
    _count?: boolean | EntrepriseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entreprise"]>

  export type EntrepriseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["entreprise"]>

  export type EntrepriseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["entreprise"]>

  export type EntrepriseSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type EntrepriseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["entreprise"]>
  export type EntrepriseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Entreprise$usersArgs<ExtArgs>
    _count?: boolean | EntrepriseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntrepriseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EntrepriseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EntreprisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entreprise"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["entreprise"]>
    composites: {}
  }

  type EntrepriseGetPayload<S extends boolean | null | undefined | EntrepriseDefaultArgs> = $Result.GetResult<Prisma.$EntreprisePayload, S>

  type EntrepriseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntrepriseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntrepriseCountAggregateInputType | true
    }

  export interface EntrepriseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entreprise'], meta: { name: 'Entreprise' } }
    /**
     * Find zero or one Entreprise that matches the filter.
     * @param {EntrepriseFindUniqueArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntrepriseFindUniqueArgs>(args: SelectSubset<T, EntrepriseFindUniqueArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entreprise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntrepriseFindUniqueOrThrowArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntrepriseFindUniqueOrThrowArgs>(args: SelectSubset<T, EntrepriseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entreprise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindFirstArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntrepriseFindFirstArgs>(args?: SelectSubset<T, EntrepriseFindFirstArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entreprise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindFirstOrThrowArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntrepriseFindFirstOrThrowArgs>(args?: SelectSubset<T, EntrepriseFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entreprises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entreprises
     * const entreprises = await prisma.entreprise.findMany()
     * 
     * // Get first 10 Entreprises
     * const entreprises = await prisma.entreprise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntrepriseFindManyArgs>(args?: SelectSubset<T, EntrepriseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entreprise.
     * @param {EntrepriseCreateArgs} args - Arguments to create a Entreprise.
     * @example
     * // Create one Entreprise
     * const Entreprise = await prisma.entreprise.create({
     *   data: {
     *     // ... data to create a Entreprise
     *   }
     * })
     * 
     */
    create<T extends EntrepriseCreateArgs>(args: SelectSubset<T, EntrepriseCreateArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entreprises.
     * @param {EntrepriseCreateManyArgs} args - Arguments to create many Entreprises.
     * @example
     * // Create many Entreprises
     * const entreprise = await prisma.entreprise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntrepriseCreateManyArgs>(args?: SelectSubset<T, EntrepriseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entreprises and returns the data saved in the database.
     * @param {EntrepriseCreateManyAndReturnArgs} args - Arguments to create many Entreprises.
     * @example
     * // Create many Entreprises
     * const entreprise = await prisma.entreprise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entreprises and only return the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntrepriseCreateManyAndReturnArgs>(args?: SelectSubset<T, EntrepriseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entreprise.
     * @param {EntrepriseDeleteArgs} args - Arguments to delete one Entreprise.
     * @example
     * // Delete one Entreprise
     * const Entreprise = await prisma.entreprise.delete({
     *   where: {
     *     // ... filter to delete one Entreprise
     *   }
     * })
     * 
     */
    delete<T extends EntrepriseDeleteArgs>(args: SelectSubset<T, EntrepriseDeleteArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entreprise.
     * @param {EntrepriseUpdateArgs} args - Arguments to update one Entreprise.
     * @example
     * // Update one Entreprise
     * const entreprise = await prisma.entreprise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntrepriseUpdateArgs>(args: SelectSubset<T, EntrepriseUpdateArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entreprises.
     * @param {EntrepriseDeleteManyArgs} args - Arguments to filter Entreprises to delete.
     * @example
     * // Delete a few Entreprises
     * const { count } = await prisma.entreprise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntrepriseDeleteManyArgs>(args?: SelectSubset<T, EntrepriseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entreprises
     * const entreprise = await prisma.entreprise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntrepriseUpdateManyArgs>(args: SelectSubset<T, EntrepriseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entreprises and returns the data updated in the database.
     * @param {EntrepriseUpdateManyAndReturnArgs} args - Arguments to update many Entreprises.
     * @example
     * // Update many Entreprises
     * const entreprise = await prisma.entreprise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entreprises and only return the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.updateManyAndReturn({
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
    updateManyAndReturn<T extends EntrepriseUpdateManyAndReturnArgs>(args: SelectSubset<T, EntrepriseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entreprise.
     * @param {EntrepriseUpsertArgs} args - Arguments to update or create a Entreprise.
     * @example
     * // Update or create a Entreprise
     * const entreprise = await prisma.entreprise.upsert({
     *   create: {
     *     // ... data to create a Entreprise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entreprise we want to update
     *   }
     * })
     */
    upsert<T extends EntrepriseUpsertArgs>(args: SelectSubset<T, EntrepriseUpsertArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseCountArgs} args - Arguments to filter Entreprises to count.
     * @example
     * // Count the number of Entreprises
     * const count = await prisma.entreprise.count({
     *   where: {
     *     // ... the filter for the Entreprises we want to count
     *   }
     * })
    **/
    count<T extends EntrepriseCountArgs>(
      args?: Subset<T, EntrepriseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntrepriseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entreprise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntrepriseAggregateArgs>(args: Subset<T, EntrepriseAggregateArgs>): Prisma.PrismaPromise<GetEntrepriseAggregateType<T>>

    /**
     * Group by Entreprise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseGroupByArgs} args - Group by arguments.
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
      T extends EntrepriseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntrepriseGroupByArgs['orderBy'] }
        : { orderBy?: EntrepriseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntrepriseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntrepriseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entreprise model
   */
  readonly fields: EntrepriseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entreprise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntrepriseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Entreprise$usersArgs<ExtArgs> = {}>(args?: Subset<T, Entreprise$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Entreprise model
   */
  interface EntrepriseFieldRefs {
    readonly id: FieldRef<"Entreprise", 'String'>
    readonly name: FieldRef<"Entreprise", 'String'>
    readonly createdAt: FieldRef<"Entreprise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entreprise findUnique
   */
  export type EntrepriseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise findUniqueOrThrow
   */
  export type EntrepriseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise findFirst
   */
  export type EntrepriseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entreprises.
     */
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise findFirstOrThrow
   */
  export type EntrepriseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entreprises.
     */
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise findMany
   */
  export type EntrepriseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprises to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise create
   */
  export type EntrepriseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * The data needed to create a Entreprise.
     */
    data: XOR<EntrepriseCreateInput, EntrepriseUncheckedCreateInput>
  }

  /**
   * Entreprise createMany
   */
  export type EntrepriseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entreprises.
     */
    data: EntrepriseCreateManyInput | EntrepriseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entreprise createManyAndReturn
   */
  export type EntrepriseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * The data used to create many Entreprises.
     */
    data: EntrepriseCreateManyInput | EntrepriseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entreprise update
   */
  export type EntrepriseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * The data needed to update a Entreprise.
     */
    data: XOR<EntrepriseUpdateInput, EntrepriseUncheckedUpdateInput>
    /**
     * Choose, which Entreprise to update.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise updateMany
   */
  export type EntrepriseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entreprises.
     */
    data: XOR<EntrepriseUpdateManyMutationInput, EntrepriseUncheckedUpdateManyInput>
    /**
     * Filter which Entreprises to update
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to update.
     */
    limit?: number
  }

  /**
   * Entreprise updateManyAndReturn
   */
  export type EntrepriseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * The data used to update Entreprises.
     */
    data: XOR<EntrepriseUpdateManyMutationInput, EntrepriseUncheckedUpdateManyInput>
    /**
     * Filter which Entreprises to update
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to update.
     */
    limit?: number
  }

  /**
   * Entreprise upsert
   */
  export type EntrepriseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * The filter to search for the Entreprise to update in case it exists.
     */
    where: EntrepriseWhereUniqueInput
    /**
     * In case the Entreprise found by the `where` argument doesn't exist, create a new Entreprise with this data.
     */
    create: XOR<EntrepriseCreateInput, EntrepriseUncheckedCreateInput>
    /**
     * In case the Entreprise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntrepriseUpdateInput, EntrepriseUncheckedUpdateInput>
  }

  /**
   * Entreprise delete
   */
  export type EntrepriseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter which Entreprise to delete.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise deleteMany
   */
  export type EntrepriseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entreprises to delete
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to delete.
     */
    limit?: number
  }

  /**
   * Entreprise.users
   */
  export type Entreprise$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Entreprise without action
   */
  export type EntrepriseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
  }


  /**
   * Model Apprenant
   */

  export type AggregateApprenant = {
    _count: ApprenantCountAggregateOutputType | null
    _min: ApprenantMinAggregateOutputType | null
    _max: ApprenantMaxAggregateOutputType | null
  }

  export type ApprenantMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dateNaissance: Date | null
    createdAt: Date | null
  }

  export type ApprenantMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dateNaissance: Date | null
    createdAt: Date | null
  }

  export type ApprenantCountAggregateOutputType = {
    id: number
    userId: number
    dateNaissance: number
    createdAt: number
    _all: number
  }


  export type ApprenantMinAggregateInputType = {
    id?: true
    userId?: true
    dateNaissance?: true
    createdAt?: true
  }

  export type ApprenantMaxAggregateInputType = {
    id?: true
    userId?: true
    dateNaissance?: true
    createdAt?: true
  }

  export type ApprenantCountAggregateInputType = {
    id?: true
    userId?: true
    dateNaissance?: true
    createdAt?: true
    _all?: true
  }

  export type ApprenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apprenant to aggregate.
     */
    where?: ApprenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apprenants to fetch.
     */
    orderBy?: ApprenantOrderByWithRelationInput | ApprenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apprenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apprenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apprenants
    **/
    _count?: true | ApprenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprenantMaxAggregateInputType
  }

  export type GetApprenantAggregateType<T extends ApprenantAggregateArgs> = {
        [P in keyof T & keyof AggregateApprenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApprenant[P]>
      : GetScalarType<T[P], AggregateApprenant[P]>
  }




  export type ApprenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprenantWhereInput
    orderBy?: ApprenantOrderByWithAggregationInput | ApprenantOrderByWithAggregationInput[]
    by: ApprenantScalarFieldEnum[] | ApprenantScalarFieldEnum
    having?: ApprenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprenantCountAggregateInputType | true
    _min?: ApprenantMinAggregateInputType
    _max?: ApprenantMaxAggregateInputType
  }

  export type ApprenantGroupByOutputType = {
    id: string
    userId: string
    dateNaissance: Date | null
    createdAt: Date
    _count: ApprenantCountAggregateOutputType | null
    _min: ApprenantMinAggregateOutputType | null
    _max: ApprenantMaxAggregateOutputType | null
  }

  type GetApprenantGroupByPayload<T extends ApprenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprenantGroupByOutputType[P]>
            : GetScalarType<T[P], ApprenantGroupByOutputType[P]>
        }
      >
    >


  export type ApprenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateNaissance?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apprenant"]>

  export type ApprenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateNaissance?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apprenant"]>

  export type ApprenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateNaissance?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apprenant"]>

  export type ApprenantSelectScalar = {
    id?: boolean
    userId?: boolean
    dateNaissance?: boolean
    createdAt?: boolean
  }

  export type ApprenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dateNaissance" | "createdAt", ExtArgs["result"]["apprenant"]>
  export type ApprenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApprenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApprenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApprenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Apprenant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dateNaissance: Date | null
      createdAt: Date
    }, ExtArgs["result"]["apprenant"]>
    composites: {}
  }

  type ApprenantGetPayload<S extends boolean | null | undefined | ApprenantDefaultArgs> = $Result.GetResult<Prisma.$ApprenantPayload, S>

  type ApprenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprenantCountAggregateInputType | true
    }

  export interface ApprenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Apprenant'], meta: { name: 'Apprenant' } }
    /**
     * Find zero or one Apprenant that matches the filter.
     * @param {ApprenantFindUniqueArgs} args - Arguments to find a Apprenant
     * @example
     * // Get one Apprenant
     * const apprenant = await prisma.apprenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprenantFindUniqueArgs>(args: SelectSubset<T, ApprenantFindUniqueArgs<ExtArgs>>): Prisma__ApprenantClient<$Result.GetResult<Prisma.$ApprenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apprenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprenantFindUniqueOrThrowArgs} args - Arguments to find a Apprenant
     * @example
     * // Get one Apprenant
     * const apprenant = await prisma.apprenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprenantFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprenantClient<$Result.GetResult<Prisma.$ApprenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apprenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprenantFindFirstArgs} args - Arguments to find a Apprenant
     * @example
     * // Get one Apprenant
     * const apprenant = await prisma.apprenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprenantFindFirstArgs>(args?: SelectSubset<T, ApprenantFindFirstArgs<ExtArgs>>): Prisma__ApprenantClient<$Result.GetResult<Prisma.$ApprenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apprenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprenantFindFirstOrThrowArgs} args - Arguments to find a Apprenant
     * @example
     * // Get one Apprenant
     * const apprenant = await prisma.apprenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprenantFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprenantClient<$Result.GetResult<Prisma.$ApprenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apprenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apprenants
     * const apprenants = await prisma.apprenant.findMany()
     * 
     * // Get first 10 Apprenants
     * const apprenants = await prisma.apprenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apprenantWithIdOnly = await prisma.apprenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprenantFindManyArgs>(args?: SelectSubset<T, ApprenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apprenant.
     * @param {ApprenantCreateArgs} args - Arguments to create a Apprenant.
     * @example
     * // Create one Apprenant
     * const Apprenant = await prisma.apprenant.create({
     *   data: {
     *     // ... data to create a Apprenant
     *   }
     * })
     * 
     */
    create<T extends ApprenantCreateArgs>(args: SelectSubset<T, ApprenantCreateArgs<ExtArgs>>): Prisma__ApprenantClient<$Result.GetResult<Prisma.$ApprenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apprenants.
     * @param {ApprenantCreateManyArgs} args - Arguments to create many Apprenants.
     * @example
     * // Create many Apprenants
     * const apprenant = await prisma.apprenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprenantCreateManyArgs>(args?: SelectSubset<T, ApprenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apprenants and returns the data saved in the database.
     * @param {ApprenantCreateManyAndReturnArgs} args - Arguments to create many Apprenants.
     * @example
     * // Create many Apprenants
     * const apprenant = await prisma.apprenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apprenants and only return the `id`
     * const apprenantWithIdOnly = await prisma.apprenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApprenantCreateManyAndReturnArgs>(args?: SelectSubset<T, ApprenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Apprenant.
     * @param {ApprenantDeleteArgs} args - Arguments to delete one Apprenant.
     * @example
     * // Delete one Apprenant
     * const Apprenant = await prisma.apprenant.delete({
     *   where: {
     *     // ... filter to delete one Apprenant
     *   }
     * })
     * 
     */
    delete<T extends ApprenantDeleteArgs>(args: SelectSubset<T, ApprenantDeleteArgs<ExtArgs>>): Prisma__ApprenantClient<$Result.GetResult<Prisma.$ApprenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apprenant.
     * @param {ApprenantUpdateArgs} args - Arguments to update one Apprenant.
     * @example
     * // Update one Apprenant
     * const apprenant = await prisma.apprenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprenantUpdateArgs>(args: SelectSubset<T, ApprenantUpdateArgs<ExtArgs>>): Prisma__ApprenantClient<$Result.GetResult<Prisma.$ApprenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apprenants.
     * @param {ApprenantDeleteManyArgs} args - Arguments to filter Apprenants to delete.
     * @example
     * // Delete a few Apprenants
     * const { count } = await prisma.apprenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprenantDeleteManyArgs>(args?: SelectSubset<T, ApprenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apprenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apprenants
     * const apprenant = await prisma.apprenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprenantUpdateManyArgs>(args: SelectSubset<T, ApprenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apprenants and returns the data updated in the database.
     * @param {ApprenantUpdateManyAndReturnArgs} args - Arguments to update many Apprenants.
     * @example
     * // Update many Apprenants
     * const apprenant = await prisma.apprenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apprenants and only return the `id`
     * const apprenantWithIdOnly = await prisma.apprenant.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApprenantUpdateManyAndReturnArgs>(args: SelectSubset<T, ApprenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Apprenant.
     * @param {ApprenantUpsertArgs} args - Arguments to update or create a Apprenant.
     * @example
     * // Update or create a Apprenant
     * const apprenant = await prisma.apprenant.upsert({
     *   create: {
     *     // ... data to create a Apprenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apprenant we want to update
     *   }
     * })
     */
    upsert<T extends ApprenantUpsertArgs>(args: SelectSubset<T, ApprenantUpsertArgs<ExtArgs>>): Prisma__ApprenantClient<$Result.GetResult<Prisma.$ApprenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apprenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprenantCountArgs} args - Arguments to filter Apprenants to count.
     * @example
     * // Count the number of Apprenants
     * const count = await prisma.apprenant.count({
     *   where: {
     *     // ... the filter for the Apprenants we want to count
     *   }
     * })
    **/
    count<T extends ApprenantCountArgs>(
      args?: Subset<T, ApprenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apprenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApprenantAggregateArgs>(args: Subset<T, ApprenantAggregateArgs>): Prisma.PrismaPromise<GetApprenantAggregateType<T>>

    /**
     * Group by Apprenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprenantGroupByArgs} args - Group by arguments.
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
      T extends ApprenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprenantGroupByArgs['orderBy'] }
        : { orderBy?: ApprenantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApprenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Apprenant model
   */
  readonly fields: ApprenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Apprenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Apprenant model
   */
  interface ApprenantFieldRefs {
    readonly id: FieldRef<"Apprenant", 'String'>
    readonly userId: FieldRef<"Apprenant", 'String'>
    readonly dateNaissance: FieldRef<"Apprenant", 'DateTime'>
    readonly createdAt: FieldRef<"Apprenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Apprenant findUnique
   */
  export type ApprenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apprenant
     */
    select?: ApprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apprenant
     */
    omit?: ApprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprenantInclude<ExtArgs> | null
    /**
     * Filter, which Apprenant to fetch.
     */
    where: ApprenantWhereUniqueInput
  }

  /**
   * Apprenant findUniqueOrThrow
   */
  export type ApprenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apprenant
     */
    select?: ApprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apprenant
     */
    omit?: ApprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprenantInclude<ExtArgs> | null
    /**
     * Filter, which Apprenant to fetch.
     */
    where: ApprenantWhereUniqueInput
  }

  /**
   * Apprenant findFirst
   */
  export type ApprenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apprenant
     */
    select?: ApprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apprenant
     */
    omit?: ApprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprenantInclude<ExtArgs> | null
    /**
     * Filter, which Apprenant to fetch.
     */
    where?: ApprenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apprenants to fetch.
     */
    orderBy?: ApprenantOrderByWithRelationInput | ApprenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apprenants.
     */
    cursor?: ApprenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apprenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apprenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apprenants.
     */
    distinct?: ApprenantScalarFieldEnum | ApprenantScalarFieldEnum[]
  }

  /**
   * Apprenant findFirstOrThrow
   */
  export type ApprenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apprenant
     */
    select?: ApprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apprenant
     */
    omit?: ApprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprenantInclude<ExtArgs> | null
    /**
     * Filter, which Apprenant to fetch.
     */
    where?: ApprenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apprenants to fetch.
     */
    orderBy?: ApprenantOrderByWithRelationInput | ApprenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apprenants.
     */
    cursor?: ApprenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apprenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apprenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apprenants.
     */
    distinct?: ApprenantScalarFieldEnum | ApprenantScalarFieldEnum[]
  }

  /**
   * Apprenant findMany
   */
  export type ApprenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apprenant
     */
    select?: ApprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apprenant
     */
    omit?: ApprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprenantInclude<ExtArgs> | null
    /**
     * Filter, which Apprenants to fetch.
     */
    where?: ApprenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apprenants to fetch.
     */
    orderBy?: ApprenantOrderByWithRelationInput | ApprenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apprenants.
     */
    cursor?: ApprenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apprenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apprenants.
     */
    skip?: number
    distinct?: ApprenantScalarFieldEnum | ApprenantScalarFieldEnum[]
  }

  /**
   * Apprenant create
   */
  export type ApprenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apprenant
     */
    select?: ApprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apprenant
     */
    omit?: ApprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Apprenant.
     */
    data: XOR<ApprenantCreateInput, ApprenantUncheckedCreateInput>
  }

  /**
   * Apprenant createMany
   */
  export type ApprenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apprenants.
     */
    data: ApprenantCreateManyInput | ApprenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Apprenant createManyAndReturn
   */
  export type ApprenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apprenant
     */
    select?: ApprenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Apprenant
     */
    omit?: ApprenantOmit<ExtArgs> | null
    /**
     * The data used to create many Apprenants.
     */
    data: ApprenantCreateManyInput | ApprenantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprenantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Apprenant update
   */
  export type ApprenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apprenant
     */
    select?: ApprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apprenant
     */
    omit?: ApprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Apprenant.
     */
    data: XOR<ApprenantUpdateInput, ApprenantUncheckedUpdateInput>
    /**
     * Choose, which Apprenant to update.
     */
    where: ApprenantWhereUniqueInput
  }

  /**
   * Apprenant updateMany
   */
  export type ApprenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Apprenants.
     */
    data: XOR<ApprenantUpdateManyMutationInput, ApprenantUncheckedUpdateManyInput>
    /**
     * Filter which Apprenants to update
     */
    where?: ApprenantWhereInput
    /**
     * Limit how many Apprenants to update.
     */
    limit?: number
  }

  /**
   * Apprenant updateManyAndReturn
   */
  export type ApprenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apprenant
     */
    select?: ApprenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Apprenant
     */
    omit?: ApprenantOmit<ExtArgs> | null
    /**
     * The data used to update Apprenants.
     */
    data: XOR<ApprenantUpdateManyMutationInput, ApprenantUncheckedUpdateManyInput>
    /**
     * Filter which Apprenants to update
     */
    where?: ApprenantWhereInput
    /**
     * Limit how many Apprenants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprenantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Apprenant upsert
   */
  export type ApprenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apprenant
     */
    select?: ApprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apprenant
     */
    omit?: ApprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Apprenant to update in case it exists.
     */
    where: ApprenantWhereUniqueInput
    /**
     * In case the Apprenant found by the `where` argument doesn't exist, create a new Apprenant with this data.
     */
    create: XOR<ApprenantCreateInput, ApprenantUncheckedCreateInput>
    /**
     * In case the Apprenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprenantUpdateInput, ApprenantUncheckedUpdateInput>
  }

  /**
   * Apprenant delete
   */
  export type ApprenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apprenant
     */
    select?: ApprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apprenant
     */
    omit?: ApprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprenantInclude<ExtArgs> | null
    /**
     * Filter which Apprenant to delete.
     */
    where: ApprenantWhereUniqueInput
  }

  /**
   * Apprenant deleteMany
   */
  export type ApprenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apprenants to delete
     */
    where?: ApprenantWhereInput
    /**
     * Limit how many Apprenants to delete.
     */
    limit?: number
  }

  /**
   * Apprenant without action
   */
  export type ApprenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apprenant
     */
    select?: ApprenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apprenant
     */
    omit?: ApprenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprenantInclude<ExtArgs> | null
  }


  /**
   * Model Contrat
   */

  export type AggregateContrat = {
    _count: ContratCountAggregateOutputType | null
    _min: ContratMinAggregateOutputType | null
    _max: ContratMaxAggregateOutputType | null
  }

  export type ContratMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    statut: string | null
    createdAt: Date | null
  }

  export type ContratMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    statut: string | null
    createdAt: Date | null
  }

  export type ContratCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    statut: number
    createdAt: number
    _all: number
  }


  export type ContratMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    statut?: true
    createdAt?: true
  }

  export type ContratMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    statut?: true
    createdAt?: true
  }

  export type ContratCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    statut?: true
    createdAt?: true
    _all?: true
  }

  export type ContratAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contrat to aggregate.
     */
    where?: ContratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contrats to fetch.
     */
    orderBy?: ContratOrderByWithRelationInput | ContratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contrats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contrats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contrats
    **/
    _count?: true | ContratCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContratMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContratMaxAggregateInputType
  }

  export type GetContratAggregateType<T extends ContratAggregateArgs> = {
        [P in keyof T & keyof AggregateContrat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContrat[P]>
      : GetScalarType<T[P], AggregateContrat[P]>
  }




  export type ContratGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContratWhereInput
    orderBy?: ContratOrderByWithAggregationInput | ContratOrderByWithAggregationInput[]
    by: ContratScalarFieldEnum[] | ContratScalarFieldEnum
    having?: ContratScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContratCountAggregateInputType | true
    _min?: ContratMinAggregateInputType
    _max?: ContratMaxAggregateInputType
  }

  export type ContratGroupByOutputType = {
    id: string
    userId: string
    type: string
    statut: string
    createdAt: Date
    _count: ContratCountAggregateOutputType | null
    _min: ContratMinAggregateOutputType | null
    _max: ContratMaxAggregateOutputType | null
  }

  type GetContratGroupByPayload<T extends ContratGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContratGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContratGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContratGroupByOutputType[P]>
            : GetScalarType<T[P], ContratGroupByOutputType[P]>
        }
      >
    >


  export type ContratSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    statut?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contrat"]>

  export type ContratSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    statut?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contrat"]>

  export type ContratSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    statut?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contrat"]>

  export type ContratSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    statut?: boolean
    createdAt?: boolean
  }

  export type ContratOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "statut" | "createdAt", ExtArgs["result"]["contrat"]>
  export type ContratInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContratIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContratIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContratPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contrat"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      statut: string
      createdAt: Date
    }, ExtArgs["result"]["contrat"]>
    composites: {}
  }

  type ContratGetPayload<S extends boolean | null | undefined | ContratDefaultArgs> = $Result.GetResult<Prisma.$ContratPayload, S>

  type ContratCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContratFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContratCountAggregateInputType | true
    }

  export interface ContratDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contrat'], meta: { name: 'Contrat' } }
    /**
     * Find zero or one Contrat that matches the filter.
     * @param {ContratFindUniqueArgs} args - Arguments to find a Contrat
     * @example
     * // Get one Contrat
     * const contrat = await prisma.contrat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContratFindUniqueArgs>(args: SelectSubset<T, ContratFindUniqueArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contrat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContratFindUniqueOrThrowArgs} args - Arguments to find a Contrat
     * @example
     * // Get one Contrat
     * const contrat = await prisma.contrat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContratFindUniqueOrThrowArgs>(args: SelectSubset<T, ContratFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contrat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratFindFirstArgs} args - Arguments to find a Contrat
     * @example
     * // Get one Contrat
     * const contrat = await prisma.contrat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContratFindFirstArgs>(args?: SelectSubset<T, ContratFindFirstArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contrat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratFindFirstOrThrowArgs} args - Arguments to find a Contrat
     * @example
     * // Get one Contrat
     * const contrat = await prisma.contrat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContratFindFirstOrThrowArgs>(args?: SelectSubset<T, ContratFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contrats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contrats
     * const contrats = await prisma.contrat.findMany()
     * 
     * // Get first 10 Contrats
     * const contrats = await prisma.contrat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contratWithIdOnly = await prisma.contrat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContratFindManyArgs>(args?: SelectSubset<T, ContratFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contrat.
     * @param {ContratCreateArgs} args - Arguments to create a Contrat.
     * @example
     * // Create one Contrat
     * const Contrat = await prisma.contrat.create({
     *   data: {
     *     // ... data to create a Contrat
     *   }
     * })
     * 
     */
    create<T extends ContratCreateArgs>(args: SelectSubset<T, ContratCreateArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contrats.
     * @param {ContratCreateManyArgs} args - Arguments to create many Contrats.
     * @example
     * // Create many Contrats
     * const contrat = await prisma.contrat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContratCreateManyArgs>(args?: SelectSubset<T, ContratCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contrats and returns the data saved in the database.
     * @param {ContratCreateManyAndReturnArgs} args - Arguments to create many Contrats.
     * @example
     * // Create many Contrats
     * const contrat = await prisma.contrat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contrats and only return the `id`
     * const contratWithIdOnly = await prisma.contrat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContratCreateManyAndReturnArgs>(args?: SelectSubset<T, ContratCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contrat.
     * @param {ContratDeleteArgs} args - Arguments to delete one Contrat.
     * @example
     * // Delete one Contrat
     * const Contrat = await prisma.contrat.delete({
     *   where: {
     *     // ... filter to delete one Contrat
     *   }
     * })
     * 
     */
    delete<T extends ContratDeleteArgs>(args: SelectSubset<T, ContratDeleteArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contrat.
     * @param {ContratUpdateArgs} args - Arguments to update one Contrat.
     * @example
     * // Update one Contrat
     * const contrat = await prisma.contrat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContratUpdateArgs>(args: SelectSubset<T, ContratUpdateArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contrats.
     * @param {ContratDeleteManyArgs} args - Arguments to filter Contrats to delete.
     * @example
     * // Delete a few Contrats
     * const { count } = await prisma.contrat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContratDeleteManyArgs>(args?: SelectSubset<T, ContratDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contrats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contrats
     * const contrat = await prisma.contrat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContratUpdateManyArgs>(args: SelectSubset<T, ContratUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contrats and returns the data updated in the database.
     * @param {ContratUpdateManyAndReturnArgs} args - Arguments to update many Contrats.
     * @example
     * // Update many Contrats
     * const contrat = await prisma.contrat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contrats and only return the `id`
     * const contratWithIdOnly = await prisma.contrat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContratUpdateManyAndReturnArgs>(args: SelectSubset<T, ContratUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contrat.
     * @param {ContratUpsertArgs} args - Arguments to update or create a Contrat.
     * @example
     * // Update or create a Contrat
     * const contrat = await prisma.contrat.upsert({
     *   create: {
     *     // ... data to create a Contrat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contrat we want to update
     *   }
     * })
     */
    upsert<T extends ContratUpsertArgs>(args: SelectSubset<T, ContratUpsertArgs<ExtArgs>>): Prisma__ContratClient<$Result.GetResult<Prisma.$ContratPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contrats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratCountArgs} args - Arguments to filter Contrats to count.
     * @example
     * // Count the number of Contrats
     * const count = await prisma.contrat.count({
     *   where: {
     *     // ... the filter for the Contrats we want to count
     *   }
     * })
    **/
    count<T extends ContratCountArgs>(
      args?: Subset<T, ContratCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContratCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contrat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContratAggregateArgs>(args: Subset<T, ContratAggregateArgs>): Prisma.PrismaPromise<GetContratAggregateType<T>>

    /**
     * Group by Contrat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratGroupByArgs} args - Group by arguments.
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
      T extends ContratGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContratGroupByArgs['orderBy'] }
        : { orderBy?: ContratGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContratGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContratGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contrat model
   */
  readonly fields: ContratFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contrat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContratClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contrat model
   */
  interface ContratFieldRefs {
    readonly id: FieldRef<"Contrat", 'String'>
    readonly userId: FieldRef<"Contrat", 'String'>
    readonly type: FieldRef<"Contrat", 'String'>
    readonly statut: FieldRef<"Contrat", 'String'>
    readonly createdAt: FieldRef<"Contrat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contrat findUnique
   */
  export type ContratFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * Filter, which Contrat to fetch.
     */
    where: ContratWhereUniqueInput
  }

  /**
   * Contrat findUniqueOrThrow
   */
  export type ContratFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * Filter, which Contrat to fetch.
     */
    where: ContratWhereUniqueInput
  }

  /**
   * Contrat findFirst
   */
  export type ContratFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * Filter, which Contrat to fetch.
     */
    where?: ContratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contrats to fetch.
     */
    orderBy?: ContratOrderByWithRelationInput | ContratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contrats.
     */
    cursor?: ContratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contrats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contrats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contrats.
     */
    distinct?: ContratScalarFieldEnum | ContratScalarFieldEnum[]
  }

  /**
   * Contrat findFirstOrThrow
   */
  export type ContratFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * Filter, which Contrat to fetch.
     */
    where?: ContratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contrats to fetch.
     */
    orderBy?: ContratOrderByWithRelationInput | ContratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contrats.
     */
    cursor?: ContratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contrats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contrats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contrats.
     */
    distinct?: ContratScalarFieldEnum | ContratScalarFieldEnum[]
  }

  /**
   * Contrat findMany
   */
  export type ContratFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * Filter, which Contrats to fetch.
     */
    where?: ContratWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contrats to fetch.
     */
    orderBy?: ContratOrderByWithRelationInput | ContratOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contrats.
     */
    cursor?: ContratWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contrats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contrats.
     */
    skip?: number
    distinct?: ContratScalarFieldEnum | ContratScalarFieldEnum[]
  }

  /**
   * Contrat create
   */
  export type ContratCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * The data needed to create a Contrat.
     */
    data: XOR<ContratCreateInput, ContratUncheckedCreateInput>
  }

  /**
   * Contrat createMany
   */
  export type ContratCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contrats.
     */
    data: ContratCreateManyInput | ContratCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contrat createManyAndReturn
   */
  export type ContratCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * The data used to create many Contrats.
     */
    data: ContratCreateManyInput | ContratCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contrat update
   */
  export type ContratUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * The data needed to update a Contrat.
     */
    data: XOR<ContratUpdateInput, ContratUncheckedUpdateInput>
    /**
     * Choose, which Contrat to update.
     */
    where: ContratWhereUniqueInput
  }

  /**
   * Contrat updateMany
   */
  export type ContratUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contrats.
     */
    data: XOR<ContratUpdateManyMutationInput, ContratUncheckedUpdateManyInput>
    /**
     * Filter which Contrats to update
     */
    where?: ContratWhereInput
    /**
     * Limit how many Contrats to update.
     */
    limit?: number
  }

  /**
   * Contrat updateManyAndReturn
   */
  export type ContratUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * The data used to update Contrats.
     */
    data: XOR<ContratUpdateManyMutationInput, ContratUncheckedUpdateManyInput>
    /**
     * Filter which Contrats to update
     */
    where?: ContratWhereInput
    /**
     * Limit how many Contrats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contrat upsert
   */
  export type ContratUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * The filter to search for the Contrat to update in case it exists.
     */
    where: ContratWhereUniqueInput
    /**
     * In case the Contrat found by the `where` argument doesn't exist, create a new Contrat with this data.
     */
    create: XOR<ContratCreateInput, ContratUncheckedCreateInput>
    /**
     * In case the Contrat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContratUpdateInput, ContratUncheckedUpdateInput>
  }

  /**
   * Contrat delete
   */
  export type ContratDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
    /**
     * Filter which Contrat to delete.
     */
    where: ContratWhereUniqueInput
  }

  /**
   * Contrat deleteMany
   */
  export type ContratDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contrats to delete
     */
    where?: ContratWhereInput
    /**
     * Limit how many Contrats to delete.
     */
    limit?: number
  }

  /**
   * Contrat without action
   */
  export type ContratDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrat
     */
    select?: ContratSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrat
     */
    omit?: ContratOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratInclude<ExtArgs> | null
  }


  /**
   * Model Convention
   */

  export type AggregateConvention = {
    _count: ConventionCountAggregateOutputType | null
    _min: ConventionMinAggregateOutputType | null
    _max: ConventionMaxAggregateOutputType | null
  }

  export type ConventionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sujet: string | null
    createdAt: Date | null
  }

  export type ConventionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sujet: string | null
    createdAt: Date | null
  }

  export type ConventionCountAggregateOutputType = {
    id: number
    userId: number
    sujet: number
    createdAt: number
    _all: number
  }


  export type ConventionMinAggregateInputType = {
    id?: true
    userId?: true
    sujet?: true
    createdAt?: true
  }

  export type ConventionMaxAggregateInputType = {
    id?: true
    userId?: true
    sujet?: true
    createdAt?: true
  }

  export type ConventionCountAggregateInputType = {
    id?: true
    userId?: true
    sujet?: true
    createdAt?: true
    _all?: true
  }

  export type ConventionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Convention to aggregate.
     */
    where?: ConventionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conventions to fetch.
     */
    orderBy?: ConventionOrderByWithRelationInput | ConventionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConventionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conventions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conventions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conventions
    **/
    _count?: true | ConventionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConventionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConventionMaxAggregateInputType
  }

  export type GetConventionAggregateType<T extends ConventionAggregateArgs> = {
        [P in keyof T & keyof AggregateConvention]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConvention[P]>
      : GetScalarType<T[P], AggregateConvention[P]>
  }




  export type ConventionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConventionWhereInput
    orderBy?: ConventionOrderByWithAggregationInput | ConventionOrderByWithAggregationInput[]
    by: ConventionScalarFieldEnum[] | ConventionScalarFieldEnum
    having?: ConventionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConventionCountAggregateInputType | true
    _min?: ConventionMinAggregateInputType
    _max?: ConventionMaxAggregateInputType
  }

  export type ConventionGroupByOutputType = {
    id: string
    userId: string
    sujet: string
    createdAt: Date
    _count: ConventionCountAggregateOutputType | null
    _min: ConventionMinAggregateOutputType | null
    _max: ConventionMaxAggregateOutputType | null
  }

  type GetConventionGroupByPayload<T extends ConventionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConventionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConventionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConventionGroupByOutputType[P]>
            : GetScalarType<T[P], ConventionGroupByOutputType[P]>
        }
      >
    >


  export type ConventionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sujet?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["convention"]>

  export type ConventionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sujet?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["convention"]>

  export type ConventionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sujet?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["convention"]>

  export type ConventionSelectScalar = {
    id?: boolean
    userId?: boolean
    sujet?: boolean
    createdAt?: boolean
  }

  export type ConventionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sujet" | "createdAt", ExtArgs["result"]["convention"]>
  export type ConventionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConventionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConventionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConventionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Convention"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sujet: string
      createdAt: Date
    }, ExtArgs["result"]["convention"]>
    composites: {}
  }

  type ConventionGetPayload<S extends boolean | null | undefined | ConventionDefaultArgs> = $Result.GetResult<Prisma.$ConventionPayload, S>

  type ConventionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConventionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConventionCountAggregateInputType | true
    }

  export interface ConventionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Convention'], meta: { name: 'Convention' } }
    /**
     * Find zero or one Convention that matches the filter.
     * @param {ConventionFindUniqueArgs} args - Arguments to find a Convention
     * @example
     * // Get one Convention
     * const convention = await prisma.convention.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConventionFindUniqueArgs>(args: SelectSubset<T, ConventionFindUniqueArgs<ExtArgs>>): Prisma__ConventionClient<$Result.GetResult<Prisma.$ConventionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Convention that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConventionFindUniqueOrThrowArgs} args - Arguments to find a Convention
     * @example
     * // Get one Convention
     * const convention = await prisma.convention.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConventionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConventionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConventionClient<$Result.GetResult<Prisma.$ConventionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Convention that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConventionFindFirstArgs} args - Arguments to find a Convention
     * @example
     * // Get one Convention
     * const convention = await prisma.convention.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConventionFindFirstArgs>(args?: SelectSubset<T, ConventionFindFirstArgs<ExtArgs>>): Prisma__ConventionClient<$Result.GetResult<Prisma.$ConventionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Convention that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConventionFindFirstOrThrowArgs} args - Arguments to find a Convention
     * @example
     * // Get one Convention
     * const convention = await prisma.convention.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConventionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConventionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConventionClient<$Result.GetResult<Prisma.$ConventionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conventions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConventionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conventions
     * const conventions = await prisma.convention.findMany()
     * 
     * // Get first 10 Conventions
     * const conventions = await prisma.convention.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conventionWithIdOnly = await prisma.convention.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConventionFindManyArgs>(args?: SelectSubset<T, ConventionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConventionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Convention.
     * @param {ConventionCreateArgs} args - Arguments to create a Convention.
     * @example
     * // Create one Convention
     * const Convention = await prisma.convention.create({
     *   data: {
     *     // ... data to create a Convention
     *   }
     * })
     * 
     */
    create<T extends ConventionCreateArgs>(args: SelectSubset<T, ConventionCreateArgs<ExtArgs>>): Prisma__ConventionClient<$Result.GetResult<Prisma.$ConventionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conventions.
     * @param {ConventionCreateManyArgs} args - Arguments to create many Conventions.
     * @example
     * // Create many Conventions
     * const convention = await prisma.convention.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConventionCreateManyArgs>(args?: SelectSubset<T, ConventionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conventions and returns the data saved in the database.
     * @param {ConventionCreateManyAndReturnArgs} args - Arguments to create many Conventions.
     * @example
     * // Create many Conventions
     * const convention = await prisma.convention.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conventions and only return the `id`
     * const conventionWithIdOnly = await prisma.convention.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConventionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConventionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConventionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Convention.
     * @param {ConventionDeleteArgs} args - Arguments to delete one Convention.
     * @example
     * // Delete one Convention
     * const Convention = await prisma.convention.delete({
     *   where: {
     *     // ... filter to delete one Convention
     *   }
     * })
     * 
     */
    delete<T extends ConventionDeleteArgs>(args: SelectSubset<T, ConventionDeleteArgs<ExtArgs>>): Prisma__ConventionClient<$Result.GetResult<Prisma.$ConventionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Convention.
     * @param {ConventionUpdateArgs} args - Arguments to update one Convention.
     * @example
     * // Update one Convention
     * const convention = await prisma.convention.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConventionUpdateArgs>(args: SelectSubset<T, ConventionUpdateArgs<ExtArgs>>): Prisma__ConventionClient<$Result.GetResult<Prisma.$ConventionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conventions.
     * @param {ConventionDeleteManyArgs} args - Arguments to filter Conventions to delete.
     * @example
     * // Delete a few Conventions
     * const { count } = await prisma.convention.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConventionDeleteManyArgs>(args?: SelectSubset<T, ConventionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conventions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConventionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conventions
     * const convention = await prisma.convention.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConventionUpdateManyArgs>(args: SelectSubset<T, ConventionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conventions and returns the data updated in the database.
     * @param {ConventionUpdateManyAndReturnArgs} args - Arguments to update many Conventions.
     * @example
     * // Update many Conventions
     * const convention = await prisma.convention.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conventions and only return the `id`
     * const conventionWithIdOnly = await prisma.convention.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConventionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConventionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConventionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Convention.
     * @param {ConventionUpsertArgs} args - Arguments to update or create a Convention.
     * @example
     * // Update or create a Convention
     * const convention = await prisma.convention.upsert({
     *   create: {
     *     // ... data to create a Convention
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Convention we want to update
     *   }
     * })
     */
    upsert<T extends ConventionUpsertArgs>(args: SelectSubset<T, ConventionUpsertArgs<ExtArgs>>): Prisma__ConventionClient<$Result.GetResult<Prisma.$ConventionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conventions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConventionCountArgs} args - Arguments to filter Conventions to count.
     * @example
     * // Count the number of Conventions
     * const count = await prisma.convention.count({
     *   where: {
     *     // ... the filter for the Conventions we want to count
     *   }
     * })
    **/
    count<T extends ConventionCountArgs>(
      args?: Subset<T, ConventionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConventionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Convention.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConventionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConventionAggregateArgs>(args: Subset<T, ConventionAggregateArgs>): Prisma.PrismaPromise<GetConventionAggregateType<T>>

    /**
     * Group by Convention.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConventionGroupByArgs} args - Group by arguments.
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
      T extends ConventionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConventionGroupByArgs['orderBy'] }
        : { orderBy?: ConventionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConventionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConventionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Convention model
   */
  readonly fields: ConventionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Convention.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConventionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Convention model
   */
  interface ConventionFieldRefs {
    readonly id: FieldRef<"Convention", 'String'>
    readonly userId: FieldRef<"Convention", 'String'>
    readonly sujet: FieldRef<"Convention", 'String'>
    readonly createdAt: FieldRef<"Convention", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Convention findUnique
   */
  export type ConventionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convention
     */
    select?: ConventionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convention
     */
    omit?: ConventionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConventionInclude<ExtArgs> | null
    /**
     * Filter, which Convention to fetch.
     */
    where: ConventionWhereUniqueInput
  }

  /**
   * Convention findUniqueOrThrow
   */
  export type ConventionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convention
     */
    select?: ConventionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convention
     */
    omit?: ConventionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConventionInclude<ExtArgs> | null
    /**
     * Filter, which Convention to fetch.
     */
    where: ConventionWhereUniqueInput
  }

  /**
   * Convention findFirst
   */
  export type ConventionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convention
     */
    select?: ConventionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convention
     */
    omit?: ConventionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConventionInclude<ExtArgs> | null
    /**
     * Filter, which Convention to fetch.
     */
    where?: ConventionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conventions to fetch.
     */
    orderBy?: ConventionOrderByWithRelationInput | ConventionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conventions.
     */
    cursor?: ConventionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conventions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conventions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conventions.
     */
    distinct?: ConventionScalarFieldEnum | ConventionScalarFieldEnum[]
  }

  /**
   * Convention findFirstOrThrow
   */
  export type ConventionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convention
     */
    select?: ConventionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convention
     */
    omit?: ConventionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConventionInclude<ExtArgs> | null
    /**
     * Filter, which Convention to fetch.
     */
    where?: ConventionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conventions to fetch.
     */
    orderBy?: ConventionOrderByWithRelationInput | ConventionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conventions.
     */
    cursor?: ConventionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conventions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conventions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conventions.
     */
    distinct?: ConventionScalarFieldEnum | ConventionScalarFieldEnum[]
  }

  /**
   * Convention findMany
   */
  export type ConventionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convention
     */
    select?: ConventionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convention
     */
    omit?: ConventionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConventionInclude<ExtArgs> | null
    /**
     * Filter, which Conventions to fetch.
     */
    where?: ConventionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conventions to fetch.
     */
    orderBy?: ConventionOrderByWithRelationInput | ConventionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conventions.
     */
    cursor?: ConventionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conventions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conventions.
     */
    skip?: number
    distinct?: ConventionScalarFieldEnum | ConventionScalarFieldEnum[]
  }

  /**
   * Convention create
   */
  export type ConventionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convention
     */
    select?: ConventionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convention
     */
    omit?: ConventionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConventionInclude<ExtArgs> | null
    /**
     * The data needed to create a Convention.
     */
    data: XOR<ConventionCreateInput, ConventionUncheckedCreateInput>
  }

  /**
   * Convention createMany
   */
  export type ConventionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conventions.
     */
    data: ConventionCreateManyInput | ConventionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Convention createManyAndReturn
   */
  export type ConventionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convention
     */
    select?: ConventionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Convention
     */
    omit?: ConventionOmit<ExtArgs> | null
    /**
     * The data used to create many Conventions.
     */
    data: ConventionCreateManyInput | ConventionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConventionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Convention update
   */
  export type ConventionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convention
     */
    select?: ConventionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convention
     */
    omit?: ConventionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConventionInclude<ExtArgs> | null
    /**
     * The data needed to update a Convention.
     */
    data: XOR<ConventionUpdateInput, ConventionUncheckedUpdateInput>
    /**
     * Choose, which Convention to update.
     */
    where: ConventionWhereUniqueInput
  }

  /**
   * Convention updateMany
   */
  export type ConventionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conventions.
     */
    data: XOR<ConventionUpdateManyMutationInput, ConventionUncheckedUpdateManyInput>
    /**
     * Filter which Conventions to update
     */
    where?: ConventionWhereInput
    /**
     * Limit how many Conventions to update.
     */
    limit?: number
  }

  /**
   * Convention updateManyAndReturn
   */
  export type ConventionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convention
     */
    select?: ConventionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Convention
     */
    omit?: ConventionOmit<ExtArgs> | null
    /**
     * The data used to update Conventions.
     */
    data: XOR<ConventionUpdateManyMutationInput, ConventionUncheckedUpdateManyInput>
    /**
     * Filter which Conventions to update
     */
    where?: ConventionWhereInput
    /**
     * Limit how many Conventions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConventionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Convention upsert
   */
  export type ConventionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convention
     */
    select?: ConventionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convention
     */
    omit?: ConventionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConventionInclude<ExtArgs> | null
    /**
     * The filter to search for the Convention to update in case it exists.
     */
    where: ConventionWhereUniqueInput
    /**
     * In case the Convention found by the `where` argument doesn't exist, create a new Convention with this data.
     */
    create: XOR<ConventionCreateInput, ConventionUncheckedCreateInput>
    /**
     * In case the Convention was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConventionUpdateInput, ConventionUncheckedUpdateInput>
  }

  /**
   * Convention delete
   */
  export type ConventionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convention
     */
    select?: ConventionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convention
     */
    omit?: ConventionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConventionInclude<ExtArgs> | null
    /**
     * Filter which Convention to delete.
     */
    where: ConventionWhereUniqueInput
  }

  /**
   * Convention deleteMany
   */
  export type ConventionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conventions to delete
     */
    where?: ConventionWhereInput
    /**
     * Limit how many Conventions to delete.
     */
    limit?: number
  }

  /**
   * Convention without action
   */
  export type ConventionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convention
     */
    select?: ConventionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convention
     */
    omit?: ConventionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConventionInclude<ExtArgs> | null
  }


  /**
   * Model Evenement
   */

  export type AggregateEvenement = {
    _count: EvenementCountAggregateOutputType | null
    _min: EvenementMinAggregateOutputType | null
    _max: EvenementMaxAggregateOutputType | null
  }

  export type EvenementMinAggregateOutputType = {
    id: string | null
    type: string | null
    message: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type EvenementMaxAggregateOutputType = {
    id: string | null
    type: string | null
    message: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type EvenementCountAggregateOutputType = {
    id: number
    type: number
    message: number
    userId: number
    createdAt: number
    _all: number
  }


  export type EvenementMinAggregateInputType = {
    id?: true
    type?: true
    message?: true
    userId?: true
    createdAt?: true
  }

  export type EvenementMaxAggregateInputType = {
    id?: true
    type?: true
    message?: true
    userId?: true
    createdAt?: true
  }

  export type EvenementCountAggregateInputType = {
    id?: true
    type?: true
    message?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type EvenementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evenement to aggregate.
     */
    where?: EvenementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evenements to fetch.
     */
    orderBy?: EvenementOrderByWithRelationInput | EvenementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvenementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evenements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evenements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evenements
    **/
    _count?: true | EvenementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvenementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvenementMaxAggregateInputType
  }

  export type GetEvenementAggregateType<T extends EvenementAggregateArgs> = {
        [P in keyof T & keyof AggregateEvenement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvenement[P]>
      : GetScalarType<T[P], AggregateEvenement[P]>
  }




  export type EvenementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvenementWhereInput
    orderBy?: EvenementOrderByWithAggregationInput | EvenementOrderByWithAggregationInput[]
    by: EvenementScalarFieldEnum[] | EvenementScalarFieldEnum
    having?: EvenementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvenementCountAggregateInputType | true
    _min?: EvenementMinAggregateInputType
    _max?: EvenementMaxAggregateInputType
  }

  export type EvenementGroupByOutputType = {
    id: string
    type: string
    message: string
    userId: string | null
    createdAt: Date
    _count: EvenementCountAggregateOutputType | null
    _min: EvenementMinAggregateOutputType | null
    _max: EvenementMaxAggregateOutputType | null
  }

  type GetEvenementGroupByPayload<T extends EvenementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvenementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvenementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvenementGroupByOutputType[P]>
            : GetScalarType<T[P], EvenementGroupByOutputType[P]>
        }
      >
    >


  export type EvenementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | Evenement$userArgs<ExtArgs>
  }, ExtArgs["result"]["evenement"]>

  export type EvenementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | Evenement$userArgs<ExtArgs>
  }, ExtArgs["result"]["evenement"]>

  export type EvenementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | Evenement$userArgs<ExtArgs>
  }, ExtArgs["result"]["evenement"]>

  export type EvenementSelectScalar = {
    id?: boolean
    type?: boolean
    message?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type EvenementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "message" | "userId" | "createdAt", ExtArgs["result"]["evenement"]>
  export type EvenementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Evenement$userArgs<ExtArgs>
  }
  export type EvenementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Evenement$userArgs<ExtArgs>
  }
  export type EvenementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Evenement$userArgs<ExtArgs>
  }

  export type $EvenementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evenement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      message: string
      userId: string | null
      createdAt: Date
    }, ExtArgs["result"]["evenement"]>
    composites: {}
  }

  type EvenementGetPayload<S extends boolean | null | undefined | EvenementDefaultArgs> = $Result.GetResult<Prisma.$EvenementPayload, S>

  type EvenementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvenementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvenementCountAggregateInputType | true
    }

  export interface EvenementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evenement'], meta: { name: 'Evenement' } }
    /**
     * Find zero or one Evenement that matches the filter.
     * @param {EvenementFindUniqueArgs} args - Arguments to find a Evenement
     * @example
     * // Get one Evenement
     * const evenement = await prisma.evenement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvenementFindUniqueArgs>(args: SelectSubset<T, EvenementFindUniqueArgs<ExtArgs>>): Prisma__EvenementClient<$Result.GetResult<Prisma.$EvenementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evenement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvenementFindUniqueOrThrowArgs} args - Arguments to find a Evenement
     * @example
     * // Get one Evenement
     * const evenement = await prisma.evenement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvenementFindUniqueOrThrowArgs>(args: SelectSubset<T, EvenementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvenementClient<$Result.GetResult<Prisma.$EvenementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evenement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvenementFindFirstArgs} args - Arguments to find a Evenement
     * @example
     * // Get one Evenement
     * const evenement = await prisma.evenement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvenementFindFirstArgs>(args?: SelectSubset<T, EvenementFindFirstArgs<ExtArgs>>): Prisma__EvenementClient<$Result.GetResult<Prisma.$EvenementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evenement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvenementFindFirstOrThrowArgs} args - Arguments to find a Evenement
     * @example
     * // Get one Evenement
     * const evenement = await prisma.evenement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvenementFindFirstOrThrowArgs>(args?: SelectSubset<T, EvenementFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvenementClient<$Result.GetResult<Prisma.$EvenementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evenements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvenementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evenements
     * const evenements = await prisma.evenement.findMany()
     * 
     * // Get first 10 Evenements
     * const evenements = await prisma.evenement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evenementWithIdOnly = await prisma.evenement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvenementFindManyArgs>(args?: SelectSubset<T, EvenementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvenementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evenement.
     * @param {EvenementCreateArgs} args - Arguments to create a Evenement.
     * @example
     * // Create one Evenement
     * const Evenement = await prisma.evenement.create({
     *   data: {
     *     // ... data to create a Evenement
     *   }
     * })
     * 
     */
    create<T extends EvenementCreateArgs>(args: SelectSubset<T, EvenementCreateArgs<ExtArgs>>): Prisma__EvenementClient<$Result.GetResult<Prisma.$EvenementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evenements.
     * @param {EvenementCreateManyArgs} args - Arguments to create many Evenements.
     * @example
     * // Create many Evenements
     * const evenement = await prisma.evenement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvenementCreateManyArgs>(args?: SelectSubset<T, EvenementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evenements and returns the data saved in the database.
     * @param {EvenementCreateManyAndReturnArgs} args - Arguments to create many Evenements.
     * @example
     * // Create many Evenements
     * const evenement = await prisma.evenement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evenements and only return the `id`
     * const evenementWithIdOnly = await prisma.evenement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvenementCreateManyAndReturnArgs>(args?: SelectSubset<T, EvenementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvenementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evenement.
     * @param {EvenementDeleteArgs} args - Arguments to delete one Evenement.
     * @example
     * // Delete one Evenement
     * const Evenement = await prisma.evenement.delete({
     *   where: {
     *     // ... filter to delete one Evenement
     *   }
     * })
     * 
     */
    delete<T extends EvenementDeleteArgs>(args: SelectSubset<T, EvenementDeleteArgs<ExtArgs>>): Prisma__EvenementClient<$Result.GetResult<Prisma.$EvenementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evenement.
     * @param {EvenementUpdateArgs} args - Arguments to update one Evenement.
     * @example
     * // Update one Evenement
     * const evenement = await prisma.evenement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvenementUpdateArgs>(args: SelectSubset<T, EvenementUpdateArgs<ExtArgs>>): Prisma__EvenementClient<$Result.GetResult<Prisma.$EvenementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evenements.
     * @param {EvenementDeleteManyArgs} args - Arguments to filter Evenements to delete.
     * @example
     * // Delete a few Evenements
     * const { count } = await prisma.evenement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvenementDeleteManyArgs>(args?: SelectSubset<T, EvenementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evenements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvenementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evenements
     * const evenement = await prisma.evenement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvenementUpdateManyArgs>(args: SelectSubset<T, EvenementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evenements and returns the data updated in the database.
     * @param {EvenementUpdateManyAndReturnArgs} args - Arguments to update many Evenements.
     * @example
     * // Update many Evenements
     * const evenement = await prisma.evenement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evenements and only return the `id`
     * const evenementWithIdOnly = await prisma.evenement.updateManyAndReturn({
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
    updateManyAndReturn<T extends EvenementUpdateManyAndReturnArgs>(args: SelectSubset<T, EvenementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvenementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evenement.
     * @param {EvenementUpsertArgs} args - Arguments to update or create a Evenement.
     * @example
     * // Update or create a Evenement
     * const evenement = await prisma.evenement.upsert({
     *   create: {
     *     // ... data to create a Evenement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evenement we want to update
     *   }
     * })
     */
    upsert<T extends EvenementUpsertArgs>(args: SelectSubset<T, EvenementUpsertArgs<ExtArgs>>): Prisma__EvenementClient<$Result.GetResult<Prisma.$EvenementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evenements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvenementCountArgs} args - Arguments to filter Evenements to count.
     * @example
     * // Count the number of Evenements
     * const count = await prisma.evenement.count({
     *   where: {
     *     // ... the filter for the Evenements we want to count
     *   }
     * })
    **/
    count<T extends EvenementCountArgs>(
      args?: Subset<T, EvenementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvenementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evenement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvenementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvenementAggregateArgs>(args: Subset<T, EvenementAggregateArgs>): Prisma.PrismaPromise<GetEvenementAggregateType<T>>

    /**
     * Group by Evenement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvenementGroupByArgs} args - Group by arguments.
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
      T extends EvenementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvenementGroupByArgs['orderBy'] }
        : { orderBy?: EvenementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvenementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvenementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evenement model
   */
  readonly fields: EvenementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evenement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvenementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Evenement$userArgs<ExtArgs> = {}>(args?: Subset<T, Evenement$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Evenement model
   */
  interface EvenementFieldRefs {
    readonly id: FieldRef<"Evenement", 'String'>
    readonly type: FieldRef<"Evenement", 'String'>
    readonly message: FieldRef<"Evenement", 'String'>
    readonly userId: FieldRef<"Evenement", 'String'>
    readonly createdAt: FieldRef<"Evenement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evenement findUnique
   */
  export type EvenementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evenement
     */
    select?: EvenementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evenement
     */
    omit?: EvenementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvenementInclude<ExtArgs> | null
    /**
     * Filter, which Evenement to fetch.
     */
    where: EvenementWhereUniqueInput
  }

  /**
   * Evenement findUniqueOrThrow
   */
  export type EvenementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evenement
     */
    select?: EvenementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evenement
     */
    omit?: EvenementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvenementInclude<ExtArgs> | null
    /**
     * Filter, which Evenement to fetch.
     */
    where: EvenementWhereUniqueInput
  }

  /**
   * Evenement findFirst
   */
  export type EvenementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evenement
     */
    select?: EvenementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evenement
     */
    omit?: EvenementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvenementInclude<ExtArgs> | null
    /**
     * Filter, which Evenement to fetch.
     */
    where?: EvenementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evenements to fetch.
     */
    orderBy?: EvenementOrderByWithRelationInput | EvenementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evenements.
     */
    cursor?: EvenementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evenements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evenements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evenements.
     */
    distinct?: EvenementScalarFieldEnum | EvenementScalarFieldEnum[]
  }

  /**
   * Evenement findFirstOrThrow
   */
  export type EvenementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evenement
     */
    select?: EvenementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evenement
     */
    omit?: EvenementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvenementInclude<ExtArgs> | null
    /**
     * Filter, which Evenement to fetch.
     */
    where?: EvenementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evenements to fetch.
     */
    orderBy?: EvenementOrderByWithRelationInput | EvenementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evenements.
     */
    cursor?: EvenementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evenements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evenements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evenements.
     */
    distinct?: EvenementScalarFieldEnum | EvenementScalarFieldEnum[]
  }

  /**
   * Evenement findMany
   */
  export type EvenementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evenement
     */
    select?: EvenementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evenement
     */
    omit?: EvenementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvenementInclude<ExtArgs> | null
    /**
     * Filter, which Evenements to fetch.
     */
    where?: EvenementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evenements to fetch.
     */
    orderBy?: EvenementOrderByWithRelationInput | EvenementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evenements.
     */
    cursor?: EvenementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evenements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evenements.
     */
    skip?: number
    distinct?: EvenementScalarFieldEnum | EvenementScalarFieldEnum[]
  }

  /**
   * Evenement create
   */
  export type EvenementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evenement
     */
    select?: EvenementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evenement
     */
    omit?: EvenementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvenementInclude<ExtArgs> | null
    /**
     * The data needed to create a Evenement.
     */
    data: XOR<EvenementCreateInput, EvenementUncheckedCreateInput>
  }

  /**
   * Evenement createMany
   */
  export type EvenementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evenements.
     */
    data: EvenementCreateManyInput | EvenementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evenement createManyAndReturn
   */
  export type EvenementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evenement
     */
    select?: EvenementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evenement
     */
    omit?: EvenementOmit<ExtArgs> | null
    /**
     * The data used to create many Evenements.
     */
    data: EvenementCreateManyInput | EvenementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvenementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evenement update
   */
  export type EvenementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evenement
     */
    select?: EvenementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evenement
     */
    omit?: EvenementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvenementInclude<ExtArgs> | null
    /**
     * The data needed to update a Evenement.
     */
    data: XOR<EvenementUpdateInput, EvenementUncheckedUpdateInput>
    /**
     * Choose, which Evenement to update.
     */
    where: EvenementWhereUniqueInput
  }

  /**
   * Evenement updateMany
   */
  export type EvenementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evenements.
     */
    data: XOR<EvenementUpdateManyMutationInput, EvenementUncheckedUpdateManyInput>
    /**
     * Filter which Evenements to update
     */
    where?: EvenementWhereInput
    /**
     * Limit how many Evenements to update.
     */
    limit?: number
  }

  /**
   * Evenement updateManyAndReturn
   */
  export type EvenementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evenement
     */
    select?: EvenementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evenement
     */
    omit?: EvenementOmit<ExtArgs> | null
    /**
     * The data used to update Evenements.
     */
    data: XOR<EvenementUpdateManyMutationInput, EvenementUncheckedUpdateManyInput>
    /**
     * Filter which Evenements to update
     */
    where?: EvenementWhereInput
    /**
     * Limit how many Evenements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvenementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evenement upsert
   */
  export type EvenementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evenement
     */
    select?: EvenementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evenement
     */
    omit?: EvenementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvenementInclude<ExtArgs> | null
    /**
     * The filter to search for the Evenement to update in case it exists.
     */
    where: EvenementWhereUniqueInput
    /**
     * In case the Evenement found by the `where` argument doesn't exist, create a new Evenement with this data.
     */
    create: XOR<EvenementCreateInput, EvenementUncheckedCreateInput>
    /**
     * In case the Evenement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvenementUpdateInput, EvenementUncheckedUpdateInput>
  }

  /**
   * Evenement delete
   */
  export type EvenementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evenement
     */
    select?: EvenementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evenement
     */
    omit?: EvenementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvenementInclude<ExtArgs> | null
    /**
     * Filter which Evenement to delete.
     */
    where: EvenementWhereUniqueInput
  }

  /**
   * Evenement deleteMany
   */
  export type EvenementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evenements to delete
     */
    where?: EvenementWhereInput
    /**
     * Limit how many Evenements to delete.
     */
    limit?: number
  }

  /**
   * Evenement.user
   */
  export type Evenement$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Evenement without action
   */
  export type EvenementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evenement
     */
    select?: EvenementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evenement
     */
    omit?: EvenementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvenementInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    message: string | null
    lu: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    message: string | null
    lu: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    lu: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    lu?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    lu?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    lu?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    message: string
    lu: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    lu?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    lu?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    lu?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    lu?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "message" | "lu" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      message: string
      lu: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly lu: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstname: 'firstname',
    lastname: 'lastname',
    role: 'role',
    createdAt: 'createdAt',
    cfaId: 'cfaId',
    entrepriseId: 'entrepriseId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CFAScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type CFAScalarFieldEnum = (typeof CFAScalarFieldEnum)[keyof typeof CFAScalarFieldEnum]


  export const EntrepriseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type EntrepriseScalarFieldEnum = (typeof EntrepriseScalarFieldEnum)[keyof typeof EntrepriseScalarFieldEnum]


  export const ApprenantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dateNaissance: 'dateNaissance',
    createdAt: 'createdAt'
  };

  export type ApprenantScalarFieldEnum = (typeof ApprenantScalarFieldEnum)[keyof typeof ApprenantScalarFieldEnum]


  export const ContratScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    statut: 'statut',
    createdAt: 'createdAt'
  };

  export type ContratScalarFieldEnum = (typeof ContratScalarFieldEnum)[keyof typeof ContratScalarFieldEnum]


  export const ConventionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sujet: 'sujet',
    createdAt: 'createdAt'
  };

  export type ConventionScalarFieldEnum = (typeof ConventionScalarFieldEnum)[keyof typeof ConventionScalarFieldEnum]


  export const EvenementScalarFieldEnum: {
    id: 'id',
    type: 'type',
    message: 'message',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type EvenementScalarFieldEnum = (typeof EvenementScalarFieldEnum)[keyof typeof EvenementScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    lu: 'lu',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    cfaId?: StringNullableFilter<"User"> | string | null
    entrepriseId?: StringNullableFilter<"User"> | string | null
    cfa?: XOR<CFANullableScalarRelationFilter, CFAWhereInput> | null
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
    apprenant?: XOR<ApprenantNullableScalarRelationFilter, ApprenantWhereInput> | null
    contrats?: ContratListRelationFilter
    conventions?: ConventionListRelationFilter
    notifications?: NotificationListRelationFilter
    evenements?: EvenementListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    cfaId?: SortOrderInput | SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    cfa?: CFAOrderByWithRelationInput
    entreprise?: EntrepriseOrderByWithRelationInput
    apprenant?: ApprenantOrderByWithRelationInput
    contrats?: ContratOrderByRelationAggregateInput
    conventions?: ConventionOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    evenements?: EvenementOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    cfaId?: StringNullableFilter<"User"> | string | null
    entrepriseId?: StringNullableFilter<"User"> | string | null
    cfa?: XOR<CFANullableScalarRelationFilter, CFAWhereInput> | null
    entreprise?: XOR<EntrepriseNullableScalarRelationFilter, EntrepriseWhereInput> | null
    apprenant?: XOR<ApprenantNullableScalarRelationFilter, ApprenantWhereInput> | null
    contrats?: ContratListRelationFilter
    conventions?: ConventionListRelationFilter
    notifications?: NotificationListRelationFilter
    evenements?: EvenementListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    cfaId?: SortOrderInput | SortOrder
    entrepriseId?: SortOrderInput | SortOrder
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
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    cfaId?: StringNullableWithAggregatesFilter<"User"> | string | null
    entrepriseId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CFAWhereInput = {
    AND?: CFAWhereInput | CFAWhereInput[]
    OR?: CFAWhereInput[]
    NOT?: CFAWhereInput | CFAWhereInput[]
    id?: StringFilter<"CFA"> | string
    name?: StringFilter<"CFA"> | string
    createdAt?: DateTimeFilter<"CFA"> | Date | string
    users?: UserListRelationFilter
  }

  export type CFAOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type CFAWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CFAWhereInput | CFAWhereInput[]
    OR?: CFAWhereInput[]
    NOT?: CFAWhereInput | CFAWhereInput[]
    name?: StringFilter<"CFA"> | string
    createdAt?: DateTimeFilter<"CFA"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type CFAOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: CFACountOrderByAggregateInput
    _max?: CFAMaxOrderByAggregateInput
    _min?: CFAMinOrderByAggregateInput
  }

  export type CFAScalarWhereWithAggregatesInput = {
    AND?: CFAScalarWhereWithAggregatesInput | CFAScalarWhereWithAggregatesInput[]
    OR?: CFAScalarWhereWithAggregatesInput[]
    NOT?: CFAScalarWhereWithAggregatesInput | CFAScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CFA"> | string
    name?: StringWithAggregatesFilter<"CFA"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CFA"> | Date | string
  }

  export type EntrepriseWhereInput = {
    AND?: EntrepriseWhereInput | EntrepriseWhereInput[]
    OR?: EntrepriseWhereInput[]
    NOT?: EntrepriseWhereInput | EntrepriseWhereInput[]
    id?: StringFilter<"Entreprise"> | string
    name?: StringFilter<"Entreprise"> | string
    createdAt?: DateTimeFilter<"Entreprise"> | Date | string
    users?: UserListRelationFilter
  }

  export type EntrepriseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type EntrepriseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EntrepriseWhereInput | EntrepriseWhereInput[]
    OR?: EntrepriseWhereInput[]
    NOT?: EntrepriseWhereInput | EntrepriseWhereInput[]
    name?: StringFilter<"Entreprise"> | string
    createdAt?: DateTimeFilter<"Entreprise"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type EntrepriseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: EntrepriseCountOrderByAggregateInput
    _max?: EntrepriseMaxOrderByAggregateInput
    _min?: EntrepriseMinOrderByAggregateInput
  }

  export type EntrepriseScalarWhereWithAggregatesInput = {
    AND?: EntrepriseScalarWhereWithAggregatesInput | EntrepriseScalarWhereWithAggregatesInput[]
    OR?: EntrepriseScalarWhereWithAggregatesInput[]
    NOT?: EntrepriseScalarWhereWithAggregatesInput | EntrepriseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Entreprise"> | string
    name?: StringWithAggregatesFilter<"Entreprise"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Entreprise"> | Date | string
  }

  export type ApprenantWhereInput = {
    AND?: ApprenantWhereInput | ApprenantWhereInput[]
    OR?: ApprenantWhereInput[]
    NOT?: ApprenantWhereInput | ApprenantWhereInput[]
    id?: StringFilter<"Apprenant"> | string
    userId?: StringFilter<"Apprenant"> | string
    dateNaissance?: DateTimeNullableFilter<"Apprenant"> | Date | string | null
    createdAt?: DateTimeFilter<"Apprenant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApprenantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateNaissance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ApprenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ApprenantWhereInput | ApprenantWhereInput[]
    OR?: ApprenantWhereInput[]
    NOT?: ApprenantWhereInput | ApprenantWhereInput[]
    dateNaissance?: DateTimeNullableFilter<"Apprenant"> | Date | string | null
    createdAt?: DateTimeFilter<"Apprenant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ApprenantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateNaissance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ApprenantCountOrderByAggregateInput
    _max?: ApprenantMaxOrderByAggregateInput
    _min?: ApprenantMinOrderByAggregateInput
  }

  export type ApprenantScalarWhereWithAggregatesInput = {
    AND?: ApprenantScalarWhereWithAggregatesInput | ApprenantScalarWhereWithAggregatesInput[]
    OR?: ApprenantScalarWhereWithAggregatesInput[]
    NOT?: ApprenantScalarWhereWithAggregatesInput | ApprenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Apprenant"> | string
    userId?: StringWithAggregatesFilter<"Apprenant"> | string
    dateNaissance?: DateTimeNullableWithAggregatesFilter<"Apprenant"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Apprenant"> | Date | string
  }

  export type ContratWhereInput = {
    AND?: ContratWhereInput | ContratWhereInput[]
    OR?: ContratWhereInput[]
    NOT?: ContratWhereInput | ContratWhereInput[]
    id?: StringFilter<"Contrat"> | string
    userId?: StringFilter<"Contrat"> | string
    type?: StringFilter<"Contrat"> | string
    statut?: StringFilter<"Contrat"> | string
    createdAt?: DateTimeFilter<"Contrat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ContratOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ContratWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContratWhereInput | ContratWhereInput[]
    OR?: ContratWhereInput[]
    NOT?: ContratWhereInput | ContratWhereInput[]
    userId?: StringFilter<"Contrat"> | string
    type?: StringFilter<"Contrat"> | string
    statut?: StringFilter<"Contrat"> | string
    createdAt?: DateTimeFilter<"Contrat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ContratOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    _count?: ContratCountOrderByAggregateInput
    _max?: ContratMaxOrderByAggregateInput
    _min?: ContratMinOrderByAggregateInput
  }

  export type ContratScalarWhereWithAggregatesInput = {
    AND?: ContratScalarWhereWithAggregatesInput | ContratScalarWhereWithAggregatesInput[]
    OR?: ContratScalarWhereWithAggregatesInput[]
    NOT?: ContratScalarWhereWithAggregatesInput | ContratScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contrat"> | string
    userId?: StringWithAggregatesFilter<"Contrat"> | string
    type?: StringWithAggregatesFilter<"Contrat"> | string
    statut?: StringWithAggregatesFilter<"Contrat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contrat"> | Date | string
  }

  export type ConventionWhereInput = {
    AND?: ConventionWhereInput | ConventionWhereInput[]
    OR?: ConventionWhereInput[]
    NOT?: ConventionWhereInput | ConventionWhereInput[]
    id?: StringFilter<"Convention"> | string
    userId?: StringFilter<"Convention"> | string
    sujet?: StringFilter<"Convention"> | string
    createdAt?: DateTimeFilter<"Convention"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ConventionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sujet?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ConventionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConventionWhereInput | ConventionWhereInput[]
    OR?: ConventionWhereInput[]
    NOT?: ConventionWhereInput | ConventionWhereInput[]
    userId?: StringFilter<"Convention"> | string
    sujet?: StringFilter<"Convention"> | string
    createdAt?: DateTimeFilter<"Convention"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ConventionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sujet?: SortOrder
    createdAt?: SortOrder
    _count?: ConventionCountOrderByAggregateInput
    _max?: ConventionMaxOrderByAggregateInput
    _min?: ConventionMinOrderByAggregateInput
  }

  export type ConventionScalarWhereWithAggregatesInput = {
    AND?: ConventionScalarWhereWithAggregatesInput | ConventionScalarWhereWithAggregatesInput[]
    OR?: ConventionScalarWhereWithAggregatesInput[]
    NOT?: ConventionScalarWhereWithAggregatesInput | ConventionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Convention"> | string
    userId?: StringWithAggregatesFilter<"Convention"> | string
    sujet?: StringWithAggregatesFilter<"Convention"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Convention"> | Date | string
  }

  export type EvenementWhereInput = {
    AND?: EvenementWhereInput | EvenementWhereInput[]
    OR?: EvenementWhereInput[]
    NOT?: EvenementWhereInput | EvenementWhereInput[]
    id?: StringFilter<"Evenement"> | string
    type?: StringFilter<"Evenement"> | string
    message?: StringFilter<"Evenement"> | string
    userId?: StringNullableFilter<"Evenement"> | string | null
    createdAt?: DateTimeFilter<"Evenement"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type EvenementOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EvenementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvenementWhereInput | EvenementWhereInput[]
    OR?: EvenementWhereInput[]
    NOT?: EvenementWhereInput | EvenementWhereInput[]
    type?: StringFilter<"Evenement"> | string
    message?: StringFilter<"Evenement"> | string
    userId?: StringNullableFilter<"Evenement"> | string | null
    createdAt?: DateTimeFilter<"Evenement"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type EvenementOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EvenementCountOrderByAggregateInput
    _max?: EvenementMaxOrderByAggregateInput
    _min?: EvenementMinOrderByAggregateInput
  }

  export type EvenementScalarWhereWithAggregatesInput = {
    AND?: EvenementScalarWhereWithAggregatesInput | EvenementScalarWhereWithAggregatesInput[]
    OR?: EvenementScalarWhereWithAggregatesInput[]
    NOT?: EvenementScalarWhereWithAggregatesInput | EvenementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Evenement"> | string
    type?: StringWithAggregatesFilter<"Evenement"> | string
    message?: StringWithAggregatesFilter<"Evenement"> | string
    userId?: StringNullableWithAggregatesFilter<"Evenement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Evenement"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    lu?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    lu?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    lu?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    lu?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    lu?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfa?: CFACreateNestedOneWithoutUsersInput
    entreprise?: EntrepriseCreateNestedOneWithoutUsersInput
    apprenant?: ApprenantCreateNestedOneWithoutUserInput
    contrats?: ContratCreateNestedManyWithoutUserInput
    conventions?: ConventionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    evenements?: EvenementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfaId?: string | null
    entrepriseId?: string | null
    apprenant?: ApprenantUncheckedCreateNestedOneWithoutUserInput
    contrats?: ContratUncheckedCreateNestedManyWithoutUserInput
    conventions?: ConventionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    evenements?: EvenementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfa?: CFAUpdateOneWithoutUsersNestedInput
    entreprise?: EntrepriseUpdateOneWithoutUsersNestedInput
    apprenant?: ApprenantUpdateOneWithoutUserNestedInput
    contrats?: ContratUpdateManyWithoutUserNestedInput
    conventions?: ConventionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    evenements?: EvenementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfaId?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    apprenant?: ApprenantUncheckedUpdateOneWithoutUserNestedInput
    contrats?: ContratUncheckedUpdateManyWithoutUserNestedInput
    conventions?: ConventionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    evenements?: EvenementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfaId?: string | null
    entrepriseId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfaId?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CFACreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutCfaInput
  }

  export type CFAUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCfaInput
  }

  export type CFAUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCfaNestedInput
  }

  export type CFAUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCfaNestedInput
  }

  export type CFACreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CFAUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CFAUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type EntrepriseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprenantCreateInput = {
    id?: string
    dateNaissance?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApprenantInput
  }

  export type ApprenantUncheckedCreateInput = {
    id?: string
    userId: string
    dateNaissance?: Date | string | null
    createdAt?: Date | string
  }

  export type ApprenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApprenantNestedInput
  }

  export type ApprenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprenantCreateManyInput = {
    id?: string
    userId: string
    dateNaissance?: Date | string | null
    createdAt?: Date | string
  }

  export type ApprenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratCreateInput = {
    id?: string
    type: string
    statut: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutContratsInput
  }

  export type ContratUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    statut: string
    createdAt?: Date | string
  }

  export type ContratUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContratsNestedInput
  }

  export type ContratUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratCreateManyInput = {
    id?: string
    userId: string
    type: string
    statut: string
    createdAt?: Date | string
  }

  export type ContratUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConventionCreateInput = {
    id?: string
    sujet: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutConventionsInput
  }

  export type ConventionUncheckedCreateInput = {
    id?: string
    userId: string
    sujet: string
    createdAt?: Date | string
  }

  export type ConventionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sujet?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConventionsNestedInput
  }

  export type ConventionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sujet?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConventionCreateManyInput = {
    id?: string
    userId: string
    sujet: string
    createdAt?: Date | string
  }

  export type ConventionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sujet?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConventionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sujet?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvenementCreateInput = {
    id?: string
    type: string
    message: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutEvenementsInput
  }

  export type EvenementUncheckedCreateInput = {
    id?: string
    type: string
    message: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type EvenementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutEvenementsNestedInput
  }

  export type EvenementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvenementCreateManyInput = {
    id?: string
    type: string
    message: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type EvenementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvenementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    message: string
    lu?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    message: string
    lu?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    message: string
    lu?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CFANullableScalarRelationFilter = {
    is?: CFAWhereInput | null
    isNot?: CFAWhereInput | null
  }

  export type EntrepriseNullableScalarRelationFilter = {
    is?: EntrepriseWhereInput | null
    isNot?: EntrepriseWhereInput | null
  }

  export type ApprenantNullableScalarRelationFilter = {
    is?: ApprenantWhereInput | null
    isNot?: ApprenantWhereInput | null
  }

  export type ContratListRelationFilter = {
    every?: ContratWhereInput
    some?: ContratWhereInput
    none?: ContratWhereInput
  }

  export type ConventionListRelationFilter = {
    every?: ConventionWhereInput
    some?: ConventionWhereInput
    none?: ConventionWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type EvenementListRelationFilter = {
    every?: EvenementWhereInput
    some?: EvenementWhereInput
    none?: EvenementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContratOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConventionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvenementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    cfaId?: SortOrder
    entrepriseId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    cfaId?: SortOrder
    entrepriseId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    cfaId?: SortOrder
    entrepriseId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CFACountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CFAMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CFAMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type EntrepriseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type EntrepriseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type EntrepriseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ApprenantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateNaissance?: SortOrder
    createdAt?: SortOrder
  }

  export type ApprenantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateNaissance?: SortOrder
    createdAt?: SortOrder
  }

  export type ApprenantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateNaissance?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ContratCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
  }

  export type ContratMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
  }

  export type ContratMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
  }

  export type ConventionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sujet?: SortOrder
    createdAt?: SortOrder
  }

  export type ConventionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sujet?: SortOrder
    createdAt?: SortOrder
  }

  export type ConventionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sujet?: SortOrder
    createdAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EvenementCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EvenementMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EvenementMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    lu?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    lu?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    lu?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CFACreateNestedOneWithoutUsersInput = {
    create?: XOR<CFACreateWithoutUsersInput, CFAUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CFACreateOrConnectWithoutUsersInput
    connect?: CFAWhereUniqueInput
  }

  export type EntrepriseCreateNestedOneWithoutUsersInput = {
    create?: XOR<EntrepriseCreateWithoutUsersInput, EntrepriseUncheckedCreateWithoutUsersInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutUsersInput
    connect?: EntrepriseWhereUniqueInput
  }

  export type ApprenantCreateNestedOneWithoutUserInput = {
    create?: XOR<ApprenantCreateWithoutUserInput, ApprenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApprenantCreateOrConnectWithoutUserInput
    connect?: ApprenantWhereUniqueInput
  }

  export type ContratCreateNestedManyWithoutUserInput = {
    create?: XOR<ContratCreateWithoutUserInput, ContratUncheckedCreateWithoutUserInput> | ContratCreateWithoutUserInput[] | ContratUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContratCreateOrConnectWithoutUserInput | ContratCreateOrConnectWithoutUserInput[]
    createMany?: ContratCreateManyUserInputEnvelope
    connect?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
  }

  export type ConventionCreateNestedManyWithoutUserInput = {
    create?: XOR<ConventionCreateWithoutUserInput, ConventionUncheckedCreateWithoutUserInput> | ConventionCreateWithoutUserInput[] | ConventionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConventionCreateOrConnectWithoutUserInput | ConventionCreateOrConnectWithoutUserInput[]
    createMany?: ConventionCreateManyUserInputEnvelope
    connect?: ConventionWhereUniqueInput | ConventionWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EvenementCreateNestedManyWithoutUserInput = {
    create?: XOR<EvenementCreateWithoutUserInput, EvenementUncheckedCreateWithoutUserInput> | EvenementCreateWithoutUserInput[] | EvenementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvenementCreateOrConnectWithoutUserInput | EvenementCreateOrConnectWithoutUserInput[]
    createMany?: EvenementCreateManyUserInputEnvelope
    connect?: EvenementWhereUniqueInput | EvenementWhereUniqueInput[]
  }

  export type ApprenantUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ApprenantCreateWithoutUserInput, ApprenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApprenantCreateOrConnectWithoutUserInput
    connect?: ApprenantWhereUniqueInput
  }

  export type ContratUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContratCreateWithoutUserInput, ContratUncheckedCreateWithoutUserInput> | ContratCreateWithoutUserInput[] | ContratUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContratCreateOrConnectWithoutUserInput | ContratCreateOrConnectWithoutUserInput[]
    createMany?: ContratCreateManyUserInputEnvelope
    connect?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
  }

  export type ConventionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConventionCreateWithoutUserInput, ConventionUncheckedCreateWithoutUserInput> | ConventionCreateWithoutUserInput[] | ConventionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConventionCreateOrConnectWithoutUserInput | ConventionCreateOrConnectWithoutUserInput[]
    createMany?: ConventionCreateManyUserInputEnvelope
    connect?: ConventionWhereUniqueInput | ConventionWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EvenementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EvenementCreateWithoutUserInput, EvenementUncheckedCreateWithoutUserInput> | EvenementCreateWithoutUserInput[] | EvenementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvenementCreateOrConnectWithoutUserInput | EvenementCreateOrConnectWithoutUserInput[]
    createMany?: EvenementCreateManyUserInputEnvelope
    connect?: EvenementWhereUniqueInput | EvenementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CFAUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CFACreateWithoutUsersInput, CFAUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CFACreateOrConnectWithoutUsersInput
    upsert?: CFAUpsertWithoutUsersInput
    disconnect?: CFAWhereInput | boolean
    delete?: CFAWhereInput | boolean
    connect?: CFAWhereUniqueInput
    update?: XOR<XOR<CFAUpdateToOneWithWhereWithoutUsersInput, CFAUpdateWithoutUsersInput>, CFAUncheckedUpdateWithoutUsersInput>
  }

  export type EntrepriseUpdateOneWithoutUsersNestedInput = {
    create?: XOR<EntrepriseCreateWithoutUsersInput, EntrepriseUncheckedCreateWithoutUsersInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutUsersInput
    upsert?: EntrepriseUpsertWithoutUsersInput
    disconnect?: EntrepriseWhereInput | boolean
    delete?: EntrepriseWhereInput | boolean
    connect?: EntrepriseWhereUniqueInput
    update?: XOR<XOR<EntrepriseUpdateToOneWithWhereWithoutUsersInput, EntrepriseUpdateWithoutUsersInput>, EntrepriseUncheckedUpdateWithoutUsersInput>
  }

  export type ApprenantUpdateOneWithoutUserNestedInput = {
    create?: XOR<ApprenantCreateWithoutUserInput, ApprenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApprenantCreateOrConnectWithoutUserInput
    upsert?: ApprenantUpsertWithoutUserInput
    disconnect?: ApprenantWhereInput | boolean
    delete?: ApprenantWhereInput | boolean
    connect?: ApprenantWhereUniqueInput
    update?: XOR<XOR<ApprenantUpdateToOneWithWhereWithoutUserInput, ApprenantUpdateWithoutUserInput>, ApprenantUncheckedUpdateWithoutUserInput>
  }

  export type ContratUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContratCreateWithoutUserInput, ContratUncheckedCreateWithoutUserInput> | ContratCreateWithoutUserInput[] | ContratUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContratCreateOrConnectWithoutUserInput | ContratCreateOrConnectWithoutUserInput[]
    upsert?: ContratUpsertWithWhereUniqueWithoutUserInput | ContratUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContratCreateManyUserInputEnvelope
    set?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    disconnect?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    delete?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    connect?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    update?: ContratUpdateWithWhereUniqueWithoutUserInput | ContratUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContratUpdateManyWithWhereWithoutUserInput | ContratUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContratScalarWhereInput | ContratScalarWhereInput[]
  }

  export type ConventionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConventionCreateWithoutUserInput, ConventionUncheckedCreateWithoutUserInput> | ConventionCreateWithoutUserInput[] | ConventionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConventionCreateOrConnectWithoutUserInput | ConventionCreateOrConnectWithoutUserInput[]
    upsert?: ConventionUpsertWithWhereUniqueWithoutUserInput | ConventionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConventionCreateManyUserInputEnvelope
    set?: ConventionWhereUniqueInput | ConventionWhereUniqueInput[]
    disconnect?: ConventionWhereUniqueInput | ConventionWhereUniqueInput[]
    delete?: ConventionWhereUniqueInput | ConventionWhereUniqueInput[]
    connect?: ConventionWhereUniqueInput | ConventionWhereUniqueInput[]
    update?: ConventionUpdateWithWhereUniqueWithoutUserInput | ConventionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConventionUpdateManyWithWhereWithoutUserInput | ConventionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConventionScalarWhereInput | ConventionScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type EvenementUpdateManyWithoutUserNestedInput = {
    create?: XOR<EvenementCreateWithoutUserInput, EvenementUncheckedCreateWithoutUserInput> | EvenementCreateWithoutUserInput[] | EvenementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvenementCreateOrConnectWithoutUserInput | EvenementCreateOrConnectWithoutUserInput[]
    upsert?: EvenementUpsertWithWhereUniqueWithoutUserInput | EvenementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EvenementCreateManyUserInputEnvelope
    set?: EvenementWhereUniqueInput | EvenementWhereUniqueInput[]
    disconnect?: EvenementWhereUniqueInput | EvenementWhereUniqueInput[]
    delete?: EvenementWhereUniqueInput | EvenementWhereUniqueInput[]
    connect?: EvenementWhereUniqueInput | EvenementWhereUniqueInput[]
    update?: EvenementUpdateWithWhereUniqueWithoutUserInput | EvenementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EvenementUpdateManyWithWhereWithoutUserInput | EvenementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EvenementScalarWhereInput | EvenementScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ApprenantUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ApprenantCreateWithoutUserInput, ApprenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApprenantCreateOrConnectWithoutUserInput
    upsert?: ApprenantUpsertWithoutUserInput
    disconnect?: ApprenantWhereInput | boolean
    delete?: ApprenantWhereInput | boolean
    connect?: ApprenantWhereUniqueInput
    update?: XOR<XOR<ApprenantUpdateToOneWithWhereWithoutUserInput, ApprenantUpdateWithoutUserInput>, ApprenantUncheckedUpdateWithoutUserInput>
  }

  export type ContratUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContratCreateWithoutUserInput, ContratUncheckedCreateWithoutUserInput> | ContratCreateWithoutUserInput[] | ContratUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContratCreateOrConnectWithoutUserInput | ContratCreateOrConnectWithoutUserInput[]
    upsert?: ContratUpsertWithWhereUniqueWithoutUserInput | ContratUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContratCreateManyUserInputEnvelope
    set?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    disconnect?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    delete?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    connect?: ContratWhereUniqueInput | ContratWhereUniqueInput[]
    update?: ContratUpdateWithWhereUniqueWithoutUserInput | ContratUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContratUpdateManyWithWhereWithoutUserInput | ContratUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContratScalarWhereInput | ContratScalarWhereInput[]
  }

  export type ConventionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConventionCreateWithoutUserInput, ConventionUncheckedCreateWithoutUserInput> | ConventionCreateWithoutUserInput[] | ConventionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConventionCreateOrConnectWithoutUserInput | ConventionCreateOrConnectWithoutUserInput[]
    upsert?: ConventionUpsertWithWhereUniqueWithoutUserInput | ConventionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConventionCreateManyUserInputEnvelope
    set?: ConventionWhereUniqueInput | ConventionWhereUniqueInput[]
    disconnect?: ConventionWhereUniqueInput | ConventionWhereUniqueInput[]
    delete?: ConventionWhereUniqueInput | ConventionWhereUniqueInput[]
    connect?: ConventionWhereUniqueInput | ConventionWhereUniqueInput[]
    update?: ConventionUpdateWithWhereUniqueWithoutUserInput | ConventionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConventionUpdateManyWithWhereWithoutUserInput | ConventionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConventionScalarWhereInput | ConventionScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type EvenementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EvenementCreateWithoutUserInput, EvenementUncheckedCreateWithoutUserInput> | EvenementCreateWithoutUserInput[] | EvenementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvenementCreateOrConnectWithoutUserInput | EvenementCreateOrConnectWithoutUserInput[]
    upsert?: EvenementUpsertWithWhereUniqueWithoutUserInput | EvenementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EvenementCreateManyUserInputEnvelope
    set?: EvenementWhereUniqueInput | EvenementWhereUniqueInput[]
    disconnect?: EvenementWhereUniqueInput | EvenementWhereUniqueInput[]
    delete?: EvenementWhereUniqueInput | EvenementWhereUniqueInput[]
    connect?: EvenementWhereUniqueInput | EvenementWhereUniqueInput[]
    update?: EvenementUpdateWithWhereUniqueWithoutUserInput | EvenementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EvenementUpdateManyWithWhereWithoutUserInput | EvenementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EvenementScalarWhereInput | EvenementScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutCfaInput = {
    create?: XOR<UserCreateWithoutCfaInput, UserUncheckedCreateWithoutCfaInput> | UserCreateWithoutCfaInput[] | UserUncheckedCreateWithoutCfaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCfaInput | UserCreateOrConnectWithoutCfaInput[]
    createMany?: UserCreateManyCfaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCfaInput = {
    create?: XOR<UserCreateWithoutCfaInput, UserUncheckedCreateWithoutCfaInput> | UserCreateWithoutCfaInput[] | UserUncheckedCreateWithoutCfaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCfaInput | UserCreateOrConnectWithoutCfaInput[]
    createMany?: UserCreateManyCfaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutCfaNestedInput = {
    create?: XOR<UserCreateWithoutCfaInput, UserUncheckedCreateWithoutCfaInput> | UserCreateWithoutCfaInput[] | UserUncheckedCreateWithoutCfaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCfaInput | UserCreateOrConnectWithoutCfaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCfaInput | UserUpsertWithWhereUniqueWithoutCfaInput[]
    createMany?: UserCreateManyCfaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCfaInput | UserUpdateWithWhereUniqueWithoutCfaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCfaInput | UserUpdateManyWithWhereWithoutCfaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCfaNestedInput = {
    create?: XOR<UserCreateWithoutCfaInput, UserUncheckedCreateWithoutCfaInput> | UserCreateWithoutCfaInput[] | UserUncheckedCreateWithoutCfaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCfaInput | UserCreateOrConnectWithoutCfaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCfaInput | UserUpsertWithWhereUniqueWithoutCfaInput[]
    createMany?: UserCreateManyCfaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCfaInput | UserUpdateWithWhereUniqueWithoutCfaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCfaInput | UserUpdateManyWithWhereWithoutCfaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<UserCreateWithoutEntrepriseInput, UserUncheckedCreateWithoutEntrepriseInput> | UserCreateWithoutEntrepriseInput[] | UserUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEntrepriseInput | UserCreateOrConnectWithoutEntrepriseInput[]
    createMany?: UserCreateManyEntrepriseInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<UserCreateWithoutEntrepriseInput, UserUncheckedCreateWithoutEntrepriseInput> | UserCreateWithoutEntrepriseInput[] | UserUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEntrepriseInput | UserCreateOrConnectWithoutEntrepriseInput[]
    createMany?: UserCreateManyEntrepriseInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<UserCreateWithoutEntrepriseInput, UserUncheckedCreateWithoutEntrepriseInput> | UserCreateWithoutEntrepriseInput[] | UserUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEntrepriseInput | UserCreateOrConnectWithoutEntrepriseInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEntrepriseInput | UserUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: UserCreateManyEntrepriseInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEntrepriseInput | UserUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEntrepriseInput | UserUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<UserCreateWithoutEntrepriseInput, UserUncheckedCreateWithoutEntrepriseInput> | UserCreateWithoutEntrepriseInput[] | UserUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEntrepriseInput | UserCreateOrConnectWithoutEntrepriseInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEntrepriseInput | UserUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: UserCreateManyEntrepriseInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEntrepriseInput | UserUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEntrepriseInput | UserUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApprenantInput = {
    create?: XOR<UserCreateWithoutApprenantInput, UserUncheckedCreateWithoutApprenantInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprenantInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutApprenantNestedInput = {
    create?: XOR<UserCreateWithoutApprenantInput, UserUncheckedCreateWithoutApprenantInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprenantInput
    upsert?: UserUpsertWithoutApprenantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprenantInput, UserUpdateWithoutApprenantInput>, UserUncheckedUpdateWithoutApprenantInput>
  }

  export type UserCreateNestedOneWithoutContratsInput = {
    create?: XOR<UserCreateWithoutContratsInput, UserUncheckedCreateWithoutContratsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContratsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutContratsNestedInput = {
    create?: XOR<UserCreateWithoutContratsInput, UserUncheckedCreateWithoutContratsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContratsInput
    upsert?: UserUpsertWithoutContratsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContratsInput, UserUpdateWithoutContratsInput>, UserUncheckedUpdateWithoutContratsInput>
  }

  export type UserCreateNestedOneWithoutConventionsInput = {
    create?: XOR<UserCreateWithoutConventionsInput, UserUncheckedCreateWithoutConventionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConventionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutConventionsNestedInput = {
    create?: XOR<UserCreateWithoutConventionsInput, UserUncheckedCreateWithoutConventionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConventionsInput
    upsert?: UserUpsertWithoutConventionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConventionsInput, UserUpdateWithoutConventionsInput>, UserUncheckedUpdateWithoutConventionsInput>
  }

  export type UserCreateNestedOneWithoutEvenementsInput = {
    create?: XOR<UserCreateWithoutEvenementsInput, UserUncheckedCreateWithoutEvenementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvenementsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutEvenementsNestedInput = {
    create?: XOR<UserCreateWithoutEvenementsInput, UserUncheckedCreateWithoutEvenementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvenementsInput
    upsert?: UserUpsertWithoutEvenementsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEvenementsInput, UserUpdateWithoutEvenementsInput>, UserUncheckedUpdateWithoutEvenementsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type CFACreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CFAUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CFACreateOrConnectWithoutUsersInput = {
    where: CFAWhereUniqueInput
    create: XOR<CFACreateWithoutUsersInput, CFAUncheckedCreateWithoutUsersInput>
  }

  export type EntrepriseCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type EntrepriseUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type EntrepriseCreateOrConnectWithoutUsersInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutUsersInput, EntrepriseUncheckedCreateWithoutUsersInput>
  }

  export type ApprenantCreateWithoutUserInput = {
    id?: string
    dateNaissance?: Date | string | null
    createdAt?: Date | string
  }

  export type ApprenantUncheckedCreateWithoutUserInput = {
    id?: string
    dateNaissance?: Date | string | null
    createdAt?: Date | string
  }

  export type ApprenantCreateOrConnectWithoutUserInput = {
    where: ApprenantWhereUniqueInput
    create: XOR<ApprenantCreateWithoutUserInput, ApprenantUncheckedCreateWithoutUserInput>
  }

  export type ContratCreateWithoutUserInput = {
    id?: string
    type: string
    statut: string
    createdAt?: Date | string
  }

  export type ContratUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    statut: string
    createdAt?: Date | string
  }

  export type ContratCreateOrConnectWithoutUserInput = {
    where: ContratWhereUniqueInput
    create: XOR<ContratCreateWithoutUserInput, ContratUncheckedCreateWithoutUserInput>
  }

  export type ContratCreateManyUserInputEnvelope = {
    data: ContratCreateManyUserInput | ContratCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConventionCreateWithoutUserInput = {
    id?: string
    sujet: string
    createdAt?: Date | string
  }

  export type ConventionUncheckedCreateWithoutUserInput = {
    id?: string
    sujet: string
    createdAt?: Date | string
  }

  export type ConventionCreateOrConnectWithoutUserInput = {
    where: ConventionWhereUniqueInput
    create: XOR<ConventionCreateWithoutUserInput, ConventionUncheckedCreateWithoutUserInput>
  }

  export type ConventionCreateManyUserInputEnvelope = {
    data: ConventionCreateManyUserInput | ConventionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    message: string
    lu?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    message: string
    lu?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EvenementCreateWithoutUserInput = {
    id?: string
    type: string
    message: string
    createdAt?: Date | string
  }

  export type EvenementUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    message: string
    createdAt?: Date | string
  }

  export type EvenementCreateOrConnectWithoutUserInput = {
    where: EvenementWhereUniqueInput
    create: XOR<EvenementCreateWithoutUserInput, EvenementUncheckedCreateWithoutUserInput>
  }

  export type EvenementCreateManyUserInputEnvelope = {
    data: EvenementCreateManyUserInput | EvenementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CFAUpsertWithoutUsersInput = {
    update: XOR<CFAUpdateWithoutUsersInput, CFAUncheckedUpdateWithoutUsersInput>
    create: XOR<CFACreateWithoutUsersInput, CFAUncheckedCreateWithoutUsersInput>
    where?: CFAWhereInput
  }

  export type CFAUpdateToOneWithWhereWithoutUsersInput = {
    where?: CFAWhereInput
    data: XOR<CFAUpdateWithoutUsersInput, CFAUncheckedUpdateWithoutUsersInput>
  }

  export type CFAUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CFAUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseUpsertWithoutUsersInput = {
    update: XOR<EntrepriseUpdateWithoutUsersInput, EntrepriseUncheckedUpdateWithoutUsersInput>
    create: XOR<EntrepriseCreateWithoutUsersInput, EntrepriseUncheckedCreateWithoutUsersInput>
    where?: EntrepriseWhereInput
  }

  export type EntrepriseUpdateToOneWithWhereWithoutUsersInput = {
    where?: EntrepriseWhereInput
    data: XOR<EntrepriseUpdateWithoutUsersInput, EntrepriseUncheckedUpdateWithoutUsersInput>
  }

  export type EntrepriseUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprenantUpsertWithoutUserInput = {
    update: XOR<ApprenantUpdateWithoutUserInput, ApprenantUncheckedUpdateWithoutUserInput>
    create: XOR<ApprenantCreateWithoutUserInput, ApprenantUncheckedCreateWithoutUserInput>
    where?: ApprenantWhereInput
  }

  export type ApprenantUpdateToOneWithWhereWithoutUserInput = {
    where?: ApprenantWhereInput
    data: XOR<ApprenantUpdateWithoutUserInput, ApprenantUncheckedUpdateWithoutUserInput>
  }

  export type ApprenantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprenantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratUpsertWithWhereUniqueWithoutUserInput = {
    where: ContratWhereUniqueInput
    update: XOR<ContratUpdateWithoutUserInput, ContratUncheckedUpdateWithoutUserInput>
    create: XOR<ContratCreateWithoutUserInput, ContratUncheckedCreateWithoutUserInput>
  }

  export type ContratUpdateWithWhereUniqueWithoutUserInput = {
    where: ContratWhereUniqueInput
    data: XOR<ContratUpdateWithoutUserInput, ContratUncheckedUpdateWithoutUserInput>
  }

  export type ContratUpdateManyWithWhereWithoutUserInput = {
    where: ContratScalarWhereInput
    data: XOR<ContratUpdateManyMutationInput, ContratUncheckedUpdateManyWithoutUserInput>
  }

  export type ContratScalarWhereInput = {
    AND?: ContratScalarWhereInput | ContratScalarWhereInput[]
    OR?: ContratScalarWhereInput[]
    NOT?: ContratScalarWhereInput | ContratScalarWhereInput[]
    id?: StringFilter<"Contrat"> | string
    userId?: StringFilter<"Contrat"> | string
    type?: StringFilter<"Contrat"> | string
    statut?: StringFilter<"Contrat"> | string
    createdAt?: DateTimeFilter<"Contrat"> | Date | string
  }

  export type ConventionUpsertWithWhereUniqueWithoutUserInput = {
    where: ConventionWhereUniqueInput
    update: XOR<ConventionUpdateWithoutUserInput, ConventionUncheckedUpdateWithoutUserInput>
    create: XOR<ConventionCreateWithoutUserInput, ConventionUncheckedCreateWithoutUserInput>
  }

  export type ConventionUpdateWithWhereUniqueWithoutUserInput = {
    where: ConventionWhereUniqueInput
    data: XOR<ConventionUpdateWithoutUserInput, ConventionUncheckedUpdateWithoutUserInput>
  }

  export type ConventionUpdateManyWithWhereWithoutUserInput = {
    where: ConventionScalarWhereInput
    data: XOR<ConventionUpdateManyMutationInput, ConventionUncheckedUpdateManyWithoutUserInput>
  }

  export type ConventionScalarWhereInput = {
    AND?: ConventionScalarWhereInput | ConventionScalarWhereInput[]
    OR?: ConventionScalarWhereInput[]
    NOT?: ConventionScalarWhereInput | ConventionScalarWhereInput[]
    id?: StringFilter<"Convention"> | string
    userId?: StringFilter<"Convention"> | string
    sujet?: StringFilter<"Convention"> | string
    createdAt?: DateTimeFilter<"Convention"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    lu?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type EvenementUpsertWithWhereUniqueWithoutUserInput = {
    where: EvenementWhereUniqueInput
    update: XOR<EvenementUpdateWithoutUserInput, EvenementUncheckedUpdateWithoutUserInput>
    create: XOR<EvenementCreateWithoutUserInput, EvenementUncheckedCreateWithoutUserInput>
  }

  export type EvenementUpdateWithWhereUniqueWithoutUserInput = {
    where: EvenementWhereUniqueInput
    data: XOR<EvenementUpdateWithoutUserInput, EvenementUncheckedUpdateWithoutUserInput>
  }

  export type EvenementUpdateManyWithWhereWithoutUserInput = {
    where: EvenementScalarWhereInput
    data: XOR<EvenementUpdateManyMutationInput, EvenementUncheckedUpdateManyWithoutUserInput>
  }

  export type EvenementScalarWhereInput = {
    AND?: EvenementScalarWhereInput | EvenementScalarWhereInput[]
    OR?: EvenementScalarWhereInput[]
    NOT?: EvenementScalarWhereInput | EvenementScalarWhereInput[]
    id?: StringFilter<"Evenement"> | string
    type?: StringFilter<"Evenement"> | string
    message?: StringFilter<"Evenement"> | string
    userId?: StringNullableFilter<"Evenement"> | string | null
    createdAt?: DateTimeFilter<"Evenement"> | Date | string
  }

  export type UserCreateWithoutCfaInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    entreprise?: EntrepriseCreateNestedOneWithoutUsersInput
    apprenant?: ApprenantCreateNestedOneWithoutUserInput
    contrats?: ContratCreateNestedManyWithoutUserInput
    conventions?: ConventionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    evenements?: EvenementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCfaInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    entrepriseId?: string | null
    apprenant?: ApprenantUncheckedCreateNestedOneWithoutUserInput
    contrats?: ContratUncheckedCreateNestedManyWithoutUserInput
    conventions?: ConventionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    evenements?: EvenementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCfaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCfaInput, UserUncheckedCreateWithoutCfaInput>
  }

  export type UserCreateManyCfaInputEnvelope = {
    data: UserCreateManyCfaInput | UserCreateManyCfaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCfaInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCfaInput, UserUncheckedUpdateWithoutCfaInput>
    create: XOR<UserCreateWithoutCfaInput, UserUncheckedCreateWithoutCfaInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCfaInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCfaInput, UserUncheckedUpdateWithoutCfaInput>
  }

  export type UserUpdateManyWithWhereWithoutCfaInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCfaInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    cfaId?: StringNullableFilter<"User"> | string | null
    entrepriseId?: StringNullableFilter<"User"> | string | null
  }

  export type UserCreateWithoutEntrepriseInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfa?: CFACreateNestedOneWithoutUsersInput
    apprenant?: ApprenantCreateNestedOneWithoutUserInput
    contrats?: ContratCreateNestedManyWithoutUserInput
    conventions?: ConventionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    evenements?: EvenementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEntrepriseInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfaId?: string | null
    apprenant?: ApprenantUncheckedCreateNestedOneWithoutUserInput
    contrats?: ContratUncheckedCreateNestedManyWithoutUserInput
    conventions?: ConventionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    evenements?: EvenementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEntrepriseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEntrepriseInput, UserUncheckedCreateWithoutEntrepriseInput>
  }

  export type UserCreateManyEntrepriseInputEnvelope = {
    data: UserCreateManyEntrepriseInput | UserCreateManyEntrepriseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutEntrepriseInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutEntrepriseInput, UserUncheckedUpdateWithoutEntrepriseInput>
    create: XOR<UserCreateWithoutEntrepriseInput, UserUncheckedCreateWithoutEntrepriseInput>
  }

  export type UserUpdateWithWhereUniqueWithoutEntrepriseInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutEntrepriseInput, UserUncheckedUpdateWithoutEntrepriseInput>
  }

  export type UserUpdateManyWithWhereWithoutEntrepriseInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutEntrepriseInput>
  }

  export type UserCreateWithoutApprenantInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfa?: CFACreateNestedOneWithoutUsersInput
    entreprise?: EntrepriseCreateNestedOneWithoutUsersInput
    contrats?: ContratCreateNestedManyWithoutUserInput
    conventions?: ConventionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    evenements?: EvenementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApprenantInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfaId?: string | null
    entrepriseId?: string | null
    contrats?: ContratUncheckedCreateNestedManyWithoutUserInput
    conventions?: ConventionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    evenements?: EvenementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprenantInput, UserUncheckedCreateWithoutApprenantInput>
  }

  export type UserUpsertWithoutApprenantInput = {
    update: XOR<UserUpdateWithoutApprenantInput, UserUncheckedUpdateWithoutApprenantInput>
    create: XOR<UserCreateWithoutApprenantInput, UserUncheckedCreateWithoutApprenantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprenantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprenantInput, UserUncheckedUpdateWithoutApprenantInput>
  }

  export type UserUpdateWithoutApprenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfa?: CFAUpdateOneWithoutUsersNestedInput
    entreprise?: EntrepriseUpdateOneWithoutUsersNestedInput
    contrats?: ContratUpdateManyWithoutUserNestedInput
    conventions?: ConventionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    evenements?: EvenementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApprenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfaId?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    contrats?: ContratUncheckedUpdateManyWithoutUserNestedInput
    conventions?: ConventionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    evenements?: EvenementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutContratsInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfa?: CFACreateNestedOneWithoutUsersInput
    entreprise?: EntrepriseCreateNestedOneWithoutUsersInput
    apprenant?: ApprenantCreateNestedOneWithoutUserInput
    conventions?: ConventionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    evenements?: EvenementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContratsInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfaId?: string | null
    entrepriseId?: string | null
    apprenant?: ApprenantUncheckedCreateNestedOneWithoutUserInput
    conventions?: ConventionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    evenements?: EvenementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContratsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContratsInput, UserUncheckedCreateWithoutContratsInput>
  }

  export type UserUpsertWithoutContratsInput = {
    update: XOR<UserUpdateWithoutContratsInput, UserUncheckedUpdateWithoutContratsInput>
    create: XOR<UserCreateWithoutContratsInput, UserUncheckedCreateWithoutContratsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContratsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContratsInput, UserUncheckedUpdateWithoutContratsInput>
  }

  export type UserUpdateWithoutContratsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfa?: CFAUpdateOneWithoutUsersNestedInput
    entreprise?: EntrepriseUpdateOneWithoutUsersNestedInput
    apprenant?: ApprenantUpdateOneWithoutUserNestedInput
    conventions?: ConventionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    evenements?: EvenementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContratsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfaId?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    apprenant?: ApprenantUncheckedUpdateOneWithoutUserNestedInput
    conventions?: ConventionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    evenements?: EvenementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutConventionsInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfa?: CFACreateNestedOneWithoutUsersInput
    entreprise?: EntrepriseCreateNestedOneWithoutUsersInput
    apprenant?: ApprenantCreateNestedOneWithoutUserInput
    contrats?: ContratCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    evenements?: EvenementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConventionsInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfaId?: string | null
    entrepriseId?: string | null
    apprenant?: ApprenantUncheckedCreateNestedOneWithoutUserInput
    contrats?: ContratUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    evenements?: EvenementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConventionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConventionsInput, UserUncheckedCreateWithoutConventionsInput>
  }

  export type UserUpsertWithoutConventionsInput = {
    update: XOR<UserUpdateWithoutConventionsInput, UserUncheckedUpdateWithoutConventionsInput>
    create: XOR<UserCreateWithoutConventionsInput, UserUncheckedCreateWithoutConventionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConventionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConventionsInput, UserUncheckedUpdateWithoutConventionsInput>
  }

  export type UserUpdateWithoutConventionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfa?: CFAUpdateOneWithoutUsersNestedInput
    entreprise?: EntrepriseUpdateOneWithoutUsersNestedInput
    apprenant?: ApprenantUpdateOneWithoutUserNestedInput
    contrats?: ContratUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    evenements?: EvenementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConventionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfaId?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    apprenant?: ApprenantUncheckedUpdateOneWithoutUserNestedInput
    contrats?: ContratUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    evenements?: EvenementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEvenementsInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfa?: CFACreateNestedOneWithoutUsersInput
    entreprise?: EntrepriseCreateNestedOneWithoutUsersInput
    apprenant?: ApprenantCreateNestedOneWithoutUserInput
    contrats?: ContratCreateNestedManyWithoutUserInput
    conventions?: ConventionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEvenementsInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfaId?: string | null
    entrepriseId?: string | null
    apprenant?: ApprenantUncheckedCreateNestedOneWithoutUserInput
    contrats?: ContratUncheckedCreateNestedManyWithoutUserInput
    conventions?: ConventionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEvenementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEvenementsInput, UserUncheckedCreateWithoutEvenementsInput>
  }

  export type UserUpsertWithoutEvenementsInput = {
    update: XOR<UserUpdateWithoutEvenementsInput, UserUncheckedUpdateWithoutEvenementsInput>
    create: XOR<UserCreateWithoutEvenementsInput, UserUncheckedCreateWithoutEvenementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEvenementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEvenementsInput, UserUncheckedUpdateWithoutEvenementsInput>
  }

  export type UserUpdateWithoutEvenementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfa?: CFAUpdateOneWithoutUsersNestedInput
    entreprise?: EntrepriseUpdateOneWithoutUsersNestedInput
    apprenant?: ApprenantUpdateOneWithoutUserNestedInput
    contrats?: ContratUpdateManyWithoutUserNestedInput
    conventions?: ConventionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEvenementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfaId?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    apprenant?: ApprenantUncheckedUpdateOneWithoutUserNestedInput
    contrats?: ContratUncheckedUpdateManyWithoutUserNestedInput
    conventions?: ConventionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfa?: CFACreateNestedOneWithoutUsersInput
    entreprise?: EntrepriseCreateNestedOneWithoutUsersInput
    apprenant?: ApprenantCreateNestedOneWithoutUserInput
    contrats?: ContratCreateNestedManyWithoutUserInput
    conventions?: ConventionCreateNestedManyWithoutUserInput
    evenements?: EvenementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfaId?: string | null
    entrepriseId?: string | null
    apprenant?: ApprenantUncheckedCreateNestedOneWithoutUserInput
    contrats?: ContratUncheckedCreateNestedManyWithoutUserInput
    conventions?: ConventionUncheckedCreateNestedManyWithoutUserInput
    evenements?: EvenementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfa?: CFAUpdateOneWithoutUsersNestedInput
    entreprise?: EntrepriseUpdateOneWithoutUsersNestedInput
    apprenant?: ApprenantUpdateOneWithoutUserNestedInput
    contrats?: ContratUpdateManyWithoutUserNestedInput
    conventions?: ConventionUpdateManyWithoutUserNestedInput
    evenements?: EvenementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfaId?: NullableStringFieldUpdateOperationsInput | string | null
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    apprenant?: ApprenantUncheckedUpdateOneWithoutUserNestedInput
    contrats?: ContratUncheckedUpdateManyWithoutUserNestedInput
    conventions?: ConventionUncheckedUpdateManyWithoutUserNestedInput
    evenements?: EvenementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContratCreateManyUserInput = {
    id?: string
    type: string
    statut: string
    createdAt?: Date | string
  }

  export type ConventionCreateManyUserInput = {
    id?: string
    sujet: string
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    message: string
    lu?: boolean
    createdAt?: Date | string
  }

  export type EvenementCreateManyUserInput = {
    id?: string
    type: string
    message: string
    createdAt?: Date | string
  }

  export type ContratUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    statut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConventionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sujet?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConventionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sujet?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConventionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sujet?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvenementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvenementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvenementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyCfaInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    entrepriseId?: string | null
  }

  export type UserUpdateWithoutCfaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneWithoutUsersNestedInput
    apprenant?: ApprenantUpdateOneWithoutUserNestedInput
    contrats?: ContratUpdateManyWithoutUserNestedInput
    conventions?: ConventionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    evenements?: EvenementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCfaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
    apprenant?: ApprenantUncheckedUpdateOneWithoutUserNestedInput
    contrats?: ContratUncheckedUpdateManyWithoutUserNestedInput
    conventions?: ConventionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    evenements?: EvenementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCfaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entrepriseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyEntrepriseInput = {
    id?: string
    email: string
    firstname: string
    lastname: string
    role?: $Enums.Role
    createdAt?: Date | string
    cfaId?: string | null
  }

  export type UserUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfa?: CFAUpdateOneWithoutUsersNestedInput
    apprenant?: ApprenantUpdateOneWithoutUserNestedInput
    contrats?: ContratUpdateManyWithoutUserNestedInput
    conventions?: ConventionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    evenements?: EvenementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfaId?: NullableStringFieldUpdateOperationsInput | string | null
    apprenant?: ApprenantUncheckedUpdateOneWithoutUserNestedInput
    contrats?: ContratUncheckedUpdateManyWithoutUserNestedInput
    conventions?: ConventionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    evenements?: EvenementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutEntrepriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cfaId?: NullableStringFieldUpdateOperationsInput | string | null
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