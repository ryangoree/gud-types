/**
 * Convert all properties in `T` whose values are of type `U` to type `V`. If
 * `T` is `U`, convert `T` itself to `V`.
 *
 * @example
 * ```ts
 * type Converted = Convert<{ a: string, b: number }, string, number>;
 * // { a: number, b: number }
 *
 * type ConvertedSimple = Convert<100n, bigint, number>;
 * // number
 *
 * type NotConverted = Convert<"foo", bigint, number>;
 * // "foo"
 * ```
 */
export type Convert<T, U, V> = T extends U
  ? V
  : T extends Array<infer Inner>
    ? Convert<Inner, U, V>[]
    : T extends object
      ? { [K in keyof T]: Convert<T[K], U, V> }
      : T;
