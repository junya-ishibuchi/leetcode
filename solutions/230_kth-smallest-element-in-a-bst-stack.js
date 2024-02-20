/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
 */
/**
 * Time Complexity: O(n) where n is the number of nodes of the tree
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
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallestWithStack = function (root, k) {
  const stack = [root];
  let node = root;

  while (stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    k--;
    if (k === 0) {
      return node.val;
    }
    node = node.right;
  }
};
// @lc code=end

export { kthSmallestWithStack };
