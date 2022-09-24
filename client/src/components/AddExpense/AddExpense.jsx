import React from "react";
import "./AddExpense.css";
import Select from "react-select";
import { HiCash, HiCollection, HiHome, HiUser } from "react-icons/hi";
import { MdEmojiTransportation } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { BsCollectionPlayFill } from "react-icons/bs";

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
          value: "entertaintment",
          text: 'Entertaintment',
          icon: <BsCollectionPlayFill/> 
        },
        {
          value: "food",
          text: 'Food',
          icon: <IoFastFood/> 
        },
        {
          value: "rent",
          text: 'Rent',
          icon: <HiCash/> 
        },
        {
          value: "transport",
          text: 'Transport',
          icon: <MdEmojiTransportation/> 
        },
        {
          value: "emi",
          text: 'EMI',
          icon: <HiCash/> 
        },
        {
          value: "other",
          text: 'Other',
          icon: <HiCollection/> 
        },
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
            placeholder="Select Option"
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
