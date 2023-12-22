const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
    /*  throw new NotImplementedError("Not implemented"); */
    // remove line with error and write your code here
  }

  add(data) {
    this.head = addMore(this.head, data);

    function addMore(node, data) {
      if (!node) return new Node(data);

      //если node существует
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addMore(node.left, data);
      } else {
        node.right = addMore(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return search(this.head, data);

    function search(node, data) {
      if (!node) return false;

      if (node.data === data) return true;

      return data < node.data
        ? search(node.left, data)
        : search(node.right, data);
    }
  }

  find(data) {
    return search(this.head, data);

    function search(node, data) {
      if (!node) return null;

      if (node.data === data) return node;

      return data < node.data
        ? search(node.left, data)
        : search(node.right, data);
    }
  }

  remove(data) {
    this.head = removeNode(this.head, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }

        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);
        return node;
      }
    }
  }

  min() {
    if (!this.head) return null;

    let node = this.head;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.head) return null;

    let node = this.head;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
