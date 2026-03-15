const { describe, it } = require("node:test");
const assert = require("node:assert");
const evalRPN = require("./index");

describe("Evaluate RPN", () => {
  it("returns 1 for this group of operations", () => {
    assert.strictEqual(evalRPN(["1", "2", "+", "3", "*", "4", "-"]), 5);
  });
});
