// Contains Duplicate
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:
// Input: nums = [1, 2, 3, 3]
// Output: true

// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false

function hasDuplicate(nums) {
  const numTracker = {};
  for (let num of nums) {
    if (numTracker[num]) return true;
    numTracker[num] = 1;
  }
  return false;
}
console.log(hasDuplicate([1, 2, 3, 3]));
console.log(hasDuplicate([1, 2, 3, 4]));
