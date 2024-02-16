import { climbStairs } from "./70_climbing-stairs";

test.each([
  [1, 1],
  [2, 2],
  [3, 3],
  [44, 1134903170],
])("test", (i, o) => {
  expect(climbStairs(i)).toStrictEqual(o);
});
