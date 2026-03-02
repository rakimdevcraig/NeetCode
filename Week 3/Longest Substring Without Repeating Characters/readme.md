# Longest Substring Without Repeating Characters

Given a string `s`, find the length of the longest substring without duplicate
characters.

A substring is a contiguous sequence of characters within a string.

## Examples

**Example 1:**

- Input: `s = "zxyzxyz"`
- Output: `3`
- Explanation: The string `"xyz"` is the longest without duplicate characters.

**Example 2:**

- Input: `s = "xxxx"`
- Output: `1`

## Approach

We use a sliding window with an object to track which characters are in our
window. We start with an empty window at the beginning of the string and
expand it to the right one character at a time.

- If the character isn't in our window, we add it and expand right.
- If it is, we have a duplicate, so we shrink the window from the left by
  removing characters one at a time until the duplicate is gone.

Every time we expand the window, we check if it's the largest we've seen so
far and save it.
