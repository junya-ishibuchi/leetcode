/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

/*
 * Time Complexity: O(n) where n is the number of the array
 * Space Complexity: O(1)
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxCapacity = 0;
  let left = 0;
  let right = height.length - 1;

  for (let wide = height.length - 1; wide > 0; wide--) {
    let capacity = wide * Math.min(height[left], height[right]);
    if (capacity > maxCapacity) {
      maxCapacity = capacity;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxCapacity;
};
// @lc code=end
export { maxArea }