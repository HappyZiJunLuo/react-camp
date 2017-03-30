import React from 'react';
import { observer } from 'mobx-react';
import ListItem from '../list-item/index.jsx';

@observer
export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    changeFn(index) {
        this.props.todos.checkboxChangeFn(index);
    }

    render () {
        const changeFn = this.changeFn.bind(this);
        const todoList = this.props.todos.todoList.map((item, index) =>
            <ListItem key={index} keyValue={index} todo={item} fn={changeFn}/>
        );
        return (
            <div>
                <div className="list-group">
                    <li className="list-group-item active" style={{textAlign: 'center'}}>My TodoList</li>
                    {todoList}
                </div>
            </div>
        );
    }
}