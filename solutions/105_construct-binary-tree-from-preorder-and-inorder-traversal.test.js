import { createBinaryTree } from "../data_structures/binary_tree";
import { buildTree } from "./105_construct-binary-tree-from-preorder-and-inorder-traversal";

test("test", () => {
  expect(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])).toStrictEqual(
    createBinaryTree([3, 9, 20, null, null, 15, 7])
  );
  expect(buildTree([-1], [-1])).toStrictEqual(createBinaryTree([-1]));
  expect(buildTree([1, 2], [2, 1])).toStrictEqual(createBinaryTree([1, 2]));
});
