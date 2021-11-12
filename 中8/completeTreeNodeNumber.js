/**
 * p25
 */

class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }

  nodeNum(head) {
    if (head == null) {
      return 0;
    }
    return this.bs(head, 1, this.mostLeftLevel(head, 1));
  }

  bs(node, Level, h) {
    if (Level == h) {
      return 1;
    }
    if (this.mostLeftLevel(node.right, Level + 1) == h) {
      return (1 << (h - Level)) + this.bs(node.right, Level + 1, h);
    } else {
      return (1 << (h - Level - 1)) + this.bs(node.left, Level + 1, h);
    }
  }

  mostLeftLevel(node, level) {
    while (node != null) {
      level++;
      node = node.left;
    }
    return level - 1;
  }
}

let head = new Node(1);
head.left = new Node(2);
head.right = new Node(3);
head.left.left = new Node(4);
head.left.right = new Node(5);
head.right.left = new Node(6);
head.right.right = new Node(7);
head.left.left.left = new Node(8);

console.log(head.nodeNum(head));


