import React from 'react'
import { BiHome, BiBookAdd,BiBarChartAlt2,BiUser, BiListUl } from "react-icons/bi";
import './Navbar.css'
function Navbar() {
  return (
    <div className='Navbar'>
        <div className="nav-home">
            <BiHome/>
        </div>
        <div className="nav-expense">
            <BiListUl/>
        </div>
        <div className="nav-add-expense">
            <BiBookAdd></BiBookAdd>
        </div>
        <div className="nav-graph">
            <BiBarChartAlt2/>
        </div>
        <div className="nav-profile">
            <BiUser/>
        </div>
    </div>
  )
}

export default Navbar