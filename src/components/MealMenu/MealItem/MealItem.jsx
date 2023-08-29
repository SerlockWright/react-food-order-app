/* eslint-disable react/prop-types */
import React from 'react';
import styles from './MealItem.module.css';
import MealItemAddCart from './MealItemAddCart';
import CartContext from '../../../context/CartContext';

function MealItem({ id, name, description, price }) {
    const prices = `$${price.toFixed(2)}`;
    const cartContext = React.useContext(CartContext)
    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: id,
            name: name,
            price: price,
            amount: amount
        });
    };
    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{prices}</div>
            </div>
            <div>
                <MealItemAddCart id={id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem