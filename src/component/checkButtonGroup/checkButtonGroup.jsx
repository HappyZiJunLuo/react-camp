import React from 'react';

const operateStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '15px'
};

export default class CheckButtonGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    select(event) {
        this.props.todos.operateWholeList(event.target.value);
    }

    render() {
        return (
            <div style={operateStyle}  onClick={this.select.bind(this)}>
                <button type="button" className="btn btn-primary" value='true'>全选</button>
                <button type="button" className="btn btn-primary" value='false'>全不选</button>
                <button type="button" className="btn btn-primary" value='opposite'>反选</button>
            </div>
        );
    }
}