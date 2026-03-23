# Find Minimum in Rotated Sorted Array

You are given an array of length `n` which was originally sorted in ascending
order. It has now been rotated between `1` and `n` times. For example, the
array `nums = [1,2,3,4,5,6]` might become:

- `[3,4,5,6,1,2]` if it was rotated 4 times.
- `[1,2,3,4,5,6]` if it was rotated 6 times.

Notice that rotating the array 4 times moves the last four elements to the
beginning. Rotating the array 6 times produces the original array.

Assuming all elements in the rotated sorted array `nums` are unique, return the
minimum element of this array.

> A solution that runs in O(n) time is trivial — can you write an algorithm
> that runs in O(log n) time?

## Examples

| Input                  | Output |
| ---------------------- | ------ |
| `nums = [3,4,5,6,1,2]` | `1`    |
| `nums = [4,5,0,1,2,3]` | `0`    |
| `nums = [4,5,6,7]`     | `4`    |

## Approach

To find the minimum in O(log n), we use binary search by comparing `mid` to
`right`:

- If `nums[mid] > nums[right]`, the right half contains the minimum — search
  right.
- If `nums[mid] < nums[right]`, the array is sorted from `mid` to `right`, so
  the minimum is in the left half — search left.

## Run Tests

```bash
node --test test.js
```
