import { moveZeroes } from "./283_move-zeroes";

test.each([
  [
    [0, 1, 0, 3, 12],
    [1, 3, 12, 0, 0],
  ],
  [[0], [0]],
  [
    [1, 1, 1, 0],
    [1, 1, 1, 0],
  ],
  [
    [0, 0, 0, 1],
    [1, 0, 0, 0],
  ],
])("test", (input, output) => {
  expect(moveZeroes(input)).toStrictEqual(output);
});
