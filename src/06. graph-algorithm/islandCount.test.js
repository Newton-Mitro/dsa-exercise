import { assert, describe, it } from "vitest";
import { islandCount } from "./islandCount";

describe("Count Island", function () {
  it("has 3 island", function () {
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
    const result = islandCount(grid);

    // assert
    assert.equal(result, 3);
  });

  it("has 0 island", function () {
    // arrange
    const grid = [
      ["W", "W"],
      ["W", "W"],
      ["W", "W"],
    ];

    // act
    const result = islandCount(grid);

    // assert
    assert.equal(result, 0);
  });
});
