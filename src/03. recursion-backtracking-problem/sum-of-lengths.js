// Sum of Lengths
// Problem

// Given an array of strings, return the total length.

// Example:

// ["cat", "dog", "bird"]

// Output:

// 10

const sumLengths = (strings) => {
  if (strings.length === 0) return 0;

  return strings[0].length + sumLengths(strings.slice(1));
};

console.log(sumLengths(["cat", "dog", "bird"])); // 10
