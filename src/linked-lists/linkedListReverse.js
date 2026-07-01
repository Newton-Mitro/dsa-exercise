class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

// Link the nodes
a.next = b;
b.next = c;
c.next = d;

// const reverseList = (head: Node | null): Node|null  => {
//     let prev = null;
//     let current = head;
//     while(current !== null){
//         const next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }
//     return prev;
// }

const reverseList = (head: Node | null, prev: Node|null = null): Node|null  => {
   if(head === null) return prev;
   const next = head.next;
   head.next = prev;
   return reverseList(next, head);
}

console.log(reverseList(a).val);