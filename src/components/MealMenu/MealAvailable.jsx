import React from 'react';
import { MEALS } from '../../data/meal';
import styles from './MealAvailable.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const mealList = MEALS.map((item) =>
    <MealItem
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
    />)
function MealAvailable() {
    return (
        <React.Fragment>
            <section className={styles.meal}>
                <Card>
                    <ul>{mealList}</ul>
                </Card>
            </section>
        </React.Fragment>
    )
}

export default MealAvailable