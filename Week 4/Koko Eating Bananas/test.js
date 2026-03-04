const { describe, it } = require("node:test");
const assert = require("node:assert");
const kokobananas = require("./index");

describe("binary search for banana speed", () => {
  it("returns 2 as the minimum speed", () => {
    assert.strictEqual(kokobananas([1, 4, 3, 2], 9), 2);
  });

  it("returns 25 as the minimum speed", () => {
    assert.strictEqual(kokobananas([25, 10, 23, 4], 4), 25);
  });
});
