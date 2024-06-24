/* 
Has Path Problem.
Complexity: n = nodes, e = edges, Time: O(e) and Space: O(n) | n = nodes, n^2 = edges, Time: O(n^2) and Space: O(n)
*/

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: [],
  k: [],
};

// Iterative approach
const hasPath = (graph, source, dest) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

hasPath(graph, "f", "k");
