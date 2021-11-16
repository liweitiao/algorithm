/**
 * p32
 */

function getValue(str) {
  return value(str, 0)[0];
}

function value(str, i) {
  let que = [];
  let pre = 0;
  let bra = null;
  while (i < str.length && str[i] != ')') {
    if (str[i] >= 0 && str[i] <= 9) {
      pre = pre * 10 + str[i++].charCodeAt() - '0'.charCodeAt();
    } else if (str[i] != '(') {
      addNum(que, pre);
      que.push(str[i++]);
      pre = 0;
    } else {
      bra = value(str, i + 1);
      pre = bra[0];
      i = bra[1] + 1;
    }
  }
  addNum(que, pre);
  return [getNum(que), i];
}

function addNum(que, num) {
  if (que.length) {
    let cur = 0;
    let top = que.pop();
    if (top == '+' || top == '-') {
      que.push(top);
    } else {
      cur = +que.pop();
      num = top == '*' ? (cur * num) : (cur / num);
    }
  }
  que.push(num);
}

function getNum(que) {
  let res = 0;
  let add = true;
  let cur = null;
  let num = 0;
  while (que.length) {
    cur = que.shift();
    if (cur == '+') {
      add = true;
    } else if (cur == '-') {
      add = false;
    } else {
      num = +cur;
      res += add ? num : (-num);
    }
  }
  return res;
}

let exp = "4*((7-1)-3)+8*1"
debugger;
console.log(getValue(exp));