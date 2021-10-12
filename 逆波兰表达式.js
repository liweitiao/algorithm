const notation = [3, 17, 15, '-', '*', '18', '6', '/', '+'];

function calculate(notation) {
  const stack = [];
  for (let i of notation) {
    let o1, o2, res;
    switch (i) {
      case '+':
        o1 = stack.pop();
        o2 = stack.pop();
        res = o2 + o1;
        stack.push(res);
        break;
      case '-':
        o1 = stack.pop();
        o2 = stack.pop();
        res = o2 - o1;
        stack.push(res);
        break;
      case '*':
        o1 = stack.pop();
        o2 = stack.pop();
        res = o2 * o1;
        stack.push(res);
        break;
      case '/':
        o1 = stack.pop();
        o2 = stack.pop();
        res = o2 / o1;
        stack.push(res);
        break;
      default:
        stack.push(i);
    };
  };
  return stack.pop();
};

console.log(calculate(notation));