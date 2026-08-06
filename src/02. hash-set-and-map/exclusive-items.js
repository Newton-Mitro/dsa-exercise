// Exclusive Items
// Problem idea

// Given two lists, return items that exist in only one list.

// This is also called symmetric difference.

// Example:

// items1 = ["a", "b", "c"]
// items2 = ["b", "c", "d"]

// Output:
// ["a", "d"]

const exclusiveItems = (items1, items2) => {
  const result = [];
  // Brute force solution
  // for (const item of items1) {
  //   if (!items2.includes(item)) {
  //     result.push(item);
  //   }
  // }

  // for (const item of items2) {
  //   if (!items1.includes(item)) {
  //     result.push(item);
  //   }
  // }

  // Optimized solution
  const set1 = new Set(items1);
  const set2 = new Set(items2);

  for (const item of set1) {
    if (!set2.has(item)) {
      result.push(item);
    }
  }

  for (const item of set2) {
    if (!set1.has(item)) {
      result.push(item);
    }
  }

  return result;
};

console.log(exclusiveItems(["a", "b", "c"], ["b", "c", "d"])); // -> ["a", "d"]
console.log(exclusiveItems(["a", "b", "c"], ["a", "b", "c"])); // -> []
