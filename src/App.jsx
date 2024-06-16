import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Participants from './components/Participants';
import Board from './components/Board';
import Winner from './components/Winner';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const page = {
        home: {title: "Welcome to Memai's version of Eurovision song contest 2024"},
        participants: {title: "Choose a country"},
        board: {title: "The board results"},
        winner: {title: "Nemo wins Eurovision!"}
    }

    return (
        <div className="appContainer">
        <Navbar activePage={currentPage} setCurrentPage={setCurrentPage} />
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} title={page.home.title} />}
        {currentPage === 'participants' && (<Participants title={page.participants.title} />)}
        {currentPage === 'board' && (<Board title={page.board.title} />)}
        {currentPage === 'winner' && (<Winner title={page.winner.title} />)}
        <Footer />
        </div>
    );
}

export default App;