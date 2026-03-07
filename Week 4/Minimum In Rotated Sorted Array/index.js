function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
    console.log(nums[left], nums[middle], nums[right]);
  }
  return nums[left];
}

console.log(findMin([3, 4, 5, 6, 1, 2])); // 1
// findMin([4,5,0,1,2,3]) // 0
// findMin([4,5,6,7]) //4

module.exports = findMin;
