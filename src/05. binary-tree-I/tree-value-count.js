// Tree Value Count
// Problem

// Count how many times a particular value appears in a binary tree.

// Example:

//         a
//        / \
//       b   a
//      / \
//     a   b

const countValue = (root, target) => {
  if (root === null) return 0;

  let count = root.val === target ? 1 : 0;

  return count + countValue(root.left, target) + countValue(root.right, target);
};

import { TreeNode } from "./tree-node.js";
const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("a");
const d = new TreeNode("a");
const e = new TreeNode("b");

a.left = b;
a.right = c;
b.left = d;
b.right = e;

console.log(countValue(a, "a")); // 3
