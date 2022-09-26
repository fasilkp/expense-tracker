import React from 'react'
import './Login.css'
import LoginImage from '../../images/login-image.png'
import { HiAnnotation } from 'react-icons/hi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Login() {
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const handleEmail=e=>{
        setEmail(e.target.value)
    }
    const handlePassword=e=>{
        setPassword(e.target.value)
    }
    console.log(email, password)
  return (
    <div className="Login">
        <div className="login-img">
            <img src={LoginImage} alt="" />
        </div>
        <div className="login-section">
            <form className="login-container">
                <div className="login-header">
                    <h2>Login To Expense Tracker</h2>
                </div>
                <div className="login-caption">
                    <span>Email</span>
                </div>
                <div className="login-input">
                    <input type="text" placeholder='Enter Email' onChange={handleEmail} />
                </div>
                <div className="login-caption">
                    <span>Password</span>
                </div>
                <div className="login-input">
                    <input type="password" placeholder='Enter Password' onChange={handlePassword} />
                </div>
                <div className="login-btn">
                    <button>Login</button>
                </div>
            </form>
            <Link to='/register' className="redirect-login">Don't have account? Regitser?</Link>
        </div>
    </div>
  )
}

export default Login