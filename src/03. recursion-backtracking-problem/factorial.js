// Factorial
// Problem

// Calculate:

// 5! = 5 × 4 × 3 × 2 × 1

// Example:

// factorial(5) → 120

const factorial = (n) => {
  if (n === 0) return 1;

  return n * factorial(n - 1);
};

console.log(factorial(5)); // 120
