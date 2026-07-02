class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);

// Link the nodes
a.next = b;
b.next = c;
c.next = d;

// function linkedListSum(head) {
//   let sum = 0;
//   let currentNode = head;

//   while (currentNode !== null) {
//     sum += currentNode.val;
//     currentNode = currentNode.next;
//   }

//   return sum;
// }

function linkedListSum(head) {
  if (head === null) return 0;
  return head.val + linkedListSum(head.next);
}

const totalSum = linkedListSum(a);
console.log("Total Sum:", totalSum);
