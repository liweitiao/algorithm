/**
 * p32
 */

 // 可重看一遍  还有改动态规划

function snake(matrix) {
  let ans = Number.MIN_SAFE_INTEGER;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      let cur = f(matrix, row, col);
      ans = Math.max(ans, Math.max(cur.no, cur.yes));
    }
  }
  return ans;
}

class Info {
  constructor(no, yes) {
    this.no = no;
    this.yes = yes;
  }
}

// 从最左侧触发(具体位置不关心)， 当前到达(row, col)
// 在这个旅程中，
// no, 一次能力也不用，能达到的最大路径和(如果是负数，表示没有该答案)
// yes, 使用了一次能力，能达到的最大路径和(如果是负数，表示没有该答案)
function f(matrix, row, col) {
  if (col == 0) {
    return new Info(matrix[row][col], -matrix[row][col]);
  }
  // 没有在最左列
  let preNo = -1;
  let preYes = -1;
  // p1
  if (row > 0) {
    let leftUp = f(matrix, row - 1, col - 1);
    if (leftUp.no >= 0) {
      preNo = leftUp.no;
    }
    if (leftUp.yes >= 0) {
      preYes = leftUp.yes;
    }
  }
  // p2
  let left = f(matrix, row, col - 1);
  if (left.no >= 0) {
    preNo = Math.max(preNo, left.no);
  }
  if (left.yes >= 0) {
    preYes = Math.max(preYes, left.yes);
  }

  // p3
  if (row < matrix.length - 1) {
    let leftDown = f(matrix, row + 1, col - 1);
    if (leftDown.no >= 0) {
      preNo = Math.max(preNo, leftDown.no);
    }
    if (leftDown.yes >= 0) {
      preYes = Math.max(preYes, leftDown.yes);
    }
  }

  let no = -1;
  let yes = -1;

  if (preNo >= 0) {
    no = preNo + matrix[row][col];
    yes = preNo + (-matrix[row][col]);
  }

  if (preYes >= 0) {
    yes = Math.max(yes, preYes + matrix[row][col]);
  }

  return new Info(no, yes);
}

let matrix = [
  [2, 5, -5],
  [3, -6, 1],
  [-4, 2, 3]
]

console.log(snake(matrix));