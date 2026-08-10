// max subarray sum size k
// Write a function that takes in an array of numbers and a size k as
// arguments. The function should return the maximum sum of subarrays
// that contain exactly k elements.

// You can assume that k is less than or equal to the length of the
// input array.

const maxSubarraySumSizeK = (nums, k) => {
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  let maxSum = currentSum;

  for (let i = 0; i < nums.length - k; i++) {
    currentSum -= nums[i];
    currentSum += nums[i + k];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
};

const nums = [1, 2, 5, 2, 8, 1, 5];
const k = 2;

console.log(maxSubarraySumSizeK(nums, k)); // 10
