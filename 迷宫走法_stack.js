const maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const dirs = [
  (x, y) => [x - 1, y],
  (x, y) => [x, y + 1],
  (x, y) => [x + 1, y],
  (x, y) => [x, y - 1]
];

function maze_path(x1, y1, x2, y2) {
  const stack = [];
  stack.push([x1, y1]);
  while (stack.length > 0) {
    let curNode = stack[stack.length - 1];
    if (curNode[0] == x2 && curNode[1] == y2) {
      for (let p of stack) {
        console.log(p);
      };
      return true;
    };
    let flag = false;
    let nextNode;
    for (let dir of dirs) {
      nextNode = dir(curNode[0], curNode[1]);
      if (maze[nextNode[0]][nextNode[1]] == 0) {
        stack.push(nextNode);
        maze[nextNode[0]][nextNode[1]] = 2;
        flag = true;
        break;
      };
    };
    if (!flag) {
      maze[nextNode[0]][nextNode[1]] = 2
      stack.pop()
    }
  };
  if (stack.length == 0) {
    console.log('没有路')
    return false
  }
};

maze_path(8,2,3,7)
