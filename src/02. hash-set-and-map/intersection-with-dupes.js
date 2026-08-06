// Intersection With Dupes
// Problem idea

// Find common items between two lists.

// But duplicates matter.

// Example:

// a = ["a", "b", "b", "c"]
// b = ["b", "b", "d"]

// Output:

// ["b","b"]

const intersectionWithDupes = (a, b) => {
  const result = [];
  // Brute force solution
  // for (const element of a) {
  //   if (b.includes(element)) {
  //     result.push(element);
  //   }
  // }

  // Optimized solution
  const countMap = new Map();

  for (const element of a) {
    countMap.set(element, (countMap.get(element) || 0) + 1);
  }

  for (const element of b) {
    if (countMap.has(element) && countMap.get(element) > 0) {
      result.push(element);
      countMap.set(element, countMap.get(element) - 1);
    }
  }

  return result;
};

console.log(intersectionWithDupes(["a", "b", "b", "c"], ["b", "b", "d"])); // -> ["b","b"]
