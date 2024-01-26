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
  const prefix = generatePrefixProduct(nums);
  const postfix = generatePostfixProduct(nums);

  const results = [];
  for (let i = 0; i < nums.length; i++) {
    results[i] = (prefix[i - 1] ?? 1) * (postfix[i + 1] ?? 1);
  }

  return results;
};

function generatePrefixProduct(nums) {
  const products = [];
  for (let i = 0; i < nums.length; i++) {
    products[i] = (products[i - 1] ?? 1) * nums[i];
  }

  return products;
}

function generatePostfixProduct(nums) {
  const products = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    products[i] = (products[i + 1] ?? 1) * nums[i];
  }

  return products;
}

export { productExceptSelf };
// @lc code=end
