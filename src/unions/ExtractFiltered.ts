import type { ApplyFilter } from "#/ApplyFilter";
import type { RequiredValueKey } from "#/keys/RequiredValueKey";

/**
 * Extracts and transforms members of a union type `T` based on a filter type
 * `F`.
 *
 * It's similar to `Extract<T, U>` but rather than omitting members of `T` that
 * aren't wholly assignable to `U`, (e.g., omitting `{ a: string }` when `U` is
 * `{ a: 'foo' }`), it narrows values of `T` that the filter type `F` is
 * assignable to (e.g., `{ a: string }` is narrowed to `{ a: 'foo' }`).
 *
 * For each member in `T` (distributing over unions), if it includes all
 * required keys (as determined by {@linkcode RequiredValueKey<F>}), the type is
 * transformed by applying the filter:
 * - For each key `K` in `T` that exists in `F`, if `T[K]` is assignable to
 *   `F[K]`, the original type is kept.
 * - Otherwise, the type from `F[K]` is substituted in.
 *
 * **Important:** If the resulting transformed type is not assignable to the
 * original member of `T`, that union member is omitted from the output.
 *
 * @typeParam T - The union type whose members are to be filtered and
 * transformed.
 * @typeParam F - The filter type specifying required keys and their desired
 * types.
 *
 * @example
 * ```ts
 * type Filtered = ExtractFiltered<
 *   | { i: 0; a: string; c: boolean }
 *   | { i: 1; b: number }
 *   | { i: 2; c: boolean },
 *   { i: number; c: true }
 * >;
 * // => { i: 0; a: string; c: true } | { i: 2; c: true };
 *
 * type FilteredPartial = ExtractFiltered<{ a: string; b: number; c: boolean }, { a: 'foo' }>;
 * // => { a: 'foo'; b: number; c: boolean }
 * ```
 *
 * @internal
 */
export type ExtractFiltered<T, F = {}> = T extends T // <- Distribute union
  ? RequiredValueKey<F> extends keyof T
    ? ApplyFilter<T, F>
    : never // <- Omit if entry is missing a required value
  : never;
