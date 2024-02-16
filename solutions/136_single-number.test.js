import { singleNumber } from "./136_single-number";

test.each([
  [[2, 2, 1], 1],
  [[4, 2, 1, 2, 1], 4],
  [[1], 1],
])("test", (i, o) => {
  expect(singleNumber(i)).toStrictEqual(o);
});
