import type { NumericPrimitive } from "#/numerics/NumericPrimitive";
import type { ParseNumeric } from "#/numerics/ParseNumeric";
import type { BuildTuple } from "#/tuples/BuildTuple";

// export type AbsDiff<A extends NumericPrimitive, B extends NumericPrimitive> = P;

export type Add<A extends NumericPrimitive, B extends NumericPrimitive> = ParseNumeric<
  [...BuildTuple<A>, ...BuildTuple<B>]["length"] & number,
  A
>;

type Subtract<A extends NumericPrimitive, B extends NumericPrimitive> =
  BuildTuple<A> extends [...BuildTuple<B>, ...infer Rest]
    ? Rest["length"]
    : // : ParseNumeric<`-${Subtract<B, A>}`, A>;
      Subtract<B, A>;

type t = Add<5n, 2>; // =>
type t2 = Subtract<5n, -2>; // =>

//  5 +  2 =  7  =     a+b

//  5 + -2 =  3  =     a-b, take larger sign
//  5 + -7 = -2  = abs b-a, take larger sign

// -5 +  2 = -3  = abs a-b, take larger sign
// -5 +  7 =  2  = abs b-a, take larger sign

// Add
//   op = same sign ? + : -
//   left = same sign ? left : max(abs(a),abs(b))
//   right = same sign ? right : min(abs(a),abs(b))
//   sign = same sign ? a.sign : max(abs(a), abs(b)).sign

//  5 -  2 =  3  =     a-b

//  5 - -2 =  7  = abs a+b
//  5 - -7 = 12  = abs b+a

// -5 -  2 = -7  = abs a+b, take larger sign
// -5 -  7 =  2  = abs b-a

// Add
//   op = same sign ? + : -
//   left = same sign ? left : max(a,b)
//   right = same sign ? right : min(a,b)
//   sign = same sign ? a.sign : max(abs(a), abs(b)).sign
