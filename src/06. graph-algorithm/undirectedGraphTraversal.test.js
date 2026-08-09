import { assert, describe, it } from "vitest";
import { undirectedPath } from "./undirectedGraphTraversal";

describe("undirected graph path", function () {
  it("has path from 'j' to 'm'", function () {
    // arrange
    const edges = [
      ["i", "j"],
      ["k", "i"],
      ["m", "k"],
      ["k", "l"],
      ["o", "n"],
    ];

    // act
    const result = undirectedPath(edges, "j", "m");

    // assert
    assert.equal(result, true);
  });

  it("has no path from 'k' to 'o'", function () {
    // arrange
    const edges = [
      ["i", "j"],
      ["k", "i"],
      ["m", "k"],
      ["k", "l"],
      ["o", "n"],
    ];

    // act
    const result = undirectedPath(edges, "k", "o");

    // assert
    assert.equal(result, false);
  });

  it("has path from 'r' to 't'", function () {
    // arrange
    const edges = [
      ["b", "a"],
      ["c", "a"],
      ["b", "c"],
      ["q", "r"],
      ["q", "s"],
      ["q", "u"],
      ["q", "t"],
    ];

    // act
    const result = undirectedPath(edges, "r", "t");

    // assert
    assert.equal(result, true);
  });
});
