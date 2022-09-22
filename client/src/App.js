import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListPage from './pages/ListPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/list" element={<ListPage />}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
