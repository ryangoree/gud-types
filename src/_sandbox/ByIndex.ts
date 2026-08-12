/**
 * Converts array or tuple `T` to an object keyed by index.
 *
 * @example
 * ```ts
 * type ExampleTuple = ByIndex<[string, number]>; // { 0: string, 1: number }
 * type ExampleArray = ByIndex<(string | number)[]>; // { [x: number]: string | number }
 * ```
 */
export type ByIndex<T extends any[]> = {
  [K in Extract<keyof T, `${number}`>]: T[K];
};
