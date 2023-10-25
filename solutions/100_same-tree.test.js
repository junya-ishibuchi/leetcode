import { createBinaryTree } from "../data_structures/binary_tree";
import { isSameTree } from "./100_same-tree";
import { isSameTree_Recursive } from "./100_same-tree_recursive";

test.each([
  [createBinaryTree([1, 2, 3]), createBinaryTree([1, 2, 3])],
  [createBinaryTree([1]), createBinaryTree([1])],
  [createBinaryTree([]), createBinaryTree([])],
])("truthy", (p, q) => {
  expect(isSameTree(p, q)).toBeTruthy();
});

test.each([
  [createBinaryTree([1, 2]), createBinaryTree([1, null, 2])],
  [createBinaryTree([]), createBinaryTree([0])],
  [createBinaryTree([0]), createBinaryTree([])],
])("falsy", (p, q) => {
  expect(isSameTree(p, q)).toBeFalsy();
});

test.each([
  [createBinaryTree([1, 2, 3]), createBinaryTree([1, 2, 3])],
  [createBinaryTree([1]), createBinaryTree([1])],
  [createBinaryTree([]), createBinaryTree([])],
])("truthy Recursive ver", (p, q) => {
  expect(isSameTree_Recursive(p, q)).toBeTruthy();
});

test.each([
  [createBinaryTree([1, 2]), createBinaryTree([1, null, 2])],
  [createBinaryTree([]), createBinaryTree([0])],
  [createBinaryTree([0]), createBinaryTree([])],
])("falsy Recursive ver", (p, q) => {
  expect(isSameTree_Recursive(p, q)).toBeFalsy();
});
