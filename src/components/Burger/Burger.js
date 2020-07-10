import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // converting obj to array  Object.keys
    // transformedIngre.. is all about finding length ofthe string 
    // means we have to check for instance how many cheese have to add suppose key="cheese" value=2 
    // it is way to tranform object of key, value into an array of burger ingredients
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please add Incredients!</p>;
    }
    return(
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;