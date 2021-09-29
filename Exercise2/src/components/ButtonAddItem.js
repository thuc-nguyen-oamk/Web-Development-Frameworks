import React from 'react';
import styles from './ButtonAddItem.module.css';

export default function ButtonAddItem(props) {
    const getRandomInteger = () => { // 1 to 10
        return parseInt(1 + Math.random() * 10);
    }

    const addStuffs = () => {
        const matchedIndex = props.items.findIndex(item => item.value === props.itemName);

        if (matchedIndex !== -1) {
            // increase quantity
            let items = [...props.items];
            items[matchedIndex].qty += getRandomInteger();
            props.setStateCallback(items);
        } else {
            // add new
            const newItem = { id: props.items.length + 1, value: props.itemName, qty: getRandomInteger(), unit: 'x' };
            props.setStateCallback([...props.items, newItem]);
        }
    }
    return (
        <div>
            <button onClick={addStuffs} className={styles.button}>Add {props.itemName}</button>
        </div>
    )
}
