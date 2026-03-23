const { describe, it } = require("node:test");
const assert = require("node:assert");
const matrixSearch = require("./index");

describe("matrix search", () => {
  it("returns true if target number is found", () => {
    assert.strictEqual(
      matrixSearch(
        [
          [1, 2, 4, 8],
          [10, 11, 12, 13],
          [14, 20, 30, 40],
        ],
        10,
      ),
      true,
    );
  });

  it("returns false if target number isn't found", () => {
    assert.strictEqual(
      matrixSearch(
        [
          [1, 2, 4, 8],
          [10, 11, 12, 13],
          [14, 20, 30, 40],
        ],
        15,
      ),
      false,
    );
  });
});
