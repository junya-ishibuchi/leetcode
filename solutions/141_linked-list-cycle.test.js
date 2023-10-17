import { createLinkedList } from "../data_structures/linked_list";
import { hasCycle, hasCycleConstant } from "./141_linked-list-cycle";

const cycleList1 = createLinkedList([3, 2, 0, -4]);
cycleList1.next.next.next.next = cycleList1.next;
const cycleList2 = createLinkedList([1, 2]);
cycleList2.next.next = cycleList2.next;
const cycleList3 = createLinkedList([1]);
const cycleList4 = createLinkedList([1, 2]);

test.each([cycleList1, cycleList2])("truthy", (head) => {
  expect(hasCycle(head)).toBeTruthy();
});

test.each([cycleList1, cycleList2])(
  "truthy (memory space is constant)",
  (head) => {
    expect(hasCycleConstant(head)).toBeTruthy();
  }
);

test.each([cycleList3, cycleList4, createLinkedList([])])("falsy", (head) => {
  expect(hasCycle(head)).toBeFalsy();
});

test.each([cycleList3, cycleList4, createLinkedList([])])(
  "falsy (memory space is constant)",
  (head) => {
    expect(hasCycleConstant(head)).toBeFalsy();
  }
);
