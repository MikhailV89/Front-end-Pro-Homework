const Controller = {
    form: document.querySelector('#todoForm'),
    todoItemsContainer: document.querySelector('[data-todo-items]'),

   formHandler(event) {
        event.preventDefault();
        const inputs = event.target.querySelectorAll('input, textarea');
        const data = {};

        for(const input of inputs) {
            if(!input.value.trim()) return alert('Lack of data!');
            data[input.name] = input.value
       }
       const savedItem = Model.saveTodoItem(data);
        View.addTodoItemToList(savedItem);
        View.resetForm();
   },

    loadedHandler() {
        Model.todos.forEach(item => View.addTodoItemToList(item));
    },

    handlerDeleteItem(e) {
        e.stopPropagation();
        if(!e.target.hasAttribute('data-remove-btn')) return;

        const todoItemId = e.target.closest('[data-todo-id]').getAttribute('data-todo-id')

        try {
            Model.deleteTodoItem(todoItemId);
            View.removeTodoItem(todoItemId);
        } catch (error) {
            alert(error.message)
        }

    },

    init() {
        this.form.addEventListener('submit', this.formHandler.bind(this));
        document.addEventListener('DOMContentLoaded', this.loadedHandler.bind(this))
        this.todoItemsContainer.addEventListener('click', this.handlerDeleteItem.bind(this))
    }
}