/**
 * p16
 * 一共是1~N位置
 * 最终的目标是P
 * 当前在cur位置
 * 还剩rest步
 * 返回方法数
 */

function f(N, P, rest, cur) {
  if (rest == 0) {
    return cur == P ? 1: 0
  }
  if (cur == 1) {
    return f(N, P, rest - 1, 2);
  }
  if (cur == N) {
    return f(N, P, rest - 1, N -1);
  }
  return f(N, P, rest - 1, cur - 1) + f(N, P, rest - 1, cur + 1);
}

// console.log(f(12, 2,  20, 10) + '---one');

/**
 * 记忆化搜索
 */
function walkWays2(N, P, S, K) {
  const dp = [];
  for (let i = 0; i <= K; i++) {
    let arr = [];
    for (let j = 0; j <= N; j++) {
      arr.push(-1);
    }
    dp.push(arr);
  }
  return f2(N, P, S, K, dp);
}

function f2(N, P, cur, rest, dp) {
  if (dp[rest][cur] != -1) {
    return dp[rest][cur];
  }
  if (rest == 0) {
    dp[rest][cur] == P ? 1 : 0;
  } else if (cur == 1) {
    dp[rest][cur] = f(N, P, rest - 1, 2);
  } else if (cur == N) {
    dp[rest][cur] = f(N, P, rest - 1, N -1);
  } else {
    dp[rest][cur] = f(N, P, rest - 1, cur - 1) + f(N, P, rest - 1, cur + 1);
  }
  return dp[rest][cur];
}

// console.log(walkWays2(12, 2, 10, 20) + '---two');
function dpWay(N, P, M, K) {
  const dp = [];
  for (let i = 0; i <= K; i++) {
    let arr = [];
    for (let j = 0; j <= N; j++) {
      arr.push(0);
    }
    dp.push(arr);
  }
  dp[0][P] = 1;
  for (let rest = 1; rest <= K; rest++) {
    for (let cur = 1; cur <= N; cur++) {
      if (cur == 1) {
        dp[rest][cur] = dp[rest - 1][2];
      } else if (cur == N) {
        dp[rest][cur] = dp[rest - 1][N - 1];
      } else {
        dp[rest][cur] = dp[rest - 1][cur - 1] + dp[rest - 1][cur + 1];
      }
    }
  }
  return dp[K][M];
}

console.log(dpWay(12, 2, 10, 20) + '---three')