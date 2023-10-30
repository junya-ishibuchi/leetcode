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

  const map = new Map();
  let result = 1;
  for (const num of nums) {
    map.set(num, false);
  }

  for (const num of nums) {
    let leftNum = num - 1;
    let rightNum = num + 1;
    let leftPath = 0;
    let rightPath = 0;

    if (map.get(leftNum) || map.get(rightNum)) {
      continue;
    }

    while (map.has(leftNum)) {
      map.set(leftNum, true);
      leftPath++;
      leftNum--;
    }
    while (map.has(rightNum)) {
      map.set(rightNum, true);
      rightPath++;
      rightNum++;
    }
    const longestPathInThisCase = leftPath + rightPath + 1;
    if (longestPathInThisCase > result) {
      result = longestPathInThisCase;
    }
  }

  return result;
};
// @lc code=end
export { longestConsecutive };
