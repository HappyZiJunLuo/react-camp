import React from 'react';
import {observer} from "mobx-react";
import { observable } from 'mobx';

@observer
export default class AddToList extends React.Component {
    @observable inputValue;
    constructor(props) {
        super(props);
        this.inputValue = '';
    }

    handleInputChange(event) {
        this.inputValue = event.target.value;
    }

    handleClickAddButton() {
        this.props.todos.addItem({value: this.refs.todoInput.value, checked: false});
        this.inputValue = '';
    }

    handleEnterKey(event) {
        if (event.which === 13 && this.inputValue.trim()) {
            this.handleClickAddButton();
        }
    }

    render() {
        const text = this.inputValue;
        return (
            <div style={{ display: 'flex'}}>
                <input type="text"
                       ref="todoInput"
                       value={text}
                       className="form-control"
                       placeholder="todo"
                       aria-describedby="basic-addon1"
                       onKeyUp={this.handleEnterKey.bind(this)}
                       onChange={this.handleInputChange.bind(this)}/>

                {
                    !text.trim()  ?
                        <button type="button"
                                className="btn btn-primary"
                                disabled="disabled">添加</button>
                        : <button type="button"
                                  className="btn btn-primary"
                                  onClick={this.handleClickAddButton.bind(this)}>添加</button>
                }
            </div>
        );
    }
}