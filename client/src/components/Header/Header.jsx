import React, {useState} from 'react'
import { AiFillSetting, AiOutlineRadiusSetting, AiOutlineSetting } from 'react-icons/ai'
import { BiBell, BiUser } from 'react-icons/bi'
import { HiMenuAlt1 } from 'react-icons/hi'
import Sidebar from '../Sidebar/Sidebar'
import './Header.css'
function Header({selected, heading}) {
  const [sidebar, setSidebar]=useState(false)
  return (
    <>
    <div className='Header'>
      <div className="header-container">
        <div className="header-item" onClick={()=>setSidebar(!sidebar)}><HiMenuAlt1/> &nbsp; &nbsp; {heading}</div>
        <div className="header-item"></div>
      </div>
    </div>
    {
      sidebar ?  
      <Sidebar selectedOption={selected} setSidebar={setSidebar} 
      sidebar={sidebar} style={{left:"0px"}} style2={{visibility:"visible"}}/>
      :  
      <Sidebar selectedOption={selected} setSidebar={setSidebar} 
      sidebar={sidebar} style={{left:"-400px"}} style2={{visibility:"hidden"}}/>
    }
    </>
  )
}

export default Header