import { plusOne } from "./66_plus-one";

test.each([
  [
    [1, 2, 3],
    [1, 2, 4],
  ],
  [
    [4, 3, 2, 1],
    [4, 3, 2, 2],
  ],
  [[9], [1, 0]],
  [
    [9, 0, 9],
    [9, 1, 0],
  ],
  [
    [9, 9, 9],
    [1, 0, 0, 0],
  ],
])("test", (input, output) => {
  expect(plusOne(input)).toStrictEqual(output);
});
