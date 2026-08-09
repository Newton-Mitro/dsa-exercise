import { assert, describe, it } from "vitest";
import { buildAdjacencyGraph } from "./buildAdjacencyGraph";

describe("Build Adjacency Graph", function () {
  it("Has keys 'vwxyz'", function () {
    // arrange
    const edges = [
      ["w", "x"],
      ["x", "y"],
      ["z", "y"],
      ["z", "v"],
      ["w", "v"],
    ];

    // act
    const result = buildAdjacencyGraph(edges);

    // assert
    assert.containsAllKeys(result, ["v", "w", "x", "y", "z"]);
  });
});
