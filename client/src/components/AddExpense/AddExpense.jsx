import React from "react";
import "./AddExpense.css";
import Select from "react-select";
import { HiCollection, HiHome, HiUser } from "react-icons/hi";

function AddExpense() {
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
          icon: <HiUser/> 
        },
        {
          value: "food",
          text: 'Food',
          icon: <HiHome/> 
        },
        {
          value: "rent",
          text: 'Rent',
          icon: <HiCollection/> 
        },
        {
          value: "transport",
          text: 'Transport',
          icon: <HiCollection/> 
        },
        {
          value: "emi",
          text: 'EMI',
          icon: <HiCollection/> 
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
          <button>Close</button>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddExpense;
