import { createBinaryTree } from "../data_structures/binary_tree";
import { diameterOfBinaryTree } from "./543_diameter-of-binary-tree";

test.each([
  [createBinaryTree([1, 2, 3, 4, 5]), 3],
  [createBinaryTree([1, 2, 3, 4, 5, null, null, null, 6]), 4],
  [createBinaryTree([1, 2]), 1],
  [createBinaryTree([1]), 0],
])("test", (root, output) => {
  expect(diameterOfBinaryTree(root)).toStrictEqual(output);
});
