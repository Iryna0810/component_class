import { Component } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';

const modalRoot = document.querySelector('#modal-root');


export default class Modal extends Component {
    componentDidMount() {
        console.log('Modal componentDidMouny');
        window.addEventListener('keydown', evt => {
            console.log(evt.code);
            if (evt.code === "Escape") {
                console.log('натиснули esc, потрібно закрити модалку');
                
                this.props.onClose();
            }
        })

    }

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');

    }

    render() {
        return createPortal(
            <div className='modal_backdrop'>
                <div className='modal_content'>{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }
}