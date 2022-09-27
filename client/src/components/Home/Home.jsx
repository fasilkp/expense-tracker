import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { BiRupee } from "react-icons/bi";
import AuthContext from "../../context/AuthContext";
import ListComp from "../ListCompnent/ListCom";
import { toDateFormat } from "../../actions/toDateFormat";
import "./Home.css";
function Home() {
    const { user } = useContext(AuthContext);
    const [list, setList] = useState([]);
    const [totalAmount, setTotalAmount]=useState(0)
    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.post("/list/get-recent-items", {
                uid: user._id,
            });
            let newList = [];
            let prevDate = new Date(data.allItems[0].createdAt);
            setTotalAmount(0)
            data.allItems.forEach((item, index) => {
                setTotalAmount(totalAmount=>totalAmount+item.amount);
                let date = new Date(item.createdAt);
                if(index==0){
                     newList.push({ ...data.allItems[0], newDate: true, date:toDateFormat(prevDate) });
                }
                else if (date.getDate() != prevDate.getDate() &&
                        date.getMonth() != prevDate.getMonth() &&
                        date.getFullYear() != prevDate.getFullYear() ) {
                            prevDate=date;
                            newList.push({...item, newDate:true, date:toDateFormat(date)})
                }
                else{
                    newList.push({...item, newDate:false})
                }
            });
            console.log(newList)
            setList(newList);
        }
        fetchData();
    }, []);
    return (
        <div className="Home">
            <div className="home-container">
                <div className="home-head">
                    <label>Hello,</label>
                    <strong>{user?.name}</strong>
                </div>
                <div className="home-banner">
                    <label>Spent</label>
                    <div className="home-amount first">
                        <BiRupee />
                        <h1>{totalAmount}/ {user?.monthlyLimit}</h1>
                    </div>
                    <label>Balance</label>
                    <div className="home-amount">
                        <BiRupee />
                        <h3>{user?.monthlyLimit - totalAmount}</h3>
                    </div>
                    <label>Month</label>
                    <div className="home-month">
                        <h3> sep - 2022</h3>
                    </div>
                </div>
                <div className="home-recent">
                    <ListComp list={list} />
                </div>
            </div>
        </div>
    );
}

export default Home;
