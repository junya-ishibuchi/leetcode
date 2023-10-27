import { search } from "./33_search-in-rotated-sorted-array";

test.each([
  [[0, 1, 2, 4, 5, 6, 7], 5, 4],
  [[4, 5, 6, 7, 0, 1, 2], 0, 4],
  [[5, 6, 7, 0, 1, 2, 4], 7, 2],
  [[8, 1, 2, 3, 4, 5, 6, 7], 6, 6],
  [[3, 4, 0, 1], 30, -1],
  [[3, 4, 0, 1], -3, -1],
  [[3, 4, 0, -1], -1, 3],
  [[1], 0, -1],
  [[1], 1, 0],
])("test", (nums, target, output) => {
  expect(search(nums, target)).toStrictEqual(output);
});
