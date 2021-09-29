import React from 'react';
import MainContent from './MainContent';
import SideBar from './SideBar';
import styles from './Container.module.css';


export default function Container(){
    return (
      <div className={ styles.container }>
        <MainContent />
        <SideBar />
      </div>
    )
  }