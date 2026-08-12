/**
 * Get a union of all keys in `T` that are required, not `never`, and
 * not assignable to undefined.
 */
export type RequiredValueKey<T> = keyof {
  [K in keyof T as [T[K]] extends [never] ? never : undefined extends T[K] ? never : K]: any;
};
