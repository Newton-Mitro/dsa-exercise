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

a.next = b;
b.next = c;
c.next = d;

const getNodeValue = (head, index) => {
  let current = head;
  let count = 0;
  while (current !== null) {
    if (count === index) return current.val;
    count += 1;
    current = current.next;
  }
  return null;
};

// const getNodeValue = (head, index) => {
//     if (head === null) return null;
//     if (index === 0) return head.val;
//     return getNodeValue(head.next, index-1);
// }

console.log(getNodeValue(a, 2));
