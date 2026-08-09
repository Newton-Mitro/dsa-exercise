import { assert, describe, it } from "vitest";
import { connectedComponentsCount } from "./connectedComponentsCount";

describe("Connected Components Count", function () {
  it("has two connected component", function () {
    // arrange
    const graph = {
      0: [8, 1, 5],
      1: [0],
      5: [0, 8],
      8: [0, 5],
      2: [3, 4],
      3: [2, 4],
      4: [3, 2],
    };

    // act
    const result = connectedComponentsCount(graph);

    // assert
    assert.equal(result, 2);
  });

  it("has zero connected component", function () {
    // arrange
    const graph = {};

    // act
    const result = connectedComponentsCount(graph);

    // assert
    assert.equal(result, 0);
  });
});
