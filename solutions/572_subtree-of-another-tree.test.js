import { createBinaryTree } from "../data_structures/binary_tree";
import { isSubtree } from "./572_subtree-of-another-tree";
import { isSubtree_Recursive } from "./572_subtree-of-another-tree_recursive";

test.each([
  [createBinaryTree([3, 4, 5, 1, 2]), createBinaryTree([4, 1, 2])],
  [createBinaryTree([1]), createBinaryTree([1])],
  [createBinaryTree([1, 2, 3, null, 5]), createBinaryTree([2, null, 5])],
])("truthy", (root, subRoot) => {
  expect(isSubtree(root, subRoot)).toBeTruthy();
});

test.each([
  [
    createBinaryTree([3, 4, 5, 1, 2, null, null, null, null, 0]),
    createBinaryTree([4, 1, 2]),
  ],
  [createBinaryTree([1]), createBinaryTree([1, null, 2])],
  [createBinaryTree([1]), createBinaryTree([1, 1])],
  [createBinaryTree([3, 4, 5, 1, null, 2]), createBinaryTree([3, 1, 2])],
  [createBinaryTree([1, null, 2]), createBinaryTree([1, null, 3])],
  [
    createBinaryTree([
      6,
      -7,
      8,
      null,
      0,
      null,
      9,
      -3,
      4,
      null,
      null,
      -5,
      -2,
      1,
    ]),
    createBinaryTree([8, null, 4895]),
  ],
])("falsy", (root, subRoot) => {
  expect(isSubtree(root, subRoot)).toBeFalsy();
});

test.each([
  [createBinaryTree([3, 4, 5, 1, 2]), createBinaryTree([4, 1, 2])],
  [createBinaryTree([1]), createBinaryTree([1])],
  [createBinaryTree([1, 2, 3, null, 5]), createBinaryTree([2, null, 5])],
])("truthy Recursive Ver", (root, subRoot) => {
  expect(isSubtree_Recursive(root, subRoot)).toBeTruthy();
});

test.each([
  [
    createBinaryTree([3, 4, 5, 1, 2, null, null, null, null, 0]),
    createBinaryTree([4, 1, 2]),
  ],
  [createBinaryTree([1]), createBinaryTree([1, null, 2])],
  [createBinaryTree([1]), createBinaryTree([1, 1])],
  [createBinaryTree([3, 4, 5, 1, null, 2]), createBinaryTree([3, 1, 2])],
  [createBinaryTree([1, null, 2]), createBinaryTree([1, null, 3])],
  [
    createBinaryTree([
      6,
      -7,
      8,
      null,
      0,
      null,
      9,
      -3,
      4,
      null,
      null,
      -5,
      -2,
      1,
    ]),
    createBinaryTree([8, null, 4895]),
  ],
])("falsy Recursive ver", (root, subRoot) => {
  expect(isSubtree_Recursive(root, subRoot)).toBeFalsy();
});
