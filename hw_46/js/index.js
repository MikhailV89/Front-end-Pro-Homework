'use strict';

( function () {
    const whatValue = function () {
        const value = document.getElementById('numberInput').value;
        if(isNaN(value)) {
            alert('Write number');
        } else if (value % 2 === 0) {
            alert('Double number');
        } else {
            alert('not a pair number');
        }
    };

    const button = document.getElementById('button');
    button.addEventListener('click', (whatValue));

}());