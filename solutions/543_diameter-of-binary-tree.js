/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 */
/**
 * Time Complexity: O(n) where n is the number of the nodes on the tree
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root, max = [0]) {
  traverseTree(root, max);

  return max[0];
};

function traverseTree(tree, max) {
  if (!tree) {
    return 0;
  }

  const leftTree = traverseTree(tree.left, max);
  const rightTree = traverseTree(tree.right, max);

  const currentDiameter = Math.max(max[0], leftTree + rightTree);
  max[0] = currentDiameter;
  const height = 1 + Math.max(leftTree, rightTree);

  return height;
}
// @lc code=end

export { diameterOfBinaryTree };
