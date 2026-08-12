/**
 * Get a boolean for whether a type is exactly `unknown`
 */
export type IsUnknown<T> = unknown extends T ? ([T] extends [null] ? false : true) : false;
