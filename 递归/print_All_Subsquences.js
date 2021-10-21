/**
 * p10
 */

function printAllSubsquence(str) {
  const arr = str.split('');
  process(arr, 0, []);
}

function process(arr , i, res) {
  if (i === arr.length) {
    printList(res);
    return;
  }
  let resKeep = JSON.parse(JSON.stringify(res));
  resKeep.push(arr[i]);
  process(arr, i + 1, resKeep);
  let resNoInclude = JSON.parse(JSON.stringify(res));
  process(arr, i + 1, resNoInclude);
}

function printList(res) {
  console.log(res.toString() + '#');
}

// printAllSubsquence('abc');


/**
 * 方法2：省空间
 */
function printAllSubsquence2(str) {
  const arr = str.split('');
  process2(arr, 0);
}

function process2(arr, i) {
  if (i === arr.length) {
    console.log(arr.toString());
    return;
  }
  process2(arr, i + 1); // 要当前字符
  let tmp = arr[i];
  arr[i] = 0;
  process2(arr, i + 1); // 不要当前字符
  arr[i] = tmp; 
}

printAllSubsquence2('acd')
