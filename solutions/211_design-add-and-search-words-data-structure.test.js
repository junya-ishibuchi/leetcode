import { WordDictionary } from "./211_design-add-and-search-words-data-structure";

test("test", () => {
  const word = new WordDictionary();
  word.addWord("bad");
  word.addWord("dad");
  word.addWord("mad");
  expect(word.search("pad")).toBeFalsy();
  expect(word.search("bad")).toBeTruthy();
  expect(word.search(".ad")).toBeTruthy();
  expect(word.search("b..")).toBeTruthy();
});
