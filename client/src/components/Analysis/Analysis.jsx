import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { BiRupee } from "react-icons/bi";
import { HiPencil } from "react-icons/hi";
import {
  amountListBalance,
  monthListBalance,
} from "../../actions/analysisAlign";
import AuthContext from "../../context/AuthContext";
import ListComp from "../ListCompnent/ListCom";
import "./Analysis.css";
function Analysis() {
  const { user } = useContext(AuthContext);
  const [monthDetails, setMonthDetails] = useState([]);
  const [monthList, setMonthList] = useState([]);
  const [spendList, setSpendList] = useState([]);
  const [balanceList, setBalanceList] = useState([]);
  const [limitList, setLimitList] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);
  const [totalLimit, setTotalLimit] = useState(0);
  const [saveStyleId, setSaveStyleId]=useState("")
  const state = {
    series: [
      {
        name: "Spent",
        data: spendList,
      },
      {
        name: "Limit",
        data: limitList,
      },
      {
        name: "Balance",
        data: balanceList,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        foreColor: "#fff",
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
        categories: monthList,
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
            return "₹ " + val;
          },
        },
      },
    },
  };
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.post("/list/get-all-month-details", {
        uid: user._id,
      });
      if (!data.err) {
        let list = [];
        let spList = [];
        let baList = [];
        let mntList = [];
        let ltList = [];
        let totSpent=0
        let totLimit=0
        data.forEach((item) => {
          totSpent=totSpent+item.spent;
          totLimit=totLimit+item.limit;
          list.push({
            category: "spent",
            month: item.month,
            amount: item.spent,
            description: "limit : " + item.limit,
            balance: "Balance : " + (item.limit - item.spent),
            createdAt: false,
          });
          spList.push(item.spent);
          baList.push(item.limit - item.spent);
          mntList.push(item.month);
          ltList.push(item.limit);
        });
        setSpendList(amountListBalance(spList.reverse()));
        setBalanceList(amountListBalance(baList.reverse()));
        setLimitList(amountListBalance(ltList.reverse()));
        setMonthList(monthListBalance(mntList.reverse()));
        setMonthDetails(list);
        setTotalLimit(totLimit)
        setTotalSpent(totSpent)
        if(totLimit-totalSpent<0) setSaveStyleId("save-down")
        else setSaveStyleId("")
      }
    }
    fetchData();
  }, []);
  const str="save-down"
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
        <div className="anls-month-details">
          <div className="anls-mt spent">
            <h2>Total Spent</h2>
            <b><BiRupee/> {totalSpent}</b>
          </div>
          <div className="anls-mt save" id={saveStyleId}>
            <h2>Total Saved</h2>
            <b><BiRupee/> {totalLimit-totalSpent}</b>
          </div>
        </div>
        <div className="anls-month-details">
          <div className="anls-mt-limit">
            <h3>Default Monthly Limit</h3>
            <b><BiRupee/> {user?.monthlyLimit} <HiPencil class="limit-edit-pencil"/></b>
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
