'use strict';
const value = +prompt('Write some number value');

if (value < 1) {
    console.log('NaN');
} else {
    let secondValue = 2;

    while (secondValue <= Math.sqrt(value)) {
        if (value % secondValue === 0) {
            console.log(`Мiнiмальний дiльник числа ${value} : ${secondValue}`);
            break;
        }
        secondValue++;
    }
    if (secondValue > Math.sqrt(value)) {
        console.log(`Мiнiмальний дiльник числа ${value} : ${value}`); 
    }
}
