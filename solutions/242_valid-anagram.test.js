import { isAnagram } from "./242_valid-anagram";

test.each([
  ["anagram", "nagaram"],
  ["ana", "ana"],
  ["a", "a"],
  ["an", "na"],
  ["", ""],
])("truthy cases: t=%s, s=%s", (t, s) => {
  expect(isAnagram(t, s)).toBeTruthy();
});

test.each([
  ["rat", "car"],
  ["c", "car"],
  ["a", "b"],
  ["an", "nn"],
])("falsy cases: t=%s, s=%s", (t, s) => {
  expect(isAnagram(t, s)).toBeFalsy();
});
