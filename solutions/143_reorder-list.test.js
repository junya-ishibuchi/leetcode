import { createLinkedList } from "../data_structures/linked_list";
import { reorderList } from "./143_reorder-list";

test.each([
  [createLinkedList([0, 1, 2, 3, 4]), createLinkedList([0, 4, 1, 3, 2])],
  [createLinkedList([0, 1, 2, 3]), createLinkedList([0, 3, 1, 2])],
  [createLinkedList([0, 1]), createLinkedList([0, 1])],
  [createLinkedList([0]), createLinkedList([0])],
])("test", (head, output) => {
  reorderList(head);
  expect(head).toStrictEqual(output);
});
