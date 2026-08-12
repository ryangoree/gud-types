/**
 * Convert members of a union to an intersection.
 *
 * @example
 * ```ts
 * type Union = { a: number } | { b: string };
 * type Intersection = UnionToIntersection<Union>;
 * // { a: number } & { b: string }
 * ```
 */
export type UnionToIntersection<T> = (T extends T ? (member: T) => any : never) extends (
  member: infer R,
) => any
  ? R
  : never;
