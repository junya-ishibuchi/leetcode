import { threeSum } from "./15_3-sum";

test.each([
  [
    [-1, 0, 1, 2, -1, -4],
    [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  ],
  [[0, 1, 1], []],
  [[0, 0, 0], [[0, 0, 0]]],
])("test", (i, o) => {
  expect(threeSum(i)).toStrictEqual(o);
});
