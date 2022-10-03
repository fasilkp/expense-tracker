import React, { useState } from 'react'
import { useEffect } from 'react'
import ListComp from '../ListCompnent/ListCom'
import axios from 'axios'
import './Category.css'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { toMonthWords } from '../../actions/toMonthWords'
function Category() {
    const defaultSet={desc:false, createdAt:false}
    const {user}=useContext(AuthContext)
    const [monthDetails,setMonthDetails]=useState({})
    const categories=[
        "entertainment", "transport", "emi", "rent","other",
        "fees", "food", "shopping", "hospital", "school", 
    ]
    useEffect(()=>{
        async function fetchData(){
            const {data}=await axios.post('/list/get-month-details',{
                uid:user._id, month:toMonthWords(new Date().getMonth())+new Date().getFullYear()
            })
            if(!data.err) setMonthDetails(data.monthDetails);
        }fetchData();
    },[])
    console.log(monthDetails)
    const list=[
        {amount:monthDetails.entertainment, category:"entertainment", ...defaultSet},
        {amount:monthDetails.transport, category:"transport", ...defaultSet},
        {amount:monthDetails.emi, category:"emi", ...defaultSet},
        {amount:monthDetails.rent, category:"rent", ...defaultSet},
        {amount:monthDetails.fees, category:"fees", ...defaultSet},
        {amount:monthDetails.food, category:"food", ...defaultSet},
        {amount:monthDetails.shopping, category:"shopping", ...defaultSet},
        {amount:monthDetails.hospital, category:"hospital", ...defaultSet},
        {amount:monthDetails.school, category:"school", ...defaultSet},
        {amount:monthDetails.other, category:"other", ...defaultSet},
    ]
  return (
    <div className='Category'>
        <div className="category-container">
        <section className="category-banner-sec">
            <div className="category-banner"> 

            </div>
        </section>
        <section className="category-list">
            <ListComp list={list}></ListComp>
        </section>

        </div>
    </div>
  )
}

export default Category