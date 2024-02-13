import { reverseBits } from "./190_reverse-bits";

test.each([
  [43261596, 964176192],
  [4294967293, 3221225471],
])("test", (input, output) => {
  expect(reverseBits(input)).toStrictEqual(output);
});
