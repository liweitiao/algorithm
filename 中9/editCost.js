/**
 * p26
 */

 // 可多看一遍再理解其原理
function minCost(str1, str2, ic, dc, rc) {
  if (str1 == null || str2 == null) {
    return 0;
  }
  let row = str1.length + 1;
  let col = str2.length + 1;
  let dp = [];
  for (let i = 0; i < row; i++) {
    let temp = new Array(col).fill(0);
    dp.push(temp);
  }
  for (let i = 1; i < row; i++) {
    dp[i][0] = dc * i;
  }
  for (let j = 1; j < col; j++) {
    dp[0][j] = ic * j;
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = dp[i - 1][j - 1] + rc;
      }
      dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + dc);
      dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + ic);
    }
  }
  return dp[row - 1][col - 1];
}


console.log(minCost('ac', 'bbc', 3, 2, 1));