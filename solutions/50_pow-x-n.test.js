import { myPow } from "./50_pow-x-n";

test.each([
  [2, 10, 1024],
  [2.1, 3, 9.261],
  [2, -2, 0.25],
  [-2, -2, 0.25],
  [-2, 2, 4],
  [0, -2147483648, Infinity],
])("test", (x, n, output) => {
  expect(myPow(x, n)).toBeCloseTo(output);
});
