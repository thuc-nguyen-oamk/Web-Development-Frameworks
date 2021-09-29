import React from 'react';
import Button from './Button';
import styles from './SideBar.module.css';
import SideBarNews from './SideBarNews';

export default function SideBar(){
    return (
      <div className={ styles.sideBar }>
         <div className={ styles.title }>Luetuimmat</div>
         <div className={ styles.body }>
          <div className={ styles.container }>
            <SideBarNews 
              number="1"
              topic="Päihdepolitiikka"
              text="Euroopan suhde kannabikseen on ristiriitainen: Näin laillistamiseen suhtaudutaan muualla"
            />

            <SideBarNews 
              number="2"
              topic="Työelämä"
              text="Eetu Karppanen tienaa viikon työllä kuukauden tulot. Palkkatöistä irtautuneet kertovat, miten ovat rakentaneet työurastaan unelmiensa paketin."
              isPaid={true}
              category="TILAAJILLE"
            />

            <SideBarNews 
              number="3"
              topic="Työelämä"
              text="Slackin ja Teamsin kaltaisten pilvipalvelujen piti tehdä työstä helppoa. Nyt työpaikoilla on vakava ongelma, joka ei tunnu olevan kenenkään vastuulla."
              isPaid={true}
              category="TILAAJILLE"
            />
            
            <SideBarNews 
              number="4"
              topic="Kolumni"
              text="Yhteiskunta pyörii aamu­virkkujen ehdoilla, ja se vaarantaa monen terveyden"
            />

            <Button text="Näytä lisää" theme="secondary"></Button>
          </div>
         </div>
      </div>
    )
  }