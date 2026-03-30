### Problem: Binary Tree Level Order Traversal

Given a binary tree root, return the level order traversal of it as a nested list, where each sublist contains the values of nodes at a particular level in the tree, from left to right.

---

### Example 1:

**Input:** `root = [1,2,3,4,5,6,7]`  
**Output:** `[[1],[2,3],[4,5,6,7]]`

### Example 2:

**Input:** `root = [1]`  
**Output:** `[[1]]`

### Example 3:

**Input:** `root = []`  
**Output:** `[]`

---

### Approach:

Use a queue to process the tree one level at a time: for each loop, record how many nodes are currently in the queue, process exactly that many nodes, and collect their values into one array. As you process each node, add its left and right children to the queue so the next loop handles the next level.
