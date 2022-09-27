import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { HiUser } from 'react-icons/hi'
import { IoFastFoodSharp } from 'react-icons/io5'
import ListComp from '../ListCompnent/ListCom'
import './SpendList.css'
function SpendList() {
  // const data=[
  //   {name: "fasil", date:2},
  //   {name: "fasil", date:2},
  //   {name: "shijas", date:3},
  //   {name: "shijas", date:3},
  //   {name: "shail", date:4}
  // ]
  
  // const [list, setList]=useState([])
  // useEffect(()=>{
  //   let date=0;
  //   let newData=[]
  //   data.forEach(item=>{
  //     if(item.date!=date){
  //       newData.push({newDate:true, ...item})
  //       date=item.date;
  //     }
  //     else{
  //       newData.push(item)
  //     }
  //   })
  //   setList(newData)
  // },[])
  // console.log(list)
  // const [state, setState]=useState(0)
  
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
            {/* {
              list.map(i=>{
                return <div>
                          { i.newDate &&  <caption>{i.date}</caption>}
                          <li>{i.name}</li>
                      </div> 
              })
            } */}
        </div>
    </div>
  )
}

export default SpendList