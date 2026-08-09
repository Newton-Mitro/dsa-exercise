import { assert, describe, it } from "vitest";
import { shortestPath } from "./shortestPath";

describe("Find Shortest Path Length", function () {
  it("shortest path is two", function () {
    // arrange
    const edges = [
      ["w", "x"],
      ["x", "y"],
      ["z", "y"],
      ["z", "v"],
      ["w", "v"],
    ];

    // act
    const result = shortestPath(edges, "w", "z");

    // assert
    assert.equal(result, 2);
  });

  it("shortest path is -1", function () {
    // arrange
    const edges = [
      ["a", "c"],
      ["a", "b"],
      ["c", "b"],
      ["c", "d"],
      ["b", "d"],
      ["e", "d"],
      ["g", "f"],
    ];

    // act
    const result = shortestPath(edges, "b", "g");

    // assert
    assert.equal(result, -1);
  });
});
