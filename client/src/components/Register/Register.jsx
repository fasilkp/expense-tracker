import React, { useState } from "react";
import "../Login/Login.css";
import LoginImage from "../../images/login-image.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [monthlyLimit, setMonthlyLimit] = useState(0);
    const [load, setLoad]=useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoad(true)
        if ( name !== "" || email !== "" || password.length > 6 || monthlyLimit !== 0 ) {

            const user = await axios.post("/auth/register", {
                name,
                email,
                password,
                monthlyLimit
            });
            if (user.data.register) {
                window.location.href = "/";
            } else {
                alert(user.data.message);
            }
        } else {
            console.log("not working");
        }
        setLoad(false)
    };
    const handleInput = (e, input) => {
        switch (input) {
            case "name":
                setName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "monthlyLimit":
                setMonthlyLimit(e.target.value);
                break;
        }
    };
    return (
        <div className="Login">
            <div className="login-img">
                <img src={LoginImage} alt="" />
            </div>
            <div className="login-section">
                <form onSubmit={handleSubmit} className="login-container">
                    <div className="login-header">
                        <h2>Login To Expense Tracker</h2>
                    </div>
                    <div className="login-caption">
                        <span>Name</span>
                    </div>
                    <div className="login-input">
                        <input
                            type="text"
                            placeholder="Enter Name"
                            onChange={(e) => handleInput(e, "name")}
                        />
                    </div>
                    <div className="login-caption">
                        <span>Email</span>
                    </div>
                    <div className="login-input">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            onChange={(e) => handleInput(e, "email")}
                        />
                    </div>
                    <div className="login-caption">
                        <span>Monthly Limit</span>
                    </div>
                    <div className="login-input">
                        <input
                            type="number"
                            placeholder="Enter Monthly Limit"
                            onChange={(e) => handleInput(e, "monthlyLimit")}
                        />
                    </div>
                    <div className="login-caption">
                        <span>Password</span>
                    </div>
                    <div className="login-input">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            onChange={(e) => handleInput(e, "password")}
                        />
                    </div>
                    <div className="login-btn">
                        <button
                            onClick={handleSubmit}
                            disabled={
                                name === "" ||
                                email === "" ||
                                password.length < 6 ||
                                monthlyLimit == 0
                            }
                        >
                            {" "}
                            Login
                        </button>
                    </div>
                </form>
                <Link to="/login" className="redirect-login">
                    Already have account? Login
                </Link>
            </div>
            {
                load && <Loader/>
            }
        </div>
    );
}

export default Register;
