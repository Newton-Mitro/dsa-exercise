// Bottom Right Value
// Problem

// Find the value of the bottom-right-most node.

// Example:

//         a
//        / \
//       b   c
//      /     \
//     d       e

const bottomRightValue = (root) => {
  if (root === null) return null;

  let queue = [root];
  let bottomRight = null;

  while (queue.length > 0) {
    const currentNode = queue.shift();
    bottomRight = currentNode.val;

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return bottomRight;
};

// export function bottomRightValue(root) {
//   const queue = [root];
//   let current = null;

//   while (queue.length > 0) {
//     current = queue.shift();

//     if (current.left !== null) {
//       queue.push(current.left);
//     }

//     if (current.right !== null) {
//       queue.push(current.right);
//     }
//   }

//   return current.val;
// }

// export function bottomRightValue(root) {
//     const queue = [root];
//     let index = 0;
//     let current = null;

//     while (index < queue.length) {
//         current = queue[index];

//         if (current.left !== null) {
//             queue.push(current.left);
//         }

//         if (current.right !== null) {
//             queue.push(current.right);
//         }

//         index++;
//     }

//     return current.val;
// }

import { TreeNode } from "./tree-node.js";
const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");

a.left = b;
a.right = c;
b.left = d;
c.right = e;

console.log(bottomRightValue(a)); // "e"
