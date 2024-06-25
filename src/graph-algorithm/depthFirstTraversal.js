/* 
1. Visit one direction to the farthest.
2. Uses stack.
3. Can be achieved by ether iteratively or recursively
4. Complexity: n = nodes, e = edges, Time: O(e) and Space: O(n) | n = nodes, n^2 = edges, Time: O(n^2) and Space: O(n)
*/

// Iterative approach
export const depthFirstIterativeTraversal = (graph, source) => {
  let visited = "";
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    visited += current;
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return visited;
};

// Recursive approach
let visited = "";
export const depthFirstRecursiveTraversal = (graph, source) => {
  visited += source;
  for (let neighbor of graph[source]) {
    depthFirstRecursiveTraversal(graph, neighbor);
  }
  return visited;
};
