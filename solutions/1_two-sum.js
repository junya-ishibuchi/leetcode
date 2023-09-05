/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 * Time Complexity: O(n) where n is the number of the "nums"
 * Space Complexity: O(n)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let targetNum = target - nums[i];
    if (map.has(targetNum)) {
      return [map.get(targetNum), i];
    }
    map.set(nums[i], i);
  }

  return [-1, -1];
};
// @lc code=end

export { twoSum };
