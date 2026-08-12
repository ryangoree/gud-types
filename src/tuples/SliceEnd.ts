import type { Abs } from "#/numerics/Abs";
import type { IsNegative } from "#/numerics/IsNegative";
import type { NumericPrimitive } from "#/numerics/NumericPrimitive";
import type { CutEnding } from "#/tuples/CutEnding";
import type { GetStarting } from "#/tuples/GetStarting";

export type SliceEnd<TTuple extends any[], TEndIndex extends NumericPrimitive> =
  IsNegative<TEndIndex> extends true
    ? CutEnding<TTuple, Abs<TEndIndex>>
    : GetStarting<TTuple, TEndIndex>;
