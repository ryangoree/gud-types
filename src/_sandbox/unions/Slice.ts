import type { Abs } from "#/numerics/Abs";
import type { IsNegative } from "#/numerics/IsNegative";
import type { ParseNumber } from "#/numerics/ParseNumber";
import type { SliceEnd } from "#/tuples/SliceEnd";
import type { SliceStart } from "#/tuples/SliceStart";

export type Slice<
  Tuple extends any[],
  StartIndex extends number,
  EndIndex extends number = Tuple["length"],
> =
  SliceStart<Tuple, StartIndex> extends infer S extends any[]
    ? IsNegative<EndIndex> extends true
      ? SliceEnd<S, Abs<EndIndex>>
      : Subtract<Tuple["length"], EndIndex> extends 0
        ? S
        : SliceEnd<S, ParseNumber<`-${Subtract<Tuple["length"], EndIndex>}`>>
    : [];
