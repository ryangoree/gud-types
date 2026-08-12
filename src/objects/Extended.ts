import type { AnyObject } from "#/objects/AnyObject";

/**
 * Get a superset of `T` that allows additional arbitrary properties.
 *
 * @example
 *
 * ```ts
 * interface Order {
 *   account: `0x${string}`;
 *   amount: bigint;
 * }
 *
 * const order1: Order = {
 *   account: "0x123",
 *   amount: 100n,
 *   getStatus() { ... }
 *   // ^ Error: Object literal may only specify known properties, and 'getStatus' does not exist in type 'Order'.
 * };
 *
 * // No errors! 🎉
 * const order2: Extended<Order> = {
 *   account: "0x123",
 *   amount: 100n,
 *   getStatus() { ... }
 * };
 * ```
 *
 */
export type Extended<T extends AnyObject> = T & Record<Exclude<PropertyKey, keyof T>, any>;
