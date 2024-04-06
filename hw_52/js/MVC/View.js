const View = {
    form: document.querySelector('#todoForm'),
    todoItemsContainer: document.querySelector('[data-todo-items]'),

    resetForm() {
        this.form.reset();
    },

    createTodoItemTemplate(config) {
        const wrapper = document.createElement('div');
        wrapper.className = 'col-4';
        wrapper.setAttribute('data-todo-id', config.id)

        wrapper.innerHTML = `<div class="taskWrapper">
                                <div class="taskHeading">${config.title}</div>
                                <div class="taskDescription">${config.description}</div>
                                <hr>
                                <button class="btn btn-danger btn-sm" data-remove-btn>Remove item</button>
                            </div>`

        return wrapper;
    },
    appendTodoItem(element) {
        this.todoItemsContainer.append(element);
    },

    addTodoItemToList(data) {
        const template = this.createTodoItemTemplate(data);
        this.appendTodoItem(template);
    },

    removeTodoItem(id) {
        this.todoItemsContainer.querySelector(`[data-todo-id="${id}"]`).remove();
    }
}