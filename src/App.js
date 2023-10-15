import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../src/components/Header'
import Footer from '../src/components/Footer';
import PollPage from './pages/PollPage';
import LandingPage from '../src/pages/LandingPage'
import './App.css';

function App() {
    return (
        <BrowserRouter>
        <div className="App">
        <Header />
            <Routes>
                <Route path = "/" Component={LandingPage} />
                <Route path = "poll" Component={PollPage} />
            </Routes>
        <Footer />
        </div>
        </BrowserRouter>
    );
}

export default App;
