/**
 * Extract from `T` those types that `U` is assignable to. Similar to `Extract<T, U>`, but includes
 * types in `T` that are wider than those in `U`.
 */
export type ExtractWide<T, U> = T extends T ? (U extends T ? T : never) : never;
