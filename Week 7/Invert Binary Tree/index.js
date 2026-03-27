//if root is null return null
//we swap the children:
//tmp = root.left root.left = root.right
//root.right = tmp
//call the function on the left of root
//call the function on the right of root

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
