/**
 * p17
 */

 function way1(arr, aim) {
   return process(arr, 0, aim);
 }

function process(arr, index, rest) {
  if (index == arr.length) {
    return rest == 0 ? 1 : 0;
  }
  let ways = 0;
  for (let zhang = 0; arr[index] * zhang <= rest; zhang++) {
    ways += process(arr, index + 1, rest - arr[index] * zhang);
  }
  return ways;
}

function way2(arr, aim) {
  return dp1(arr, aim);
}

function dp1(arr, aim) {
  if (arr == null || arr.length == 0) {
    return 0;
  }
  let N = arr.length;
  const dp = [];
  for (let i = 0; i <= N; i++) {
    let tmp = new Array(aim + 1).fill(0);
    dp.push(tmp);
  }
  dp[N][0] = 1;
  for (let index = N - 1; index >= 0; index--) {
    for (let rest = 0; rest <= aim; rest++) {
      let ways = 0;
      for (let zhang = 0; arr[index] * zhang <= rest; zhang++) {
        ways += dp[index + 1][rest - arr[index] * zhang];
      }
      dp[index][rest] = ways;
    }
  }
  return dp[0][aim];
}

function way3(arr, aim) {
  return dp2(arr, aim);
}

// 斜率优化
function dp2(arr, aim) {
  if (arr == null || arr.length == 0) {
    return 0;
  }
  let N = arr.length;
  const dp = [];
  for (let i = 0; i <= N; i++) {
    let tmp = new Array(aim + 1).fill(0);
    dp.push(tmp);
  }
  dp[N][0] = 1;
  for (let index = N - 1; index >= 0; index--) {
    for (let rest = 0; rest <= aim; rest++) {
      dp[index][rest] = dp[index + 1][rest];
      if (rest - arr[index] >= 0) {
        dp[index][rest] += dp[index][rest - arr[index]];
      }
    }
  }
  return dp[0][aim];
}

let arr = [2, 3, 20, 100, 5];
console.log(way1(arr, 10));
console.log(way2(arr, 10));
console.log(way3(arr, 10));