import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { IoFastFoodSharp } from "react-icons/io5";
import { toDateFormat } from "../../actions/toDateFormat";
import { toMonthWords } from "../../actions/toMonthWords";
import AuthContext from "../../context/AuthContext";
import ListComp from "../ListCompnent/ListCom";
import "./SpendList.css";
function SpendList() {
  const { user } = useContext(AuthContext);
  const [list, setList] = useState([]);
  const currentDate = new Date();
  const currentMonth=toMonthWords(currentDate.getMonth())+currentDate.getFullYear()
  const [month, setMonth] = useState(currentMonth);
  const [totalAmount, setTotalAmount] = useState(0);
  const months = [
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
    "dec",
  ];
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.post("/list/get-items", {
        uid: user._id,
        month: month,
      });
      let newList = [];
      let prevDate = new Date(data.allItems[0]?.createdAt);
      setTotalAmount(0);
      data.allItems.forEach((item, index) => {
        setTotalAmount((totalAmount) => totalAmount + item.amount);
        let date = new Date(item.createdAt);
        if (index == 0) {
          newList.push({
            ...data.allItems[0],
            newDate: true,
            date: toDateFormat(prevDate),
          });
        } else if (
          date.getDate() != prevDate.getDate() ||
          date.getMonth() != prevDate.getMonth() ||
          date.getFullYear() != prevDate.getFullYear()
        ) {
          prevDate = date;
          newList.push({ ...item, newDate: true, date: toDateFormat(date) });
        } else {
          newList.push({ ...item, newDate: false });
        }
      });
      setList(newList);
    }
    fetchData();
  }, [month]);
  return (
    <div className="SpendList">
      <div className="spend-list-container">
        <div className="list-header">
          <div>
            <b>Month</b>
            <select
              value={month}
              className="list-month-input"
              onChange={(e) => setMonth(e.target.value)}
            >
              {months.map((item, index) => {
                return <option value={item + 2022}>{item}/2022</option>;
              })}
            </select>
          </div>
          <div>
            <b>Total: </b>
            <label> &nbsp; {totalAmount}</label>
          </div>
        </div>
        <ListComp list={list} />
      </div>
    </div>
  );
}

export default SpendList;
