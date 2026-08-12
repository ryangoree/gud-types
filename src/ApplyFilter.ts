import type { NarrowTo } from "#/NarrowTo";

/**
 * Transforms a type `T` based on a filter type `F`, returning `never` if the
 * result is not assignable to `T`.
 *
 * It's similar to creating the intersection `T & F`, but returns `never` if the
 * types don't overlap.
 *
 * @typeParam T - The type to be transformed.
 * @typeParam F - The filter type specifying the desired transformations.
 *
 * @example
 * ```ts
 * type Filtered = ApplyFilter<
 *   { a: string; b: true },
 *   { a: "foo"; b: boolean }
 * >;
 * // => { a: 'foo'; b: true }
 *
 * type Filtered2 = ApplyFilter<{ a: string }, { a: number }>;
 * // => never
 * ```
 *
 * @internal
 */
export type ApplyFilter<T, F> = {
  [K in keyof T]: K extends keyof F
    ? NarrowTo<F[K], T[K]> // <- Leave value as-is if it fits the filter
    : T[K]; // <- Leave value as-is if the key isn't in the filter
} extends infer TF extends T
  ? TF // <- Return the transformed type if it's assignable to T
  : never;
