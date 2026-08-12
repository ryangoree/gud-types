import type { NumericPrimitive } from "#/numerics/NumericPrimitive";
import type { BuildTuple } from "#/tuples/BuildTuple";

export type CutEnding<TTuple extends any[], TCount extends NumericPrimitive> = TTuple extends [
  ...infer Rest,
  ...BuildTuple<TCount>,
]
  ? Rest
  : [];
