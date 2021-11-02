/**
 * p19
 */

function process(arr, k) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }
  const res = [];
  for (let j = 0; j < arr.length; j++) {
    if (set.has(arr[j] + k)) {
      res.push([arr[j], arr[j] + k])
    }
  }
  return res;
}

console.log(process([2, 4, 6, 3, 8, 9], 3));