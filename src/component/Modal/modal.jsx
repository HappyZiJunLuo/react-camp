import React from 'react';
import { observer } from 'mobx-react';
import StoreModal from '../../store/storeModalState.js';


const dialogStyle = {
    width: '400px',
    position: 'absolute',
    zIndex: 20,
    margin: '0',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
};
const maskStyle = {
    position:'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 15,
    opacity: 0.3,
    backgroundColor: '#000'
};

@observer
export default class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClickConfirm() {
        this.props.todos.deleteTodoFn(StoreModal.todoIndex);
        this.closeModal();
    }

    closeModal() {
        StoreModal.changModalState(false);
    }

    render() {
        return StoreModal.isModalShow ?
            <div>
                <div style={maskStyle}></div>
                <div className="modal-dialog" style={dialogStyle}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">确认操作</h4>
                        </div>
                        <div className="modal-body">
                            确定要删除 <span style={{color:'#337ab7'}}>{StoreModal.todoText}</span> 吗？
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary"
                                    onClick={this.handleClickConfirm.bind(this)}>确认
                            </button>
                            <button type="button" className="btn btn-default"
                                    onClick={this.closeModal.bind(this)}>取消
                            </button>
                        </div>
                    </div>
                </div>
            </div> : null;
    }
}
