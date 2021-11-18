/**
 * p33
 */

function minBoat(arr, limit) {
  arr.sort((a, b) => {
    return a - b;
  });
  if (arr == null || arr.length == 0) {
    return 0;
  }
  if (arr[arr.length - 1] <= limit/2) {
    return (arr.length + 1) / 2;
  }
  if (arr[0] > limit / 2) {
    return arr.length;
  }
  debugger;
  let lessR = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= (limit / 2)) {
      lessR = i;
      break;
    }
  }
  if (lessR == -1) {
     return arr.length;
  }
  let L = lessR;
  let R = lessR + 1;
  let lessUnused = 0;
  while (L >= 0) {
    let solved = 0;
    while (R < arr.length && arr[L] + arr[R] <= limit) {
      R++;
      solved++;
    }
    if (solved == 0) {
      lessUnused++;
      L--;
    } else {
       L = Math.max(-1, L - solved);
    }
  }
  let lessAll = lessR + 1;
  let lessUsed = lessAll - lessUnused;
  let moreUnsolved = arr.length - lessR - 1 - lessUsed;
  debugger;
  return lessUsed + Math.ceil(lessUnused/2) + moreUnsolved;
}

let arr = [2, 2, 2, 3, 3, 5, 6, 8, 6, 6, 8,5, 5, 9, 9, 9 ,9];
console.log(minBoat(arr, 10));