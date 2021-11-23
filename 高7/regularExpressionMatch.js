/**
 * p34
 */

// 可重看一下, 还有改动态规划， 可选择看

function isValid(s, e) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '*' || s[i] == '.') {
            return false;
        }
    }
    for (let i = 0; i < e.length; i++) {
        if (e[i] == '*' && (i == 0 || e[i - 1] == '*')) {
            return false;
        }
    }
    return true;
}

function isMatch(str, exp) {
    if (str == null || exp == null) {
        return false;
    }
    return isValid(str, exp) ? process(str, exp, 0, 0) : false;
}

// 必须保证ei压中的不是*
function process(s, e, si, ei) {
    if (ei == e.length) {
        return si == s.length;
    }
    // 可能性一， ei + 1位置不是*
    if (ei + 1 == e.length || e[ei + 1] != '*') {
        return si < s.length && (e[ei] == s[si] || e[ei] == '.')
                && process(s, e, si + 1, ei + 1);
    }
    // 可能性二， ei + 1位置是*
    while (si != s.length && (e[ei] == s[si] || e[ei] == '.')) {
        if (process(s, e, si, ei + 2)) {
            return true;
        }
        si++;
    }
    return process(s, e, si, ei + 2);
}

console.log(isMatch('dgrddddvbrf', 'dg.*d.*b.*'))