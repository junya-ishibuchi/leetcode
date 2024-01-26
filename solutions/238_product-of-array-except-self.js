/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 * Time Complexity: O(n) where n is the number of nums
 * Space Complexity: O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const results = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    results[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    results[i] *= postfix;
    postfix *= nums[i];
  }

  return results;
};

export { productExceptSelf };
// @lc code=end
