/* eslint-disable react/prop-types */
import React from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartContext from '../../context/CartContext';
import CartItem from './CartItem';

function Cart({ onClose }) {
    const cartContext = React.useContext(CartContext);
    const totalAmountCart = `$${cartContext.totalAmount.toFixed(2)}`;

    const isItemExist = cartContext.items.length > 0;

    const handleAddItem = (item) => {
        cartContext.addItem({
            ...item,
            amount: 1
        })
    }

    const handleRemoveItem = (id) => {
        cartContext.removeItem(id)
    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartContext.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={handleRemoveItem.bind(null, item.id)}
                    onAdd={handleAddItem.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmountCart}</span>
            </div>
            <div className={styles.action}>
                <button className={styles['button--alt']} onClick={onClose}>Close</button>
                {isItemExist && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart