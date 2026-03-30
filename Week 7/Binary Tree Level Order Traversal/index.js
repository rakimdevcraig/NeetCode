function levelOrder(root) {
  if (root === null) return [];

  const result = [];
  const queue = [root];
  let head = 0;

  while (head < queue.length) {
    const levelSize = queue.length - head;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue[head++];
      level.push(node.val);

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}
