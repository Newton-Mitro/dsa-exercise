// Palindrome Recursive
// Problem

// Check if a string is the same forward and backward.

// Examples:

// racecar → true
// hello → false

const palindrome = (s) => {
  if (s.length <= 1) {
    return true;
  }

  if (s[0] !== s[s.length - 1]) {
    return false;
  }

  return palindrome(s.slice(1, -1));
};

console.log(palindrome("racecar")); // true
console.log(palindrome("hello")); // false
