/**
 * p20
 */

function maxLength(str) {
  if (str == null || str == '') {
    return 0;
  }
  const dp = new Array(str.length).fill(0);
  let pre = 0;
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ')') {
      pre = i - dp[i - 1] - 1;
      if (pre >= 0 && str[pre] == '(') {
        dp[i] = dp[i - 1] + 2 + (pre > 0 ? dp[pre - 1] : 0);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
}

console.log(maxLength('((()()))))(())(())()'));