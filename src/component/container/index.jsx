import React from 'react';
import List from '../list/index.jsx';
import AddToList from '../addToList/addToList.jsx';
import CheckButtonGroup from '../checkButtonGroup/checkButtonGroup.jsx';
import Modal from '../Modal/modal.jsx';
import Menu from '../menu/menu.jsx';
import StoreTodoList from '../../store/storeTodoList.js';


const containerStyle = {
    width: '500px',
    border: '2px solid #ddd',
    padding: '20px',
    borderRadius: '6px',
    boxShadow: '3px 3px 5px #888888',
    position: 'relative'
};

export class Container extends React.Component {
    constructor(props) {
        super(props);
        StoreTodoList.addItem({
            value: 'KTV GoGo!',
            checked: false
        });
    }

    render() {
        return (
            <div className="contain" style={containerStyle}>
                <List todos={StoreTodoList} />
                <AddToList todos={StoreTodoList} />
                <CheckButtonGroup todos={StoreTodoList} />
                <Modal todos={StoreTodoList} />
                <Menu todos={StoreTodoList} />
            </div>
        );
    }
}