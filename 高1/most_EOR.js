/**
 * p29
 */


 // 可重看一遍

// 两种可能性，[0-i] 最优划分下，1、[i]异或和不是0, 这时dp[i] == dp[i - 1]，2、[i]异或和是0 
function mostEOR(arr) {
  let ans = 0;
  let xor = 0;
  let mosts = new Array(arr.length).fill(0);
  let map = new Map();
  map.set(0, -1);
  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
    if (map.has(xor)) {
      let pre = map.get(xor);
      mosts[i] = pre == -1 ? 1 : (mosts[pre] + 1);
    }
    if (i > 0) {
      mosts[i] = Math.max(mosts[i - 1], mosts[i]);
    }
    map.set(xor, i);
    ans = Math.max(ans, mosts[i]);
  }
  return ans;
}

// 最新的视频
function mostEOR2(arr) {
  let xor = 0;
  let dp = new Array(arr.length).fill(0);
  let map = new Map();
  map.set(0, -1);
  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
    if (map.has(xor)) {
      let pre = map.get(xor);
      dp[i] = pre == -1 ? 1 : (dp[pre] + 1);
    }
    if (i > 0) {
       dp[i] = Math.max(dp[i - 1], dp[i]);
    }
    map.set(xor, i);
  }
  return dp[dp.length - 1];
}

console.log(mostEOR([3, 2, 1, 0, 4, 0, 3, 2]));
console.log(mostEOR2([3, 2, 1, 0, 4, 0, 3, 2]));