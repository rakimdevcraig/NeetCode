# Permutation in String

**Difficulty:** Medium

## Problem

Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation
of `s1`, or `false` otherwise. Both strings only contain lowercase letters.

## Examples

**Example 1:**

- Input: `s1 = "abc"`, `s2 = "lecabee"`
- Output: `true`
- Explanation: The substring `"cab"` is a permutation of `"abc"` and is present in `"lecabee"`.

**Example 2:**

- Input: `s1 = "abc"`, `s2 = "lecaabee"`
- Output: `false`

## Approach: Sliding Window with Frequency Maps

Build frequency maps for `s1` and the first window of `s2` (same size as `s1`).
Then slide the window across `s2`, adding the new right character and removing
the left character each step. After each slide, compare the two frequency maps —
if they match, a permutation was found.

**Complexity**

- Time: O(n)
- Space: O(1)
