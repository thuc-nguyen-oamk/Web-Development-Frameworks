import cx from 'classnames';
import React from 'react';
import styles from './Button.module.css';

export default function Button(props) {
    const { text, theme } = props;
    
    return (
      <button className={ theme ? cx(styles.button, styles[theme]) : styles.button }>
        {text}
      </button>
    );
  }