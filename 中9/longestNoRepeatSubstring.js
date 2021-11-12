/**
 * p26
 */

function maxUnique(str) {
  if (str == null || str == '') {
    return 0;
  }
  let map = {};
  let len = 0;
  let pre = -1;
  let cur = 0;
  for (let i = 0; i != str.length; i++) {
    pre = Math.max(pre, map[str[i]] ? map[str[i]] : -1);
    cur = i - pre;
    len = Math.max(len, cur);
    map[str[i]] = i;
  }
  return len;
}

console.log(maxUnique('adbba'))