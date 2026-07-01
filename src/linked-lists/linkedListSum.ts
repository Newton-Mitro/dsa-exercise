class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

// Link the nodes
a.next = b;
b.next = c;
c.next = d;

// function linkedListSum(head: Node | null): number {
//   let sum = 0;
//   let currentNode = head;

//   while (currentNode !== null) {
//     sum += currentNode.val;
//     currentNode = currentNode.next;
//   }

//   return sum;
// }

function linkedListSum(head: Node | null): number {
  if (head === null) return 0;
  return head.val + linkedListSum(head.next);
}

const totalSum = linkedListSum(a);
console.log("Total Sum:", totalSum);
