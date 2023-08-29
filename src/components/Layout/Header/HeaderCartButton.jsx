/* eslint-disable react/prop-types */
import React from 'react';
import CartContext from '../../../context/CartContext';
import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

function HeaderCartButton({ onClick }) {
    //state change animation button header
    const [isBtnHightlighted, setIsBtnHightlighted] = React.useState(false);

    const cart = React.useContext(CartContext);

    const { items } = cart;

    const cartItemTotalNumber = items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0)

    const btnClasses = `${styles.button} ${isBtnHightlighted ? styles.bump : ''}`  //combine class css

    React.useEffect(() => {
        setIsBtnHightlighted(true);
        const timer = setTimeout(() => {
            setIsBtnHightlighted(false)
        }, 300);
        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
        <button className={btnClasses} onClick={onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{cartItemTotalNumber}</span>
        </button>
    )
}

export default HeaderCartButton