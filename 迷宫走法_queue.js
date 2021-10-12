const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const dirs = [
  (x, y) => [x + 1, y],
  (x, y) => [x - 1, y],
  (x, y) => [x, y - 1],
  (x, y) => [x, y + 1]
];

function print_path(path) {
  console.log(path);
  let curNode = path[path.length - 1];
  let realPath = [];
  while (curNode[2] !== -1) {
    realPath.push(curNode.slice(0, 2));
    curNode = path[curNode[2]];
  };

  realPath.push(curNode.slice(0, 2));
  realPath.reverse();
  for (let path of realPath) {
    console.log(path);
  };
};

function maze_path_queue(x1, y1, x2, y2) {
  const queue = [];
  queue.push([x1, y1, -1]);
  const path = [];
  let curNode;
  let flag = false;
  while (queue.length > 0) {
    curNode = queue.shift();
    path.push(curNode);
    if (curNode[0] === x2 && curNode[1] === y2) {
      flag = true;
      print_path(path);
      return true;
    };

    let nextNode;
    for (let dir of dirs) {
      nextNode = dir(curNode[0], curNode[1]);
      if (maze[nextNode[0]][nextNode[1]] === 0) {
        queue.push([nextNode[0], nextNode[1], path.length - 1]);
        maze[nextNode[0]][nextNode[1]] = 2;
      };
    };
  };

  if (!flag) {
    console.log('没有路');
    return false;
  };
};

maze_path_queue(1, 1, 8, 8)
