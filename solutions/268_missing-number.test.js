import { missingNumber } from "./268_missing-number";

test.each([
  [[3, 0, 1], 2],
  [[0, 1], 2],
  [[9, 6, 4, 2, 3, 5, 7, 0, 1], 8],
  [[0], 1],
])("test", (input, output) => {
  expect(missingNumber(input)).toStrictEqual(output);
});
