import { createBinaryTree } from "../data_structures/binary_tree";
import { lowestCommonAncestor } from "./235_lowest-common-ancestor-of-a-binary-search-tree";

test.each([
  [
    createBinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
    createBinaryTree([2]),
    createBinaryTree([8]),
    6,
  ],
  [
    createBinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
    createBinaryTree([2]),
    createBinaryTree([4]),
    2,
  ],
  [
    createBinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
    createBinaryTree([0]),
    createBinaryTree([5]),
    2,
  ],
  [
    createBinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
    createBinaryTree([7]),
    createBinaryTree([8]),
    8,
  ],
])("test", (root, p, q, outputVal) => {
  expect(lowestCommonAncestor(root, p, q).val).toBe(outputVal);
});
