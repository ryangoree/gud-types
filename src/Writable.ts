import type { Eval } from "#/Eval";
import type { AnyObject } from "#/objects/AnyObject";

/**
 * The opposite of {@linkcode Readonly<T>}. Make all properties in `T` mutable.
 *
 * @typeParam T - The type to make writable.
 * @typeParam TDeep - If `true`, recursively make all properties writable.
 */
export type Writable<T, TDeep extends boolean = false> = {
  -readonly [P in keyof T]: TDeep extends true
    ? NonNullable<T[P]> extends AnyObject | any[]
      ? Eval<Writable<T[P], TDeep>>
      : T[P]
    : T[P];
};
