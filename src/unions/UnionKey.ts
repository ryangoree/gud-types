/**
 * Get a union of all keys from all members of `T`.
 */
export type UnionKey<T> = T extends T ? keyof T : never;
