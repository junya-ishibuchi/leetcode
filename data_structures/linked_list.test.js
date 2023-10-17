import { createLinkedList } from "./linked_list";

test("createLinkedList() can create a linked list", () => {
  expect(createLinkedList([1, 2, 3])).toStrictEqual({
    val: 1,
    next: { val: 2, next: { val: 3, next: null } },
  });
});

test("createLinkedList() returns null when given array is empty", () => {
  expect(createLinkedList([])).toBeNull();
});
