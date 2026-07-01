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

const e = new Node('a');
const f = new Node('b');
const g = new Node('c');
const h = new Node('d');

// Link the nodes
a.next = b;
b.next = c;
c.next = d;

e.next = f;
f.next = g;
g.next = h;


const zipperLists = (head1: Node | null, head2: Node | null): Node | null => {
    let current1 = head1;
    let current2 = head2;

    while(current1 !== null && current2 !== null){
        const next1 = current1.next;
        const next2 = current2.next;

        current1.next = current2;
        if(next1 === null) break;
        current2.next = next1;

        current1 = next1;
        current2 = next2;
    }

    return head1;
}

// const zipperLists = (head1: Node | null, head2: Node | null): Node | null => {
//     if(head1 === null) return head2;
//     if(head2 === null) return head1;

//     const next1 = head1.next;
//     const next2 = head2.next;

//     head1.next = head2;
//     head2.next = zipperLists(next1, next2);

//     return head1;
// }

console.log(zipperLists(a, e).val);