/**
 * Make all properties in `T` whose keys are in the union `K` required. Similar
 * to `Required` but only applies to a subset of keys.
 */
export type RequiredBy<T, K extends keyof T | (string & {})> = Omit<T, K> &
  Required<Pick<T, K & keyof T>>;
