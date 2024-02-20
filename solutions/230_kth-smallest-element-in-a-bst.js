/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
 */
/**
 * Time Complexity: O(n) where n is the number of nodes of the tree
 * Space Complexity: O(h) where h is the height of the tree
 */
/**
 * 1. we will traverse using a recursive and in-order approach
 * 2. search the leftmost node
 * 3. The base case occurs when the root is null
 * 4. The recursive case decrement k
 * 5. when k is 0, the root's value is the Kth smallest element
 * 6. if k is not 0, search right node
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
var kthSmallest = function (root, k) {
  let smallest = null;
  function inOrderTraverse(root) {
    if (smallest || root === null) {
      return;
    }

    inOrderTraverse(root.left);
    k--;
    if (k === 0) {
      smallest = root.val;
      return;
    }
    inOrderTraverse(root.right);
  }

  inOrderTraverse(root);
  return smallest;
};
// @lc code=end

export { kthSmallest };
