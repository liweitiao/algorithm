/**
 * p24
 */

class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }

  conver(head) {
    if (head == null) {
      return null;
    }
    return this.process(head).start;
  }

  process(X) {
    if (X == null) {
      return new Info(null, null);
    }
    let leftHeadEnd = this.process(X.left);
    let rightHeadEnd = this.process(X.right);
    if (leftHeadEnd.end != null) {
      leftHeadEnd.end.right = X;
    }
    X.left = leftHeadEnd.end;
    X.right = rightHeadEnd.start;
    if (rightHeadEnd.start != null) {
      rightHeadEnd.start.left = X;
    }

    return new Info(leftHeadEnd.start != null ? leftHeadEnd.start : X,
              rightHeadEnd.end != null ? rightHeadEnd.end : X);
  }
}

class Info {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

let head = new Node(1);
head.left = new Node(2);
head.right = new Node(3);
head.left.left = new Node(4);
head.left.right = new Node(5);
head.right.left = new Node(6);
head.right.right = new Node(7);

let node = head.conver(head);

while (node != null) {
  console.log(node.value);
  node = node.right;
}
