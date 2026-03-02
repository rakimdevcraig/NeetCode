# Minimum Window Substring

**Difficulty:** Hard

## Problem

Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".

You may assume that the correct output is always unique.

Example 1:

Input: s = "OUZODYXAZV", t = "XYZ"

Output: "YXAZ"
Explanation: "YXAZ" is the shortest substring that includes "X", "Y", and "Z" from string t.

Example 2:

Input: s = "xyz", t = "xyz"

Output: "xyz"
Example 3:

Input: s = "x", t = "xy"

Output: ""

## Approach

I used a **sliding window** approach with a frequency map. First, I built a
frequency map of all characters needed from `t`. Then I used two pointers
to expand and shrink a window over `s`, tracking how many unique characters
still need to be satisfied. When all characters are satisfied, I record the
window if it's the smallest found so far, then shrink the window and repeat.
