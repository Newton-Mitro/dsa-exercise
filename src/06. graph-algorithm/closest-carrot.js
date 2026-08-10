// Closest Carrot
// Problem Description

// You are given a grid containing:

// . → empty space
// C → carrot
// O → obstacle/wall
// x → starting position

// Your task is to find the minimum number of steps from x to the closest carrot.

// You can move:

// up
// down
// left
// right

// You cannot move through obstacles.

// For example:

// [
//   ['O', 'O', 'O', 'O', 'O'],
//   ['O', 'x', ' ', ' ', 'O'],
//   ['O', ' ', 'O', 'C', 'O'],
//   ['O', ' ', ' ', ' ', 'O'],
//   ['O', 'O', 'O', 'O', 'O']
// ]

// The goal is not to find any carrot.

// It is to find the closest carrot.

// Key Insight

// This is a classic Breadth-First Search (BFS) problem.

// Why?

// Because BFS explores nodes based on their distance from the starting point:

// distance 0
//     ↓
// distance 1
//     ↓
// distance 2
//     ↓
// distance 3

// So the first carrot encountered by BFS is guaranteed to be the closest carrot.

// BFS Idea

// Suppose:

// x . . .
// . . C .
// . C . .

// Starting from x:

// distance 0:
// x

// Then:

// distance 1:
// neighbors

// Then:

// distance 2:
// neighbors of neighbors

// The first C we encounter gives the minimum distance.

// JavaScript Solution

const closestCarrot = (grid, startRow, startCol) => {
  const queue = [[startRow, startCol, 0]];
  const visited = new Set();

  visited.add(`${startRow},${startCol}`);

  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    if (grid[row][col] === "C") {
      return distance;
    }

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[0].length &&
        grid[newRow][newCol] !== "O" &&
        !visited.has(`${newRow},${newCol}`)
      ) {
        visited.add(`${newRow},${newCol}`);

        queue.push([newRow, newCol, distance + 1]);
      }
    }
  }

  return -1;
};

const grid = [
  ["x", ".", ".", "."],
  [".", ".", ".", "."],
  [".", ".", "C", "."],
  [".", "C", ".", "."],
];

console.log(closestCarrot(grid, 0, 0));
