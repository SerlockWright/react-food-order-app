import React from 'react';
import ImageHeader from '../../../assets/meals.jpg';
import styles from './Header.module.css';

function Header() {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>FoodFlick</h1>
                <button>cart</button>
            </header>
            <div className={styles['main-image']}>
                <img src={ImageHeader} alt="Image Header" />
            </div>
        </React.Fragment>
    )
}

export default Header   
