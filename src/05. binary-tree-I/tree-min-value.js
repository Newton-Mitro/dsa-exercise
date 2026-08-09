// tree min value
// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values.
// The function should return the minimum value within the tree.

// You may assume that the input tree is non-empty.

// iterative solution using depth first search
const treeMinValue = (root) => {
  let smallest = Infinity;
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val < smallest) smallest = current.val;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return smallest;
};

// recursive solution using depth first search
// const treeMinValue = (root) => {
//   if (root === null) return Infinity;
//   const leftMin = treeMinValue(root.left);
//   const rightMin = treeMinValue(root.right);
//   return Math.min(root.val, leftMin, rightMin);
// };

// iterative solution using breadth first search
// const treeMinValue = (root) => {
//   let smallest = Infinity;
//   const queue = [root];
//   while (queue.length > 0) {
//     const current = queue.shift();
//     if (current.val < smallest) smallest = current.val;
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return smallest;
// };

// recursive solution using breadth first search
// const treeMinValue = (root) => {
//   if (root === null) return Infinity;
//   const leftMin = treeMinValue(root.left);
//   const rightMin = treeMinValue(root.right);
//   return Math.min(root.val, leftMin, rightMin);
// };

//
import { TreeNode } from "./tree-node.js";

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

console.log(treeMinValue(a)); // -> -2
