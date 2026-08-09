import { assert, describe, it } from "vitest";
import { hasPathRecursively, hasPathIteratively } from "./hasPath";

describe("Find path through directed graph", function () {
  describe("Recursive way", () => {
    it("Has path from 'f' to 'k'", function () {
      // arrange
      const graph = {
        f: ["g", "i"],
        g: ["h"],
        h: [],
        i: ["g", "k"],
        j: [],
        k: [],
      };

      // act
      const result = hasPathRecursively(graph, "f", "k", new Set());

      // assert
      assert.equal(result, true);
    });

    it("Has no path from 'g' to 'k'", function () {
      // arrange
      const graph = {
        f: ["g", "i"],
        g: ["h"],
        h: [],
        i: ["g", "k"],
        j: [],
        k: [],
      };

      // act
      const result = hasPathRecursively(graph, "g", "k", new Set());

      // assert
      assert.equal(result, false);
    });
  });
  describe("Iterative way", () => {
    it("Has path from 'f' to 'k'", function () {
      // arrange
      const graph = {
        f: ["g", "i"],
        g: ["h"],
        h: [],
        i: ["g", "k"],
        j: [],
        k: [],
      };

      // act
      const result = hasPathIteratively(graph, "f", "k");

      // assert
      assert.equal(result, true);
    });

    it("Has no path from 'g' to 'k'", function () {
      // arrange
      const graph = {
        f: ["g", "i"],
        g: ["h"],
        h: [],
        i: ["g", "k"],
        j: [],
        k: [],
      };

      // act
      const result = hasPathIteratively(graph, "g", "k");

      // assert
      assert.equal(result, false);
    });
  });
});
