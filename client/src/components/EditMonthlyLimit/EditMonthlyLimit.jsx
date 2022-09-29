import React from 'react'
import '../AddExpense/AddExpense.css'

function EditMonthlyLimit({handleClose}) {
  return (
    <div className="AddExpense">
    <form className="add-container">
      <div className="add-header">
        <h2>Edit Month Limit</h2>
      </div>
      <div className="add-label">Amount</div>
      <div className="add-input">
        <input type="Number" placeholder="Enter Month Limit" />
      </div>
      <div className="add-btn">
        <button onClick={handleClose}>Close</button>
        <button>Add</button>
      </div>
    </form>
   {/* {
      load.submit && <Loader />
    }  */}
  </div>
  )
}

export default EditMonthlyLimit