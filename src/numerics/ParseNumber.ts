import type { StringTemplatePrimitive } from "#/strings/StringTemplatePrimitive";

export type ParseNumber<N extends StringTemplatePrimitive> =
  `${N}` extends `${infer P extends number}` ? P : never;
