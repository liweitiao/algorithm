/**
 * p10
 */

 function number(str, i) {
   if (i === str.length) {
     return 1;
   }
   if (str[i] == '0') {
     return 0;
   }
   if (str[i] == '1') {
     let res = number(str, i + 1);
     if (i + 1 < str.length) {
       res += number(str, i + 2);
     }
     return res;
   }
   if (str[i] == '2') {
     let res = number(str, i + 1);
     if (i + 1 < str.length 
          && (str[i + 1] >= '0' && str[i + 1] <= '6')) {
        res += number(str, i + 2);
      }
      return res;
   }
   return number(str, i + 1);
 }

 console.log(number('110', 0))
 console.log('1' >= '0', '1' <= '6')