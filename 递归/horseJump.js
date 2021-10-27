/**
 * p17
 */

function process(x, y, step) {
  if (x < 0 || x > 8 || y < 0 || y > 9) {
    return 0;
  }
  if (step == 0) {
    return (x == 0 && y == 0) ? 1 : 0;
  }
  return process(x - 1, y + 2, step - 1)
          + process(x + 1, y + 2, step - 1)
          + process(x + 2, y + 1, step - 1)
          + process(x + 2, y - 1, step - 1)
          + process(x + 1, y - 2, step - 1)
          + process(x - 1, y - 2, step - 1)
          + process(x - 2, y - 1, step - 1)
          + process(x - 2, y + 1, step - 1)
}

function process2(x, y, step) {
  if (x < 0 || x > 8 || y < 0 || y > 9) {
    return 0;
  }
  const dp = [];
  for (let i = 0; i < 9; i++) {
    let tmp1 = [];
    for (let j = 0; j < 10; j++) {
      let tmp2 = new Array(step + 1).fill(0);
      tmp1.push(tmp2);
    }
    dp.push(tmp1);
  }
  dp[0][0][0] = 1;
  for (let h = 1; h <= step; h++) {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 10; c++) {
        dp[r][c][h] += getValue(dp, r - 1, c + 2, h - 1);
        dp[r][c][h] += getValue(dp, r + 1, c + 2, h - 1);
        dp[r][c][h] += getValue(dp, r + 2, c + 1, h - 1);
        dp[r][c][h] += getValue(dp, r + 2, c - 1, h - 1);
        dp[r][c][h] += getValue(dp, r + 1, c - 2, h - 1);
        dp[r][c][h] += getValue(dp, r - 1, c - 2, h - 1);
        dp[r][c][h] += getValue(dp, r - 2, c - 1, h - 1);
        dp[r][c][h] += getValue(dp, r - 2, c + 1, h - 1);
      }
    }
  }
  return dp[x][y][step];
}

function getValue(dp, row, col, step) {
  if (row < 0 || row > 8 || col < 0 || col > 9) {
    return 0;
  }
  return dp[row][col][step];
}

console.log(process2(7, 7, 10))