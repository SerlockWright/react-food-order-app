/* eslint-disable react/prop-types */
import styles from './Card.module.css';

function Card({ children }) {
    return (
        <div className={styles.card}>{children}</div>
    )
}

export default Card