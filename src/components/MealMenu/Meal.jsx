import React from 'react';
import MealIntro from './MealIntro';
import MealAvailable from './MealAvailable';

function Meal() {
    return (
        <React.Fragment>
            <MealIntro />
            <MealAvailable />
        </React.Fragment>
    )
}

export default Meal