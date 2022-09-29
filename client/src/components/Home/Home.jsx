import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { BiRupee } from "react-icons/bi";
import AuthContext from "../../context/AuthContext";
import ListComp from "../ListCompnent/ListCom";
import { toDateFormat } from "../../actions/toDateFormat";
import { toMonthWords } from "../../actions/toMonthWords";
import "./Home.css";
import EditMonthlyLimit from "../EditMonthlyLimit/EditMonthlyLimit";
function Home() {
    const { user } = useContext(AuthContext);
    const [list, setList] = useState([]);
    const currentDate=new Date()
    const [monthDetails, setMonthDetails]=useState({})
    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.post("/list/get-recent-items", {
                uid: user._id,
            });
            let newList = [];
            let prevDate = new Date(data?.allItems[0]?.createdAt);
            data?.allItems?.forEach((item, index) => {
                let date = new Date(item.createdAt);
                if(index==0){
                     newList.push({ ...data.allItems[0], newDate: true, date:toDateFormat(prevDate) });
                }
                else if (date.getDate() != prevDate.getDate() ||
                        date.getMonth() != prevDate.getMonth() ||
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
            await axios.post('/list/get-month-details',
            {
                uid:user._id, 
                month:toMonthWords(currentDate.getMonth())+currentDate.getFullYear(),
                monthlyLimit:user.monthlyLimit
            }).then((res)=>{
                console.log(res)
                setMonthDetails(res.data.monthDetails)
            })
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
                        <h1>{monthDetails?.spent}/ {monthDetails?.limit}</h1>
                    </div>
                    <label>Balance</label>
                    <div className="home-amount">
                        <BiRupee />
                        <h3>{monthDetails?.limit - monthDetails?.spent}</h3>
                    </div>
                    <label>Month</label>
                    <div className="home-month">
                        <h3> {toMonthWords(currentDate.getMonth())+" - "+currentDate.getFullYear()}</h3>
                    </div>
                </div>
                <div className="home-recent">
                    <ListComp list={list} />
                </div>
                {/* <EditMonthlyLimit/> */}
            </div>
        </div>
    );
}

export default Home;
