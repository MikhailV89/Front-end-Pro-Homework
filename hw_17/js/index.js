'use strict';
//№1
const arr = [1, 2, 3, 4, 5];
let sumArray = 0;

for (let i = 0; i < arr.length; i++) {
    sumArray += arr[i];
}

console.log(`Сума елементiв масиву = ${sumArray}`);

//№2
let sumOfSquares = 0;

for (let i = 0; i < arr.length; i++) {
    sumOfSquares += Math.pow(arr[i], 2);
}

console.log(`Сума квадратiв елементiв масиву = ${sumOfSquares}`);