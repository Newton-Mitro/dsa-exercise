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

// const linkedListFind = (head: Node | null, target: number): boolean => {
//   let currentNode = head;
//   while (currentNode !== null) {
//     if(currentNode.val === target) {
//       return true;
//     }
//     currentNode = currentNode.next;
//   }
//   return false;
// }

const linkedListFind = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFind(head.next, target);
};

console.log(linkedListFind(a, 3));
