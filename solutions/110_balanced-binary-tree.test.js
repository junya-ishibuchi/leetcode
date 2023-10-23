import { createBinaryTree } from "../data_structures/binary_tree";
import { isBalanced } from "./110_balanced-binary-tree";

test.each([
  [createBinaryTree([3, 9, 20, null, null, 15, 7])],
  [createBinaryTree([3, 9, 20, null, null, 15])],
  [createBinaryTree([1])],
  [createBinaryTree([])],
])("truthy", (tree) => {
  expect(isBalanced(tree)).toBeTruthy();
});

test.each([
  [createBinaryTree([1, 2, 2, 3, 3, null, null, 4, 4])],
  [createBinaryTree([1, 2, null, 3])],
])("falsy", (tree) => {
  expect(isBalanced(tree)).toBeFalsy();
});
