/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * Time Complexity: O(n) where n is the length of the digits array
 * Space Complexity: O(1)
 */
/**
 * 1. prepare a carry-up variable which is boolean. Default is false
 * 2. iterate over the digits array from the back
 * 3. when reaching the last element of the digits, add 1
 * 4. when adding 1 and the value is less than 10, replace the value of the last element with the sum
 * 5. when adding 1 results in the value is going to be 10, set carry-up to true
 * 6. the condition of the loop statement is that carry-up is true and there are remaining digits
 * 7. once exit the loop statement, check the carry-up variable and if it's true, add 1 to first element of digits array
 * 8. return the digits array
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let sum = digits[digits.length - 1] + 1;
  if (sum < 10) {
    digits[digits.length - 1] = sum;
    return digits;
  }

  digits[digits.length - 1] = 0;
  let carryup = true;

  for (let i = digits.length - 2; i >= 0; i--) {
    sum = digits[i] + 1;

    if (sum >= 10) {
      digits[i] = 0;
    } else {
      digits[i] = sum;
      carryup = false;
      break;
    }
  }

  if (carryup) {
    digits.unshift(1);
  }

  return digits;
};
// @lc code=end

export { plusOne };
