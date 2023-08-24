/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom"
import styles from './Modal.module.css';

const BackDrop = () => {
    return (
        <div className={styles.backdrop}></div>
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

function Modal({ children }) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlays>
                {children}
            </ModalOverlays>, portalElement)}
        </React.Fragment>
    )
}

export default Modal