import React from 'react'
import { BiRupee } from 'react-icons/bi'
import './ListComp.css'
import {timeSince} from '../../actions/timeSince'

function ListItem({IconComponent, className, category, desc,date, amount, balance, month}) 
{
    const uploadTime=new Date(date)
    return (
        <>
            <div className="list-item" style={{borderBottom:"1px solid #8080802b"}}>
                        <div className="list-logo">
                        <IconComponent className={className} />
                        </div>
                        <div className="list-desc">
                            {
                                month ? 
                            <b className="list-item-name">{month}</b> :
                            <b className="list-item-name">{category}</b>
                            }
                            {desc && <span className="list-item-brief">{desc}</span>}
                        </div>
                        <div className="list-amount-details">
                            <div className="list-item-amount"><BiRupee/> <b>{amount}</b></div>
                            {date && <span className="list-item-date">
                                { timeSince(uploadTime) }
                            </span>}
                            {balance && <span className="list-item-date">
                                { balance }
                            </span>}
                        </div>
            </div>
        </>
    )
}

export default ListItem