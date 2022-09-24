import React from 'react'
import { BiHome, BiBookAdd, BiUser, BiCollection} from "react-icons/bi";
import { HiCollection, HiHome,HiUser } from "react-icons/hi";
import { AiOutlinePieChart, AiFillPieChart} from "react-icons/ai";
import './Navbar.css'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import AddExpense from '../AddExpense/AddExpense';
function Navbar({selected}) {
    const navigate=useNavigate()
    const [showAddExpense, setShowAddExpense]=useState(false)
    const click={
        home:false,
        list:false,
        chart:false,
        user:false
    }
    const [clicked, setClicked]=useState({...click, [selected]:true})
  return (
    <>
         <div className='Navbar'>
        <div className="nav-item nav-home" 
        onClick={()=>{
            setClicked({...click, home:true})
            navigate('/')
            }}>
            {
                clicked.home ?
                <HiHome className='navClicked'/> :
                <BiHome/>
            }
        </div>
        <div className="nav-item nav-expense"
        onClick={()=>{
            setClicked({...click, list:true})
            navigate('/list')
            }}>
            {
                clicked.list?
                <HiCollection className='navClicked'/> :
                <BiCollection />
            }
        </div>
        <div className="nav-item nav-add-expense"
        onClick={()=>setShowAddExpense(true)} >
            <BiBookAdd></BiBookAdd>
        </div>
        <div className="nav-item nav-graph"
        onClick={()=>setClicked({...click, chart:true})}>
            {
                clicked.chart ?
                <AiFillPieChart className='navClicked'/> :
                <AiOutlinePieChart/>
            }
        </div>
        <div className="nav-item nav-profile"
        onClick={()=>setClicked({...click, user:true})}>
            {
                clicked.user ?
                <HiUser className='navClicked'/> :
                <BiUser/>
            }
        </div>
    </div>
    {showAddExpense && <AddExpense setShowAddExpense={setShowAddExpense}/>}
    </>
   
  )
}

export default Navbar