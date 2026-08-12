/**
 * Replace properties in `T` with properties in `U`.
 */
export type Replace<T, U> = Omit<T, keyof U> & U;
