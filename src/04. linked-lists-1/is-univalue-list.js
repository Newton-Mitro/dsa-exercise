// Is Univalue List
// Problem

// Check if all nodes have the same value.

// Example:

// 2 → 2 → 2 → null

// true
// 2 → 2 → 3 → null

// false

class Node {
  constructor(val) {
    this.val = val;
    this.next = next;
  }
}

const a = new Node(2);
const b = new Node(2);
const c = new Node(2);

// Link the nodes
a.next = b;
b.next = c;

// iterative solution
const isUnivalueList = (head) => {
  const value = head.val;

  while (head !== null) {
    if (head.val !== value) {
      return false;
    }

    head = head.next;
  }

  return true;
};

// recursive solution
const isUnivalueListRecu = (head, value = head.val) => {
  if (head === null) {
    return true;
  }

  if (head.val !== value) {
    return false;
  }

  return isUnivalueList(head.next, value);
};

// Example usage:
console.log(isUnivalueList(a)); // true
console.log(isUnivalueListRecu(a)); // true

const d = new Node(3);
b.next = d;

console.log(isUnivalueList(a)); // false
console.log(isUnivalueListRecu(a)); // false
