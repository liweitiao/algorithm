/**
 * p4
 */

// 左
function heapSort1(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    heapInsert(arr, i);
  }
  let size = arr.length;
  swap(arr, 0, --size);
  while (size > 0) {
    heapify(arr, 0, size);
    swap(arr, 0, --size);
  }
}

// 左
function heapSort2(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
  let size = arr.length;
  swap(arr, 0, --size);
  while (size > 0) {
    heapify(arr, 0, size);
    swap(arr, 0, --size);
  }
}

function heapSort3(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    heapInsert(arr, i);
  }
  let size = arr.length;
  while (size > 1) {
    swap(arr, 0, --size);
    heapify(arr, 0, size);
  }
}

function heapSort4(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
  let size = arr.length;
  while (size > 1) {
    swap(arr, 0, --size);
    heapify(arr, 0, size);
  }
}

function heapInsert(arr, index) {
  while (index > 0 && arr[index] > arr[Math.floor((index - 1) / 2)]) {
    swap(arr, index, Math.floor((index - 1) / 2));
    index = Math.floor((index - 1) / 2);
  }
}

function heapify(arr, index, size) {
  let left = index * 2 + 1;
  while (left < size) {
    let largest = left + 1 < size && arr[left + 1] > arr[left] ? left + 1 : left;
    largest = arr[largest] > arr[index] ? largest : index;
    if (largest == index) {
      break;
    }
    swap(arr, largest, index);
    index = largest;
    left = index * 2 + 1;
  }
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

let arr = [3, 5, 2, 4, 5, 3, 1, 8];
heapSort3(arr);
console.log(arr);