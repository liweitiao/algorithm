/**
 * p24
 */

function maxSum(arr) {
  if (arr == null || arr.length == 0) {
    return 0;
  }
  let max = Number.MIN_SAFE_INTEGER;
  let cur = 0;
  for (let i = 0; i != arr.length; i++) {
    cur += arr[i];
    max = Math.max(max, cur);
    cur = cur < 0 ? 0 : cur;
  }
  return max;
}