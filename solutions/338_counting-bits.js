/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * 0 - 0000 - 0
 * 1 - 0001 - 1
 * 2 - 0010 - 1 = 1 + dp[0] -> 2^1 - 2
 * 3 - 0011 - 2 = 1 + dp[1]
 * 4 - 0100 - 1 = 1 + dp[0] -> 2^2 - 4
 * 5 - 0101 - 2 = 1 + dp[1]
 * 6 - 0110 - 2 = 1 + dp[2]
 * 7 - 0111 - 3 = 1 + dp[3]
 * 8 - 1000 - 1 = 1 + dp[0] -> 2^3 - 8
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = new Array(n);
  dp[0] = 0;
  let offset = 1;

  for (let i = 1; i <= n; i++) {
    if (i === offset * 2) {
      offset *= 2;
    }
    dp[i] = 1 + dp[i - offset];
  }

  return dp;
};
// @lc code=end

export { countBits };
