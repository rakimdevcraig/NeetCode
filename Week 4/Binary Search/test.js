const { describe, it } = require("node:test");
const assert = require("node:assert");
const search = require("./index");

describe("binary search", () => {
  it("returns index if target number is found", () => {
    assert.strictEqual(search([-1, 0, 2, 4, 6, 8], 4), 3);
  });

  it("returns -1 if target number isn't found", () => {
    assert.strictEqual(search([-1, 0, 2, 4, 6, 8], 3), -1);
  });
});
