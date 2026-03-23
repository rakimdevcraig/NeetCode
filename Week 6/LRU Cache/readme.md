# LRU Cache

## Problem

`LRUCache(int capacity)` Initialize the LRU cache of size capacity.

`int get(int key)` Return the value corresponding to the key if the key exists, otherwise return -1.

`void put(int key, int value)` Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the introduction of the new pair causes the cache to exceed its capacity, remove the least recently used key.

A key is considered used if a get or a put operation is called on it.

Ensure that get and put each run in **O(1)** average time complexity.

### Example 1:

**Input:**

```text
["LRUCache", [2], "put", [1, 10], "get", [1], "put", [2, 20], "put", [3, 30], "get", [2], "get", [1]]
```

**Output:**

```text
[null, null, 10, null, null, 20, -1]
```

**Explanation:**

```javascript
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 10); // cache: {1=10}
lRUCache.get(1);     // return 10
lRUCache.put(2, 20); // cache: {1=10, 2=20}
lRUCache.put(3, 30); // cache: {2=20, 3=30}, key=1 was evicted
lRUCache.get(2);     // returns 20
lRUCache.get(1);     // return -1 (not found)
```

### Constraints:

- `1 <= capacity <= 100`
- `0 <= key <= 1000`
- `0 <= value <= 1000`

## Approach

We use a Map to store key-value pairs so we can quickly look up items. We also use a doubly linked list to remember the order in which items were used — the most recently used ones go toward the front, and the oldest ones fall toward the back. Every time we get or add an item, we move it to the front. If the cache is full and we need to add something new, we remove the one at the back — the least recently used.
