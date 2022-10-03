import React from 'react'
import { BiRupee } from 'react-icons/bi'
import './ListComp.css'
import {timeSince} from '../../actions/timeSince'

function ListItem({IconComponent, className, category, desc,date, amount}) 
{
    const uploadTime=new Date(date)
    return (
        <>
            <div className="list-item">
                        <div className="list-logo">
                        <IconComponent className={className} />
                        </div>
                        <div className="list-desc">
                            <b className="list-item-name">{category}</b>
                            {desc && <span className="list-item-brief">{desc}</span>}
                        </div>
                        <div className="list-amount-details">

                            <div className="list-item-amount"><BiRupee/> <b>{amount}</b></div>
                            {date && <span className="list-item-date">
                                { timeSince(uploadTime) }
                            </span>}
                        </div>
            </div>
        </>
    )
}

export default ListItem