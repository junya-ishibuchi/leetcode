/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/*
 * Time Complexity: O(n) where n is the length of the input string
 * Space Complexity: O(n)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
      continue;
    }

    if (stack.length <= 0) {
      return false;
    }
    if (c === ")" && stack.pop() !== "(") {
      return false;
    } else if (c === "}" && stack.pop() !== "{") {
      return false;
    } else if (c === "]" && stack.pop() !== "[") {
      return false;
    }
  }

  return stack.length === 0;
};

export { isValid };
// @lc code=end
