import React, {useState, useContext} from 'react'
import './Sidebar.css'
import { HiCollection, HiHome,HiMenuAlt1,HiPencil,HiPlusCircle, HiUser } from "react-icons/hi";
import { AiFillPieChart, AiFillSetting} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { IoLogOut } from 'react-icons/io5';
import { TiChartLine } from 'react-icons/ti';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import AddExpense from '../AddExpense/AddExpense';
import EditMonthlyLimit from '../EditMonthlyLimit/EditMonthlyLimit';
function Sidebar({setSidebar, sidebar, style, style2, selectedOption}) {
    const select={
        home:false,
        list:false,
        category:false,
        settings:false
    }
    const [load, setload]=useState(false)
    const [showAddExpense, setShowAddExpense]=useState(false)
    const [showEditLimit, setShowEditLimit]=useState(false)
    const [showEditDefaultLimit, setShowEditDefaultLimit]=useState(false)
    const navigate=useNavigate()
    const [selected, setSelected]=useState({...select, [selectedOption]:true})
    const {updateLogin}=useContext(AuthContext)
    const handleLogout=async ()=>{
        setload(true)
        if(window.confirm("Are You Sure ? Logout")){
            await axios.post('/auth/logout');
            updateLogin();
            navigate("/login")
        }
        setload(false)
      }
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
                <div className={`side-list-item ${selected.category && " selected"}`}
                onClick={()=>{
                    setSelected({...select, category:true})
                    navigate('/category')
                    }}>
                    <AiFillPieChart className='side-list-icon'></AiFillPieChart>
                    <span>Categories</span>
                </div>
                <div className={`side-list-item ${selected.list && " selected"}`}
                onClick={()=>{
                    setSelected({...select, list:true})
                    navigate('/list')
                    }}>
                    <HiCollection className='side-list-icon'></HiCollection>
                    <span>Spent List</span>
                </div>
                <div className={`side-list-item ${selected.chart && " selected"}`}
                onClick={()=>{
                    setSelected({...select, chart:true})
                    navigate('/analysis')
                    }}>
                    <TiChartLine className='side-list-icon'></TiChartLine>
                    <span>Analysis</span>
                </div>
                <div className="side-list-header">General</div>
                {/* <div className={`side-list-item ${selected.settings && " selected"}`}
                onClick={()=>{
                    setSelected({...select, settings:true})
                    navigate('/')
                    }}>
                    <AiFillSetting className='side-list-icon'></AiFillSetting>
                    <span>Settings</span>
                </div> */}
                <div className={`side-list-item ${selected.add && " selected"}`}
                onClick={()=>{
                    setShowEditLimit(true)
                    }}>
                    <HiPencil className='side-list-icon'></HiPencil>
                    <span>Edit Month Limit</span>
                </div>
                <div className={`side-list-item ${selected.add && " selected"}`}
                onClick={()=>{
                    setShowAddExpense(true)
                    }}>
                    <HiPlusCircle className='side-list-icon'></HiPlusCircle>
                    <span>Add Expense</span>
                </div>
                <div className={`side-list-item ${selected.add && " selected"}`}
                onClick={()=>{
                    setShowAddExpense(true)
                    }}>
                    <HiPencil className='side-list-icon'></HiPencil>
                    <span>Edit Default Month Limit</span>
                </div>
                <div className={`side-list-item logout`}
                onClick={handleLogout}>
                    <span>Logout</span>
                    <IoLogOut className='side-list-icon'></IoLogOut>
                </div>
            </div>
        </div>
        <div className="side-balance" onClick={()=>setSidebar(!sidebar)}>
        </div>
        {showAddExpense && <AddExpense setShowAddExpense={setShowAddExpense}/>}
        {showEditLimit && <EditMonthlyLimit handleClose={()=>{setShowEditLimit(false)}}/>}
    </div>
  )
}

export default Sidebar