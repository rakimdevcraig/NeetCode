# Problem: Last Stone Weight

You are given an array of integers `stones` where `stones[i]` represents the weight of the ith stone.

Run the following simulation:

- At each step, choose the two heaviest stones with weights `x` and `y` and smash them together.
  - If `x == y`, both stones are destroyed.
  - If `x < y`, the stone of weight `x` is destroyed, and the stone of weight `y` becomes `y - x`.
- Continue until there is no more than one stone remaining.

Return the weight of the last remaining stone, or `0` if none remain.

## Example 1

Input: `stones = [2,3,6,2,4]`  
Output: `1`

Explanation:

- Smash `6` and `4` → array becomes `[2,3,2,2]`
- Smash `3` and `2` → array becomes `[1,2,2]`
- Smash `2` and `2` → array becomes `[1]`

## Example 2

Input: `stones = [1,2]`  
Output: `1`

---

# Approach

Use a loop that repeatedly sorts the array, pops the two largest stones, and replaces them with their difference (if nonzero). When fewer than two stones remain, return the remaining stone’s weight or `0` if none exist.
