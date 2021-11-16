/**
 * p31
 */

function maxLengthAwesome(arr, k) {
  if (arr == null || arr.length == 0) {
    return 0;
  }
  let minSums = new Array(arr.length);
  let minSumEnds = new Array(arr.length);
  minSums[arr.length - 1] = arr[arr.length - 1];
  minSumEnds[arr.length - 1] = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (minSums[i + 1] < 0) {
      minSums[i] = arr[i] + minSums[i + 1];
      minSumEnds[i] = minSumEnds[i + 1];
    } else {
      minSums[i] = arr[i];
      minSumEnds[i] = i;
    }
  }
  let end = 0;
  let sum = 0;
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    while (end < arr.length && sum + minSums[end] <= k) {
      sum += minSums[end];
      end = minSumEnds[end] + 1;
    }
    res = Math.max(res, end - i);
    if (end > i) { // 窗口内还有数
      sum -= arr[i];
    } else { // 窗口内已经没有数了， 说明从i开头的所有子数组累加和都不可能<=k
      end = i + 1; 
    }
  }
  return res;
}