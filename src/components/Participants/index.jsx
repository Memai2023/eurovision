import React, { useState } from 'react';
import { newCompetitors } from '../../data/data';
import { ParticipantDetails } from '../ParticipantDetails';
import ReactCountryFlag from 'react-country-flag';
import styles from './Participants.module.css';

const Participants = ({title}) => {
    const [selectedParticipant, setSelectedParticipant] = useState(null)
    if (selectedParticipant) {
        return (
            <ParticipantDetails
                selectedParticipantData={selectedParticipant}
                goBack={() => setSelectedParticipant(null)}
            />
        );
    }

    return (
        <section className={styles.participantContainer}>
            <div className={styles.participantContent}>
                <h1>{title}</h1>
                <div className={styles.cardsContainer}>
                    {newCompetitors.map((competitor) => ( 
                        <div key={competitor.id} className={styles.cards}
                            onClick={() => {
                                setSelectedParticipant(competitor);
                                window.scrollTo(0,0);
                            }}
                        >
                            <span className={styles.id}>{competitor.id}</span>
                            <ReactCountryFlag countryCode={competitor.code} svg style={{
                            width: '2.6em',
                            height: '2em',
                            }}
                            alt={competitor.code}
                            className={styles.code} />
                            <span className={styles.name}>{competitor.country}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Participants