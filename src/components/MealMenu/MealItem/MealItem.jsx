/* eslint-disable react/prop-types */
import styles from './MealItem.module.css';
import MealItemAddCart from './MealItemAddCart';

function MealItem({ id, name, description, price }) {
    const prices = `$${price.toFixed(2)}`;
    return (
        <li className={styles.meal}>
            <div>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{prices}</div>
            </div>
            <div>
                <MealItemAddCart id={id} />
            </div>
        </li>
    )
}

export default MealItem