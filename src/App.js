import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../src/components/Header'
import Footer from '../src/components/Footer';
import PollPage from './pages/PollPage';
import PollPageDays from './pages/PollPageDays';
import PollPageTimes from './pages/PollPageTimes';
import PollCreate from './pages/PollCreate';
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
                <Route path = "polldays" Component={PollPageDays} />
                <Route path = "polltimes" Component={PollPageTimes} />
                <Route path = "pollcreate" Component={PollCreate} />
            </Routes>
            <Footer />
        </div>
        </BrowserRouter>
    );
}

export default App;
