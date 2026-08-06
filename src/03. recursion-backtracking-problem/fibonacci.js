// Fibonacci
// Problem

// Return the nth Fibonacci number.

// Sequence:

// 0, 1, 1, 2, 3, 5, 8...

// Example:

// fibonacci(6) → 8

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(6)); // 8
