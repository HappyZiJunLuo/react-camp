import React from 'react';
import StoreModal from '../../store/storeModalState.js';
import StoreMenu from '../../store/storeMenu.js';
import { observer } from "mobx-react";

const menuStyle = {
    width: '150px',
    position: 'absolute',
    zIndex: 10,
    margin: '0',
    right: '-116px'
};

@observer
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClickAgain() {
        StoreMenu.changMenuState(false);
        this.props.todos.againTodoFn({value: StoreMenu.todoText, checked: false});
    }

    handleClickDelete() {
        StoreMenu.changMenuState(false);
        StoreModal.changeModalText({
            text: StoreMenu.todoText,
            index: StoreMenu.todoIndex
        });
        StoreModal.changModalState(true);
    }

    closeMenu(event) {
        if (this.menuEle && !this.menuEle.contains(event.target)) {
            StoreMenu.changMenuState(false);
        }
    }

    componentDidMount() {
        document.body.addEventListener('click', this.closeMenu.bind(this));
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.closeMenu.bind(this));
    }

    render() {
        return StoreMenu.isMenuShow ?
                        <ul className="list-group"
                            ref={self => this.menuEle = self}
                            style={Object.assign({top: StoreMenu.menuTop}, menuStyle)}>
                            <li className="list-group-item"
                                style={{cursor: 'pointer'}}
                                onClick={this.handleClickAgain.bind(this)}>再来一次
                            </li>
                            <li className="list-group-item"
                                style={{cursor: 'pointer'}}
                                onClick={this.handleClickDelete.bind(this)}>删除
                            </li>
                        </ul> : null;
    }
}
