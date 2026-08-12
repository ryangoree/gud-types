import type { NumericPrimitive } from "#/numerics/NumericPrimitive";
import type { ParseNumeric } from "#/numerics/ParseNumeric";

export type FlipSign<N extends NumericPrimitive> = `${N}` extends `${0}`
  ? N
  : `${N}` extends `-${infer P extends number}`
    ? ParseNumeric<P, N>
    : `-${N}` extends `${infer P extends number}`
      ? ParseNumeric<P, N>
      : never;
