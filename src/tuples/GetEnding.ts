import type { NumericPrimitive } from "#/numerics/NumericPrimitive";
import type { CutEnding } from "#/tuples/CutEnding";

export type GetEnding<TTuple extends any[], TCount extends NumericPrimitive> = TTuple extends [
  ...CutEnding<TTuple, TCount>,
  ...infer Rest,
]
  ? Rest
  : [];
