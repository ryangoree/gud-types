/**
 * Get a union of all keys on `T` that are functions
 */
export type FunctionKey<T> = keyof {
  [K in keyof T as Required<T>[K] extends Function ? K : never]: never;
};
