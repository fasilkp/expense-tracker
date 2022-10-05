import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { toMonthWords } from "../../actions/toMonthWords";
import AuthContext from "../../context/AuthContext";
import ListComp from "../ListCompnent/ListCom";
import "./Analysis.css";
function Analysis() {
  const {user}=useContext(AuthContext)
  const [monthDetails, setMonthDetails]=useState([])
  const state = {
    series: [
      {
        name: "Spent",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 45, 56, 89],
      },
      {
        name: "Limit",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 65, 34, 98],
      },
      {
        name: "Balance",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 91, 56, 72],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        foreColor:"#fff"
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        title: {
          text: "Ruppees",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  };
  useEffect(()=>{
    async function fetchData(){
        const {data}=await axios.post('/list/get-all-month-details',{
            uid:user._id
        })
        if(!data.err) {
            let list=[]
            data.forEach(item=>{
                list.push({
                  category:"spent",
                  month:toMonthWords(new Date(item.createdAt).getMonth())+" "+new Date(item.createdAt).getFullYear(), 
                  amount:item.spent, 
                  description:"limit : "+(item.limit),
                  balance:"Balance : "+(item.limit-item.spent),
                  createdAt:false
                })
            })
            setMonthDetails(list)
            console.log(data)

        }
    }fetchData();
},[])
  return (
    <div className="Analysis">
      <div className="anls-container">
        <div className="anls-banner-sec">
        <div className="anls-banner-container">
          <div className="anls-banner">
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="bar"
              height={295}
              width={500}
            />
          </div>

        </div>
        </div>
        <div className="anls-month-list">
        <ListComp list={monthDetails}></ListComp>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
