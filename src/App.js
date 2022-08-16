import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Header from './components/Header';

const App = () => {
    return (
        <div className='app-container'>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/my-account" element={<MyAccount />} />
            </Routes>
        </div>
    )
}

export default App