'use strict';
const reduce = function (array, callback, initialValue) {
   let accumulator = initialValue !== undefined ? initialValue : array[0];
   const initValue = initialValue !== undefined ? 0 : 1;
  
   for (let i = initValue; i < array.length; i += 1) {
     accumulator = callback(accumulator, array[i], i, array);
   }
   return accumulator;
 };
 
 const arr = [1, 2, 3, 4, 5, 6, 7];
 const valueArr = reduce(arr, (acc, current) => acc + current, 0);
 console.log(valueArr);


 