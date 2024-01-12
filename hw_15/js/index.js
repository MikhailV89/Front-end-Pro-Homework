'use strict';
//№1 Вивести на сторінку в один рядок через кому числа від 10 до 20.
let result1 = '';

for (let i = 10; i <= 20; i++) {
    result1 += i + ' ,';
}

console.log(result1);
//№2 Вивести квадрати чисел від 10 до 20.
let result2 = '';

for (let i = 10; i <= 20; i++) {
    result2 += i * i + ' ';
}

console.log(result2);
//№3 Вивести таблицю множення на 7.
let result3 = '';

for (let i = 1; i <= 10; i++) {
    result3 += i * 7 + ' ';
}

console.log(result3);
//№4 Знайти суму всіх цілих чисел від 1 до 15.
let result4 = 0;

for (let i = 1; i <= 15; i++) {
    result4 += i;
}

console.log(result4);
//№5 Знайти добуток усіх цілих чисел від 15 до 35.
let result5 = 1;

for (let i = 15; i <= 35; i++) {
    result5 *= i;
}

console.log(result5);
//6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let value = 0;

for (let i = 1; i <= 500; i++) {
    value += i;
}

let result6 = value / 500;
console.log(result6);

//7 Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sum = 0;
let num = 30;

while (num <= 80) {
    if (num % 2 === 0) {
        sum += num;
    }
    num++;
}
console.log(sum);

//8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.
 let result7 = '';

 for (let i = 100; i <= 200; i += 3) {
    result7 += i + ' ';
 }
 console.log(result7);

 //9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
 // 10 Визначити кількість його парних дільників.
 //11 Знайти суму його парних дільників.

const entNumber = +prompt('Enter natural number');
let numValue = 1;
let number = 0;
let sumNumber = 0;
let resultNumber = '';

do {
    if (entNumber % numValue === 0) {
        resultNumber += numValue + ' ';
    }
    if ( entNumber % numValue === 0 && numValue % 2 === 0) {
        number++;
        sumNumber += numValue;
    }
    numValue++;
} while (numValue <= entNumber);

console.log(`Ви ввели номер - ${entNumber} його дільники - ${resultNumber}`);
console.log(`Кількість його парних дільників - ${number}`);
console.log(`Сума його парних дільників - ${sumNumber}`);

//12 Надрукувати повну таблицю множення від 1 до 10.

 for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('\n');
}

 

