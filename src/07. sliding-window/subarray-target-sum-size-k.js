// subarray target sum size k
// Write a function that takes in an array of numbers, a target sum,
// and a size k as arguments. The function should return the number of
// subarrays of size k that sum to the target.

// You can assume that k is less than or equal to the length of the
// input array.

const subarrayTargetSumSizeK = (nums, target, k) => {
  let currentSum = 0;
  for (let i = 0; i < k; i += 1) {
    currentSum += nums[i];
  }
  let count = currentSum === target ? 1 : 0;

  for (let i = 0; i < nums.length - k; i += 1) {
    currentSum -= nums[i];
    currentSum += nums[i + k];
    if (currentSum === target) {
      count += 1;
    }
  }

  return count;
};

const nums = [2, 3, 2, 2, 3, 1, 3, 8, 5, 0, 2, 4];
const target = 7;
const k = 3;

console.log(subarrayTargetSumSizeK(nums, target, k));
// The 5 subarrays of size 3 whose sum is 7 are:
//   [2,3,2]
//   [3,2,2]
//   [2,2,3]
//   [3,1,3]
//   [5,0,2]
