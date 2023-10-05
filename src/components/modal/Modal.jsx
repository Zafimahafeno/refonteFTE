import React from 'react'
import './modal.css'
function Modal({ children, open=true }) {
    return (open) ? (
        <div className='popup'>
            {children}
        </div>) : '';
}

export default Modal