class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }

  isFull(head) {
    if (head == null) {
      return true;
    }
    let info = this.process(head);
    return info[0] === info[1] * 2 + 1;
  }

  process(head) {
    if (head == null) {
      return [0, 0];
    }
    let leftData = this.process(head.left);
    let rightData = this.process(head.right);
    let height = Math.max(leftData[1], rightData[1]) + 1;
    let nodes = leftData[0] + rightData[0] + 1;
    return [nodes, height];
  }
}

const head = new Node(10);
head.left = new Node(8);
head.right = new Node(12);
head.left.left = new Node(6);
head.left.right = new Node(9);
head.left.left.left = new Node(14);
head.left.left.right = new Node(7);
head.right.left = new Node(11);
head.right.right = new Node(14);

console.log(head.isFull(head) + '---isFull');