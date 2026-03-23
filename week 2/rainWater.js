// Trapping Rain Water

// You are given an array of non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.

// Return the maximum area of water that can be trapped between the bars.

// Example 1:

// Input: height = [0,2,0,3,1,0,1,3,2,1]

// Output: 9

function rainWater(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let total = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        total += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        total += rightMax - height[right];
      }
      right--;
    }
  }
  return total;
}
console.log(rainWater([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]));
