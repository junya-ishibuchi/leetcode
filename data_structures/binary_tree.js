export function createBinaryTree(array) {
  if (array.length === 0) {
    return null;
  }

  const head = { val: array[0], left: null, right: null };
  const nodeQueue = [head];
  let nodeIndex = 0;
  let arrayIndex = 1;

  while (arrayIndex < array.length) {
    const current = nodeQueue[nodeIndex++];

    if (array[arrayIndex] !== null) {
      current.left = { val: array[arrayIndex], left: null, right: null };
      nodeQueue.push(current.left);
    }
    arrayIndex++;

    if (arrayIndex < array.length && array[arrayIndex] !== null) {
      current.right = { val: array[arrayIndex], left: null, right: null };
      nodeQueue.push(current.right);
    }
    arrayIndex++;
  }

  return head;
}

export function getValueArrayFromBinaryTree(binaryTree) {
  if (!binaryTree) {
    return null;
  }

  const result = [];
  const nodeQueue = [binaryTree];
  while (nodeQueue.length) {
    const node = nodeQueue.shift();
    result.push(node.val);
    if (node.left) {
      nodeQueue.push(node.left);
    }
    if (node.right) {
      nodeQueue.push(node.right);
    }
  }

  return result;
}
