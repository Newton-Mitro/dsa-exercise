// How High
// Problem

// Find the height of a binary tree.

// For:

//         a
//        / \
//       b   c
//      /
//     d

export function howHigh(root) {
  if (root === null) {
    return -1;
  }

  return 1 + Math.max(howHigh(root.left), howHigh(root.right));
}

import { TreeNode } from "./tree-node.js";
const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");

a.left = b;
a.right = c;
b.left = d;

console.log(howHigh(a)); // 2
