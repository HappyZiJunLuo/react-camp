import { observable } from 'mobx';

class MenuState {
    todoText;
    todoIndex;
    @observable isMenuShow;
    @observable menuTop;

    changMenuState(show, index) {
        if (show) {
            this.menuTop = `${index * 42 + 74}px`;
        }
        this.isMenuShow = show;
    }

    changeMenuContent(index, text) {
        this.todoText = text;
        this.todoIndex = index;
    }
}

const menuStore = new MenuState();
module.exports = menuStore;