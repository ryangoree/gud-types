/**
 * @example
 * ```ts
 * type Foo = SplitString<'foo,bar,baz', ','>;
 * // => 'foo' | 'bar' | 'baz'
 */
export type SplitString<
  S extends string,
  TSplitter extends string = " ",
> = S extends `${infer Part}${TSplitter}${infer Rest}` ? Part | SplitString<Rest, TSplitter> : S;
