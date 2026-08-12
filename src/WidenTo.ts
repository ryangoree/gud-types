/**
 * Widen a specific type to a base type if it's assignable to the base,
 * otherwise keep the specific type.
 *
 * @example
 * ```ts
 * type a = WidenTo<"foo", string>   // string
 * type b = WidenTo<123, string>     // 123
 * ```
 *
 * @internal
 */
export type WidenTo<Specific, Base> = Specific extends Base ? Base : Specific;
