import React, {useState} from 'react'
import { BiHome, BiBookAdd,BiCollection} from "react-icons/bi";
import { HiCollection, HiHome} from "react-icons/hi";
import { AiOutlinePieChart, AiFillPieChart} from "react-icons/ai";
import './Navbar.css'
import {useNavigate} from 'react-router-dom'
import AddExpense from '../AddExpense/AddExpense';
import { TiChartLine, TiChartLineOutline } from 'react-icons/ti';
function Navbar({selected}) {
    const navigate=useNavigate()
    const [showAddExpense, setShowAddExpense]=useState(false)
    const click={
        home:false,
        list:false,
        chart:false,
        category:false
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
            setClicked({...click, category:true}) 
            navigate('/category')}
            }>
            {
                clicked.category?
                <AiFillPieChart className='navClicked'/> :
                <AiOutlinePieChart/>
            }
        </div>
        <div className="nav-item nav-add-expense"
        onClick={()=>setShowAddExpense(true)} >
            <BiBookAdd></BiBookAdd>
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
        <div className="nav-item nav-graph"
        onClick={()=>{
            setClicked({...click, chart:true})
            navigate('/analysis')
            }}>
            {
                clicked.chart ?
                <TiChartLine className='navClicked'/> :
                <TiChartLineOutline/>
            }
        </div>
    </div>
    {showAddExpense && <AddExpense setShowAddExpense={setShowAddExpense}/>}
    </>
   
  )
}

export default Navbar