function fibUnRecur(n) {
  const f = [0, 1, 1];
  if (n > 2) {
    let num = 0;
    for (let i = 3; i <= n; i++) {
      num = f[i -2] + f[i -1];
      f.push(num);
    }
  }
  return f[n];
}

console.log(fibUnRecur(100))