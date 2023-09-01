/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const letterMap = new Map();
  for (let letter of s) {
    if (!letterMap.has(letter)) {
      letterMap.set(letter, 1);
      continue;
    }
    let count = letterMap.get(letter) + 1;
    letterMap.set(letter, count);
  }

  for (let letter of t) {
    if (!letterMap.has(letter)) {
      return false;
    }
    let count = letterMap.get(letter) - 1;
    letterMap.set(letter, count);
    if (letterMap.get(letter) === 0) {
      letterMap.delete(letter);
    }
  }

  return letterMap.size === 0;
};
// @lc code=end

export { isAnagram };
