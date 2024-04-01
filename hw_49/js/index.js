'use strict';
(function () {
    const modal = new bootstrap.Modal('[data-questionary-modal]');
    const form = document.querySelector('form[data-questionary-form]');
   const createAnswer = document.querySelector('[data-create-answer]');
   const answersWrap = document.querySelector('[data-generated-fields]');
   const answersList = [];

   const createAnswerInput = (config) => {
       const label = document.createElement('label');
       label.className = 'd-block form-label';
       label.setAttribute('data-id', config.id)

       const div = document.createElement('div');
       div.className = 'mb-3';
       div.innerHTML = 'Question answer ' + config.id;

       const input = document.createElement('input');
       input.className = 'form-control';
       input.type = 'text';
       input.name = config.name + '_' + config.id;
       input.value = config.value;

       label.append(div);
       label.append(input);
       return label;
   }

   const createAnswersLimit = (event) => {
       event.preventDefault();
       const answer = {
           id: answersList.length ? answersList.at(-1).id +1 : 1,
           name: 'answer',
           value: ''
       }

       answersList.push(answer);
       const field = createAnswerInput(answer);
       answersWrap.append(field);

       if(answersList.length === 3) {
           createAnswer.removeEventListener('click', createAnswersLimit);
           createAnswer.setAttribute('disabled', '');
       }
   }


   createAnswer.addEventListener('click', (createAnswersLimit));

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputs = event.target.querySelectorAll('input, select');
        const data = {
            answers: {},
            question: ''
        };

        let questionEmpty = false;
        let answersField = 0;

        inputs.forEach((input) => {
            if (input.name.includes('answer')) {
                if (input.value.trim() !== '') {
                    answersField++;
                }
                data.answers[input.name] = input.value;
            } else if (input.name === 'question' && input.value.trim() !== '') {
                questionEmpty = true;
                data.question = input.value;
            }
        });

        if (!questionEmpty) {
            alert('Назва опитування не може бути пустою');
            return;
        }

        if (answersField < 2) {
            alert('Має бути не менше 2 варіантів відповідей');
            return;
        }

            const modalBody = document.querySelector('[data-questionary-modal] .modal-body');
        const answersList = Object.values(data.answers).reduce((acc, item) => {
            acc += `<li>${item}</li>`
            return acc;
        }, '')

        const answers = `<ul>
            <li><b>Question:</b> ${data.question}</li>
            <li>Answers</li>
            <li><ol>${answersList}</ol></li>
        </ul>`;
        modalBody.innerHTML = answers;
        modal.show();
    });

}());