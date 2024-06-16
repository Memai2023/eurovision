import React from 'react';
import nemoImage from '../../assets/winner.jpg';
import styles from './Winner.module.css';

const Winner = ({title}) => {
    return (
        <section className={styles.winnerContainer}>
            <div className={styles.winnerContent}>
                <div className={styles.winnertext}>
                    <h1>{title}</h1>
                    <p>Switzerland: Nemo is the winner of Eurovision song contest 2024!</p>
                </div>
                <div className={styles.winnerImage}>
                    <img src={nemoImage} alt="The winner of eurovision 2024"/> 
                </div>
            </div>
        </section>
    );
}

export default Winner