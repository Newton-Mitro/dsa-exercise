// Remove Node
// Problem

// Remove the first node containing a value.

// Example:

// 4 → 2 → 7 → 2

// remove 2

// 4 → 7 → 2

class Node {
  constructor(val) {
    this.val = val;
    this.next = next;
  }
}

const a = new Node(5);
const b = new Node(7);
const c = new Node(2);
const d = new Node(9);
const e = new Node(20);
const f = new Node(15);

// Link the nodes
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const removeNode = (head, targetVal) => {
  if (head === null) {
    return null;
  }

  if (head.val === targetVal) {
    return head.next;
  }

  let current = head;

  while (current.next !== null) {
    if (current.next.val === targetVal) {
      current.next = current.next.next;
      break;
    }

    current = current.next;
  }

  return head;
};

// Example usage:
const updatedHead = removeNode(a, 2);

// Print the updated list
let current = updatedHead;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
