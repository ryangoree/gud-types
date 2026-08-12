import type { NumericPrimitive } from "#/numerics/NumericPrimitive";

export type IsNegative<N extends NumericPrimitive> = `${N}` extends `-${number}` ? true : false;
