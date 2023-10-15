import React from 'react';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer';
import PollPage from './pages/PollPage';
import LandingPage from '../src/pages/LandingPage'
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <LandingPage />
            <PollPage />
            <Footer />
        </div>
    );
}

export default App;
