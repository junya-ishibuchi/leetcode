/*
 * @lc app=leetcode id=703 lang=javascript
 *
 * [703] Kth Largest Element in a Stream
 */
/**
 * *** This solution is not optimal. We can improve it ***
 * Time Complexity for initializing: O(NlogN) where n is the length of nums
 * Time Complexity for adding: O(N)
 * Space Complexity: O(1)
 */
/**
 * Initializing:
 * 1. sort nums
 * 2. store k as a class property
 *
 * Adding:
 * 1. iterate over nums
 * 2. find the number that is greater than or equal to the number passed as an argument
 * 3. add the number at the index you find
 * 4. return the Kth largest number
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.nums = nums.sort((a, b) => a - b);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.nums.length === 0) {
    this.nums.push(val);
    return val;
  }

  if (val >= this.nums[this.nums.length - 1]) {
    this.nums.push(val);
    return this.nums[this.nums.length - this.k];
  }

  for (let i = 0; i < this.nums.length; i++) {
    if (val <= this.nums[i]) {
      this.nums.splice(i, 0, val);
      break;
    }
  }

  return this.nums[this.nums.length - this.k];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

export { KthLargest };
