// Level Averages
// Problem

// Calculate the average value of each tree level.

// Given:

//         3
//        / \
//       11  4
//      / \   \
//     4   2   7

// Levels:

// [3]
// [11, 4]
// [4, 2, 7]

// Averages:

// [
//     3,
//     7.5,
//     4.333...
// ]

export function levelAverages(root) {
  if (root === null) {
    return [];
  }

  const result = [];
  const queue = [root];

  let index = 0;

  while (index < queue.length) {
    const levelStart = index;
    const levelEnd = queue.length;

    let sum = 0;

    while (index < levelEnd) {
      const node = queue[index++];

      sum += node.val;

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    const levelSize = levelEnd - levelStart;

    result.push(sum / levelSize);
  }

  return result;
}

import { TreeNode } from "./tree-node.js";
const a = new TreeNode(3);
const b = new TreeNode(11);
const c = new TreeNode(4);
const d = new TreeNode(4);
const e = new TreeNode(2);
const f = new TreeNode(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(levelAverages(a)); // [3, 7.5, 4.333333333333333]
