// Longest Streak
// Problem

// Find the longest sequence of identical values.

// Example:

// 5 → 5 → 2 → 2 → 2 → 7

// answer = 3

// Because:

// 2 → 2 → 2

// is the longest streak.

class Node {
  constructor(val) {
    this.val = val;
    this.next = next;
  }
}

const a = new Node(5);
const b = new Node(5);
const c = new Node(2);
const d = new Node(2);
const e = new Node(2);
const f = new Node(7);

// Link the nodes
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const longestStreak = (head) => {
  let longest = 0;
  let current = 0;
  let previous = null;

  while (head !== null) {
    if (head.val === previous) {
      current += 1;
    } else {
      current = 1;
    }

    if (current > longest) {
      longest = current;
    }

    previous = head.val;
    head = head.next;
  }

  return longest;
};

// Example usage:
console.log(longestStreak(a)); // 3
