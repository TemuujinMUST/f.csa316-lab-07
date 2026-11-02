const test = require("node:test");
const assert = require("node:assert");
const { add, subtract, multiply, divide } = require("../src/calculator");

test("add: 2 + 3 = 5", () => {
  assert.strictEqual(add(2, 3), 6);
});

test("subtract: 5 - 2 = 3", () => {
  assert.strictEqual(subtract(5, 2), 3);
});

test("multiply: 4 * 3 = 12", () => {
  assert.strictEqual(multiply(4, 3), 12);
});

test("divide: 10 / 2 = 5", () => {
  assert.strictEqual(divide(10, 2), 5);
});

test("divide: тэгд хуваахад алдаа шиднэ", () => {
  assert.throws(() => divide(1, 0), /Тэгд хуваах боломжгүй/);
});
