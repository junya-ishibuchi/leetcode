/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 * Time Complexity: O(n) where n is the input number
 * Space Complexity: O(1)
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;

  let prev2 = 0;
  let prev1 = 1;
  let curr = prev1 + prev2;

  for (let i = 2; i <= n; i++) {
    curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }

  return curr;
};
// @lc code=end

export { fib };
