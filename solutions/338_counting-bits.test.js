import { countBits } from "./338_counting-bits";

test.each([
  [0, [0]],
  [1, [0, 1]],
  [2, [0, 1, 1]],
  [5, [0, 1, 1, 2, 1, 2]],
])("test", (input, output) => {
  expect(countBits(input)).toStrictEqual(output);
});
