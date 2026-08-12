import type { RequiredValueKey } from "#/keys/RequiredValueKey";

/**
 * Get a union of all keys in `T` that are options, `never`, or assignable to
 * undefined. (The opposite of {@linkcode RequiredValueKey<T>}).
 */
export type OptionalValueKey<T> = Exclude<keyof T, RequiredValueKey<T>>;
