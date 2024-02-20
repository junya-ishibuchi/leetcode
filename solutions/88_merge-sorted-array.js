/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */
/**
 * Time Complexity: O(m + n)
 * Space Complexity: O(m)
 */

/**
 * 1. create a queue to store numbers from nums1 up to m
 * 2. iterate over nums1
 * 3. create variables qidx and nums2idx
 * 4. compare the element of queue[qidx] with the element of nums2[nums2idx]
 * 5. if the element of queue[qidx] is greater than the element of nums2[nums2idx], store the number in nums1 of loop index
 * 6. increment nums2idx
 * 7. if not just, continue and increment qidx
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
  const queue = nums1.slice(0, m);

  let qIdx = 0;
  let nums2Idx = 0;

  for (let i = 0; i < nums1.length; i++) {
    if (qIdx >= m || (nums2Idx <= n && queue[qIdx] > nums2[nums2Idx])) {
      nums1[i] = nums2[nums2Idx];
      nums2Idx++;
    } else {
      nums1[i] = queue[qIdx];
      qIdx++;
    }
  }

  return nums1;
};
// @lc code=end

export { merge };
