/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

/**
 * 1. Calculate sum of numbers from 0 to the length of nums + 1
 * 2. Calculate the sum of nums
 * 3. The difference between step 1 - step 2 should be the missing number
 */

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const sumOfNumsLength = ((nums.length + 1) * nums.length) / 2;

  const sumOfNums = nums.reduce((n, current) => n + current, 0);

  return sumOfNumsLength - sumOfNums;
};
// @lc code=end

export { missingNumber };
