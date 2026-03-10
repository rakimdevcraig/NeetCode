const { describe, it } = require("node:test");
const assert = require("node:assert");
const rotatedArraySearch = require("./index");

describe("rotatedArray", () => {
  it("returns 4 if the number 1 is in the array", () => {
    assert.strictEqual(rotatedArraySearch([3, 4, 5, 6, 1, 2], 1), 4);
  });

  it("returns -1 if the target is 4", () => {
    assert.strictEqual(rotatedArraySearch([3, 5, 6, 0, 1, 2], 4), -1);
  });
});
