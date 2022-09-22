import React from 'react'
import './Sidebar.css'
import { HiCollection, HiHome,HiMenuAlt1,HiPlusCircle,HiUser } from "react-icons/hi";
import { AiFillPieChart, AiFillSetting} from "react-icons/ai";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Sidebar({setSidebar, sidebar, style, style2, selectedOption}) {
    const select={
        home:false,
        user:false,
        list:false,
        add:false,
        chart:false,
        settings:false
    }
    const navigate=useNavigate()
    const [selected, setSelected]=useState({...select, [selectedOption]:true})
  return (
    <div className="Sidebar" style={style2}>
        <div className="side-container" style={style}>
            <div className="side-header">
                <div  onClick={()=>setSidebar(!sidebar)}><HiMenuAlt1/></div>
                <h2>Expense Tracker</h2>
            </div>
            <div className="side-list">
                <div className="side-list-header">Menu</div>
                <div className={`side-list-item ${selected.home && " selected"}`}
                onClick={()=>{
                    setSelected({...select, home:true})
                    navigate('/')
                    }}>
                    <HiHome className='side-list-icon'></HiHome>
                    <span>Home</span>
                </div>
                <div className={`side-list-item ${selected.user && " selected"}`}
                onClick={()=>{
                    setSelected({...select, user:true})
                    navigate('/')
                    }}>
                    <HiUser className='side-list-icon'></HiUser>
                    <span>User</span>
                </div>
                <div className={`side-list-item ${selected.list && " selected"}`}
                onClick={()=>{
                    setSelected({...select, list:true})
                    navigate('/list')
                    }}>
                    <HiCollection className='side-list-icon'></HiCollection>
                    <span>Spent List</span>
                </div>
                <div className={`side-list-item ${selected.add && " selected"}`}
                onClick={()=>{
                    setSelected({...select, add:true})
                    navigate('/')
                    }}>
                    <HiPlusCircle className='side-list-icon'></HiPlusCircle>
                    <span>Add Expense</span>
                </div>
                <div className={`side-list-item ${selected.chart && " selected"}`}
                onClick={()=>{
                    setSelected({...select, chart:true})
                    navigate('/')
                    }}>
                    <AiFillPieChart className='side-list-icon'></AiFillPieChart>
                    <span>Analysis</span>
                </div>
                <div className="side-list-header">General</div>
                <div className={`side-list-item ${selected.settings && " selected"}`}
                onClick={()=>{
                    setSelected({...select, settings:true})
                    navigate('/')
                    }}>
                    <AiFillSetting className='side-list-icon'></AiFillSetting>
                    <span>Settings</span>
                </div>
            </div>
        </div>
        <div className="side-balance" onClick={()=>setSidebar(!sidebar)}>
        </div>
    </div>
  )
}

export default Sidebar