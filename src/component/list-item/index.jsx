import React from 'react';
import { observer } from "mobx-react";
import StoreMenu from '../../store/storeMenu.js';

const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
};

@observer
export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCheckedChange() {
        this.props.fn(this.props.keyValue);
    }

    handleClickOperate(e) {
        e.stopPropagation();
        StoreMenu.changMenuState(true, this.props.keyValue);
        StoreMenu.changeMenuContent(this.props.keyValue, this.props.todo.value);
    }

    render() {
        return (
            <div>
                <li className="list-group-item" style={listItemStyle}>
                    <div style={{display: 'flex'}}>
                        <input type="checkbox"
                               checked={this.props.todo.checked}
                               onChange={this.handleCheckedChange.bind(this)}/>
                        <span style={{marginLeft: '15px'}}>{this.props.todo.value}</span>
                    </div>
                    {
                        this.props.todo.checked &&
                            <span style={{color: '#337ab7'}}
                                  className="glyphicon glyphicon-heart"
                                  aria-hidden="true"
                                  name={this.props.keyValue}
                                  onClick={this.handleClickOperate.bind(this)} />
                    }
                </li>
            </div>
        );
    }
}