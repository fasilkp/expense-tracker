import axios from 'axios';
import React, { useContext ,useState} from 'react'
import AuthContext from '../../context/AuthContext'
import '../AddExpense/AddExpense.css'
import Loader from '../Loader/Loader';

function EditMonthlyLimit({handleClose}) {
  const {user, reloadPage,setReloadPage}=useContext(AuthContext);
  const [monthlyLimit, setMonthlyLimit]=useState(0);
  const [load, setLoad]=useState(false)
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoad(true)
    await axios.post('/list/edit-month-limit',{
      uid:user._id,
      monthlyLimit:parseInt(monthlyLimit)
    }).then(res=>{
      if(res.data.err) alert("Edit limit failed") 
      else {
        setReloadPage(!reloadPage)
        handleClose()
         }
    })
    setLoad(false)
  }
  return (
    <div className="AddExpense">
    <form className="add-container" onSubmit={handleSubmit}>
      <div className="add-header">
        <h2>Edit Month Limit</h2>
      </div>
      <div className="add-label">Amount</div>
      <div className="add-input">
        <input type="number" placeholder="Enter Month Limit"
        value={monthlyLimit} onChange={(e)=>setMonthlyLimit(e.target.value)}
        onClick={(e)=>e.target.select()}  />
      </div>
      <div className="add-btn">
        <button type='reset' onClick={handleClose}>Close</button>
        <button type='submit' disabled={monthlyLimit===0 || monthlyLimit==""}>Add</button>
      </div>
    </form>
   {
      load && <Loader />
    } 
  </div>
  )
}

export default EditMonthlyLimit