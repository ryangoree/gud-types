import type { AnyObject } from "#/objects/AnyObject";
import type { PropertyPath } from "#/objects/PropertyPath";

/**
 * The type of the value at dot-notation path `TPath` in `T`. Nested paths are
 * resolved by traversing plain, record-like objects; non-plain-object values
 * (arrays, `Date`, etc.) are treated as leaves.
 *
 * @example
 * ```ts
 * type Obj = { a: string; b: { c: number; d: { e: boolean } } };
 * type A = Property<Obj, "a">;     // string
 * type B = Property<Obj, "b.c">;   // number
 * type C = Property<Obj, "b.d.e">; // boolean
 * ```
 */
export type Property<T extends AnyObject, TPath extends PropertyPath<T>> = _Property<T, TPath>;

type _Property<
  T extends AnyObject,
  TPath extends string,
> = TPath extends `${infer K}.${infer TRest}` ? _Property<T[K], TRest> : T[TPath];
