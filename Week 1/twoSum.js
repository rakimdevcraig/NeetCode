// Two Sum
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
// Return the answer with the smaller index first.

// Example 1:
// Input:
// nums = [3,4,5,6], target = 7
// Output: [0,1]
// Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

// Example 2:
// Input: nums = [4,5,6], target = 10
// Output: [0,2]

// Example 3:
// Input: nums = [5,5], target = 10
// Output: [0,1]

function twoSum(nums, target) {
  const tracker = {};
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (difference in tracker) {
      return [tracker[difference], i];
    } else {
      tracker[nums[i]] = i;
    }
  }
}

console.log(twoSum([2, 1, 5, 3], 4)); //[1,3]
console.log(twoSum([3, 4, 5, 6], 7)); //[0,1]
console.log(twoSum([4, 5, 6], 10)); //[0,2]
console.log(twoSum([5, 5], 10)); //[0,1]
