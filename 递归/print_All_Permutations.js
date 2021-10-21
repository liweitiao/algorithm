/**
 * p10
 */

function printAllPermutations(str) {
  const arr = str.split('');
  process(arr, 0);
}

function process(arr, i) {
  if (i === arr.length) {
    console.log(arr.toString());
    return;
  }
  for (let j = i; j < arr.length; j++) {
    swap(arr, i, j);
    process(arr, i + 1);
    swap(arr, i, j);
  }
}


/**
 * 去重
 */
function process2(arr, i) {
  if (i === arr.length) {
    console.log(arr.toString());
    return;
  }
  let set = new Set();
  for (let j = i; j < arr.length; j++) {
    if (!set.has(arr[j])) {
      set.add(arr[j]);
      swap(arr, i, j);
      process2(arr, i + 1);
      swap(arr, i, j);
    }
  }
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

printAllPermutations('acc')

