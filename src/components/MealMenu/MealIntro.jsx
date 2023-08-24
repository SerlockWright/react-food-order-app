import React from 'react';
import styles from './MealIntro.module.css';

function MealIntro() {
    return (
        <React.Fragment>
            <section className={styles.intro}>
                <h2>Delicious Food, Delivered To You</h2>
                <p>
                    Choose your favorite meal from our broad selection of available meals
                    and enjoy a delicious lunch or dinner at home.
                </p>
                <p>
                    All our meals are cooked with high-quality ingredients, just-in-time and
                    of course by experienced chefs!
                </p>
            </section>
        </React.Fragment>
    )
}

export default MealIntro