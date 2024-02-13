/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */
/**
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  for (let i = 1; i <= 32; i++) {
    if ((n >>> i) & 1) {
      count++;
    }
  }
  return count;
};
// @lc code=end

export { hammingWeight };
