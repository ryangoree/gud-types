/**
 * A boolean indicating whether `T` is a plain, record-like object (e.g., `{ a:
 * string }`), excluding functions, arrays/tuples, and common built-ins (`Map`,
 * `Set`, `Date`, etc.).
 *
 * @example
 * ```ts
 * type A = IsPlainObject<{ a: string }>;       // true
 * type B = IsPlainObject<() => void>;          // false
 * type C = IsPlainObject<string[]>;            // false
 * type D = IsPlainObject<Map<string, number>>; // false
 * type E = IsPlainObject<Date>;                // false
 * type F = IsPlainObject<string | { a: 1 }>;   // boolean
 * ```
 */
export type IsPlainObject<T> = [T] extends [never]
  ? false
  : T extends
        | ((...args: never) => unknown)
        | readonly unknown[]
        | Date
        | RegExp
        | Promise<unknown>
        | ReadonlySet<unknown> // Will also match ReadonlyMap
        | WeakSet<WeakKey>
        | WeakMap<WeakKey, unknown>
    ? false
    : T extends object
      ? true
      : false;
