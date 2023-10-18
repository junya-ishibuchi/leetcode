/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
var maxDepth_IterativeDFS = function (root) {
  if (!root) {
    return 0;
  }

  let maxDepth = 1;
  const stack = [{ node: root, depth: 1 }];

  while (stack.length) {
    let current = stack.pop();
    maxDepth = Math.max(current.depth, maxDepth);

    if (current.node?.left) {
      stack.push({ node: current.node.left, depth: current.depth + 1 });
    }
    if (current.node?.right) {
      stack.push({ node: current.node.right, depth: current.depth + 1 });
    }
  }

  return maxDepth;
};
var maxDepth_RecursiveDFS = function (root) {
  if (!root) {
    return 0;
  }

  return (
    1 +
    Math.max(
      maxDepth_RecursiveDFS(root.left),
      maxDepth_RecursiveDFS(root.right)
    )
  );
};
var maxDepth_BFS = function (root) {
  if (!root) {
    return 0;
  }

  const queue = [root];
  let depth = 0;

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    depth++;
  }

  return depth;
};
// @lc code=end
export { maxDepth_IterativeDFS, maxDepth_RecursiveDFS, maxDepth_BFS };
