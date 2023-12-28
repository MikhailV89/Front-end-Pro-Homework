'use strict';
// Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.

// Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:

// //Користувач ввів 2 і 2:

// 2+2=4
// 2-2=0
// 2*2=4
// 2/2=1

const num1 = +prompt('Write first number');
const num2 = +prompt('Write second number');

const sum = num1 + num2;
const minus = num1 - num2;
const multiply = num1 * num2;
const divide = num1 / num2;

alert(` Result:
  Sum ${sum}
  Minus ${minus}
  Multiply ${multiply}
  Divide ${divide}
`);