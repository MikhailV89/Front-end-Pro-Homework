'use strict';
(function () {
   const iter = function(array) {
       let arrIndex = 0;

       return {
           next() {
               if (arrIndex < array.length) {
                   return { value: array[arrIndex++], done: false };
               } else {
                   return { value: undefined, done: true };
               }
           }
       }
   };

    const arr = ['Lemon' , 'Lime', 'Apple', 'Peach'];
    const result = iter(arr);

    console.log(result.next());
    console.log(result.next());
    console.log(result.next());
    console.log(result.next());
    console.log(result.next());
}());