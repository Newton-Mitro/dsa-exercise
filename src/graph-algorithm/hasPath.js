/* 
Has Path Problem.
Complexity: n = nodes, e = edges, Time: O(e) and Space: O(n) | n = nodes, n^2 = edges, Time: O(n^2) and Space: O(n)
*/

// const graph = {
//   f: ["g", "i"],
//   g: ["h"],
//   h: [],
//   i: ["g", "k"],
//   j: [],
//   k: [],
// };

// Recursive approach (breadth first)
export const hasPathRecursively = (graph, src, dst, visited) => {
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

// Iterative approach (breadth first)
export const hasPathIteratively = (graph, src, dest) => {
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dest) return true;
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

// console.log(hasPathRecursively(graph, "f", "k"));
// console.log(hasPathIteratively(graph, "f", "k"));
