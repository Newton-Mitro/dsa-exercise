// tree sum
// Write a function, treeSum, that takes in the root of a binary tree that contains
// number values. The function should return the total sum of all values in the tree.
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

// recursive solution
const treeSum = (root) => {
  if (root === null) return 0;
  const leftSum = treeSum(root.left);
  const rightSum = treeSum(root.right);
  return root.val + leftSum + rightSum;
};

// non-recursive solution
const treeSumNonRecu = (root) => {
  if (root === null) return 0;

  let totalSum = 0;
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    totalSum += current.val;

    if (current.right !== null) {
      stack.push(current.right);
    }

    if (current.left !== null) {
      stack.push(current.left);
    }
  }

  return totalSum;
};

// Example usage:
console.log(treeSum(a)); // Output: 21
console.log(treeSumNonRecu(a)); // Output: 21
