/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */
/**
 * Time Complexity: O(m + n)
 * Space Complexity: O(1)
 */

/**
 * 1. iterate over nums1 from the end and store the loop index from the end
 * 2. compare nums1[m - 1] with nums2[n - 1]
 * 3. if nums1[m - 1] < nums2[n - 1], set nums1[loop index] to nums2[n - 1] and decrement n
 * 4. if not, set nums1[loop index] to nums1[m - 1] and decrement m
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let mergeIndex = m + n - 1;
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[mergeIndex] = nums1[m - 1];
      m--;
    } else {
      nums1[mergeIndex] = nums2[n - 1];
      n--;
    }
    mergeIndex--;
  }

  while (n > 0) {
    nums1[mergeIndex] = nums2[n - 1];
    n--;
    mergeIndex--;
  }
};
// @lc code=end

export { merge };
