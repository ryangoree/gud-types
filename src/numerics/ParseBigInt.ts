import type { StringTemplatePrimitive } from "#/strings/StringTemplatePrimitive";

export type ParseBigInt<N extends StringTemplatePrimitive> =
  `${N}` extends `${infer P extends bigint}` ? P : never;
