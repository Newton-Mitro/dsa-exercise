// Best Bridge

// This is a much more interesting graph problem.

// Problem Description

// You have an undirected graph.

// You need to find an edge that acts as a bridge.

// A bridge is an edge where:

// Removing that edge disconnects the graph.

// Example:

// A ─── B ─── C
//      │
//      D

// If:

// B ─── C

// is the only connection between the left and right parts, removing it disconnects the graph.

// Therefore:

// B ─── C

// is a bridge.

// Example

// Consider:

// 0 ───── 1
// │       │
// │       │
// 2 ───── 3
//         │
//         │
//         4

// The top four nodes form a cycle:

// 0 ─── 1
// │     │
// 2 ─── 3

// So none of those edges are bridges.

// But:

// 3 ─── 4

// is a bridge.

// Why?

// Because if we remove:

// 3 ─── 4

// node 4 becomes disconnected.

// Simple Approach

// One straightforward solution is:

// For every edge:

// Temporarily remove the edge.
// Run DFS/BFS.
// Check whether all nodes are still reachable.
// If not, that edge is a bridge.

// This is easy to understand but can be expensive.

// JavaScript Solution

const bestBridge = (edges) => {
  const graph = buildGraph(edges);

  for (const [nodeA, nodeB] of edges) {
    const visited = new Set([nodeA]);

    const stack = [nodeA];

    while (stack.length > 0) {
      const node = stack.pop();

      for (const neighbor of graph[node]) {
        // Ignore the edge we're testing
        if (
          (node === nodeA && neighbor === nodeB) ||
          (node === nodeB && neighbor === nodeA)
        ) {
          continue;
        }

        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }

    if (visited.size < Object.keys(graph).length) {
      return [nodeA, nodeB];
    }
  }

  return null;
};

const buildGraph = (edges) => {
  const graph = {};

  for (const [a, b] of edges) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const edges = [
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
  ["d", "b"],
  ["d", "e"],
];

console.log(bestBridge(edges));
