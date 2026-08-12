/**
 * Make all properties in `T` whose keys are in the union `K` optional. Similar
 * to `Partial` but only applies to a subset of keys.
 */
export type PartialBy<T, K extends keyof T | (string & {})> = Omit<T, K> &
  Partial<Pick<T, K & keyof T>>;
