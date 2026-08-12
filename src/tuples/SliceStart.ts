import type { Abs } from "#/numerics/Abs";
import type { IsNegative } from "#/numerics/IsNegative";
import type { NumericPrimitive } from "#/numerics/NumericPrimitive";
import type { CutStarting } from "#/tuples/CutStarting";
import type { GetEnding } from "#/tuples/GetEnding";

export type SliceStart<TTuple extends any[], TStartIndex extends NumericPrimitive> =
  IsNegative<TStartIndex> extends true
    ? GetEnding<TTuple, Abs<TStartIndex>>
    : CutStarting<TTuple, TStartIndex>;
