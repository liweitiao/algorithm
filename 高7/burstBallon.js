/**
 * p34
 */

function max(arr) {
    if (arr == null || arr.length == 0) {
        return 0;
    }
    if (arr.length == 1) {
        return arr[0];
    }
    arr.push(1);
    arr.unshift(1);
    return process(arr, 1, arr.length - 2);
}

function process(arr, L, R) {
    if (L == R) {
        return arr[L - 1] * arr[L] * arr[R + 1];
    }
    // 最后打爆arr[L]的方案，和最后打爆arr[R]的方案，先比较一下
    let max = Math.max(
        arr[L - 1] * arr[L] * arr[R + 1] + process(arr, L + 1, R),
        arr[L - 1] * arr[R] * arr[R + 1] + process(arr, L, R - 1));
    // 尝试中间位置的气球最后被打爆的每一种方案
    for (let i = L + 1; i < R; i++) {
        max = Math.max(max, 
            arr[L - 1] * arr[i] * arr[R + 1] + process(arr, L, i - 1)
                + process(arr, i + 1, R));
    }
    return max;
}

let arr = [3, 2, 5]
console.log(max(arr));