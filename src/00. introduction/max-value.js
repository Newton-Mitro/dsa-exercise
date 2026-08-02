// Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

// Solve this without using any built-in array methods. You can assume that the array is non-empty.

const nums = [2, 6, 13, 4, 1];
const maxValue = (nums) => {
  let max = -Infinity;
  for (let num of nums) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

console.log(maxValue(nums));
