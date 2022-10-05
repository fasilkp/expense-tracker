import React, { useState } from 'react'
import { useEffect } from 'react'
import ListComp from '../ListCompnent/ListCom'
import axios from 'axios'
import './Category.css'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { toMonthWords } from '../../actions/toMonthWords'
import ReactApexChart from 'react-apexcharts'
function Category() {
    const defaultSet={desc:false, createdAt:false}
    const {user}=useContext(AuthContext)
    const [monthDetails,setMonthDetails]=useState({})
    const [seriesList,setSeriesList]=useState([])
    const categories=[
        "entertainment", "transport", "emi", "rent",
        "fees", "food", "shopping", "hospital", "school","other"
    ]
    useEffect(()=>{
        async function fetchData(){
            const {data}=await axios.post('/list/get-month-details',{
                uid:user._id, month:toMonthWords(new Date().getMonth())+new Date().getFullYear()
            })
            if(!data.err) {
                setMonthDetails(data.monthDetails);
                let list=[]
                categories.forEach(item=>{
                    list.push(data.monthDetails[item])
                })
                setSeriesList(list)

            }
        }fetchData();
    },[])
    const state = {
          
        series: seriesList,
        options: {
          chart: {
            width: 600,
            type: 'donut',
            foreColor:"#fff"
          },
          dataLabels: {
            enabled: true,
           dropShadow:{
                enabled:false
           }
          },
          stroke: {
            colors: ['rgba(255, 30, 0, 0)']
          },
          labels: categories,
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 450
              },
              legend: {
                show: true,
                fontSize:"15px",
              }
            }
          }],
          legend: {
            position: 'right',
            offsetY: 0,
            fontWeight:550,
            fontSize:"15px",
            fillColors:["#fff"]
          }
        },
      
      
      };
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
            <div className="category-banner" > 
            <div className="category-banner-div">
            <ReactApexChart options={state.options} series={state.series} type="donut" width={450} />
            </div>
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

