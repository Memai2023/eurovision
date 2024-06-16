import React, { useState } from 'react';
import Youtube from '../../assets/youtube.png';
import styles from './ParticipantDetails.module.css';

export const ParticipantDetails = ({
  selectedParticipantData,
  goBack,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <section className={styles.participantDetailsContainer} style={{backgroundImage: `url(${new URL(`../../assets/${selectedParticipantData.flag}`, import.meta.url).href})`}}>
      <div className={styles.partContainer}>
        <div className={styles.textBox}>
          <h2>{selectedParticipantData.country}</h2>
          <span className={styles.singer}>{selectedParticipantData.singer}</span>
        </div>
        <img 
          className={`${styles.image} ${isLoaded ? styles.loaded : ''}`}
          src={new URL(`../../assets/${selectedParticipantData.image}`, import.meta.url).href}
          alt={selectedParticipantData.country}
          onLoad={() => setIsLoaded(true)} />
        <div className={styles.textBox}>
          <span className={styles.song}>Song Name:</span>
          <p>{selectedParticipantData.song}</p>
          <h3>What is the song about?</h3>
          <p>{selectedParticipantData.about}</p>
          <a href={selectedParticipantData.link} target="_blank">{<img src={Youtube} alt="a Youtube Link" className={styles.youtube}/> }</a>
        </div>
        <button className={styles.button} onClick={goBack}>Go back</button>
      </div>
    </section>
  );
}
