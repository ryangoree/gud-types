/**
 * Narrow a base type to a specific subtype if the subtype is assignable to it,
 * otherwise keep the base type.
 *
 * @example
 * ```ts
 * type a = NarrowTo<string, "foo">  // "foo"
 * type b = NarrowTo<string, 123>    // string
 * ```
 *
 * @internal
 */
export type NarrowTo<Base, Specific> = Specific extends Base ? Specific : Base;
