'use strict';
let sumNumbers = 0;

outerLoop:
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            continue outerLoop;
        }
        sumNumbers += i;
    }

    console.log(`Суммв непарних чисел: ${sumNumbers}`);