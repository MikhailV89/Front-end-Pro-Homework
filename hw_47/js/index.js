'use strict';
( function () {
    const input = document.getElementById('textInput');
    const button = document.getElementById('btn');
    const result = document.getElementById('text_result');

    button.addEventListener('click', () => {
        const par = document.createElement('p');
        par.className = 'paragraph';

        if (input.value.trim() !== '') {
            par.innerHTML = input.value;
            result.prepend(par);
            input.value = '';
        }
    });
}());