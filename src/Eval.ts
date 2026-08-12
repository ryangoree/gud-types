/**
 * Forces TypeScript to evaluate and expand a type instead of displaying it as a
 * reference.
 */
// The `& {}` intersection trick works because it forces TypeScript to create a
// new object type rather than just referencing the existing one.
export type Eval<T> = { [K in keyof T]: T[K] } & {};
