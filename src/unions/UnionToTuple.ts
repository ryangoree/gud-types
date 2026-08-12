/**
 * Convert a union type to a tuple containing each member of the union.
 *
 * @example
 * ```ts
 * type Tuple = UnionToTuple<"a" | "b" | "c">;
 * // ["a", "b", "c"]
 * ```
 */
export type UnionToTuple<U> = [U] extends infer TTuple extends any[]
  ? U extends infer TMember
    ? TTuple extends [TMember]
      ? TTuple
      : [TMember, ...UnionToTuple<Exclude<TTuple[number], TMember>>]
    : never
  : never;
