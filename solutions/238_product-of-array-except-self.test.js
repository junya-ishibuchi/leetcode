import { productExceptSelf } from "./238_product-of-array-except-self";

test.each([
  [
    [1, 2, 3, 4],
    [24, 12, 8, 6],
  ],
  [
    [1, 0, 3, 4],
    [0, 12, 0, 0],
  ],
  [
    [1, 2],
    [2, 1],
  ],
  [
    [1, -2, 3, -4],
    [24, -12, 8, -6],
  ],
])("test", (array, output) => {
  expect(productExceptSelf(array)).toStrictEqual(output);
});
