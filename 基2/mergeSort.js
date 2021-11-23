/**
 * p3
 */

function mergeSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  sort(arr, 0, arr.length - 1);
}

function sort(arr, l , r) {
  if (l == r) {
    return;
  }
  let mid = l + ((r - l)>>1);
  sort(arr, l, mid);
  sort(arr, mid + 1, r);
  merge(arr, l , mid, r);
}

function merge(arr, l , m, r) {
  let help = new Array(r - l + 1).fill(0);
  let i = 0;
  let p1 = l;
  let p2 = m + 1;
  while (p1 <= m && p2 <= r) {
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]; 
  }
  while (p1 <= m) {
    help[i++] = arr[p1++];
  }
  while (p2 <= r) {
    help[i++] = arr[p2++];
  }
  for (let i = 0; i < help.length; i++) {
    arr[l + i] = help[i];
  }
}

let arr = [3, 5,2,1,4,6,3,7,9];
mergeSort(arr);
console.log(arr);