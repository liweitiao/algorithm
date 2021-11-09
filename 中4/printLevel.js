/**
 * p21
 */

function printMatrixZigZag(matrix) {
  let ar = 0;
  let ac = 0;
  let br = 0;
  let bc = 0;
  let endR = matrix.length - 1;
  let endC = matrix[0].length - 1;
  let fromUp = false;
  while (ar != endR + 1) {
    printLevel(matrix, ar, ac, br, bc, fromUp);
    ar = ac == endC ? ar + 1 : ar;
    ac = ac == endC ? ac : ac + 1;
    bc = br == endR ? bc + 1 : bc;
    br = br == endR ? br : br + 1;
    fromUp = !fromUp;
  }
}

function printLevel(m, tR, tC, dR, dC, f) {
  if (f) {
    while (tR != dR + 1) {
      process.stdout.write(m[tR++][tC--] + ' ');
    } 
  } else {
    while (dR != tR - 1) {
      process.stdout.write(m[dR--][dC++] + ' ');
    }
  }
}

let arr = [[1,2,3],[4,5,6],[7,8,9]];
printMatrixZigZag(arr);