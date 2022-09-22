import React from 'react'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'

function HomePage() {
  return (
    <>
        <Header selected='home'></Header>
        <Navbar selected='home'></Navbar>
        <Home/>
    </>
  )
}

export default HomePage