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
 * P10改动态规划？
 */

 function win2(arr) {
   if (arr == null || arr.length == 0) {
     return 0;
   } 
 }

 console.log(win1([2, 8, 9, 5, 6]));

