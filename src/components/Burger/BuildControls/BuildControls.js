import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
             key={ctrl.label}
             label={ctrl.label}
            //  for adding the ingredient value and price 
             added={() => props.ingredientAdded(ctrl.type)}
             removed={() => props.ingredientRemove(ctrl.type)}
             disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
        className={styles.OrderButton} 
        disabled={!props.purchasable}
        onClick={props.ordered} >OrderNow</button>
    </div>
);

export default buildControls;