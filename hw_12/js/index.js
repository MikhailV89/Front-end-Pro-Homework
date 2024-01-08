'use strict';
const a = +prompt('Write number or test');
const b = +prompt('Write number');
const result1 = a === 0 ? 'Вiрно' : 'Неправильно';
const result2 = a > 0 ? 'Вiрно' : 'Неправильно';
const result3 = a < 0 ? 'Вiрно' : 'Неправильно';
const result4 = a >= 0 ? 'Вiрно' : 'Неправильно';
const result5 = a <= 0 ? 'Вiрно' : 'Неправильно';
const result6 = a != 0 ? 'Вiрно' : 'Неправильно';
const result7 = a > 0 && a < 5 ? 'Вiрно' : 'Неправильно';
const result8 = a === 0 || a === 2 ? a + 7 : a / 10;
const result9 = a <= 1 && b >= 3 ? a + b : a - b;  
const result10 = a > 2 && a < 11 || b >= 6 && b < 14 ? 'Вiрно' : 'Неправильно';
const result11 = a === 'test' ? 'Вiрно' : 'Неправильно';
const result12 = a === '1' ? 'Вiрно' : 'Неправильно';

const num = +prompt('write 1,2,3,4');
let result = 0;
switch (num) {
 case 1:
    result = 'зима';
    break;
 case 2:
    result = 'весна';
    break;
 case 3:
    result = 'лiто';
    break;
case 4:
    result = 'осiнь';
    break;
default:
    result = 'невiрне значення';    
}
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);
console.log(result9);
console.log(result10);
console.log(result11);
console.log(result12);