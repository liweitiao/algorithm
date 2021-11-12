/**
 * p26
 */

function remove(str) {
  if (str == null || str.length < 2) {
    return str;
  }
  let map = {};
  for (let i = 0; i < str.length; i++) {
    map[str[i]] ? (map[str[i]]++) : (map[str[i]] = 1);
  }
  let minACSIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (--map[str[i]] == 0) {
      break;
    } else {
      minACSIndex = str[minACSIndex] > str[i] ? i : minACSIndex;
    }
  }
  return str[minACSIndex] + remove(str.substring(minACSIndex + 1).replace(str[minACSIndex], ''));
}

console.log(remove('sffdsds'));
// console.log('b' > 'a');