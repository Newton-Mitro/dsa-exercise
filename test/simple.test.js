import { assert, describe, it } from "vitest";
import { breadthFirstIterativeTraversal } from "../src/graph-algorithm/breadthFirstTraversal";

describe("Breadth First Iterative Traversal", function () {
  it("traversed all the nodes", function () {
    // arrange
    const graph = {
      a: ["c", "b"],
      b: ["d"],
      c: ["e"],
      d: ["f"],
      e: [],
      f: [],
    };

    // act
    const result = breadthFirstIterativeTraversal(graph, "a");

    // assert
    assert.equal(result, "acbedf");
  });
});
