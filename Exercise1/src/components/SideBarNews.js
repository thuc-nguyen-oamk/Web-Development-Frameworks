import React from 'react';
import styles from './SideBar.module.css';
import SmallNews from './SmallNews';

export default function SideBarNews(props) {
    return (
        <div>
            <div className={ styles.flex }>
              <div className={ styles.number }>{props.number}</div>
              <div className={ styles.news }>
                <SmallNews 
                  {...props}
                  theme="secondary"
                />
              </div>
            </div>
        </div>
    )
}
