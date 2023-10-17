import { createLinkedList } from "../data_structures/linked_list";
import { reverseList } from "./206_reverse-linked-list";

test.each([
  [createLinkedList([1, 2, 3, 4, 5]), createLinkedList([5, 4, 3, 2, 1])],
  [createLinkedList([1, 2]), createLinkedList([2, 1])],
  [createLinkedList([1]), createLinkedList([1])],
  [createLinkedList([]), createLinkedList([])],
])("truthy head=%o, output=%o", (head, output) => {
  expect(reverseList(head)).toStrictEqual(output);
});

test.each([
  [createLinkedList([1, 2, 3, 4, 5]), createLinkedList([5, 4, 3, 1, 2])],
  [createLinkedList([1, 2, 3]), createLinkedList([1, 1, 1])],
  [createLinkedList([1, 2]), createLinkedList([1, 2])],
])("truthy head=%o, output=%o", (head, output) => {
  expect(reverseList(head)).not.toStrictEqual(output);
});
