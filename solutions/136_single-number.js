/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */
/**
 * Time Complexity: O(n) where n is the length of the nums
 * Space Complexity: O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;
  for (const n of nums) {
    result ^= n;
  }

  return result;
};
// @lc code=end

export { singleNumber };
