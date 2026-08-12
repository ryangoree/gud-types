import type { NumericPrimitive } from "#/numerics/NumericPrimitive";
import type { ParseBigInt } from "#/numerics/ParseBigInt";
import type { ParseNumber } from "#/numerics/ParseNumber";
import type { StringTemplatePrimitive } from "#/strings/StringTemplatePrimitive";

export type ParseNumeric<
  N extends StringTemplatePrimitive,
  T extends NumericPrimitive = number,
> = T extends bigint ? ParseBigInt<N> : ParseNumber<N>;
