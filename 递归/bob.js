/**
 * p17
 */

function gcdFn(m, n) {
  return n == 0 ? m : gcdFn(n, m % n);
}

function bob1(N, M, i, j, k) {
  let all = Math.pow(4, k)
  let live = process(N, M, i, j, k);
  let gcd = gcdFn(all, live);
  console.log(all, live, gcd);
  return live/gcd + '/' + all/gcd;
}

function process(N, M, row, col, rest) {
  if (row < 0 || row == N || col < 0 || col == M) {
    return 0;
  }
  if (rest == 0) {
    return 1;
  }

  let live = process(N, M, row - 1, col, rest - 1);
  live += process(N, M, row + 1, col, rest - 1);
  live += process(N, M, row, col - 1, rest - 1);
  live += process(N, M, row, col + 1, rest - 1);
  return live;
}

function bob3(N, M, i, j, k) {
  let all = Math.pow(4, k)
  let live = process3(N, M, i, j, k);
  let gcd = gcdFn(all, live);
  console.log(all, live, gcd);
  return live/gcd + '/' + all/gcd;
}

function process3(N, M, row, col, rest) {
  if (row < 0 || row == N || col < 0 || col == M) {
    return 0;
  }
  const dp = [];
  for (let i = 0; i < N; i++) {
    let tmp1 = [];
    for (let j = 0; j < M; j++) {
      let tmp2 = new Array(rest + 1).fill(0);
      tmp2[0] = 1;
      tmp1.push(tmp2);
    }
    dp.push(tmp1);
  }
  // console.log(dp);
  for (let i = 1; i <= rest; i++) {
    for (let j = 0; j <= row + 1; j++) {
      for (let k = 0; k <= col + 1; k++) {
        dp[j][k][i] += getValue(dp, N, M, j - 1, k, i - 1);
        dp[j][k][i] += getValue(dp, N, M, j + 1, k, i - 1);
        dp[j][k][i] += getValue(dp, N, M, j, k - 1, i - 1);
        dp[j][k][i] += getValue(dp, N, M, j, k + 1, i - 1);
      }
    }
  }
  return dp[row][col][rest];
}

function getValue(dp, N, M, row, col, rest) {
  if (row < 0 || row == N || col < 0 || col == M) {
    return 0;
  }
  return dp[row][col][rest];
}

console.log(bob1(6, 5, 4, 3, 7));
console.log(bob3(6, 5, 4, 3, 7));
// console.log(process3(6, 5, 4, 3, 3));