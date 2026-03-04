# Binary Search

Given an array of distinct integers `nums`, sorted in ascending order, and an integer `target`.

Implement a function to search for `target` within `nums`. If it exists, return its index, otherwise return `-1`.

> Your solution must run in O(log n) time.

## Examples

### Example 1

**Input:** `nums = [-1,0,2,4,6,8], target = 4`  
**Output:** `3`

### Example 2

**Input:** `nums = [-1,0,2,4,6,8], target = 3`  
**Output:** `-1`

## Approach

Start with 3 pointers: `start`, `middle`, and `end`.

1. Check if the target is smaller or greater than the value at `middle`
2. If smaller, move `end` to `middle - 1` and recalculate `middle`
3. If greater, move `start` to `middle + 1` and recalculate `middle`
4. Each time `middle` is recalculated, check if `nums[middle] === target`, if so return `middle`
5. If `start` exceeds `end`, the entire array has been searched and `target` was not found, return `-1`

## Run Tests

\```bash
node --test test.js
\```
