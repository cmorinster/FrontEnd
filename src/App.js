import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../src/components/Header'
import Footer from '../src/components/Footer';
import PollForm from './pages/PollForm';
import LandingPage from '../src/pages/LandingPage'
import './App.css';

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Header />
            <Routes>
                <Route path = "/" Component={LandingPage} />
                <Route path = "poll" Component={PollForm} />
            </Routes>
            <Footer />
        </div>
        </BrowserRouter>
    );
}

export default App;
