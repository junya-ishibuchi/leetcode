import { longestConsecutive } from "./128_longest-consecutive-sequence";

test.each([
  [[1, 2, 3, 3, 4], 4],
  [[100, 4, 200, 1, 3, 2, 5], 5],
  [[1, 2, 3], 3],
  [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1], 9],
  [[], 0],
])("test nums:%o", (nums, output) => {
  expect(longestConsecutive(nums)).toStrictEqual(output);
});
