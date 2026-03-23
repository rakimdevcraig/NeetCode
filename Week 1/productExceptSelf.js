// Products of Array Except Self
// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in
// O
// (
// n
// )
// O(n) time without using the division operation?

// Example 1:

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]
// Example 2:

// Input: nums = [-1,0,1,2,3]

// Output: [0,-6,0,0,0]

function productExceptSelf(nums) {
  let prefix = [];

  // Move left in the input array
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefix[i] = 1;
    } else {
      prefix[i] = nums[i - 1] * prefix[i - 1];
    }
  }

  let suffix = [];

  // Move right in the input array
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      suffix[i] = 1;
    } else {
      suffix[i] = nums[i + 1] * suffix[i + 1];
    }
  }

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 4, 6]));
