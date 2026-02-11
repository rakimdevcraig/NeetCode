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
  let a = 0;
  let b = nums.length - 1;
  while (a < b) {
    let sum = nums[a] + nums[b];
    console.log(sum, a, b);
    if (sum === target) {
      return [a, b];
    } else if (sum > target) {
      b--;
    } else {
      a++;
    }
  }
}

console.log(twoSum([3, 4, 5, 6], 7));
console.log(twoSum([4, 5, 6], 10));
console.log(twoSum([5, 5], 10));
