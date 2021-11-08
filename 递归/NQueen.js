/**
 * p10 
 */

function num(n) {
    if (n < 1) {
        return 0
    }
    let record = []; // i行的皇后，放在了第几列
    return process(0, record, n)
}

function process(i, record, n) {
    if (i == n) {
        return 1;
    }
    let res = 0;
    for (let j = 0; j < n; j++) {
        if (isValid(record, i, j)) {
            record[i] = j;
            res += process(i + 1, record, n);
        }
    }
    return res;
}

function isValid(record, i, j) {
    for (let k = 0; k < i; k++) { // 之前的某个k行的皇后
        if (j == record[k] || Math.abs(record[k] - j) == Math.abs(i -k)) {
            return false;
        }
    }
    return true;
}

console.log(num(16))