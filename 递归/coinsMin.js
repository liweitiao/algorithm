/**
 * p16
 */

  function main(arr, rest) {
    return f(arr, 0, rest);
  }

  function f(arr, index, rest) {
    if (rest === 0) {
      return 0;
    }
    if (rest < 0) {
      return -1;
    }
    if (index === arr.length) {
      return -1;
    }
    let p1 = f(arr, index + 1, rest - arr[index]);
    let p2 = f(arr, index + 1, rest);
    if (p1 === -1 && p2 === -1) {
      return -1;
    } else {
      if (p1 === -1) {
        return p2;
      }
      if (p2 === -1) {
        return p1 + 1;
      }
      return Math.min(p1 + 1, p2);
    }
  }
  let arr = [2, 3, 20, 100, 6, 8]
  // console.log(main(arr, 13))
  function main2(arr, rest) {
    const dp = [];
    for (let i = 0; i <= arr.length; i++) {
      let tmp = [];
      for (let j = 0; j <= rest; j++) {
        tmp.push(-2);
      }
      dp.push(tmp);
    }

    return f2(arr, 0, rest, dp);
  }

  function f2(arr, index, rest, dp) {
    if (rest < 0) {
      return -1;
    }
    if (dp[index][rest] != -2) {
      return dp[index][rest];
    }
    if (rest === 0) {
      dp[index][rest] = 0;
    } else if (index === arr.length) {
      dp[index][rest] = -1;
    } else {
      let p1 = f2(arr, index + 1, rest - arr[index], dp);
      let p2 = f2(arr, index + 1, rest, dp);
      if (p1 === -1 && p2 === -1) {
        dp[index][rest] = -1;
      } else {
        if (p1 === -1) {
          dp[index][rest] = p2;
        } else if (p2 === -1) {
          dp[index][rest] = p1 + 1;
        } else {
          dp[index][rest] = Math.min(p1 + 1, p2);
        }
      }
    }
    return dp[index][rest];
  }

  // console.log(main2(arr, 11) + '--main2')

function main3(arr, rest) {
  let N = arr.length;
  const dp = [];
  for (let row = 0; row <= N; row++) {
    let tmp = [];
    for (let col = 0; col <= rest; col++) {
      tmp.push(-2);
    }
    dp.push(tmp);
    dp[row][0] = 0;
  }

  for (let col = 1; col <= rest; col++) {
    dp[N][col] = -1;
  }

  for (let index = N - 1; index >= 0; index--) {
    for (let aim = 1; aim <= rest; aim++) {
      let p1 = dp[index + 1][aim];
      let p2 = -1;
      if (aim - arr[index] >= 0) {
        p2 = dp[index + 1][aim - arr[index]];
      }
      if (p1 === -1 && p2 === -1) {
        dp[index][aim] = -1;
      } else {
        if (p1 === -1) {
          dp[index][aim] = p2 + 1;
        } else if (p2 === -1) {
          dp[index][aim] = p1;
        } else {
          dp[index][aim] = Math.min(p1, p2 + 1);
        }
      }
    }
  }
  console.log(dp)
  return dp[0][rest]; 
}

console.log(main3(arr, 11) + '--main3')
