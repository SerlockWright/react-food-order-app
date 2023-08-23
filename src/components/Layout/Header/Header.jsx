import React from 'react';
import ImageHeader from '../../../assets/meals.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header() {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>FoodFlick</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={ImageHeader} alt="Image Header" />
            </div>
        </React.Fragment>
    )
}

export default Header   
