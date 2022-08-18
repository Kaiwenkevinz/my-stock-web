import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import './App.css';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';

const App = () => {

    const [searchResult, setSearchResult] = useState('');

    return (
        <div className='app-container'>
            <Header handleSearchResult={
                value => {
                    console.log(value);
                    setSearchResult(value);
                }
            } />
            <Routes>
                <Route path="/" element={<Home stockInfo = {searchResult} />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </div>
    )
}

export default App