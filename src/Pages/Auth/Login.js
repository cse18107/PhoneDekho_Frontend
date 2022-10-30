import React from "react";
import "./Login.css";
import logo from "../../assets/images/wob.png";
import pimage from "../../assets/images/logo_p.png";
import mail from "../../assets/icons/mail.png";
import password from "../../assets/icons/password.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate('/dashboard');
  }

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-container-left">
          <div className="login-left-content">
            <img src={logo} alt="phonedekho.com" />
          </div>
        </div>
        <div className="login-container-right">
          <div className="login-right-content">
            <div className="login-form">
              <div className="div-pimg">
                <img src={pimage} alt="logo" className="pimage" />
              </div>
              <div className="form-input-div">
                <div className="mail-image">
                  <img src={mail} alt="mail" />
                </div>
                <input placeholder="Email" className="form-input" />
              </div>
              <div className="form-input-div">
                <div className="password-image">
                  <img src={password} alt="password" />
                </div>
                <input placeholder="Password" className="form-input" type={"password"} />
              </div>
              <button className="login-btn" onClick={loginHandler}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
