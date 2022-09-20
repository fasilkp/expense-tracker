import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Home/>
    </div>
  );
}

export default App;
