import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios'
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://crowdlybackend.herokuapp.com/api';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/list" element={<ListPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
