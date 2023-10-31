import { MinStack } from "./155_min-stack";

test("test 1", () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  expect(minStack.getMin()).toStrictEqual(-3);
  minStack.pop();
  expect(minStack.top()).toStrictEqual(0);
  expect(minStack.getMin()).toStrictEqual(-2);
});

test("test 2", () => {
  const minStack = new MinStack();
  minStack.push(3);
  minStack.push(2);
  minStack.push(1);
  expect(minStack.getMin()).toStrictEqual(1);
  minStack.pop();
  expect(minStack.getMin()).toStrictEqual(2);
  minStack.pop();
  expect(minStack.getMin()).toStrictEqual(3);
});

test("test 1", () => {
  const minStack = new MinStack();
  minStack.push(1);
  minStack.push(2);
  minStack.push(3);
  expect(minStack.getMin()).toStrictEqual(1);
  minStack.pop();
  expect(minStack.getMin()).toStrictEqual(1);
  minStack.pop();
  expect(minStack.getMin()).toStrictEqual(1);
});
