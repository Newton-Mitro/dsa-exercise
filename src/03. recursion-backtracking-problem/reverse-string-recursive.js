// Reverse String Recursive
// Problem

// Reverse a string.

// Example:

// reverseString("hello")
// → "olleh"

const reverseString = (s) => {
  if (s.length === 0) return "";

  return reverseString(s.slice(1)) + s[0];
};

console.log(reverseString("hello")); // "olleh"
