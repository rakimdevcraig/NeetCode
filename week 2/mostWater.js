// Container With Most Water

// You are given an integer array heights where heights[i] represents the height of the
// i
// t
// h
// i
// th
//   bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

// Example 1:

// Input: height = [1,7,2,5,4,7,3,6]

// Output: 36
// Example 2:

// Input: height = [2,2,2]

// Output: 4

function mostWater(heights) {
  let left = 0;
  let right = heights.length - 1;
  let max = 0;

  while (left < right) {
    const h = Math.min(heights[left], heights[right]);
    const width = right - left;
    const area = h * width;

    max = Math.max(max, area);

    // Move the shorter line
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
console.log(mostWater([1, 7, 2, 5, 4, 7, 3, 6]));
console.log(mostWater([2, 2, 2]));
