import type { UnionKey } from "#/unions/UnionKey";

/**
 * Get a union of all values for `K` from all members of `T`.
 *
 * @example
 * ```ts
 * type Foo = { a: string; b?: number };
 * type Bar = { a: boolean; b: bigint; c: string };
 *
 * type FooBar_A = UnionValue<Foo | Bar, "a">;
 * // => string | boolean
 *
 * type FooBar_B = UnionValue<Foo | Bar, "b">;
 * // => number | bigint | undefined
 *
 * type FooBar_C = UnionValue<Foo | Bar, "c">;
 * // => string | undefined
 * ```
 */
export type UnionValue<T, K extends UnionKey<T> | (string & {})> = T extends T
  ? K extends keyof T
    ? T[K]
    : undefined
  : never;
