import { expect, test, describe } from "bun:test";
import { placeholder } from "@kotkoroid/platform-sdk/src"

describe("placeholder", () => {
  describe("should return true when", () => {
    test("the function is called", () => {
      const result = placeholder()

      expect(result).toBeTrue()
    });
  })
});
