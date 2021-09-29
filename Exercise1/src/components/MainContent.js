import React from 'react';
import BigNews from './BigNews';
import styles from './MainContent.module.css';
import SmallNews from './SmallNews';

export default function MainContent(){
    return (
      <div className={ styles.mainContent }>
        <BigNews 
          title="Huumeet" 
          image="big-news-01.webp" 
          topic="Päihdepolitiikka" 
          text="Euroopan suhde kannabikseen on ristiriitainen: Näin laillistamiseen suhtaudutaan muualla" 
          isPaid={true}
          category="Ulkomaat"
          time="13:57"
        />

        <SmallNews
          topic="Budjetti 2022"
          text="Hallituksen budjetti­esityksessä edistetään, kehitetään, kannustetaan ja panostetaan – Asiantuntijat kaipaavat nyt ilmastotoimiin konkretiaa"
          image="small-news-01.webp"
          category="Kotimaa"
          time="18:02"
          isBookmarkable="true"
        />

        <SmallNews
          topic="Ilmasto"
          text="Ministerit optimistisia päästö­vähennysten toteutumisesta – ”Ei ehkä ihan kaikille ole valjennut”, miten nopeasti liikenteen päästöt ovat vähentyneet, sanoo Harakka"
          image="small-news-02.webp"
          category="Politiikka"
          time="17:31"
          isBookmarkable="true"
        />  
      </div>
    )
  }