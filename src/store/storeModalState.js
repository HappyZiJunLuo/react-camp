import { observable } from 'mobx';

class ModalState {
    todoIndex;
    @observable isModalShow;
    @observable todoText;

    changModalState(show) {
        this.isModalShow = show;
    }

    changeModalText(todo) {
        this.todoText = todo.text;
        this.todoIndex = todo.index;
    }
}

const modalStore = new ModalState();
module.exports = modalStore;