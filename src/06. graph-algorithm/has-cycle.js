// Has Cycle

// This is one of the most important graph problems.

// Problem Description

// Given an undirected graph, determine whether the graph contains a cycle.

// A cycle means you can start at one node and eventually return to that same node without simply immediately reversing the same edge.

// Example:

// 0 ─── 1
// │     │
// │     │
// 2 ─── 3

// There is a cycle:

// 0 → 1 → 3 → 2 → 0

// Therefore:

// hasCycle = true
// Why visited Alone Isn't Enough

// This is the tricky part.

// Consider:

// 0 ─── 1

// When traversing:

// 0 → 1

// you encounter 0 again from 1.

// But this doesn't mean there is a cycle.

// It's simply the parent:

// 0
// │
// 1

// So we need to remember the node's parent.

// DFS Solution

const hasCycle = (graph) => {
  const visited = new Set();

  for (const node in graph) {
    if (dfs(graph, node, null, visited)) {
      return true;
    }
  }

  return false;
};

const dfs = (graph, node, parent, visited) => {
  if (visited.has(node)) {
    return true;
  }

  visited.add(node);

  for (const neighbor of graph[node]) {
    if (neighbor === parent) {
      continue;
    }

    if (dfs(graph, neighbor, node, visited)) {
      return true;
    }
  }

  return false;
};

// Example 1 — No Cycle
const graph = {
  0: [1],
  1: [0, 2],
  2: [1],
};
console.log(hasCycle(graph));

// Example 2 — Cycle
const graph = {
  0: [1, 2],
  1: [0, 2],
  2: [0, 1],
};
console.log(hasCycle(graph));
