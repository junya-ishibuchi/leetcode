/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
/**
 * Time Complexity: O(logN)
 * Space Complexity: O(1)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const powCalc = (x, n) => {
    if (n === 0 || x === 1) return 1;
    if (n === 1) return x;

    const half = powCalc(x, Math.floor(n / 2));
    return n % 2 ? half * half * x : half * half;
  };

  return n > 0 ? powCalc(x, Math.abs(n)) : 1 / powCalc(x, Math.abs(n));
};
// @lc code=end

export { myPow };
