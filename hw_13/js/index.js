'use strict';
//№1
const x = 10;
const y = 7;

const result = x > y ? 'x бiльше за y' : 'x не бiльше за y';
console.log(result);

//№2

let value = prompt("Введіть ціле число:");
let num = parseInt(value);
let numberValue = Math.abs(num).toString().length;
let positive = num > 0 ? 'позитивне' : num < 0 ? 'негативне' : 'нуль';
let howMuchNumbers = numberValue === 1 ? 'однозначне' : numberValue === 2 ? 'двозначне' : 'трицифрове і більше';
console.log(`Число ${num} є ${howMuchNumbers} i ${positive}.`);



//№3

const firstValue = +prompt('Write first value');
const secondValue = +prompt('Write second value');
const thirdValue = +prompt('Write third value');

if (firstValue >= secondValue && firstValue >= thirdValue) {
    console.log(`Найбiльше число- ${firstValue}`);
} else if (secondValue >= firstValue && secondValue >= thirdValue) {
    console.log(`Найбiльше число- ${secondValue}`);
} else {
    console.log(`Найбiльше число- ${thirdValue}`);
}

//№4

const firstSide = +prompt('Введіть довжину першої сторони трикутника');
const secondSide = +prompt('Введіть довжину другої сторони трикутника');
const thirdSide = +prompt('Введіть довжину третьої сторони трикутника');

if (firstSide + secondSide > thirdSide && firstSide + thirdSide > secondSide && secondSide + thirdSide > firstSide) {
    console.log('Трикутник може iснувати');
} else {
    console.log('Трикутник не може iснувати з такими данними');
}
