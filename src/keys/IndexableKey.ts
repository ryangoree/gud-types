import type { LiteralKey } from "#/keys/LiteralKey";

/**
 * Get a union of all possible keys for {@linkcode T}, including literal
 * properties and any explicit `string` or `number` index signatures.
 *
 * It distributes over unions and preserves literal keys alongside index
 * signatures, ensuring nice type inference for autocompletion.
 *
 * @example
 * ```ts
 * type A = IndexableKey<{
 *   [k: string]: any;
 *   id: string;
 * }>;
 * // => "id" | (string & {})
 *
 * type B = IndexableKey<
 *   | {
 *       [k: string]: any;
 *       name: string;
 *     }
 *   | { [k: number]: any; 0: number }
 * >;
 * // => "name" | 0 | (string & {}) | (number & {})
 * ```
 */
export type IndexableKey<T> =
  | LiteralKey<T>
  | (T extends T
      ? // Using array types to perform structural comparisons and prevent
        // simplification of the union to a single type.
          | (string[] extends (keyof T)[] ? string & {} : never)
          | (string[] extends (keyof T)[]
              ? never
              : number[] extends (keyof T)[]
                ? number & {}
                : never)
      : never);
