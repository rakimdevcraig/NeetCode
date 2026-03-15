const { describe, it } = require("node:test");
const assert = require("node:assert");
const dailyTemperatures = require("./index");

describe("Daily Temps", () => {
  it("returns an array of 0's because there's no warmer days", () => {
    assert.deepStrictEqual(dailyTemperatures([22, 21, 20]), [0, 0, 0]);
  });

  it("returns the proper array for this mixed group of temps", () => {
    assert.deepStrictEqual(
      dailyTemperatures([30, 38, 30, 36, 35, 40, 28]),
      [1, 4, 1, 2, 1, 0, 0],
    );
  });
});
