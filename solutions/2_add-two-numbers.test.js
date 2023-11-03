import { createLinkedList } from "../data_structures/linked_list";
import { addTwoNumbers } from "./2_add-two-numbers";

test.each([
  [
    createLinkedList([1, 2]),
    createLinkedList([5, 6, 7]),
    createLinkedList([6, 8, 7]),
  ],
  [
    createLinkedList([9, 9]),
    createLinkedList([9, 9, 9, 9, 9]),
    createLinkedList([8, 9, 0, 0, 0, 1]),
  ],
  [
    createLinkedList([9, 9, 9, 9, 9]),
    createLinkedList([9, 9]),
    createLinkedList([8, 9, 0, 0, 0, 1]),
  ],
  [createLinkedList([0]), createLinkedList([0]), createLinkedList([0])],
])("test", (l1, l2, output) => {
  expect(addTwoNumbers(l1, l2)).toStrictEqual(output);
});
