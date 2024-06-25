/* 
1. Visit one direction to the farthest.
2. Uses stack.
3. Can be achieved by ether iteratively or recursively
4. Complexity: n = nodes, e = edges, Time: O(e) and Space: O(n) | n = nodes, n^2 = edges, Time: O(n^2) and Space: O(n)
*/

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// Iterative approach
const depthFirstIterativeTraversal = (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};
console.log("Iterative approach");
depthFirstIterativeTraversal(graph, "a");

// Recursive approach
const depthFirstRecursiveTraversal = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstRecursiveTraversal(graph, neighbor);
  }
};
console.log("Recursive approach");
depthFirstRecursiveTraversal(graph, "a");
