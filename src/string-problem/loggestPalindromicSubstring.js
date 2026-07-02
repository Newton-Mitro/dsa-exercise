/* 
Longest Palindromic Substring
String Matching with Wildcard
Edit Distance
Longest Repeating Subsequence
Count all distinct substrings of a given string
Reverse words in a given string
Check if a string is a rotated palindrome
KMP Algorithm for Pattern Searching
Minimum characters to be added at front to make string palindrome 
*/

// 1. Longest Palindromic Substring
// Problem:
// Find the longest substring that is a palindrome.
// Example:
// Input: "babad"
// Output: "bab" or "aba"
// TypeScript

function longestPalindrome(s) {
  if (!s) return "";

  let start = 0;
  let end = 0;

  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return r - l - 1;
  }

  for (let i = 0; i < s.length; i++) {
    const len1 = expand(i, i);
    const len2 = expand(i, i + 1);
    const len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

console.log(longestPalindrome("babad")); // Output: "bab" or "aba"

// 3. Edit Distance
// Minimum operations:
// Insert
// Delete
// Replace
// Example:
// horse
// ros
// Output: 3
// TypeScript
function editDistance(a, b) {
  const dp = Array(a.length + 1)
    .fill(0)
    .map(() => Array(b.length + 1).fill(0));

  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }

  return dp[a.length][b.length];
}

console.log(editDistance("horse", "ros")); // Output: 3

// 5. Count Distinct Substrings
// Example:
// abc
// a
// b
// c
// ab
// bc
// abc
// Answer = 6
// Brute Force
function countDistinct(s) {
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    let str = "";
    for (let j = i; j < s.length; j++) {
      str += s[j];
      set.add(str);
    }
  }

  return set.size;
}

console.log(countDistinct("abc")); // Output: 6

// 6. Reverse Words
// Example:
// Input:
// "I love coding"
// Output:
// "coding love I"
// TypeScript
function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWords("I love coding")); // Output: "coding love I"

// 7. Rotated Palindrome
// Example:
// aab
// rotate:
// aab
// aba ✓
// baa
// TypeScript
function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}

function rotatedPalindrome(s) {
  for (let i = 0; i < s.length; i++) {
    const r = s.slice(i) + s.slice(0, i);
    if (isPalindrome(r)) return true;
  }
  return false;
}

console.log(rotatedPalindrome("aab")); // Output: true

// 8. KMP Pattern Matching
// Example:
// text    = ABABDABACDABABCABAB
// pattern = ABABCABAB
// Build LPS
function buildLPS(p) {
  const lps = Array(p.length).fill(0);

  let len = 0;
  let i = 1;

  while (i < p.length) {
    if (p[i] === p[len]) {
      lps[i++] = ++len;
    } else if (len) {
      len = lps[len - 1];
    } else {
      lps[i++] = 0;
    }
  }

  return lps;
}

console.log(buildLPS("ABABCABAB")); // Output: [0, 0, 1, 2, 0, 1, 2, 3, 4]
