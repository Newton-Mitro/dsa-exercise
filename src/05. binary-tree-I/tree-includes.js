// tree includes
// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return
// a boolean indicating whether or not the value is contained in the tree.

import { TreeNode } from "./tree-node.js";

const treeIncludes = (root, target) => {
  // breadth first search -- iteratively
  if (root === null) return false;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) return true;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
};

// const treeIncludes = (root, target) => {
//   // depth first search -- recursively
//   if (root === null) return false;
//   if (root.val === target) return true;
//   return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// };

//

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");

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
console.log(treeIncludes(a, "e")); // true
