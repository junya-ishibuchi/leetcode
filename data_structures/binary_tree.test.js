import { createBinaryTree, getValueArrayFromBinaryTree } from "./binary_tree";

test("createBinaryTree() can create a binary tree", () => {
  expect(createBinaryTree([2, 1, 3])).toStrictEqual({
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  });
  expect(createBinaryTree([4, 2, 7, 1, 3, 6, 9])).toStrictEqual({
    val: 4,
    left: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    right: {
      val: 7,
      left: { val: 6, left: null, right: null },
      right: { val: 9, left: null, right: null },
    },
  });
  expect(createBinaryTree([2, 1, 3, 4])).toStrictEqual({
    val: 2,
    left: {
      val: 1,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: null,
    },
    right: { val: 3, left: null, right: null },
  });
  expect(createBinaryTree([2])).toStrictEqual({
    val: 2,
    left: null,
    right: null,
  });
  expect(createBinaryTree([])).toStrictEqual(null);
});

test("getValueArrayFromBinaryTree can get an array of the same value", () => {
  const array1 = [2, 1, 3];
  const array2 = [2, 1];
  const array3 = [4, 2, 7, 1, 3, 6, 9];
  const array4 = [2, 1, 3, 4];
  const array5 = [2];

  expect(getValueArrayFromBinaryTree(createBinaryTree(array1))).toStrictEqual(
    array1
  );
  expect(getValueArrayFromBinaryTree(createBinaryTree(array2))).toStrictEqual(
    array2
  );
  expect(getValueArrayFromBinaryTree(createBinaryTree(array3))).toStrictEqual(
    array3
  );
  expect(getValueArrayFromBinaryTree(createBinaryTree(array4))).toStrictEqual(
    array4
  );
  expect(getValueArrayFromBinaryTree(createBinaryTree(array5))).toStrictEqual(
    array5
  );
  expect(getValueArrayFromBinaryTree(createBinaryTree([]))).toStrictEqual(null);
});
