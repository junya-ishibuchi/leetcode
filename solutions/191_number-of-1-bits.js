/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    n &= n - 1;
    count++;
  }

  return count;
};
// @lc code=end

export { hammingWeight };
