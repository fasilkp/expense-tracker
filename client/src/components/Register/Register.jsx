import React from 'react'
import '../Login/Login.css'
import LoginImage from '../../images/login-image.png'
function Register() {
  return (
    <div className="Login">
        <div className="login-img">
            <img src={LoginImage} alt="" />
        </div>
        <div className="login-section">
            <div className="login-container">
                <div className="login-header">
                    <h2>Login To Expense Tracker</h2>
                </div>
                <div className="login-caption">
                    <span>Name</span>
                </div>
                <div className="login-input">
                    <input type="text" placeholder='Enter Name' />
                </div>
                <div className="login-caption">
                    <span>Email</span>
                </div>
                <div className="login-input">
                    <input type="email" placeholder='Enter Email' />
                </div>
                <div className="login-caption">
                    <span>Monthly Limit</span>
                </div>
                <div className="login-input">
                    <input type="number" placeholder='Enter Monthly Limit' />
                </div>
                <div className="login-caption">
                    <span>Password</span>
                </div>
                <div className="login-input">
                    <input type="password" placeholder='Enter Password' />
                </div>
                <div className="login-btn">
                    <button>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register