import React from 'react'
import { GiPopcorn } from 'react-icons/gi'
import { HiCollection } from 'react-icons/hi'
import { IoFastFood } from 'react-icons/io5'
import { FaCartArrowDown, FaRegCalendarAlt} from 'react-icons/fa'
import { RiTaxiFill} from 'react-icons/ri'
import './ListComp.css'
import { BsCashCoin } from 'react-icons/bs'
import ListItem from './ListItem'
function ListComp({list}) {
    var Components={
        entertainment: {
            icon:GiPopcorn,
            className:"list-category-icon entertainment"
        },
        rent: {
            icon:BsCashCoin,
            className:"list-category-icon rent"
        },
        food: {
            icon:IoFastFood,
            className:"list-category-icon food"
        },
        transport: {
            icon:RiTaxiFill,
            className:"list-category-icon transport"
        },
        emi: {
            icon:FaRegCalendarAlt,
            className:"list-category-icon emi"
        },
        shopping: {
            icon:FaCartArrowDown,
            className:"list-category-icon shopping"
        },
        other: {
            icon:HiCollection,
            className:"list-category-icon other"
        },
    }
    
  return (
        <div className="list-container">
            
            <div className="list-items">
                {
                    list.map((item, index)=>{
                        return <>
                        {item.newDate && <caption>
                            {item.date}
                        </caption>}
                        <ListItem 
                        key={index}
                        IconComponent={Components[item.category].icon}
                        className={Components[item.category].className}
                        amount={item.amount}
                        desc={item.description}
                        date={item.createdAt}
                        category={item.category}
                        />
                        </> 
                    })
                    
                }

                {/* <ListItem 
                IconComponent={Components['food'].icon}
                className={Components['food'].className}
                amount={534}
                desc={"Movie"}
                date={"22/09/2022"}
                category={"Food"}
                />
                <caption>Yesterday</caption>
                <ListItem 
                IconComponent={Components['rent'].icon}
                className={Components['rent'].className}
                amount={534}
                desc={"Movie"}
                date={"22/09/2022"}
                category={"Rent"}
                />
                <ListItem 
                IconComponent={Components['transport'].icon}
                className={Components['transport'].className}
                amount={534}
                desc={"Movie"}
                date={"22/09/2022"}
                category={"Transport"}
                />
                <ListItem 
                IconComponent={Components['emi'].icon}
                className={Components['emi'].className}
                amount={534}
                desc={"Movie"}
                date={"22/09/2022"}
                category={"EMI"}
                />
                <caption>18/09/2022</caption>
                <ListItem 
                IconComponent={Components['shopping'].icon}
                className={Components['shopping'].className}
                amount={534}
                desc={"Movie"}
                date={"22/09/2022"}
                category={"Shopping"}
                />
                <ListItem 
                IconComponent={Components['other'].icon}
                className={Components['other'].className}
                amount={534}
                desc={"Movie"}
                date={"22/09/2022"}
                category={"Other"}
                /> */}
            </div>
        </div>
  )
}

export default ListComp