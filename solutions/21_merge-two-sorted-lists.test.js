import { createLinkedList } from "../data_structures/linked_list";
import { mergeTwoLists } from "./21_merge-two-sorted-lists";

test.each([
  [
    createLinkedList([1, 2, 4]),
    createLinkedList([1, 3, 4]),
    createLinkedList([1, 1, 2, 3, 4, 4]),
  ],
  [
    createLinkedList([-4, -2, -1]),
    createLinkedList([1, 3, 4]),
    createLinkedList([-4, -2, -1, 1, 3, 4]),
  ],
  [
    createLinkedList([-4, -2]),
    createLinkedList([-2, -1]),
    createLinkedList([-4, -2, -2, -1]),
  ],
  [
    createLinkedList([1, 2, 4]),
    createLinkedList([4]),
    createLinkedList([1, 2, 4, 4]),
  ],
  [
    createLinkedList([1, 2, 4]),
    createLinkedList([1]),
    createLinkedList([1, 1, 2, 4]),
  ],
  [createLinkedList([]), createLinkedList([]), createLinkedList([])],
  [createLinkedList([]), createLinkedList([0]), createLinkedList([0])],
])("truthy: list1=%o, list2=%o, output=%o", (list1, list2, output) => {
  expect(mergeTwoLists(list1, list2)).toStrictEqual(output);
});
