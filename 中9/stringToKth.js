/**
 * p27
 */

function g(i, len) {
  let sum = 0;
  if (len == 1) {
    return 1;
  }
  for (let j = i + 1; j <= 26; j++) {
    sum += g(j, len - 1);
  }
  return sum;
}

function f(len) {
  let sum = 0;
  for (let i = 0; i <= 26; i++) {
    sum += g(i, len);
  }
  return sum;
}

function kth(str) {
  let sum = 0;
  let len = str.length;
  for (let i = 1; i < len; i++) {
    sum += f(i);
  }
  let first = str[0].charCodeAt() - 'a'.charCodeAt() + 1;
  for (let i = 1; i < first; i++) {
    sum += g(i, len);
  }
  let pre = first;
  for (let i = 1; i < len; i++) {
    let cur = str[i].charCodeAt() - 'a'.charCodeAt() + 1;
    for (let j = pre + 1; j < cur; j++) {
      sum += g(j , len - i);
    }
    pre = cur;
  }
  return sum + 1;
}

console.log(kth('ad'))

// console.log(g(18, 7));