import { isPalindrome } from "./125_valid-palindrome";

test.each([
  "A man, a plan, a canal: Panama",
  "ana",
  "a",
  " ",
  " . , ! f",
  "010",
])("truthy %s", (s) => {
  expect(isPalindrome(s)).toBeTruthy();
});

test.each(["123abc123", "ffb", "race a car", "0P"])("falsy %s", (s) => {
  expect(isPalindrome(s)).toBeFalsy();
});
