import React from 'react';
import MenuItem from './MenuItem';
import styles from './NavBar.module.css';

export default function NavBar(){
    return (
      <div className={ styles.container }>
        <div className={ styles.navBar }>
          <MenuItem text="Etusivu" active={true}/>
          <MenuItem text="HS Visio" />
          <MenuItem text="Luetuimmat" />
          <MenuItem text="Uusimmat" />
          <MenuItem text="Politiikka" />
          <MenuItem text="Kaupunki" />
          <MenuItem text="Kulttuuri" />
          <MenuItem text="Tiede" />
          <MenuItem text="Hyvinvointi" />
          <MenuItem text="Ruoka" />
          <MenuItem text="Nyt" />
        </div>
      </div>
    )
  }