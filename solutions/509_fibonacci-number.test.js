import { fib } from "./509_fibonacci-number";

test.each([
  [0, 0],
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
])("test", (input, output) => {
  expect(fib(input)).toStrictEqual(output);
});
