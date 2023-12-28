'use strict';
// Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:

// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел

const num1 = prompt('Please write first number');
const num2 = prompt('Please write second number');
const num3 = prompt('Please write third number');

const result = (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;
alert(`Cереднє арифметичне трьох чисел: ${result}`);