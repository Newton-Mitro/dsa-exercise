// undirected path
// Write a function, undirectedPath, that takes in an array of edges
// for an undirected graph and two nodes (nodeA, nodeB). The function
// should return a boolean indicating whether or not there exists a
// path between nodeA and nodeB.

import { buildGraph } from "./build-graph.js";

export const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  console.log(graph);
  return hasPathRecursively(graph, nodeA, nodeB, new Set());
};

const hasPathRecursively = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPathRecursively(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }

  return false;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(undirectedPath(edges, "j", "m")); // true
console.log(undirectedPath(edges, "k", "o")); // false
