import React from 'react'
import { BiRupee } from 'react-icons/bi'
import './ListComp.css'

function ListItem({IconComponent, className, category, desc, date, amount}) 
{
    return (
        <>
            <div className="list-item">
                        <div className="list-logo">
                        <IconComponent className={className} />
                        </div>
                        <div className="list-desc">
                            <b className="list-item-name">{category}</b>
                            <span className="list-item-brief">{desc}</span>
                        </div>
                        <div className="list-amount-details">

                            <div className="list-item-amount"><BiRupee/> <b>{amount}</b></div>
                            <span className="list-item-date">{date}</span>
                        </div>
            </div>
        </>
    )
}

export default ListItem