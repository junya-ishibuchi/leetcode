/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 */
/*
 * Time Complexity: O(p + q) where p and q are the number of the node in the tree
 * Space Complexity: O(w) where w is the maximum width of the tree
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
var isSameTree = function (p, q) {
  const queueP = [p];
  const queueQ = [q];

  while (queueP.length && queueQ.length) {
    let p = queueP.shift();
    let q = queueQ.shift();

    if (p?.val !== q?.val) {
      return false;
    }

    if (p?.left?.val !== q?.left?.val) {
      return false;
    }
    if (p?.right?.val !== q?.right?.val) {
      return false;
    }

    if (p?.left) {
      queueP.push(p.left);
      queueQ.push(q.left);
    }
    if (p?.right) {
      queueP.push(p.right);
      queueQ.push(q.right);
    }
  }

  return true;
};
// @lc code=end
export { isSameTree };
