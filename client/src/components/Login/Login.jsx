import React from 'react'
import './Login.css'
import LoginImage from '../../images/login-image.png'
function Login() {
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
                    <caption>Email</caption>
                </div>
                <div className="login-input">
                    <input type="text" placeholder='Enter Email' />
                </div>
                <div className="login-caption">
                    <caption>Email</caption>
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

export default Login