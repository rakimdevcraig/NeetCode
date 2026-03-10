const { describe, it } = require("node:test");
const assert = require("node:assert");
const isValid = require("./index");

describe("Valid Parentheses", () => {
  it("returns true if the string is valid", () => {
    assert.strictEqual(isValid("[]"), true);
  });

  it("returns true if the string is valid", () => {
    assert.strictEqual(isValid("([{}])"), true);
  });

  it("returns false if the string is invalid", () => {
    assert.strictEqual(isValid("[(])"), false);
  });
});
