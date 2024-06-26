import { buildAdjacencyGraph } from "./buildAdjacencyGraph";
import { hasPathRecursively } from "./hasPath";

export const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildAdjacencyGraph(edges);
  return hasPathRecursively(graph, nodeA, nodeB, new Set());
};
