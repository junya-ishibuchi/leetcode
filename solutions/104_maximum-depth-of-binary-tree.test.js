import { createBinaryTree } from "../data_structures/binary_tree";
import {
  maxDepth_IterativeDFS,
  maxDepth_RecursiveDFS,
  maxDepth_BFS,
} from "./104_maximum-depth-of-binary-tree";

test.each([
  [createBinaryTree([3, 9, 20, null, null, 15, 7]), 3],
  [createBinaryTree([0, 2, 4, 1, null, 3, -1, 5, 1, null, 6, null, 8]), 4],
  [createBinaryTree([3, 9, 20]), 2],
  [createBinaryTree([1, null, 2]), 2],
  [createBinaryTree([1]), 1],
  [createBinaryTree([]), 0],
])("test iterativeDFS", (root, output) => {
  expect(maxDepth_IterativeDFS(root)).toStrictEqual(output);
});

test.each([
  [createBinaryTree([3, 9, 20, null, null, 15, 7]), 3],
  [createBinaryTree([0, 2, 4, 1, null, 3, -1, 5, 1, null, 6, null, 8]), 4],
  [createBinaryTree([3, 9, 20]), 2],
  [createBinaryTree([1, null, 2]), 2],
  [createBinaryTree([1]), 1],
  [createBinaryTree([]), 0],
])("test recursiveDFS", (root, output) => {
  expect(maxDepth_RecursiveDFS(root)).toStrictEqual(output);
});

test.each([
  [createBinaryTree([3, 9, 20, null, null, 15, 7]), 3],
  [createBinaryTree([0, 2, 4, 1, null, 3, -1, 5, 1, null, 6, null, 8]), 4],
  [createBinaryTree([3, 9, 20]), 2],
  [createBinaryTree([1, null, 2]), 2],
  [createBinaryTree([1]), 1],
  [createBinaryTree([]), 0],
])("test BFS", (root, output) => {
  expect(maxDepth_BFS(root)).toStrictEqual(output);
});
