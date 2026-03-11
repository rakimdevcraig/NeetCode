const { describe, it } = require("node:test");
const assert = require("node:assert");
const MinStack = require("./index");

describe("MinStack", () => {
  it("returns null for top and getMin on an empty stack", () => {
    const stack = new MinStack();

    assert.strictEqual(stack.top(), null);
    assert.strictEqual(stack.getMin(), null);
  });

  it("pushes one value correctly", () => {
    const stack = new MinStack();

    stack.push(5);

    assert.strictEqual(stack.top(), 5);
    assert.strictEqual(stack.getMin(), 5);
  });

  it("keeps the minimum when pushing larger values", () => {
    const stack = new MinStack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    assert.strictEqual(stack.top(), 3);
    assert.strictEqual(stack.getMin(), 1);
  });

  it("updates the minimum when pushing a smaller value", () => {
    const stack = new MinStack();

    stack.push(6);
    stack.push(8);
    stack.push(5);

    assert.strictEqual(stack.top(), 5);
    assert.strictEqual(stack.getMin(), 5);
  });

  it("keeps the minimum after popping a non-min value", () => {
    const stack = new MinStack();

    stack.push(6);
    stack.push(8);
    stack.push(5);
    stack.push(10);

    stack.pop();

    assert.strictEqual(stack.top(), 5);
    assert.strictEqual(stack.getMin(), 5);
  });

  it("updates the minimum after popping the current min", () => {
    const stack = new MinStack();

    stack.push(6);
    stack.push(8);
    stack.push(5);
    stack.push(10);

    stack.pop();
    stack.pop();

    assert.strictEqual(stack.top(), 8);
    assert.strictEqual(stack.getMin(), 6);
  });

  it("handles duplicate minimum values", () => {
    const stack = new MinStack();

    stack.push(2);
    stack.push(1);
    stack.push(1);
    stack.push(3);

    assert.strictEqual(stack.getMin(), 1);

    stack.pop();
    assert.strictEqual(stack.getMin(), 1);

    stack.pop();
    assert.strictEqual(stack.getMin(), 1);

    stack.pop();
    assert.strictEqual(stack.getMin(), 2);
  });

  it("handles negative numbers", () => {
    const stack = new MinStack();

    stack.push(0);
    stack.push(-2);
    stack.push(-1);

    assert.strictEqual(stack.top(), -1);
    assert.strictEqual(stack.getMin(), -2);
  });

  it("returns null after popping all values", () => {
    const stack = new MinStack();

    stack.push(4);
    stack.push(2);

    stack.pop();
    stack.pop();

    assert.strictEqual(stack.top(), null);
    assert.strictEqual(stack.getMin(), null);
  });
});
