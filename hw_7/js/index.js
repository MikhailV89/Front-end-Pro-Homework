'use strict';
// Створити скрипт який повинен виконувати наступне:

// питаємо у користувача, що він хоче зробити (add, sub, mult, div);
// питаємо у користувача перше число;
// запитуємо у користувача друге число;
// виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").

const chooseOperation = prompt('Please choose operation: add/sub/mult/div');
const num1 = +prompt('Write first number');
const num2 = +prompt('Write second number');

const add = num1 + num2;
const sub = num1 - num2;
const multiply = num1 * num2;
const divide = num1 / num2;

alert(` Result:
  Add ${add}
  Sub ${sub}
  Multiply ${multiply}
  Divide ${divide}
`);