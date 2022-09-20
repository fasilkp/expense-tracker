import React from 'react'
import { BiHome, BiBookAdd,BiBarChartAlt2,BiUser, BiListUl } from "react-icons/bi";
import './Navbar.css'
function Navbar() {
  return (
    <div className='Navbar'>
        <div className="nav-item nav-home">
            <BiHome className='icon'/>
        </div>
        <div className="nav-item nav-expense">
            <BiListUl />
        </div>
        <div className="nav-item nav-add-expense">
            <BiBookAdd></BiBookAdd>
        </div>
        <div className="nav-item nav-graph">
            <BiBarChartAlt2/>
        </div>
        <div className="nav-item nav-profile">
            <BiUser/>
        </div>
    </div>
  )
}

export default Navbar