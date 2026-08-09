// Tree Levels
// Problem

// Group tree values by their depth.

// Given:

//         a
//        / \
//       b   c
//      / \   \
//     d   e   f

// Return:

// [
//     ["a"],
//     ["b", "c"],
//     ["d", "e", "f"]
// ]

export function treeLevels(root) {
  if (root === null) {
    return [];
  }

  const result = [];
  const queue = [root];
  let index = 0;

  while (index < queue.length) {
    const levelSize = queue.length - index;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue[index++];

      level.push(node.val);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    result.push(level);
  }

  return result;
}

import { TreeNode } from "./tree-node.js";
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

console.log(treeLevels(a)); // [["a"], ["b", "c"], ["d", "e", "f"]]
