/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */
/*
 * Time Complexity:
 * Space Complexity:
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const set = new Set([head]);

  while (head?.next) {
    if (set.has(head.next)) {
      return true;
    }
    set.add(head.next);
    head = head.next;
  }

  return false;
};

var hasCycleConstant = function (head) {
  let walker = head;
  let runner = head?.next;

  while (runner) {
    if (walker === runner) {
      return true;
    }
    walker = walker.next;
    runner = runner.next?.next;
  }
  return false;
};
// @lc code=end
export { hasCycle, hasCycleConstant };
