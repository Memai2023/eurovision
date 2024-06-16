import React from 'react';
import styles from './Home.module.css';

const Home = ({setCurrentPage, title}) => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <h1>{title}</h1>
        <p>Did you miss out the Eurovision song contest?</p>
        <p>Don't worry, my website will guide you through it!</p>
        <p>Click on the button to see all the participants!</p>
        <button onClick={() => setCurrentPage('participants')} className={styles.button}>Explore more</button>
      </div>
    </section>
  );
}

export default Home;
