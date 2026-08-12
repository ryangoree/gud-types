/**
 * Get a union of all keys from {@linkcode TTargetMap} that have a value that
 * matches the value of the key {@linkcode TSourceKey} in
 * {@linkcode TSourceMap}.
 *
 * @example
 * ```ts
 * type matchingKey = KeyWithMatchingValue<
 *   { a: string; b: string; c: number },
 *   'a'
 * >;
 * // => "a" | "b"
 *
 * type matchingKey = KeyWithMatchingValue<
 *   { a: string; b: string; c: number },
 *   'a',
 *   { foo: string; bar: number; baz: string }
 * >;
 * // => "foo" | "baz"
 * ```
 */
export type KeyWithMatchingValue<
  TSourceMap,
  TSourceKey extends keyof TSourceMap,
  TTargetMap = TSourceMap,
> = {
  [K in keyof TTargetMap]: TTargetMap[K] extends TSourceMap[TSourceKey] ? K : never;
}[keyof TTargetMap];
