'use strict';
(function () {
    document.querySelector('#registration').addEventListener('click', function () {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const message = document.querySelector('.message');

        if(name === '' || email === '' || password === '') {
            message.textContent = 'Please, Fill in all the fields!!!';
        } else {
            message.textContent = 'Access was successful';
        }
    });
}());