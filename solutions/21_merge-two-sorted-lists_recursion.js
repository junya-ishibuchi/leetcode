/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * Time Complexity: O(n + m) where n is the length of the list1 and m is the length of the list2
 * Space Complexity: O(n + m)
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoListsRecursion = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoListsRecursion(list1.next, list2);
    return list1;
  }
  if (list1.val >= list2.val) {
    list2.next = mergeTwoListsRecursion(list1, list2.next);
    return list2;
  }
};
// @lc code=end
export { mergeTwoListsRecursion };
