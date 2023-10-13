/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

/*
 * Time Complexity: O(n) where n is the number of the input string
 * Space Complexity: O(1)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let leftPointer = 0;
  let rightPointer = s.length - 1;
  while (leftPointer <= rightPointer) {
    if (!isAlphaNumeric(s.charAt(leftPointer))) {
      leftPointer++;
      continue;
    }
    if (!isAlphaNumeric(s.charAt(rightPointer))) {
      rightPointer--;
      continue;
    }

    if (
      s.charAt(leftPointer).toLowerCase() !==
      s.charAt(rightPointer).toLowerCase()
    ) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }

  return true;
};

function isAlphaNumeric(char) {
  return (
    (char >= "a" && char <= "z") ||
    (char >= "A" && char <= "Z") ||
    (char >= "0" && char <= "9")
  );
}

export { isPalindrome };
// @lc code=end
