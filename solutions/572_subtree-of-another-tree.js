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
var isSubtree = function (root, subRoot) {
  const stack = [root];

  while (stack.length) {
    const currentNode = stack.shift();

    if (currentNode.val === subRoot.val) {
      if (isSameTree(currentNode, subRoot)) {
        return true;
      }
    }
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
  }

  return false;
};

function isSameTree(a, b) {
  const stackA = [a];
  const stackB = [b];

  while (stackA.length && stackB.length) {
    const currentA = stackA.shift();
    const currentB = stackB.shift();

    if ((!currentA && currentB) || (currentA && !currentB)) {
      return false;
    }
    if (!currentA && !currentB) {
      continue;
    }
    if (currentA.val === currentB.val) {
      stackA.push(currentA.left);
      stackA.push(currentA.right);
      stackB.push(currentB.left);
      stackB.push(currentB.right);
    } else {
      return false;
    }
  }

  return true;
}
// @lc code=end

export { isSubtree };
