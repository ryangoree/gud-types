import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/exports/index.ts"],
  format: ["esm", "cjs"],
  target: "esnext",
  minify: true,
  shims: true,
  sourcemap: true,
  publint: true,
});
