/**
 * p20
 */
let maxSum = 0;

class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }

  maxPath(head) {
    this.p(head, 0);
    return maxSum;
  }

  p(x, pre) {
    if (x.left == null && x.right == null) {
      maxSum = Math.max(maxSum, pre + x.value);
    }
    if (x.left != null) {
      this.p(x.left, pre + x.value);
    }
    if (x.right != null) {
      this.p(x.right, pre + x.value);
    }
  }

  maxPath2(head) {
    if (head == null) {
      return 0;
    }
    return this.p2(head);
  }

  p2(x) {
    if (x.left == null && x.right == null) {
      return x.value;
    }
    let next = 0;
    if (x.left != null) {
      next = this.p2(x.left);
    }
    if (x.right != null) {
      next = Math.max(next, this.p2(x.right));
    }
    return x.value + next;
  }
}

let head = new Node(3);
head.left = new Node(4);
head.right = new Node(21);
head.left.left = new Node(32);
head.left.right = new Node(45);
head.right.left = new Node(6);
head.right.right = new Node(8);

console.log(head.maxPath2(head));
 