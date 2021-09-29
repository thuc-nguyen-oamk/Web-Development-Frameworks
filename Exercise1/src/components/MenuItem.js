import cx from 'classnames';
import React from 'react'
import styles from './MenuItem.module.css';


export default function MenuItem(props) {
    const { text, image, active } = props;
  
    return (
      <div className={ cx(styles.menuItem, active ? styles.active : null) }>
        <div>{ text ? text : null }</div>
        <div>{ image ? <img className={ styles.img } src={image} alt="item's icon"/> : null }</div>
      </div>
    );
      
  }