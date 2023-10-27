/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */
/*
 * Time Complexity: O(logN) where N is the number of the nodes in the tree
 * Space Complexity: O(h) where h i the height of the tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const small = p.val < q.val ? p : q;
  const big = p.val < q.val ? q : p;

  if (
    (small.val < root.val && big.val > root.val) ||
    small.val === root.val ||
    big.val === root.val
  ) {
    return root;
  }

  if (small.val < root.val && big.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  if (small.val > root.val && big.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
};
// @lc code=end
export { lowestCommonAncestor };
