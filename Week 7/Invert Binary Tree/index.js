class node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  invertTree(root) {
    if (!root) {
      return null;
    }

    const tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    this.invertTree(root.left);
    this.invertTree(root.right);

    return root;
  }
}
