import { Component } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';

const modalRoot = document.querySelector('#modal-root');


export default class Modal extends Component {

    componentDidMount() {
        console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.handleKeyDown);
        }

    handleKeyDown = (evt) => {
        if (evt.code === 'Escape') {
            this.props.onCloseModal();
        }
    }

    handleBackdropClick = evt => {
        console.log(evt.target);
        if (evt.currentTarget === evt.target) {
            this.props.onCloseModal();
        }
    }
    
    componentWillUnmount() {
        console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return createPortal(
            <div className='modal_backdrop' onClick={this.handleBackdropClick}>
                <div className='modal_content'>{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }
}