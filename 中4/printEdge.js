/**
 * p21
 */

function spiralOrderPrint(matrix) {
  let tR = 0, tC = 0, dR = matrix.length - 1, dC = matrix[0].length - 1;
  while (tR <= dR && tC <= dC) {
    printEdge(matrix, tR++, tC++, dR--, dC--);
  }
}

function printEdge(m, a, b, c, d) {
  if (a == c) {
    for (let i = b; i <= d; i++) {
      process.stdout.write(m[a][i] + ' ');
    }
  } else if (b == d) {
    for (let i = a; i <= c; i++) {
      process.stdout.write(m[i][b] + ' ');
    }
  } else {
    let curC = b;
    let curR = a;
    while (curC != d) {
      process.stdout.write(m[a][curC] + ' ');
      curC++;
    }
    while (curR != c) {
      process.stdout.write(m[curR][d] + ' ');
      curR++;
    }
    while(curC != b) {
      process.stdout.write(m[c][curC] + ' ');
      curC--;
    }
    while (curR != a) {
      process.stdout.write(m[curR][b] + ' ');
      curR--;
    }
  }
}

spiralOrderPrint([[1,2,3],[4,5,6],[7,8,9]]);