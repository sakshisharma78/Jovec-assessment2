// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content-wrapper">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
