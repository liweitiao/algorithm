/**
 * p3
 */

function getMax(arr) {
  return process(arr, 0, arr.length - 1);
}

function process(arr, L, R) {
  if (L == R) {
    return arr[L];
  }
  // let mid = L + Math.floor((R - L)/2);
  let mid = L + ((R - L) >> 1);
  let leftMax = process(arr, L, mid);
  let rigthMax = process(arr, mid + 1, R);
  return Math.max(leftMax, rigthMax);
}

let arr = [13,5, 5,6,4,13,3, 7];
// console.log(getMax(arr));
console.log(Math.pow(2, 3));