import React from 'react'
import { BiHome, BiBookAdd, BiUser, BiCollection} from "react-icons/bi";
import { HiCollection, HiHome,HiUser } from "react-icons/hi";
import { AiOutlinePieChart, AiFillPieChart} from "react-icons/ai";
import './Navbar.css'
import { useState } from 'react';
function Navbar() {
    const click={
        home:false,
        list:false,
        chart:false,
        user:false
    }
    const [clicked, setClicked]=useState(click)
  return (
    <div className='Navbar'>
        <div className="nav-item nav-home" 
        onClick={()=>setClicked({...click, home:true})}>
            {
                clicked.home ?
                <HiHome className='navClicked'/> :
                <BiHome/>
            }
        </div>
        <div className="nav-item nav-expense"
        onClick={()=>setClicked({...click, list:true})}>
            {
                clicked.list?
                <HiCollection className='navClicked'/> :
                <BiCollection />
            }
        </div>
        <div className="nav-item nav-add-expense">
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
  )
}

export default Navbar