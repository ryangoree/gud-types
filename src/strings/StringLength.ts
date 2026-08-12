/**
 * Get the length of a string.
 *
 * @example
 * ```ts
 * type L = Length<"hello">; // 5
 * ```
 */
export type StringLength<T extends string, Acc extends any[] = []> = T extends `${string}${infer R}`
  ? StringLength<R, [...Acc, unknown]>
  : Acc["length"];
