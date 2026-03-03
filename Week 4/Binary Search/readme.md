Binary Search

You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

Your solution must run in O(logn) time.

Example 1:

Input: nums = [-1,0,2,4,6,8], target = 4

Output: 3
Example 2:

Input: nums = [-1,0,2,4,6,8], target = 3

Output: -1

Approach:
Start with 3 pointers a start, middle and end. We check if the targets value is smaller or bigger than our middle point value. If smaller we move our end point to be 1 index less than our middle and recalculate our middle, if bigger we make our start 1 index greater than the middle and recalculate our middle. Everytime we recalculate the middle we check if the middle value is equal to the target element if so we return the index of middle. If we end up with our start element greater than our end element that means we've searched the entire array and haven't been able to find our target element so we return -1.
