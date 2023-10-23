/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */
/**
 * Time Complexity: O(N) where N is the number of the nodes in the tree
 * Space Complexity: O(H) where H is the height of this tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) {
    return true;
  }

  return getDepth(root) !== -1;
};

function getDepth(tree) {
  if (!tree) {
    return 0;
  }

  let left = getDepth(tree.left);
  let right = getDepth(tree.right);
  if (left === -1 || right === -1 || Math.abs(left - right) >= 2) return -1;
  return Math.max(left, right) + 1;
}
// @lc code=end

export { isBalanced };
