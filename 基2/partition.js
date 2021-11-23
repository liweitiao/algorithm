/**
 * p3
 */

function partition1(arr, num) {
  let move = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= num) {
      let temp = arr[move + 1];
      arr[move + 1] = arr[i];
      arr[i] = temp;
      move++;
    }
  }
}

function partition2(arr, num) {
  let leftPart = -1;
  let rightPart = arr.length;
  let i = 0;
  while (i != rightPart) {
    if (arr[i] < num) {
      let temp = arr[leftPart + 1];
      arr[leftPart + 1] = arr[i];
      arr[i] = temp;
      leftPart++;
      i++;
    } else if (arr[i] == num) {
      i++;
    } else {
      let temp = arr[i];
      arr[i] = arr[--rightPart];
      arr[rightPart] = temp;
    }
  }
}

let arr = [3, 2, 5, 8, 6, 4, 5, 7, 2, 5];
// partition1(arr, 5);
partition2(arr, 5);
console.log(arr);