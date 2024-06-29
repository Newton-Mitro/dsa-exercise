import { assert, describe, it } from "vitest";
import { Node } from "./Node";
import { linkedListValuesIterative } from "./linkedListGetNodeValue";

describe("Get Link List Node Values", function () {
  it("has abcd in an array", function () {
    // arrange
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");

    a.next = b;
    b.next = c;
    c.next = d;

    // act
    const result = linkedListValuesIterative(a);

    // assert
    assert.isArray(result);
    assert.equal(result[0], "a");
    assert.equal(result[1], "b");
    assert.equal(result[2], "c");
    assert.equal(result[3], "d");
  });

  it("has empty array", function () {
    // arrange

    // act
    const result = linkedListValuesIterative(null);

    // assert
    assert.isArray(result);
    assert.equal(result.length, 0);
  });
});
