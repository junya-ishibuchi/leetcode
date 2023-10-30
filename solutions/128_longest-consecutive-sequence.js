/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

/*
 * Time Complexity: O(n) where n is the number of the input array
 * Space Complexity: O(n) where n is the number of the input array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let result = 1;
  const set = new Set(nums);

  for (const num of nums) {
    if (set.has(num - 1)) continue;

    let length = 1;
    while (set.has(num + length)) {
      length++;
    }
    result = Math.max(result, length);
  }

  return result;
};
// @lc code=end
export { longestConsecutive };
