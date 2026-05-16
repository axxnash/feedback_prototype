
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model FoodListing
 * 
 */
export type FoodListing = $Result.DefaultSelection<Prisma.$FoodListingPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  VENDOR: 'VENDOR',
  NGO: 'NGO',
  ADMIN: 'ADMIN',
  INDIVIDUAL: 'INDIVIDUAL'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ApprovalStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus]


export const ListingStatus: {
  AVAILABLE: 'AVAILABLE',
  CLAIMED: 'CLAIMED',
  PICKED_UP: 'PICKED_UP',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus]


export const ListingType: {
  DONATION: 'DONATION',
  DISCOUNTED: 'DISCOUNTED'
};

export type ListingType = (typeof ListingType)[keyof typeof ListingType]


export const FoodCategory: {
  FRUIT: 'FRUIT',
  VEGETABLE: 'VEGETABLE',
  DRINK: 'DRINK',
  BAKERY: 'BAKERY',
  MEAL: 'MEAL',
  SNACK: 'SNACK',
  DAIRY: 'DAIRY',
  OTHER: 'OTHER'
};

export type FoodCategory = (typeof FoodCategory)[keyof typeof FoodCategory]


export const TransactionStatus: {
  CLAIMED: 'CLAIMED',
  PICKED_UP: 'PICKED_UP',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const PaymentStatus: {
  NOT_REQUIRED: 'NOT_REQUIRED',
  PAID_MOCK: 'PAID_MOCK'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ApprovalStatus = $Enums.ApprovalStatus

export const ApprovalStatus: typeof $Enums.ApprovalStatus

export type ListingStatus = $Enums.ListingStatus

export const ListingStatus: typeof $Enums.ListingStatus

export type ListingType = $Enums.ListingType

export const ListingType: typeof $Enums.ListingType

export type FoodCategory = $Enums.FoodCategory

export const FoodCategory: typeof $Enums.FoodCategory

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.foodListing`: Exposes CRUD operations for the **FoodListing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodListings
    * const foodListings = await prisma.foodListing.findMany()
    * ```
    */
  get foodListing(): Prisma.FoodListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    FoodListing: 'FoodListing',
    Transaction: 'Transaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "foodListing" | "transaction"
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
      FoodListing: {
        payload: Prisma.$FoodListingPayload<ExtArgs>
        fields: Prisma.FoodListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodListingPayload>
          }
          findFirst: {
            args: Prisma.FoodListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodListingPayload>
          }
          findMany: {
            args: Prisma.FoodListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodListingPayload>[]
          }
          create: {
            args: Prisma.FoodListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodListingPayload>
          }
          createMany: {
            args: Prisma.FoodListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodListingPayload>[]
          }
          delete: {
            args: Prisma.FoodListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodListingPayload>
          }
          update: {
            args: Prisma.FoodListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodListingPayload>
          }
          deleteMany: {
            args: Prisma.FoodListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodListingPayload>[]
          }
          upsert: {
            args: Prisma.FoodListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodListingPayload>
          }
          aggregate: {
            args: Prisma.FoodListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodListing>
          }
          groupBy: {
            args: Prisma.FoodListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodListingCountArgs<ExtArgs>
            result: $Utils.Optional<FoodListingCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    foodListing?: FoodListingOmit
    transaction?: TransactionOmit
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
    listings: number
    claimedListings: number
    vendorTransactions: number
    recipientTransactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | UserCountOutputTypeCountListingsArgs
    claimedListings?: boolean | UserCountOutputTypeCountClaimedListingsArgs
    vendorTransactions?: boolean | UserCountOutputTypeCountVendorTransactionsArgs
    recipientTransactions?: boolean | UserCountOutputTypeCountRecipientTransactionsArgs
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
  export type UserCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodListingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClaimedListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodListingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVendorTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecipientTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    approvalStatus: $Enums.ApprovalStatus | null
    organizationName: string | null
    phoneNumber: string | null
    documentUrl: string | null
    documentPublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    approvalStatus: $Enums.ApprovalStatus | null
    organizationName: string | null
    phoneNumber: string | null
    documentUrl: string | null
    documentPublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    approvalStatus: number
    organizationName: number
    phoneNumber: number
    documentUrl: number
    documentPublicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    approvalStatus?: true
    organizationName?: true
    phoneNumber?: true
    documentUrl?: true
    documentPublicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    approvalStatus?: true
    organizationName?: true
    phoneNumber?: true
    documentUrl?: true
    documentPublicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    approvalStatus?: true
    organizationName?: true
    phoneNumber?: true
    documentUrl?: true
    documentPublicId?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    approvalStatus: $Enums.ApprovalStatus
    organizationName: string | null
    phoneNumber: string | null
    documentUrl: string | null
    documentPublicId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    approvalStatus?: boolean
    organizationName?: boolean
    phoneNumber?: boolean
    documentUrl?: boolean
    documentPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listings?: boolean | User$listingsArgs<ExtArgs>
    claimedListings?: boolean | User$claimedListingsArgs<ExtArgs>
    vendorTransactions?: boolean | User$vendorTransactionsArgs<ExtArgs>
    recipientTransactions?: boolean | User$recipientTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    approvalStatus?: boolean
    organizationName?: boolean
    phoneNumber?: boolean
    documentUrl?: boolean
    documentPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    approvalStatus?: boolean
    organizationName?: boolean
    phoneNumber?: boolean
    documentUrl?: boolean
    documentPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    approvalStatus?: boolean
    organizationName?: boolean
    phoneNumber?: boolean
    documentUrl?: boolean
    documentPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "approvalStatus" | "organizationName" | "phoneNumber" | "documentUrl" | "documentPublicId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | User$listingsArgs<ExtArgs>
    claimedListings?: boolean | User$claimedListingsArgs<ExtArgs>
    vendorTransactions?: boolean | User$vendorTransactionsArgs<ExtArgs>
    recipientTransactions?: boolean | User$recipientTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      listings: Prisma.$FoodListingPayload<ExtArgs>[]
      claimedListings: Prisma.$FoodListingPayload<ExtArgs>[]
      vendorTransactions: Prisma.$TransactionPayload<ExtArgs>[]
      recipientTransactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      approvalStatus: $Enums.ApprovalStatus
      organizationName: string | null
      phoneNumber: string | null
      documentUrl: string | null
      documentPublicId: string | null
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
    listings<T extends User$listingsArgs<ExtArgs> = {}>(args?: Subset<T, User$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    claimedListings<T extends User$claimedListingsArgs<ExtArgs> = {}>(args?: Subset<T, User$claimedListingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vendorTransactions<T extends User$vendorTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$vendorTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipientTransactions<T extends User$recipientTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$recipientTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly approvalStatus: FieldRef<"User", 'ApprovalStatus'>
    readonly organizationName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly documentUrl: FieldRef<"User", 'String'>
    readonly documentPublicId: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.listings
   */
  export type User$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodListing
     */
    select?: FoodListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodListing
     */
    omit?: FoodListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodListingInclude<ExtArgs> | null
    where?: FoodListingWhereInput
    orderBy?: FoodListingOrderByWithRelationInput | FoodListingOrderByWithRelationInput[]
    cursor?: FoodListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodListingScalarFieldEnum | FoodListingScalarFieldEnum[]
  }

  /**
   * User.claimedListings
   */
  export type User$claimedListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodListing
     */
    select?: FoodListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodListing
     */
    omit?: FoodListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodListingInclude<ExtArgs> | null
    where?: FoodListingWhereInput
    orderBy?: FoodListingOrderByWithRelationInput | FoodListingOrderByWithRelationInput[]
    cursor?: FoodListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodListingScalarFieldEnum | FoodListingScalarFieldEnum[]
  }

  /**
   * User.vendorTransactions
   */
  export type User$vendorTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.recipientTransactions
   */
  export type User$recipientTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
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
   * Model FoodListing
   */

  export type AggregateFoodListing = {
    _count: FoodListingCountAggregateOutputType | null
    _avg: FoodListingAvgAggregateOutputType | null
    _sum: FoodListingSumAggregateOutputType | null
    _min: FoodListingMinAggregateOutputType | null
    _max: FoodListingMaxAggregateOutputType | null
  }

  export type FoodListingAvgAggregateOutputType = {
    id: number | null
    price: number | null
    originalPrice: number | null
    discountPercentage: number | null
    latitude: number | null
    longitude: number | null
    createdById: number | null
    claimedById: number | null
  }

  export type FoodListingSumAggregateOutputType = {
    id: number | null
    price: number | null
    originalPrice: number | null
    discountPercentage: number | null
    latitude: number | null
    longitude: number | null
    createdById: number | null
    claimedById: number | null
  }

  export type FoodListingMinAggregateOutputType = {
    id: number | null
    foodName: string | null
    description: string | null
    quantity: string | null
    foodType: string | null
    category: $Enums.FoodCategory | null
    listingType: $Enums.ListingType | null
    price: number | null
    originalPrice: number | null
    discountPercentage: number | null
    pickupCode: string | null
    expiryDateTime: Date | null
    pickupLocation: string | null
    latitude: number | null
    longitude: number | null
    imageUrl: string | null
    imagePublicId: string | null
    status: $Enums.ListingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: number | null
    claimedById: number | null
  }

  export type FoodListingMaxAggregateOutputType = {
    id: number | null
    foodName: string | null
    description: string | null
    quantity: string | null
    foodType: string | null
    category: $Enums.FoodCategory | null
    listingType: $Enums.ListingType | null
    price: number | null
    originalPrice: number | null
    discountPercentage: number | null
    pickupCode: string | null
    expiryDateTime: Date | null
    pickupLocation: string | null
    latitude: number | null
    longitude: number | null
    imageUrl: string | null
    imagePublicId: string | null
    status: $Enums.ListingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: number | null
    claimedById: number | null
  }

  export type FoodListingCountAggregateOutputType = {
    id: number
    foodName: number
    description: number
    quantity: number
    foodType: number
    category: number
    listingType: number
    price: number
    originalPrice: number
    discountPercentage: number
    pickupCode: number
    expiryDateTime: number
    pickupLocation: number
    latitude: number
    longitude: number
    imageUrl: number
    imagePublicId: number
    status: number
    createdAt: number
    updatedAt: number
    createdById: number
    claimedById: number
    _all: number
  }


  export type FoodListingAvgAggregateInputType = {
    id?: true
    price?: true
    originalPrice?: true
    discountPercentage?: true
    latitude?: true
    longitude?: true
    createdById?: true
    claimedById?: true
  }

  export type FoodListingSumAggregateInputType = {
    id?: true
    price?: true
    originalPrice?: true
    discountPercentage?: true
    latitude?: true
    longitude?: true
    createdById?: true
    claimedById?: true
  }

  export type FoodListingMinAggregateInputType = {
    id?: true
    foodName?: true
    description?: true
    quantity?: true
    foodType?: true
    category?: true
    listingType?: true
    price?: true
    originalPrice?: true
    discountPercentage?: true
    pickupCode?: true
    expiryDateTime?: true
    pickupLocation?: true
    latitude?: true
    longitude?: true
    imageUrl?: true
    imagePublicId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    claimedById?: true
  }

  export type FoodListingMaxAggregateInputType = {
    id?: true
    foodName?: true
    description?: true
    quantity?: true
    foodType?: true
    category?: true
    listingType?: true
    price?: true
    originalPrice?: true
    discountPercentage?: true
    pickupCode?: true
    expiryDateTime?: true
    pickupLocation?: true
    latitude?: true
    longitude?: true
    imageUrl?: true
    imagePublicId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    claimedById?: true
  }

  export type FoodListingCountAggregateInputType = {
    id?: true
    foodName?: true
    description?: true
    quantity?: true
    foodType?: true
    category?: true
    listingType?: true
    price?: true
    originalPrice?: true
    discountPercentage?: true
    pickupCode?: true
    expiryDateTime?: true
    pickupLocation?: true
    latitude?: true
    longitude?: true
    imageUrl?: true
    imagePublicId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    claimedById?: true
    _all?: true
  }

  export type FoodListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodListing to aggregate.
     */
    where?: FoodListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodListings to fetch.
     */
    orderBy?: FoodListingOrderByWithRelationInput | FoodListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodListings
    **/
    _count?: true | FoodListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodListingMaxAggregateInputType
  }

  export type GetFoodListingAggregateType<T extends FoodListingAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodListing[P]>
      : GetScalarType<T[P], AggregateFoodListing[P]>
  }




  export type FoodListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodListingWhereInput
    orderBy?: FoodListingOrderByWithAggregationInput | FoodListingOrderByWithAggregationInput[]
    by: FoodListingScalarFieldEnum[] | FoodListingScalarFieldEnum
    having?: FoodListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodListingCountAggregateInputType | true
    _avg?: FoodListingAvgAggregateInputType
    _sum?: FoodListingSumAggregateInputType
    _min?: FoodListingMinAggregateInputType
    _max?: FoodListingMaxAggregateInputType
  }

  export type FoodListingGroupByOutputType = {
    id: number
    foodName: string
    description: string
    quantity: string
    foodType: string
    category: $Enums.FoodCategory
    listingType: $Enums.ListingType
    price: number | null
    originalPrice: number | null
    discountPercentage: number | null
    pickupCode: string
    expiryDateTime: Date
    pickupLocation: string
    latitude: number
    longitude: number
    imageUrl: string | null
    imagePublicId: string | null
    status: $Enums.ListingStatus
    createdAt: Date
    updatedAt: Date
    createdById: number
    claimedById: number | null
    _count: FoodListingCountAggregateOutputType | null
    _avg: FoodListingAvgAggregateOutputType | null
    _sum: FoodListingSumAggregateOutputType | null
    _min: FoodListingMinAggregateOutputType | null
    _max: FoodListingMaxAggregateOutputType | null
  }

  type GetFoodListingGroupByPayload<T extends FoodListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodListingGroupByOutputType[P]>
            : GetScalarType<T[P], FoodListingGroupByOutputType[P]>
        }
      >
    >


  export type FoodListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodName?: boolean
    description?: boolean
    quantity?: boolean
    foodType?: boolean
    category?: boolean
    listingType?: boolean
    price?: boolean
    originalPrice?: boolean
    discountPercentage?: boolean
    pickupCode?: boolean
    expiryDateTime?: boolean
    pickupLocation?: boolean
    latitude?: boolean
    longitude?: boolean
    imageUrl?: boolean
    imagePublicId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    claimedById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    claimedBy?: boolean | FoodListing$claimedByArgs<ExtArgs>
    transaction?: boolean | FoodListing$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["foodListing"]>

  export type FoodListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodName?: boolean
    description?: boolean
    quantity?: boolean
    foodType?: boolean
    category?: boolean
    listingType?: boolean
    price?: boolean
    originalPrice?: boolean
    discountPercentage?: boolean
    pickupCode?: boolean
    expiryDateTime?: boolean
    pickupLocation?: boolean
    latitude?: boolean
    longitude?: boolean
    imageUrl?: boolean
    imagePublicId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    claimedById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    claimedBy?: boolean | FoodListing$claimedByArgs<ExtArgs>
  }, ExtArgs["result"]["foodListing"]>

  export type FoodListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodName?: boolean
    description?: boolean
    quantity?: boolean
    foodType?: boolean
    category?: boolean
    listingType?: boolean
    price?: boolean
    originalPrice?: boolean
    discountPercentage?: boolean
    pickupCode?: boolean
    expiryDateTime?: boolean
    pickupLocation?: boolean
    latitude?: boolean
    longitude?: boolean
    imageUrl?: boolean
    imagePublicId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    claimedById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    claimedBy?: boolean | FoodListing$claimedByArgs<ExtArgs>
  }, ExtArgs["result"]["foodListing"]>

  export type FoodListingSelectScalar = {
    id?: boolean
    foodName?: boolean
    description?: boolean
    quantity?: boolean
    foodType?: boolean
    category?: boolean
    listingType?: boolean
    price?: boolean
    originalPrice?: boolean
    discountPercentage?: boolean
    pickupCode?: boolean
    expiryDateTime?: boolean
    pickupLocation?: boolean
    latitude?: boolean
    longitude?: boolean
    imageUrl?: boolean
    imagePublicId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    claimedById?: boolean
  }

  export type FoodListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "foodName" | "description" | "quantity" | "foodType" | "category" | "listingType" | "price" | "originalPrice" | "discountPercentage" | "pickupCode" | "expiryDateTime" | "pickupLocation" | "latitude" | "longitude" | "imageUrl" | "imagePublicId" | "status" | "createdAt" | "updatedAt" | "createdById" | "claimedById", ExtArgs["result"]["foodListing"]>
  export type FoodListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    claimedBy?: boolean | FoodListing$claimedByArgs<ExtArgs>
    transaction?: boolean | FoodListing$transactionArgs<ExtArgs>
  }
  export type FoodListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    claimedBy?: boolean | FoodListing$claimedByArgs<ExtArgs>
  }
  export type FoodListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    claimedBy?: boolean | FoodListing$claimedByArgs<ExtArgs>
  }

  export type $FoodListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodListing"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      claimedBy: Prisma.$UserPayload<ExtArgs> | null
      transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      foodName: string
      description: string
      quantity: string
      foodType: string
      category: $Enums.FoodCategory
      listingType: $Enums.ListingType
      price: number | null
      originalPrice: number | null
      discountPercentage: number | null
      pickupCode: string
      expiryDateTime: Date
      pickupLocation: string
      latitude: number
      longitude: number
      imageUrl: string | null
      imagePublicId: string | null
      status: $Enums.ListingStatus
      createdAt: Date
      updatedAt: Date
      createdById: number
      claimedById: number | null
    }, ExtArgs["result"]["foodListing"]>
    composites: {}
  }

  type FoodListingGetPayload<S extends boolean | null | undefined | FoodListingDefaultArgs> = $Result.GetResult<Prisma.$FoodListingPayload, S>

  type FoodListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodListingCountAggregateInputType | true
    }

  export interface FoodListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodListing'], meta: { name: 'FoodListing' } }
    /**
     * Find zero or one FoodListing that matches the filter.
     * @param {FoodListingFindUniqueArgs} args - Arguments to find a FoodListing
     * @example
     * // Get one FoodListing
     * const foodListing = await prisma.foodListing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodListingFindUniqueArgs>(args: SelectSubset<T, FoodListingFindUniqueArgs<ExtArgs>>): Prisma__FoodListingClient<$Result.GetResult<Prisma.$FoodListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodListing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodListingFindUniqueOrThrowArgs} args - Arguments to find a FoodListing
     * @example
     * // Get one FoodListing
     * const foodListing = await prisma.foodListing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodListingFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodListingClient<$Result.GetResult<Prisma.$FoodListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodListing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodListingFindFirstArgs} args - Arguments to find a FoodListing
     * @example
     * // Get one FoodListing
     * const foodListing = await prisma.foodListing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodListingFindFirstArgs>(args?: SelectSubset<T, FoodListingFindFirstArgs<ExtArgs>>): Prisma__FoodListingClient<$Result.GetResult<Prisma.$FoodListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodListing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodListingFindFirstOrThrowArgs} args - Arguments to find a FoodListing
     * @example
     * // Get one FoodListing
     * const foodListing = await prisma.foodListing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodListingFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodListingClient<$Result.GetResult<Prisma.$FoodListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodListings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodListings
     * const foodListings = await prisma.foodListing.findMany()
     * 
     * // Get first 10 FoodListings
     * const foodListings = await prisma.foodListing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodListingWithIdOnly = await prisma.foodListing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodListingFindManyArgs>(args?: SelectSubset<T, FoodListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodListing.
     * @param {FoodListingCreateArgs} args - Arguments to create a FoodListing.
     * @example
     * // Create one FoodListing
     * const FoodListing = await prisma.foodListing.create({
     *   data: {
     *     // ... data to create a FoodListing
     *   }
     * })
     * 
     */
    create<T extends FoodListingCreateArgs>(args: SelectSubset<T, FoodListingCreateArgs<ExtArgs>>): Prisma__FoodListingClient<$Result.GetResult<Prisma.$FoodListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodListings.
     * @param {FoodListingCreateManyArgs} args - Arguments to create many FoodListings.
     * @example
     * // Create many FoodListings
     * const foodListing = await prisma.foodListing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodListingCreateManyArgs>(args?: SelectSubset<T, FoodListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodListings and returns the data saved in the database.
     * @param {FoodListingCreateManyAndReturnArgs} args - Arguments to create many FoodListings.
     * @example
     * // Create many FoodListings
     * const foodListing = await prisma.foodListing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodListings and only return the `id`
     * const foodListingWithIdOnly = await prisma.foodListing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodListingCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoodListing.
     * @param {FoodListingDeleteArgs} args - Arguments to delete one FoodListing.
     * @example
     * // Delete one FoodListing
     * const FoodListing = await prisma.foodListing.delete({
     *   where: {
     *     // ... filter to delete one FoodListing
     *   }
     * })
     * 
     */
    delete<T extends FoodListingDeleteArgs>(args: SelectSubset<T, FoodListingDeleteArgs<ExtArgs>>): Prisma__FoodListingClient<$Result.GetResult<Prisma.$FoodListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodListing.
     * @param {FoodListingUpdateArgs} args - Arguments to update one FoodListing.
     * @example
     * // Update one FoodListing
     * const foodListing = await prisma.foodListing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodListingUpdateArgs>(args: SelectSubset<T, FoodListingUpdateArgs<ExtArgs>>): Prisma__FoodListingClient<$Result.GetResult<Prisma.$FoodListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodListings.
     * @param {FoodListingDeleteManyArgs} args - Arguments to filter FoodListings to delete.
     * @example
     * // Delete a few FoodListings
     * const { count } = await prisma.foodListing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodListingDeleteManyArgs>(args?: SelectSubset<T, FoodListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodListings
     * const foodListing = await prisma.foodListing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodListingUpdateManyArgs>(args: SelectSubset<T, FoodListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodListings and returns the data updated in the database.
     * @param {FoodListingUpdateManyAndReturnArgs} args - Arguments to update many FoodListings.
     * @example
     * // Update many FoodListings
     * const foodListing = await prisma.foodListing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoodListings and only return the `id`
     * const foodListingWithIdOnly = await prisma.foodListing.updateManyAndReturn({
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
    updateManyAndReturn<T extends FoodListingUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoodListing.
     * @param {FoodListingUpsertArgs} args - Arguments to update or create a FoodListing.
     * @example
     * // Update or create a FoodListing
     * const foodListing = await prisma.foodListing.upsert({
     *   create: {
     *     // ... data to create a FoodListing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodListing we want to update
     *   }
     * })
     */
    upsert<T extends FoodListingUpsertArgs>(args: SelectSubset<T, FoodListingUpsertArgs<ExtArgs>>): Prisma__FoodListingClient<$Result.GetResult<Prisma.$FoodListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodListingCountArgs} args - Arguments to filter FoodListings to count.
     * @example
     * // Count the number of FoodListings
     * const count = await prisma.foodListing.count({
     *   where: {
     *     // ... the filter for the FoodListings we want to count
     *   }
     * })
    **/
    count<T extends FoodListingCountArgs>(
      args?: Subset<T, FoodListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodListingAggregateArgs>(args: Subset<T, FoodListingAggregateArgs>): Prisma.PrismaPromise<GetFoodListingAggregateType<T>>

    /**
     * Group by FoodListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodListingGroupByArgs} args - Group by arguments.
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
      T extends FoodListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodListingGroupByArgs['orderBy'] }
        : { orderBy?: FoodListingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodListing model
   */
  readonly fields: FoodListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodListing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    claimedBy<T extends FoodListing$claimedByArgs<ExtArgs> = {}>(args?: Subset<T, FoodListing$claimedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transaction<T extends FoodListing$transactionArgs<ExtArgs> = {}>(args?: Subset<T, FoodListing$transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FoodListing model
   */
  interface FoodListingFieldRefs {
    readonly id: FieldRef<"FoodListing", 'Int'>
    readonly foodName: FieldRef<"FoodListing", 'String'>
    readonly description: FieldRef<"FoodListing", 'String'>
    readonly quantity: FieldRef<"FoodListing", 'String'>
    readonly foodType: FieldRef<"FoodListing", 'String'>
    readonly category: FieldRef<"FoodListing", 'FoodCategory'>
    readonly listingType: FieldRef<"FoodListing", 'ListingType'>
    readonly price: FieldRef<"FoodListing", 'Float'>
    readonly originalPrice: FieldRef<"FoodListing", 'Float'>
    readonly discountPercentage: FieldRef<"FoodListing", 'Float'>
    readonly pickupCode: FieldRef<"FoodListing", 'String'>
    readonly expiryDateTime: FieldRef<"FoodListing", 'DateTime'>
    readonly pickupLocation: FieldRef<"FoodListing", 'String'>
    readonly latitude: FieldRef<"FoodListing", 'Float'>
    readonly longitude: FieldRef<"FoodListing", 'Float'>
    readonly imageUrl: FieldRef<"FoodListing", 'String'>
    readonly imagePublicId: FieldRef<"FoodListing", 'String'>
    readonly status: FieldRef<"FoodListing", 'ListingStatus'>
    readonly createdAt: FieldRef<"FoodListing", 'DateTime'>
    readonly updatedAt: FieldRef<"FoodListing", 'DateTime'>
    readonly createdById: FieldRef<"FoodListing", 'Int'>
    readonly claimedById: FieldRef<"FoodListing", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FoodListing findUnique
   */
  export type FoodListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodListing
     */
    select?: FoodListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodListing
     */
    omit?: FoodListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodListingInclude<ExtArgs> | null
    /**
     * Filter, which FoodListing to fetch.
     */
    where: FoodListingWhereUniqueInput
  }

  /**
   * FoodListing findUniqueOrThrow
   */
  export type FoodListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodListing
     */
    select?: FoodListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodListing
     */
    omit?: FoodListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodListingInclude<ExtArgs> | null
    /**
     * Filter, which FoodListing to fetch.
     */
    where: FoodListingWhereUniqueInput
  }

  /**
   * FoodListing findFirst
   */
  export type FoodListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodListing
     */
    select?: FoodListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodListing
     */
    omit?: FoodListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodListingInclude<ExtArgs> | null
    /**
     * Filter, which FoodListing to fetch.
     */
    where?: FoodListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodListings to fetch.
     */
    orderBy?: FoodListingOrderByWithRelationInput | FoodListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodListings.
     */
    cursor?: FoodListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodListings.
     */
    distinct?: FoodListingScalarFieldEnum | FoodListingScalarFieldEnum[]
  }

  /**
   * FoodListing findFirstOrThrow
   */
  export type FoodListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodListing
     */
    select?: FoodListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodListing
     */
    omit?: FoodListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodListingInclude<ExtArgs> | null
    /**
     * Filter, which FoodListing to fetch.
     */
    where?: FoodListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodListings to fetch.
     */
    orderBy?: FoodListingOrderByWithRelationInput | FoodListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodListings.
     */
    cursor?: FoodListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodListings.
     */
    distinct?: FoodListingScalarFieldEnum | FoodListingScalarFieldEnum[]
  }

  /**
   * FoodListing findMany
   */
  export type FoodListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodListing
     */
    select?: FoodListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodListing
     */
    omit?: FoodListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodListingInclude<ExtArgs> | null
    /**
     * Filter, which FoodListings to fetch.
     */
    where?: FoodListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodListings to fetch.
     */
    orderBy?: FoodListingOrderByWithRelationInput | FoodListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodListings.
     */
    cursor?: FoodListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodListings.
     */
    distinct?: FoodListingScalarFieldEnum | FoodListingScalarFieldEnum[]
  }

  /**
   * FoodListing create
   */
  export type FoodListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodListing
     */
    select?: FoodListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodListing
     */
    omit?: FoodListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodListingInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodListing.
     */
    data: XOR<FoodListingCreateInput, FoodListingUncheckedCreateInput>
  }

  /**
   * FoodListing createMany
   */
  export type FoodListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodListings.
     */
    data: FoodListingCreateManyInput | FoodListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodListing createManyAndReturn
   */
  export type FoodListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodListing
     */
    select?: FoodListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodListing
     */
    omit?: FoodListingOmit<ExtArgs> | null
    /**
     * The data used to create many FoodListings.
     */
    data: FoodListingCreateManyInput | FoodListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoodListing update
   */
  export type FoodListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodListing
     */
    select?: FoodListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodListing
     */
    omit?: FoodListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodListingInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodListing.
     */
    data: XOR<FoodListingUpdateInput, FoodListingUncheckedUpdateInput>
    /**
     * Choose, which FoodListing to update.
     */
    where: FoodListingWhereUniqueInput
  }

  /**
   * FoodListing updateMany
   */
  export type FoodListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodListings.
     */
    data: XOR<FoodListingUpdateManyMutationInput, FoodListingUncheckedUpdateManyInput>
    /**
     * Filter which FoodListings to update
     */
    where?: FoodListingWhereInput
    /**
     * Limit how many FoodListings to update.
     */
    limit?: number
  }

  /**
   * FoodListing updateManyAndReturn
   */
  export type FoodListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodListing
     */
    select?: FoodListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodListing
     */
    omit?: FoodListingOmit<ExtArgs> | null
    /**
     * The data used to update FoodListings.
     */
    data: XOR<FoodListingUpdateManyMutationInput, FoodListingUncheckedUpdateManyInput>
    /**
     * Filter which FoodListings to update
     */
    where?: FoodListingWhereInput
    /**
     * Limit how many FoodListings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoodListing upsert
   */
  export type FoodListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodListing
     */
    select?: FoodListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodListing
     */
    omit?: FoodListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodListingInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodListing to update in case it exists.
     */
    where: FoodListingWhereUniqueInput
    /**
     * In case the FoodListing found by the `where` argument doesn't exist, create a new FoodListing with this data.
     */
    create: XOR<FoodListingCreateInput, FoodListingUncheckedCreateInput>
    /**
     * In case the FoodListing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodListingUpdateInput, FoodListingUncheckedUpdateInput>
  }

  /**
   * FoodListing delete
   */
  export type FoodListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodListing
     */
    select?: FoodListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodListing
     */
    omit?: FoodListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodListingInclude<ExtArgs> | null
    /**
     * Filter which FoodListing to delete.
     */
    where: FoodListingWhereUniqueInput
  }

  /**
   * FoodListing deleteMany
   */
  export type FoodListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodListings to delete
     */
    where?: FoodListingWhereInput
    /**
     * Limit how many FoodListings to delete.
     */
    limit?: number
  }

  /**
   * FoodListing.claimedBy
   */
  export type FoodListing$claimedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * FoodListing.transaction
   */
  export type FoodListing$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * FoodListing without action
   */
  export type FoodListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodListing
     */
    select?: FoodListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodListing
     */
    omit?: FoodListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodListingInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    listingId: number | null
    vendorId: number | null
    recipientId: number | null
    amountPaid: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    listingId: number | null
    vendorId: number | null
    recipientId: number | null
    amountPaid: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    listingId: number | null
    vendorId: number | null
    recipientId: number | null
    status: $Enums.TransactionStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    amountPaid: number | null
    isPickupCodeVerified: boolean | null
    pickupCodeVerifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    listingId: number | null
    vendorId: number | null
    recipientId: number | null
    status: $Enums.TransactionStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    amountPaid: number | null
    isPickupCodeVerified: boolean | null
    pickupCodeVerifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    listingId: number
    vendorId: number
    recipientId: number
    status: number
    paymentStatus: number
    amountPaid: number
    isPickupCodeVerified: number
    pickupCodeVerifiedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    listingId?: true
    vendorId?: true
    recipientId?: true
    amountPaid?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    listingId?: true
    vendorId?: true
    recipientId?: true
    amountPaid?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    listingId?: true
    vendorId?: true
    recipientId?: true
    status?: true
    paymentStatus?: true
    amountPaid?: true
    isPickupCodeVerified?: true
    pickupCodeVerifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    listingId?: true
    vendorId?: true
    recipientId?: true
    status?: true
    paymentStatus?: true
    amountPaid?: true
    isPickupCodeVerified?: true
    pickupCodeVerifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    listingId?: true
    vendorId?: true
    recipientId?: true
    status?: true
    paymentStatus?: true
    amountPaid?: true
    isPickupCodeVerified?: true
    pickupCodeVerifiedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    listingId: number
    vendorId: number
    recipientId: number
    status: $Enums.TransactionStatus
    paymentStatus: $Enums.PaymentStatus
    amountPaid: number | null
    isPickupCodeVerified: boolean
    pickupCodeVerifiedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    vendorId?: boolean
    recipientId?: boolean
    status?: boolean
    paymentStatus?: boolean
    amountPaid?: boolean
    isPickupCodeVerified?: boolean
    pickupCodeVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | FoodListingDefaultArgs<ExtArgs>
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    vendorId?: boolean
    recipientId?: boolean
    status?: boolean
    paymentStatus?: boolean
    amountPaid?: boolean
    isPickupCodeVerified?: boolean
    pickupCodeVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | FoodListingDefaultArgs<ExtArgs>
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    vendorId?: boolean
    recipientId?: boolean
    status?: boolean
    paymentStatus?: boolean
    amountPaid?: boolean
    isPickupCodeVerified?: boolean
    pickupCodeVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | FoodListingDefaultArgs<ExtArgs>
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    listingId?: boolean
    vendorId?: boolean
    recipientId?: boolean
    status?: boolean
    paymentStatus?: boolean
    amountPaid?: boolean
    isPickupCodeVerified?: boolean
    pickupCodeVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listingId" | "vendorId" | "recipientId" | "status" | "paymentStatus" | "amountPaid" | "isPickupCodeVerified" | "pickupCodeVerifiedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | FoodListingDefaultArgs<ExtArgs>
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | FoodListingDefaultArgs<ExtArgs>
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | FoodListingDefaultArgs<ExtArgs>
    vendor?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      listing: Prisma.$FoodListingPayload<ExtArgs>
      vendor: Prisma.$UserPayload<ExtArgs>
      recipient: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      listingId: number
      vendorId: number
      recipientId: number
      status: $Enums.TransactionStatus
      paymentStatus: $Enums.PaymentStatus
      amountPaid: number | null
      isPickupCodeVerified: boolean
      pickupCodeVerifiedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends FoodListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodListingDefaultArgs<ExtArgs>>): Prisma__FoodListingClient<$Result.GetResult<Prisma.$FoodListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly listingId: FieldRef<"Transaction", 'Int'>
    readonly vendorId: FieldRef<"Transaction", 'Int'>
    readonly recipientId: FieldRef<"Transaction", 'Int'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly paymentStatus: FieldRef<"Transaction", 'PaymentStatus'>
    readonly amountPaid: FieldRef<"Transaction", 'Float'>
    readonly isPickupCodeVerified: FieldRef<"Transaction", 'Boolean'>
    readonly pickupCodeVerifiedAt: FieldRef<"Transaction", 'DateTime'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    approvalStatus: 'approvalStatus',
    organizationName: 'organizationName',
    phoneNumber: 'phoneNumber',
    documentUrl: 'documentUrl',
    documentPublicId: 'documentPublicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FoodListingScalarFieldEnum: {
    id: 'id',
    foodName: 'foodName',
    description: 'description',
    quantity: 'quantity',
    foodType: 'foodType',
    category: 'category',
    listingType: 'listingType',
    price: 'price',
    originalPrice: 'originalPrice',
    discountPercentage: 'discountPercentage',
    pickupCode: 'pickupCode',
    expiryDateTime: 'expiryDateTime',
    pickupLocation: 'pickupLocation',
    latitude: 'latitude',
    longitude: 'longitude',
    imageUrl: 'imageUrl',
    imagePublicId: 'imagePublicId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById',
    claimedById: 'claimedById'
  };

  export type FoodListingScalarFieldEnum = (typeof FoodListingScalarFieldEnum)[keyof typeof FoodListingScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    vendorId: 'vendorId',
    recipientId: 'recipientId',
    status: 'status',
    paymentStatus: 'paymentStatus',
    amountPaid: 'amountPaid',
    isPickupCodeVerified: 'isPickupCodeVerified',
    pickupCodeVerifiedAt: 'pickupCodeVerifiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'ApprovalStatus'
   */
  export type EnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus'>
    


  /**
   * Reference to a field of type 'ApprovalStatus[]'
   */
  export type ListEnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'FoodCategory'
   */
  export type EnumFoodCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FoodCategory'>
    


  /**
   * Reference to a field of type 'FoodCategory[]'
   */
  export type ListEnumFoodCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FoodCategory[]'>
    


  /**
   * Reference to a field of type 'ListingType'
   */
  export type EnumListingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingType'>
    


  /**
   * Reference to a field of type 'ListingType[]'
   */
  export type ListEnumListingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ListingStatus'
   */
  export type EnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus'>
    


  /**
   * Reference to a field of type 'ListingStatus[]'
   */
  export type ListEnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    approvalStatus?: EnumApprovalStatusFilter<"User"> | $Enums.ApprovalStatus
    organizationName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    documentUrl?: StringNullableFilter<"User"> | string | null
    documentPublicId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    listings?: FoodListingListRelationFilter
    claimedListings?: FoodListingListRelationFilter
    vendorTransactions?: TransactionListRelationFilter
    recipientTransactions?: TransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    approvalStatus?: SortOrder
    organizationName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    documentPublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listings?: FoodListingOrderByRelationAggregateInput
    claimedListings?: FoodListingOrderByRelationAggregateInput
    vendorTransactions?: TransactionOrderByRelationAggregateInput
    recipientTransactions?: TransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    approvalStatus?: EnumApprovalStatusFilter<"User"> | $Enums.ApprovalStatus
    organizationName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    documentUrl?: StringNullableFilter<"User"> | string | null
    documentPublicId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    listings?: FoodListingListRelationFilter
    claimedListings?: FoodListingListRelationFilter
    vendorTransactions?: TransactionListRelationFilter
    recipientTransactions?: TransactionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    approvalStatus?: SortOrder
    organizationName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    documentPublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    approvalStatus?: EnumApprovalStatusWithAggregatesFilter<"User"> | $Enums.ApprovalStatus
    organizationName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    documentUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    documentPublicId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FoodListingWhereInput = {
    AND?: FoodListingWhereInput | FoodListingWhereInput[]
    OR?: FoodListingWhereInput[]
    NOT?: FoodListingWhereInput | FoodListingWhereInput[]
    id?: IntFilter<"FoodListing"> | number
    foodName?: StringFilter<"FoodListing"> | string
    description?: StringFilter<"FoodListing"> | string
    quantity?: StringFilter<"FoodListing"> | string
    foodType?: StringFilter<"FoodListing"> | string
    category?: EnumFoodCategoryFilter<"FoodListing"> | $Enums.FoodCategory
    listingType?: EnumListingTypeFilter<"FoodListing"> | $Enums.ListingType
    price?: FloatNullableFilter<"FoodListing"> | number | null
    originalPrice?: FloatNullableFilter<"FoodListing"> | number | null
    discountPercentage?: FloatNullableFilter<"FoodListing"> | number | null
    pickupCode?: StringFilter<"FoodListing"> | string
    expiryDateTime?: DateTimeFilter<"FoodListing"> | Date | string
    pickupLocation?: StringFilter<"FoodListing"> | string
    latitude?: FloatFilter<"FoodListing"> | number
    longitude?: FloatFilter<"FoodListing"> | number
    imageUrl?: StringNullableFilter<"FoodListing"> | string | null
    imagePublicId?: StringNullableFilter<"FoodListing"> | string | null
    status?: EnumListingStatusFilter<"FoodListing"> | $Enums.ListingStatus
    createdAt?: DateTimeFilter<"FoodListing"> | Date | string
    updatedAt?: DateTimeFilter<"FoodListing"> | Date | string
    createdById?: IntFilter<"FoodListing"> | number
    claimedById?: IntNullableFilter<"FoodListing"> | number | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    claimedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }

  export type FoodListingOrderByWithRelationInput = {
    id?: SortOrder
    foodName?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    foodType?: SortOrder
    category?: SortOrder
    listingType?: SortOrder
    price?: SortOrderInput | SortOrder
    originalPrice?: SortOrderInput | SortOrder
    discountPercentage?: SortOrderInput | SortOrder
    pickupCode?: SortOrder
    expiryDateTime?: SortOrder
    pickupLocation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imagePublicId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    claimedById?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
    claimedBy?: UserOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type FoodListingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodListingWhereInput | FoodListingWhereInput[]
    OR?: FoodListingWhereInput[]
    NOT?: FoodListingWhereInput | FoodListingWhereInput[]
    foodName?: StringFilter<"FoodListing"> | string
    description?: StringFilter<"FoodListing"> | string
    quantity?: StringFilter<"FoodListing"> | string
    foodType?: StringFilter<"FoodListing"> | string
    category?: EnumFoodCategoryFilter<"FoodListing"> | $Enums.FoodCategory
    listingType?: EnumListingTypeFilter<"FoodListing"> | $Enums.ListingType
    price?: FloatNullableFilter<"FoodListing"> | number | null
    originalPrice?: FloatNullableFilter<"FoodListing"> | number | null
    discountPercentage?: FloatNullableFilter<"FoodListing"> | number | null
    pickupCode?: StringFilter<"FoodListing"> | string
    expiryDateTime?: DateTimeFilter<"FoodListing"> | Date | string
    pickupLocation?: StringFilter<"FoodListing"> | string
    latitude?: FloatFilter<"FoodListing"> | number
    longitude?: FloatFilter<"FoodListing"> | number
    imageUrl?: StringNullableFilter<"FoodListing"> | string | null
    imagePublicId?: StringNullableFilter<"FoodListing"> | string | null
    status?: EnumListingStatusFilter<"FoodListing"> | $Enums.ListingStatus
    createdAt?: DateTimeFilter<"FoodListing"> | Date | string
    updatedAt?: DateTimeFilter<"FoodListing"> | Date | string
    createdById?: IntFilter<"FoodListing"> | number
    claimedById?: IntNullableFilter<"FoodListing"> | number | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    claimedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }, "id">

  export type FoodListingOrderByWithAggregationInput = {
    id?: SortOrder
    foodName?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    foodType?: SortOrder
    category?: SortOrder
    listingType?: SortOrder
    price?: SortOrderInput | SortOrder
    originalPrice?: SortOrderInput | SortOrder
    discountPercentage?: SortOrderInput | SortOrder
    pickupCode?: SortOrder
    expiryDateTime?: SortOrder
    pickupLocation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imagePublicId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    claimedById?: SortOrderInput | SortOrder
    _count?: FoodListingCountOrderByAggregateInput
    _avg?: FoodListingAvgOrderByAggregateInput
    _max?: FoodListingMaxOrderByAggregateInput
    _min?: FoodListingMinOrderByAggregateInput
    _sum?: FoodListingSumOrderByAggregateInput
  }

  export type FoodListingScalarWhereWithAggregatesInput = {
    AND?: FoodListingScalarWhereWithAggregatesInput | FoodListingScalarWhereWithAggregatesInput[]
    OR?: FoodListingScalarWhereWithAggregatesInput[]
    NOT?: FoodListingScalarWhereWithAggregatesInput | FoodListingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FoodListing"> | number
    foodName?: StringWithAggregatesFilter<"FoodListing"> | string
    description?: StringWithAggregatesFilter<"FoodListing"> | string
    quantity?: StringWithAggregatesFilter<"FoodListing"> | string
    foodType?: StringWithAggregatesFilter<"FoodListing"> | string
    category?: EnumFoodCategoryWithAggregatesFilter<"FoodListing"> | $Enums.FoodCategory
    listingType?: EnumListingTypeWithAggregatesFilter<"FoodListing"> | $Enums.ListingType
    price?: FloatNullableWithAggregatesFilter<"FoodListing"> | number | null
    originalPrice?: FloatNullableWithAggregatesFilter<"FoodListing"> | number | null
    discountPercentage?: FloatNullableWithAggregatesFilter<"FoodListing"> | number | null
    pickupCode?: StringWithAggregatesFilter<"FoodListing"> | string
    expiryDateTime?: DateTimeWithAggregatesFilter<"FoodListing"> | Date | string
    pickupLocation?: StringWithAggregatesFilter<"FoodListing"> | string
    latitude?: FloatWithAggregatesFilter<"FoodListing"> | number
    longitude?: FloatWithAggregatesFilter<"FoodListing"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"FoodListing"> | string | null
    imagePublicId?: StringNullableWithAggregatesFilter<"FoodListing"> | string | null
    status?: EnumListingStatusWithAggregatesFilter<"FoodListing"> | $Enums.ListingStatus
    createdAt?: DateTimeWithAggregatesFilter<"FoodListing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FoodListing"> | Date | string
    createdById?: IntWithAggregatesFilter<"FoodListing"> | number
    claimedById?: IntNullableWithAggregatesFilter<"FoodListing"> | number | null
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    listingId?: IntFilter<"Transaction"> | number
    vendorId?: IntFilter<"Transaction"> | number
    recipientId?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusFilter<"Transaction"> | $Enums.PaymentStatus
    amountPaid?: FloatNullableFilter<"Transaction"> | number | null
    isPickupCodeVerified?: BoolFilter<"Transaction"> | boolean
    pickupCodeVerifiedAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    listing?: XOR<FoodListingScalarRelationFilter, FoodListingWhereInput>
    vendor?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrder
    vendorId?: SortOrder
    recipientId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    amountPaid?: SortOrderInput | SortOrder
    isPickupCodeVerified?: SortOrder
    pickupCodeVerifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listing?: FoodListingOrderByWithRelationInput
    vendor?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    listingId?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    vendorId?: IntFilter<"Transaction"> | number
    recipientId?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusFilter<"Transaction"> | $Enums.PaymentStatus
    amountPaid?: FloatNullableFilter<"Transaction"> | number | null
    isPickupCodeVerified?: BoolFilter<"Transaction"> | boolean
    pickupCodeVerifiedAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    listing?: XOR<FoodListingScalarRelationFilter, FoodListingWhereInput>
    vendor?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "listingId">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrder
    vendorId?: SortOrder
    recipientId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    amountPaid?: SortOrderInput | SortOrder
    isPickupCodeVerified?: SortOrder
    pickupCodeVerifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    listingId?: IntWithAggregatesFilter<"Transaction"> | number
    vendorId?: IntWithAggregatesFilter<"Transaction"> | number
    recipientId?: IntWithAggregatesFilter<"Transaction"> | number
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Transaction"> | $Enums.PaymentStatus
    amountPaid?: FloatNullableWithAggregatesFilter<"Transaction"> | number | null
    isPickupCodeVerified?: BoolWithAggregatesFilter<"Transaction"> | boolean
    pickupCodeVerifiedAt?: DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    approvalStatus?: $Enums.ApprovalStatus
    organizationName?: string | null
    phoneNumber?: string | null
    documentUrl?: string | null
    documentPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: FoodListingCreateNestedManyWithoutCreatedByInput
    claimedListings?: FoodListingCreateNestedManyWithoutClaimedByInput
    vendorTransactions?: TransactionCreateNestedManyWithoutVendorInput
    recipientTransactions?: TransactionCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    approvalStatus?: $Enums.ApprovalStatus
    organizationName?: string | null
    phoneNumber?: string | null
    documentUrl?: string | null
    documentPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: FoodListingUncheckedCreateNestedManyWithoutCreatedByInput
    claimedListings?: FoodListingUncheckedCreateNestedManyWithoutClaimedByInput
    vendorTransactions?: TransactionUncheckedCreateNestedManyWithoutVendorInput
    recipientTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: FoodListingUpdateManyWithoutCreatedByNestedInput
    claimedListings?: FoodListingUpdateManyWithoutClaimedByNestedInput
    vendorTransactions?: TransactionUpdateManyWithoutVendorNestedInput
    recipientTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: FoodListingUncheckedUpdateManyWithoutCreatedByNestedInput
    claimedListings?: FoodListingUncheckedUpdateManyWithoutClaimedByNestedInput
    vendorTransactions?: TransactionUncheckedUpdateManyWithoutVendorNestedInput
    recipientTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    approvalStatus?: $Enums.ApprovalStatus
    organizationName?: string | null
    phoneNumber?: string | null
    documentUrl?: string | null
    documentPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodListingCreateInput = {
    foodName: string
    description: string
    quantity: string
    foodType: string
    category: $Enums.FoodCategory
    listingType?: $Enums.ListingType
    price?: number | null
    originalPrice?: number | null
    discountPercentage?: number | null
    pickupCode: string
    expiryDateTime: Date | string
    pickupLocation: string
    latitude: number
    longitude: number
    imageUrl?: string | null
    imagePublicId?: string | null
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutListingsInput
    claimedBy?: UserCreateNestedOneWithoutClaimedListingsInput
    transaction?: TransactionCreateNestedOneWithoutListingInput
  }

  export type FoodListingUncheckedCreateInput = {
    id?: number
    foodName: string
    description: string
    quantity: string
    foodType: string
    category: $Enums.FoodCategory
    listingType?: $Enums.ListingType
    price?: number | null
    originalPrice?: number | null
    discountPercentage?: number | null
    pickupCode: string
    expiryDateTime: Date | string
    pickupLocation: string
    latitude: number
    longitude: number
    imageUrl?: string | null
    imagePublicId?: string | null
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: number
    claimedById?: number | null
    transaction?: TransactionUncheckedCreateNestedOneWithoutListingInput
  }

  export type FoodListingUpdateInput = {
    foodName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    expiryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutListingsNestedInput
    claimedBy?: UserUpdateOneWithoutClaimedListingsNestedInput
    transaction?: TransactionUpdateOneWithoutListingNestedInput
  }

  export type FoodListingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    expiryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    claimedById?: NullableIntFieldUpdateOperationsInput | number | null
    transaction?: TransactionUncheckedUpdateOneWithoutListingNestedInput
  }

  export type FoodListingCreateManyInput = {
    id?: number
    foodName: string
    description: string
    quantity: string
    foodType: string
    category: $Enums.FoodCategory
    listingType?: $Enums.ListingType
    price?: number | null
    originalPrice?: number | null
    discountPercentage?: number | null
    pickupCode: string
    expiryDateTime: Date | string
    pickupLocation: string
    latitude: number
    longitude: number
    imageUrl?: string | null
    imagePublicId?: string | null
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: number
    claimedById?: number | null
  }

  export type FoodListingUpdateManyMutationInput = {
    foodName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    expiryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodListingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    expiryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    claimedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionCreateInput = {
    status?: $Enums.TransactionStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaid?: number | null
    isPickupCodeVerified?: boolean
    pickupCodeVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listing: FoodListingCreateNestedOneWithoutTransactionInput
    vendor: UserCreateNestedOneWithoutVendorTransactionsInput
    recipient: UserCreateNestedOneWithoutRecipientTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    listingId: number
    vendorId: number
    recipientId: number
    status?: $Enums.TransactionStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaid?: number | null
    isPickupCodeVerified?: boolean
    pickupCodeVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    isPickupCodeVerified?: BoolFieldUpdateOperationsInput | boolean
    pickupCodeVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: FoodListingUpdateOneRequiredWithoutTransactionNestedInput
    vendor?: UserUpdateOneRequiredWithoutVendorTransactionsNestedInput
    recipient?: UserUpdateOneRequiredWithoutRecipientTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    isPickupCodeVerified?: BoolFieldUpdateOperationsInput | boolean
    pickupCodeVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    listingId: number
    vendorId: number
    recipientId: number
    status?: $Enums.TransactionStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaid?: number | null
    isPickupCodeVerified?: boolean
    pickupCodeVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    isPickupCodeVerified?: BoolFieldUpdateOperationsInput | boolean
    pickupCodeVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    isPickupCodeVerified?: BoolFieldUpdateOperationsInput | boolean
    pickupCodeVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type EnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
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

  export type FoodListingListRelationFilter = {
    every?: FoodListingWhereInput
    some?: FoodListingWhereInput
    none?: FoodListingWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FoodListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    approvalStatus?: SortOrder
    organizationName?: SortOrder
    phoneNumber?: SortOrder
    documentUrl?: SortOrder
    documentPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    approvalStatus?: SortOrder
    organizationName?: SortOrder
    phoneNumber?: SortOrder
    documentUrl?: SortOrder
    documentPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    approvalStatus?: SortOrder
    organizationName?: SortOrder
    phoneNumber?: SortOrder
    documentUrl?: SortOrder
    documentPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
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

  export type EnumFoodCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodCategory | EnumFoodCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodCategoryFilter<$PrismaModel> | $Enums.FoodCategory
  }

  export type EnumListingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeFilter<$PrismaModel> | $Enums.ListingType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type FoodListingCountOrderByAggregateInput = {
    id?: SortOrder
    foodName?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    foodType?: SortOrder
    category?: SortOrder
    listingType?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    discountPercentage?: SortOrder
    pickupCode?: SortOrder
    expiryDateTime?: SortOrder
    pickupLocation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    imageUrl?: SortOrder
    imagePublicId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    claimedById?: SortOrder
  }

  export type FoodListingAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    discountPercentage?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdById?: SortOrder
    claimedById?: SortOrder
  }

  export type FoodListingMaxOrderByAggregateInput = {
    id?: SortOrder
    foodName?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    foodType?: SortOrder
    category?: SortOrder
    listingType?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    discountPercentage?: SortOrder
    pickupCode?: SortOrder
    expiryDateTime?: SortOrder
    pickupLocation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    imageUrl?: SortOrder
    imagePublicId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    claimedById?: SortOrder
  }

  export type FoodListingMinOrderByAggregateInput = {
    id?: SortOrder
    foodName?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    foodType?: SortOrder
    category?: SortOrder
    listingType?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    discountPercentage?: SortOrder
    pickupCode?: SortOrder
    expiryDateTime?: SortOrder
    pickupLocation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    imageUrl?: SortOrder
    imagePublicId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    claimedById?: SortOrder
  }

  export type FoodListingSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    discountPercentage?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdById?: SortOrder
    claimedById?: SortOrder
  }

  export type EnumFoodCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodCategory | EnumFoodCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FoodCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFoodCategoryFilter<$PrismaModel>
    _max?: NestedEnumFoodCategoryFilter<$PrismaModel>
  }

  export type EnumListingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeWithAggregatesFilter<$PrismaModel> | $Enums.ListingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingTypeFilter<$PrismaModel>
    _max?: NestedEnumListingTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type FoodListingScalarRelationFilter = {
    is?: FoodListingWhereInput
    isNot?: FoodListingWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    vendorId?: SortOrder
    recipientId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    amountPaid?: SortOrder
    isPickupCodeVerified?: SortOrder
    pickupCodeVerifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    vendorId?: SortOrder
    recipientId?: SortOrder
    amountPaid?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    vendorId?: SortOrder
    recipientId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    amountPaid?: SortOrder
    isPickupCodeVerified?: SortOrder
    pickupCodeVerifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    vendorId?: SortOrder
    recipientId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    amountPaid?: SortOrder
    isPickupCodeVerified?: SortOrder
    pickupCodeVerifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    vendorId?: SortOrder
    recipientId?: SortOrder
    amountPaid?: SortOrder
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FoodListingCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FoodListingCreateWithoutCreatedByInput, FoodListingUncheckedCreateWithoutCreatedByInput> | FoodListingCreateWithoutCreatedByInput[] | FoodListingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FoodListingCreateOrConnectWithoutCreatedByInput | FoodListingCreateOrConnectWithoutCreatedByInput[]
    createMany?: FoodListingCreateManyCreatedByInputEnvelope
    connect?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
  }

  export type FoodListingCreateNestedManyWithoutClaimedByInput = {
    create?: XOR<FoodListingCreateWithoutClaimedByInput, FoodListingUncheckedCreateWithoutClaimedByInput> | FoodListingCreateWithoutClaimedByInput[] | FoodListingUncheckedCreateWithoutClaimedByInput[]
    connectOrCreate?: FoodListingCreateOrConnectWithoutClaimedByInput | FoodListingCreateOrConnectWithoutClaimedByInput[]
    createMany?: FoodListingCreateManyClaimedByInputEnvelope
    connect?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutVendorInput = {
    create?: XOR<TransactionCreateWithoutVendorInput, TransactionUncheckedCreateWithoutVendorInput> | TransactionCreateWithoutVendorInput[] | TransactionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVendorInput | TransactionCreateOrConnectWithoutVendorInput[]
    createMany?: TransactionCreateManyVendorInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutRecipientInput = {
    create?: XOR<TransactionCreateWithoutRecipientInput, TransactionUncheckedCreateWithoutRecipientInput> | TransactionCreateWithoutRecipientInput[] | TransactionUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRecipientInput | TransactionCreateOrConnectWithoutRecipientInput[]
    createMany?: TransactionCreateManyRecipientInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type FoodListingUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FoodListingCreateWithoutCreatedByInput, FoodListingUncheckedCreateWithoutCreatedByInput> | FoodListingCreateWithoutCreatedByInput[] | FoodListingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FoodListingCreateOrConnectWithoutCreatedByInput | FoodListingCreateOrConnectWithoutCreatedByInput[]
    createMany?: FoodListingCreateManyCreatedByInputEnvelope
    connect?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
  }

  export type FoodListingUncheckedCreateNestedManyWithoutClaimedByInput = {
    create?: XOR<FoodListingCreateWithoutClaimedByInput, FoodListingUncheckedCreateWithoutClaimedByInput> | FoodListingCreateWithoutClaimedByInput[] | FoodListingUncheckedCreateWithoutClaimedByInput[]
    connectOrCreate?: FoodListingCreateOrConnectWithoutClaimedByInput | FoodListingCreateOrConnectWithoutClaimedByInput[]
    createMany?: FoodListingCreateManyClaimedByInputEnvelope
    connect?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<TransactionCreateWithoutVendorInput, TransactionUncheckedCreateWithoutVendorInput> | TransactionCreateWithoutVendorInput[] | TransactionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVendorInput | TransactionCreateOrConnectWithoutVendorInput[]
    createMany?: TransactionCreateManyVendorInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<TransactionCreateWithoutRecipientInput, TransactionUncheckedCreateWithoutRecipientInput> | TransactionCreateWithoutRecipientInput[] | TransactionUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRecipientInput | TransactionCreateOrConnectWithoutRecipientInput[]
    createMany?: TransactionCreateManyRecipientInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumApprovalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FoodListingUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FoodListingCreateWithoutCreatedByInput, FoodListingUncheckedCreateWithoutCreatedByInput> | FoodListingCreateWithoutCreatedByInput[] | FoodListingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FoodListingCreateOrConnectWithoutCreatedByInput | FoodListingCreateOrConnectWithoutCreatedByInput[]
    upsert?: FoodListingUpsertWithWhereUniqueWithoutCreatedByInput | FoodListingUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FoodListingCreateManyCreatedByInputEnvelope
    set?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    disconnect?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    delete?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    connect?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    update?: FoodListingUpdateWithWhereUniqueWithoutCreatedByInput | FoodListingUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FoodListingUpdateManyWithWhereWithoutCreatedByInput | FoodListingUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FoodListingScalarWhereInput | FoodListingScalarWhereInput[]
  }

  export type FoodListingUpdateManyWithoutClaimedByNestedInput = {
    create?: XOR<FoodListingCreateWithoutClaimedByInput, FoodListingUncheckedCreateWithoutClaimedByInput> | FoodListingCreateWithoutClaimedByInput[] | FoodListingUncheckedCreateWithoutClaimedByInput[]
    connectOrCreate?: FoodListingCreateOrConnectWithoutClaimedByInput | FoodListingCreateOrConnectWithoutClaimedByInput[]
    upsert?: FoodListingUpsertWithWhereUniqueWithoutClaimedByInput | FoodListingUpsertWithWhereUniqueWithoutClaimedByInput[]
    createMany?: FoodListingCreateManyClaimedByInputEnvelope
    set?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    disconnect?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    delete?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    connect?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    update?: FoodListingUpdateWithWhereUniqueWithoutClaimedByInput | FoodListingUpdateWithWhereUniqueWithoutClaimedByInput[]
    updateMany?: FoodListingUpdateManyWithWhereWithoutClaimedByInput | FoodListingUpdateManyWithWhereWithoutClaimedByInput[]
    deleteMany?: FoodListingScalarWhereInput | FoodListingScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutVendorNestedInput = {
    create?: XOR<TransactionCreateWithoutVendorInput, TransactionUncheckedCreateWithoutVendorInput> | TransactionCreateWithoutVendorInput[] | TransactionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVendorInput | TransactionCreateOrConnectWithoutVendorInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVendorInput | TransactionUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: TransactionCreateManyVendorInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVendorInput | TransactionUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVendorInput | TransactionUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<TransactionCreateWithoutRecipientInput, TransactionUncheckedCreateWithoutRecipientInput> | TransactionCreateWithoutRecipientInput[] | TransactionUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRecipientInput | TransactionCreateOrConnectWithoutRecipientInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutRecipientInput | TransactionUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: TransactionCreateManyRecipientInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutRecipientInput | TransactionUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutRecipientInput | TransactionUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FoodListingUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FoodListingCreateWithoutCreatedByInput, FoodListingUncheckedCreateWithoutCreatedByInput> | FoodListingCreateWithoutCreatedByInput[] | FoodListingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FoodListingCreateOrConnectWithoutCreatedByInput | FoodListingCreateOrConnectWithoutCreatedByInput[]
    upsert?: FoodListingUpsertWithWhereUniqueWithoutCreatedByInput | FoodListingUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FoodListingCreateManyCreatedByInputEnvelope
    set?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    disconnect?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    delete?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    connect?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    update?: FoodListingUpdateWithWhereUniqueWithoutCreatedByInput | FoodListingUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FoodListingUpdateManyWithWhereWithoutCreatedByInput | FoodListingUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FoodListingScalarWhereInput | FoodListingScalarWhereInput[]
  }

  export type FoodListingUncheckedUpdateManyWithoutClaimedByNestedInput = {
    create?: XOR<FoodListingCreateWithoutClaimedByInput, FoodListingUncheckedCreateWithoutClaimedByInput> | FoodListingCreateWithoutClaimedByInput[] | FoodListingUncheckedCreateWithoutClaimedByInput[]
    connectOrCreate?: FoodListingCreateOrConnectWithoutClaimedByInput | FoodListingCreateOrConnectWithoutClaimedByInput[]
    upsert?: FoodListingUpsertWithWhereUniqueWithoutClaimedByInput | FoodListingUpsertWithWhereUniqueWithoutClaimedByInput[]
    createMany?: FoodListingCreateManyClaimedByInputEnvelope
    set?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    disconnect?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    delete?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    connect?: FoodListingWhereUniqueInput | FoodListingWhereUniqueInput[]
    update?: FoodListingUpdateWithWhereUniqueWithoutClaimedByInput | FoodListingUpdateWithWhereUniqueWithoutClaimedByInput[]
    updateMany?: FoodListingUpdateManyWithWhereWithoutClaimedByInput | FoodListingUpdateManyWithWhereWithoutClaimedByInput[]
    deleteMany?: FoodListingScalarWhereInput | FoodListingScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<TransactionCreateWithoutVendorInput, TransactionUncheckedCreateWithoutVendorInput> | TransactionCreateWithoutVendorInput[] | TransactionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVendorInput | TransactionCreateOrConnectWithoutVendorInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVendorInput | TransactionUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: TransactionCreateManyVendorInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVendorInput | TransactionUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVendorInput | TransactionUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<TransactionCreateWithoutRecipientInput, TransactionUncheckedCreateWithoutRecipientInput> | TransactionCreateWithoutRecipientInput[] | TransactionUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRecipientInput | TransactionCreateOrConnectWithoutRecipientInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutRecipientInput | TransactionUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: TransactionCreateManyRecipientInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutRecipientInput | TransactionUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutRecipientInput | TransactionUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutListingsInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutClaimedListingsInput = {
    create?: XOR<UserCreateWithoutClaimedListingsInput, UserUncheckedCreateWithoutClaimedListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClaimedListingsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutListingInput = {
    create?: XOR<TransactionCreateWithoutListingInput, TransactionUncheckedCreateWithoutListingInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutListingInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedOneWithoutListingInput = {
    create?: XOR<TransactionCreateWithoutListingInput, TransactionUncheckedCreateWithoutListingInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutListingInput
    connect?: TransactionWhereUniqueInput
  }

  export type EnumFoodCategoryFieldUpdateOperationsInput = {
    set?: $Enums.FoodCategory
  }

  export type EnumListingTypeFieldUpdateOperationsInput = {
    set?: $Enums.ListingType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumListingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ListingStatus
  }

  export type UserUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    upsert?: UserUpsertWithoutListingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListingsInput, UserUpdateWithoutListingsInput>, UserUncheckedUpdateWithoutListingsInput>
  }

  export type UserUpdateOneWithoutClaimedListingsNestedInput = {
    create?: XOR<UserCreateWithoutClaimedListingsInput, UserUncheckedCreateWithoutClaimedListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClaimedListingsInput
    upsert?: UserUpsertWithoutClaimedListingsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClaimedListingsInput, UserUpdateWithoutClaimedListingsInput>, UserUncheckedUpdateWithoutClaimedListingsInput>
  }

  export type TransactionUpdateOneWithoutListingNestedInput = {
    create?: XOR<TransactionCreateWithoutListingInput, TransactionUncheckedCreateWithoutListingInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutListingInput
    upsert?: TransactionUpsertWithoutListingInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutListingInput, TransactionUpdateWithoutListingInput>, TransactionUncheckedUpdateWithoutListingInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionUncheckedUpdateOneWithoutListingNestedInput = {
    create?: XOR<TransactionCreateWithoutListingInput, TransactionUncheckedCreateWithoutListingInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutListingInput
    upsert?: TransactionUpsertWithoutListingInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutListingInput, TransactionUpdateWithoutListingInput>, TransactionUncheckedUpdateWithoutListingInput>
  }

  export type FoodListingCreateNestedOneWithoutTransactionInput = {
    create?: XOR<FoodListingCreateWithoutTransactionInput, FoodListingUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: FoodListingCreateOrConnectWithoutTransactionInput
    connect?: FoodListingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVendorTransactionsInput = {
    create?: XOR<UserCreateWithoutVendorTransactionsInput, UserUncheckedCreateWithoutVendorTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRecipientTransactionsInput = {
    create?: XOR<UserCreateWithoutRecipientTransactionsInput, UserUncheckedCreateWithoutRecipientTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipientTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FoodListingUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<FoodListingCreateWithoutTransactionInput, FoodListingUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: FoodListingCreateOrConnectWithoutTransactionInput
    upsert?: FoodListingUpsertWithoutTransactionInput
    connect?: FoodListingWhereUniqueInput
    update?: XOR<XOR<FoodListingUpdateToOneWithWhereWithoutTransactionInput, FoodListingUpdateWithoutTransactionInput>, FoodListingUncheckedUpdateWithoutTransactionInput>
  }

  export type UserUpdateOneRequiredWithoutVendorTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutVendorTransactionsInput, UserUncheckedCreateWithoutVendorTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorTransactionsInput
    upsert?: UserUpsertWithoutVendorTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVendorTransactionsInput, UserUpdateWithoutVendorTransactionsInput>, UserUncheckedUpdateWithoutVendorTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutRecipientTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutRecipientTransactionsInput, UserUncheckedCreateWithoutRecipientTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipientTransactionsInput
    upsert?: UserUpsertWithoutRecipientTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecipientTransactionsInput, UserUpdateWithoutRecipientTransactionsInput>, UserUncheckedUpdateWithoutRecipientTransactionsInput>
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

  export type NestedEnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
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

  export type NestedEnumFoodCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodCategory | EnumFoodCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodCategoryFilter<$PrismaModel> | $Enums.FoodCategory
  }

  export type NestedEnumListingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeFilter<$PrismaModel> | $Enums.ListingType
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type NestedEnumFoodCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodCategory | EnumFoodCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodCategory[] | ListEnumFoodCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodCategoryWithAggregatesFilter<$PrismaModel> | $Enums.FoodCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFoodCategoryFilter<$PrismaModel>
    _max?: NestedEnumFoodCategoryFilter<$PrismaModel>
  }

  export type NestedEnumListingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeWithAggregatesFilter<$PrismaModel> | $Enums.ListingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingTypeFilter<$PrismaModel>
    _max?: NestedEnumListingTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FoodListingCreateWithoutCreatedByInput = {
    foodName: string
    description: string
    quantity: string
    foodType: string
    category: $Enums.FoodCategory
    listingType?: $Enums.ListingType
    price?: number | null
    originalPrice?: number | null
    discountPercentage?: number | null
    pickupCode: string
    expiryDateTime: Date | string
    pickupLocation: string
    latitude: number
    longitude: number
    imageUrl?: string | null
    imagePublicId?: string | null
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    claimedBy?: UserCreateNestedOneWithoutClaimedListingsInput
    transaction?: TransactionCreateNestedOneWithoutListingInput
  }

  export type FoodListingUncheckedCreateWithoutCreatedByInput = {
    id?: number
    foodName: string
    description: string
    quantity: string
    foodType: string
    category: $Enums.FoodCategory
    listingType?: $Enums.ListingType
    price?: number | null
    originalPrice?: number | null
    discountPercentage?: number | null
    pickupCode: string
    expiryDateTime: Date | string
    pickupLocation: string
    latitude: number
    longitude: number
    imageUrl?: string | null
    imagePublicId?: string | null
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    claimedById?: number | null
    transaction?: TransactionUncheckedCreateNestedOneWithoutListingInput
  }

  export type FoodListingCreateOrConnectWithoutCreatedByInput = {
    where: FoodListingWhereUniqueInput
    create: XOR<FoodListingCreateWithoutCreatedByInput, FoodListingUncheckedCreateWithoutCreatedByInput>
  }

  export type FoodListingCreateManyCreatedByInputEnvelope = {
    data: FoodListingCreateManyCreatedByInput | FoodListingCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type FoodListingCreateWithoutClaimedByInput = {
    foodName: string
    description: string
    quantity: string
    foodType: string
    category: $Enums.FoodCategory
    listingType?: $Enums.ListingType
    price?: number | null
    originalPrice?: number | null
    discountPercentage?: number | null
    pickupCode: string
    expiryDateTime: Date | string
    pickupLocation: string
    latitude: number
    longitude: number
    imageUrl?: string | null
    imagePublicId?: string | null
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutListingsInput
    transaction?: TransactionCreateNestedOneWithoutListingInput
  }

  export type FoodListingUncheckedCreateWithoutClaimedByInput = {
    id?: number
    foodName: string
    description: string
    quantity: string
    foodType: string
    category: $Enums.FoodCategory
    listingType?: $Enums.ListingType
    price?: number | null
    originalPrice?: number | null
    discountPercentage?: number | null
    pickupCode: string
    expiryDateTime: Date | string
    pickupLocation: string
    latitude: number
    longitude: number
    imageUrl?: string | null
    imagePublicId?: string | null
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: number
    transaction?: TransactionUncheckedCreateNestedOneWithoutListingInput
  }

  export type FoodListingCreateOrConnectWithoutClaimedByInput = {
    where: FoodListingWhereUniqueInput
    create: XOR<FoodListingCreateWithoutClaimedByInput, FoodListingUncheckedCreateWithoutClaimedByInput>
  }

  export type FoodListingCreateManyClaimedByInputEnvelope = {
    data: FoodListingCreateManyClaimedByInput | FoodListingCreateManyClaimedByInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutVendorInput = {
    status?: $Enums.TransactionStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaid?: number | null
    isPickupCodeVerified?: boolean
    pickupCodeVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listing: FoodListingCreateNestedOneWithoutTransactionInput
    recipient: UserCreateNestedOneWithoutRecipientTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutVendorInput = {
    id?: number
    listingId: number
    recipientId: number
    status?: $Enums.TransactionStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaid?: number | null
    isPickupCodeVerified?: boolean
    pickupCodeVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutVendorInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutVendorInput, TransactionUncheckedCreateWithoutVendorInput>
  }

  export type TransactionCreateManyVendorInputEnvelope = {
    data: TransactionCreateManyVendorInput | TransactionCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutRecipientInput = {
    status?: $Enums.TransactionStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaid?: number | null
    isPickupCodeVerified?: boolean
    pickupCodeVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listing: FoodListingCreateNestedOneWithoutTransactionInput
    vendor: UserCreateNestedOneWithoutVendorTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutRecipientInput = {
    id?: number
    listingId: number
    vendorId: number
    status?: $Enums.TransactionStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaid?: number | null
    isPickupCodeVerified?: boolean
    pickupCodeVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutRecipientInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutRecipientInput, TransactionUncheckedCreateWithoutRecipientInput>
  }

  export type TransactionCreateManyRecipientInputEnvelope = {
    data: TransactionCreateManyRecipientInput | TransactionCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type FoodListingUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: FoodListingWhereUniqueInput
    update: XOR<FoodListingUpdateWithoutCreatedByInput, FoodListingUncheckedUpdateWithoutCreatedByInput>
    create: XOR<FoodListingCreateWithoutCreatedByInput, FoodListingUncheckedCreateWithoutCreatedByInput>
  }

  export type FoodListingUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: FoodListingWhereUniqueInput
    data: XOR<FoodListingUpdateWithoutCreatedByInput, FoodListingUncheckedUpdateWithoutCreatedByInput>
  }

  export type FoodListingUpdateManyWithWhereWithoutCreatedByInput = {
    where: FoodListingScalarWhereInput
    data: XOR<FoodListingUpdateManyMutationInput, FoodListingUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type FoodListingScalarWhereInput = {
    AND?: FoodListingScalarWhereInput | FoodListingScalarWhereInput[]
    OR?: FoodListingScalarWhereInput[]
    NOT?: FoodListingScalarWhereInput | FoodListingScalarWhereInput[]
    id?: IntFilter<"FoodListing"> | number
    foodName?: StringFilter<"FoodListing"> | string
    description?: StringFilter<"FoodListing"> | string
    quantity?: StringFilter<"FoodListing"> | string
    foodType?: StringFilter<"FoodListing"> | string
    category?: EnumFoodCategoryFilter<"FoodListing"> | $Enums.FoodCategory
    listingType?: EnumListingTypeFilter<"FoodListing"> | $Enums.ListingType
    price?: FloatNullableFilter<"FoodListing"> | number | null
    originalPrice?: FloatNullableFilter<"FoodListing"> | number | null
    discountPercentage?: FloatNullableFilter<"FoodListing"> | number | null
    pickupCode?: StringFilter<"FoodListing"> | string
    expiryDateTime?: DateTimeFilter<"FoodListing"> | Date | string
    pickupLocation?: StringFilter<"FoodListing"> | string
    latitude?: FloatFilter<"FoodListing"> | number
    longitude?: FloatFilter<"FoodListing"> | number
    imageUrl?: StringNullableFilter<"FoodListing"> | string | null
    imagePublicId?: StringNullableFilter<"FoodListing"> | string | null
    status?: EnumListingStatusFilter<"FoodListing"> | $Enums.ListingStatus
    createdAt?: DateTimeFilter<"FoodListing"> | Date | string
    updatedAt?: DateTimeFilter<"FoodListing"> | Date | string
    createdById?: IntFilter<"FoodListing"> | number
    claimedById?: IntNullableFilter<"FoodListing"> | number | null
  }

  export type FoodListingUpsertWithWhereUniqueWithoutClaimedByInput = {
    where: FoodListingWhereUniqueInput
    update: XOR<FoodListingUpdateWithoutClaimedByInput, FoodListingUncheckedUpdateWithoutClaimedByInput>
    create: XOR<FoodListingCreateWithoutClaimedByInput, FoodListingUncheckedCreateWithoutClaimedByInput>
  }

  export type FoodListingUpdateWithWhereUniqueWithoutClaimedByInput = {
    where: FoodListingWhereUniqueInput
    data: XOR<FoodListingUpdateWithoutClaimedByInput, FoodListingUncheckedUpdateWithoutClaimedByInput>
  }

  export type FoodListingUpdateManyWithWhereWithoutClaimedByInput = {
    where: FoodListingScalarWhereInput
    data: XOR<FoodListingUpdateManyMutationInput, FoodListingUncheckedUpdateManyWithoutClaimedByInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutVendorInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutVendorInput, TransactionUncheckedUpdateWithoutVendorInput>
    create: XOR<TransactionCreateWithoutVendorInput, TransactionUncheckedCreateWithoutVendorInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutVendorInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutVendorInput, TransactionUncheckedUpdateWithoutVendorInput>
  }

  export type TransactionUpdateManyWithWhereWithoutVendorInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutVendorInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    listingId?: IntFilter<"Transaction"> | number
    vendorId?: IntFilter<"Transaction"> | number
    recipientId?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusFilter<"Transaction"> | $Enums.PaymentStatus
    amountPaid?: FloatNullableFilter<"Transaction"> | number | null
    isPickupCodeVerified?: BoolFilter<"Transaction"> | boolean
    pickupCodeVerifiedAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutRecipientInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutRecipientInput, TransactionUncheckedUpdateWithoutRecipientInput>
    create: XOR<TransactionCreateWithoutRecipientInput, TransactionUncheckedCreateWithoutRecipientInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutRecipientInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutRecipientInput, TransactionUncheckedUpdateWithoutRecipientInput>
  }

  export type TransactionUpdateManyWithWhereWithoutRecipientInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutRecipientInput>
  }

  export type UserCreateWithoutListingsInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    approvalStatus?: $Enums.ApprovalStatus
    organizationName?: string | null
    phoneNumber?: string | null
    documentUrl?: string | null
    documentPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    claimedListings?: FoodListingCreateNestedManyWithoutClaimedByInput
    vendorTransactions?: TransactionCreateNestedManyWithoutVendorInput
    recipientTransactions?: TransactionCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutListingsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    approvalStatus?: $Enums.ApprovalStatus
    organizationName?: string | null
    phoneNumber?: string | null
    documentUrl?: string | null
    documentPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    claimedListings?: FoodListingUncheckedCreateNestedManyWithoutClaimedByInput
    vendorTransactions?: TransactionUncheckedCreateNestedManyWithoutVendorInput
    recipientTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
  }

  export type UserCreateWithoutClaimedListingsInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    approvalStatus?: $Enums.ApprovalStatus
    organizationName?: string | null
    phoneNumber?: string | null
    documentUrl?: string | null
    documentPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: FoodListingCreateNestedManyWithoutCreatedByInput
    vendorTransactions?: TransactionCreateNestedManyWithoutVendorInput
    recipientTransactions?: TransactionCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutClaimedListingsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    approvalStatus?: $Enums.ApprovalStatus
    organizationName?: string | null
    phoneNumber?: string | null
    documentUrl?: string | null
    documentPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: FoodListingUncheckedCreateNestedManyWithoutCreatedByInput
    vendorTransactions?: TransactionUncheckedCreateNestedManyWithoutVendorInput
    recipientTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutClaimedListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClaimedListingsInput, UserUncheckedCreateWithoutClaimedListingsInput>
  }

  export type TransactionCreateWithoutListingInput = {
    status?: $Enums.TransactionStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaid?: number | null
    isPickupCodeVerified?: boolean
    pickupCodeVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: UserCreateNestedOneWithoutVendorTransactionsInput
    recipient: UserCreateNestedOneWithoutRecipientTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutListingInput = {
    id?: number
    vendorId: number
    recipientId: number
    status?: $Enums.TransactionStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaid?: number | null
    isPickupCodeVerified?: boolean
    pickupCodeVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutListingInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutListingInput, TransactionUncheckedCreateWithoutListingInput>
  }

  export type UserUpsertWithoutListingsInput = {
    update: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
  }

  export type UserUpdateWithoutListingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claimedListings?: FoodListingUpdateManyWithoutClaimedByNestedInput
    vendorTransactions?: TransactionUpdateManyWithoutVendorNestedInput
    recipientTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutListingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claimedListings?: FoodListingUncheckedUpdateManyWithoutClaimedByNestedInput
    vendorTransactions?: TransactionUncheckedUpdateManyWithoutVendorNestedInput
    recipientTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserUpsertWithoutClaimedListingsInput = {
    update: XOR<UserUpdateWithoutClaimedListingsInput, UserUncheckedUpdateWithoutClaimedListingsInput>
    create: XOR<UserCreateWithoutClaimedListingsInput, UserUncheckedCreateWithoutClaimedListingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClaimedListingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClaimedListingsInput, UserUncheckedUpdateWithoutClaimedListingsInput>
  }

  export type UserUpdateWithoutClaimedListingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: FoodListingUpdateManyWithoutCreatedByNestedInput
    vendorTransactions?: TransactionUpdateManyWithoutVendorNestedInput
    recipientTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutClaimedListingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: FoodListingUncheckedUpdateManyWithoutCreatedByNestedInput
    vendorTransactions?: TransactionUncheckedUpdateManyWithoutVendorNestedInput
    recipientTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type TransactionUpsertWithoutListingInput = {
    update: XOR<TransactionUpdateWithoutListingInput, TransactionUncheckedUpdateWithoutListingInput>
    create: XOR<TransactionCreateWithoutListingInput, TransactionUncheckedCreateWithoutListingInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutListingInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutListingInput, TransactionUncheckedUpdateWithoutListingInput>
  }

  export type TransactionUpdateWithoutListingInput = {
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    isPickupCodeVerified?: BoolFieldUpdateOperationsInput | boolean
    pickupCodeVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: UserUpdateOneRequiredWithoutVendorTransactionsNestedInput
    recipient?: UserUpdateOneRequiredWithoutRecipientTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    isPickupCodeVerified?: BoolFieldUpdateOperationsInput | boolean
    pickupCodeVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodListingCreateWithoutTransactionInput = {
    foodName: string
    description: string
    quantity: string
    foodType: string
    category: $Enums.FoodCategory
    listingType?: $Enums.ListingType
    price?: number | null
    originalPrice?: number | null
    discountPercentage?: number | null
    pickupCode: string
    expiryDateTime: Date | string
    pickupLocation: string
    latitude: number
    longitude: number
    imageUrl?: string | null
    imagePublicId?: string | null
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutListingsInput
    claimedBy?: UserCreateNestedOneWithoutClaimedListingsInput
  }

  export type FoodListingUncheckedCreateWithoutTransactionInput = {
    id?: number
    foodName: string
    description: string
    quantity: string
    foodType: string
    category: $Enums.FoodCategory
    listingType?: $Enums.ListingType
    price?: number | null
    originalPrice?: number | null
    discountPercentage?: number | null
    pickupCode: string
    expiryDateTime: Date | string
    pickupLocation: string
    latitude: number
    longitude: number
    imageUrl?: string | null
    imagePublicId?: string | null
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: number
    claimedById?: number | null
  }

  export type FoodListingCreateOrConnectWithoutTransactionInput = {
    where: FoodListingWhereUniqueInput
    create: XOR<FoodListingCreateWithoutTransactionInput, FoodListingUncheckedCreateWithoutTransactionInput>
  }

  export type UserCreateWithoutVendorTransactionsInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    approvalStatus?: $Enums.ApprovalStatus
    organizationName?: string | null
    phoneNumber?: string | null
    documentUrl?: string | null
    documentPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: FoodListingCreateNestedManyWithoutCreatedByInput
    claimedListings?: FoodListingCreateNestedManyWithoutClaimedByInput
    recipientTransactions?: TransactionCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutVendorTransactionsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    approvalStatus?: $Enums.ApprovalStatus
    organizationName?: string | null
    phoneNumber?: string | null
    documentUrl?: string | null
    documentPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: FoodListingUncheckedCreateNestedManyWithoutCreatedByInput
    claimedListings?: FoodListingUncheckedCreateNestedManyWithoutClaimedByInput
    recipientTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutVendorTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVendorTransactionsInput, UserUncheckedCreateWithoutVendorTransactionsInput>
  }

  export type UserCreateWithoutRecipientTransactionsInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    approvalStatus?: $Enums.ApprovalStatus
    organizationName?: string | null
    phoneNumber?: string | null
    documentUrl?: string | null
    documentPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: FoodListingCreateNestedManyWithoutCreatedByInput
    claimedListings?: FoodListingCreateNestedManyWithoutClaimedByInput
    vendorTransactions?: TransactionCreateNestedManyWithoutVendorInput
  }

  export type UserUncheckedCreateWithoutRecipientTransactionsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    approvalStatus?: $Enums.ApprovalStatus
    organizationName?: string | null
    phoneNumber?: string | null
    documentUrl?: string | null
    documentPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: FoodListingUncheckedCreateNestedManyWithoutCreatedByInput
    claimedListings?: FoodListingUncheckedCreateNestedManyWithoutClaimedByInput
    vendorTransactions?: TransactionUncheckedCreateNestedManyWithoutVendorInput
  }

  export type UserCreateOrConnectWithoutRecipientTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecipientTransactionsInput, UserUncheckedCreateWithoutRecipientTransactionsInput>
  }

  export type FoodListingUpsertWithoutTransactionInput = {
    update: XOR<FoodListingUpdateWithoutTransactionInput, FoodListingUncheckedUpdateWithoutTransactionInput>
    create: XOR<FoodListingCreateWithoutTransactionInput, FoodListingUncheckedCreateWithoutTransactionInput>
    where?: FoodListingWhereInput
  }

  export type FoodListingUpdateToOneWithWhereWithoutTransactionInput = {
    where?: FoodListingWhereInput
    data: XOR<FoodListingUpdateWithoutTransactionInput, FoodListingUncheckedUpdateWithoutTransactionInput>
  }

  export type FoodListingUpdateWithoutTransactionInput = {
    foodName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    expiryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutListingsNestedInput
    claimedBy?: UserUpdateOneWithoutClaimedListingsNestedInput
  }

  export type FoodListingUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    expiryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    claimedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutVendorTransactionsInput = {
    update: XOR<UserUpdateWithoutVendorTransactionsInput, UserUncheckedUpdateWithoutVendorTransactionsInput>
    create: XOR<UserCreateWithoutVendorTransactionsInput, UserUncheckedCreateWithoutVendorTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVendorTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVendorTransactionsInput, UserUncheckedUpdateWithoutVendorTransactionsInput>
  }

  export type UserUpdateWithoutVendorTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: FoodListingUpdateManyWithoutCreatedByNestedInput
    claimedListings?: FoodListingUpdateManyWithoutClaimedByNestedInput
    recipientTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutVendorTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: FoodListingUncheckedUpdateManyWithoutCreatedByNestedInput
    claimedListings?: FoodListingUncheckedUpdateManyWithoutClaimedByNestedInput
    recipientTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserUpsertWithoutRecipientTransactionsInput = {
    update: XOR<UserUpdateWithoutRecipientTransactionsInput, UserUncheckedUpdateWithoutRecipientTransactionsInput>
    create: XOR<UserCreateWithoutRecipientTransactionsInput, UserUncheckedCreateWithoutRecipientTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecipientTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecipientTransactionsInput, UserUncheckedUpdateWithoutRecipientTransactionsInput>
  }

  export type UserUpdateWithoutRecipientTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: FoodListingUpdateManyWithoutCreatedByNestedInput
    claimedListings?: FoodListingUpdateManyWithoutClaimedByNestedInput
    vendorTransactions?: TransactionUpdateManyWithoutVendorNestedInput
  }

  export type UserUncheckedUpdateWithoutRecipientTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    organizationName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: FoodListingUncheckedUpdateManyWithoutCreatedByNestedInput
    claimedListings?: FoodListingUncheckedUpdateManyWithoutClaimedByNestedInput
    vendorTransactions?: TransactionUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type FoodListingCreateManyCreatedByInput = {
    id?: number
    foodName: string
    description: string
    quantity: string
    foodType: string
    category: $Enums.FoodCategory
    listingType?: $Enums.ListingType
    price?: number | null
    originalPrice?: number | null
    discountPercentage?: number | null
    pickupCode: string
    expiryDateTime: Date | string
    pickupLocation: string
    latitude: number
    longitude: number
    imageUrl?: string | null
    imagePublicId?: string | null
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    claimedById?: number | null
  }

  export type FoodListingCreateManyClaimedByInput = {
    id?: number
    foodName: string
    description: string
    quantity: string
    foodType: string
    category: $Enums.FoodCategory
    listingType?: $Enums.ListingType
    price?: number | null
    originalPrice?: number | null
    discountPercentage?: number | null
    pickupCode: string
    expiryDateTime: Date | string
    pickupLocation: string
    latitude: number
    longitude: number
    imageUrl?: string | null
    imagePublicId?: string | null
    status?: $Enums.ListingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: number
  }

  export type TransactionCreateManyVendorInput = {
    id?: number
    listingId: number
    recipientId: number
    status?: $Enums.TransactionStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaid?: number | null
    isPickupCodeVerified?: boolean
    pickupCodeVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyRecipientInput = {
    id?: number
    listingId: number
    vendorId: number
    status?: $Enums.TransactionStatus
    paymentStatus?: $Enums.PaymentStatus
    amountPaid?: number | null
    isPickupCodeVerified?: boolean
    pickupCodeVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodListingUpdateWithoutCreatedByInput = {
    foodName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    expiryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claimedBy?: UserUpdateOneWithoutClaimedListingsNestedInput
    transaction?: TransactionUpdateOneWithoutListingNestedInput
  }

  export type FoodListingUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    expiryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claimedById?: NullableIntFieldUpdateOperationsInput | number | null
    transaction?: TransactionUncheckedUpdateOneWithoutListingNestedInput
  }

  export type FoodListingUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    expiryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claimedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FoodListingUpdateWithoutClaimedByInput = {
    foodName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    expiryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutListingsNestedInput
    transaction?: TransactionUpdateOneWithoutListingNestedInput
  }

  export type FoodListingUncheckedUpdateWithoutClaimedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    expiryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    transaction?: TransactionUncheckedUpdateOneWithoutListingNestedInput
  }

  export type FoodListingUncheckedUpdateManyWithoutClaimedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    foodType?: StringFieldUpdateOperationsInput | string
    category?: EnumFoodCategoryFieldUpdateOperationsInput | $Enums.FoodCategory
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    originalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    pickupCode?: StringFieldUpdateOperationsInput | string
    expiryDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupLocation?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutVendorInput = {
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    isPickupCodeVerified?: BoolFieldUpdateOperationsInput | boolean
    pickupCodeVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: FoodListingUpdateOneRequiredWithoutTransactionNestedInput
    recipient?: UserUpdateOneRequiredWithoutRecipientTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    isPickupCodeVerified?: BoolFieldUpdateOperationsInput | boolean
    pickupCodeVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    isPickupCodeVerified?: BoolFieldUpdateOperationsInput | boolean
    pickupCodeVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutRecipientInput = {
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    isPickupCodeVerified?: BoolFieldUpdateOperationsInput | boolean
    pickupCodeVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: FoodListingUpdateOneRequiredWithoutTransactionNestedInput
    vendor?: UserUpdateOneRequiredWithoutVendorTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    isPickupCodeVerified?: BoolFieldUpdateOperationsInput | boolean
    pickupCodeVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaid?: NullableFloatFieldUpdateOperationsInput | number | null
    isPickupCodeVerified?: BoolFieldUpdateOperationsInput | boolean
    pickupCodeVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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