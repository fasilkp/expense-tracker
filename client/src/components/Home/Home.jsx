import React from 'react'
import { BiRupee } from 'react-icons/bi'
import ListComp from '../ListCompnent/ListCom'
import './Home.css'
function Home() {
  return (
    <div className='Home'>
        <div className="home-container">
            <div className="home-head">
                <label >Hello,</label>
                <strong>Fasil</strong>
            </div>
            <div className="home-banner">
                <label>Spent</label>
                <div className="home-amount">
                    <BiRupee/>
                    <h1>10765</h1>
                </div>
                <label>Month</label>
                <div className="home-month">
                    <h4>Sep - 2022</h4>
                </div>
            </div>
            <div className="home-recent">
                <ListComp/>
            </div>
        </div>
    </div>
  )
}

export default Home