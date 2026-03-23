function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const pivot = Math.floor((start + end) / 2);

    if (nums[pivot] === target) return pivot;

    if (target > nums[pivot]) {
      start = pivot + 1;
    } else {
      end = pivot - 1;
    }
  }
  return -1;
}

module.exports = search;
