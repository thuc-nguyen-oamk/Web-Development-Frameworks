import React from 'react';
import MenuItem from './MenuItem';
import styles from './Header.module.css';
import cx from 'classnames';
import Logo from './Logo';
import Button from './Button';

export default function Header() {
    return (
      <div className={ styles.bgColorPrimary }>
        <div className={ cx(styles.header, styles.bgColorPrimary, styles.textColorPrimary) }>
          <div className={ cx(styles.flex, styles.center) }>
            <Logo/>
            <MenuItem text="Uutiset"/>
            <MenuItem text="Lehdet"/>
          </div>
          
          <div className={ cx(styles.flex, styles.center) }>
            <Button text="Tilaa"/>
            <MenuItem text="Kirjaudu" image="login.jpg"/>
            <MenuItem text="Hae" image="search.jpg"/>
            <MenuItem text="Valikko" image="menu.jpg"/>
          </div>  
        </div>
      </div>
    );
  }