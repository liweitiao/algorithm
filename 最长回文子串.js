function manacherString(str) {
  return '#' + str.split('').join('#') + '#';
}

function maxLcpsLength(s) {
  if (s == null || s.length === 0) return 0;
  const str = manacherString(s);
  let C = -1;
  let R = -1;
  let max = 0;
  const pArr = [];
  // debugger;
  for (let i = 0; i <= str.length; i++) {
    pArr[i] = R > i ? Math.min(pArr[2 * C - i], R - i) : 1;
    while (i + pArr[i] < str.length && i - pArr[i] > -1) {
      if (str[i + pArr[i]] === str[i - pArr[i]]) {
        pArr[i]++;
      } else {
        break;
      };
    }

    if (i + pArr[i] > R) {
      R = i + pArr[i];
      C = i;
    }
    
    max = Math.max(max, pArr[i]);
  }
  let j = 0;
  for (; j < pArr.length; j++) {
    if (pArr[j] === max) break;
  }
  let start = Math.floor(j / 2) - Math.floor(max / 2);
  (j % 2) && start++;
  console.log(max, j, start);
  return s.slice(start, start + max - 1);
}

console.log(maxLcpsLength("babad"))
// console.log(Math.floor(9/4));
