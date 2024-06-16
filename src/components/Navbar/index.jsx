import React, { useState } from 'react';
import logo from '../../assets/logocut.png';
import styles from './Navbar.module.css';

const Navbar = ({activePage,setCurrentPage}) => {
    const [isActive, setIsActive] = useState(false);
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    const removeActive = () => {
        setIsActive(false)
    }

    return (
        <div>
            <header>
                <nav className={`${styles.navbar}`}>
                    <img src={logo} alt="A logo of Eurovision Songcontest 2024" className={styles.logo} />
                    <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                        <li className={activePage === 'home' ? styles.active : ''} onClick={() => {setCurrentPage('home'); removeActive();}}>
                            Home
                        </li>
                        <li className={activePage === 'participants' ? styles.active : ''} onClick={() => {setCurrentPage('participants'); removeActive();}}>
                            Participants
                        </li>
                        <li className={activePage === 'board' ? styles.active : ''} onClick={() => {setCurrentPage('board'); removeActive();}}>
                            Board
                        </li>
                        <li className={activePage === 'winner' ? styles.active : ''} onClick={() => {setCurrentPage('winner'); removeActive();}}>
                            The Winner
                        </li>
                    </ul>
                    <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar