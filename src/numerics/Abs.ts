import type { NumericPrimitive } from "#/numerics/NumericPrimitive";
import type { ParseNumeric } from "#/numerics/ParseNumeric";

export type Abs<N extends NumericPrimitive> = `${N}` extends `-${infer A extends number}`
  ? ParseNumeric<A, N>
  : N;
