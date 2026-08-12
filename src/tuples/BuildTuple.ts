import type { NumericPrimitive } from "#/numerics/NumericPrimitive";

export type BuildTuple<
  TLength extends NumericPrimitive,
  TTuple extends any[] = [],
  TFillType = unknown,
> = `${TLength}` extends `-${number}`
  ? never
  : `${TTuple["length"]}` extends `${TLength}`
    ? TTuple
    : BuildTuple<TLength, [...TTuple, TFillType], TFillType>;
