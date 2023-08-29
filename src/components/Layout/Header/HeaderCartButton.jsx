/* eslint-disable react/prop-types */
import React from 'react';
import CartContext from '../../../context/CartContext';
import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

function HeaderCartButton({ onClick }) {
    const cart = React.useContext(CartContext);

    const cartItemTotalNumber = cart.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0)

    return (
        <button className={styles.button} onClick={onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{cartItemTotalNumber}</span>
        </button>
    )
}

export default HeaderCartButton