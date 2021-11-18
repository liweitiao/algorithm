/**
 * p33
 */

function getDp(str) {
  if (str == null || str.length == 0) {
    return 0;
  }
  let N = str.length;
  let dp = [];
  for (let i = 0; i < N; i++) {
    let temp = new Array(N).fill(0);
    temp[i + 1] = str[i] == str[i + 1] ? 0 : 1;
    dp.push(temp);
  }
  for (let row = N - 3; row >= 0; row --) {
    for (let col = row + 2; col < N; col++) {
      if (str[row] == str[col]) {
        dp[row][col] = dp[row + 1][col - 1];
      } else {
        dp[row][col] = Math.min(dp[row][col - 1], dp[row + 1][col]) + 1;
      }
    }
  }

  return dp;
}

function getPalindrome(str) {
  if (str == null || str.length < 2) {
    return str;
  }
  let chas = str.split('');
  let dp = getDp(str);
  let res = new Array(chas.length + dp[0][chas.length - 1]);
  let i = 0;
  let j = chas.length - 1;
  let resl = 0;
  let resr = res.length - 1;
  while (i <= j) {
    if (chas[i] == chas[j]) {
      res[resl++] = chas[i++];
      res[resr--] = chas[j--];
    } else if (dp[i][j - 1] < dp[i + 1][j]) {
      res[resl++] = chas[j];
      res[resr--] = chas[j--];
    } else {
      res[resl++] = chas[i];
      res[resr--] = chas[i++];
    }
  }
  return res.join('');
}

let str = '12ab2e1';
// console.log(process(str));
str[2] = '4';
console.log(getPalindrome(str));