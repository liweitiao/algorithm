/**
 * p6
 */

class PreInPosTraversal {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }

  preOrderRecur(head) {
    if (head == null) {
      return;
    }
    console.log(head.value + ' ');
    this.preOrderRecur(head.left);
    console.log(head.value + ' ');
    this.preOrderRecur(head.right);
    console.log(head.value + ' ');
  }

  inOrderRecur(head) {
    if (head == null) {
      return;
    }
    this.inOrderRecur(head.left);
    console.log(head.value);
    this.inOrderRecur(head.right);
  }

  posOrderRecur(head) {
    if (head == null) {
      return;
    }
    this.posOrderRecur(head.left);
    this.posOrderRecur(head.right);
    console.log(head.value);
  }

  preOrderUnRecur(head) {
    if (head == null) return;
    const stack = [];
    stack.push(head);
    while (stack.length != 0) {
      let node = stack.pop();
      console.log(node.value);
      if (node.right != null) stack.push(node.right);
      if (node.left != null) stack.push(node.left);
    }
  }

  posOrderUnRecur(head) {
    if (head == null) return;
    const stack1 = [];
    const stack2 = [];
    stack1.push(head);
    while (stack1.length != 0) {
      let head = stack1.pop();
      stack2.push(head);
      if (head.left != null) stack1.push(head.left);
      if (head.right != null) stack1.push(head.right);
    }
    while (stack2.length != 0) {
      console.log(stack2.pop().value);
    }
  }

  // 可再看下视频
  inOrderUnRecur(head) {
    if (head == null) return;
    const stack = [];
    while (stack.length != 0 || head != null) {
      if (head != null) {
        stack.push(head);
        head = head.left;
      } else {
        head = stack.pop();
        console.log(head.value);
        head = head.right;
      }
    }
  }
}

const head = new PreInPosTraversal(5);
head.left = new PreInPosTraversal(3);
head.right = new PreInPosTraversal(8);
head.left.left = new PreInPosTraversal(2);
head.left.right = new PreInPosTraversal(4);
// head.left.left.left = new PreInPosTraversal(1);
head.right.left = new PreInPosTraversal(7);
// head.right.left.left = new PreInPosTraversal(6);
head.right.right = new PreInPosTraversal(10);
// head.right.right.left = new PreInPosTraversal(9);
// head.right.right.right = new PreInPosTraversal(11);

// head.preOrderRecur(head);  
// head.inOrderRecur(head);
// head.posOrderRecur(head);
// head.preOrderUnRecur(head);
// head.posOrderUnRecur(head);
head.inOrderUnRecur(head);