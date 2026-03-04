# Search a 2D Matrix

Given an `m x n` 2D integer array `matrix` and an integer `target`.

**Constraints:**

- Each row is sorted in non-decreasing order
- The first integer of every row is greater than the last integer of the previous row

Return `true` if `target` exists within the matrix, `false` otherwise.

> Can you write a solution that runs in O(log(m \* n)) time?

## Examples

### Example 1

![Example 1](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/7ca61f56-00d4-4fa0-26cf-56809028ac00/public)

**Input:** `matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10`  
**Output:** `true`

### Example 2

![Example 2](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/f25f2085-ce04-4447-9cee-f0a66c32a300/public)

**Input:** `matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15`  
**Output:** `false`

## Approach

We're gonna use the middle row and run binary search on that until we find a row that the target element is in or that it doesnt exist. If we find a row that the element exists in we run binary search until we find that element and return true.

## Run Tests

\```bash
node --test test.js
\```
