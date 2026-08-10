// max subarray product size k
// Write a function that takes in an array of numbers and a size k as
// arguments. The function should return the maximum product of
// subarrays that contain exactly k elements.

// You can assume that k is less than or equal to the length of the
// input array.

// You can assume that numbers of the array are non-zero.

const maxSubarrayProductSizeK = (nums, k) => {
  let currentProduct = 1;
  for (let i = 0; i < k; i++) {
    currentProduct *= nums[i];
  }

  let maxProduct = currentProduct;

  for (let i = 0; i < nums.length - k; i++) {
    currentProduct /= nums[i];
    currentProduct *= nums[i + k];
    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
    }
  }

  return maxProduct;
};

const nums = [4, 2, 1, -9, 8, 2, 3];
const k = 3;

console.log(maxSubarrayProductSizeK(nums, k)); // 48
