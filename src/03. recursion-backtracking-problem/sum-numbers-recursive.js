// Sum Numbers Recursive
// Problem

// Given a number n, return:

// 1 + 2 + 3 + ... + n

// Example:

// sumNumbers(5) → 15

const sumNumbers = (n) => {
  if (n === 0) return 0;

  return n + sumNumbers(n - 1);
};

console.log(sumNumbers(5)); // 15

// Sum Array Recursive
// Problem

// Given an array of numbers, return the sum of all the numbers in the array.

// Example:

// sumArray([1, 2, 3, 4, 5]) → 15

const numbers = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  if (arr.length === 0) return 0;

  return arr[0] + sumArray(arr.slice(1));
};

console.log(sumArray(numbers)); // 15
