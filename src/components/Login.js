import React, { useState } from 'react';
import './css/Login.css';
import loginImage from './images/yawan-sahu-gc0wVJq4M8Y-unsplash.jpg';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Login() {
  const [emailId, setEmailId] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const signIn = () => {
    axios
      .post('http://localhost:4000/users/login', {
        email: emailId,
        password: password,
      })
      .then((res) => {
        // console.log(res);
        if (res.data.message === 'Login successful') {
          sessionStorage.setItem('logged_in', 'yes');
          navigate('/');
        } else {
          toast.error('Invalid email or password');
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login-total">
      <ToastContainer />
      <div>
        <img src={loginImage} className="login-image" />
      </div>
      <div className="loginform-content">
        <h1>LOGIN</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          <input
            type="email"
            name="emailid"
            value={emailId}
            placeholder="Email address*"
            className="login-inputs"
            autoComplete="off"
            onChange={(e) => setEmailId(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password*"
            className="login-inputs"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            required
          />
          <button className="login-button">LOGIN</button>
          <p className="login-para">
            Don't have an account?&nbsp;
            <a href="/sign-up" className="login-link">
              Signup Here
            </a>
          </p>
          <p className="login-para">
            <a href="/forgot-pwd" className="login-link">
              Forgot Password ?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
