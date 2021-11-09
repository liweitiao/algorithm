/**
 * p21
 */

function rotate(matrix) {
  let tR = 0;
  let tC = 0;
  let dR = matrix.length - 1;
  let dC = matrix.length - 1;
  while (tR < dR) {
    rotateEdge(matrix, tR++, tC++, dR--, dC--);
  }
}

function rotateEdge(m, a, b, c, d) {
  let tmp = 0;
  for (let i = 0; i < d - b; i++) {
    tmp = m[a][b + i];
    m[a][b + i] = m[c - i][b];
    m[c - i][b] = m[a + i][d];
    m[a + i][d] = tmp;
  }
}

let arr = [[1,2,3],[4,5,6],[7,8,9]];
rotate(arr);
console.log(arr);