const { describe, it } = require("node:test");
const assert = require("node:assert");
const carFleet = require("./index");

describe("Car Fleet", () => {
  it("returns 1 for this group of cars", () => {
    assert.strictEqual(carFleet(10, [1, 4], [3, 2]), 1);
  });

  it("returns 3 for this group of cars", () => {
    assert.strictEqual(carFleet(10, [4, 1, 0, 7], [2, 2, 1, 1]), 3);
  });
});
