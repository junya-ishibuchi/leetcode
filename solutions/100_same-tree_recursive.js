/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 */
/*
 * Time Complexity: O(n) where n is the number of nodes in the larger of the two nodes
 * Space Complexity: O(h) where h is the height of the tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree_Recursive = function (p, q) {
  if (!p && !q) {
    return true;
  }
  if (p && q && p.val === q.val) {
    return (
      isSameTree_Recursive(p.left, q.left) &&
      isSameTree_Recursive(p.right, q.right)
    );
  }
  return false;
};
// @lc code=end
export { isSameTree_Recursive };
