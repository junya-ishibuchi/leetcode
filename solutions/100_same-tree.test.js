import { createBinaryTree } from "../data_structures/binary_tree";
import { isSameTree } from "./100_same-tree";

test("test", () => {
  expect(
    isSameTree(createBinaryTree([1, 2, 3]), createBinaryTree([1, 2, 3]))
  ).toBeTruthy();
  expect(isSameTree(createBinaryTree([1]), createBinaryTree([1]))).toBeTruthy();
  expect(
    isSameTree(createBinaryTree([1, 2]), createBinaryTree([1, null, 2]))
  ).toBeFalsy();
  expect(isSameTree(createBinaryTree([]), createBinaryTree([0]))).toBeFalsy();
});
