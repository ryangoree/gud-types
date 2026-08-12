export type IsUnion<T> = [T] extends infer U extends any[]
  ? T extends T
    ? U extends [T]
      ? false
      : true
    : never
  : never;
