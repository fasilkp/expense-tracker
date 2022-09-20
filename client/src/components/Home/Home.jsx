import React from 'react'
import { BiRupee } from 'react-icons/bi'
import { IoFastFoodSharp } from 'react-icons/io5'
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
                    <h4>09/2022</h4>
                </div>
            </div>
            <div className="home-recent">
                <caption className='recent-head'>Recent</caption>
                <div className="home-recent-item">
                    <div className="recent-list-profile">
                        <IoFastFoodSharp />
                    </div>
                    <div className="recent-list-desc">
                        <b>Food</b>
                        <label>Lunch</label>
                    </div>
                    <div className="recent-list-amount">
                        <b><BiRupee/>72</b>
                        <label>20/05/2022</label>
                    </div>
                </div>
                <div className="home-recent-item">
                    <div className="recent-list-profile">
                        <IoFastFoodSharp />
                    </div>
                    <div className="recent-list-desc">
                        <b>Food</b>
                        <label>Lunch</label>
                    </div>
                    <div className="recent-list-amount">
                        <b><BiRupee/>72</b>
                        <label>20/05/2022</label>
                    </div>
                </div>
                <div className="home-recent-item">
                    <div className="recent-list-profile">
                        <IoFastFoodSharp />
                    </div>
                    <div className="recent-list-desc">
                        <b>Food</b>
                        <label>Lunch</label>
                    </div>
                    <div className="recent-list-amount">
                        <b><BiRupee/>72</b>
                        <label>20/05/2022</label>
                    </div>
                </div>
                <div className="home-recent-item">
                    <div className="recent-list-profile">
                        <IoFastFoodSharp />
                    </div>
                    <div className="recent-list-desc">
                        <b>Food</b>
                        <label>Lunch</label>
                    </div>
                    <div className="recent-list-amount">
                        <b><BiRupee/>72</b>
                        <label>20/05/2022</label>
                    </div>
                </div>
                <div className="home-recent-item">
                    <div className="recent-list-profile">
                        <IoFastFoodSharp />
                    </div>
                    <div className="recent-list-desc">
                        <b>Food</b>
                        <label>Lunch</label>
                    </div>
                    <div className="recent-list-amount">
                        <b><BiRupee/>72</b>
                        <label>20/05/2022</label>
                    </div>
                </div>
                <div className="home-recent-item">
                    <div className="recent-list-profile">
                        <IoFastFoodSharp />
                    </div>
                    <div className="recent-list-desc">
                        <b>Food</b>
                        <label>Lunch</label>
                    </div>
                    <div className="recent-list-amount">
                        <b><BiRupee/>72</b>
                        <label>20/05/2022</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home