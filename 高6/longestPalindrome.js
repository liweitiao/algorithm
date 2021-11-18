/**
 * p33
 */

// 最长回文子序列
function process(str) {
  if (str == null || str.length == 0) {
    return 0;
  }
  let N = str.length;
  let dp = [];
  for (let i = 0; i < N; i++) {
    let temp = new Array(N).fill(0);
    temp[i] = 1;
    if (str[i] == str[i + 1]) {
      temp[i + 1] = 2;
    } else {
      temp[i + 1] = 1;
    }
    dp.push(temp);
  }
  for (let row = N - 3; row >= 0; row--) {
    for (let col = row + 2; col < N; col++) {
      if (str[row] == str[col]) {
        dp[row][col] = dp[row + 1][col - 1] + 2;
      } else if (str[row] == str[col - 1]) {
        dp[row][col] = dp[row][col - 1];
      } else if (str[row + 1] == str[col]) {
        dp[row][col] = dp[row + 1][col];
      } else {
        dp[row][col] = dp[row + 1][col -1];
      }
    }
  }

  return dp[0][N - 1];
}

console.log(process('112a3bb3cd2e1'));