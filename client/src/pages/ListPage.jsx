import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import SpendList from '../components/SpendList/SpendList'

function ListPage() {
  return (
    <>
        <Header selected='list' heading={"Spend List"}></Header>
        <Navbar selected='list'></Navbar>
        <SpendList></SpendList>
    </>
  )
}

export default ListPage