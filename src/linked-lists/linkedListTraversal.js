class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

const traverseList = (head) => {
  let current = head;

  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

traverseList(a);
