import React, {useContext} from 'react'
import './Login.css'
import LoginImage from '../../images/login-image.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import AuthContext from '../../context/AuthContext'
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {updateLogin} = useContext(AuthContext)
    const navigate=useNavigate();
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleSubmit = async e => {
        e.preventDefault();
        if (email !== "" || password.length > 6) {
            const user = await Axios.post("/auth/login", { email, password });
            console.log(user.data.message);
            if (user.data.login) {
                updateLogin();
                navigate('/')
            }
            else {
                alert(user.data.message);
            }
        }
    }
    return (
        <div className="Login">
            <div className="login-img">
                <img src={LoginImage} alt="" />
            </div>
            <div className="login-section">
                <form className="login-container" onSubmit={handleSubmit}>
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
                        <button onClick={handleSubmit}>Login</button>
                    </div>
                </form>
                <Link to='/register' className="redirect-login">Don't have account? Regitser?</Link>
            </div>
        </div>
    )
}

export default Login