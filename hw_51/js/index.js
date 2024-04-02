'use strict';
(function () {
    const form = document.querySelector('[data-todo-form]');
    const todoItemBox = document.querySelector('[data-todo-items]');
    let todoArr = [];

    const createTodoItemBox = (config) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'col-4';
        wrapper.innerHTML = `<div class="taskWrapper">
                          <div class="taskHeading">${config.title}</div>
                         <div class="taskDescription">${config.description}</div>
                              </div>`

        return wrapper;
    }
    const appendTodoItem = (element) => {
        todoItemBox.append(element);
    }

    const saveToLocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(todoArr));
    }

    const loadLocalStorage = () => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            todoArr = JSON.parse(savedTodos);
            todoArr.forEach(todo => {
                const todoItem = createTodoItemBox(todo);
                appendTodoItem(todoItem);
            });
        }
    }

    loadLocalStorage();



    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputs = event.target.querySelectorAll('input, textarea');
        const data = {};
        for (const input of inputs) {
            if(!input.value.trim()) return alert('All fields must be filled in');
                data[input.name] = input.value;

        }

            const todoItem = createTodoItemBox(data);
        appendTodoItem(todoItem);
        todoArr.push(data);
        saveToLocalStorage();
        event.target.reset();

    })

}());