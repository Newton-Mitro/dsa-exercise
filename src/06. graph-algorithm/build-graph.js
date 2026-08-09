export const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

export const drawGraph = (graph) => {
  const visited = new Set();
  const components = [];

  // Find connected components
  for (const node of Object.keys(graph)) {
    if (visited.has(node)) {
      continue;
    }

    const component = [];

    explore(graph, node, visited, component);

    components.push(component);
  }

  // Draw each component
  components.forEach((component, index) => {
    console.log(`\nComponent ${index + 1}\n`);

    drawComponent(graph, component);
  });
};

const explore = (graph, current, visited, component) => {
  if (visited.has(String(current))) {
    return;
  }

  visited.add(String(current));
  component.push(String(current));

  for (const neighbor of graph[current]) {
    explore(graph, neighbor, visited, component);
  }
};

const drawComponent = (graph, component) => {
  // This is where the actual ASCII drawing happens.
  console.log(component.join(" ─── "));
};
