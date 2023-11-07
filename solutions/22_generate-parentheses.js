/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const results = [];
  backtrack("", 0, 0);

  function backtrack(currentString, openCount, closeCount) {
    if (openCount === n && closeCount === n) {
      results.push(currentString);
      return;
    }

    if (openCount < n) {
      backtrack(currentString + "(", openCount + 1, closeCount);
    }
    if (openCount > closeCount) {
      backtrack(currentString + ")", openCount, closeCount + 1);
    }
  }

  return results;
};

// @lc code=end

export { generateParenthesis };
