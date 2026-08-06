// Insert Node
// Problem

// Insert a new node at a specific position.

// Example:

// 5 → 8 → 3

// insert 7 at index 1

// 5 → 7 → 8 → 3

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

const insertNode = (head, value, index) => {
  if (index === 0) {
    const newNode = new Node(value);

    newNode.next = head;

    return newNode;
  }

  let current = head;

  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }

  const newNode = new Node(value);

  newNode.next = current.next;

  current.next = newNode;

  return head;
};

// Example usage:
const updatedHead = insertNode(a, 70, 1);

// Print the updated list
let current = updatedHead;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
