import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Sidebar/>
      <Home/>
    </div>
  );
}

export default App;
