import { KthLargest } from "./703_kth-largest-element-in-a-stream";

test("test", () => {
  const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
  expect(kthLargest.add(3)).toStrictEqual(4);
  expect(kthLargest.add(5)).toStrictEqual(5);
  expect(kthLargest.add(10)).toStrictEqual(5);
  expect(kthLargest.add(9)).toStrictEqual(8);
  expect(kthLargest.add(4)).toStrictEqual(8);
});

test("test", () => {
  const kthLargest = new KthLargest(1, []);
  expect(kthLargest.add(-3)).toStrictEqual(-3);
  expect(kthLargest.add(-2)).toStrictEqual(-2);
  expect(kthLargest.add(-4)).toStrictEqual(-2);
  expect(kthLargest.add(0)).toStrictEqual(0);
  expect(kthLargest.add(4)).toStrictEqual(4);
});
