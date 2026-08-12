import type { IndexableKey } from "#/keys/IndexableKey";
import type { AnyObject } from "#/objects/AnyObject";
import type { IsPlainObject } from "#/objects/IsPlainObject";

// TODO: Add keys for tuple and array items

/**
 * A dot-notation string path to a property in `T`, including nested paths into
 * plain, record-like objects. Non-plain-object values (arrays, `Date`, etc.)
 * are treated as leaves and not traversed further.
 *
 * @example
 * ```ts
 * type Obj = { a: string; b: { c: number; d: { e: boolean } } };
 * type A = PropertyPath<Obj>; // "a" | "b" | "b.c" | "b.d" | "b.d.e"
 *
 * type WithArray = { items: string[]; name: string };
 * type B = PropertyPath<WithArray>; // "items" | "name"
 * ```
 */
export type PropertyPath<T extends AnyObject> = keyof {
  [K in Exclude<IndexableKey<T>, symbol> as
    | K
    | (IsPlainObject<T[K]> extends true ? `${K}.${PropertyPath<T[K]>}` : never)]: never;
};
