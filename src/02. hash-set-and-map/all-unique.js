// All Unique
// Problem idea

// Check whether every item in a list is different.

// Example:

// items = ["a", "b", "c"]

// Output:
// True

const allUnique = (items) => {
  // Brute force solution
  // for (let i = 0; i < items.length; i++) {
  //   for (let j = i + 1; j < items.length; j++) {
  //     if (items[i] === items[j]) {
  //       return false;
  //     }
  //   }
  // }

  // Optimized solution
  const itemSet = new Set(items);

  return itemSet.size === items.length;
};

console.log(allUnique(["a", "b", "c"])); // -> true
console.log(allUnique(["a", "b", "c", "a"])); // -> false
