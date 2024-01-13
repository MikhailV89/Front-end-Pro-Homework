'use strict';

function padString(str, length, symbol = '@', symRight = true) {
    if(typeof str !== 'string' || typeof length !== 'number' || typeof symbol !== 'string' || typeof symRight !== 'boolean') {
        return 'Mistake!!!';
    }

    if (length < str.length) {
        return str.substr(0, length);
    }

    const padLength = length - str.length;
    const symRepeat = symbol.repeat(padLength);

    const result = symRight ? str + symRepeat : symRepeat + str;

    return result;
}

console.log(padString('привіт', 8)); 
console.log(padString('привіт', 7, '@', false)); 
console.log(padString('привіт', 2));

