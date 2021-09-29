import cx from 'classnames';
import React from 'react';
import styles from './Notification.module.css';

export default function Notification(props){
    let { title, text, bgColor } = props;
    bgColor = bgColor.charAt(0).toUpperCase() + bgColor.slice(1);
    
    return (
      <div className={ bgColor ? cx(styles.notification, styles[`bgColor${bgColor}`]) : styles.notification }>
        <span className={ styles.title }>{title}</span>
        <span>{text}</span>
      </div>
    )
  }