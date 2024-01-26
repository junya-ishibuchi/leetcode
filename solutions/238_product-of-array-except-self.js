/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 * Time Complexity: O(n) where n is the number of nums
 * Space Complexity: O(n)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const left = generateLeftProduct(nums);
  const right = generateRightProduct(nums);

  const results = [];
  for (let i = 0; i < nums.length; i++) {
    results.push(left[i] * right[i]);
  }

  return results;
};

function generateLeftProduct(nums) {
  const products = [1];
  for (let i = 1; i < nums.length; i++) {
    products.push(products[i - 1] * nums[i - 1]);
  }

  return products;
}

function generateRightProduct(nums) {
  const products = new Array(nums.length);
  products[nums.length - 1] = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    products[i - 1] = products[i] * nums[i];
  }

  return products;
}

export { productExceptSelf };
// @lc code=end
