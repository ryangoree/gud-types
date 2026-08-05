import { describe, expect, it } from "vitest";
import { helloWorld } from "#/hello";

describe("helloWorld", () => {
  it("returns 'Hello, World!'", () => {
    const msg = helloWorld();
    expect(msg).toBe("Hello, World!");
  });
});
