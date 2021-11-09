/**
 * p21
 */

function minOps(arr) {
  if (arr == null || arr.length == 0) {
    return 0;
  }
  let size = arr.length;
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += arr[i];
  }
  if (sum % size != 0) {
    return -1;
  }
  let avg = sum / size;
  let leftSum = 0;
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    let leftRest = leftSum - i * avg;
    let rightRest = (sum - leftSum - arr[i]) - (size - i - 1) * avg;
    if (leftRest < 0 && rightRest < 0) {
      ans = Math.max(ans, Math.abs(leftRest) + Math.abs(rightRest));
    } else {
      ans = Math.max(ans, Math.max(Math.abs(leftRest), Math.abs(rightRest)));
    }
    leftSum += arr[i];
  }
  return ans;
}

console.log(minOps([1, 0, 5]))