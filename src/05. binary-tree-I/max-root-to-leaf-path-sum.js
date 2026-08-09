// max root to leaf path sum
// Write a function, maxPathSum, that takes in the root of a binary tree that contains number values.
// The function should return the maximum sum of any root to leaf path within the tree.

import { TreeNode } from "./tree-node.js";

// You may assume that the input tree is non-empty.

const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;

  const leftMax = maxPathSum(root.left);
  const rightMax = maxPathSum(root.right);

  return root.val + Math.max(leftMax, rightMax);
};

const a = new TreeNode(3);
const b = new TreeNode(11);
const c = new TreeNode(4);
const d = new TreeNode(4);
const e = new TreeNode(-2);
const f = new TreeNode(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(maxPathSum(a)); // 18
