/**
 * p10
 */

 function win1(arr) {
   if (arr == null || arr.length == 0) {
     return 0;
   }
   return Math.max(f(arr, 0, arr.length - 1), s(arr, 0, arr.length - 1));
 }

 function f(arr, i, j) {
   if (i == j) {
     return arr[i];
   }
   return Math.max(arr[i] + s(arr, i + 1, j), arr[j] + s(arr, i, j - 1));
 }

 function s(arr, i, j) {
   if (i == j) {
     return 0;
   }
   return Math.min(f(arr, i + 1, j), f(arr, i, j - 1));
 }

/**
 * P17改动态规划
 */

 function win2(arr) {
   if (arr == null || arr.length == 0) {
     return 0;
   }
   const f = [];
   for (let i = 0; i < arr.length; i++) {
     let tmp = [];
     for (let j = 0; j < arr.length; j++) {
       tmp.push(0);
     }
     f.push(tmp);
   }
   const s = JSON.parse(JSON.stringify(f));
   for (let j = 0; j < arr.length; j++) {
     f[j][j] = arr[j];
     for (let i = j - 1; i >= 0; i--) {
       f[i][j] = Math.max(arr[i] + s[i + 1][j], arr[j] + s[i][j - 1]);
       s[i][j] = Math.min(f[i + 1][j], f[i][j - 1]);
     }
   }
   return Math.max(f[0][arr.length - 1], s[0][arr.length - 1]);
 }

function dp(arr) {
  if (arr == null || arr.length == 0) {
    return 0;
  }
  const f = [];
   for (let i = 0; i < arr.length; i++) {
     let tmp = [];
     for (let j = 0; j < arr.length; j++) {
       tmp.push(0);
     }
     f.push(tmp);
   }
   const s = JSON.parse(JSON.stringify(f));
   for (let i = 0; i < arr.length; i++) {
     f[i][i] = arr[i];
   }
   let row = 0;
   let col = 1;
   while (col < arr.length) {
     let i = row;
     let j = col;
     while (i < arr.length && j < arr.length) {
      f[i][j] = Math.max(arr[i] + s[i + 1][j], arr[j] + s[i][j - 1]);
      s[i][j] = Math.min(f[i + 1][j], f[i][j - 1]);
      i++;
      j++;
     }
     col++;
   }
   return Math.max(f[0][arr.length - 1], s[0][arr.length - 1]);
}


 console.log(dp([2, 8, 9, 5, 6]) + '---win3');

