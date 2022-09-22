import React from 'react'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'

function HomePage() {
  return (
    <>
        <Header selected='home' heading={"Home"}></Header>
        <Navbar selected='home'></Navbar>
        <Home/>
    </>
  )
}

export default HomePage