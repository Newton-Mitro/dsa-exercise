class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const a = new ListNode("A");
const b = new ListNode("B");
const c = new ListNode("C");
const d = new ListNode("D");

// Link the nodes
a.next = b;
b.next = c;
c.next = d;

// const reverseList = (head)  => {
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

const reverseList = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseList(next, head);
};

console.log(reverseList(a).val);
