# Longest Repeating Character Replacement

**Difficulty:** Medium

## Problem

Given a string `s` consisting of only uppercase English characters and an integer
`k`, you may replace up to `k` characters with any other uppercase English
character. Return the length of the longest substring that contains only one
distinct character.

## Examples

**Example 1:**

- Input: `s = "XYYX"`, `k = 2`
- Output: `4`
- Explanation: Either replace the `X`s with `Y`s, or replace the `Y`s with `X`s.

**Example 2:**

- Input: `s = "AAABABB"`, `k = 1`
- Output: `5`

## Approach: Sliding Window

Keep a window of characters and track how many replacements would be needed to
make them all the same. The replacements needed is just the window size minus
the count of the most frequent character in the window. If that exceeds k,
shrink the window from the left. Track the longest valid window seen.
