/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 */
/*
 * Time Complexity: O(N) where N is the number of total nodes
 * Space Complexity: O(N)
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return null;
  }

  const left = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(left);

  return root;
};

// @lc code=end

export { invertTree };
