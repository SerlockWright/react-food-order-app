/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom"
import styles from './Modal.module.css';

const BackDrop = ({ onClose }) => {
    return (
        <div className={styles.backdrop} onClick={onClose}></div>
    )
}

const ModalOverlays = ({ children }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

function Modal({ children, onClose }) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onClose={onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlays>
                {children}
            </ModalOverlays>, portalElement)}
        </React.Fragment>
    )
}

export default Modal