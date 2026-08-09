import { assert, describe, it } from "vitest";
import { breadthFirstIterativeTraversal } from "./breadthFirstTraversal";

describe("Breadth First Traversal", function () {
  it("Traversed iteratively in sequence of 'acbedf'", function () {
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
