function fi(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fi(n - 2) + fi(n - 1);
}

console.log(fi(50)) 