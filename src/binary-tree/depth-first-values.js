// depth first values
// Write a function, depthFirstValues, that takes in the root of a binary tree.
// The function should return an array containing all values of the tree in
// depth-first order.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

const depthFirstValues = (root) => {
  const values = [];

  // non-recursive solution
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    values.push(current.val);

    if (current.right !== null) {
      stack.push(current.right);
    }

    if (current.left !== null) {
      stack.push(current.left);
    }
  }

  return values;
};

// recursive solution
const depthFirstValuesRecu = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstValuesRecu(root.left);
  const rightValues = depthFirstValuesRecu(root.right);
  return [root.val, ...leftValues, ...rightValues];
};

console.log(depthFirstValues(a)); //    -> ['a', 'b', 'd', 'e', 'c', 'f']
console.log(depthFirstValuesRecu(a)); //    -> ['a', 'b', 'd', 'e', 'c', 'f']
