import React from 'react'
import Category from '../components/Category/Category'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'

function CategoryPage() {
  return (
    <>
        <Header selected='category' heading={"Category"}></Header>
        <Navbar selected='category'/>
        <Category></Category>
    </>
  )
}

export default CategoryPage