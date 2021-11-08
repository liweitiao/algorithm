/**
 * p7
 */

let preValue = Number.MIN_SAFE_INTEGER;
let arr = [];

class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }

  checkBST(head) {
    if (head == null) {
      return true;
    }

    let isLeftBst = this.checkBST(head.left);
    if (!isLeftBst) {
      return false;
    }
    if (head.value <= preValue) {
      return false;
    } else {
      preValue = head.value;
    }
    console.log(head.value + '---' + preValue );
    return this.checkBST(head.right);
  }

  checkBST2(head) {
    if (head == null) {
      return;
    }
    this.checkBST2(head.left);
    arr.push(head.value);
    this.checkBST2(head.right);
  }

  // 非递归中序遍历判断--自己实现

  // 树形dp的套路
  checkBST3(head) {
    return this.process(head)[0];
  }

  process(head) {
    if (head == null) {
      return null;
    }
    let leftData = this.process(head.left);
    let rightData = this.process(head.right);
    let isBST = true;
    let min = head.value;
    let max = head.value;
    if (leftData != null) {
      min = Math.min(min, leftData[1]);
      max = Math.max(max, leftData[2]);
    }
    if (rightData != null) {
      min = Math.min(min, rightData[1]);
      max = Math.max(max, rightData[2]);
    }
    if (leftData != null && (!leftData[0] || head.value < leftData[2])) {
      isBST = false;
    }
    if (rightData != null && (!rightData[0] || head.value > rightData[1])) {
      isBST = false;
    }

    return [isBST, min, max];
  }
}

const head = new Node(10);
head.left = new Node(8);
head.right = new Node(12);
head.left.left = new Node(6);
head.left.right = new Node(9);
// head.left.left.left = new Node(14);
head.left.left.right = new Node(7);
head.right.left = new Node(11);
head.right.right = new Node(14);

// console.log(head.checkBST(head))
console.log(head.checkBST3(head));
