import { removeDuplicates } from "./26_remove-duplicates-from-sorted-array";

test.each([
  [[1], 1],
  [[1, 1, 2], 2],
  [[1, 2, 3, 4, 5], 5],
  [[1, 1, 1, 2, 2, 3, 4, 4, 5], 5],
  [[1, 2, 3, 4, 5, 5, 5], 5],
])("test", (input, output) => {
  expect(removeDuplicates(input)).toEqual(output);
});
