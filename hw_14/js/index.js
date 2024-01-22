'use strict';
const userAge = +prompt('Please enter your age');

    if(isNaN(userAge) || userAge === null || userAge === 0){
        alert('Error');
    } else if(userAge % 10 === 1 && userAge % 100 !== 11){
        alert(`${userAge} рік`);
    } else if(userAge % 10 >= 2 && userAge % 10 <= 4 && userAge % 100 !== 12  && userAge % 100 !== 13 && userAge % 100 !== 14) {
        alert(`${userAge} роки`);
    } else {
        alert(`${userAge} років`);
    }
