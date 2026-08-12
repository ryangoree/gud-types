import type { AnyObject } from "#/objects/AnyObject";
import type { UnionKey } from "#/unions/UnionKey";

/**
 * Construct a type in which only a single member of `T` is valid at a time.
 *
 * @example
 * ```ts
 * type U = OneOf<{ a: string } | { b: number }>;
 * // {
 * //   a: string;
 * //   b?: undefined;
 * // } | {
 * //   a?: undefined;
 * //   b: number;
 * // }
 * ```
 */
export type OneOf<T extends AnyObject> =
  UnionKey<T> extends infer K extends PropertyKey
    ? T extends T
      ? T & {
          [_ in Exclude<K, keyof T>]?: never;
        }
      : never
    : never;
