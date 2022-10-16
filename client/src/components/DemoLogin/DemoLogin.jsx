import React, {useContext, useState} from 'react'
import '../Login/Login.css'
import LoginImage from '../../images/login-image.png'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import AuthContext from '../../context/AuthContext'
import Loader from '../Loader/Loader'
function DemoLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {updateLogin} = useContext(AuthContext)
    const [load, setLoad]=useState(false)
    const navigate=useNavigate();
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const demoLogin = async e => {
        e.preventDefault();
        setLoad(true)
            const user = await Axios.post("/auth/login", { email:"demo@gmail.com", password:"123456" });
            updateLogin();
            if (user.data.login) {
                updateLogin();
                window.location.href="/"
            }
            else {
                alert(user.data.message);
            }
        setLoad(false)
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setLoad(true)
        if (email !== "" || password.length > 6) {
            const user = await Axios.post("/auth/login", { email, password });
            updateLogin();
            
            if (user.data.login) {
                updateLogin();
                window.location.href="/"
            }
            else {
                alert(user.data.message);
            }
        }
        setLoad(false)
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
                        <b>OR</b>
                        <button className='demo-login' onClick={demoLogin}>Demo Login</button>

                    </div>
                </form>
                <Link to='/register' className="redirect-login">Don't have account? Regitser?</Link>
            </div>
            {
                load && <Loader/>
            }
        </div>
    )
}

export default DemoLogin