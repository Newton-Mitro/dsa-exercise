// Merge Lists
// Problem

// Merge two sorted linked lists into one sorted linked list.

// Example:

// list1:
// 1 → 3 → 5

// list2:
// 2 → 4 → 6

// result:
// 1 → 2 → 3 → 4 → 5 → 6

class Node {
  constructor(val) {
    this.val = val;
    this.next = next;
  }
}

const a = new Node(1);
const b = new Node(3);
const c = new Node(5);

// Link the nodes
a.next = b;
b.next = c;

const x = new Node(2);
const y = new Node(4);
const z = new Node(6);

// Link the nodes
x.next = y;
y.next = z;

const mergeLists = (head1, head2) => {
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  if (head1.val <= head2.val) {
    head1.next = mergeLists(head1.next, head2);
    return head1;
  } else {
    head2.next = mergeLists(head1, head2.next);
    return head2;
  }
};

// Example usage:
const mergedHead = mergeLists(a, x);

// Print the merged list
let current = mergedHead;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
