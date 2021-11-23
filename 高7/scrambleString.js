/**
 * p35
 */

// 可重看改动态规划的部分

function sameTypeSameNumber(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let map = new Array(256).fill(0);
  for (let i = 0; i < str1.length; i++) {
    map[str1[i].charCodeAt()]++;
  }
  for (let i = 0; i < str2.length; i++) {
    if (--map[str2[i].charCodeAt()] < 0) {
      return false;
    }
  }
  return true;
}

function isScramble1(s1, s2) {
  if ((s1 == null && s2 != null) || (s1 != null && s2 == null)) {
    return false;
  }
  if (s1 == null && s2 == null) {
    return true;
  }
  if (s1 == s2) {
    return true;
  }
  if (!sameTypeSameNumber(s1, s2)) {
    return false;
  }
  let N = s1.length;
  return process(s1, s2, 0, 0, N);
}

function process(str1, str2, L1, L2, size) {
  if (size == 1) {
    return str1[L1] == str2[L2];
  }
  for (let leftPart = 1; leftPart < size; leftPart++) {
    if (
      // （左1和左2）&& （右1右2）
      (process(str1, str2, L1, L2, leftPart) && (process(str1, str2, L1 + leftPart, L2 + leftPart, size - leftPart)))
      // （左1和右2）&&（右1和左2）
        || (process(str1, str2, L1, L2 + leftPart, leftPart) && (process(str1, str2, L1 + leftPart, L2, size - leftPart)))
    ) {
      return true;
    }
  }
  return false;
}

console.log(isScramble1('fggds', 'fggsd'));