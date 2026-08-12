/**
 * Get {@linkcode T}, ensuring that all keys from {@linkcode K} are present. If
 * any keys are missing, a type error will be thrown.
 *
 * @typeParam K - The keys to ensure are present.
 * @typeParam T - An object that should contain all keys from {@linkcode K}.
 * @typeParam TDefault - The default value to use for missing keys.
 *
 * @example
 * ```ts
 * type Name = 'bob' | 'alice' | 'charlie';
 *
 * type IncompleteNameIdMap = KeyMap<
 *   Name,
 *   {
 *     bob: 1;
 *     alice: 2;
 *   }
 *   // ^ ❌ Error: Property 'charlie' is missing in type ...
 * >;
 *
 * type NameIdMap = KeyMap<
 *   Name,
 *   {
 *     bob: 1;
 *     alice: 2;
 *     charlie: 3;
 *   }
 * >; // => ✅ No error
 * ```
 *
 * You can also provide a default value for missing keys:
 *
 * ```ts
 * type NameIdMap = KeyMap<
 *   Name,
 *   {
 *     bob: 1;
 *     alice: 2;
 *   },
 *   number
 * >; // => { bob: 1; alice: 2; charlie: number }
 * ```
 */
export type KeyMap<
  K extends string | number,
  T extends [TDefault] extends [never] ? Record<K, unknown> : Partial<Record<K, unknown>>,
  TDefault = never,
> = {
  [TKey in K]: TKey extends keyof T
    ? undefined extends T[TKey]
      ? Required<T>[TKey] | TDefault
      : T[TKey]
    : TDefault;
};
