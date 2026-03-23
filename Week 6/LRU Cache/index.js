class Node {
  constructor(key = 0, value = 0) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addToFront(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const node = this.cache.get(key);
    this.remove(node);
    this.addToFront(node);
    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.remove(node);
      this.addToFront(node);
    } else {
      if (this.cache.size >= this.capacity) {
        const lruNode = this.tail.prev;
        this.remove(lruNode);
        this.cache.delete(lruNode.key);
      }

      const newNode = new Node(key, value);
      this.cache.set(key, newNode);
      this.addToFront(newNode);
    }
  }
}
