'use strict';
//Task 1

const nameArr = ['Andrew', 'Bill', 'Dasha', 'Oleksandra', ];
const filterArr = nameArr.filter(str => str.length > 5);

console.log(filterArr);

//Task 2

const numbArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = numbArr.reduce((accumulator, value) => {

  if (value % 2 === 0) {
    return accumulator + value;
} else {
    return accumulator;
}
}, 0);

console.log(sum);

//Task 3

 const arr = [20, 21, 22, 23, 24];
 const averageNumber = arr.reduce((accumulator, value) => accumulator + value, 0) / arr.length;

 console.log(averageNumber);