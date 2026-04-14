# Problem

**Top K Frequent Elements**

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

**Example 1:**

- **Input:** `nums = [1,2,2,3,3,3], k = 2`
- **Output:** `[2,3]`

**Example 2:**

- **Input:** `nums = [7,7], k = 1`
- **Output:** `[7]`

---

# Approach

Use an array to store at each index the frequency a number appears. For example, at index 3 we store any number that appears 3 times, and so on for every other index.
