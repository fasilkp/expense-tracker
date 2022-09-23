import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/list" element={<ListPage />}/>
          <Route path="/login" element={<LoginPage />}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
