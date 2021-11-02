/**
 * p9
 */

function num1(n) {
  if (n < 1) {
    return 0;
  }
  let record = new Array(n).fill(0);
  return process1(0, record, n);
}

function process1(i, record, n) {
  if (i == n) {
    return 1;
  }
  let res = 0;
  for (let j = 0; j < n; j++) {
    if (isValid(record, i, j)) {
      record[i] = j;
      res += process1(i + 1, record, n);
    }
  }
  return res;
}

function isValid(record, i, j) {
   for (let k = 0; k < i; k++) {
     if (j == record[k] || Math.abs(record[k] - j) == Math.abs(i - k)) {
       return false;
     }
   }
   return true;
}

console.log(num1(8));