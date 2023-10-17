export function createLinkedList(array) {
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