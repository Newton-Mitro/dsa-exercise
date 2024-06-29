import { assert, describe, it } from "vitest";
import { largestComponent } from "./largestComponent";

describe("Find Largest Component", function () {
  it("largest component is four", function () {
    // arrange
    const graph = {
      0: ["8", "1", "5"],
      1: ["0"],
      5: ["0", "8"],
      8: ["0", "5"],
      2: ["3", "4"],
      3: ["2", "4"],
      4: ["3", "2"],
    };

    // act
    const result = largestComponent(graph);

    // assert
    assert.equal(result, 4);
  });

  it("largest component is zero", function () {
    // arrange
    const graph = {};

    // act
    const result = largestComponent(graph);

    // assert
    assert.equal(result, 0);
  });
});
