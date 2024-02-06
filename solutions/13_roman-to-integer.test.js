import { romanToInt } from "./13_roman-to-integer";

test.each([
  ["III", 3],
  ["LVIII", 58],
  ["MCMXCIV", 1994],
])("test", (input, output) => {
  expect(romanToInt(input)).toStrictEqual(output);
});
