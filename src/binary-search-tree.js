const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  Node
} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

  constructor() {
    this.start = null;
  }

  root() {
    return this.start;
  }

  add(data) {
    this.start = addVal(this.start, data);

    function addVal(start, data) {
      if (!start) {
        return new Node(data);
      }

      data < start.data ? start.left = addVal(start.left, data) : start.right = addVal(start.right, data);

      return start;
    }

  }



  has(data) {
    return this.find(data) == null ? false : true;
  }


  find(data) {
    return search(this.start, data);

    function search(start, data) {
      if (start == null) {
        return null;
      }
      if (start.data === data) {
        return start;
      }
      return data < start.data ? search(start.left, data) : search(start.right, data);
    }


  }


  remove(data) {
    this.start = removeN(this.start, data);

    function removeN(start, data) {

      if (!start) {
        return null;
      }

      if (data < start.data) {
        start.left = removeN(start.left, data);
        return start;
      } else
      if (data > start.data) {
        start.right = removeN(start.right, data);
        return start;
      } else {
        //found
        if (!start.left && !start.right) {
          return null;
        }
        if (!start.left && start.right) {
          start = start.right;
          return start;
        }
        if (start.left && !start.right) {
          start = start.left;
          return start;
        }
        // зам на мин из пр
        let min = start.right;
        while (min.left) {
          min = min.left;
        }

        start.data = min.data;
        start.right = removeN(start.right, min.data);

        return start;
      }


    }
  }

  min() {
    return findMin(this.start);

    function findMin(start) {
      if (start.left) return findMin(start.left);
      return start.data;
    }

  }

  max() {
    return findMax(this.start);

    function findMax(start) {
      if (start.right) return findMax(start.right);
      return start.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};