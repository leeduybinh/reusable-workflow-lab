import test from "node:test";
import assert from "node:assert/strict";
import { add, formatTotal, subtract } from "../src/calculator.js";

test("add returns the sum of two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("subtract returns the difference of two numbers", () => {
  assert.equal(subtract(10, 4), 6);
});

test("formatTotal formats currency text", () => {
  assert.equal(formatTotal(44.99), "Total: $44.99");
});
