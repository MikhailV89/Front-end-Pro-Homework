'use strict';
//indexOf

const indexOf = function (array, elem) {
   for (let i = 0; i < array.length; i += 1) {
      if (array[i] === elem) {
         return i;
      }
   }
   return -1;
}

const arr = ['lime', 'apple', 'lemon', 'pineapple', 'mango'];
console.log(indexOf(arr, 'pineapple'));

//lastIndexOf

const lastIndexOf = function (array, elem) {
   for (let i = array.length; i >= 0; i -= 1) {
      if (array[i] === elem) {
         return i;
      }
   }
    return -1;
}

const arr2 = ['lime', 'apple', 'lemon', 'pineapple', 'apple', 'mango'];
console.log(lastIndexOf(arr2, 'apple'));

//find

const find = function (array, callback) {
     for (let i = 0; i < array.length; i += 1) {
       if (callback(array[i], i, array)) {
         return array[i];
       }
     }
     return undefined;
   };
   const arr3 = [1, 2, 3, 4, 5, 6, 7];
   const result1 = find(arr3, (element) => element > 3);
   console.log(result1);

//findindex

const findIndex = function (array, callback) {
   for (let i = 0; i < array.length; i += 1) {
       if (callback(array[i], i, array)) {
         return i;
       }
   }
   return -1;
}

const arr4 = [1, 2, 3, 4, 5, 6, 7];
const result2 = findIndex(arr4, (element) => element % 3 === 0);
console.log(result2);

// includes

const includes = function(array, element, fromIndex = 0) {
   for (let i = fromIndex; i < array.length; i +=1) {
      if (array[i] === element) {
         return true;
      }
   }

   return false;
}

const arr5 = [1, 2, 3, 4, 5, 6, 7];
console.log(includes(arr5, 5, 2));

// every

const every = function(array, callback) {
   for (let i = 0; i < array.length; i += 1) {
     if (!callback(array[i], i, array)) {
       return false;
     }
   }
   return true;
 };
 
 const arr6 = [5, 6, 7, 8];
 const result3 = every(arr6, (element) => element > 0);
 console.log(result3); 

 //some

 const some = function (array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
};

const arr7 = [-10, -11, -12, -13];
const result4 = some(arr7, (element) => element < 0);
console.log(result4);