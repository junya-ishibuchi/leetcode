/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */
/*
 * Time Complexity: O(logN)
 * Space Complexity: O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let leftIdx = 0;
  let rightIdx = nums.length - 1;

  while (leftIdx <= rightIdx) {
    const middleIdx = Math.floor((rightIdx + leftIdx) / 2);
    if (nums[middleIdx] === target) {
      return middleIdx;
    }

    if (nums[middleIdx] < target) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }

  return -1;
};

// @lc code=end

export { search };
