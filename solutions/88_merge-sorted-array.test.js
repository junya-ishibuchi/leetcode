import { merge } from "./88_merge-sorted-array";

test.each([
  [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]],
  [[7, 8, 9, 0, 0, 0], 3, [1, 2, 3], 3, [1, 2, 3, 7, 8, 9]],
  [[1], 1, [], 0, [1]],
  [[0], 0, [1], 1, [1]],
])("test", (nums1, m, nums2, n, output) => {
  expect(merge(nums1, m, nums2, n)).toStrictEqual(output);
});
