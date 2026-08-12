import type { NumericPrimitive } from "#/numerics/NumericPrimitive";
import type { CutStarting } from "#/tuples/CutStarting";

export type GetStarting<TTuple extends any[], TCount extends NumericPrimitive> = TTuple extends [
  ...infer Rest,
  ...CutStarting<TTuple, TCount>,
]
  ? Rest
  : [];
