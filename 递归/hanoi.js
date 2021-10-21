/**
 * p10
 */

function hanoi(n) {
  if (n > 0) {
    func(n , '左', '右', '中');
  }
}

function func(i, start, end, other) {
  if (i === 1) {
    console.log('Move 1 from ' + start + ' to ' + end);
  } else {
    func(i - 1, start, other, end);
    console.log('Move ' + i + ' from ' + start + ' to ' + end);
    func(i - 1, other, end, start);
  }
}

hanoi(3);

// 路飞的实现
/**
 * 1.把n-1个圆盘从A经过C移动到B
 * 2.把第n个圆盘从A移动到C
 * 3.把n-1个小圆盘从B经过A移动到C
 *  */
function hanoi2(n, a, b, c) {
  if (n > 0) {
    hanoi2(n - 1, a, c, b);
    console.log(`moving ${n} from ${a} to ${c}`);
    hanoi2(n - 1, b, a, c);
  }
}
console.log('--------------------------------')
hanoi2(3, '左', '中', '右');