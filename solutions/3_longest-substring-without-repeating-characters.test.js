import { lengthOfLongestSubstring } from "./3_longest-substring-without-repeating-characters";

test.each([
  ["abcabcbb", 3],
  ["abcabcbdef", 5],
  ["bbbbb", 1],
  ["pwwkew", 3],
  ["abc", 3],
  ["aaa12345bbb", 7],
  ["aaa1 2 3 4 bbb", 4],
  ["dvdf", 3],
  ["dvvdf", 3],
  ["anviaj", 5],
])("test", (s, output) => {
  expect(lengthOfLongestSubstring(s)).toStrictEqual(output);
});
