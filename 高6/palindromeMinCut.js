/**
 * p33
 */

function minCut1(str) {
  return process(str, 0);
}

function process(str, i) {
  if (i == str.length) {
    return 0;
  }
  let ans = Number.MAX_SAFE_INTEGER;
  for (let end = i; end < str.length; end++) {
    debugger;
    if (valid(str, i, end)) {
      ans = Math.min(ans, 1 + process(str, end + 1));
    }
  }
  return ans
}

function valid(str, L, R) {
  // 遍历判断是否回文
  let s = '';
  for (let i = R; i >= L; i--) {
    s += str[i];
  }
  return str.slice(L, R + 1) == s;
}

function minCut2(str) {
  if (str == null || str == '') {
    return 0;
  }
  let len = str.length;
  let dp = new Array(len + 1).fill(0);
  dp[len] = 0;
  dp[len - 1] = 1;
  let p = record(str);
  for (let i = len - 2; i >= 0; i--) {
    dp[i] = len - i;
    for (let j = i; j < len; j++) {
      if (p[i][j]) {
        dp[i] = Math.min(dp[i], dp[j + 1] + 1);
      }
    }
  }
  return dp[0];
}


function record(str) {
  let N = str.length;
  let dp = [];
  for (let i = 0; i < N; i++) {
    let temp = new Array(N).fill(false);
    temp[i] = true;
    temp[i + 1] = str[i] == str[i + 1] ? true : false;
    dp.push(temp);
  }
  for (let row = N - 3; row >= 0; row--) {
    for (let col = row + 2; col < N; col++) {
      if (str[row] == str[col]) {
        dp[row][col] = dp[row + 1][col - 1];
      } else {
        dp[row][col] = false;
      }
    }
  }
  return dp;
}

let str = 'baba13ggabab';
console.log(minCut1(str));
console.log(minCut2(str));
// console.log(str.slice(2, 6), str);