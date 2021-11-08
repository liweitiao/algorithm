/**
 * p6
 */

class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }

  w(head) {
    if (head == null) return;
    const queue = [];
    queue.push(head);
    while (queue.length != 0) {
      head = queue.pop();
      console.log(head.value);
      if (head.left != null) queue.unshift(head.left);
      if (head.right != null) queue.unshift(head.right);
    }
  }

  getMaxWidth(head) {
    if (head == null) return;
    const queue = [];
    queue.push(head);
    const map = new WeakMap();
    map.set(head, 1);
    let curLevel = 1;
    let curLevelNodes = 0;
    let max = 0;
    while (queue.length != 0) {
      let cur = queue.pop();
      let curNodeLevel = map.get(cur);
      console.log(cur.value + '---' + curNodeLevel)
      if (curLevel === curNodeLevel) {
        curLevelNodes++;
      } else {
        max = Math.max(max, curLevelNodes);
        // console.log(max, '----', curLevelNodes);
        curLevel++;
        curLevelNodes = 1;
      }
      if (cur.left != null) {
        map.set(cur.left, curNodeLevel + 1);
        queue.unshift(cur.left);
      }
      if (cur.right != null) {
        map.set(cur.right, curNodeLevel + 1);
        queue.unshift(cur.right);
      }
    }

    return Math.max(max, curLevelNodes);
  }
}

const head = new Node(5);
head.left = new Node(3);
head.right = new Node(8);
head.left.left = new Node(2);
head.left.right = new Node(4);
head.right.left = new Node(7);
head.right.right = new Node(10);
head.right.left.left = new Node(7);
head.right.left.right = new Node(7);
head.right.right.left = new Node(7);

// head.w(head);
console.log(head.getMaxWidth(head))