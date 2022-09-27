import React from "react";
import "./AddExpense.css";
import Select from "react-select";
import { HiCollection } from "react-icons/hi";
import { IoFastFood } from "react-icons/io5";
import { BsCashCoin} from "react-icons/bs";
import { GiPopcorn } from "react-icons/gi";
import { FaCartArrowDown,FaRegCalendarAlt } from "react-icons/fa";
import { RiTaxiFill } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loader from '../Loader/Loader'

function AddExpense({setShowAddExpense}) {
  const {user}=useContext(AuthContext)
  const [load, setLoad]=useState({
    submit:false,
  })
  const navigate=useNavigate()
  const data = [
    {
          value: "rent",
          text: 'Rent',
          icon: <BsCashCoin className="category-icon rent"/> 
        },
        {
          value: "food",
          text: 'Food',
          icon: <IoFastFood className="category-icon food"/> 
        },
        {
          value: "entertainment",
          text: 'Entertainment',
          icon: <GiPopcorn className="category-icon entertainment"/> 
        },
        {
          value: "transport",
          text: 'Transport',
          icon: <RiTaxiFill className="category-icon transport"/> 
        },
        {
          value: "emi",
          text: 'EMI',
          icon: <FaRegCalendarAlt className="category-icon emi"/> 
        },
        {
          value: "shopping",
          text: 'Shopping',
          icon: <FaCartArrowDown className="category-icon shopping"/> 
        },
        {
          value: "other",
          text: 'Other',
          icon: <HiCollection className="category-icon other"/> 
        }
      ]
      const [category, setCategory]=useState(null)
      const [amount, setAmount]=useState(0)
      const [description, setDescription]=useState("")
      const handleCategory=(e)=>setCategory(e.target.value)
      const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoad({...load, submit:true})
        if(category!="" && description!="" && amount>0){
          const result=await axios.post('/list/add-item',{
            amount, description, category:category.value, uid:user._id
          })
          if(result.data.err) alert("add item failed");
          else {
            setShowAddExpense(false)
            window.location.reload()
          }
          setLoad({...load, submit:false})
        }
      }
  return (
    <div className="AddExpense">
      <form className="add-container" onSubmit={handleSubmit}>
        <div className="add-header">
          <h2>Add Expense</h2>
        </div>
        <div className="add-label">
          Category
        </div>
        <div className="add-input">
        <Select
            value={category}
            onChange={setCategory}
            isSearchable={false}
            className="add-select-box"
            readOnly={true}
            placeholder="Select Category"
            options={data}
            getOptionLabel={(e) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                {e.icon}
                <span style={{ marginLeft: 5 }}>{e.text}</span>
              </div>
            )}
          />
        </div>
        <div className="add-label">Description</div>
        <div className="add-input">
          <input type="text" placeholder="Enter description"
          onChange={(e)=>setDescription(e.target.value)} />
        </div>
        <div className="add-label">Amount</div>
        <div className="add-input">
          <input type="number" placeholder="Enter Amount"
          onChange={(e)=>setAmount(e.target.value)} />
        </div>
        <div className="add-btn">
          <button onClick={()=>setShowAddExpense(false)}>Close</button>
          <button onClick={handleSubmit}>Add</button>
        </div>
      </form>
      {
        load.submit && <Loader />
      }
    </div>
  );
}

export default AddExpense;
