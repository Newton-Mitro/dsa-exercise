// Leaf List
// Problem

// Return all leaf values from left to right.

// A leaf is a node with:

// left === null
// right === null

// Example:

//         a
//        / \
//       b   c
//      / \   \
//     d   e   f

// Leaf nodes:

// d
// e
// f

// Result:

// ["d", "e", "f"]

export function leafList(root) {
  const result = [];

  function dfs(node) {
    if (node === null) {
      return;
    }

    if (node.left === null && node.right === null) {
      result.push(node.val);
      return;
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

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

console.log(leafList(a)); // ["d", "e", "f"]
