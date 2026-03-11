class MinStack {
  constructor() {
    this.first = null;
  }

  push(value) {
    let min;

    if (this.first === null) {
      min = value;
    } else {
      if (value < this.first.min) {
        min = value;
      } else {
        min = this.first.min;
      }
    }

    const newNode = new Node(value, min);
    newNode.next = this.first;
    this.first = newNode;
  }

  pop() {
    if (!this.first) return null;

    const removed = this.first;
    this.first = this.first.next;
    return removed.val;
  }

  top() {
    if (!this.first) return null;
    return this.first.val;
  }

  getMin() {
    if (!this.first) return null;
    return this.first.min;
  }
}

class Node {
  constructor(val, min) {
    this.val = val;
    this.min = min;
  }
}

module.exports = MinStack;
