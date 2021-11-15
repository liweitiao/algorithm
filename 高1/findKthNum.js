/**
 * p30
 */

// 可重看
function findKthNum(arr1, arr2, kth) {
    if (arr1 == null || arr2 == null) {
        throw new Error('Your arr is invaild!');
    }
    if (kth < 1 || kth > arr1.length + arr2.length) {
        throw new Error('K is invaild!');
    }
    let longs = arr1.length >= arr2.length ? arr1 : arr2;
    let shorts = arr1.length >= arr2.length ? arr2 : arr1;
    let l = longs.length;
    let s = shorts.length;
    if (kth <= s) {
        return getUpMedian(shorts, 0, kth - 1, longs, 0, kth - 1);
    }
    if (kth > l) {
        if (shorts[kth - l - 1] >= longs[l - 1]) {
            return shorts[kth - l - 1];
        }
        if (longs[kth - s - 1] >= shorts[s - 1]) {
            return longs[kth - s - 1];
        }
        return getUpMedian(shorts, kth - l, s - 1, longs, kth - s, l - 1);
    }
    if (longs[kth - s - 1] >= shorts[s - 1]) {
        return longs[kth - s - 1];
    }
    return getUpMedian(shorts, 0, s - 1, longs, kth - s, kth - 1);
}

 // a1[s1..e1] a2[s2..e2]  一定要等长
function getUpMedian(a1, s1, e1, a2, s2, e2) {
    let mid1 = 0;
    let mid2 = 0;
    let offset = 0;
    while (s1 < e1) {
        mid1 = Math.floor((s1 + e1) / 2);
        mid2 = Math.floor((s2 + e2) / 2);
        offset = ((e1 - s1 + 1) & 1) ^ 1;
        if (a1[mid1] > a2[mid2]) {
            e1 = mid1;
            s2 = mid2 + offset;
        } else if (a1[mid1] < a2[mid2]) {
            s1 = mid1 + offset;
            e2 = mid2;
        } else {
            return a1[mid1];
        }
    }
    return Math.min(a1[s1], a2[s2]);
}

let sArr = [1, 4, 6, 9, 12, 14, 15, 18];
let lArr = [2, 33, 16, 17, 113];
let lArr2 = [1, 4, 7, 8, 9];
console.log(findKthNum(sArr, lArr, 12));
console.log(getUpMedian(lArr, 0, 4, lArr2, 0, 4));