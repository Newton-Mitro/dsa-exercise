// all even
// Write a function, allEven, that takes in an array of numbers as an argument. The function should return a boolean indicating whether
// or not every element of the array is an even number.

// You can assume that the array is non-empty.

const nums = [4, 90, 68, 6, -2];
const allEven = (nums) => {
  for (let num of nums) {
    if (num % 2 !== 0) return false;
  }
  return true;
};

console.log(allEven(nums));
