/**
 * p26
 */

function isValid(exp) {
  if ((exp.length & 1) == 0) {
    return false;
  }
  for (let i = 0; i < exp.length; i = i + 2) {
    if ((exp[i] != '1') && (exp[i] != '0')) {
      return false;
    }
  }
  for (let i = 1; i < exp.length; i = i + 2) {
    if ((exp[i] != '&') && (exp[i] != '|') && (exp[i] != '^')) {
      return false;
    }
  }
  return true;
}

function num1(express, desired) {
  if (express == null ||  express == '') {
    return 0;
  }
  let exp = express.split('');
  if (!isValid(exp)) {
    return 0;
  }
  return p(exp, desired, 0, exp.length - 1);
}

function p(exp, desired, L, R) {
  if (L == R)  {
    if (exp[L] == '1') {
      return desired ? 1 : 0;
    } else {
      return desired ? 0 : 1;
    }
  }

  let res = 0;
  if (desired) {
    for (let i = L + 1; i < R; i += 2) {
      switch (exp[i]) {
        case '&':
          res += p(exp, true, L, i - 1) * p(exp, true, i + 1, R);
          break;
        case '|':
          res += p(exp, true, L, i - 1) * p(exp, false, i + 1, R);
          res += p(exp, false, L, i - 1) * p(exp, true, i + 1, R);
          res += p(exp, true, L, i - 1) * p(exp, true, i + 1, R);
          break;
        case '^':
          res += p(exp, true, L, i - 1) * p(exp, false, i + 1, R);
          res += p(exp, false, L, i - 1) * p(exp, true, i + 1, R);
          break;
      }
    }
  } else {
    for (let i = L + 1; i < R; i += 2) {
      switch (exp[i]) {
        case '&':
          res += p(exp, true, L, i - 1) * p(exp, false, i + 1, R);
          res += p(exp, false, L, i - 1) * p(exp, true, i + 1, R);
          res += p(exp, false, L, i - 1) * p(exp, false, i + 1, R);
          break;
        case '|':
          res += p(exp, false, L, i - 1) * p(exp, true, i + 1, R);
          break;
        case '^':
          res += p(exp, true, L, i - 1) * p(exp, true, i + 1, R);
          res += p(exp, false, L, i - 1) * p(exp, false, i + 1, R);
          break;
      }
    }
  }
  return res;
}

function num2(express, desired) {
  if (express == null || express == '') {
    return 0;
  }
  let exp = express.split('');
  if (!isValid(exp)) {
    return 0;
  }
  return dpLive(exp, desired);
}

function dpLive(str, desired) {
  let N = str.length;
  let tMap = [];
  let fMap = [];
  for (let i = 0; i < N; i++) {
    let temp1 = new Array(N).fill(0);
    let temp2 = new Array(N).fill(0);
    tMap.push(temp1);
    fMap.push(temp2);
  }
  for (let i = 0; i < N; i += 2) {
    tMap[i][i] = str[i] == '1' ? 1 : 0;
    fMap[i][i] = str[i] == '0' ? 1 : 0;
  }
  // console.log(tMap, fMap);
  for (let row = N - 3; row >= 0; row -= 2) {
    for (let col = row + 2; col < N; col += 2) {
      for (let i = row + 1; i < col; i += 2) {
        switch (str[i]) {
          case '&':
            tMap[row][col] += tMap[row][i - 1] * tMap[i + 1][col];
            break;
          case '|':
            tMap[row][col] += tMap[row][i - 1] * fMap[i + 1][col];
            tMap[row][col] += fMap[row][i - 1] * tMap[i + 1][col];
            tMap[row][col] += tMap[row][i - 1] * tMap[i + 1][col];
            break;
          case '^':
            tMap[row][col] += tMap[row][i - 1] * fMap[i + 1][col];
            tMap[row][col] += fMap[row][i - 1] * tMap[i + 1][col];
            break;
        }
        switch (str[i]) {
          case '&':
            fMap[row][col] += tMap[row][i - 1] * fMap[i + 1][col];
            fMap[row][col] += fMap[row][i - 1] * tMap[i + 1][col];
            fMap[row][col] += fMap[row][i - 1] * fMap[i + 1][col];
            break;
          case '|':
            fMap[row][col] += fMap[row][i - 1] * tMap[i + 1][col];
            break;
          case '^':
            fMap[row][col] += tMap[row][i - 1] * tMap[i + 1][col];
            fMap[row][col] += fMap[row][i - 1] * fMap[i + 1][col];
            break;
        }
      }
    }
  }
  return desired ? tMap[0][N - 1] : fMap[0][N - 1];
}

console.log(num1('1|0&1|1&0&1|1', true));
console.log(num2('1|0&1|1&0&1|1', true));
