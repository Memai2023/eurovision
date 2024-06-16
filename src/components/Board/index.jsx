import React from 'react';
import resultImage from '../../assets/result.jpg';
import styles from './Board.module.css';

const Board = () => {
    return (
        <section className={styles.boardContainer}>
            <div className={styles.boardContent}>
                <h1>The Board Results</h1>
                <div className={styles.boardImage}>
                    <img src={resultImage} alt="Board Result"/> 
                </div>
            </div>
        </section>
    );
}

export default Board