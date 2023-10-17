import { mergeTwoLists } from "./21_merge-two-sorted-lists";

function createLinkedList(array) {
  if (!array.length) return null;

  const head = { val: array[0], next: null };
  let tail = head;

  for (let i = 1; i < array.length; i++) {
    const node = { val: array[i], next: null };

    tail.next = node;
    tail = node;
  }

  return head;
}

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
