'use strict';
// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// ﻿sum(3) = 3 

// sum(5) = 8

// sum(20) = 28

function createSum () {
    let total = 0;

    function result (num) {
        total += num;
        return `sum(${num}) = ${total}`;
    }

    return result;
}

const sumFunction = createSum();

console.log(sumFunction(3));
console.log(sumFunction(5));
console.log(sumFunction(20));