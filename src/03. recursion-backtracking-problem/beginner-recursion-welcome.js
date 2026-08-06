// Beginner Recursion Welcome
// Problem

// Create a recursive function that prints "Welcome" n times.

// Example:

// Input: 5

// Output:
// 5. Welcome
// 4. Welcome
// 3. Welcome
// 2. Welcome
// 1. Welcome

// Complexity
// Time: O(n)
// Space: O(n)

const printWelcome = (n) => {
  // Base case
  if (n === 0) return;

  console.log(n + ". Welcome");

  // Recursive call
  printWelcome(n - 1);
};

printWelcome(5); // -> 5. Welcome, 4. Welcome, 3. Welcome, 2. Welcome, 1. Welcome
