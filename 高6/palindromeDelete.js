/**
 * p33
 */

function process(str) {
  if (str == null || str.length == 0) {
    return 0;
  }
  let len = str.length;
  let dp = [];
  for (let i = 0; i < len; i++){
    let temp = new Array(len).fill(0);
    temp[i] = 1;
    temp[i + 1] = str[i] == str[i + 1] ? 3 : 2;
    dp.push(temp);
  }
  for (let row = len - 3; row >= 0; row--) {
    for(let col = row + 2; col < len; col++) {
      if (str[row] != str[col]) {
        dp[row][col] = dp[row + 1][col] + dp[row][col - 1] - dp[row + 1][col - 1];
      } else {
        dp[row][col] = dp[row + 1][col] + dp[row][col - 1] + 1;
      }
    }
  }
  return dp[0][len - 1];
}


console.log(process('ABBA'));