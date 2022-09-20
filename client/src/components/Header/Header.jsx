import React from 'react'
import { BiBell } from 'react-icons/bi'
import './Header.css'
function Header() {
  return (
    <div className='Header'>
        <div className="header-item">Home</div>
        <div className="header-item"><BiBell/></div>
    </div>
  )
}

export default Header