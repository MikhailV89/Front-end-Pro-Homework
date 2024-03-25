'use strict';
const DATA_KEY = 'formData';

(function () {
    const formPage = () => {
        const formPage = document.querySelector('[data-form]');

        formPage.addEventListener('submit', event => {
            event.preventDefault();
            const inputs = event.target.querySelectorAll('input, select, textarea');
            const data = {};

            inputs.forEach( (input) => {
              if (input.value.trim() !== '') {
                  data[input.name] = input.value;
              }
            });

            localStorage.setItem(DATA_KEY, JSON.stringify(data))
        });
    }

    const outputPage = () => {
        const data = JSON.parse(localStorage.getItem(DATA_KEY));

        if (!data) {
            alert('No Data');
            return;
        }

        const ul = document.createElement('ul');

        for (const key in data) {
            const li = document.createElement('li');
            li.innerHTML = `<b>${key}: </b> ${data[key]}`;
            ul.append(li);
        }

        document.querySelector('main').append(ul);
    }

    if (location.pathname.includes('index.html')) {
        formPage();
    } else if(location.pathname.includes('output.html')) {
        outputPage();
    }

}) ();