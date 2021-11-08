/**
 * p19
 */

function process(str) {
  let count = 0;
  let ans = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') {
      count++;
    } else {
      if (count == 0) {
        ans++;
      } else {
        count--;
      }
    }
  }
  return count + ans;
}

console.log(process('()))((()))'))