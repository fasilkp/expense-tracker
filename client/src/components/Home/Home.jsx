import React from 'react'
import { useContext } from 'react'
import { BiRupee } from 'react-icons/bi'
import AuthContext from '../../context/AuthContext'
import ListComp from '../ListCompnent/ListCom'
import './Home.css'
function Home() {
    const {user}=useContext(AuthContext)
    console.log(user)
  return (
    <div className='Home'>
        <div className="home-container">
            <div className="home-head">
                <label >Hello,</label>
                <strong>{user?.name}</strong>
            </div>
            <div className="home-banner">
                <label>Spent</label>
                <div className="home-amount first">
                    <BiRupee/>
                    <h1>10765 / {user?.monthlyLimit}</h1>
                </div>
                <label>Balance</label>
                <div className="home-amount">
                    <BiRupee/>
                    <h3>{user?.monthlyLimit-10765}</h3>
                </div>
                <label>Month</label>
                <div className="home-month">
                    <h3> sep - 2022</h3>
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