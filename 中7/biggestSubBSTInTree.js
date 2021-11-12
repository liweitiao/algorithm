/**
 * p24
 */

class Info {
  constructor(head, is, mi, ma, size) {
    this.maxBSTHead = head;
    this.isBST = is;
    this.min = mi;
    this.max = ma;
    this.maxBSTSize = size;
  }
}

class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }

  f(x) {
    if (x == null) {
      return new Info(null, true, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0);
    }
    let leftInfo = this.f(x.left);
    let rightInfo = this.f(x.right);
    let min = x.value;
    let max = x.value;
    if (leftInfo != null) {
      min = Math.min(min, leftInfo.min);
      max = Math.max(max, rightInfo.max);
    }
    if (rightInfo != null) {
      min = Math.min(min, rightInfo.min);
      max = Math.max(max, rightInfo.max);
    }
    let maxBSTSize = 0;
    let maxBSTHead = null;
    if (leftInfo != null) {
      maxBSTSize = leftInfo.maxBSTSize;
      maxBSTHead = leftInfo.maxBSTHead;
    }
    if (rightInfo != null && rightInfo.maxBSTSize > maxBSTSize) {
      maxBSTSize = rightInfo.maxBSTSize;
      maxBSTHead = rightInfo.maxBSTHead;
    }
    let isBST = false;
    if (((leftInfo == null) || leftInfo.isBST)
        && ((rightInfo == null) || rightInfo.isBST)) {
      if (((leftInfo == null) || leftInfo.max < x.value)
          && ((rightInfo == null) || rightInfo.min > x.value)) {
        isBST = true;
        maxBSTHead = x;
        let leftSize = leftInfo == null ? 0 : leftInfo.maxBSTSize;
        let rightSize = rightInfo == null ? 0 : rightInfo.maxBSTSize;
        maxBSTSize = leftSize + 1 + rightSize;
      }
    }
    return new Info(maxBSTHead, isBST, min, max, maxBSTSize);
  }
}

let head = new Node(6);
head.left = new Node(5);
head.left.left = new Node(4);
head.left.left.left = new Node(3);
head.right = new Node(4);
head.right.right = new Node(8);
head.right.right.right = new Node(9);
console.log(head.f(head));