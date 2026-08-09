// 6. All Tree Paths

// This is one of the most important tree recursion problems.

// Problem

// Return every root-to-leaf path.

// Given:

//         a
//        / \
//       b   c
//      / \
//     d   e

// The paths are:

// [
//     ["a", "b", "d"],
//     ["a", "b", "e"],
//     ["a", "c"]
// ]

export function allTreePaths(root) {
  if (root === null) {
    return [];
  }

  if (root.left === null && root.right === null) {
    return [[root.val]];
  }

  const paths = [];

  for (const path of allTreePaths(root.left)) {
    paths.push([root.val, ...path]);
  }

  for (const path of allTreePaths(root.right)) {
    paths.push([root.val, ...path]);
  }

  return paths;
}

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

console.log(allTreePaths(a)); // [["a", "b", "d"], ["a", "b", "e"], ["a", "c"]]
