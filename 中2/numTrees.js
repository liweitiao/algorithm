/**
 * p19
 */

function process(n) {
  if (n < 0) {
    return 0;
  }
  if (n == 0 || n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  let res = 0;
  for (let leftNum = 0; leftNum <= n - 1; leftNum++) {
    let leftWays = process(leftNum);
    let rightWays = process(n - 1 - leftNum);
    res += leftWays * rightWays;
  }
  return res;
}

// 可重看一下
function numTrees(n) {
  if (n < 2) {
    return 1;
  }
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i < n + 1; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  console.log(dp)
  return dp[n];
}

console.log(process(2));
console.log(numTrees(2))