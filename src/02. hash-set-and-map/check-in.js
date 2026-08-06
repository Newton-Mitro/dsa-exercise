// Check In
// Problem idea

// You are given two lists:

// guests → people who were invited
// check_ins → people who arrived

// Return whether every person who checked in was invited.

// Example
// guests = ["A", "B", "C", "D"]
// check_ins = ["A", "C"]

// Output:
// True

const checkIn = (guests, check_ins) => {
  // Brute force solution
  // for (const person of check_ins) {
  //   if (!guests.includes(person)) {
  //     return false;
  //   }
  // }

  // Optimized solution
  const guestSet = new Set(guests);

  for (const person of check_ins) {
    if (!guestSet.has(person)) {
      return false;
    }
  }

  return true;
};

console.log(checkIn(["A", "B", "C", "D"], ["A", "C"])); // -> true
console.log(checkIn(["A", "B", "C", "D"], ["A", "E"])); // -> false
