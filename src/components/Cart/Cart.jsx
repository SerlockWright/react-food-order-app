import Modal from '../UI/Modal';
import styles from './Cart.module.css';

function Cart() {
    const cartItem = (
        <ul className={styles['cart-item']}>
            {[{ id: 'c1', name: 'sushi', price: 12.99 }].map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
    return (
        <Modal>
            {cartItem}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={styles.action}>
                <button className={styles['button--alt']}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart