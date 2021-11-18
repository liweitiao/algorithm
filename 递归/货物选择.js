/**
 * p10---有问题？？
 */

 function process(weights, values, i, alreadyweight, bag) {
   if (alreadyweight > bag) {
     return 0;
   }
   if (i == weights.length) {
     return 0;
   }
   return Math.max(
     process(weights, values, i + 1, alreadyweight, bag),
     values[i] + process(weights, values, i + 1, alreadyweight + weights[i], bag)
   );
 }

const weights = [2, 4, 5, 6, 8];
const values = [2, 4, 6, 7, 9];
console.log(process(weights, values, 0, 0, 22))