const Model = {
    key: 'data',

    get todos() {
        const data = JSON.parse( localStorage.getItem(this.key));
        return data ? data : [];
    },

    set todos(todoItemsArray) {
        localStorage.setItem(this.key, JSON.stringify(todoItemsArray));
    },
    saveTodoItem(data) {
        const savedData = structuredClone(this.todos);
        const dataToSaved = structuredClone(data);
        dataToSaved.id = savedData.length ? savedData.at(-1).id + 1 : 1;

        savedData.push(dataToSaved);
       this.todos = savedData;
        return this.todos.at(-1);
    },

    deleteTodoItem(id) {
        if(!id) throw new Error('Id is invalid!');
        this.todos = this.todos.filter((item) => Number(item.id) !== Number(id));
    }

}

