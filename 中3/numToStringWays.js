/**
 * p20
 */

function process(str, index) {
  if (index == str.length) {
    return 1;
  }
  if (str[index] == '0') {
    return 0;
  } 
  let res = process(str, index + 1); // 做了一个决定，就让str[index]自己作为一个部分
  if (index == str.length - 1) {
    return res;
  }
  if (Number(str[index]) * 10 + Number(str[index + 1]) < 27) {
    res += process(str, index + 2);
  }
  return res;
}


// 可重看一下
function dpWays(num) {
  if (num[0] == '0') {
    return 0;
  }
  let N = num.length;
  const dp = new Array(N + 1).fill(0);
  dp[N] = 1;
  dp[N - 1] = num[N - 1] == '0' ? 0 : 1; // num的最后一个位置如果是0就不能转化
  for (let i = N - 2; i >= 0; i--) {
    if (num[i] == '0') {
      dp[i] = 0;
    } else {
      dp[i] = dp[i + 1];
      if (Number(num[i]) * 10 + Number(num[i+ 1]) < 27) {
        dp[i] += dp[i + 2];
      }
    }
  }
  console.log(dp)
  return dp[0]; 
}
console.log(process('221032445', 0));

console.log(dpWays('221032445'))