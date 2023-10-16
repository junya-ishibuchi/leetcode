import { search } from "./704_binary-search";

test.each([
  [[-1, 0, 3, 5, 9, 12], 9, 4],
  [[-1, 5, 9], 9, 2],
  [[-1, 9], 9, 1],
  [[9], 9, 0],
])("truthy nums:%o, target:%d", (nums, target, idx) => {
  expect(search(nums, target)).toStrictEqual(idx);
});

test.each([
  [[-1, 0, 3, 5, 9, 12], 2],
  [[-1, 5, 9], 2],
  [[-1, 9], 2],
  [[9], 2],
])("truthy nums:%o, target:%d", (nums, target) => {
  expect(search(nums, target)).toStrictEqual(-1);
});
