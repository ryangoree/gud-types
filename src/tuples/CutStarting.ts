import type { NumericPrimitive } from "#/numerics/NumericPrimitive";
import type { BuildTuple } from "#/tuples/BuildTuple";

export type CutStarting<TTuple extends any[], TCount extends NumericPrimitive> = TTuple extends [
  ...BuildTuple<TCount>,
  ...infer Rest,
]
  ? Rest
  : [];
