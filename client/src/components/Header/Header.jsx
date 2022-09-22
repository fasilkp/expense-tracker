import React from 'react'
import { useState } from 'react'
import { BiBell } from 'react-icons/bi'
import './Header.css'
function Header() {
  return (
    <div className='Header'>
      <div className="header-container">
        <div className="header-item">Home</div>
        <div className="header-item"><BiBell/></div>
      </div>
    </div>
  )
}

export default Header