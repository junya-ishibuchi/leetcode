import { maxArea } from "./11_container-with-most-water";

test.each([
  [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
  [[1, 8, 6, 2, 5, 4, 100, 3, 7], 49],
  [[1, 1], 1],
  [[1, 2, 3, 4, 5], 6],
])("test", (height, output) => {
  expect(maxArea(height)).toStrictEqual(output);
});
