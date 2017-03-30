import { observable } from 'mobx';

class TodoList {
    @observable todoList = [];

    addItem(todo) {
        this.todoList.push(todo);
    }

    operateWholeList(mark) {
        if (mark === 'opposite') {
            this.todoList.forEach((item) => {
                item.checked = !item.checked;
            });
        } else {
            this.todoList.forEach((item) => {
                item.checked = mark === 'true';
            });
        }
    }

    checkboxChangeFn(index) {
        this.todoList[index].checked = !this.todoList[index].checked;
    }

    deleteTodoFn(index) {
        this.todoList.splice(index, 1);
    }

    againTodoFn(todo) {
        this.todoList.push(todo);
    }
}

const store = new TodoList();
module.exports = store;
