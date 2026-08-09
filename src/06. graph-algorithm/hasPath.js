// has path
// Write a function, hasPath, that takes in an object representing the
// adjacency list of a directed acyclic graph and two nodes (src, dst).
// The function should return a boolean indicating whether or not
// there exists a directed path between the source and destination
// nodes.

// Hey. This is our first graph problem, so you should be liberal
// with watching the Approach and Walkthrough. Be productive,
// not stubborn. -AZ

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

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(hasPathRecursively(graph, "f", "k"));
console.log(hasPathIteratively(graph, "f", "k"));
