/* 
1. Visit closest neighbors first.
2. Uses queue.
3. Only can be achieved by iteratively.
4. Complexity: n = nodes, e = edges, Time: O(e) and Space: O(n) | n = nodes, n^2 = edges, Time: O(n^2) and Space: O(n)
*/

// Iterative approach
export const breadthFirstIterativeTraversal = (graph, source) => {
  const queue = [source];
  let visited = "";
  while (queue.length > 0) {
    const current = queue.shift();
    visited += current;
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return visited;
};
