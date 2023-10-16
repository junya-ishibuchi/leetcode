/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 0;
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[left] > prices[i]) {
      left = i;
      continue;
    }
    if (maxProfit < prices[i] - prices[left]) {
      maxProfit = prices[i] - prices[left];
      right = i;
    }
  }

  return maxProfit;
};
// @lc code=end

export { maxProfit };
