import { createBinaryTree } from "../data_structures/binary_tree";
import { kthSmallest } from "./230_kth-smallest-element-in-a-bst";
import { kthSmallestWithStack } from "./230_kth-smallest-element-in-a-bst-stack";

test.each([
  [createBinaryTree([3, 1, 4, null, 2]), 1, 1],
  [createBinaryTree([5, 3, 6, 2, 4, null, null, 1]), 3, 3],
  [createBinaryTree([5, 3, 6, 2, 4, null, null, 1]), 5, 5],
])("test", (tree, k, o) => {
  expect(kthSmallest(tree, k)).toStrictEqual(o);
});

test.each([
  [createBinaryTree([3, 1, 4, null, 2]), 1, 1],
  [createBinaryTree([5, 3, 6, 2, 4, null, null, 1]), 3, 3],
  [createBinaryTree([5, 3, 6, 2, 4, null, null, 1]), 5, 5],
])("test", (tree, k, o) => {
  expect(kthSmallestWithStack(tree, k)).toStrictEqual(o);
});
