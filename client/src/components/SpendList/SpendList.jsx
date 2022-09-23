import React from 'react'
import { HiUser } from 'react-icons/hi'
import { IoFastFoodSharp } from 'react-icons/io5'
import ListComp from '../ListCompnent/ListCom'
import './SpendList.css'
function SpendList() {
  return (
    <div className="SpendList">
        <div className="spend-list-container">
        <div className="list-header">
                <b>Month</b>
                <select name="" id="" className='list-month-input'>
                    <option value="july/2020">July/2022</option>
                    <option value="july/2020">Aug/2022</option>
                    <option value="july/2020">Sep/2022</option>
                    <option value="july/2020">Oct/2022</option>
                </select>
            </div>
            <ListComp/>
        </div>
    </div>
  )
}

export default SpendList