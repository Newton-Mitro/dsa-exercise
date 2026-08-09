import { assert, describe, it } from "vitest";
import {
  depthFirstIterativeTraversal,
  depthFirstRecursiveTraversal,
} from "./depthFirstTraversal";

describe("Depth First Traversal", function () {
  it("Traversed recursively in sequence of 'acebdf'", function () {
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
    const result = depthFirstRecursiveTraversal(graph, "a");

    // assert
    assert.equal(result, "acebdf");
  });

  it("Traversed iteratively in sequence of 'abdfce'", function () {
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
    const result = depthFirstIterativeTraversal(graph, "a");

    // assert
    assert.equal(result, "abdfce");
  });
});
