// Tree Path Finder
// Problem

// Given a binary tree and a target value, determine whether there is a path from the root to a node containing that value.

// For example:

//         a
//        / \
//       b   c
//      / \
//     d   e

const hasPath = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;

  return hasPath(root.left, target) || hasPath(root.right, target);
};

import { TreeNode } from "./tree-node.js";
const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");

a.left = b;
a.right = c;
b.left = d;
b.right = e;

console.log(hasPath(a, "e")); // true
