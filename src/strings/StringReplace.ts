/**
 * @example
 * ```ts
 * type Foo = StringReplace<'foo bar baz', ' ', '-'>;
 * // => 'foo-bar-baz'
 */
export type StringReplace<
  S extends string,
  TSearchValue extends string,
  TReplaceValue extends string,
> = S extends `${infer Before}${TSearchValue}${infer After}`
  ? `${Before}${TReplaceValue}${StringReplace<After, TSearchValue, TReplaceValue>}`
  : S;
