'use strict';
// 1 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let result1 = '';

for (let i = 20; i <= 30; i+=0.5) {
    result1 += i + ' ';
}

console.log(result1);

// 2 Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let valueDollars = 10;
let resultOfExchange = '';

while (valueDollars <= 100) {
    resultOfExchange = valueDollars * 27;
    console.log(`${valueDollars} USA = ${resultOfExchange} UAH`);
    valueDollars += 10;
}

// 3 Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let givenNumber = 100;
let fromStart = 1;
let number = '';

do {
  if (fromStart * fromStart <= givenNumber) {
    number += fromStart + ', ';
    }
    fromStart++;
} while (fromStart <= 100);
console.log(number);

// 4 Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const numberRequest = +prompt('Please write number');
let valuePrime = 2;
let resultPrime = true;

while (!numberRequest || isNaN(parseInt(numberRequest))) {
    numberRequest = +prompt('Enter a prime number!');
}

do {
    if (numberRequest % valuePrime === 0 && valuePrime !== numberRequest || numberRequest === 1) {
        resultPrime = false;
    }
    valuePrime++;
} while (valuePrime < numberRequest);

if (resultPrime) {
    console.log(`Число ${numberRequest} є простим числом.`);
} else {
    console.log(`Число ${numberRequest} не є простим числом.`);
}

// 5 Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
const someNumber = +prompt('Write some number');
let valueNumber = 1;
let resultDegre = '';

do {
    valueNumber++;
    resultDegre = Math.pow(3, valueNumber);
} while (resultDegre < someNumber);

if (resultDegre == someNumber) {
    console.log(`Число ${someNumber} можна отримати шляхом зведення числа 3 у ступінь ${valueNumber}.`);
} else {
    console.log(`Число ${someNumber} неможливо отримати шляхом зведеня числа 3 у деякий ступень.`);
}