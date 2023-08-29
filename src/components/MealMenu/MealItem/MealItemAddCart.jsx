/* eslint-disable react/prop-types */
import React from 'react';
import Input from '../../UI/Input';
import styles from './MealItemAddCart.module.css';

function MealItemAddCart({ id, onAddToCart }) {
    const [isValidAmount, setIsValidAmount] = React.useState(true);
    const amountInputRef = React.useRef();

    const handleSubmitAddCart = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setIsValidAmount(false)
            return;
        }
        onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmitAddCart}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount_' + { id },
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>Add</button>
            {!isValidAmount && <p>Please enter a valid amount(1-5)</p>}
        </form>
    )
}

export default MealItemAddCart