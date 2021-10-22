/**
 * p10
 */

 function reverse(stack) {
   if (stack.length === 0) {
     return;
   }
   let i = f(stack);
   reverse(stack);
   stack.push(i);
 }

 function f(stack) {
   let result = stack.pop();
   if (stack.length === 0) {
     return result;
   } else {
     let last = f(stack);
     stack.push(result);
     return last;
   }
 }

 let stack = [1, 2, 3, 4];
 reverse(stack);
 console.log(stack);
 