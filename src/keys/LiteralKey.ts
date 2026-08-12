/**
 * One of the *explicit* property names of {@linkcode T}, with any `string` or
 * `number` index signatures stripped out.
 *
 * @example
 * ```ts
 * type A = LiteralKey<{
 *   [k: string]: any;
 *   id: string;
 * }>;
 * // => "id"
 *
 * type B = LiteralKey<
 *   | {
 *       [k: string]: any;
 *       name: string;
 *     }
 *   | { [k: number]: any; 0: number }
 * >;
 * // => "name" | 0
 * ```
 */
export type LiteralKey<T> = T extends T
  ? keyof {
      [K in keyof T as K & Exclude<number | string, K>]: any;
    }
  : never;
