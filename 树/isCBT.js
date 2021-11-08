class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }

  isCBT(head) {
    if (head == null) {
      return true;
    }

    const queue = [];
    let l = null;
    let r = null;
    let leaf = false;
    queue.unshift(head);
    while (queue.length != 0) {
      let node = queue.pop();
      l = node.left;
      r = node.right;
      if ((leaf && (l != null || r != null)) || (l == null && r != null)) {
        return false;
      }
      if (l != null) {
        queue.unshift(l);
      }
      if (r != null) {
        queue.unshift(r);
      } else {
        leaf = true;
      }
    }
    return true;
  }
}