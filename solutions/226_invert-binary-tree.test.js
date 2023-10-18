import { createBinaryTree } from "../data_structures/binary_tree";
import { invertTree } from "./226_invert-binary-tree";

test("test", () => {
  expect(invertTree(createBinaryTree([4, 2, 7, 1, 3, 6, 9]))).toStrictEqual(
    createBinaryTree([4, 7, 2, 9, 6, 3, 1])
  );
  expect(invertTree(createBinaryTree([2, 1, 3]))).toStrictEqual(
    createBinaryTree([2, 3, 1])
  );
  expect(invertTree(createBinaryTree([2, 1]))).toStrictEqual(
    createBinaryTree([2, null, 1])
  );
  expect(invertTree(createBinaryTree([2]))).toStrictEqual(
    createBinaryTree([2])
  );
  expect(invertTree(createBinaryTree([]))).toStrictEqual(null);
});
