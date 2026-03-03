function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let pivot = Math.floor((left + right) / 2);
    console.log(`Left:${left}: ${nums[left]}`);
    console.log(`Pivot:${pivot} : ${nums[pivot]}`);
    console.log(`Right:${right} : ${nums[right]}`);

    if (nums[pivot] === target) return pivot;

    if (target > nums[pivot]) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
  return -1;
}
// search([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]);
console.log(search([-1, 0, 2, 4, 6, 8], 4)); //3

// search([-1, 0, 2, 4, 6, 8], 3); //-1
