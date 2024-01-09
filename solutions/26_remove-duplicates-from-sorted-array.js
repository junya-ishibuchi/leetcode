/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 * Time Complexity: O(n) where n is the lenght of the input array
 * Space Complexity: O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 1) {
    return 1;
  }

  let uniqueNumIdx = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueNumIdx - 1]) {
      nums[uniqueNumIdx] = nums[i];
      uniqueNumIdx++;
    }
  }

  return uniqueNumIdx;
};
// @lc code=end

export { removeDuplicates };
