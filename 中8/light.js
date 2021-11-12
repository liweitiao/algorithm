/**
 * p25
 */

function minLight(str) {
  let index = 0;
  let light = 0;
  while (index < str.length) {
    if (str[index] == 'X') {
      index++;
    } else {
      light++;
      if (index + 1 == str.length) {
        break;
      } else {
        if (str[index + 1] == 'X') {
          index = index + 2;
        } else {
          index = index + 3;
        }
      }
    }
  }
  return light;
}