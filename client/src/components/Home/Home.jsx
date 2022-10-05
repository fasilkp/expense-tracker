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
import { HiPencil } from "react-icons/hi";
function Home() {
    const { user } = useContext(AuthContext);
    const [list, setList] = useState([]);
    const currentDate=new Date()
    const [monthDetails, setMonthDetails]=useState({})
    const[showEditLimit, setShowEditLimit]=useState(false)
    const [reload, setRelaod]=useState(false)
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
            setList(newList);
            await axios.post('/list/get-month-details',
            {
                uid:user._id, 
                month:toMonthWords(currentDate.getMonth())+currentDate.getFullYear(),
                monthlyLimit:user.monthlyLimit
            }).then((res)=>{
                setMonthDetails(res.data.monthDetails)
            })
        }
        fetchData();
    }, [reload]);
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
                        <h1>{monthDetails?.spent}/{monthDetails?.limit}</h1>
                        <button onClick={()=>setShowEditLimit(true)}>Edit <HiPencil/></button>
                    </div>
                    <label>Balance</label>
                    <div className="home-amount">
                        <BiRupee />
                        <h2>{monthDetails?.limit - monthDetails?.spent}</h2>
                    </div>
                    <label>Month</label>
                    <div className="home-month">
                        <h3> &nbsp;&nbsp; {toMonthWords(currentDate.getMonth())+" - "+currentDate.getFullYear()}</h3>
                    </div>
                </div>
                <div className="home-recent">
                    <ListComp list={list} />
                </div>
                {showEditLimit  && <EditMonthlyLimit handleClose={()=>setShowEditLimit(false)} reloadPage={()=>setRelaod(!reload)}/>}
            </div>
        </div>
    );
}

export default Home;
