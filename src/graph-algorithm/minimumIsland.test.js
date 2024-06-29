import { assert, describe, it } from "vitest";
import { minimumIsland } from "./minimumIsland";

describe("Minimum Island", function () {
  it("Small island has 2 nodes", function () {
    // arrange
    const grid = [
      ["W", "L", "W", "W", "W"],
      ["W", "L", "W", "W", "W"],
      ["W", "W", "W", "L", "W"],
      ["W", "W", "L", "L", "W"],
      ["L", "W", "W", "L", "L"],
      ["L", "L", "W", "W", "W"],
    ];

    // act
    const result = minimumIsland(grid);

    // assert
    assert.equal(result, 2);
  });
});
