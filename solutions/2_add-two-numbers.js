/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */
/*
 * Time Complexity: O(Max(n,m)) where n is the number of the nodes of l1 and m is the number of the nodes of l2
 * Space Complexity: O(Max(n,m)) where n is the number of the nodes of l1 and m is the number of the nodes of l2
 *
 */

import { createLinkedList } from "../data_structures/linked_list";

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carryUp = 0;
  let head = createLinkedList([0]);
  let current = head;

  while (l1 || l2 || carryUp) {
    const nodeValue = (l1?.val || 0) + (l2?.val || 0) + carryUp;
    carryUp = Math.floor(nodeValue / 10);

    current.next = new createLinkedList([nodeValue % 10]);
    current = current.next;

    l1 = l1?.next;
    l2 = l2?.next;
  }

  return head.next;
};
// @lc code=end

export { addTwoNumbers };
