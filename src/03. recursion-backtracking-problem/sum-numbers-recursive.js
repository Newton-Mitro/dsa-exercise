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
