// pair sum
// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing
// a pair of indices whose elements sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

const pairSum = (numbers, targetSum) => {
  // Brute force solution
  // for (let i = 0; i < numbers.length; i++) {
  //   for (let j = i + 1; j < numbers.length; j++) {
  //     if (numbers[i] + numbers[j] === targetSum) {
  //       return [i, j];
  //     }
  //   }
  // }

  // Hash Map solution
  const previousNums = {};
  for (let i = 0; i < numbers.length; i++) {
    const complement = targetSum - numbers[i];
    if (complement in previousNums) {
      return [previousNums[complement], i];
    }
    previousNums[numbers[i]] = i;
  }
};

console.log(pairSum([3, 2, 5, 4, 1], 8)); // [0, 2] (3 + 5 = 8)
