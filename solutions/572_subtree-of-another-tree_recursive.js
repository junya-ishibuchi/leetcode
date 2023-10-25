/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
 */
/*
 * Time Complexity: O(nm) where n is the number of the nodes in the tree and m is the number of the nodes in the subTree
 * Space Complexity: O(w) where w is the max width of the subTree
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree_Recursive = function (root, subRoot) {
  if (!subRoot) {
    return true;
  }
  if (!root) {
    return false;
  }

  if (isSameTree(root, subRoot)) {
    return true;
  }

  return (
    isSubtree_Recursive(root.left, subRoot) ||
    isSubtree_Recursive(root.right, subRoot)
  );
};

function isSameTree(s, t) {
  if (!s && !t) {
    return true;
  }

  if (s && t && s.val === t.val) {
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
  }

  return false;
}
// @lc code=end

export { isSubtree_Recursive };
