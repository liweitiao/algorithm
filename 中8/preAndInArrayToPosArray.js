/**
 * p25
 */

function getPosArray(pre, inOrder) {
  if (pre == null) {
    return null;
  }
  let N = pre.length;
  let pos = new Array(N);
  set(pre, inOrder, pos, 0, N - 1, 0, N - 1, 0, N - 1);
  return pos;
}

function set(pre, inOrder, pos, prei, prej, ini, inj, posi, posj) {
  if (prei > prej) {
    return;
  } 
  if (prei == prej) {
    pos[posi] = pre[prei];
  }
  pos[posj] = pre[prei];
  let find = ini;
  for (; find <= inj; find++) {
    if (inOrder[find] == pre[prei]) {
      break;
    }
  }
  set(pre, inOrder, pos, prei + 1, prei + find - ini, ini, find - 1, posi, posi + find - ini - 1);
  set(pre, inOrder, pos, prei + find - ini + 1, prej, find + 1, inj, posi + find - ini, posj - 1);
}

console.log(getPosArray(['a', 'b', 'd', 'e', 'c'], ['d', 'b', 'e', 'a', 'c']));