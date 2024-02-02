/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 * Time Complexity: O(n) where n is the length of the input array
 * Space Complexity: O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;
  let right = 1;

  while (right <= nums.length - 1) {
    if (nums[left] !== 0) {
      left++;
      right++;
    } else {
      if (nums[right] !== 0) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
      }
      right++;
    }
  }

  return nums;
};

// @lc code=end

export { moveZeroes };
