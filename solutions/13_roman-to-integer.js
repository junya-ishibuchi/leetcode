/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * Time Complexity: O(n) where n is the length of the s
 * Space Complexity: O(1)
 */
/**
 * 1. iterate over each letter of the s
 * 2. if the letter is not I, X or C, just add it to the result sum
 * 3. if the letter is I, X, or C, check the next letter and if they're corresponding letters, substract them
 * 4. return the result sum
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const ROMAN_TO_INTEGER = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "I" && s[i] !== "X" && s[i] !== "C") {
      sum += ROMAN_TO_INTEGER[s[i]];
      continue;
    }

    if (ROMAN_TO_INTEGER[s[i]] < ROMAN_TO_INTEGER[s[i + 1]]) {
      sum += ROMAN_TO_INTEGER[s[i + 1]] - ROMAN_TO_INTEGER[s[i]];
      i++;
    } else {
      sum += ROMAN_TO_INTEGER[s[i]];
    }
  }

  return sum;
};
// @lc code=end

export { romanToInt };
