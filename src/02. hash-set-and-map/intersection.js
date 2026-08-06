// intersection
// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array
// containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

const intersection = (a, b) => {
  const result = [];
  // Brute force solution
  // for (const element of a) {
  //   if (b.includes(element)) {
  //     result.push(element);
  //   }
  // }

  // Optimized solution
  const setA = new Set(a);

  for (const element of b) {
    if (setA.has(element)) {
      result.push(element);
    }
  }

  return result;
};

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])); // -> [2,6]
