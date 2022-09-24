import React from "react";
import "./AddExpense.css";
import Select from "react-select";
import { HiCollection } from "react-icons/hi";
import { IoFastFood } from "react-icons/io5";
import { BsCashCoin} from "react-icons/bs";
import { GiPopcorn } from "react-icons/gi";
import { FaCartArrowDown,FaRegCalendarAlt } from "react-icons/fa";
import { RiTaxiFill } from "react-icons/ri";

function AddExpense({setShowAddExpense}) {
    // const customStyles = {
    //     control: base => ({
    //       ...base,
    //       height: 50,
    //       minHeight: 50
    //     })
    //   };
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
          value: "entertaintment",
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
  return (
    <div className="AddExpense">
      <div className="add-container">
        <div className="add-header">
          <h2>Add Expense</h2>
        </div>
        <div className="add-label">
          Category
        </div>
        <div className="add-input">
        <Select
            // styles={customStyles}
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
        <div className="add-label">Amount</div>
        <div className="add-input">
          <input type="number" placeholder="Enter Amount" />
        </div>
        <div className="add-label">Description</div>
        <div className="add-input">
          <input type="text" placeholder="Enter description" />
        </div>
        <div className="add-btn">
          <button onClick={()=>setShowAddExpense(false)}>Close</button>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddExpense;
