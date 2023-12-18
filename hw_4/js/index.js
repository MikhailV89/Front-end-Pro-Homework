'use strict';
// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);

const str1 = prompt('Please write first string');
const str2 = prompt('Please write second string');
const str3 = prompt('Please write third string');

const result = str2 + str3 + str1;
console.log(result);

// Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

const value = +prompt('Write few numbers');
const newValue = value.toString().replaceAll('', ' ');

console.log(newValue);
