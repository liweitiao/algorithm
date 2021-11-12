/**
 * p26
 */

function printNumberNoInArray(arr) {
  if (arr == null || arr.length == 0) {
    return;
  }
  for (let value of arr) {
    modify(value, arr);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != i + 1) {
      console.log(i + 1);
    }
  }
}

function modify(value, arr) {
  while (arr[value - 1] != value) {
    let tmp = arr[value - 1];
    arr[value - 1] = value;
    value = tmp;
  }
}

printNumberNoInArray([2, 3, 5, 1, 4, 7])