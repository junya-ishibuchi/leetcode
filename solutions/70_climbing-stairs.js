/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let one = 1;
  let two = 1;
  for (let i = n - 2; i >= 0; i--) {
    const temp = one;
    one += two;
    two = temp;
  }

  return one;
};
// @lc code=end

export { climbStairs };
