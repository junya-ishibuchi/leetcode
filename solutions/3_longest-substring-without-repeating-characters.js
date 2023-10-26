/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/*
 * Time Complexity: O(n) where n is the length of the input string
 * Space Complexity: O(n) where n is the length of the input string
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let longestLength = 0;
  let startIdx = 0;

  for (const char of s) {
    while (set.has(char)) {
      if (longestLength < set.size) {
        longestLength = set.size;
      }
      set.delete(s[startIdx++]);
    }
    set.add(char);
  }

  return longestLength < set.size ? set.size : longestLength;
};
// @lc code=end
export { lengthOfLongestSubstring };
