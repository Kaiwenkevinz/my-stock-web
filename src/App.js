import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import './App.css';

import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
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
                <Route path="/my-account" element={<MyAccount />} />
            </Routes>
        </div>
    )
}

export default App