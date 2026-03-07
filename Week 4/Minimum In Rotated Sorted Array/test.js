const { describe, it } = require("node:test");
const assert = require("node:assert");
const minValue = require("./index");

describe("matrix search", () => {
  it("returns 1 as the smallest value", () => {
    assert.strictEqual(minValue([3, 4, 5, 6, 1, 2]), 1);
  });

  it("returns 0 as the smallest value", () => {
    assert.strictEqual(minValue([4, 5, 0, 1, 2, 3]), 0);
  });

  it("returns 4 as the smallest value", () => {
    assert.strictEqual(minValue([4, 5, 6, 7]), 4);
  });
});
