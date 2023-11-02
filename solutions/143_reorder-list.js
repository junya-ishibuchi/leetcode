/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 */
/*
 * Time Complexity: O(n) where n is the number of nodes of LinkedList
 * Space Complexity: O(1)
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head.next) return head;

  const middle = getMiddleNode(head);
  const right = reverseLinkedList(middle.next);
  middle.next = null;
  mergeLinkedList(head, right);
};

function getMiddleNode(head) {
  let walker = head;
  let runner = head.next;
  while (runner && runner.next) {
    walker = walker.next;
    runner = runner.next.next;
  }

  return walker;
}

function reverseLinkedList(head) {
  let current = head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;

    prev = current;
    current = next;
  }

  return prev;
}

function mergeLinkedList(left, right) {
  while (right) {
    const tmp1 = left.next;
    const tmp2 = right.next;

    left.next = right;
    right.next = tmp1;

    left = tmp1;
    right = tmp2;
  }
}
// @lc code=end
export { reorderList };
