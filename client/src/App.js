import React, {useEffect, useContext} from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios'
import AuthContext from './context/AuthContext';
import CategoryPage from './pages/CategoryPage';
import AnalysisPage from './pages/AnalysisPage';
axios.defaults.withCredentials = true;

// axios.defaults.baseURL = "http://localhost:8080/api"
axios.defaults.baseURL = "https://expensetrackerserver.herokuapp.com/api"

function App() {
  const {loggedIn, updateLogin}=useContext(AuthContext); 
  useEffect(()=>{
    updateLogin();
  },[])
  return (
    <Router>
      <div className="App">
        {
          loggedIn &&
                <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route path="/list" element={<ListPage />}/>
                  <Route path="/category" element={<CategoryPage />}/>
                  <Route path="/analysis" element={<AnalysisPage />}/>
                  <Route path="/login" element={<LoginPage />}/>
                  <Route path="/register" element={<RegisterPage/>}/>
                </Routes>
        }
        {
          loggedIn===false &&
                <Routes>
                  <Route path="*" element={<LoginPage />}/>
                  <Route path="/login" element={<LoginPage />}/>
                  <Route path="/register" element={<RegisterPage/>}/>
                </Routes>
        }
      </div>
    </Router>
  );
}

export default App;
