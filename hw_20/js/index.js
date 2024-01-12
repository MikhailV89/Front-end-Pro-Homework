'use strict';
const valueFromUser = +prompt('Write some number');
const exponentiation = +prompt('Write exponentiation');

function valueAndExp (value, exp = 1) {
    if (isNaN(value) || isNaN(exp)) {
        return 'Mistake! Its not a number!'
    }

    let resultFunction = Math.pow(value, exp);

    return resultFunction;
}

let resultFunction = valueAndExp(valueFromUser, exponentiation);
alert(`Result: ${resultFunction}`);