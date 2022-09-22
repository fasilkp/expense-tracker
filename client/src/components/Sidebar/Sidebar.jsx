import React from 'react'
import './Sidebar.css'
import { HiCollection, HiHome,HiPlusCircle,HiUser } from "react-icons/hi";
import { AiFillPieChart, AiFillSetting} from "react-icons/ai";
function Sidebar() {
  return (
    <div className="Sidebar">
        <div className="side-container">
            <div className="side-header">
                <h2>Expense Tracker</h2>
            </div>
            <div className="side-list">
                <div className="side-list-header">Menu</div>
                <div className="side-list-item selected">
                    <HiHome className='side-list-icon'></HiHome>
                    <span>Home</span>
                </div>
                <div className="side-list-item">
                    <HiUser className='side-list-icon'></HiUser>
                    <span>User</span>
                </div>
                <div className="side-list-item">
                    <HiCollection className='side-list-icon'></HiCollection>
                    <span>Spent LIst</span>
                </div>
                <div className="side-list-item">
                    <HiPlusCircle className='side-list-icon'></HiPlusCircle>
                    <span>Add Expense</span>
                </div>
                <div className="side-list-item">
                    <AiFillPieChart className='side-list-icon'></AiFillPieChart>
                    <span>Analysis</span>
                </div>
                <div className="side-list-header">General</div>
                <div className="side-list-item">
                    <AiFillSetting className='side-list-icon'></AiFillSetting>
                    <span>Settings</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar