import React from 'react'
import { GiPopcorn } from 'react-icons/gi'
import { HiCollection } from 'react-icons/hi'
import { IoFastFood } from 'react-icons/io5'
import { FaCartArrowDown, FaRegCalendarAlt} from 'react-icons/fa'
import { RiTaxiFill} from 'react-icons/ri'
import './ListComp.css'
import { BsCashCoin } from 'react-icons/bs'
function ListComp() {
  return (
        <div className="list-container">
            
            <div className="list-items">
                <caption>Today</caption>
                <div className="list-item">
                    <div className="list-logo">
                    <GiPopcorn className="list-category-icon entertaintment" />
                    </div>
                    <div className="list-desc">
                        <b className="list-item-name">Entertainment</b>
                        <span className="list-item-brief">Movie</span>
                    </div>
                    <div className="list-amount-details">
                        <b className="list-item-amount"> 563</b>
                        <span className="list-item-date">22/09/2022</span>
                    </div>
                </div>
                <div className="list-item">
                    <div className="list-logo">
                    <BsCashCoin className="list-category-icon rent" />
                    </div>
                    <div className="list-desc">
                        <b className="list-item-name">Rent</b>
                        <span className="list-item-brief">Room rent</span>
                    </div>
                    <div className="list-amount-details">
                        <b className="list-item-amount"> 563</b>
                        <span className="list-item-date">22/09/2022</span>
                    </div>
                </div>
                <caption>Yesterday</caption>
                <div className="list-item">
                    <div className="list-logo">
                    <IoFastFood className="list-category-icon food" />
                    </div>
                    <div className="list-desc">
                        <b className="list-item-name">Food</b>
                        <span className="list-item-brief">Lunch</span>
                    </div>
                    <div className="list-amount-details">
                        <b className="list-item-amount"> 563</b>
                        <span className="list-item-date">22/09/2022</span>
                    </div>
                </div>
                <div className="list-item">
                    <div className="list-logo">
                    <RiTaxiFill className="list-category-icon transport" />
                    </div>
                    <div className="list-desc">
                        <b className="list-item-name">Transport</b>
                        <span className="list-item-brief">Tirur-Kozhikode</span>
                    </div>
                    <div className="list-amount-details">
                        <b className="list-item-amount"> 563</b>
                        <span className="list-item-date">22/09/2022</span>
                    </div>
                </div>
                <div className="list-item">
                    <div className="list-logo">
                    <FaRegCalendarAlt className="list-category-icon emi" />
                    </div>
                    <div className="list-desc">
                        <b className="list-item-name">EMI</b>
                        <span className="list-item-brief">Bike</span>
                    </div>
                    <div className="list-amount-details">
                        <b className="list-item-amount"> 563</b>
                        <span className="list-item-date">22/09/2022</span>
                    </div>
                </div>
                <caption>18/09/2022</caption>
                <div className="list-item">
                    <div className="list-logo">
                    <HiCollection className="list-category-icon other" />
                    </div>
                    <div className="list-desc">
                        <b className="list-item-name">Other</b>
                        <span className="list-item-brief">something</span>
                    </div>
                    <div className="list-amount-details">
                        <b className="list-item-amount"> 563</b>
                        <span className="list-item-date">22/09/2022</span>
                    </div>
                </div>
                <div className="list-item">
                    <div className="list-logo">
                    <FaCartArrowDown className="list-category-icon shopping" />
                    </div>
                    <div className="list-desc">
                        <b className="list-item-name">Shopping</b>
                        <span className="list-item-brief">groceries</span>
                    </div>
                    <div className="list-amount-details">
                        <b className="list-item-amount"> 563</b>
                        <span className="list-item-date">22/09/2022</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ListComp