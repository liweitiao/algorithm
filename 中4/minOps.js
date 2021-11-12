/**
 * p21
 */

 // 可选择性重看
function isPrime(num) {
  if (num == 1) {
      return false;
  }
  for (var i = 2; i < num; i++) {
      if (num % i == 0) {
          return false;
      }
  }
  return true;
}

function divSumAndCountFn(n) {
  let sum = 0;
  let count = 0;
  for (let i = 2; i <= n; i++) {
    while 
    (n % i == 0) {
      sum += i;
      count++;
      n /= i;
    }
  }
  return [sum, count];
}

function minOps(n) {
  if (n < 2) {
    return 0;
  }
  if (isPrime(n)) {
    return n - 1;
  }
  let divSumAndCount = divSumAndCountFn(n);
  return divSumAndCount[0] - divSumAndCount[1];
}


console.log(minOps(90));