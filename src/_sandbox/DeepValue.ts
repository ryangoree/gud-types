/**
 * Get a union of value types for `T` by unwrapping it recursively.
 *
 * @example
 * ```ts
 * type Scalar = string;
 * type ScalarValue = DeepValue<Scalar>;
 * // => string
 *
 * type NestedArray = [string, [number, [boolean]]];
 * type NestedArrayValue = DeepValue<NestedArray>;
 * // => string | number | boolean
 *
 * type Object = { a: string, b: { c: number, d: { e: boolean } } };
 * type ObjectValue = DeepValue<Object>;
 * // => string | number | boolean
 *
 * type Async = Promise<string>;
 * type AsyncValue = DeepValue<Async>;
 * // => string
 * ```
 *
 * @see
 * [TypeScript - Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)
 */
export type DeepValue<T> =
  T extends ReadonlyArray<infer U>
    ? DeepValue<U>
    : T extends Record<string, infer U>
      ? DeepValue<U>
      : T extends PromiseLike<infer U>
        ? DeepValue<U>
        : T;
